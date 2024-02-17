'use strict';

import devtools from './devtoolsrc.js';

// Check if it's open
//console.log('Is DevTools open:', devtools.isOpen);
devtoolschange_func({ detail: devtools });

// Check it's orientation, `undefined` if not open
//console.log('DevTools orientation:', devtools.orientation);

// Get notified when it's opened/closed or orientation changes
if (matchMedia('(hover: none) and (pointer: coarse)').matches) {
    alert(`on mobile, it's a little trickier :)

for IOS (prerequisites: a Mac machine & a USB cable):
- frist, make sure you are opening this site on Safari!
- connect IOS device to Mac with the USB cable
- on IOS: 'Settings' -> 'Safari' -> 'Advanced' -> toggle 'Javascript' & 'Web Inspector'
- on Mac: 
        + open Safari, then in the top menu bar, 'Safari' -> 'Settings' -> 'Advanced' -> 'Show features for web developers', it will show up a 'Develop' on the menu bar
        + go to that 'Develop' menu, select your IOS device and this website
- voila, the devtool window will pop up!

for Android users, I'm not sure how to carry this out :(, if anyone figures it out, please let me know`);
    isDesktop = false;
    devtoolopenfirst = false;
    replace_state_allow = false;
    removeprepend(true);
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
} else {
    addEventListener('devtoolschange', devtoolschange_func);
    onresize = _.debounce(function () {
        if (!devtools.isOpen || devtoolopenfirst) {
            init_anim = false;
            return;
        }
        if (matchMedia('(max-aspect-ratio: 310/950)').matches) {
            removeprepend(true);
        } else {
            init_anim = false;
            stop_();
            if (devtools.orientation == 'horizontal') {
                if (div_welcome.innerHTML == needvertical) {
                    return;
                }
                div_welcome.innerHTML = needvertical;
            } else if (div_welcome.innerHTML == widenit) {
                return;
            } else {
                div_welcome.innerHTML = widenit;
            } //
            removeprepend(false);
        }
    }, 1000);
}

function devtoolschange_func({ detail: { isOpen, orientation } }) {
    //console.log('Is DevTools open:', event.detail.isOpen);
    //console.log('DevTools orientation:', event.detail.orientation);
    stop_();
    init_anim = false;
    if (isOpen) {
        if (!devtoolopenfirst) {
            return;
        }
        div_welcome.innerHTML =
            orientation === 'horizontal' ? needvertical : widenit;
        window.addEventListener('resize', windowresize_func);
    } else {
        div_welcome.innerHTML = rightclick;
        devtoolopenfirst = true;
        removeprepend(false);
        style_[0].textContent = '';
    }
}

function windowresize_func(event) {
    window.removeEventListener('resize', windowresize_func);
    setTimeout(() => {
        style_[0].textContent = `@media (max-aspect-ratio: 310/950) {
            welcome---to---measure---a---machine---heart, main {
                display: none !important;
            }

            remote-control {
                display: grid !important;
            }

            body {
                background-image: url('remote.jpg') !important;
                overflow: hidden;
                height: 100vh;
            }
        }`;
        devtoolopenfirst = false;
    }, 1000);
}

function stop_() {
    start_.disabled = stop = true;
    reseturl();
    for (let i = 0; i < allbuttons.length; i++) {
        allbuttons[i].disabled = true;
    }
    reset_.disabled = true;
    start_.classList.remove('pressed');
    //console.clear();
}

async function removeprepend(x) {
    if (x) {
        if (div_welcome.innerHTML == '') {
            init_anim = true;
            return;
        }
        div_welcome.innerHTML = '';
        init_anim = true; //
        main.remove();
        for (let i = 0; i < fullhtml.length; i++) {
            if (init_anim) {
                await wait(50);
                body.prepend(fullhtml[i]);
            }
        }
        start_.disabled = false;
        init_anim &&
            alert(`- click \u23F5\uFE0E to start

- click all the buttons as MANY times as you wish 
        + the goal is to keep the graph stable (there is a status bar)
        + the graph will automatically deteriorate over time
        + the red \u21BB\uFE0E is to reset the graph

- the 3 bottom buttons show various view modes

- if you want to reload the page, please pause the graph first for the url to go back to normal state

thank you and have fun :)`);
    } else {
        body.prepend(main);
        await stop_cam();
        for (let i = fullhtml.length - 1; i >= 0; i--) {
            if (!init_anim) {
                await wait(50);
                fullhtml[i].remove();
            }
        }
    }
}
