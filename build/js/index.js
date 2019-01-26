let e=new Map;function t(t,F,a){("string"==typeof t?e.get(t):t).addEventListener(F,a)}[...document.body.querySelectorAll("[data-lsid]")].forEach(t=>{!function(t,F){e.set(F,t);let a=F.indexOf(".");if(a>0){let l=F.slice(a),r=e.get(l);r||(r=new Map,e.set(l,r)),r.set(F.slice(0,a),t)}}(t,t.dataset.lsid)});let F=new Map;function a(e,...t){let a=F.get(e);a&&a.forEach(e=>e(...t))}function l(e,t){let a=F.get(e);a||(a=[],F.set(e,a)),a.push(t)}let r={Plants:{"bush 1":{axiom:"F",rules:{F:"F[+FF][-FF]F[-F][+F]F"},alpha:90,theta:35,iterCount:4,step:6},"bush 2":{axiom:"F",rules:{F:"FF+[+F-F-F]-[-F+F+F]"},alpha:90,theta:22.5,iterCount:4,step:9},sticks:{axiom:"X",rules:{F:"FF",X:"F[+X]F[-X]+X"},alpha:90,theta:20,iterCount:7,step:2},"plant 1":{axiom:"X",rules:{F:"FF",X:"F-[[X]+X]+F[+FX]-X"},alpha:90,theta:25,iterCount:6,step:3},"plant 2":{axiom:"F",rules:{F:"F[+F]F[-F][F]"},alpha:90,theta:20,iterCount:5,step:8},"plant 3":{axiom:"X",rules:{F:"FF",X:"F[+X][-X]FX"},alpha:90,theta:25.71,iterCount:6,step:3.5},"savine 1":{axiom:"F-F[-F+F-F]+[+F-F-F]",rules:{F:"-F[-F+F-F]+[+F-F-F]-F[-F+F-F]+[+F-F-F]-F[-F+F-F]+[+F-F-F]"},alpha:0,theta:20,iterCount:3,step:3},"savine 2":{axiom:"-[F-F[-F+F-F]+[+F-F-F]]+[F-F[-F+F-F]+[+F-F-F]]",rules:{F:"-F[-F+F-F]+[+F-F-F]-F[-F+F-F]+[+F-F-F]-F[-F+F-F]+[+F-F-F]"},alpha:0,theta:20,iterCount:3,step:3},"liana sarment":{axiom:"FYX",rules:{F:"FFFXYFXY-[FFFXYFXY]",X:"Y[[XY]+X]+F[+FX]+XF",Y:"[FFF[[YX]+Y]+F[+FY]+F]"},alpha:90,theta:20,iterCount:4,step:.5},"liana tangle":{axiom:"FYX",rules:{F:"FFFXYFXY-[FFFXYFXY]",X:"Y[[XY]+X]+F[+FX]+XF",Y:"FFF[[YX]+Y]+F[+FY]+F"},alpha:90,theta:20,iterCount:4,step:2},tree:{axiom:"F",rules:{F:"-F[-F+F-F]+[+F-F-F]"},alpha:0,theta:20,iterCount:5,step:15},weed:{axiom:"F",rules:{F:"F[+F]F[-F]F"},alpha:90,theta:25.714,iterCount:5,step:2},"flower 1":{axiom:"F[+F+F][-F-F][++F][--F]F",rules:{F:"FF[++F][+F][F][-F][--F]"},alpha:90,theta:11.25,iterCount:3,step:15},"bush 3":{axiom:"VZFFF",rules:{F:"F",V:"[+++W][---W]YV",W:"+X[-W]Z",X:"-W[+X]Z",Y:"YZ",Z:"[-FFF][+FFF]F"},alpha:90,theta:20,iterCount:9,step:10},algae:{axiom:"AF",rules:{A:"FFFFFV[+++H][---Q]BW",B:"B",C:"FFFFFV[+++BA]BD",D:"FFFFFV[+++H][---Q]BE",E:"FFFFFV[+++H][---Q]BG",F:"F",G:"FFFFFV[---BA]BA",H:"IBFF",I:"BFFF[--M]J",J:"BFFF[--N]K",K:"BFFF[--O]L",L:"BFFF[--P]",M:"BFN",N:"BFO",O:"BFP",P:"BF",Q:"RBF",R:"BFFF[++M]S",S:"BFFF[++N]T",T:"BFFF[++O]U",U:"BFFF[++P]",V:"FV",W:"FFFFFV[+++H][---Q]BC"},alpha:90,theta:12,iterCount:17,step:2},"algae 2":{axiom:"AF",rules:{A:"FFFFFY[++++N][----T]BZ",B:"B",C:"FFFFFY[++++N][----T]BD",D:"FFFFFY[++++N][----T]BE",E:"FFFFFY[++++N][----T]BG",F:"F",G:"FFFFFY[+++BA]BH",H:"FFFFFY[++++N][----T]BI",I:"+FFFFFY[++++N][----T]BJ",J:"FFFFFY[++++N][----T]BK",K:"-FFFFFY[++++N][----T]BL",L:"FFFFFY[++++N][----T]BM",M:"FFFFFY[---BA]BA",N:"OBFFF",O:"BFFFP",P:"BFFF[-S]Q",Q:"BFFF[-S]R",R:"BFFF[-S]",S:"BFBF",T:"UBFFF",U:"BFFFV",V:"BFFF[+S]W",W:"BFFF[+S]X",X:"BFFF[+S]",Y:"FY",Z:"+FFFFFY[++++N][----T]BC"},alpha:90,theta:12,iterCount:17,step:2},"plant 4":{axiom:"--------C",rules:{F:"F",C:"NF[--P]F+C",N:"NFF",P:"Q",Q:"C"},alpha:0,theta:11.25,iterCount:20,step:1.2},"plant 5":{axiom:"----G",rules:{F:"F",G:"GFX[+G][-G]",X:"X[-FFF][+FFF]FX"},alpha:0,theta:25.7,iterCount:6,step:4},dandelion:{axiom:"FF[-Y][Z][+Z]",rules:{F:"F",Y:"FF+F-F-F[FFFZ][+Z]-F-FZ",Z:"FF-F+F+F[Y][-Y]+F+FY"},alpha:90,theta:15,iterCount:6,step:6},sapling:{axiom:"FFFFFFX",rules:{F:"F",X:"FFF-[-F+F[Y]-[X]]+[+F+F[X]-[X]]",Y:"FF-[-F+F]+[+F+FY]"},alpha:90,theta:15,iterCount:6,step:10},"flower 2":{axiom:"F-F+F[++X][F+X][F-X][--X]",rules:{F:"F",W:"F-F+F[++X][F+X][F-X][--X]",X:"F+FF-F[++Y][+Y][-Z][--Z]",Y:"-[Z]F-FF-FF-FF-F[Z]",Z:"+[Y]F+FF+FF+FF+F[Y]"},alpha:90,theta:10,iterCount:9,step:4.5},"bonsai branch":{axiom:"A",rules:{F:"F",A:"F-FFA+[FAFA+FFF]F"},alpha:90,theta:30,iterCount:5,step:7}},Curves:{"Hilbert curve":{axiom:"X",rules:{F:"F",X:"-YF+XFX+FY-",Y:"+XF-YFY-FX+"},alpha:0,theta:90,iterCount:6,step:7},"Gosper curve":{axiom:"XF",rules:{F:"F",X:"X+YF++YF-FX--FXFX-YF+",Y:"-FX+YFYF++YF+FX--FX-Y"},alpha:0,theta:60,iterCount:4,step:8},"Peano curve":{axiom:"F",rules:{F:"F-F+F+F+F-F-F-F+F"},alpha:45,theta:90,iterCount:4,step:8},"Sierpinski curve":{axiom:"F+FX+F+XF",rules:{F:"F",X:"XF-F+F-XF+F+XF-F+F-X"},alpha:45,theta:90,iterCount:4,step:8},curve:{axiom:"F-F-F-F-",rules:{F:"FF-F-F-F-F-F+F"},alpha:0,theta:90,iterCount:4,step:3.5},cross:{axiom:"FX",rules:{X:"FX+FX+FXFY-FY-",Y:"+FX+FXFY-FY-FY"},alpha:0,theta:90,iterCount:5,step:4.5},island:{axiom:"F+F+F+F",rules:{F:"F+F-F-FFF+F+F-F"},alpha:0,theta:90,iterCount:3,step:4},"Koch’s snowflake":{axiom:"F++F++F",rules:{F:"F-F++F-F"},alpha:0,theta:60,iterCount:4,step:5},"Koch’s curve":{axiom:"F+F+F+F",rules:{F:"FF+F+F+F+F+F-F"},alpha:0,theta:90,iterCount:4,step:3.5},chain:{axiom:"F+F+F+F",rules:{F:"F+B-F-FFF+F+B-F",B:"BBB"},alpha:0,theta:90,iterCount:3,step:4},frame:{axiom:"YXY-YXY-YXY-YXY",rules:{X:"FX+FX+FXFYFX+FXFY-FY-FY-",Y:"+FX+FX+FXFY-FYFXFY-FY-FY"},alpha:0,theta:90,iterCount:3,step:4},"Moore’s curl":{axiom:"X",rules:{X:"FX+FX+FXFYFX+FXFY-FY-FY-",Y:"+FX+FX+FXFY-FYFXFY-FY-FY"},alpha:180,theta:90,iterCount:4,step:3.5},"anklets of Krishna":{axiom:"-X--X",rules:{F:"F",X:"XFX--XFX"},alpha:0,theta:45,iterCount:5,step:10},"mango-tree foliage":{axiom:"A---A",rules:{F:"F",B:"B",A:"B-F+Z+F-BA",Z:"F-FF-F--[--Z]F-FF-F--F-FF-F--"},alpha:0,theta:60,iterCount:7,step:15},pentive:{axiom:"Q",rules:{P:"--FR++++FS--FU",Q:"FT++FR----FS++",R:"++FP----FQ++FT",S:"FU--FP++++FQ--",T:"+FU--FP+",U:"-FQ++FT-"},alpha:36,theta:36,iterCount:7,step:15},"Sierpinski median curve":{axiom:"L--F--L--F",rules:{F:"F",L:"+R-F-R+",R:"-L+F+L-"},alpha:0,theta:45,iterCount:10,step:5},lace:{axiom:"W",rules:{F:"F",W:"+++X--F--ZFX+",X:"---W++F++YFW-",Y:"+ZFX--F--Z+++",Z:"-YFW++F++Y---"},alpha:180,theta:30,iterCount:7,step:4.5},"Peano-c":{axiom:"+Z",rules:{X:"FX-FY-FX+FY+FX+FY+FX+FY+FX-FY-FX-FY-FX-FY-FX+FY+FX",Y:"FY",Z:"FX"},alpha:0,theta:45,iterCount:5,step:3.5},"Hex-7-b":{axiom:"FX",rules:{X:"-F++F-X-F--F+Y---F--F+Y+F++F-X+++F++F-X-F++F-X+++F--F+Y--",Y:"+F++F-X-F--F+Y+F--F+Y---F--F+Y---F++F-X+++F++F-X+++F--F+Y"},alpha:0,theta:30,iterCount:4,step:5}},Shapes:{"Sierpinski carpet":{axiom:"FXF--FF--FF",rules:{F:"FF",X:"--FXF++FXF++FXF--",Y:"-FX-Y"},alpha:0,theta:60,iterCount:5,step:7},mosaic:{axiom:"F-F-F-F",rules:{F:"F-B+FF-F-FF-FB-FF+B-FF+F+FF+FB+FFF",B:"BBBBBB"},alpha:0,theta:90,iterCount:2,step:7},snowflake:{axiom:"[F]+[F]+[F]+[F]+[F]+[F]",rules:{F:"F[++F][-FF]FF[+F][-F]FF"},alpha:0,theta:60,iterCount:3,step:2},crystal:{axiom:"F+F+F+F",rules:{F:"FF+F++F+F"},alpha:0,theta:90,iterCount:4,step:5},pentigree:{axiom:"F-F-F-F-F",rules:{F:"F-F++F+F-F-F"},alpha:0,theta:72,iterCount:4,step:5},square:{axiom:"F+F+F+F",rules:{F:"FF+F+F+F+FF"},alpha:0,theta:90,iterCount:4,step:5},"fluffy globule":{axiom:"X-X-X-X-X-X-X-X-X",rules:{X:"FX+X--X+X--X+X--X+X"},alpha:0,theta:40,iterCount:4,step:18},horizons:{axiom:"+F++++F",rules:{F:"F+F+F++++F+F+F"},alpha:0,theta:45,iterCount:5,step:1.3},napkin:{axiom:"F--F--F--F--F--F",rules:{F:"-F[--F--F]++F--F+"},alpha:0,theta:30,iterCount:4,step:4.5},"Levi’s fractal":{axiom:"F",rules:{F:"+F--F+"},alpha:180,theta:45,iterCount:14,step:1.9},"Levi’s carpet":{axiom:"F++F++F++F",rules:{F:"+F--F+"},alpha:180,theta:45,iterCount:14,step:1.8},"spiral tiling":{axiom:"AAAA",rules:{F:"F",A:"X+X+X+X+X+X+",X:"[F+F+F+F[---X-Y]+++++F++++++++F-F-F-F]",Y:"[F+F+F+F[---Y]+++++F++++++++F-F-F-F]"},alpha:0,theta:15,iterCount:5,step:10},"Penrose mosaic":{axiom:"+WF--XF---YF--ZF",rules:{W:"YF++ZF----XF[-YF----WF]++",X:"+YF--ZF[---WF--XF]+",Y:"-WF++XF[+++YF++ZF]-",Z:"--YF++++WF[+ZF++++XF]--XF"},alpha:270,theta:36,iterCount:6,step:11},"Penrose tesselation":{axiom:"[X]++[X]++[X]++[X]++[X]",rules:{W:"YF++ZF----XF[-YF----WF]++",X:"+YF--ZF[---WF--XF]+",Y:"-WF++XF[+++YF++ZF]-",Z:"--YF++++WF[+ZF++++XF]--XF"},alpha:0,theta:36,iterCount:5,step:20},"snowflake 2":{axiom:"F[X]F++F[X]F++F[X]F++F[X]F",rules:{X:"[+Y][-Y][++Y][--Y]",Y:"YF[X]YF"},alpha:0,theta:45,iterCount:9,step:1},wheel:{axiom:"WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",rules:{W:"F[X]+",X:"[+++++++++++++Y[X]]-------------Y[X]",Y:"YFYF"},alpha:0,theta:5,iterCount:8,step:2},"hexagonal star":{axiom:"S",rules:{L:"LZFR--FR-F++LF++L-F+LF+R--Y",R:"Z++L-FR-F+R--FR--F+LF++LFYR",S:"L",Y:"+",Z:"-"},alpha:0,theta:60,iterCount:6,step:4.75},HexGasket:{axiom:"F+F+F+F+F+F--",rules:{F:"F+F+F--F--F+F+F"},alpha:0,theta:60,iterCount:4,step:3}},Dragons:{dragon:{axiom:"FX",rules:{F:"F",X:"X+YF+",Y:"-FX-Y"},alpha:0,theta:90,iterCount:12,step:5},terdragon:{axiom:"F",rules:{F:"F+F-F"},alpha:120,theta:120,iterCount:8,step:6},"median dragon":{axiom:"-X",rules:{F:"F",X:"X+F+Y",Y:"X-F-Y"},alpha:0,theta:45,iterCount:12,step:3}},Miscellaneous:{urchin:{axiom:"F",rules:{F:"F[-F+F-F]+[+F-F-F]"},alpha:0,theta:20,iterCount:5,step:15},"Cesaro 1":{axiom:"F",rules:{F:"F++++++++++F--------------------F++++++++++F"},alpha:180,theta:8,iterCount:6,step:2.9},"Cesaro 2":{axiom:"AAAA",rules:{A:"F+++++++++F------------------",F:"F++++++++F----------------F++++++++F"},alpha:0,theta:10,iterCount:6,step:4}}},s={AXIOM:"The axiom may contain only the following characters: “A”-Z”, “+”, “-”, “[”, “]”",RULE:"Production rules may may contain only the following characters: “A”-Z”, “+”, “-”, “[”, “]”",LETTER:"The allowed alphabet letters are: “A”-“Z”",ALPHA:"The “alpha” parameter must be a finite number",THETA:"The “theta” parameter must be a finite number",STEP:"The “step” parameter must be a positive finite number",COUNT:"The number of iterations must be integer and finite",NUMBER:"A valid finite number expected"},o=/^[A-Z+\-[\]]*$/;function i(e,t=s.RULE){return o.test(e)||t}function n(e,t=s.NUMBER){return Number.isFinite(e)||t}const p=[["F",""],["B",""],["+","+"],["-","-"],["[","["],["]","]"]],c={alpha:0,theta:0,step:10,iterCount:3};let u,h,d,m={get axiom(){return u},set axiom(e){let t=i(e,s.AXIOM);if(!0!==t)throw new Error(t);u=e},get alpha(){return d.alpha},set alpha(e){let t=n(e,s.ALPHA);if(!0!==t)throw new Error(t);d.alpha=e},get theta(){return d.theta},set theta(e){let t=n(e,s.THETA);if(!0!==t)throw new Error(t);d.theta=e},get step(){return d.step},set step(e){let t=function(e,t=s.STEP){return Number.isFinite(e)&&e>0||t}(e);if(!0!==t)throw new Error(t);d.step=e},get iterCount(){return d.iterCount},set iterCount(e){let t=function(e,t=s.COUNT){return Number.isInteger(e)&&e>0||t}(e);if(!0!==t)throw new Error(t);d.iterCount=e},get rules(){let e=[...h].filter(([e])=>e>="A"&&e<="Z");return new Map(e)},setRule(e,t){let F=function(e,t=s.LETTER){return 1===e.length&&e>="A"&&e<="Z"||t}(t);if(!0!==F)throw new Error(F);if(!0!==(F=i(e)))throw new Error(F);h.set(t,e)},setRules(e){e.forEach(this.setRule,this)},deleteRule:e=>!("F"===e||"B"===e||!h.has(e))&&(h.delete(e),!0),get vacantLetters(){let e=new Set;for(let t of"ACDEGHIJKLMNOPQRSTUVWXYZ")h.has(t)||e.add(t);return e},getCode(){let e=u;for(let t=d.iterCount;t>0;t--){let t="";for(let F of e)t+=h.get(F)||"";e=t}return e},reset(){u="",d=Object.assign({},c),h=new Map(p)}};m.reset();let X=e.get("canvas"),g=X.getContext("2d"),f=window.matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)").matches?2:1,Y={stack:[]},C=new Map;C.set("F",()=>{Y.x+=Y.step*Math.cos(Y.alpha),Y.y+=Y.step*Math.sin(Y.alpha),g.lineTo(Y.x,Y.y)}),C.set("B",()=>{Y.x+=Y.step*Math.cos(Y.alpha),Y.y+=Y.step*Math.sin(Y.alpha),g.moveTo(Y.x,Y.y)}),C.set("+",()=>{Y.alpha+=Y.theta}),C.set("-",()=>{Y.alpha-=Y.theta}),C.set("[",()=>{Y.stack.push({x:Y.x,y:Y.y,alpha:Y.alpha})}),C.set("]",()=>{({x:Y.x,y:Y.y,alpha:Y.alpha}=Y.stack.pop()),g.moveTo(Y.x,Y.y)});let x=new Map([...C]);x.set("F",()=>{Y.x+=Y.step*Math.cos(Y.alpha),Y.y+=Y.step*Math.sin(Y.alpha),Y.left=Math.min(Y.left,Y.x),Y.right=Math.max(Y.right,Y.x),Y.top=Math.min(Y.top,Y.y),Y.bottom=Math.max(Y.bottom,Y.y)}),x.set("B",x.get("F")),x.set("]",()=>{({x:Y.x,y:Y.y,alpha:Y.alpha}=Y.stack.pop())});let k={settings:{fillStyle:"transparent",strokeStyle:"#080"},reset(){Y.cleanCode="",Y.x=Y.y=0,({step:Y.step,alpha:Y.alpha,theta:Y.theta,iterCount:Y.count}=m),Y.step*=f,Y.stack.length=0,Y.left=Y.top=Number.MAX_VALUE,Y.right=Y.bottom=-Number.MAX_VALUE},prepare(){let e=m.getCode(),t="";for(let F of e){let e=x.get(F);e&&(t+=F,e())}Y.cleanCode=t},setup(){Y.x=(X.offsetWidth-Y.left-Y.right)/2,Y.y=(X.offsetHeight-Y.top-Y.bottom)/2,Y.alpha=m.alpha,Y.stack.length=0},clear(){g.strokeStyle=this.settings.strokeStyle,g.fillStyle=this.settings.fillStyle,g.clearRect(0,0,X.offsetWidth,X.offsetHeight),g.fillRect(0,0,X.offsetWidth,X.offsetHeight)},repaint(){if(this.clear(),Y.cleanCode){this.setup(),g.beginPath(),g.moveTo(Y.x,Y.y);for(let e of Y.cleanCode)C.get(e)();g.stroke()}},plot(){this.reset(),this.prepare(),this.repaint()}};const y=!!navigator.clipboard;function L(e){return y?navigator.clipboard.writeText(e):Promise.reject("Clipboard API is not supported in this browser")}let B=new Map,w={get current(){return e.get("collections").value},set current(t){e.get("collections").value=t,w.fillLSystemList(),w.updateControlStates()},fillBank(){e.get("collections").length=0;for(let e of Object.keys(r).sort())w.add(e,r[e],!1,!1);w.current=B.keys().next().value;let t=localStorage.getItem("userCollections");if(t){t=JSON.parse(t);for(let e of Object.keys(t).sort())w.add(e,t[e],!0,!1)}},fillLSystemList(t=w.current){let F=[...B.get(t).keys()].reduce((e,t)=>`${e}<option>${t}</option>`,""),a=e.get("lSystems");a.innerHTML=F,a.selectedIndex=0},setupLSystem(e,t=w.current){let F=B.get(t).get(e);F&&(m.reset(),m.axiom=F.axiom,m.alpha=-F.alpha*Math.PI/180,m.theta=F.theta*Math.PI/180,m.step=F.step,m.iterCount=F.iterCount,m.setRules(F.rules))},add(t,F={},a=!0,l=!0){t=w._getValidName(t,B);let r=w.plainToCollection(F);r.userDefined=a,B.set(t,r);let s=document.createElement("option");s.text=t,e.get("collections").children[a?1:0].appendChild(s),l&&(w.current=t)},delete(t=w.current){if(!w.isUserDefined(t))throw new Error("Built in collection cannot be deleted");B.delete(t),t===w.current&&(w.current=B.keys().next().value);let F=e.get("collections");F.children[1].removeChild([...F.options].find(e=>e.text===t))},isUserDefined:(e=w.current)=>!!B.get(e).userDefined,deleteLSystem(t,F=w.current){if(!w.isUserDefined(F))throw new Error("Built in collections cannot be modified");B.get(F).delete(t);let a=e.get("lSystems");a.removeChild([...a.options].find(e=>e.text===t))},addLSystem(t,F=w.current){if(!w.isUserDefined(F))throw new Error("Built in collections cannot be modified");F=B.get(F),t=w._getValidName(t,F);let a=new Map;a.axiom=m.axiom,a.alpha=180*-m.alpha/Math.PI,a.theta=180*m.theta/Math.PI,a.step=m.step,a.iterCount=m.iterCount,a.rules=m.rules,F.set(t,a);let l=document.createElement("option");l.text=t,e.get("lSystems").add(l)},updateControlStates(){let t=w.isUserDefined(),F=e.get("collections.panels");[...F.querySelectorAll("[data-for='userDefined']")].forEach(e=>e.disabled=!t),[...F.querySelectorAll("[data-for='builtIn']")].forEach(e=>e.disabled=t)},storeUserCollections(){let e={};for(let t of B.keys())w.isUserDefined(t)&&(e[t]=w.collectionToPlain(t));localStorage.setItem("userCollections",JSON.stringify(e))},collectionToPlain(e=w.current){let t={};for(let[F,a]of B.get(e)){let e=t[F]={rules:{}};({axiom:e.axiom,alpha:e.alpha,theta:e.theta,iterCount:e.iterCount,step:e.step}=a);for(let[t,F]of a.rules)e.rules[t]=F}return t},plainToCollection(e){let t=new Map;for(let F of Object.keys(e).sort()){let a=Object.assign({},e[F]);a.rules=new Map(Object.entries(a.rules)),t.set(F,a)}return t},_getValidName(e,t){let F=2,a=e;for(;t.has(a);)a=`${e} (${F++})`;return a}};if(w.fillBank(),/[?&]ls=([^&]+)/.exec(location.search)){let[t,F]=decodeURIComponent(RegExp.$1).split("#");B.has(t)&&B.get(t).has(F)&&(w.current=t,e.get("lSystems").value=F)}let b={changeCollection(e){w.current=e.target.value},clickExplore(){w.setupLSystem(e.get("lSystems").value),a("LSystemConfigured")},clickView(){w.setupLSystem(e.get("lSystems").value),k.plot()},clickPermalink(){let t=w.current,F=e.get("lSystems").value;L(`${location.origin}${location.pathname}?ls=`+encodeURIComponent(`${t}#${F}`)).then(()=>{e.get("permalink.clipboard").classList.add("copied")}).catch(()=>{e.get("permalink.clipboard").classList.add("failed")}).then(()=>{setTimeout(()=>{e.get("permalink.clipboard").classList.remove("copied","failed")},2e3)})},keyDownLSystem({key:e,target:t}){switch(e){case"Enter":b.clickExplore();break;case" ":b.clickView();break;case"Delete":w.isUserDefined()&&window.confirm("Delete the selected L-system?")&&w.deleteLSystem(t.value)}},clickCreateCollection(){let e=window.prompt("Enter a new collection name",`collection #${B.size+1}`);null!==e&&w.add(e)},clickDeleteCollection(){window.confirm("Delete the selected collection?")&&w.delete()},clickAddLS(){let e=window.prompt("Enter the name of the L-system","");null!==e&&w.addLSystem(e)},clickRemoveLS(){let t=e.get("lSystems");t.selectedIndex>=0&&w.isUserDefined()&&window.confirm("Delete the selected L-system?")&&w.deleteLSystem(t.value)},changeImport(e){let t=new FileReader,F=e.target.files[0];t.addEventListener("load",()=>{let e=F.name.endsWith(".json")?F.name.slice(0,-5):F.name;w.add(e,JSON.parse(t.result))}),t.addEventListener("error",()=>{throw t.error}),t.readAsText(F)},mouseDownExport({target:e}){URL.revokeObjectURL(e.href);let t=[JSON.stringify(w.collectionToPlain(),null,2)],F=new Blob(t,{type:"application/json"});e.href=URL.createObjectURL(F),e.download=`${w.current}.json`},beforeUnload(){w.storeUserCollections()}};t("collections","change",b.changeCollection),t("lSystems","keydown",b.keyDownLSystem),t("lSystems","dblclick",b.clickExplore),t("explore","click",b.clickExplore),t("view","click",b.clickView),t(e.get("permalink.clipboard"),"click",b.clickPermalink),t("createColl","click",b.clickCreateCollection),t("deleteColl","click",b.clickDeleteCollection),t("addLS","click",b.clickAddLS),t("removeLS","click",b.clickRemoveLS),t("importColl","change",b.changeImport),t("exportColl","mousedown",b.mouseDownExport),t(window,"beforeunload",b.beforeUnload);let v=e.get("settings.panels"),S=e.get("letterPopup"),W=v.querySelector(".ls-rules"),A={tpl:e.get("ruleTpl"),delete(e){if(m.deleteRule(e)){let t=W.querySelector(`[data-mark="${e}"]`),F=t.previousElementSibling.querySelector("input");F.focus(),F.selectionStart=F.selectionEnd=F.value.length,t.parentNode.removeChild(t)}},insert(e,t=A.tpl){if(!e)return;let F=A.tpl.innerHTML.replace(/\${(?:letter|rule)}/g,e);t.insertAdjacentHTML("beforebegin",F),m.setRule(e,e);let a=W.querySelector(`input[data-letter="${e}"]`);a.focus(),a.select()},replace(e,t){if(m.deleteRule(e)){m.setRule(t,t);let F=W.querySelector(`[data-mark="${e}"]`),a=W.querySelector(`input[data-letter="${e}"]`);F.dataset.mark=t,a.dataset.letter=t,a.focus()}},sync(){[...W.querySelectorAll("[data-mark]:not([data-mark='F']):not([data-mark='B'])")].forEach(e=>e.parentNode.removeChild(e));let e=A.tpl.innerHTML;for(let[t,F]of m.rules)if("F"===t||"B"===t)W.querySelector(`input[data-letter="${t}"]`).value=F;else{let a=e.replace(/\${letter}/g,t).replace(/\${rule}/g,F);A.tpl.insertAdjacentHTML("beforebegin",a)}}},R={clickAddRule(){A.insert([...m.vacantLetters][0])},keyDownBackspace(e){let t=e.target,F=t.dataset.letter;F&&!t.value&&(A.delete(F),e.preventDefault())},keyDownDelete(e){e.ctrlKey&&A.delete(e.target.dataset.letter)},keyDownInsert(e){let t=e.target.dataset.letter;if(t){let e="F"===t?void 0:W.querySelector(`[data-mark="${t}"]`).nextElementSibling;A.insert([...m.vacantLetters][0],e)}},clickRuleLetter({target:e}){let t=e.dataset.mark;if(t&&"F"!==t&&"B"!==t){if(!S.classList.contains("visible")){let e=m.vacantLetters;[...S.getElementsByTagName("button")].forEach(t=>{t.disabled=t.value&&!e.has(t.value)})}S.classList.toggle("visible"),S.classList.contains("visible")&&(S.style.left=`${e.offsetLeft}px`,S.style.top=`${e.offsetTop+e.offsetHeight}px`,S.dataset.ownerLetter=t)}},clickPopupBtn(e){let t=e.target.value,F=S.dataset.ownerLetter;t?A.replace(F,t):A.delete(F),S.classList.remove("visible")},clickPlot(t){t.preventDefault();let F=[...W.querySelectorAll("input[data-letter]")],a=new Map(F.map(e=>[e.dataset.letter,e.value.toUpperCase()]));try{m.reset(),m.axiom=e.get("axiom").value.toUpperCase(),m.alpha=-e.get("alpha").value*Math.PI/180,m.theta=e.get("theta").value*Math.PI/180,m.step=Number(e.get("step").value),m.iterCount=Number(e.get("iterCount").value),m.setRules(a)}catch(e){return void alert(e.message)}k.plot()},syncLSystem(){e.get("axiom").value=m.axiom,e.get("alpha").value=(180*-m.alpha/Math.PI).toFixed(3),e.get("theta").value=(180*m.theta/Math.PI).toFixed(3),e.get("step").value=m.step,e.get("iterCount").value=m.iterCount,A.sync()}};t("addRule","click",R.clickAddRule),t(W,"keydown",e=>{let t=`keyDown${e.key}`;R.hasOwnProperty(t)&&R[t](e)}),t(W,"click",R.clickRuleLetter),t(S,"click",R.clickPopupBtn),t("plot","click",R.clickPlot),l("LSystemConfigured",R.syncLSystem);let T=e.get("appearance.panels"),E=e.get("mainArea"),M={setFg(e){k.settings.strokeStyle=e,k.repaint()},setBg(e){k.settings.fillStyle=document.body.style.background=e,k.repaint()},transforms:{rotate:{pattern:/\s*rotate\(.+?deg\)/,unit:"deg"},translateX:{pattern:/\s*translateX\(.+?px\)/,unit:"px"},translateY:{pattern:/\s*translateY\(.+?px\)/,unit:"px"},scale:{pattern:/\s*scale\(.+?\)/,unit:""}},setTransform(e,t){let F=E.style,{pattern:a,unit:l}=M.transforms[e],r=F.transform.replace(a,"").trim();F.transform=t?`${r} ${e}(${t}${l})`.trim():r}},P={changeFg(e){M.setFg(e.target.value)},changeBg(e){M.setBg(e.target.value)},toggleTransparency(t){let F=e.get("bgClr"),a=F.disabled=t.target.checked;M.setBg(a?"transparent":F.value)},changeTransform({target:e}){let t=e.dataset.transform;t&&e.validity.valid&&M.setTransform(t,e.value.trim())}};t("fgClr","change",P.changeFg),t("bgClr","change",P.changeBg),t("noBgClr","change",P.toggleTransparency),t(T,"change",P.changeTransform);let U=e.get("exporting.panels"),Z=e.get("exportImg"),I=e.get("canvas"),N={makeImgLink(e="image/png"){URL.revokeObjectURL(Z.href),I.toBlob(t=>{let F=e.slice(e.lastIndexOf("/")+1);Z.href=URL.createObjectURL(t),Z.download=`l-system.${F}`,Z.innerHTML=`Download ${F.toUpperCase()}…`,U.classList.add("ls-export-requested")},e)},unmakeImgLink(){U.classList.remove("ls-export-requested")},getLSystemLink(){let e=`${location.origin}${location.pathname}?~ls~=`;e+=`ax${encodeURIComponent(m.axiom)}~`;for(let[t,F]of m.rules)e+=`r${t}${encodeURIComponent(F)}~`;return e+=`al${(180*-m.alpha/Math.PI).toFixed(3)}~`,e+=`th${(180*m.theta/Math.PI).toFixed(3)}~`,e+=`it${m.iterCount}~`,e+=`st${m.step}`},checkURLQuery(){let e=location.search;/[?&]~ls~=([^&]+)/.exec(e)?this.setupByParams(RegExp.$1):/[?&]ls=([^&]+)/.exec(e)&&this.setupByName(RegExp.$1)},setupByParams(e){m.reset();for(let t of e.split("~")){let e=t.slice(0,2),F=decodeURIComponent(t.slice(2));switch(e){case"ax":m.axiom=F;break;case"al":m.alpha=-F*Math.PI/180;break;case"th":m.theta=F*Math.PI/180;break;case"it":m.iterCount=+F;break;case"st":m.step=+F;break;default:"r"===e[0]&&m.setRule(F,e[1])}}a("LSystemConfigured"),k.plot()},setupByName(e){let[t,F]=decodeURIComponent(e).split("#");if(!r.hasOwnProperty(t)||!r[t].hasOwnProperty(F))return;let l=r[t][F];m.reset(),m.axiom=l.axiom,m.alpha=-l.alpha*Math.PI/180,m.theta=l.theta*Math.PI/180,m.step=l.step,m.iterCount=l.iterCount,m.setRules(new Map(Object.entries(l.rules))),a("LSystemConfigured"),k.plot()}},$={clickExportControl(e){let t=e.target;t===Z?N.unmakeImgLink():t.dataset.mimeType&&N.makeImgLink(t.dataset.mimeType)},clickMakeLink(){let t=e.get("linkAddress");t.value=N.getLSystemLink(),t.focus(),t.select(),e.get("link.clipboard").disabled=!1},focusLinkAddress(e){e.target.select()},clickCopy(){L(e.get("linkAddress").value)}};t(U.querySelector(".ls-export-controls"),"click",$.clickExportControl),t("makeLink","click",$.clickMakeLink),t("linkAddress","focus",$.focusLinkAddress),t(e.get("link.clipboard"),"click",$.clickCopy),N.checkURLQuery();let D=[...e.get(".panels").values()].find(e=>e.classList.contains("ls-panel-open"));function O(t,F=!1){let a=e.get(`${t}.panels`);a&&(a!==D?(D&&D.classList.remove("ls-panel-open"),a.classList.add("ls-panel-open"),D=a):F&&D&&(D.classList.remove("ls-panel-open"),D=null))}t("tabs","click",e=>{let t=e.target.dataset.lsRef;t&&O(t,!0)}),l("LSystemConfigured",()=>{O("settings")}),window.innerWidth>=980&&O("collections"),y||e.get(".clipboard").forEach(e=>{e.classList.add("hidden")});{let F=e.get("canvas"),a=null,l=()=>{a=null,F.width=F.offsetWidth,F.height=F.offsetHeight,k.repaint()};t(window,"resize",()=>{null!==a&&clearTimeout(a),a=setTimeout(l,100)}),l()}
