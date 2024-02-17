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
const clock = ['╔=====╗', '║.<`>.║', '║.<,>.║', '╚=====╝'];
clock.skt = 7;
const needvertical = 'The Developer-Tools needs to be vertical!';
const widenit =
    'Widen the Developer-Tools by dragging its edge until a TV remote control shows up';
const rightclick = $('welcome---to---measure---a---machine---heart').innerHTML;
const max_height = 100;
const href = location.href;
let slogan, so, numdisplay_init, heart;
// prettier-ignore
{
    slogan = [
        "█████████████████████████████████████████████████████████████████████████████████████████████████████",
        '█████/¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯\\█████',
        "████/```````````````````measure```````a`````````````machine's`````````````heart`````````````````\\████",
        '██/```````````````````/)``đo```/)`,`điện```````````tâm`````````/)`đồ```````máy````````````````````\\██',
        '█|``````````````````_(/`___``_(/`````_`__`````_/_`_``___`````_(/`___``___```_``````````````````````|█',
        '█|`````````````````(_(_(_)``(_(__(__(/_/`(_```(__(_(_//`(_``(_(_(_)```//`(_(_(_(_/_````````````````|█',
        '██\\````````````````````````````````````````````````````````````````````````````-/`````````````````/██',
        '████\\````````````````````````````````````````````````````````````````````````(_/````````````````/████',
        '█████\\_________________________________________________________________________________________/█████',
        '█████████████████████████████████████████████████████████████████████████████████████████████████████',
    ];
    slogan.reverse();

    so = {
        0: ['`_`', '/`\\', '\\_/'],
        1: ['``','/|','`|'],
        2: ['__`','`_)','/__'],
        3: ['__`','__)','__)'],
        4: ['```','|_|','``|'],
        5: ['`__','|_`','__)'],
        6: ['`_`','|_`','\\_)'],
        7: ['`__','``/','`/`'],
        8: ['`_`','(_)','(_)'],
        9: ['`_`','(_|','`_/'],
        ':': ['`o`','```','`o`']
    }

    numdisplay_init = [
        '``passion`status`:```````````````````````````````````````````````````````````````````````current`time`:',
        '`````````````````````````````````````````````````````````````````````````````````````````````````````',
        '``passion`status`:`',
        '`current`time`:'
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
const div_welcome = $('welcome---to---measure---a---machine---heart');
const main = $('main');
const style_ = $$('style');
const start_ = $('#b_14');
const reset_ = $('#b_3');
const showcons_ = $('#b_22');
const showcss_ = $('#b_23');
const show_eyes_ears_ = $('#b_24');
const allparas = $$('.para');
const head = $('head');
const allbuttons = [showcons_, showcss_, show_eyes_ears_, ...allparas];
const sttlog1 = $create('what-i-have-done');
const sttlog2 = $create('what-i-have-failed-to-do');
const log1 = sttlog1.setAttribute.bind(sttlog1);
const log2 = sttlog2.setAttribute.bind(sttlog2);
const log1rmv = sttlog1.removeAttribute.bind(sttlog1);
const log2rmv = sttlog2.removeAttribute.bind(sttlog2);

// locals
const divs = [];
const cmts = [];
const clocks = [];
const eyes = [];
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
let last__ = 0;
let datecheck = true;
let cs_frame = true;
let stop = true;

// check
let init_anim = false;
let cs_color = true;
let devtoolopenfirst = true;
let transready = false;
let genready = true;
let showcss,
    show_eyes_ears,
    showcons = false;

// eyes
const video = $('video');
const canvas = $('canvas');
const ctx = canvas.getContext('2d');
const cwidth = 40,
    cheight = 10;
const ewidth_diff = 6;
const ewidth = cwidth + ewidth_diff + 2;
const h_cheight = Math.round(cheight / 2);
const h_cwidth = Math.round(cwidth / 2);
const blink_cheight = Math.round(cheight / 3);
let gradient = '``__...--:!/r(l1Z4HW@▒█';
const eye_skin = '░';
let Stream;

// ears
let audiodata, analyser;

// url
let replace_state_allow = true;

// mobile
let isDesktop = true;

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
                        cmt += '|';
                    } else if (i == 16) {
                        cmt += '|';
                    } else if (i == x4) {
                        cmt += '/';
                    } else {
                        cmt += '`';
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
const numberdisplay_divider_1 = $createcomment(numdisplay_init[1]);
const numberdisplay_divider_2 = $createcomment(numdisplay_init[1]);
render_numberdisplay({ upper: { length: 0 }, below: { length: 0 } }, false);
const eyes_mid = (a) => {
    return a == h_cheight ? '╠═════╣' : '║░░░░░║';
};
const eyes_left = (a) => {
    return a == h_cheight ? '╔═════╣' : '░░░░░░║';
};
const eyes_right = (a) => {
    return a == h_cheight ? '╠═════╗' : '║░░░░░░';
};
const eyes_divider_1 = $createcomment(
    (() => {
        let cmt = '░░░░░░╔';
        for (let i = 0; i < cwidth; i++) {
            cmt += '═';
        }
        cmt += '╗░░░░░╔';
        for (let i = 0; i < cwidth; i++) {
            cmt += '═';
        }
        cmt += '╗░░░░░░';
        return cmt;
    })()
);
const eyes_allow_pls = $createcomment(
    '....... your camera is not working some how... or are you sure you allowed camera permission? .......'
);
const eyes_instruction = $createcomment(
    '....... open the <head>...</head> tag to view the eyes & ears .......'
);
for (let a = 0; a < cheight; a++) {
    let cmt = $createcomment(
        (() => {
            let cmt = eyes_left(a);
            for (let i = 0; i < cwidth; i++) {
                cmt += '`';
            }
            cmt += eyes_mid(a);
            for (let i = 0; i < cwidth; i++) {
                cmt += '`';
            }
            cmt += eyes_right(a);
            return cmt;
        })()
    );
    eyes.unshift(cmt);
}
const eyes_divider_2 = $createcomment(
    (() => {
        let cmt = '░░░░░░╚';
        for (let i = 0; i < cwidth; i++) {
            cmt += '═';
        }
        cmt += '╝░░░░░╚';
        for (let i = 0; i < cwidth; i++) {
            cmt += '═';
        }
        cmt += '╝░░░░░░';
        return cmt;
    })()
);

const eyeshtml = [eyes_divider_1, ...eyes, eyes_divider_2];
const eyeshtml_i = eyeshtml.slice();

fullhtmledit(
    sttlog1,
    numberdisplay_divider_1,
    numberdisplay,
    numberdisplay_divider_2,
    sttlog2,
    clocks,
    cmts,
    divs
);

//body.prepend(div_welcome);

let isBlinking = false,
    blinkCount = 0;

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
            if (showcons) {
                console.clear();
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
    if (!last__ || now - last__ >= 200) {
        last__ = now;
        if (show_eyes_ears) {
            if (isBlinking) {
                blinkCount++;
                if (blinkCount > 4) {
                    isBlinking = false;
                    blinkCount = 0;
                }
            } else {
                if (Math.random() < 0.05) {
                    isBlinking = true;
                }
            }
            render_cam(ctx);
            const chars = getPixelsGreyScale(ctx);
            render_eyes(chars);
        }
    }
    if (show_eyes_ears) {
        // ears
        analyser.getByteFrequencyData(audiodata);
        render_ears(audiodata);
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

        let prev_x = 0,
            prev_x2 = 0,
            prev_x_ = 0,
            prev_x1 = 0,
            prev_x4 = 100000;

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
                    tempcmt += orientation(x2, prev_x2);
                } else if (w == x_) {
                    tempcmt += orientation(x_, prev_x_);
                } else if (w == x1) {
                    tempcmt += orientation(x1, prev_x1);
                } else if (w == x) {
                    tempcmt += orientation(x, prev_x);
                } else if (w == x4) {
                    tempcmt += orientation(x4, prev_x4);
                } else if (bub_arr[i][y][w]) {
                    tempcmt += '█';
                } else {
                    tempcmt += '`';
                }

                function orientation(cur, prev) {
                    if (prev < cur) {
                        return '\\';
                    } else if (prev > cur) {
                        return '/';
                    }
                    return '|';
                }
            }
            temp.push(tempcmt);
            prev_x = x;
            prev_x2 = x2;
            prev_x_ = x_;
            prev_x1 = x1;
            prev_x4 = x4;
        }
        template_cmt.push(temp);
    }
}

