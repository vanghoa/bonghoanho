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
const needvertical = 'The Developer-Tools needs to be vertical!';
const widenit =
    'Widen the Developer-Tools by dragging its edge until a TV remote control shows up';
const rightclick =
    'RIGHT click on THIS BOX & Select "Inspect" (I recommend browsers with access to Developer-Tools, e.g., Chrome, Microsoft Edge, Firefox,...)';
const max_height = 100;
let slogan, so, numdisplay_init, heart;
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

    heart = [
`. .............................. ......=+***=-....-=***+=:..... ...-#@@@@@@@@@++@@@@@@@@@#-... ..=@@@@%#@@@@@@@@@@@@@@@@@@=.. ..%@@%:...:@@@@@@@@@@@@@@@@@.. ..@@@+.....#@@@@@@@@@@@@@@@@.. ..+@@@*=-=#@@@@@@@@@@@@@@@@*.. ...*@@@@@@@@@@@@@@@@@@@@@@#... ....=@@@@@@@@@@@@@@@@@@@@=.... ......+%@@@@@@@@@@@@@@@+...... ........-#@@@@@@@@@@#-........ ...........-*@@@@*=........... ..............::.............. `,
`. .............................. ......-+***+=....-+***+-...... ....+@@@@@@@@@**@@@@@@@@@*:... ...%@@@%%@@@@@@@@@@@@@@@@@@:.. ..+@@+....#@@@@@@@@@@@@@@@@#.. ..+@@:....=@@@@@@@@@@@@@@@@#.. ..:@@%+-=*@@@@@@@@@@@@@@@@@-.. ...-@@@@@@@@@@@@@@@@@@@@@@+... ....:%@@@@@@@@@@@@@@@@@@%-.... ......=%@@@@@@@@@@@@@@%=...... ........:*@@@@@@@@@@#-........ ...........-*@@@@#=........... ..............::.............. `,
`. .............................. .......-+***+-..:=***+=....... .....=@@@@@@@@@%@@@@@@@@*..... ....+@@%%@@@@@@@@@@@@@@@@%.... ...:@%...:@@@@@@@@@@@@@@@@+... ...:@*....#@@@@@@@@@@@@@@@+... ....#@*==#@@@@@@@@@@@@@@@@:... .....%@@@@@@@@@@@@@@@@@@@=.... .....:%@@@@@@@@@@@@@@@@@-..... .......=@@@@@@@@@@@@@@*....... .........=%@@@@@@@@@+:........ ...........:*@@@@#=........... ..............:-.............. `,
`. .............................. ........-+***=::+***+:........ ......:%@@@@@@@@@@@@@@#:...... .....:@@@@@@@@@@@@@@@@@@...... .....+%-.=@@@@@@@@@@@@@@=..... .....+*..:@@@@@@@@@@@@@@=..... .....-@#=%@@@@@@@@@@@@@@:..... ......*@@@@@@@@@@@@@@@@+...... .......#@@@@@@@@@@@@@@*....... ........+@@@@@@@@@@@@=........ .........:#@@@@@@@@*:......... ...........:*@@@@*:........... ..............--.............. `,
`. .............................. ...........=***+***-.......... .........-@@@@@@@@@@%......... .........%@@@@@@@@@@@+........ ........:@@@@@@@@@@@@#........ ........:@@@@@@@@@@@@#........ .........@@@@@@@@@@@@*........ .........*@@@@@@@@@@@-........ .........:@@@@@@@@@@%......... ..........+@@@@@@@@@:......... ...........*@@@@@@@-.......... ............=@@@@%-........... ..............:-:............. `,
`. .............................. ............:+**+-............ ...........-@@@@@@-........... ...........=@@@@@@=........... ...........=@@@@@@=........... ...........=@@@@@@=........... ...........=@@@@@@=........... ...........=@@@@@@=........... ...........=@@@@@@=........... ...........=@@@@@@=........... ...........=@@@@@@=........... ............#@@@@#............ ..............--:............. `,
`. .............................. ..........:+###*##*=.......... .........=@@@@@@@@@@%......... .........@@@@@@@@@@@@+........ ........:@@@@@@@@@@@@#........ ........:@@@@@@@@@@@@#........ .........@@@@@@@@@@@@+........ .........*@@@@@@@@@@@:........ .........:@@@@@@@@@@#......... ..........+@@@@@@@@%.......... ...........+@@@@@@@:.......... ............=@@@@#:........... ..............::.............. `,
`. .............................. ........-+***=:-+***+:........ ......-%@@@@@@@@@@@@@@#:...... .....:@@@@@@@%@@@@@@@@@@...... .....+@@@@@%:.-@@@@@@@@@=..... .....*@@@@@*..:%@@@@@@@@=..... .....-@@@@@@#=#@@@@@@@@@...... ......#@@@@@@@@@@@@@@@@+...... .......#@@@@@@@@@@@@@@+....... ........+@@@@@@@@@@@@-........ .........:#@@@@@@@@*.......... ...........:*@@@@+:........... ..............-:.............. `,
`. .............................. .......=*###*=..-+###*=:...... .....*@@@@@@@@@@@@@@@@@@#..... ....#@@@@@%##@@@@@@@@@@@@%.... ...-@@@@@*...-@@@@@@@@@@@@=... ...:@@@@@=....@@@@@@@@@@@@=... ....#@@@@@*=+%@@@@@@@@@@@@.... .....%@@@@@@@@@@@@@@@@@@@:.... .....:#@@@@@@@@@@@@@@@@%:..... .......-%@@@@@@@@@@@@@=....... .........=#@@@@@@@@%=......... ...........:+%@@@*-........... ...............:.............. `,
`. .............................. ......:=++++-....-=++++-...... ....+%@@@@@@@@*+@@@@@@@@@*:... ...%@@@@@%%@@@@@@@@@@@@@@@@:.. ..=@@@@*....#@@@@@@@@@@@@@@#.. ..+@@@@:....-@@@@@@@@@@@@@@%.. ..:@@@@@+--+@@@@@@@@@@@@@@@=.. ...-@@@@@@@@@@@@@@@@@@@@@@*... ....:%@@@@@@@@@@@@@@@@@@@=.... ......=%@@@@@@@@@@@@@@@+...... ........-*@@@@@@@@@@#=........ ...........=*@@@@#+:.......... ..............:-.............. `
    ]
}
const div_welcome = $('welcome---to---đo---điện---tâm---đồ---máy');
const style_ = $$('style');
const start_ = $('#b_14');
const reset_ = $('#b_3');
const showcons_ = $('#b_22');
const showcss_ = $('#b_23');
const allparas = $$('.para');
const sttlog1 = $create('input-log');
const sttlog2 = $create('input-log');
const log1 = sttlog1.setAttribute.bind(sttlog1);
const log2 = sttlog2.setAttribute.bind(sttlog2);
const log1rmv = sttlog1.removeAttribute.bind(sttlog1);
const log2rmv = sttlog2.removeAttribute.bind(sttlog2);

