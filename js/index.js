let e={ui:new Map,cache(e,t){let F=t.indexOf(".");if(F>=0){let a=t.slice(F),l=this.ui.get(a);l||(l=new Map,this.ui.set(a,l)),l.set(t.slice(0,F),e)}else this.ui.set(t,e)},getElementByLSID:(e,t=document.body)=>t.querySelector(`[data-ls-id="${e}"]`)};for(let t of document.body.querySelectorAll("[data-ls-id]"))e.cache(t,t.dataset.lsId);let t=new Map,F={publish(e,...F){let a=t.get(e);a&&a.forEach(e=>e(...F))},subscribe(e,F){let a=t.get(e);a||(a=[],t.set(e,a)),a.push(F)},unsubscribe(e,F){let a=t.get(e);if(a){let l=a.indexOf(F);l>=0&&(a.splice(l,1),a.length||t.delete(e))}}};var a={Plants:{"bush 1":{axiom:"F",rules:{F:"F[+FF][-FF]F[-F][+F]F"},alpha:90,theta:35,iterCount:4,step:6},"bush 2":{axiom:"F",rules:{F:"FF+[+F-F-F]-[-F+F+F]"},alpha:90,theta:22.5,iterCount:4,step:9},sticks:{axiom:"X",rules:{F:"FF",X:"F[+X]F[-X]+X"},alpha:90,theta:20,iterCount:7,step:2},"plant 1":{axiom:"X",rules:{F:"FF",X:"F-[[X]+X]+F[+FX]-X"},alpha:90,theta:25,iterCount:6,step:3},"plant 2":{axiom:"F",rules:{F:"F[+F]F[-F][F]"},alpha:90,theta:20,iterCount:5,step:8},"plant 3":{axiom:"X",rules:{F:"FF",X:"F[+X][-X]FX"},alpha:90,theta:25.71,iterCount:6,step:3.5},"savine 1":{axiom:"F-F[-F+F-F]+[+F-F-F]",rules:{F:"-F[-F+F-F]+[+F-F-F]-F[-F+F-F]+[+F-F-F]-F[-F+F-F]+[+F-F-F]"},alpha:0,theta:20,iterCount:3,step:3},"savine 2":{axiom:"-[F-F[-F+F-F]+[+F-F-F]]+[F-F[-F+F-F]+[+F-F-F]]",rules:{F:"-F[-F+F-F]+[+F-F-F]-F[-F+F-F]+[+F-F-F]-F[-F+F-F]+[+F-F-F]"},alpha:0,theta:20,iterCount:3,step:3},"liana sarment":{axiom:"FYX",rules:{F:"FFFXYFXY-[FFFXYFXY]",X:"Y[[XY]+X]+F[+FX]+XF",Y:"[FFF[[YX]+Y]+F[+FY]+F]"},alpha:90,theta:20,iterCount:4,step:.5},"liana tangle":{axiom:"FYX",rules:{F:"FFFXYFXY-[FFFXYFXY]",X:"Y[[XY]+X]+F[+FX]+XF",Y:"FFF[[YX]+Y]+F[+FY]+F"},alpha:90,theta:20,iterCount:4,step:2},tree:{axiom:"F",rules:{F:"-F[-F+F-F]+[+F-F-F]"},alpha:0,theta:20,iterCount:5,step:15},weed:{axiom:"F",rules:{F:"F[+F]F[-F]F"},alpha:90,theta:25.714,iterCount:5,step:2},"flower 1":{axiom:"F[+F+F][-F-F][++F][--F]F",rules:{F:"FF[++F][+F][F][-F][--F]"},alpha:90,theta:11.25,iterCount:3,step:15},"bush 3":{axiom:"VZFFF",rules:{F:"F",V:"[+++W][---W]YV",W:"+X[-W]Z",X:"-W[+X]Z",Y:"YZ",Z:"[-FFF][+FFF]F"},alpha:90,theta:20,iterCount:9,step:10},algae:{axiom:"AF",rules:{A:"FFFFFV[+++H][---Q]BW",B:"B",C:"FFFFFV[+++BA]BD",D:"FFFFFV[+++H][---Q]BE",E:"FFFFFV[+++H][---Q]BG",F:"F",G:"FFFFFV[---BA]BA",H:"IBFF",I:"BFFF[--M]J",J:"BFFF[--N]K",K:"BFFF[--O]L",L:"BFFF[--P]",M:"BFN",N:"BFO",O:"BFP",P:"BF",Q:"RBF",R:"BFFF[++M]S",S:"BFFF[++N]T",T:"BFFF[++O]U",U:"BFFF[++P]",V:"FV",W:"FFFFFV[+++H][---Q]BC"},alpha:90,theta:12,iterCount:17,step:2},"algae 2":{axiom:"AF",rules:{A:"FFFFFY[++++N][----T]BZ",B:"B",C:"FFFFFY[++++N][----T]BD",D:"FFFFFY[++++N][----T]BE",E:"FFFFFY[++++N][----T]BG",F:"F",G:"FFFFFY[+++BA]BH",H:"FFFFFY[++++N][----T]BI",I:"+FFFFFY[++++N][----T]BJ",J:"FFFFFY[++++N][----T]BK",K:"-FFFFFY[++++N][----T]BL",L:"FFFFFY[++++N][----T]BM",M:"FFFFFY[---BA]BA",N:"OBFFF",O:"BFFFP",P:"BFFF[-S]Q",Q:"BFFF[-S]R",R:"BFFF[-S]",S:"BFBF",T:"UBFFF",U:"BFFFV",V:"BFFF[+S]W",W:"BFFF[+S]X",X:"BFFF[+S]",Y:"FY",Z:"+FFFFFY[++++N][----T]BC"},alpha:90,theta:12,iterCount:17,step:2},"plant 4":{axiom:"--------C",rules:{F:"F",C:"NF[--P]F+C",N:"NFF",P:"Q",Q:"C"},alpha:0,theta:11.25,iterCount:20,step:1.2},"plant 5":{axiom:"----G",rules:{F:"F",G:"GFX[+G][-G]",X:"X[-FFF][+FFF]FX"},alpha:0,theta:25.7,iterCount:6,step:4},dandelion:{axiom:"FF[-Y][Z][+Z]",rules:{F:"F",Y:"FF+F-F-F[FFFZ][+Z]-F-FZ",Z:"FF-F+F+F[Y][-Y]+F+FY"},alpha:90,theta:15,iterCount:6,step:6},sapling:{axiom:"FFFFFFX",rules:{F:"F",X:"FFF-[-F+F[Y]-[X]]+[+F+F[X]-[X]]",Y:"FF-[-F+F]+[+F+FY]"},alpha:90,theta:15,iterCount:6,step:10},"flower 2":{axiom:"F-F+F[++X][F+X][F-X][--X]",rules:{F:"F",W:"F-F+F[++X][F+X][F-X][--X]",X:"F+FF-F[++Y][+Y][-Z][--Z]",Y:"-[Z]F-FF-FF-FF-F[Z]",Z:"+[Y]F+FF+FF+FF+F[Y]"},alpha:90,theta:10,iterCount:9,step:4.5},"bonsai branch":{axiom:"A",rules:{F:"F",A:"F-FFA+[FAFA+FFF]F"},alpha:90,theta:30,iterCount:5,step:7}},Curves:{"Hilbert curve":{axiom:"X",rules:{F:"F",X:"-YF+XFX+FY-",Y:"+XF-YFY-FX+"},alpha:0,theta:90,iterCount:6,step:7},"Gosper curve":{axiom:"XF",rules:{F:"F",X:"X+YF++YF-FX--FXFX-YF+",Y:"-FX+YFYF++YF+FX--FX-Y"},alpha:0,theta:60,iterCount:4,step:8},"Peano curve":{axiom:"F",rules:{F:"F-F+F+F+F-F-F-F+F"},alpha:45,theta:90,iterCount:4,step:8},"Sierpinski curve":{axiom:"F+FX+F+XF",rules:{F:"F",X:"XF-F+F-XF+F+XF-F+F-X"},alpha:45,theta:90,iterCount:4,step:8},curve:{axiom:"F-F-F-F-",rules:{F:"FF-F-F-F-F-F+F"},alpha:0,theta:90,iterCount:4,step:3.5},cross:{axiom:"FX",rules:{X:"FX+FX+FXFY-FY-",Y:"+FX+FXFY-FY-FY"},alpha:0,theta:90,iterCount:5,step:4.5},island:{axiom:"F+F+F+F",rules:{F:"F+F-F-FFF+F+F-F"},alpha:0,theta:90,iterCount:3,step:4},"Koch’s snowflake":{axiom:"F++F++F",rules:{F:"F-F++F-F"},alpha:0,theta:60,iterCount:4,step:5},"Koch’s curve":{axiom:"F+F+F+F",rules:{F:"FF+F+F+F+F+F-F"},alpha:0,theta:90,iterCount:4,step:3.5},chain:{axiom:"F+F+F+F",rules:{F:"F+B-F-FFF+F+B-F",B:"BBB"},alpha:0,theta:90,iterCount:3,step:4},frame:{axiom:"YXY-YXY-YXY-YXY",rules:{X:"FX+FX+FXFYFX+FXFY-FY-FY-",Y:"+FX+FX+FXFY-FYFXFY-FY-FY"},alpha:0,theta:90,iterCount:3,step:4},"Moore’s curl":{axiom:"X",rules:{X:"FX+FX+FXFYFX+FXFY-FY-FY-",Y:"+FX+FX+FXFY-FYFXFY-FY-FY"},alpha:180,theta:90,iterCount:4,step:3.5},"anklets of Krishna":{axiom:"-X--X",rules:{F:"F",X:"XFX--XFX"},alpha:0,theta:45,iterCount:5,step:10},"mango-tree foliage":{axiom:"A---A",rules:{F:"F",B:"B",A:"B-F+Z+F-BA",Z:"F-FF-F--[--Z]F-FF-F--F-FF-F--"},alpha:0,theta:60,iterCount:7,step:15},pentive:{axiom:"Q",rules:{P:"--FR++++FS--FU",Q:"FT++FR----FS++",R:"++FP----FQ++FT",S:"FU--FP++++FQ--",T:"+FU--FP+",U:"-FQ++FT-"},alpha:36,theta:36,iterCount:7,step:15},"Sierpinski median curve":{axiom:"L--F--L--F",rules:{F:"F",L:"+R-F-R+",R:"-L+F+L-"},alpha:0,theta:45,iterCount:10,step:5},lace:{axiom:"W",rules:{F:"F",W:"+++X--F--ZFX+",X:"---W++F++YFW-",Y:"+ZFX--F--Z+++",Z:"-YFW++F++Y---"},alpha:180,theta:30,iterCount:7,step:4.5},"Peano-c":{axiom:"+Z",rules:{X:"FX-FY-FX+FY+FX+FY+FX+FY+FX-FY-FX-FY-FX-FY-FX+FY+FX",Y:"FY",Z:"FX"},alpha:0,theta:45,iterCount:5,step:3.5},"Hex-7-b":{axiom:"FX",rules:{X:"-F++F-X-F--F+Y---F--F+Y+F++F-X+++F++F-X-F++F-X+++F--F+Y--",Y:"+F++F-X-F--F+Y+F--F+Y---F--F+Y---F++F-X+++F++F-X+++F--F+Y"},alpha:0,theta:30,iterCount:4,step:5}},Shapes:{"Sierpinski carpet":{axiom:"FXF--FF--FF",rules:{F:"FF",X:"--FXF++FXF++FXF--",Y:"-FX-Y"},alpha:0,theta:60,iterCount:5,step:7},mosaic:{axiom:"F-F-F-F",rules:{F:"F-B+FF-F-FF-FB-FF+B-FF+F+FF+FB+FFF",B:"BBBBBB"},alpha:0,theta:90,iterCount:2,step:7},snowflake:{axiom:"[F]+[F]+[F]+[F]+[F]+[F]",rules:{F:"F[++F][-FF]FF[+F][-F]FF"},alpha:0,theta:60,iterCount:3,step:2},crystal:{axiom:"F+F+F+F",rules:{F:"FF+F++F+F"},alpha:0,theta:90,iterCount:4,step:5},pentigree:{axiom:"F-F-F-F-F",rules:{F:"F-F++F+F-F-F"},alpha:0,theta:72,iterCount:4,step:5},square:{axiom:"F+F+F+F",rules:{F:"FF+F+F+F+FF"},alpha:0,theta:90,iterCount:4,step:5},"fluffy globule":{axiom:"X-X-X-X-X-X-X-X-X",rules:{X:"FX+X--X+X--X+X--X+X"},alpha:0,theta:40,iterCount:4,step:18},horizons:{axiom:"+F++++F",rules:{F:"F+F+F++++F+F+F"},alpha:0,theta:45,iterCount:5,step:1.3},napkin:{axiom:"F--F--F--F--F--F",rules:{F:"-F[--F--F]++F--F+"},alpha:0,theta:30,iterCount:4,step:4.5},"Levi’s fractal":{axiom:"F",rules:{F:"+F--F+"},alpha:180,theta:45,iterCount:14,step:1.9},"Levi’s carpet":{axiom:"F++F++F++F",rules:{F:"+F--F+"},alpha:180,theta:45,iterCount:14,step:1.8},"spiral tiling":{axiom:"AAAA",rules:{F:"F",A:"X+X+X+X+X+X+",X:"[F+F+F+F[---X-Y]+++++F++++++++F-F-F-F]",Y:"[F+F+F+F[---Y]+++++F++++++++F-F-F-F]"},alpha:0,theta:15,iterCount:5,step:10},"Penrose mosaic":{axiom:"+WF--XF---YF--ZF",rules:{W:"YF++ZF----XF[-YF----WF]++",X:"+YF--ZF[---WF--XF]+",Y:"-WF++XF[+++YF++ZF]-",Z:"--YF++++WF[+ZF++++XF]--XF"},alpha:270,theta:36,iterCount:6,step:11},"Penrose tesselation":{axiom:"[X]++[X]++[X]++[X]++[X]",rules:{W:"YF++ZF----XF[-YF----WF]++",X:"+YF--ZF[---WF--XF]+",Y:"-WF++XF[+++YF++ZF]-",Z:"--YF++++WF[+ZF++++XF]--XF"},alpha:0,theta:36,iterCount:5,step:20},"snowflake 2":{axiom:"F[X]F++F[X]F++F[X]F++F[X]F",rules:{X:"[+Y][-Y][++Y][--Y]",Y:"YF[X]YF"},alpha:0,theta:45,iterCount:9,step:.9},wheel:{axiom:"F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]+F[X]",rules:{X:"[+++++++++++++Y[X]]-------------Y[X]",Y:"YFYF"},alpha:0,theta:5,iterCount:7,step:2},"hexagonal star":{axiom:"S",rules:{L:"LZFR--FR-F++LF++L-F+LF+R--Y",R:"Z++L-FR-F+R--FR--F+LF++LFYR",S:"L",Y:"+",Z:"-"},alpha:0,theta:60,iterCount:6,step:4.75},HexGasket:{axiom:"F+F+F+F+F+F--",rules:{F:"F+F+F--F--F+F+F"},alpha:0,theta:60,iterCount:4,step:3}},Dragons:{dragon:{axiom:"FX",rules:{F:"F",X:"X+YF+",Y:"-FX-Y"},alpha:0,theta:90,iterCount:12,step:5},terdragon:{axiom:"F",rules:{F:"F+F-F"},alpha:120,theta:120,iterCount:8,step:6},"median dragon":{axiom:"-X",rules:{F:"F",X:"X+F+Y",Y:"X-F-Y"},alpha:0,theta:45,iterCount:12,step:3}},Miscellaneous:{urchin:{axiom:"F",rules:{F:"F[-F+F-F]+[+F-F-F]"},alpha:0,theta:20,iterCount:5,step:15},"Cesaro 1":{axiom:"F",rules:{F:"F++++++++++F--------------------F++++++++++F"},alpha:180,theta:8,iterCount:6,step:2.9},"Cesaro 2":{axiom:"F+++++++++F------------------F+++++++++F------------------F+++++++++F------------------F+++++++++F------------------F",rules:{F:"F++++++++F----------------F++++++++F"},alpha:0,theta:10,iterCount:5,step:3.5}}};let l=/^[A-Z+\-[\]]*$/,s={messages:{AXIOM:"The axiom may contain only the following characters: “A”-Z”, “+”, “-”, “[”, “]”",RULE:"Production rules may may contain only the following characters: “A”-Z”, “+”, “-”, “[”, “]”",LETTER:"The allowed alphabet letters are: “A”-“Z”",ALPHA:"The “alpha” parameter must be a finite number",THETA:"The “theta” parameter must be a finite number",STEP:"The “step” parameter must be a positive finite number",COUNT:"The number of iterations must be integer and finite",NUMBER:"A valid finite number expected"},checkRule:(e,t=s.messages.RULE)=>l.test(e)||t,checkLetter:(e,t=s.messages.LETTER)=>1===e.length&&e>="A"&&e<="Z"||t,checkStep:(e,t=s.messages.STEP)=>Number.isFinite(e)&&e>0||t,checkCount:(e,t=s.messages.COUNT)=>Number.isInteger(e)&&e>0||t,checkNumber:(e,t=s.messages.NUMBER)=>Number.isFinite(e)||t};const r=[["F",""],["B",""],["+","+"],["-","-"],["[","["],["]","]"]],i={alpha:0,theta:0,step:10,iterCount:3};let o,n,u,p={get axiom(){return o},set axiom(e){let t=s.checkRule(e,s.messages.AXIOM);if(!0!==t)throw new Error(t);o=e},get alpha(){return u.alpha},set alpha(e){let t=s.checkNumber(e,s.messages.ALPHA);if(!0!==t)throw new Error(t);u.alpha=e},get theta(){return u.theta},set theta(e){let t=s.checkNumber(e,s.messages.THETA);if(!0!==t)throw new Error(t);u.theta=e},get step(){return u.step},set step(e){let t=s.checkStep(e);if(!0!==t)throw new Error(t);u.step=e},get iterCount(){return u.iterCount},set iterCount(e){let t=s.checkCount(e);if(!0!==t)throw new Error(t);u.iterCount=e},get rules(){let e=[...n].filter(([e])=>e>="A"&&e<="Z");return new Map(e)},setRule(e,t){let F=s.checkLetter(t);if(!0!==F)throw new Error(F);if(!0!==(F=s.checkRule(e)))throw new Error(F);n.set(t,e)},setRules(e){e.forEach(this.setRule,this)},deleteRule:e=>!("F"===e||"B"===e||!n.has(e))&&(n.delete(e),!0),get vacantLetters(){let e=new Set;for(let t of"ACDEGHIJKLMNOPQRSTUVWXYZ")n.has(t)||e.add(t);return e},getCode(){let e=o;for(let t=u.iterCount;t>0;t--){let t="";for(let F of e)t+=n.get(F)||"";e=t}return e},reset(){o="",u=Object.assign({},i),n=new Map(r)}};p.reset();let c=e.ui.get("canvas"),h=c.getContext("2d"),X={stack:[]},d=new Map;d.set("F",()=>{X.x+=X.step*Math.cos(X.alpha),X.y+=X.step*Math.sin(X.alpha),h.lineTo(X.x,X.y)}),d.set("B",()=>{X.x+=X.step*Math.cos(X.alpha),X.y+=X.step*Math.sin(X.alpha),h.moveTo(X.x,X.y)}),d.set("+",()=>{X.alpha+=X.theta}),d.set("-",()=>{X.alpha-=X.theta}),d.set("[",()=>{X.stack.push({x:X.x,y:X.y,alpha:X.alpha})}),d.set("]",()=>{({x:X.x,y:X.y,alpha:X.alpha}=X.stack.pop()),h.moveTo(X.x,X.y)});let m=new Map([...d]);m.set("F",()=>{X.x+=X.step*Math.cos(X.alpha),X.y+=X.step*Math.sin(X.alpha),X.left=Math.min(X.left,X.x),X.right=Math.max(X.right,X.x),X.top=Math.min(X.top,X.y),X.bottom=Math.max(X.bottom,X.y)}),m.set("B",m.get("F")),m.set("]",()=>{({x:X.x,y:X.y,alpha:X.alpha}=X.stack.pop())});let g={settings:{fillStyle:"transparent",strokeStyle:"#080"},reset(){X.cleanCode="",X.x=X.y=0,({step:X.step,alpha:X.alpha,theta:X.theta,iterCount:X.count}=p),X.stack.length=0,X.left=X.top=Number.MAX_VALUE,X.right=X.bottom=-Number.MAX_VALUE},prepare(){let e=p.getCode(),t="";for(let F of e){let e=m.get(F);e&&(t+=F,e())}X.cleanCode=t},setup(){X.x=(c.offsetWidth-X.left-X.right)/2,X.y=(c.offsetHeight-X.top-X.bottom)/2,X.alpha=p.alpha,X.stack.length=0},clear(){h.strokeStyle=this.settings.strokeStyle,h.fillStyle=this.settings.fillStyle,h.clearRect(0,0,c.offsetWidth,c.offsetHeight),h.fillRect(0,0,c.offsetWidth,c.offsetHeight)},repaint(){if(this.clear(),X.cleanCode){this.setup(),h.beginPath(),h.moveTo(X.x,X.y);for(let e of X.cleanCode)d.get(e)();h.stroke()}},plot(){this.reset(),this.prepare(),this.repaint()}};{let e=null,t=()=>{e=null,c.width=c.offsetWidth,c.height=c.offsetHeight,g.repaint()};window.addEventListener("resize",()=>{null!==e&&clearTimeout(e),e=setTimeout(t,100)}),t()}let f=new Map,Y={get current(){return e.ui.get("collections").value},set current(t){e.ui.get("collections").value=t,Y.fillLSystemList(),Y.updateControlStates()},fillBank(){e.ui.get("collections").length=0;for(let e of Object.keys(a).sort())Y.add(e,a[e],!1,!1);Y.current=f.keys().next().value;let t=localStorage.getItem("userCollections");if(t){t=JSON.parse(t);for(let e of Object.keys(t).sort())Y.add(e,t[e],!0,!1)}},fillLSystemList(t=Y.current){let F="";for(let e of f.get(t).keys())F+=`<option>${e}</option>`;let a=e.ui.get("lSystems");a.innerHTML=F,a.selectedIndex=0},setupLSystem(e,t=Y.current){let F=f.get(t).get(e);F&&(p.reset(),p.axiom=F.axiom,p.alpha=-F.alpha*Math.PI/180,p.theta=F.theta*Math.PI/180,p.step=F.step,p.iterCount=F.iterCount,p.setRules(F.rules))},add(t,F={},a=!0,l=!0){t=Y._getValidName(t,f);let s=Y.plainToCollection(F);s.userDefined=a,f.set(t,s);let r=document.createElement("option");r.text=t,e.ui.get("collections").children[a?1:0].appendChild(r),l&&(Y.current=t)},delete(t=Y.current){if(!Y.isUserDefined(t))throw new Error("Built in collection cannot be deleted");f.delete(t),t===Y.current&&(Y.current=f.keys().next().value);let F=e.ui.get("collections");F.children[1].removeChild([...F.options].find(e=>e.text===t))},isUserDefined:(e=Y.current)=>!!f.get(e).userDefined,deleteLSystem(t,F=Y.current){if(!Y.isUserDefined(F))throw new Error("Built in collections cannot be modified");f.get(F).delete(t);let a=e.ui.get("lSystems");a.removeChild([...a.options].find(e=>e.text===t))},addLSystem(t,F=Y.current){if(!Y.isUserDefined(F))throw new Error("Built in collections cannot be modified");F=f.get(F),t=Y._getValidName(t,F);let a=new Map;a.axiom=p.axiom,a.alpha=180*-p.alpha/Math.PI,a.theta=180*p.theta/Math.PI,a.step=p.step,a.iterCount=p.iterCount,a.rules=p.rules,F.set(t,a);let l=document.createElement("option");l.text=t,e.ui.get("lSystems").add(l)},updateControlStates(){e.ui.get("deleteColl").disabled=e.ui.get("addLS").disabled=e.ui.get("removeLS").disabled=!Y.isUserDefined()},storeUserCollections(){let e={};for(let t of f.keys())Y.isUserDefined(t)&&(e[t]=Y.collectionToPlain(t));localStorage.setItem("userCollections",JSON.stringify(e))},collectionToPlain(e=Y.current){let t={};for(let[F,a]of f.get(e)){let e=t[F]={rules:{}};({axiom:e.axiom,alpha:e.alpha,theta:e.theta,iterCount:e.iterCount,step:e.step}=a);for(let[t,F]of a.rules)e.rules[t]=F}return t},plainToCollection(e){let t=new Map;for(let F of Object.keys(e).sort()){let a=e[F];a.rules=new Map(Object.keys(a.rules).map(e=>[e,a.rules[e]])),t.set(F,a)}return t},_getValidName(e,t){let F=2,a=e;for(;t.has(a);)a=`${e} (${F++})`;return a}};Y.fillBank();let C={changeCollection(e){Y.current=e.target.value},dblClickLSystem(e){Y.setupLSystem(e.target.value),F.publish("LSystemConfigured")},keyDownLSystem(e){switch(e.key){case"Enter":Y.setupLSystem(e.target.value),F.publish("LSystemConfigured");break;case" ":Y.setupLSystem(e.target.value),g.plot();break;case"Delete":Y.isUserDefined()&&window.confirm("Delete the selected L-system?")&&Y.deleteLSystem(e.target.value)}},clickCreateCollection(){let e=window.prompt("Enter a new collection name",`collection #${f.size+1}`);null!==e&&Y.add(e)},clickDeleteCollection(){window.confirm("Delete the selected collection?")&&Y.delete()},clickAddLS(){let e=window.prompt("Enter the name of the L-system","");null!==e&&Y.addLSystem(e)},clickRemoveLS(){let t=e.ui.get("lSystems");t.selectedIndex>=0&&Y.isUserDefined()&&window.confirm("Delete the selected L-system?")&&Y.deleteLSystem(t.value)},changeImport(e){let t=new FileReader,F=e.target.files[0];t.addEventListener("load",()=>{let e=F.name.endsWith(".json")?F.name.slice(0,-5):F.name;Y.add(e,JSON.parse(t.result))}),t.addEventListener("error",()=>{throw t.error}),t.readAsText(F)},mouseDownExport(e){let t=e.target;URL.revokeObjectURL(t.href);let F=[JSON.stringify(Y.collectionToPlain(),null,2)],a=new Blob(F,{type:"application/json"});t.href=URL.createObjectURL(a),t.download=`${Y.current}.json`},beforeUnload(){Y.storeUserCollections()}};e.ui.get("collections").addEventListener("change",C.changeCollection),e.ui.get("lSystems").addEventListener("dblclick",C.dblClickLSystem),e.ui.get("lSystems").addEventListener("keydown",C.keyDownLSystem),e.ui.get("createColl").addEventListener("click",C.clickCreateCollection),e.ui.get("deleteColl").addEventListener("click",C.clickDeleteCollection),e.ui.get("addLS").addEventListener("click",C.clickAddLS),e.ui.get("removeLS").addEventListener("click",C.clickRemoveLS),e.ui.get("importColl").addEventListener("change",C.changeImport),e.ui.get("exportColl").addEventListener("mousedown",C.mouseDownExport),window.addEventListener("beforeunload",C.beforeUnload);let L=e.ui.get(".panels").get("settings"),x=e.ui.get("letterPopup"),k=L.querySelector(".ls-rules"),y={tpl:e.ui.get("ruleTpl"),delete(e){if(p.deleteRule(e)){let t=k.querySelector(`[data-mark="${e}"]`),F=t.previousElementSibling.querySelector("input");F.focus(),F.selectionStart=F.selectionEnd=F.value.length,t.parentNode.removeChild(t)}},insert(e,t=y.tpl){if(!e)return;let F=y.tpl.innerHTML.replace(/\${(?:letter|rule)}/g,e);t.insertAdjacentHTML("beforebegin",F),p.setRule(e,e);let a=k.querySelector(`input[data-letter="${e}"]`);a.focus(),a.select()},replace(e,t){if(p.deleteRule(e)){p.setRule(t,t);let F=k.querySelector(`[data-mark="${e}"]`),a=k.querySelector(`input[data-letter="${e}"]`);F.dataset.mark=t,a.dataset.letter=t,a.focus()}},sync(){[...k.querySelectorAll("[data-mark]:not([data-mark='F']):not([data-mark='B'])")].forEach(e=>e.parentNode.removeChild(e));let e=y.tpl.innerHTML;for(let[t,F]of p.rules)if("F"===t||"B"===t)k.querySelector(`input[data-letter="${t}"]`).value=F;else{let a=e.replace(/\${letter}/g,t).replace(/\${rule}/g,F);y.tpl.insertAdjacentHTML("beforebegin",a)}}},v={clickAddRule(){y.insert([...p.vacantLetters][0])},keyDownBackspace(e){let t=e.target,F=t.dataset.letter;F&&!t.value&&(y.delete(F),e.preventDefault())},keyDownDelete(e){e.ctrlKey&&y.delete(e.target.dataset.letter)},keyDownInsert(e){let t=e.target.dataset.letter;if(t){let e="F"===t?void 0:k.querySelector(`[data-mark="${t}"]`).nextElementSibling;y.insert([...p.vacantLetters][0],e)}},clickRuleLetter(e){let t=e.target,F=t.dataset.mark;if(F&&"F"!==F&&"B"!==F){if(!x.classList.contains("visible")){let e=p.vacantLetters;[...x.getElementsByTagName("button")].forEach(t=>{t.disabled=t.value&&!e.has(t.value)})}x.classList.toggle("visible"),x.classList.contains("visible")&&(x.style.left=`${t.offsetLeft}px`,x.style.top=`${t.offsetTop+t.offsetHeight}px`,x.dataset.ownerLetter=F)}},clickPopupBtn(e){let t=e.target.value,F=x.dataset.ownerLetter;t?y.replace(F,t):y.delete(F),x.classList.remove("visible")},clickPlot(t){t.preventDefault();let F=[...k.querySelectorAll("input[data-letter]")],a=new Map(F.map(e=>[e.dataset.letter,e.value.toUpperCase()]));try{p.reset(),p.axiom=e.ui.get("axiom").value.toUpperCase(),p.alpha=-e.ui.get("alpha").value*Math.PI/180,p.theta=e.ui.get("theta").value*Math.PI/180,p.step=Number(e.ui.get("step").value),p.iterCount=Number(e.ui.get("iterCount").value),p.setRules(a)}catch(e){return void alert(e.message)}g.plot()},syncLSystem(){e.ui.get("axiom").value=p.axiom,e.ui.get("alpha").value=(180*-p.alpha/Math.PI).toFixed(3),e.ui.get("theta").value=(180*p.theta/Math.PI).toFixed(3),e.ui.get("step").value=p.step,e.ui.get("iterCount").value=p.iterCount,y.sync()}};e.ui.get("addRule").addEventListener("click",v.clickAddRule),k.addEventListener("keydown",e=>{let t=`keyDown${e.key}`;v.hasOwnProperty(t)&&v[t](e)}),k.addEventListener("click",v.clickRuleLetter),x.addEventListener("click",v.clickPopupBtn),e.ui.get("plot").addEventListener("click",v.clickPlot),F.subscribe("LSystemConfigured",v.syncLSystem);let B=e.ui.get(".panels").get("appearance"),b=e.ui.get("canvas"),S={setFg(e){g.settings.strokeStyle=e,g.repaint()},setBg(e){g.settings.fillStyle=document.body.style.background=e,g.repaint()},transforms:{rotate:{pattern:/\s*rotate\(.+?deg\)/,unit:"deg"},translateX:{pattern:/\s*translateX\(.+?px\)/,unit:"px"},translateY:{pattern:/\s*translateY\(.+?px\)/,unit:"px"},scale:{pattern:/\s*scale\(.+?\)/,unit:""}},setTransform(e,t){let F=b.style,{pattern:a,unit:l}=S.transforms[e],s=F.transform.replace(a,"").trim();F.transform=t?`${s} ${e}(${t}${l})`.trim():s}},w={changeFg(e){S.setFg(e.target.value)},changeBg(e){S.setBg(e.target.value)},toggleTransparency(t){let F=e.ui.get("bgClr"),a=F.disabled=t.target.checked;S.setBg(a?"transparent":F.value)},changeTransform(e){let t=e.target.dataset.transform;t&&e.target.validity.valid&&S.setTransform(t,e.target.value.trim())}};e.ui.get("fgClr").addEventListener("change",w.changeFg),e.ui.get("bgClr").addEventListener("change",w.changeBg),e.ui.get("noBgClr").addEventListener("change",w.toggleTransparency),B.addEventListener("change",w.changeTransform);let E=e.ui.get(".panels").get("exporting"),T=e.ui.get("exportImg"),R=e.ui.get("canvas"),A={makeImgLink(e="image/png"){URL.revokeObjectURL(T.href),R.toBlob(t=>{let F=e.slice(e.lastIndexOf("/")+1);T.href=URL.createObjectURL(t),T.download=`l-system.${F}`,T.innerHTML=`Download ${F.toUpperCase()}…`,E.classList.add("ls-export-requested")},e)},unmakeImgLink(){E.classList.remove("ls-export-requested")},getLSystemLink(){let e=`${location.origin}${location.pathname}?~ls~=`;e+=`ax${encodeURIComponent(p.axiom)}~`;for(let[t,F]of p.rules)e+=`r${t}${encodeURIComponent(F)}~`;return e+=`al${(180*-p.alpha/Math.PI).toFixed(3)}~`,e+=`th${(180*p.theta/Math.PI).toFixed(3)}~`,e+=`it${p.iterCount}~`,e+=`st${p.step}`},checkURLQuery(){let e=location.search.match(/(?:\?|&)~ls~=([^&]+)/);if(e){p.reset();for(let t of e[1].split("~")){let e=t.slice(0,2),F=decodeURIComponent(t.slice(2));switch(e){case"ax":p.axiom=F;break;case"al":p.alpha=-F*Math.PI/180;break;case"th":p.theta=F*Math.PI/180;break;case"it":p.iterCount=+F;break;case"st":p.step=+F;break;default:"r"===e[0]&&p.setRule(F,e[1])}}F.publish("LSystemConfigured"),g.plot()}}},M={clickExportControl(e){let t=e.target;t===T?A.unmakeImgLink():t.dataset.mimeType&&A.makeImgLink(t.dataset.mimeType)},clickMakeLink(){let t=e.ui.get("linkAddress");t.value=A.getLSystemLink(),t.focus(),t.select()},focusLinkAddress(e){e.target.select()}};E.querySelector(".ls-export-controls").addEventListener("click",M.clickExportControl),e.ui.get("makeLink").addEventListener("click",M.clickMakeLink),e.ui.get("linkAddress").addEventListener("focus",M.focusLinkAddress),A.checkURLQuery();let Z=[...e.ui.get(".panels").values()].find(e=>e.classList.contains("ls-panel-open")),P={show(t,F=!1){let a=e.ui.get(".panels").get(t);a&&(a!==Z?(Z&&Z.classList.remove("ls-panel-open"),a.classList.add("ls-panel-open"),Z=a):F&&this.hide())},hide(){Z&&(Z.classList.remove("ls-panel-open"),Z=null)}};e.ui.get("tabs").addEventListener("click",e=>{let t=e.target.dataset.lsRef;t&&P.show(t,!0)}),F.subscribe("LSystemConfigured",()=>{P.show("settings")}),window.innerWidth>=980&&P.show("collections");