function clock_generate() {
    for (let a = 0; a < clocks.length; a++) {
        let cmt = '';
        for (let i = 0; i < 2; i++) {
            cmt += '`';
        }
        cmt += clock[a];
        for (
            let i = clock[a].length + 3;
            i < 5 + 2 * elevation + clock.skt;
            i++
        ) {
            if (a == 1) {
                cmt += i % 2 == 0 ? '>' : 'o';
            } else if (a == 3) {
                cmt += i % 2 == 0 ? 'A' : '`';
            } else {
                cmt += '`';
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
            } else if (a == 3) {
                cmt += i % 2 == 0 ? 'A' : '`';
            } else {
                cmt += '`';
            }
        }
        cmt += clock[a];
        clocks[a].nodeValue = cmt;
    }
}

function dung() {
    stop = true;
}

function reseturl() {
    replace_state_allow && history.replaceState(null, '', href);
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

function render_numberdisplay({ upper, below }, url = true) {
    let tong_ = Math.round(map(upper.length + below.length, 3, 30, 0, 1000));
    let tong = tong_ < 0 ? '0' : tong_.toString();
    let tonglength = tong.length;
    let h_wght = '`';

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
                gradient = '``__...-';
            } else if (tong_ < 80) {
                state = 'alert!!! critical!!!';
                h_wght = '"';
                gradient = '``__...--:!';
            } else if (tong_ < 300) {
                state = 'concerned!';
                h_wght = '-';
                gradient = '``__...--:!/r(';
            } else if (tong_ < 800) {
                state = 'not great not terrible';
                h_wght = '~';
                gradient = '``__...--:!/r(l1Z';
            } else if (tong_ < 1300) {
                state = 'stable (means good)';
                h_wght = '!';
                gradient = '``__...--:!/r(l1Z4HW';
            } else if (tong_ < 1700) {
                state = `flourished and healthy!`;
                h_wght = '+';
                gradient = '``__...--:!/r(l1Z4HW@▒█';
            } else if (tong_ < 2000) {
                state = `a bit devoted but I'll allow`;
                h_wght = '?';
                gradient = '_...--:!/r(l1Z4HW@▒█';
            } else if (tong_ < 2500) {
                state = `this is out of hand`;
                h_wght = '$';
                gradient = '--:!/r(l1Z4HW@▒█';
            } else if (tong_ < 3000) {
                state = `too radical already!`;
                h_wght = '&';
                gradient = ':!/r(l1Z4HW@▒█';
            } else {
                state = '*extreme comfort zone*';
                h_wght = '@';
                gradient = '(l1Z4HW@▒█';
            }
            let amax =
                max_height -
                numdisplay_init[2].length -
                numdisplay_init[3].length -
                state.length;
            for (let a = 0; a <= amax; a++) {
                state += '`';
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
        try {
            url &&
                replace_state_allow &&
                history.replaceState(
                    {},
                    '',
                    `I${cmt
                        .replaceAll(` `, '-')
                        .replaceAll('`', '.')
                        .replace(`[`, '.')
                        .replace(`]`, '.')}I`
                );
        } catch (e) {
            replace_state_allow = false;
        }
        return cmt;
    })();

    style_[1].textContent = showcss
        ? `body, *:not(br) {
        content: 'my heart: ${Math.round((tong_ / 1700) * 100)}% ${heart[
              countheart
          ].replaceAll('@', h_wght)}';
    }
    `
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
            cmt += '`';
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
        para_funcs.love_ =
        para_funcs.exerc_ =
        para_funcs.overwork_ =
        para_funcs.toxicity_ =
        para_funcs.learn_ =
        para_funcs.unlearn_ =
        para_funcs.relearn_ =
        para_funcs.prac_ =
        para_funcs.lone_ =
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

// function for eyes

async function init_cam() {
    try {
        Stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
        });
        video.srcObject = Stream;
        video.play();

        // audio
        const audioCtx = new (window.AudioContext ||
            window.webkitAudioContext)();
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 32;
        const audioSrc = audioCtx.createMediaStreamSource(Stream);
        audioSrc.connect(analyser);
        audiodata = new Uint8Array(analyser.frequencyBinCount);

        show_eyes_ears = true;
        slogan_[slogan_.length - 1].after(eyes_instruction);
        isDesktop &&
            alert(
                `- eyes & ears are often put in the <head>...</head> right?
            
- the eyes clarity depends on the current graph status, so keep clicking!

- ears are on 2 sides of the head? which is why the TV Remote on the left and the Box Model (under Computed panel) on the right are reactive to sound!`
            );
        await wait(4000);
        for (let i = 0; i < eyeshtml_i.length; i++) {
            await wait(50);
            if (!show_eyes_ears) {
                return;
            }
            head.lastChild.after(eyeshtml_i[i]);
        }

        fullhtmledit(
            eyes_instruction,
            eyeshtml,
            sttlog1,
            numberdisplay_divider_1,
            numberdisplay,
            numberdisplay_divider_2,
            sttlog2,
            clocks,
            cmts,
            divs
        );
    } catch (e) {
        console.log('An error occurred: ' + e);
        slogan_[slogan_.length - 1].after(eyes_allow_pls);
        fullhtmledit(
            eyes_allow_pls,
            sttlog1,
            numberdisplay_divider_1,
            numberdisplay,
            numberdisplay_divider_2,
            sttlog2,
            clocks,
            cmts,
            divs
        );
        stop_cam();
    }
}
async function stop_cam() {
    show_eyes_ears = false;
    show_eyes_ears_.classList.remove('pressed');
    show_eyes_ears_.innerHTML = 'show <br /> &#128065; & &#128066;';
    style_[2].textContent = '';
    if (Stream) {
        const tracks = Stream.getTracks();
        tracks.forEach((track) => track.stop());
        video.srcObject = null;
        eyes_instruction.remove();
        for (let i = 0; i < eyeshtml_i.length; i++) {
            await wait(50);
            if (show_eyes_ears) {
                return;
            }
            eyeshtml_i[i].remove();
        }
        fullhtmledit(
            sttlog1,
            numberdisplay_divider_1,
            numberdisplay,
            numberdisplay_divider_2,
            sttlog2,
            clocks,
            cmts,
            divs
        );
    }
}
function fullhtmledit(...rest) {
    fullhtml = slogan_.concat(...rest).reverse();
}

