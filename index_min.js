"use strict";const $=document.querySelector.bind(document),$$=document.querySelectorAll.bind(document),$create=document.createElement.bind(document),$createcomment=document.createComment.bind(document),cos=Math.cos.bind(Math),sin=Math.sin.bind(Math),body=document.body,TWO_PI=2*Math.PI,clock=["/=====\\","|.<`>.|","|.<,>.|","\\=====/"];clock.skt=7;const needvertical="The Developer-Tools needs to be vertical!",widenit="Widen the Developer-Tools by dragging its edge until a TV remote control shows up",rightclick=$("welcome---to---đo---điện---tâm---đồ---máy").innerHTML,max_height=100;let slogan,so,numdisplay_init,heart;slogan=["00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","0000.............................................................................................0000","00..................../)..đo.../).,.điện...........tâm........./).đồ.......máy.....................00","0..................._(/.___.._(/....._.__....._/_._..___....._(/.___..___..._.......................0","0..................(_(_(_)..(_(__(__(/_/.(_...(__(_(_//.(_..(_(_(_)...//.(_(_(_(_/_.................0","00.............................................................................-/..................00","0000.........................................................................(_/.................0000","00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"],slogan.reverse(),so={0:["._.","/.\\","\\_/"],1:["..","/|",".|"],2:["__.","._)","/__"],3:["__.","__)","__)"],4:["...","|_|","..|"],5:[".__","|_.","__)"],6:["._.","|_.","\\_)"],7:[".__","../","./."],8:["._.","(_)","(_)"],9:["._.","(_|","._/"],":":[".o.","...",".o."]},numdisplay_init=["..passion.rate.:.......................................................................current.time.:",".....................................................................................................","..passion.rate.:.",".current.time.:"],heart=[". .............................. ......=+***=-....-=***+=:..... ...-#@@@@@@@@@++@@@@@@@@@#-... ..=@@@@%#@@@@@@@@@@@@@@@@@@=.. ..%@@%:...:@@@@@@@@@@@@@@@@@.. ..@@@+.....#@@@@@@@@@@@@@@@@.. ..+@@@*=-=#@@@@@@@@@@@@@@@@*.. ...*@@@@@@@@@@@@@@@@@@@@@@#... ....=@@@@@@@@@@@@@@@@@@@@=.... ......+%@@@@@@@@@@@@@@@+...... ........-#@@@@@@@@@@#-........ ...........-*@@@@*=........... ..............::.............. ",". .............................. ......-+***+=....-+***+-...... ....+@@@@@@@@@**@@@@@@@@@*:... ...%@@@%%@@@@@@@@@@@@@@@@@@:.. ..+@@+....#@@@@@@@@@@@@@@@@#.. ..+@@:....=@@@@@@@@@@@@@@@@#.. ..:@@%+-=*@@@@@@@@@@@@@@@@@-.. ...-@@@@@@@@@@@@@@@@@@@@@@+... ....:%@@@@@@@@@@@@@@@@@@%-.... ......=%@@@@@@@@@@@@@@%=...... ........:*@@@@@@@@@@#-........ ...........-*@@@@#=........... ..............::.............. ",". .............................. .......-+***+-..:=***+=....... .....=@@@@@@@@@%@@@@@@@@*..... ....+@@%%@@@@@@@@@@@@@@@@%.... ...:@%...:@@@@@@@@@@@@@@@@+... ...:@*....#@@@@@@@@@@@@@@@+... ....#@*==#@@@@@@@@@@@@@@@@:... .....%@@@@@@@@@@@@@@@@@@@=.... .....:%@@@@@@@@@@@@@@@@@-..... .......=@@@@@@@@@@@@@@*....... .........=%@@@@@@@@@+:........ ...........:*@@@@#=........... ..............:-.............. ",". .............................. ........-+***=::+***+:........ ......:%@@@@@@@@@@@@@@#:...... .....:@@@@@@@@@@@@@@@@@@...... .....+%-.=@@@@@@@@@@@@@@=..... .....+*..:@@@@@@@@@@@@@@=..... .....-@#=%@@@@@@@@@@@@@@:..... ......*@@@@@@@@@@@@@@@@+...... .......#@@@@@@@@@@@@@@*....... ........+@@@@@@@@@@@@=........ .........:#@@@@@@@@*:......... ...........:*@@@@*:........... ..............--.............. ",". .............................. ...........=***+***-.......... .........-@@@@@@@@@@%......... .........%@@@@@@@@@@@+........ ........:@@@@@@@@@@@@#........ ........:@@@@@@@@@@@@#........ .........@@@@@@@@@@@@*........ .........*@@@@@@@@@@@-........ .........:@@@@@@@@@@%......... ..........+@@@@@@@@@:......... ...........*@@@@@@@-.......... ............=@@@@%-........... ..............:-:............. ",". .............................. ............:+**+-............ ...........-@@@@@@-........... ...........=@@@@@@=........... ...........=@@@@@@=........... ...........=@@@@@@=........... ...........=@@@@@@=........... ...........=@@@@@@=........... ...........=@@@@@@=........... ...........=@@@@@@=........... ...........=@@@@@@=........... ............#@@@@#............ ..............--:............. ",". .............................. ..........:+###*##*=.......... .........=@@@@@@@@@@%......... .........@@@@@@@@@@@@+........ ........:@@@@@@@@@@@@#........ ........:@@@@@@@@@@@@#........ .........@@@@@@@@@@@@+........ .........*@@@@@@@@@@@:........ .........:@@@@@@@@@@#......... ..........+@@@@@@@@%.......... ...........+@@@@@@@:.......... ............=@@@@#:........... ..............::.............. ",". .............................. ........-+***=:-+***+:........ ......-%@@@@@@@@@@@@@@#:...... .....:@@@@@@@%@@@@@@@@@@...... .....+@@@@@%:.-@@@@@@@@@=..... .....*@@@@@*..:%@@@@@@@@=..... .....-@@@@@@#=#@@@@@@@@@...... ......#@@@@@@@@@@@@@@@@+...... .......#@@@@@@@@@@@@@@+....... ........+@@@@@@@@@@@@-........ .........:#@@@@@@@@*.......... ...........:*@@@@+:........... ..............-:.............. ",". .............................. .......=*###*=..-+###*=:...... .....*@@@@@@@@@@@@@@@@@@#..... ....#@@@@@%##@@@@@@@@@@@@%.... ...-@@@@@*...-@@@@@@@@@@@@=... ...:@@@@@=....@@@@@@@@@@@@=... ....#@@@@@*=+%@@@@@@@@@@@@.... .....%@@@@@@@@@@@@@@@@@@@:.... .....:#@@@@@@@@@@@@@@@@%:..... .......-%@@@@@@@@@@@@@=....... .........=#@@@@@@@@%=......... ...........:+%@@@*-........... ...............:.............. ",". .............................. ......:=++++-....-=++++-...... ....+%@@@@@@@@*+@@@@@@@@@*:... ...%@@@@@%%@@@@@@@@@@@@@@@@:.. ..=@@@@*....#@@@@@@@@@@@@@@#.. ..+@@@@:....-@@@@@@@@@@@@@@%.. ..:@@@@@+--+@@@@@@@@@@@@@@@=.. ...-@@@@@@@@@@@@@@@@@@@@@@*... ....:%@@@@@@@@@@@@@@@@@@@=.... ......=%@@@@@@@@@@@@@@@+...... ........-*@@@@@@@@@@#=........ ...........=*@@@@#+:.......... ..............:-.............. "];const div_welcome=$("welcome---to---đo---điện---tâm---đồ---máy"),main=$("main"),style_=$$("style"),start_=$("#b_14"),reset_=$("#b_3"),showcons_=$("#b_22"),showcss_=$("#b_23"),show_eyes_ears_=$("#b_24"),allparas=$$(".para"),allbuttons=[showcons_,showcss_,show_eyes_ears_,...allparas],sttlog1=$create("input-log"),sttlog2=$create("input-log"),eyes_devider=$create("eye-eye"),log1=sttlog1.setAttribute.bind(sttlog1),log2=sttlog2.setAttribute.bind(sttlog2),log1rmv=sttlog1.removeAttribute.bind(sttlog1),log2rmv=sttlog2.removeAttribute.bind(sttlog2),divs=[],cmts=[],clocks=[],eyes=[];let template=[],transition=[],template_cmt=[],fullhtml=[],slogan_=[],numberdisplay=[],bub_yoff=[];for(let e=0;e<=800;e++)bub_yoff.push(Math.round(map(noise.simplex2(e/20,e/5),-1,1,-5,5)));let myrequest,showcss,show_eyes_ears,currentdate="00:00:00",elevation_=1,transcount=0,count2=0,countheart=0,cs_color1="yellow",cs_color2="red",length=5,height=40,sharpness=10,gap_=3,gapicon_="-",eleicon="<3",highestheight=50,elevation=1,delay_=100,count=0,last=0,last_=0,last__=0,datecheck=!0,cs_frame=!0,stop=!0,init_anim=!1,cs_color=!0,devtoolopenfirst=!0,transready=!1,genready=!0,showcons=!1;const video=$("video"),canvas=$("canvas"),ctx=canvas.getContext("2d"),cwidth=40,cheight=10,ewidth_diff=6,ewidth=48,h_cheight=Math.round(cheight/2),h_cwidth=Math.round(20),blink_cheight=Math.round(cheight/3),gradient="___...--:!/r(l1Z4H9W8$@";let Stream,audiodata,analyser;for(let e=0;e<=59;e++){let e=$create("div");e.below=e.below_=e.id=eleicon,e.upper=e.upper_=e.className="-",e.render=function({upper:e,below:t}){this.setAttribute("id",t),this.setAttribute("class",e)},divs.unshift(e)}(()=>{let[e,t]=e_line(max_height-3,10,24,0);for(let n=0;n<=10;n++){let _=Math.round((n-t)/e),l=$createcomment((()=>{let e="";for(let t=0;t<=max_height;t++)e+=5==t?"0":16==t?"B":t==_?"K":".";return e})());cmts.unshift(l)}})();for(let e=0;e<4;e++){let e=$createcomment("");clocks.unshift(e)}for(let e=0;e<slogan.length;e++){let t=$createcomment(slogan[e]);slogan_.unshift(t)}for(let e=0;e<so[0].length;e++){let e=$createcomment("");numberdisplay.unshift(e)}numberdisplay.unshift($createcomment(numdisplay_init[0])),numberdisplay.push($createcomment(numdisplay_init[1]));const numberdisplay_divider_1=$createcomment(numdisplay_init[1]),numberdisplay_divider_2=$createcomment(numdisplay_init[1]);render_numberdisplay({upper:{length:0},below:{length:0}});const eyes_mid=e=>e==h_cheight?"╠═════╣":"║.....║",eyes_left=e=>e==h_cheight?"╔═════╣":"......║",eyes_right=e=>e==h_cheight?"╠═════╗":"║......",eyes_divider_1=$createcomment((()=>{let e="......╔";for(let t=0;t<40;t++)e+="═";e+="╗.....╔";for(let t=0;t<40;t++)e+="═";return e+="╗......",e})()),eyes_allow_pls=$createcomment("....... your camera is not working some how... or are you sure you allowed camera permission? .......");for(let e=0;e<cheight;e++){let t=$createcomment((()=>{let t=eyes_left(e);for(let e=0;e<40;e++)t+="`";t+=eyes_mid(e);for(let e=0;e<40;e++)t+="`";return t+=eyes_right(e),t})());eyes.unshift(t)}const eyes_divider_2=$createcomment((()=>{let e="......╚";for(let t=0;t<40;t++)e+="═";e+="╝.....╚";for(let t=0;t<40;t++)e+="═";return e+="╝......",e})()),eyeshtml=[eyes_devider,eyes_divider_1,...eyes,eyes_divider_2],eyeshtml_i=eyeshtml.slice().reverse();fullhtmledit(sttlog1,numberdisplay_divider_1,numberdisplay,numberdisplay_divider_2,sttlog2,clocks,cmts,divs);let isBlinking=!1,blinkCount=0;async function animation(e){if((!last||e-last>=1e3)&&(last=e,datecheck=!0,cs_color=!cs_color),(!last_||e-last_>=300)&&(last_=e,cs_frame=!0),genready||(render_first(template[count]),render_numberdisplay(template[count]),render_comment(),cs_frame&&(showcons&&(console.clear(),render_console()),cs_frame=!1),render_toptobot(),++count==template.length&&(count=0),++countheart==heart.length&&(countheart=0)),(!last__||e-last__>=200)&&(last__=e,show_eyes_ears)){isBlinking?(blinkCount++,blinkCount>3&&(isBlinking=!1,blinkCount=0)):Math.random()<.05&&(isBlinking=!0),render_cam(ctx);const e=getPixelsGreyScale(ctx);render_eyes(e),analyser.getByteFrequencyData(audiodata),render_ears(audiodata)}await wait(delay_),myrequest=stop?null:requestAnimationFrame(animation)}function render_toptobot(){for(let e=1;e<=59;e++)divs[e].render(divs[e-1]),divs[e].upper_=divs[e-1].upper,divs[e].below_=divs[e-1].below;for(let e=1;e<=59;e++)divs[e].upper=divs[e].upper_,divs[e].below=divs[e].below_}function render_console(){let e=[],t="%c ______________________________________________________________________________________________________________________\n/                                                                                                                      \\\n";for(let t=1;t<=59;t++)e.push(Math.round(map(divs[t-1].upper.length,0,60,1,15)));for(let n=15;n>0;n--){t+="{";for(let _=1;_<=59;_++)t+=e[_-1]==n?"@@":"  ";t+="}\n"}t+="\\______________________________________________________________________________________________________________________/",console.log(t,`color: ${cs_color?cs_color1:cs_color2}`)}function template_generate(){genready=!0,noise.seed(Math.random());let e="";for(let t=1;t<=elevation;t++)e+=eleicon;let t=Math.ceil(gap_/2),n=highestheight-height,_={vl:0,index:0},l={vl:height,index:0},o=[];template=[],transition=[],template_cmt=[];for(let e=0;e<TWO_PI;e+=(TWO_PI-.01)/length){let t=cos(e)+1,n=sin(e)+1,a=map(noise.perlin2(t*sharpness,n*sharpness),-1,1,0,height);o.push(a),a>_.vl&&(_.vl=a,_.index=o.length-1),a<l.vl&&(l.vl=a,l.index=o.length-1)}for(let t=0;t<o.length;t++){let n="";for(let e=0;e<=o[t];e++)n+="-";template.push({upper:n,below:e,u:o[t]})}for(let e=0;e<n;e++)template[_.index].upper+="-";template[_.index].u+=n;let a=Math.ceil(length/4);for(let t=Math.round(o[0]*(a-1)/a);t>0;t-=o[0]/a){let n="";for(let e=0;e<t;e++)n+="-";template.push({upper:n,below:e,u:t}),template.unshift({upper:n,below:e,u:t})}for(let n=1;n<=t;n++)template.push({upper:gapicon_,below:e,u:gapicon_.length}),template.unshift({upper:gapicon_,below:e,u:gapicon_.length});template_cmt_generate();let s=Math.abs(elevation-elevation_);if(0!==s){let e=elevation<elevation_?elevation:elevation_,t=10;for(let n=1;n<=t;n++){let _="";for(let t=1;t<=e;t++)_+=eleicon;for(let e=1;e<=s*(n/t);e++)_+=eleicon;transition.push(_)}elevation-elevation_<0&&transition.reverse(),clock_generate(),transready=!0,elevation_=elevation}count=0,genready=!1}function template_cmt_generate(){const e=(e,t,n,_)=>{const l=Math.round(Math.sqrt(t**2-(e-n)**2));return[_+l,_-l]},t=template.length,n=cmts.length,_=max_height+1;let l=Math.round(2*Math.random()+3),o=Math.ceil(l/2),a=Math.ceil((_+2*l-o)/t),s=-2*l+o,r=-l+o,i=Math.round(Math.random()*(n-1));const c=Array.from({length:t},(()=>Array.from({length:n},(()=>Array.from({length:_},(()=>!1))))));let h=Math.round(Math.random()*(799-t));for(let o=0;o<t;o++){let t=i+2*bub_yoff[o+h],u=l-bub_yoff[o+h],d=[],g=0;for(let l=s;l<=s+2*u;l++){const[a,s]=e(l,u,r,t);l>=0&&l<_&&(a>=0&&a<n&&(c[o][a][l]=!0,d.push(a)),s>=0&&s<n&&(c[o][s][l]=!0,d.push(s)))}d.sort(((e,t)=>e-t));for(let l=t-u;l<=t+u;l++){if(d[g]==l){g++;continue}const[a,s]=e(l,u,t,r);l>=0&&l<n&&(a>=0&&a<_&&(c[o][l][a]=!0),s>=0&&s<_&&(c[o][l][s]=!0))}s+=a,r+=a}for(let e=0;e<=template.length-1;e++){let t=[],[n,_]=e_line(14+2*elevation,0,template[e].u+13+2*elevation,10),[l,o]=e_line(5,0,4+2*elevation,10),[a,s]=e_line(max_height-3,0,template[e].u+21+2*elevation,10);for(let r=0;r<=cmts.length-1;r++){let i="",h=n===1/0?14+2*elevation:Math.round((r-_)/n),u=a===1/0?max_height-3:Math.round((r-s)/a),d=14+2*elevation+Math.round((h-(14+2*elevation))/5*3),g=14+2*elevation+Math.round((h-(14+2*elevation))/4),m=e%2==0?5:Math.round((r-o)/l);for(let t=0;t<=max_height;t++)t==g?i+="B":t==m?i+="0":t==d?i+="I":t==h?i+="P":t==u?i+="K":c[e][r][t]?i+="@":i+=".";t.push(i)}template_cmt.push(t)}}function clock_generate(){for(let e=0;e<clocks.length;e++){let t="";for(let e=0;e<2;e++)t+=".";t+=clock[e];for(let n=clock[e].length+3;n<5+2*elevation+clock.skt;n++)t+=1==e?n%2==0?">":"o":2==e&&n%2==0?"A":".";t+=clock[e];for(let n=clock[e].length+4+2*elevation+clock.skt;n<=max_height-clock.skt;n++)t+=1==e?n%2==0?">":"o":2==e&&n%2==0?"A":".";t+=clock[e],clocks[e].nodeValue=t}}function dung(){stop=!0}function render_first({upper:e,below:t}){divs[0].upper=e,transready?transcount>transition.length-1?(transready=!1,transcount=0,divs[0].below=t):divs[0].below=transition[transcount++]:divs[0].below=t,divs[0].render(divs[0])}function render_comment(){for(let e=0;e<=cmts.length-1;e++)cmts[e].nodeValue=template_cmt[count][e]}function render_numberdisplay({upper:e,below:t}){let n=Math.round(map(e.length+t.length,3,30,0,1e3)),_=n<0?"0":n.toString(),l=_.length,o=".";if(datecheck){currentdate=(new Date).toLocaleTimeString().split(" ")[0];let e=currentdate.length;for(let t=1;t<=8-e;t++)currentdate="0"+currentdate;datecheck=!1}for(let e=1;e<=5-l;e++)_="0"+_;numberdisplay[0].nodeValue=numdisplay_init[2]+(()=>{let e;n<20?e="*my passion dies*":n<80?(e="alert!!! critical!!!",o='"'):n<300?(e="concerned!",o="-"):n<800?(e="not great not terrible",o="~"):n<1300?(e="stable (means good)",o="!"):n<1700?(e="flourished and healthy!",o="+"):n<2e3?(e="a bit devoted but I'll allow",o="?"):n<2500?(e="this is out of hand",o="$"):n<3e3?(e="too radical already!",o="&"):(e="*extreme comfort zone*",o="@");let t=max_height-numdisplay_init[2].length-numdisplay_init[3].length-e.length;for(let n=0;n<=t;n++)e+=".";return e+=numdisplay_init[3],e})(),numberdisplay[numberdisplay.length-1].nodeValue=(()=>{let e,t="";n<800?(e="[make me consume more!]",cs_color1="red",cs_color2="yellow"):n<2e3?(e="[aight! keep me just right there!]",cs_color1="yellow",cs_color2="green"):(e="[this is enough please...]",cs_color1="green",cs_color2="blue");let _=e.length;e=numdisplay_init[1]+e+numdisplay_init[1];for(let n=0;n<=max_height;n++)t+=e[max_height+_-count2+1+n];return count2+=count2>=max_height+_+1?-count2:1,t})(),style_[1].textContent=showcss?`body, * {\n        content: 'my heart: ${Math.round(n/1700*100)}% ${heart[countheart].replaceAll("@",o)}';\n    }`:"";for(let e=1;e<numberdisplay.length-1;e++){let t="",n="";for(let n=0;n<_.length;n++)t+=`..${so[_[n]][e-1]}`;for(let t=0;t<currentdate.length;t++)n+=`..${so[currentdate[t]][e-1]}`;let l=max_height-t.length-n.length;for(let e=0;e<=l;e++)t+=".";numberdisplay[e].nodeValue=t+n}}function e_line(e,t,n,_){const l=(_-t)/(n-e);return[l,t-l*e]}function wait(e){return new Promise((t=>setTimeout(t,e)))}function map(e,t,n,_,l){return(e-t)*(l-_)/(n-t)+_}function delay(e){delay_=e}function reset(){for(length=5,height=40,sharpness=10,gap_=3,gapicon_="-",eleicon="<3",highestheight=50,elevation=1,para_funcs.eat_=para_funcs.sleep_=para_funcs.ent_=para_funcs.shit_=para_funcs.sex_=para_funcs.exerc_=para_funcs.fail_=para_funcs.poor_=para_funcs.learn_=para_funcs.unlearn_=para_funcs.relearn_=para_funcs.prac_=para_funcs.OT_=para_funcs.peer_=para_funcs.finance_=para_funcs.fren_=para_funcs.fam_=0;sttlog1.attributes.length>0;)log1rmv(sttlog1.attributes[0].name);for(;sttlog2.attributes.length>0;)log2rmv(sttlog2.attributes[0].name);template_generate()}async function init_cam(){try{Stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0}),video.srcObject=Stream,video.play();const e=new(window.AudioContext||window.webkitAudioContext);analyser=e.createAnalyser(),analyser.fftSize=32;e.createMediaStreamSource(Stream).connect(analyser),audiodata=new Uint8Array(analyser.frequencyBinCount),show_eyes_ears=!0;for(let e=0;e<eyeshtml_i.length;e++){if(await wait(50),!show_eyes_ears)return;slogan_[slogan_.length-1].after(eyeshtml_i[e])}fullhtmledit(eyeshtml,sttlog1,numberdisplay_divider_1,numberdisplay,numberdisplay_divider_2,sttlog2,clocks,cmts,divs)}catch(e){console.log("An error occurred: "+e),slogan_[slogan_.length-1].after(eyes_allow_pls),fullhtmledit(eyes_allow_pls,sttlog1,numberdisplay_divider_1,numberdisplay,numberdisplay_divider_2,sttlog2,clocks,cmts,divs),stop_cam()}}async function stop_cam(){if(show_eyes_ears=!1,show_eyes_ears_.classList.remove("pressed"),show_eyes_ears_.innerHTML="show <br /> &#128065; & &#128066;",document.documentElement.style.margin="0px",Stream){Stream.getTracks().forEach((e=>e.stop())),video.srcObject=null;for(let e=0;e<eyeshtml_i.length;e++){if(await wait(50),show_eyes_ears)return;eyeshtml_i[e].remove()}fullhtmledit(sttlog1,numberdisplay_divider_1,numberdisplay,numberdisplay_divider_2,sttlog2,clocks,cmts,divs)}}function fullhtmledit(...e){fullhtml=slogan_.concat(...e).reverse()}function clearphoto(){ctx.fillStyle="#fff",ctx.fillRect(0,0,ewidth,cheight)}function render_cam(e){ewidth&&cheight?(canvas.width=ewidth,canvas.height=cheight,e.drawImage(video,0,0,ewidth,cheight)):clearphoto()}function getPixelsGreyScale(e){const t=e.getImageData(0,0,canvas.width,canvas.height).data;let n=0;const _=new Array(cheight).fill(0).map((()=>[]));for(let e=0,l=0;e<t.length;e+=4){const o=(t[e]+t[e+1]+t[e+2])/3;_[n].push(o),l<ewidth&&l++,l===ewidth&&(l=0,n+=1)}return _}function getCharByScale(e){const t=Math.floor(e/255*22);return gradient[t]}function isPointInsideEllipse(e,t,n,_,l,o){return(e-n)**2/l**2+(t-_)**2/o**2}template_generate(),clock_generate();const render_ears=e=>{const t=e.reduce(((e,t)=>e+t),0)/e.length;document.documentElement.style.margin=`${Math.round(map(t,15,60,-15,50))}px`},render_eyes=e=>{eyes.forEach(((t,n)=>{t.nodeValue=(()=>{let t=eyes_left(n);for(let _=45;_>=6;_--){isPointInsideEllipse(7+_-6,n,7+h_cwidth,h_cheight-.5,h_cwidth+.5,h_cheight+.2)>1?t+="`":t+=n<blink_cheight*blinkCount?".":getCharByScale(e[n][_])}t+=eyes_mid(n);for(let _=39;_>=0;_--){isPointInsideEllipse(54+_,n,54+h_cwidth,h_cheight-.5,h_cwidth+.5,h_cheight+.2)>1?t+="`":t+=n<blink_cheight*blinkCount?".":getCharByScale(e[n][_])}return t+=eyes_right(n),t})()}))};let timeout=null;const para_funcs={eat_:0,sleep_:0,ent_:0,shit_:0,sex_:0,exerc_:0,fail_:0,poor_:0,learn_:0,unlearn_:0,relearn_:0,prac_:0,OT_:0,peer_:0,finance_:0,fren_:0,fam_:0,eat(){length+=2,sharpness+=5,log1("Eat","x"+ ++this.eat_)},sleep(){height+=3,gap_-=3,sharpness-=2,log1("Sleep","x"+ ++this.sleep_)},ent(){gap_+=2,elevation+=2,sharpness-=5,log1("Entertainment","x"+ ++this.ent_)},shit(){gap_+=3,length+=2,sharpness-=5,log1("Go_shit","x"+ ++this.shit_)},sex(){height+=8,length+=5,gap_+=3,log1("Have_sex","x"+ ++this.sex_)},exerc(){elevation+=1,sharpness+=3,log1("Physical_exercise","x"+ ++this.exerc_)},fail(){length-=3,height-=2,gap_-=3,log2("Fail","x"+ ++this.fail_)},poor(){length-=2,elevation-=3,gap_-=7,log2("Poverty","x"+ ++this.poor_)},learn(){length+=8,gap_-=5,log1("Learn","x"+ ++this.learn_)},unlearn(){length-=8,height+=7,gap_+=2,log1("Unlearn","x"+ ++this.unlearn_)},relearn(){length+=5,elevation+=3,log1("Relearn","x"+ ++this.relearn_)},prac(){height+=4,elevation+=2,log1("Repeated_practice","x"+ ++this.prac_)},OT(){length-=7,height-=5,gap_-=6,log2("OT","x"+ ++this.OT_)},peer(){length-=8,gap_-=5,elevation-=3,log2("Peer_pressure","x"+ ++this.peer_)},finance(){gapicon_="$maker",eleicon="$$",gap_-=3,log1("Finance","x"+ ++this.finance_)},fren(){gapicon_="@<@",eleicon="#*",log1("Friends","x"+ ++this.fren_)},fam(){gapicon_="<3",eleicon="()",gap_-=3,log1("Family","x"+ ++this.fam_)}};for(let e=0;e<allparas.length;e++)allparas[e].onclick=para_onclick;function para_onclick(e){null!==timeout&&clearTimeout(timeout),timeout=setTimeout((function(){checkthu(),template_generate(),timeout=null}),2e3),para_funcs[e.target.getAttribute("para")]()}function checkthu(){function e(e,t=1){return e<t?t:e}height=e(height,0),length=e(length,0),sharpness=e(sharpness),elevation=e(elevation),elevation=elevation>38?38:elevation,gap_=e(gap_),highestheight=1.5*height}start_.onclick=function(){this.classList.toggle("pressed"),stop=!stop;for(let e=0;e<allparas.length;e++)allparas[e].disabled=!!stop;reset_.disabled=showcss_.disabled=showcons_.disabled=show_eyes_ears_.disabled=!!stop,myrequest=stop?null:requestAnimationFrame(animation)},showcss_.onclick=function(){this.classList.toggle("pressed"),showcss=!showcss,this.innerHTML=showcss?"see <br /> styles":"show <br /> in styles"},showcons_.onclick=function(){this.classList.toggle("pressed"),showcons=!showcons,this.innerHTML=showcons?"see <br /> console":"show <br /> in console"},show_eyes_ears_.onclick=function(){this.classList.toggle("pressed"),this.innerHTML=show_eyes_ears?"show <br /> &#128065; & &#128066;":"see <br /> &#128065; & &#128066;",show_eyes_ears?stop_cam():init_cam()},setInterval((function(){stop||(height-=6,length-=3,elevation-=2,gap_-=5,checkthu(),template_generate())}),8e3);