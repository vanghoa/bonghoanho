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
    if (
        !devtools.isOpen ||
        devtoolopenfirst ||
        devtools.orientation === 'horizontal'
    ) {
        return;
    }
    if (matchMedia('(max-aspect-ratio: 300/950)').matches) {
        if (div_welcome.innerHTML == '') {
            return;
        }
        div_welcome.innerHTML = '';
        for (let i = 0; i < fullhtml.length; i++) {
            body.prepend(fullhtml[i]);
        }
    } else {
        if (
            div_welcome.innerHTML ==
            'Widen the Devtool by dragging its edge until a TV remote control shows up'
        ) {
            return;
        }
        div_welcome.innerHTML =
            'Widen the Devtool by dragging its edge until a TV remote control shows up';
        for (let i = 0; i < fullhtml.length; i++) {
            fullhtml[i].remove();
        }
    }
}, 1000);

function devtoolschange_func({ detail: { isOpen, orientation } }) {
    //console.log('Is DevTools open:', event.detail.isOpen);
    //console.log('DevTools orientation:', event.detail.orientation);
    if (isOpen) {
        if (orientation === 'vertical') {
            div_welcome.innerHTML =
                'Widen the Devtool by dragging its edge until a TV remote control shows up';

            window.addEventListener('resize', windowresize_func);
        } else {
            div_welcome.innerHTML = 'The Devtool needs to be vertical!';
        }
    } else {
        div_welcome.innerHTML =
            'Right click on THIS BLUE BOX & Select "Inspect"';
        devtoolopenfirst = true;
    }
}

function windowresize_func(event) {
    window.removeEventListener('resize', windowresize_func);
    setTimeout(() => {
        style_.textContent = `@media (max-aspect-ratio: 300/950) {
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