// locals
const divs = [];
const cmts = [];
const clocks = [];
let template = [];
let transition = [];
let template_cmt = [];
let fullhtml = [];
let slogan_ = [];
let numberdisplay = [];
let bub_yoff = [];
for (let f = 0; f <= 800; f++) {
    bub_yoff.push(Math.round(map(noise.simplex2(f / 20, f / 5), -1, 1, -5, 5)));
}
let currentdate = '00:00:00';
let elevation_ = 1;
let transcount = 0;
let count2 = 0;
let countheart = 0;
let cs_color1 = 'yellow';
let cs_color2 = 'red';

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
let count = 0;
let last = 0;
let last_ = 0;
let datecheck = true;
let cs_frame = true;
let stop = true;

// check
let init_anim = false;
let cs_color = true;
let devtoolopenfirst = true;
let transready = false;
let genready = true;
let showcss = false;
let showcons = false;

// setup html

for (let i = 0; i <= 59; i++) {
    let div = $create('div');
    div.below = div.below_ = div.id = eleicon;
    div.upper = div.upper_ = div.className = '-';
    div.render = function ({ upper, below }) {
        this.setAttribute('id', below);
        this.setAttribute('class', upper);
    };
    divs.unshift(div);
}

(() => {
    let [m4, c4] = e_line(max_height - 3, 10, 24, 0);
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
        cmts.unshift(cmt);
    }
})();

