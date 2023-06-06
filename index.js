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
const clock = ['/=====\\', '|.<`>.|', '|.<,>.|', '\\=====/'];
clock.skt = 7;
let slogan, so, numdisplay_init;
// prettier-ignore
{
    slogan = [
        '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        '0000.............................................................................................0000',
        '00..................../)..đo.../).,.điện...........tâm........./).đồ.......máy.....................00',
        '0..................._(/.___.._(/....._.__....._/_._..___....._(/.___..___..._.......................0',
        '0..................(_(_(_)..(_(__(__(/_/.(_...(__(_(_//.(_..(_(_(_)...//.(_(_(_(_/_.................0',
        '00.............................................................................-/..................00',
        '0000.........................................................................(_/.................0000',
        '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    ];
    slogan.reverse();

    so = {
        0: ['._.', '/.\\', '\\_/'],
        1: ['..','/|','.|'],
        2: ['__.','._)','/__'],
        3: ['__.','__)','__)'],
        4: ['...','|_|','..|'],
        5: ['.__','|_.','__)'],
        6: ['._.','|_.','\\_)'],
        7: ['.__','../','./.'],
        8: ['._.','(_)','(_)'],
        9: ['._.','(_|','._/'],
        ':': ['.o.','...','.o.']
    }

    numdisplay_init = [
        '..passion.rate.:.......................................................................current.time.:',
        '.....................................................................................................',
        '..passion.rate.:.',
        '.current.time.:'
    ]
}
const div_welcome = $('welcome---to---đo---điện---tâm---đồ---máy');
const style_ = $('style');
const start_ = $('#b_14');
const allparas = $$('.para');
const sttlog1 = $create('input-log');
const sttlog2 = $create('input-log');
const log1 = sttlog1.setAttribute.bind(sttlog1);
const log2 = sttlog2.setAttribute.bind(sttlog2);

// locals
const divs = [];
const cmts = [];
const clocks = [];
let template = [];
let transition = [];
let template_cmt = [];
let fullhtml = [];
let slogan_ = [];
let currentdate = '00:00:00';
let numberdisplay = [];
let elevation_ = 1;
let transready = false;
let genready = true;
let transcount = 0;
const max_height = 100;
let devtoolopenfirst = true;
let count2 = 0;

// template para
let length = 5;
let height = 40;
let sharpness = 10;
let gap_ = 3;
let gapicon_ = '-';
let eleicon = '<3';
let highestheight = 50;
let elevation = 1;
let delay_ = 100;

// animation loop
let myrequest;
let stop = true;
let count = 0;
let last = 0;
let datecheck = true;

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
const frag2 = document.createDocumentFragment();

for (let i = 0; i <= 59; i++) {
    let div = $create('div');
    div.below = div.below_ = div.id = eleicon;
    div.upper = div.upper_ = div.className = '-';
    div.render = function ({ upper, below }) {
        this.setAttribute('id', below);
        this.setAttribute('class', upper);
    };
    frag.prepend(div);
    divs.unshift(div);
}

(() => {
    let { slope: m4, intercept: c4 } = e_line(
        { x: max_height - 3, y: 10 },
        { x: 24, y: 0 }
    );
    for (let a = 0; a <= 10; a++) {
        let x4 = Math.round((a - c4) / m4);
        let cmt = $createcomment(
            (() => {
                let cmt = '';
                for (let i = 0; i <= max_height; i++) {
                    if (i == 5) {
                        cmt += '0';
                    } else if (i == 16) {
                        cmt += 'B';
                    } else if (i == x4) {
                        cmt += 'K';
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
})();

for (let a = 0; a < 4; a++) {
    let cmt = $createcomment('');
    frag.prepend(cmt);
    clocks.unshift(cmt);
}

for (let a = 0; a < slogan.length; a++) {
    let cmt = $createcomment(slogan[a]);
    frag2.prepend(cmt);
    slogan_.unshift(cmt);
}

for (let a = 0; a < so[0].length; a++) {
    let cmt = $createcomment('');
    numberdisplay.unshift(cmt);
}

{
    let cmt1 = $createcomment(numdisplay_init[0]);
    numberdisplay.unshift(cmt1);
    let cmt2 = $createcomment(numdisplay_init[1]);
    numberdisplay.push(cmt2);
}

render_numberdisplay({ upper: { length: 0 }, below: { length: 0 } });

fullhtml = slogan_
    .concat(
        sttlog1,
        $createcomment(numdisplay_init[1]),
        numberdisplay,
        $createcomment(numdisplay_init[1]),
        sttlog2,
        clocks,
        cmts,
        divs
    )
    .reverse();

body.prepend(div_welcome);
Object.freeze(divs);

async function animation(now) {
    if (!last || now - last >= 1000) {
        last = now;
        datecheck = true;
    }
    if (!genready) {
        render_first(template[count]);
        render_numberdisplay(template[count]);
        render_comment();
        render_toptobot();
        if (++count == template.length) {
            count = 0;
        }
    }
    await wait(delay_);
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
        belowspc += eleicon;
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
    for (let a = 0; a < add_height; a++) {
        template[max.index].upper += '-';
    }
    template[max.index].u += add_height;
    //template[min.index].below = belowspc.slice(0, -3);
    let length_ = Math.ceil(length / 4);
    // transition to baseline generation
    for (
        let a = Math.round((value_arr[0] * (length_ - 1)) / length_);
        a > 0;
        a -= value_arr[0] / length_
    ) {
        let line = '';
        for (let b = 0; b < a; b++) {
            line += '-';
        }
        template.push({ upper: line, below: belowspc, u: a });
        template.unshift({ upper: line, below: belowspc, u: a });
    }
    // gap generation
    for (let a = 1; a <= gaphalf; a++) {
        template.push({
            upper: gapicon_,
            below: belowspc,
            u: gapicon_.length,
        });
        template.unshift({
            upper: gapicon_,
            below: belowspc,
            u: gapicon_.length,
        });
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
                line += eleicon;
            }
            for (let b = 1; b <= diff_ele * (a / ele_length); b++) {
                line += eleicon;
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
            { x: template[i].u + 13 + 2 * elevation, y: 10 }
        );
        let { slope: m_, intercept: c_ } = e_line(
            { x: 5, y: 0 },
            { x: 4 + 2 * elevation, y: 10 }
        );
        let { slope: m4, intercept: c4 } = e_line(
            { x: max_height - 3, y: 0 },
            { x: template[i].u + 21 + 2 * elevation, y: 10 }
        );

        for (let y = 0; y <= cmts.length - 1; y++) {
            let tempcmt = '';
            let x;
            if (m === Infinity) {
                x = 14 + 2 * elevation;
            } else {
                x = Math.round((y - c) / m);
            }
            let x4;
            if (m4 === Infinity) {
                x4 = max_height - 3;
            } else {
                x4 = Math.round((y - c4) / m4);
            }
            let x1 =
                14 +
                2 * elevation +
                Math.round(((x - (14 + 2 * elevation)) / 5) * 3);
            let x2 =
                14 + 2 * elevation + Math.round((x - (14 + 2 * elevation)) / 4);
            let x_;
            if (i % 2 == 0) {
                x_ = 5;
            } else {
                x_ = Math.round((y - c_) / m_);
            }
            for (let i = 0; i <= max_height; i++) {
                if (i == x2) {
                    tempcmt += 'B';
                } else if (i == x_) {
                    tempcmt += '0';
                } else if (i == x1) {
                    tempcmt += 'I';
                } else if (i == x) {
                    tempcmt += 'P';
                } else if (i == x4) {
                    tempcmt += 'K';
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
        for (
            let i = clock[a].length + 3;
            i < 5 + 2 * elevation + clock.skt;
            i++
        ) {
            if (a == 1) {
                cmt += i % 2 == 0 ? '>' : 'o';
            } else if (a == 2) {
                cmt += i % 2 == 0 ? 'A' : '.';
            } else {
                cmt += '.';
            }
        }
        cmt += clock[a];
        for (
            let i = clock[a].length + 4 + 2 * elevation + clock.skt;
            i <= max_height - clock.skt;
            i++
        ) {
            if (a == 1) {
                cmt += i % 2 == 0 ? '>' : 'o';
            } else if (a == 2) {
                cmt += i % 2 == 0 ? 'A' : '.';
            } else {
                cmt += '.';
            }
        }
        cmt += clock[a];
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

function render_numberdisplay({ upper, below }) {
    let tong_ = Math.round(map(upper.length + below.length, 3, 30, 0, 1000));
    let tong = tong_ < 0 ? '0' : tong_.toString();
    let tonglength = tong.length;

    if (datecheck) {
        currentdate = new Date().toLocaleTimeString().split(' ')[0];
        let currentdatelength = currentdate.length;
        for (let a = 1; a <= 8 - currentdatelength; a++) {
            currentdate = '0' + currentdate;
        }
        datecheck = false;
    }

    for (let a = 1; a <= 5 - tonglength; a++) {
        tong = '0' + tong;
    }

    numberdisplay[0].nodeValue =
        numdisplay_init[2] +
        (() => {
            let state;
            if (tong_ < 20) {
                state = '*ur passion dies*';
            } else if (tong_ < 80) {
                state = 'alert!!! critical!!!';
            } else if (tong_ < 300) {
                state = 'concerned!';
            } else if (tong_ < 800) {
                state = 'not great not terrible';
            } else if (tong_ < 1300) {
                state = 'stable (means good)';
            } else if (tong_ < 1700) {
                state = `flourished and healthy!`;
            } else if (tong < 2000) {
                state = `a bit devoted but I'll allow`;
            } else if (tong < 2500) {
                state = `this is out of hand`;
            } else if (tong < 3000) {
                state = `too radical already!`;
            } else {
                state = '*extreme comfort zone*';
            }
            let amax =
                max_height -
                numdisplay_init[2].length -
                numdisplay_init[3].length -
                state.length;
            for (let a = 0; a <= amax; a++) {
                state += '.';
            }
            state += numdisplay_init[3];
            return state;
        })();

    numberdisplay[numberdisplay.length - 1].nodeValue = (() => {
        let cmt = '';
        let state;

        if (tong_ < 800) {
            state = '[make me consume more!]';
        } else if (tong_ < 2000) {
            state = '[aight! keep me just right there!]';
        } else {
            state = `[this is enough please...]`;
        }
        let statelength = state.length;
        state = numdisplay_init[1] + state + numdisplay_init[1];

        for (let a = 0; a <= max_height; a++) {
            cmt += state[max_height + statelength - count2 + 1 + a];
        }

        count2 += count2 >= max_height + statelength + 1 ? -count2 : 1;

        return cmt;
    })();

    for (let a = 1; a < numberdisplay.length - 1; a++) {
        let cmt = '';
        let cmt2 = '';

        for (let b = 0; b < tong.length; b++) {
            cmt += `..${so[tong[b]][a - 1]}`;
        }
        let cmtlength = cmt.length;
        for (let b = 0; b < currentdate.length; b++) {
            cmt2 += `..${so[currentdate[b]][a - 1]}`;
        }
        for (let b = 0; b <= max_height - cmtlength - cmt2.length; b++) {
            cmt += '.';
        }

        numberdisplay[a].nodeValue = cmt + cmt2;
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

function wait(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}

function map(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function delay(time) {
    delay_ = time;
}

function winclose() {
    close();
}

// function for changing the graph
let start_check = 0;
let timeout = null;

const para_funcs = {
    eat_: 0,
    sleep_: 0,
    ent_: 0,
    shit_: 0,
    sex_: 0,
    exerc_: 0,
    fail_: 0,
    poor_: 0,
    learnppl_: 0,
    learnown_: 0,
    unlearn_: 0,
    prac_: 0,
    OT_: 0,
    peer_: 0,
    finance_: 0,
    fren_: 0,
    fam_: 0,
    eat() {
        length += 2;
        sharpness += 5;
        log1('Eat', `x${++this.eat_}`);
    },
    sleep() {
        height += 3;
        gap_ -= 3;
        sharpness -= 2;
        log1('Sleep', `x${++this.sleep_}`);
    },
    ent() {
        gap_ += 2;
        elevation += 2;
        sharpness -= 5;
        log1('Entertainment', `x${++this.ent_}`);
    },
    shit() {
        gap_ += 3;
        length += 2;
        sharpness -= 5;
        log1('Go_shit', `x${++this.shit_}`);
    },
    sex() {
        height += 8;
        length += 5;
        gap_ += 3;
        log1('Have_sex', `x${++this.sex_}`);
    },
    exerc() {
        elevation += 1;
        sharpness += 3;
        log1('Physical_exercise', `x${++this.exerc_}`);
    },
    fail() {
        length -= 3;
        height -= 2;
        gap_ -= 3;
        log2('Fail', `x${++this.fail_}`);
    },
    poor() {
        length -= 2;
        elevation -= 3;
        gap_ -= 7;
        log2('Poverty', `x${++this.poor_}`);
    },
    learnppl() {
        length += 8;
        gap_ -= 5;
        log1('Learn_from_other_people', `x${++this.learnppl_}`);
    },
    learnown() {
        length -= 8;
        height += 7;
        gap_ += 2;
        log1('Learn_on_your_own', `x${++this.learnown_}`);
    },
    unlearn() {
        length += 5;
        elevation += 3;
        log1('Unlearn', `x${++this.unlearn_}`);
    },
    prac() {
        height += 4;
        elevation += 2;
        log1('Repeated_practice', `x${++this.prac_}`);
    },
    OT() {
        length -= 7;
        height -= 5;
        gap_ -= 6;
        log2('OT', `x${++this.OT_}`);
    },
    peer() {
        length -= 8;
        gap_ -= 5;
        elevation -= 3;
        log2('Peer_pressure', `x${++this.peer_}`);
    },
    finance() {
        gapicon_ = '$maker';
        eleicon = '$$';
        gap_ -= 3;
        log1('Finance', `x${++this.finance_}`);
    },
    fren() {
        gapicon_ = '@<@';
        eleicon = '#*';
        log1('Friends', `x${++this.fren_}`);
    },
    fam() {
        gapicon_ = '<3';
        eleicon = '()';
        gap_ -= 3;
        log1('Family', `x${++this.fam_}`);
    },
};
for (let i = 0; i < allparas.length; i++) {
    allparas[i].disabled = true;
    allparas[i].onclick = para_onclick;
}

start_.onclick = function () {
    start_.classList.toggle('pressed');
    stop = !stop;
    if (start_check++ % 2 == 0) {
        //stop = false;
        myrequest = requestAnimationFrame(animation);
        for (let i = 0; i < allparas.length; i++) {
            allparas[i].disabled = false;
        }
        start_.innerHTML = 'STOP';
    } else {
        //stop = true;
        for (let i = 0; i < allparas.length; i++) {
            allparas[i].disabled = true;
        }
        start_.innerHTML = 'START';
    }
};

setInterval(function () {
    if (!stop) {
        height -= 6;
        length -= 3;
        //sharpness -= 5;
        elevation -= 2;
        gap_ -= 5;
        checkthu();
        template_generate();
    }
}, 5000);

function para_onclick(e) {
    if (timeout !== null) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
        checkthu();
        //
        template_generate();
        timeout = null;
    }, 1500);
    para_funcs[e.target.getAttribute('para')]();
}

function checkthu() {
    height = check_(height, 0);
    length = check_(length, 0);
    sharpness = check_(sharpness);
    elevation = check_(elevation);
    elevation = elevation > 38 ? 38 : elevation;
    gap_ = check_(gap_);
    highestheight = height * 1.5;
    //
    function check_(para, num = 1) {
        return para < num ? num : para;
    }
}