function clearphoto() {
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, ewidth, cheight);
}
function render_cam(ctx) {
    if (ewidth && cheight) {
        canvas.width = ewidth;
        canvas.height = cheight;
        ctx.drawImage(video, 0, 0, ewidth, cheight);
    } else {
        clearphoto();
    }
}
function getPixelsGreyScale(ctx) {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    let row = 0;
    const res = new Array(cheight).fill(0).map(() => []);
    for (let i = 0, c = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        let curr = res[row];
        curr.push(avg);
        if (c < ewidth) {
            c++;
        }
        if (c === ewidth) {
            c = 0;
            row += 1;
        }
    }
    return res;
}
function getCharByScale(scale) {
    const val = Math.floor((scale / 255) * (gradient.length - 1));
    return gradient[val];
}
function isPointInsideEllipse(x, y, center_x, center_y, a, b) {
    const result = (x - center_x) ** 2 / a ** 2 + (y - center_y) ** 2 / b ** 2;

    return result;
}

const render_ears = (data) => {
    const avg = data.reduce((sum, num) => sum + num, 0) / data.length;
    let digits = Math.round(map(avg, -10, 180, 1, 8));
    style_[2].textContent = `
    html {
        margin: ${Math.round(map(avg, 15, 60, -15, 50))}px;
    }
    head,style {
        margin: ${10 ** digit_()}px;
        padding: ${10 ** digit_()}px;
    }`;
    function digit_() {
        return Math.round(digits + Math.random() * 2 - 1);
    }
    //console.log(avg);
};

