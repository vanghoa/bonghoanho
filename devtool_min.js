"use strict";import devtools from"./devtoolsrc.js";function devtoolschange_func({detail:{isOpen:e,orientation:n}}){if(stop_(),init_anim=!1,e){if(!devtoolopenfirst)return;div_welcome.innerHTML="horizontal"===n?needvertical:widenit,window.addEventListener("resize",windowresize_func)}else div_welcome.innerHTML=rightclick,devtoolopenfirst=!0,removeprepend(!1),style_[0].textContent=""}function windowresize_func(e){window.removeEventListener("resize",windowresize_func),setTimeout((()=>{style_[0].textContent="@media (max-aspect-ratio: 310/950) {\n            welcome---to---đo---điện---tâm---đồ---máy {\n                display: none !important;\n            }\n\n            remote-control {\n                display: grid !important;\n            }\n\n            body {\n                background-image: url('remote.jpg') !important;\n            }\n        }",devtoolopenfirst=!1}),1e3)}function stop_(){start_.disabled=stop=!0;for(let e=0;e<allparas.length;e++)allparas[e].disabled=!0;reset_.disabled=!0,start_.classList.remove("pressed")}async function removeprepend(e){if(e){for(let e=0;e<fullhtml.length;e++)init_anim&&(await wait(50),body.prepend(fullhtml[e]));start_.disabled=!1}else for(let e=fullhtml.length-1;e>=0;e--)init_anim||(await wait(50),fullhtml[e].remove())}devtoolschange_func({detail:devtools}),window.addEventListener("devtoolschange",devtoolschange_func),window.onresize=_.debounce((function(){if(init_anim=!1,devtools.isOpen&&!devtoolopenfirst)if(matchMedia("(max-aspect-ratio: 310/950)").matches){if(""==div_welcome.innerHTML)return;div_welcome.innerHTML="",init_anim=!0,removeprepend(!0)}else{if(stop_(),"horizontal"==devtools.orientation){if(div_welcome.innerHTML==needvertical)return;div_welcome.innerHTML=needvertical}else{if(div_welcome.innerHTML==widenit)return;div_welcome.innerHTML=widenit}removeprepend(!1)}}),1e3);