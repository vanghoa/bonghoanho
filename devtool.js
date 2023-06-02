import devtools from './devtoolsrc.js';

// Check if it's open
//console.log('Is DevTools open:', devtools.isOpen);
if (devtools.isOpen) {
    devtoolsisopen_func();
}

// Check it's orientation, `undefined` if not open
//console.log('DevTools orientation:', devtools.orientation);

// Get notified when it's opened/closed or orientation changes
window.addEventListener('devtoolschange', devtoolschange_func);

function devtoolschange_func(event) {
    //console.log('Is DevTools open:', event.detail.isOpen);
    //console.log('DevTools orientation:', event.detail.orientation);
    if (event.detail.isOpen) {
        if (confirm('Do you see the Devtool?') == true) {
            devtoolsisopen_func();
        } else {
            alert('Do it again!');
        }
    } else {
        div_welcome.innerHTML =
            'Right click on THIS BLUE BOX & Select "Inspect"';
    }
}

function windowresize_func(event) {
    window.removeEventListener('resize', windowresize_func);
    setTimeout(() => {
        style_.textContent = `@media (max-aspect-ratio: 300/950) {
            welcome---to---ngu---trong---phong---thu {
                display: none !important;
            }

            remote-control {
                display: grid !important;
            }

            body {
                background-image: url('remote.jpg') !important;
            }
        }`;
    }, 1000);
}

function devtoolsisopen_func() {
    div_welcome.innerHTML =
        'Widen the Devtool by dragging its edge until a TV remote control shows up';

    window.addEventListener('resize', windowresize_func);
}