const render_eyes = (textDarkScale) => {
    eyes.forEach((eye, i) => {
        eye.nodeValue = (() => {
            let cmt = eyes_left(i);
            for (let k = cwidth - 1 + ewidth_diff; k >= ewidth_diff; k--) {
                const ellipse_check = isPointInsideEllipse(
                    7 + k - ewidth_diff,
                    i,
                    7 + h_cwidth,
                    h_cheight - 0.5,
                    h_cwidth + 0.5,
                    h_cheight + 0.2
                );
                if (ellipse_check > 1) {
                    cmt += eye_skin;
                    continue;
                }
                if (i < blink_cheight * (blinkCount - 1)) {
                    cmt += eye_skin;
                    continue;
                }
                cmt += getCharByScale(textDarkScale[i][k]);
            }
            cmt += eyes_mid(i);
            for (let k = cwidth - 1; k >= 0; k--) {
                const ellipse_check = isPointInsideEllipse(
                    14 + cwidth + k,
                    i,
                    14 + cwidth + h_cwidth,
                    h_cheight - 0.5,
                    h_cwidth + 0.5,
                    h_cheight + 0.2
                );
                if (ellipse_check > 1) {
                    cmt += eye_skin;
                    continue;
                }
                if (i < blink_cheight * blinkCount) {
                    cmt += eye_skin;
                    continue;
                }
                cmt += getCharByScale(textDarkScale[i][k]);
            }
            cmt += eyes_right(i);
            return cmt;
        })();
    });
};
// function for changing the graph
let timeout = null;

