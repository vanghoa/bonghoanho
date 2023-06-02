'use strict';

// binding method
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const $create = document.createElement.bind(document);
const $createcomment = document.createComment.bind(document);
const cos = Math.cos.bind(Math);
const sin = Math.sin.bind(Math);
const body = document.body;

// const
const TWO_PI = 2 * Math.PI;
const clock = ['/=====\\', '|.....|', '|.....|', '\\=====/'];
const div_welcome = $('welcome---to---ngu---trong---phong---thu');
const style_ = $('style');
const start_ = $('#b_14');
const allparas = $$('.para');

// locals
const divs = [];
const cmts = [];
const clocks = [];
let template = [];
let transition = [];
let template_cmt = [];
let elevation_ = 1;
let transready = false;
let genready = true;
let transcount = 0;
const max_height = 100;

// template para
let length = 3;
let height = 40;
let sharpness = 10;
let gap_ = 3;
let gapicon_ = '-';
let highestheight = 50;
let elevation = 1;
let delay_ = 200;

//control
const control = {
    long(a) {
        length = a;
        return this;
    },
    high(a) {
        height = a;
        return this;
    },
    sharp(a) {
        sharpness = a;
        return this;
    },
    gap(a) {
        gap_ = a;
        return this;
    },
    gapicon(a) {
        gapicon_ = a;
        return this;
    },
    highest(a) {
        highestheight = a;
        return this;
    },
    ele(a) {
        elevation = a;
        return this;
    },
    init: template_generate,
};
const long = control.long.bind(control);
const high = control.high.bind(control);
const sharp = control.sharp.bind(control);
const gap = control.gap.bind(control);
const gapicon = control.gapicon.bind(control);
const highest = control.highest.bind(control);
const ele = control.ele.bind(control);

// setup html
const frag = document.createDocumentFragment();

for (let i = 0; i <= 59; i++) {
    let div = $create('div');
    div.upper = div.upper_ = div.below = div.below_ = '';
    div.id = '';
    div.className = '';
    div.render = function ({ upper, below }) {
        this.setAttribute('id', below);
        this.setAttribute('class', upper);
    };
    frag.prepend(div);
    divs.unshift(div);
}

for (let a = 0; a <= 10; a++) {
    let cmt = $createcomment(
        (() => {
            let cmt = '';
            for (let i = 0; i <= max_height; i++) {
                if (i == 5) {
                    cmt += '0';
                } else if (i == 16) {
                    cmt += 'B';
                } else {
                    cmt += '.';
                }
            }
            return cmt;
        })()
    );
    frag.prepend(cmt);
    cmts.unshift(cmt);
}

for (let a = 0; a < 4; a++) {
    let cmt = $createcomment('');
    frag.prepend(cmt);
    clocks.unshift(cmt);
}

body.prepend(div_welcome, frag);
Object.freeze(divs);

// animation loop
let myrequest;
let stop = false;
let count = 0;

async function animation() {
    if (!genready) {
        render_first(template[count]);
        render_comment();
        render_toptobot();
        if (++count == template.length) {
            count = 0;
        }
    }
    await wait();
    if (!stop) {
        myrequest = requestAnimationFrame(animation);
    }
}
template_generate();
clock_generate();

// function
function render_toptobot() {
    for (let i = 1; i <= 59; i++) {
        divs[i].render(divs[i - 1]);
        divs[i].upper_ = divs[i - 1].upper;
        divs[i].below_ = divs[i - 1].below;
    }
    for (let i = 1; i <= 59; i++) {
        divs[i].upper = divs[i].upper_;
        divs[i].below = divs[i].below_;
    }
}

function template_generate() {
    genready = true;
    noise.seed(Math.random());
    //let length = 10;
    let belowspc = '';
    for (let a = 1; a <= elevation; a++) {
        belowspc += '()';
    }
    let gaphalf = Math.ceil(gap_ / 2);
    let add_height = highestheight - height;
    let max = {
        vl: 0,
        index: 0,
    };
    let min = {
        vl: height,
        index: 0,
    };
    let value_arr = [];
    template = [];
    transition = [];
    template_cmt = [];
    // noise generation
    for (let a = 0; a < TWO_PI; a += (TWO_PI - 0.01) / length) {
        let xoff = cos(a) + 1;
        let yoff = sin(a) + 1;
        let vl = map(
            noise.perlin2(xoff * sharpness, yoff * sharpness),
            -1,
            1,
            0,
            height
        );
        value_arr.push(vl);
        if (vl > max.vl) {
            max.vl = vl;
            max.index = value_arr.length - 1;
        }
        if (vl < min.vl) {
            min.vl = vl;
            min.index = value_arr.length - 1;
        }
    }
    // template generation
    for (let a = 0; a < value_arr.length; a++) {
        let line = '';
        for (let b = 0; b <= value_arr[a]; b++) {
            line += '-';
        }
        template.push({ upper: line, below: belowspc, u: value_arr[a] });
    }
    // extra height
    for (let a = 1; a <= add_height; a++) {
        template[max.index].upper += '-';
    }
    template[max.index].u += add_height;
    //template[min.index].below = belowspc.slice(0, -3);
    let length_ = Math.ceil(length / 4);
    // transition to baseline generation
    for (
        let a = (value_arr[0] * (length_ - 1)) / length_;
        a > 0;
        a -= value_arr[0] / length_
    ) {
        let line = '';
        for (let b = 0; b <= a; b++) {
            line += '-';
        }
        template.push({ upper: line, below: belowspc, u: a });
        template.unshift({ upper: line, below: belowspc, u: a });
    }
    // gap generation
    for (let a = 1; a <= gaphalf; a++) {
        template.push({ upper: gapicon_, below: belowspc, u: 0 });
        template.unshift({ upper: gapicon_, below: belowspc, u: 0 });
    }
    // template_cmt
    template_cmt_generate();
    // transition elevation
    let diff_ele = Math.abs(elevation - elevation_);
    if (diff_ele !== 0) {
        let ele_small = elevation < elevation_ ? elevation : elevation_;
        let ele_length = 10;

        for (let a = 1; a <= ele_length; a++) {
            let line = '';
            for (let b = 1; b <= ele_small; b++) {
                line += '()';
            }
            for (let b = 1; b <= diff_ele * (a / ele_length); b++) {
                line += '()';
            }
            transition.push(line);
        }

        if (elevation - elevation_ < 0) {
            transition.reverse();
        }

        clock_generate();
        transready = true;
        elevation_ = elevation;
    }
    count = 0;
    genready = false;
}

