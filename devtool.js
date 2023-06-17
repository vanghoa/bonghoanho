'use strict';

import devtools from './devtoolsrc.js';

// Check if it's open
//console.log('Is DevTools open:', devtools.isOpen);
devtoolschange_func({ detail: devtools });

// Check it's orientation, `undefined` if not open
//console.log('DevTools orientation:', devtools.orientation);

// Get notified when it's opened/closed or orientation changes
window.addEventListener('devtoolschange', devtoolschange_func);
window.onresize = _.debounce(function () {
    if (!devtools.isOpen || devtoolopenfirst) {
        init_anim = false;
        return;
    }
    if (matchMedia('(max-aspect-ratio: 310/950)').matches) {
        if (div_welcome.innerHTML == '') {
            init_anim = true;
            return;
        }
        div_welcome.innerHTML = '';
        init_anim = true; //
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
            welcome---to---đo---điện---tâm---đồ---máy {
                display: none !important;
            }

            remote-control {
                display: grid !important;
            }

            body {
                background-image: url('remote.jpg') !important;
            }
        }`;
        devtoolopenfirst = false;
    }, 1000);
}

function stop_() {
    start_.disabled = stop = true;
    for (let i = 0; i < allparas.length; i++) {
        allparas[i].disabled = true;
    }
    reset_.disabled = true;
    start_.classList.remove('pressed');
    //console.clear();
}

async function removeprepend(x) {
    if (x) {
        for (let i = 0; i < fullhtml.length; i++) {
            if (init_anim) {
                await wait(50);
                body.prepend(fullhtml[i]);
            }
        }

        start_.disabled = false;
    } else {
        for (let i = fullhtml.length - 1; i >= 0; i--) {
            if (!init_anim) {
                await wait(50);
                fullhtml[i].remove();
            }
        }
    }
}