for (let a = 0; a < 4; a++) {
    let cmt = $createcomment('');
    clocks.unshift(cmt);
}

for (let a = 0; a < slogan.length; a++) {
    let cmt = $createcomment(slogan[a]);
    slogan_.unshift(cmt);
}

for (let a = 0; a < so[0].length; a++) {
    let cmt = $createcomment('');
    numberdisplay.unshift(cmt);
}
numberdisplay.unshift($createcomment(numdisplay_init[0]));
numberdisplay.push($createcomment(numdisplay_init[1]));
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

async function animation(now) {
    if (!last || now - last >= 1000) {
        last = now;
        datecheck = true;
        cs_color = !cs_color;
    }
    if (!last_ || now - last_ >= 300) {
        last_ = now;
        cs_frame = true;
    }
    if (!genready) {
        render_first(template[count]);
        render_numberdisplay(template[count]);
        render_comment();
        if (cs_frame) {
            console.clear();
            if (showcons) {
                render_console();
            }
            cs_frame = false;
        }
        render_toptobot();
        if (++count == template.length) {
            count = 0;
        }
        if (++countheart == heart.length) {
            countheart = 0;
        }
    }
    await wait(delay_);
    myrequest = stop ? null : requestAnimationFrame(animation);
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

function render_console() {
    let cslog = [];
    let log =
        '%c ______________________________________________________________________________________________________________________\n/                                                                                                                      \\\n';
    for (let i = 1; i <= 59; i++) {
        cslog.push(Math.round(map(divs[i - 1].upper.length, 0, 60, 1, 15)));
    }
    for (let a = 15; a > 0; a--) {
        log += '{';
        for (let i = 1; i <= 59; i++) {
            log += cslog[i - 1] == a ? '@@' : '  ';
        }
        log += '}\n';
    }
    log +=
        '\\______________________________________________________________________________________________________________________/';
    console.log(log, `color: ${cs_color ? cs_color1 : cs_color2}`);
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
    const cir_Y = (x, r, xc, yc) => {
        const _ = Math.round(Math.sqrt(r ** 2 - (x - xc) ** 2));
        return [yc + _, yc - _];
    };
    const frames = template.length;
    const ylength = cmts.length;
    const xlength = max_height + 1;
    let r = Math.round(Math.random() * (5 - 3) + 3);
    let lo = Math.ceil(r / 2);
    let speed = Math.ceil((xlength + 2 * r - lo) / frames);
    let x_start = -2 * r + lo;
    let x_cen = -r + lo;
    let y_cen = Math.round(Math.random() * (ylength - 1));
    const bub_arr = Array.from({ length: frames }, () =>
        Array.from({ length: ylength }, () =>
            Array.from({ length: xlength }, () => {
                return false;
            })
        )
    );
    let bub_yoff_order = Math.round(Math.random() * (799 - frames));
    for (let f = 0; f < frames; f++) {
        let y_cen_ = y_cen + bub_yoff[f + bub_yoff_order] * 2;
        let r_ = r - bub_yoff[f + bub_yoff_order];
        let yarr = [];
        let yarr_ = 0;
        for (let x = x_start; x <= x_start + 2 * r_; x++) {
            const [y1, y2] = cir_Y(x, r_, x_cen, y_cen_);
            if (x >= 0 && x < xlength) {
                if (y1 >= 0 && y1 < ylength) {
                    bub_arr[f][y1][x] = true;
                    yarr.push(y1);
                }
                if (y2 >= 0 && y2 < ylength) {
                    bub_arr[f][y2][x] = true;
                    yarr.push(y2);
                }
            }
        }
        yarr.sort((a, b) => a - b);

        for (let y = y_cen_ - r_; y <= y_cen_ + r_; y++) {
            if (yarr[yarr_] == y) {
                yarr_++;
                continue;
            }
            const [x1, x2] = cir_Y(y, r_, y_cen_, x_cen);
            if (y >= 0 && y < ylength) {
                if (x1 >= 0 && x1 < xlength) {
                    bub_arr[f][y][x1] = true;
                }
                if (x2 >= 0 && x2 < xlength) {
                    bub_arr[f][y][x2] = true;
                }
            }
        }
        x_start += speed;
        x_cen += speed;
    }
    ////////////////////////////////////////////////////////////////
    for (let i = 0; i <= template.length - 1; i++) {
        let temp = [];
        let [m, c] = e_line(
            14 + 2 * elevation,
            0,
            template[i].u + 13 + 2 * elevation,
            10
        );
        let [m_, c_] = e_line(5, 0, 4 + 2 * elevation, 10);
        let [m4, c4] = e_line(
            max_height - 3,
            0,
            template[i].u + 21 + 2 * elevation,
            10
        );

        for (let y = 0; y <= cmts.length - 1; y++) {
            let tempcmt = '';
            let x =
                m === Infinity ? 14 + 2 * elevation : Math.round((y - c) / m);
            let x4 =
                m4 === Infinity ? max_height - 3 : Math.round((y - c4) / m4);
            let x1 =
                14 +
                2 * elevation +
                Math.round(((x - (14 + 2 * elevation)) / 5) * 3);
            let x2 =
                14 + 2 * elevation + Math.round((x - (14 + 2 * elevation)) / 4);
            let x_ = i % 2 == 0 ? 5 : Math.round((y - c_) / m_);
            for (let w = 0; w <= max_height; w++) {
                if (w == x2) {
                    tempcmt += 'B';
                } else if (w == x_) {
                    tempcmt += '0';
                } else if (w == x1) {
                    tempcmt += 'I';
                } else if (w == x) {
                    tempcmt += 'P';
                } else if (w == x4) {
                    tempcmt += 'K';
                } else if (bub_arr[i][y][w]) {
                    tempcmt += '@';
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
        if (transcount > transition.length - 1) {
            transready = false;
            transcount = 0;
            divs[0].below = below;
        } else {
            divs[0].below = transition[transcount++];
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
    let h_wght = '.';

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
                state = '*my passion dies*';
            } else if (tong_ < 80) {
                state = 'alert!!! critical!!!';
                h_wght = '"';
            } else if (tong_ < 300) {
                state = 'concerned!';
                h_wght = '-';
            } else if (tong_ < 800) {
                state = 'not great not terrible';
                h_wght = '~';
            } else if (tong_ < 1300) {
                state = 'stable (means good)';
                h_wght = '!';
            } else if (tong_ < 1700) {
                state = `flourished and healthy!`;
                h_wght = '+';
            } else if (tong_ < 2000) {
                state = `a bit devoted but I'll allow`;
                h_wght = '?';
            } else if (tong_ < 2500) {
                state = `this is out of hand`;
                h_wght = '$';
            } else if (tong_ < 3000) {
                state = `too radical already!`;
                h_wght = '&';
            } else {
                state = '*extreme comfort zone*';
                h_wght = '@';
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
            cs_color1 = 'red';
            cs_color2 = 'yellow';
        } else if (tong_ < 2000) {
            state = '[aight! keep me just right there!]';
            cs_color1 = 'yellow';
            cs_color2 = 'green';
        } else {
            state = `[this is enough please...]`;
            cs_color1 = 'green';
            cs_color2 = 'blue';
        }
        let statelength = state.length;
        state = numdisplay_init[1] + state + numdisplay_init[1];

        for (let a = 0; a <= max_height; a++) {
            cmt += state[max_height + statelength - count2 + 1 + a];
        }

        count2 += count2 >= max_height + statelength + 1 ? -count2 : 1;

        return cmt;
    })();

    style_[1].textContent = showcss
        ? `body > div {
        content: 'my heart: ${Math.round((tong_ / 1700) * 100)}% ${heart[
              countheart
          ].replaceAll('@', h_wght)}';
    }`
        : '';

    for (let a = 1; a < numberdisplay.length - 1; a++) {
        let cmt = '';
        let cmt2 = '';

        for (let b = 0; b < tong.length; b++) {
            cmt += `..${so[tong[b]][a - 1]}`;
        }
        for (let b = 0; b < currentdate.length; b++) {
            cmt2 += `..${so[currentdate[b]][a - 1]}`;
        }
        let bmax = max_height - cmt.length - cmt2.length;
        for (let b = 0; b <= bmax; b++) {
            cmt += '.';
        }

        numberdisplay[a].nodeValue = cmt + cmt2;
    }
}

function e_line(x1, y1, x2, y2) {
    const slope = (y2 - y1) / (x2 - x1);
    return [slope, y1 - slope * x1];
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

function reset() {
    length = 5;
    height = 40;
    sharpness = 10;
    gap_ = 3;
    gapicon_ = '-';
    eleicon = '<3';
    highestheight = 50;
    elevation = 1;
    para_funcs.eat_ =
        para_funcs.sleep_ =
        para_funcs.ent_ =
        para_funcs.shit_ =
        para_funcs.sex_ =
        para_funcs.exerc_ =
        para_funcs.fail_ =
        para_funcs.poor_ =
        para_funcs.learn_ =
        para_funcs.unlearn_ =
        para_funcs.relearn_ =
        para_funcs.prac_ =
        para_funcs.OT_ =
        para_funcs.peer_ =
        para_funcs.finance_ =
        para_funcs.fren_ =
        para_funcs.fam_ =
            0;
    while (sttlog1.attributes.length > 0) {
        log1rmv(sttlog1.attributes[0].name);
    }
    while (sttlog2.attributes.length > 0) {
        log2rmv(sttlog2.attributes[0].name);
    }
    template_generate();
}

// function for changing the graph
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
    learn_: 0,
    unlearn_: 0,
    relearn_: 0,
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
    learn() {
        length += 8;
        gap_ -= 5;
        log1('Learn', `x${++this.learn_}`);
    },
    unlearn() {
        length -= 8;
        height += 7;
        gap_ += 2;
        log1('Unlearn', `x${++this.unlearn_}`);
    },
    relearn() {
        length += 5;
        elevation += 3;
        log1('Relearn', `x${++this.relearn_}`);
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
    allparas[i].onclick = para_onclick;
}

start_.onclick = function () {
    this.classList.toggle('pressed');
    stop = !stop;
    for (let i = 0; i < allparas.length; i++) {
        allparas[i].disabled = stop ? true : false;
    }
    reset_.disabled =
        showcss_.disabled =
        showcons_.disabled =
            stop ? true : false;
    myrequest = stop ? null : requestAnimationFrame(animation);
};

showcss_.onclick = function () {
    this.classList.toggle('pressed');
    showcss = !showcss;
    this.innerHTML = showcss ? 'see Styles' : 'show in css';
};

showcons_.onclick = function () {
    this.classList.toggle('pressed');
    showcons = !showcons;
    this.innerHTML = showcons ? 'see Console' : 'show in console';
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
}, 8000);

function para_onclick(e) {
    if (timeout !== null) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
        checkthu();
        //
        template_generate();
        timeout = null;
    }, 2000);
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