function template_cmt_generate() {
    for (let i = 0; i <= template.length - 1; i++) {
        let temp = [];
        let { slope: m, intercept: c } = e_line(
            { x: 14 + 2 * elevation, y: 0 },
            { x: template[i].u + 14 + 2 * elevation, y: 10 }
        );
        let { slope: m_, intercept: c_ } = e_line(
            { x: 5, y: 0 },
            { x: 4 + 2 * elevation, y: 10 }
        );

        for (let y = 0; y <= cmts.length - 1; y++) {
            let tempcmt = '';
            let x;
            if (m === Infinity) {
                x = 14 + 2 * elevation;
            } else {
                x = Math.round((y - c) / m);
            }
            let x_;
            if (i % 2 == 0) {
                x_ = 5;
            } else {
                x_ = Math.round((y - c_) / m_);
            }
            for (let i = 0; i <= max_height; i++) {
                if (i == x) {
                    tempcmt += 'B';
                } else if (i == x_) {
                    tempcmt += '0';
                } else {
                    tempcmt += '.';
                }
            }
            temp.push(tempcmt);
        }
        template_cmt.push(temp);
    }
}

function clock_generate() {
    for (let a = 0; a < clocks.length; a++) {
        let cmt = '';
        for (let i = 0; i < 2; i++) {
            cmt += '.';
        }
        cmt += clock[a];
        for (let i = clock[a].length + 3; i < 12 + 2 * elevation; i++) {
            cmt += a == 1 ? '>' : '.';
        }
        cmt += clock[a];
        for (
            let i = clock[a].length + 11 + 2 * elevation;
            i <= max_height;
            i++
        ) {
            cmt += '.';
        }
        clocks[a].nodeValue = cmt;
    }
}

function dung() {
    stop = true;
}

function render_first({ upper, below }) {
    divs[0].upper = upper;
    if (transready) {
        divs[0].below = transition[transcount++];
        if (transcount > transition.length - 1) {
            transready = false;
            transcount = 0;
        }
    } else {
        divs[0].below = below;
    }
    divs[0].render(divs[0]);
}

function render_comment() {
    for (let i = 0; i <= cmts.length - 1; i++) {
        cmts[i].nodeValue = template_cmt[count][i];
    }
}

function e_line(point1, point2) {
    const slope = (point2.y - point1.y) / (point2.x - point1.x);
    const intercept = point1.y - slope * point1.x;

    const equation = {
        slope,
        intercept,
    };

    return equation;
}

function wait() {
    return new Promise((resolve) => setTimeout(resolve, delay_));
}

function map(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function delay(time) {
    delay_ = time;
}

// function for changing the graph
let start_check = 0;
let timeout;

const para_funcs = {
    eat() {
        length += 2;
        sharpness += 5;
    },
    sleep() {
        height += 3;
        highestheight = height * 1.5;
    },
    ent() {
        gap_ += 2;
        elevation += 2;
    },
    shit() {
        gap_ += 3;
        length += 2;
    },
    sex() {
        length += 5;
        gap_ += 3;
    },
    exerc() {
        elevation += 1;
        sharpness += 3;
    },
    fail() {
        length -= 3;
        height -= 2;
        highestheight = height * 1.5;
    },
    poor() {
        length -= 2;
        elevation -= 3;
        gap_ -= 2;
    },
    learnppl() {
        length += 8;
        gap_ -= 2;
    },
    learnown() {
        length -= 8;
        height += 7;
        gap_ += 2;
        highestheight = height * 1.5;
    },
    unlearn() {
        length += 5;
        elevation += 3;
    },
    prac() {
        height += 4;
        highestheight = height * 1.5;
        elevation += 2;
    },
    OT() {
        length -= 7;
        height -= 5;
        highestheight = height * 1.5;
    },
    peer() {
        length -= 8;
        gap_ += 5;
        elevation -= 3;
    },
    finance() {
        gapicon_ = '$maker';
    },
    fren() {
        gapicon_ = '@-@';
    },
    fam() {
        gapicon_ = '<3';
    },
};
for (let i = 0; i < allparas.length; i++) {
    allparas[i].disabled = true;
    allparas[i].onclick = para_onclick;
}

start_.onclick = function () {
    if (start_check++ % 2 == 0) {
        stop = false;
        myrequest = requestAnimationFrame(animation);
        for (let i = 0; i < allparas.length; i++) {
            allparas[i].disabled = false;
        }
    } else {
        stop = true;
        for (let i = 0; i < allparas.length; i++) {
            allparas[i].disabled = true;
        }
    }
};

function para_onclick(e) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        check_(height);
        check_(length);
        check_(sharpness);
        check_(elevation);
        check_(gap_);
        check_(highestheight);

        template_generate();
    }, 1000);
    para_funcs[e.target.getAttribute('para')]();
}

function check_(para) {
    return para < 0 ? 0 : para;
}