const para_funcs = {
    eat_: 0,
    sleep_: 0,
    ent_: 0,
    shit_: 0,
    love_: 0,
    exerc_: 0,
    overwork_: 0,
    toxicity_: 0,
    learn_: 0,
    unlearn_: 0,
    relearn_: 0,
    prac_: 0,
    lone_: 0,
    peer_: 0,
    finance_: 0,
    fren_: 0,
    fam_: 0,
    eat() {
        length += 4;
        sharpness += 10;
        log1('well_fed', `x${++this.eat_}`);
    },
    sleep() {
        height += 6;
        gap_ -= 2;
        sharpness -= 4;
        log1('enough_sleep', `x${++this.sleep_}`);
    },
    ent() {
        gap_ += 1;
        elevation += 4;
        sharpness -= 8;
        log1('I_play', `x${++this.ent_}`);
    },
    shit() {
        gap_ += 2;
        length += 4;
        sharpness -= 5;
        log1('I_shit', `x${++this.shit_}`);
    },
    love() {
        height += 5;
        length += 8;
        gap_ -= 2;
        log1('I_am_loved', `x${++this.love_}`);
    },
    exerc() {
        elevation += 4;
        sharpness += 9;
        log1('routine_exercise', `x${++this.exerc_}`);
    },
    overwork() {
        length -= 7;
        height -= 5;
        gap_ += 3;
        log2('too_much_work', `x${++this.overwork_}`);
    },
    toxic() {
        length -= 4;
        elevation -= 6;
        gap_ += 12;
        log2('toxic_things', `x${++this.toxicity_}`);
    },
    learn() {
        length += 14;
        gap_ -= 10;
        log1('I_learn', `x${++this.learn_}`);
    },
    unlearn() {
        length -= 15;
        height += 8;
        gap_ += 1;
        log1('I_unlearn', `x${++this.unlearn_}`);
    },
    relearn() {
        length += 10;
        elevation += 4;
        log1('I_relearn', `x${++this.relearn_}`);
    },
    prac() {
        height += 7;
        elevation += 4;
        log1('I_consistent', `x${++this.prac_}`);
    },
    lone() {
        length -= 14;
        height -= 6;
        gap_ -= 5;
        log2('Im_on_my_own', `x${++this.lone_}`);
    },
    peer() {
        length -= 16;
        gap_ -= 5;
        elevation -= 9;
        log2('peer_pressure', `x${++this.peer_}`);
    },
    finance() {
        gapicon_ = '$#$#$';
        eleicon = '$$';
        elevation += 3;
        gap_ -= 5;
        log1('afford_to_consume', `x${++this.finance_}`);
    },
    fren() {
        gapicon_ = '@<@';
        eleicon = '#*';
        elevation += 5;
        log1('great_friends', `x${++this.fren_}`);
    },
    fam() {
        gapicon_ = '<3';
        eleicon = '()';
        elevation += 2;
        gap_ -= 5;
        log1('intimate_family', `x${++this.fam_}`);
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
        show_eyes_ears_.disabled =
            stop ? true : false;
    myrequest = stop ? null : requestAnimationFrame(animation);
    if (stop) {
        reseturl();
    }
};

showcss_.onclick = function () {
    this.classList.toggle('pressed');
    showcss = !showcss;
    this.innerHTML = showcss
        ? 'stop <br /> styles'
        : 'show <br /> in css <br/> styles';
};

showcons_.onclick = function () {
    this.classList.toggle('pressed');
    showcons = !showcons;
    this.innerHTML = showcons
        ? 'stop <br /> console'
        : 'show <br /> in <br /> console';
    if (!showcons) {
        console.clear();
    }
};

show_eyes_ears_.onclick = function () {
    this.classList.toggle('pressed');
    this.innerHTML = !show_eyes_ears
        ? 'stop <br /> &#128065; & &#128066;'
        : 'show <br /> &#128065; & &#128066;';
    !show_eyes_ears ? init_cam() : stop_cam();
};

// passion rate decreate over time
setInterval(function () {
    if (!stop) {
        height -= 8;
        length -= 2;
        //sharpness -= 5;
        elevation -= 3;
        gap_ -= 8;
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
    gap_ = gap_ > 15 ? 15 : gap_;
    gap_ = check_(gap_);
    highestheight = height * 1.5;
    //
    function check_(para, num = 1) {
        return para < num ? num : para;
    }
}
