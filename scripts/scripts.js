window.Modernizr=function(a,b,c){function d(a){t.cssText=a}function e(a,b){return d(x.join(a+";")+(b||""))}function f(a,b){return typeof a===b}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b){for(var d in a){var e=a[d];if(!g(e,"-")&&t[e]!==c)return"pfx"==b?e:!0}return!1}function i(a,b,d){for(var e in a){var g=b[a[e]];if(g!==c)return d===!1?a[e]:f(g,"function")?g.bind(d||b):g}return!1}function j(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+z.join(d+" ")+d).split(" ");return f(b,"string")||f(b,"undefined")?h(e,b):(e=(a+" "+A.join(d+" ")+d).split(" "),i(e,b,c))}function k(){o.input=function(c){for(var d=0,e=c.length;e>d;d++)E[c[d]]=!!(c[d]in u);return E.list&&(E.list=!(!b.createElement("datalist")||!a.HTMLDataListElement)),E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),o.inputtypes=function(a){for(var d,e,f,g=0,h=a.length;h>g;g++)u.setAttribute("type",e=a[g]),d="text"!==u.type,d&&(u.value=v,u.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&u.style.WebkitAppearance!==c?(q.appendChild(u),f=b.defaultView,d=f.getComputedStyle&&"textfield"!==f.getComputedStyle(u,null).WebkitAppearance&&0!==u.offsetHeight,q.removeChild(u)):/^(search|tel)$/.test(e)||(d=/^(url|email)$/.test(e)?u.checkValidity&&u.checkValidity()===!1:u.value!=v)),D[a[g]]=!!d;return D}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var l,m,n="2.7.2",o={},p=!0,q=b.documentElement,r="modernizr",s=b.createElement(r),t=s.style,u=b.createElement("input"),v=":)",w={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",z=y.split(" "),A=y.toLowerCase().split(" "),B={svg:"http://www.w3.org/2000/svg"},C={},D={},E={},F=[],G=F.slice,H=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:r+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',r,'">',a,"</style>"].join(""),j.id=r,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=q.style.overflow,q.style.overflow="hidden",q.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),q.style.overflow=i),!!g},I=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return H("@media "+b+" { #"+r+" { position: absolute; } }",function(b){d="absolute"==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position}),d},J=function(){function a(a,e){e=e||b.createElement(d[a]||"div"),a="on"+a;var g=a in e;return g||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(a,""),g=f(e[a],"function"),f(e[a],"undefined")||(e[a]=c),e.removeAttribute(a))),e=null,g}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),K={}.hasOwnProperty;m=f(K,"undefined")||f(K.call,"undefined")?function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")}:function(a,b){return K.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=G.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(G.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(G.call(arguments)))};return d}),C.flexbox=function(){return j("flexWrap")},C.flexboxlegacy=function(){return j("boxDirection")},C.canvas=function(){var a=b.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))},C.canvastext=function(){return!(!o.canvas||!f(b.createElement("canvas").getContext("2d").fillText,"function"))},C.webgl=function(){return!!a.WebGLRenderingContext},C.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:H(["@media (",x.join("touch-enabled),("),r,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!a.postMessage},C.websqldatabase=function(){return!!a.openDatabase},C.indexedDB=function(){return!!j("indexedDB",a)},C.hashchange=function(){return J("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},C.history=function(){return!(!a.history||!history.pushState)},C.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},C.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},C.rgba=function(){return d("background-color:rgba(150,255,150,.5)"),g(t.backgroundColor,"rgba")},C.hsla=function(){return d("background-color:hsla(120,40%,100%,.5)"),g(t.backgroundColor,"rgba")||g(t.backgroundColor,"hsla")},C.multiplebgs=function(){return d("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(t.background)},C.backgroundsize=function(){return j("backgroundSize")},C.borderimage=function(){return j("borderImage")},C.borderradius=function(){return j("borderRadius")},C.boxshadow=function(){return j("boxShadow")},C.textshadow=function(){return""===b.createElement("div").style.textShadow},C.opacity=function(){return e("opacity:.55"),/^0.55$/.test(t.opacity)},C.cssanimations=function(){return j("animationName")},C.csscolumns=function(){return j("columnCount")},C.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return d((a+"-webkit- ".split(" ").join(b+a)+x.join(c+a)).slice(0,-a.length)),g(t.backgroundImage,"gradient")},C.cssreflections=function(){return j("boxReflect")},C.csstransforms=function(){return!!j("transform")},C.csstransforms3d=function(){var a=!!j("perspective");return a&&"webkitPerspective"in q.style&&H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),a},C.csstransitions=function(){return j("transition")},C.fontface=function(){var a;return H('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},C.generatedcontent=function(){var a;return H(["#",r,"{font:0/0 a}#",r,':after{content:"',v,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},C.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(d){}return c},C.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(d){}return c},C.localstorage=function(){try{return localStorage.setItem(r,r),localStorage.removeItem(r),!0}catch(a){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(r,r),sessionStorage.removeItem(r),!0}catch(a){return!1}},C.webworkers=function(){return!!a.Worker},C.applicationcache=function(){return!!a.applicationCache},C.svg=function(){return!!b.createElementNS&&!!b.createElementNS(B.svg,"svg").createSVGRect},C.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==B.svg},C.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(w.call(b.createElementNS(B.svg,"animate")))},C.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(w.call(b.createElementNS(B.svg,"clipPath")))};for(var L in C)m(C,L)&&(l=L.toLowerCase(),o[l]=C[L](),F.push((o[l]?"":"no-")+l));return o.input||k(),o.addTest=function(a,b){if("object"==typeof a)for(var d in a)m(a,d)&&o.addTest(d,a[d]);else{if(a=a.toLowerCase(),o[a]!==c)return o;b="function"==typeof b?b():b,"undefined"!=typeof p&&p&&(q.className+=" "+(b?"":"no-")+a),o[a]=b}return o},d(""),s=u=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||n.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return!s.shivCSS||j||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||h(a,d),a}var j,k,l="3.7.0",m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:m.shivCSS!==!1,supportsUnknownElements:k,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,b),o._version=n,o._prefixes=x,o._domPrefixes=A,o._cssomPrefixes=z,o.mq=I,o.hasEvent=J,o.testProp=function(a){return h([a])},o.testAllProps=j,o.testStyles=H,o.prefixed=function(a,b,c){return b?j(a,b,c):j(a,"pfx")},q.className=q.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+F.join(" "):""),o}(this,this.document),!function(a,b){var c=function(b,c){var h=1===b.nodeType?b:document.querySelector(b),i=[].filter.call(h.children,function(a){return"SCRIPT"!==a.nodeName}),j=i[0],k={},l=function(a,b){i[a]&&(q("deactivate",r(j,b)),j=i[a],i.map(m),q("activate",r(j,b)),f(j,"active"),g(j,"inactive"))},m=function(a,b){var c=b-i.indexOf(j),d=c>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(g.bind(null,a)),a!==j&&["inactive",d,d+"-"+Math.abs(c)].map(f.bind(null,a))},n=function(a,b){return arguments.length?void(q("slide",r(i[a],b))&&l(a,b)):i.indexOf(j)},o=function(a,b){var c=i.indexOf(j)+a;q(a>0?"next":"prev",r(j,b))&&l(c,b)},p=function(a,b){return(k[a]||(k[a]=[])).push(b),function(){k[a]=k[a].filter(function(a){return a!==b})}},q=function(a,b){return(k[a]||[]).reduce(function(a,c){return a&&c(b)!==!1},!0)},r=function(a,b){return b=b||{},b.index=i.indexOf(a),b.slide=a,b},s={on:p,fire:q,slide:n,next:o.bind(null,1),prev:o.bind(null,-1),parent:h,slides:i};f(h,"parent"),i.map(function(a){f(a,"slide")});for(var t in c){if(!e[t])throw Error("Missing plugin: "+a+"-"+t);c[t]!==!1&&e[t](s,c[t])}return l(0),d.push(s),s},d=[],e={},f=function(b,c){b.classList.add(a+"-"+c)},g=function(b,c){b.className=b.className.replace(RegExp(a+"-"+c+"(\\s|$)","g")," ").trim()},h=function(a){return function(){var b=arguments;d.map(function(c){c[a].apply(null,b)})}};b[a]={from:c,slide:h("slide"),next:h("next"),prev:h("prev"),plugins:e}}("bespoke",window),bespoke.plugins.keys=function(a,b){var c=b===!0||"horizontal"==b;document.addEventListener("keydown",function(b){(34==b.which||32==b.which||c&&39==b.which||!c&&40==b.which)&&a.next(),(33==b.which||c&&37==b.which||!c&&38==b.which)&&a.prev()})},bespoke.plugins.touch=function(a,b){var c,d,e=b===!0||"horizontal"==b?"X":"Y";a.parent.addEventListener("touchstart",function(a){1==a.touches.length&&(c=a.touches[0]["page"+e],d=0)}),a.parent.addEventListener("touchmove",function(a){1==a.touches.length&&(a.preventDefault(),d=a.touches[0]["page"+e]-c)}),a.parent.addEventListener("touchend",function(){Math.abs(d)>50&&(d>0?a.prev():a.next())})},!function(a){a.plugins.scale=function(a,b){var c=a.parent,d=a.slides[0],e=d.offsetHeight,f=d.offsetWidth,g="zoom"===b||"zoom"in c.style&&"transform"!==b,h=function(a){var b=document.createElement("div");return b.className="bespoke-scale-parent",c.insertBefore(b,a),b.appendChild(a),b},i=g?a.slides:a.slides.map(h),j=function(a){var b="Moz Webkit O ms".split(" ");return b.reduce(function(b,d){return d+a in c.style?d+a:b},a.toLowerCase())}("Transform"),k=g?function(a,b){b.style.zoom=a}:function(a,b){b.style[j]="scale("+a+")"},l=function(){var a=c.offsetWidth/f,b=c.offsetHeight/e;i.forEach(k.bind(null,Math.min(a,b)))};window.addEventListener("resize",l),l()}}(bespoke),function(a){a.plugins.hash=function(a){var b,c=function(){var b=window.location.hash.slice(1),c=parseInt(b,10);b&&(c?d(c-1):a.slides.forEach(function(a,c){a.getAttribute("data-bespoke-hash")===b&&d(c)}))},d=function(c){c!==b&&a.slide(c)};setTimeout(function(){c(),a.on("activate",function(a){var c=a.slide.getAttribute("data-bespoke-hash");window.location.hash=c||a.index+1,b=a.index}),window.addEventListener("hashchange",c)},0)}}(bespoke),!function(a){a.plugins.progress=function(a,b){var c=document.createElement("div"),d=document.createElement("div"),e="vertical"===b?"height":["horizontal",!0].indexOf(b)+1?"width":void 0;e&&(c.className="bespoke-progress-parent",d.className="bespoke-progress-bar",c.appendChild(d),a.parent.appendChild(c),a.on("activate",function(b){d.style[e]=100*b.index/(a.slides.length-1)+"%"}))}}(bespoke),!function(a){a.plugins.forms=function(a){a.slides.forEach(function(a){a.addEventListener("keydown",function(a){(/INPUT|TEXTAREA|SELECT/.test(a.target.nodeName)||"true"===a.target.contentEditable)&&a.stopPropagation()})})}}(bespoke),BespokeFx={init:function(a,b){this.deck=a,this.direction=b.direction?b.direction:"horizontal",this.default_axis=this.getAxisFromDirection(this.direction),this.animEndEventName=this.animEndEventNames[Modernizr.prefixed("animation")],this.transition=b.transition?b.transition:"move",this.reverse=b.reverse?b.reverse:!1},getAxisFromDirection:function(a){return"vertical"==a?"Y":"X"},fx:{move:{X:{next:"move-to-left-from-right",prev:"move-to-right-from-left"},Y:{next:"move-to-top-from-bottom",prev:"move-to-bottom-from-top"}},"move-fade":{X:{next:"fade-from-right",prev:"fade-from-left"},Y:{next:"fade-from-bottom",prev:"fade-from-top"}},"move-both-fade":{X:{next:"fade-left-fade-right",prev:"fade-right-fade-left"},Y:{next:"fade-top-fade-bottom",prev:"fade-bottom-fade-top"}},"move-different-easing":{X:{next:"different-easing-from-right",prev:"different-easing-from-left"},Y:{next:"different-easing-from-bottom",prev:"different-easing-from-top"}},"scale-down-out-move-in":{X:{next:"scale-down-from-right",prev:"move-to-right-scale-up"},Y:{next:"scale-down-from-bottom",prev:"move-to-bottom-scale-up"}},"move-out-scale-up":{X:{next:"move-to-left-scale-up",prev:"scale-down-from-left"},Y:{next:"move-to-top-scale-up",prev:"scale-down-from-top"}},"scale-up-up":{X:{next:"scale-up-scale-up",prev:"scale-down-scale-down"},Y:{next:"scale-up-scale-up",prev:"scale-down-scale-down"}},"scale-down-up":{X:{next:"scale-down-scale-up",prev:"scale-down-scale-up"},Y:{next:"scale-down-scale-up",prev:"scale-down-scale-up"}},glue:{X:{next:"glue-left-from-right",prev:"glue-right-from-left"},Y:{next:"glue-top-from-bottom",prev:"glue-bottom-from-top"}},flip:{X:{next:"flip-left",prev:"flip-right"},Y:{next:"flip-top",prev:"flip-bottom"}},fall:{X:{next:"fall",prev:"fall"},Y:{next:"fall",prev:"fall"}},newspaper:{X:{next:"newspaper",prev:"newspaper"},Y:{next:"newspaper",prev:"newspaper"}},push:{X:{next:"push-left-from-right",prev:"push-right-from-left"},Y:{next:"push-top-from-bottom",prev:"push-bottom-from-top"}},pull:{X:{next:"push-left-pull-right",prev:"push-right-pull-left"},Y:{next:"push-bottom-pull-top",prev:"push-top-pull-bottom"}},fold:{X:{next:"fold-left-from-right",prev:"move-to-right-unfold-left"},Y:{next:"fold-bottom-from-top",prev:"move-to-top-unfold-bottom"}},unfold:{X:{next:"move-to-left-unfold-right",prev:"fold-right-from-left"},Y:{next:"move-to-bottom-unfold-top",prev:"fold-top-from-bottom"}},room:{X:{next:"room-to-left",prev:"room-to-right"},Y:{next:"room-to-bottom",prev:"room-to-top"}},cube:{X:{next:"cube-to-left",prev:"cube-to-right"},Y:{next:"cube-to-bottom",prev:"cube-to-top"}},carousel:{X:{next:"carousel-to-left",prev:"carousel-to-right"},Y:{next:"carousel-to-bottom",prev:"carousel-to-top"}},sides:{X:{next:"sides",prev:"sides"},Y:{next:"sides",prev:"sides"}},slide:{X:{next:"slide",prev:"slide"},Y:{next:"slide",prev:"slide"}}},animations:{"move-to-left-from-right":{id:1,group:"move",label:"Move to left / from right",outClass:"fx-slide-moveToLeft",inClass:"fx-slide-moveFromRight",reverse:"move-to-right-from-left"},"move-to-right-from-left":{id:2,group:"move",label:"Move to right / from left",outClass:"fx-slide-moveToRight",inClass:"fx-slide-moveFromLeft",reverse:"move-to-left-from-right"},"move-to-top-from-bottom":{id:3,group:"move",label:"Move to top / from bottom",outClass:"fx-slide-moveToTop",inClass:"fx-slide-moveFromBottom",reverse:"move-to-bottom-from-top"},"move-to-bottom-from-top":{id:4,group:"move",label:"Move to bottom / from top",outClass:"fx-slide-moveToBottom",inClass:"fx-slide-moveFromTop",reverse:"move-to-top-from-bottom"},"fade-from-right":{id:5,group:"fade",label:"Fade / from right",outClass:"fx-slide-fade",inClass:"fx-slide-moveFromRight fx-slide-ontop",reverse:"fade-from-left"},"fade-from-left":{id:6,group:"fade",label:"Fade / from left",outClass:"fx-slide-fade",inClass:"fx-slide-moveFromLeft fx-slide-ontop",reverse:"fade-from-right"},"fade-from-bottom":{id:7,group:"fade",label:"Fade / from bottom",outClass:"fx-slide-fade",inClass:"fx-slide-moveFromBottom fx-slide-ontop",reverse:"fade-from-top"},"fade-from-top":{id:8,group:"fade",label:"Fade / from top",outClass:"fx-slide-fade",inClass:"fx-slide-moveFromTop fx-slide-ontop",reverse:"fade-from-bottom"},"fade-left-fade-right":{id:9,group:"fade",label:"Fade left / Fade right",outClass:"fx-slide-moveToLeftFade",inClass:"fx-slide-moveFromRightFade",reverse:"fade-right-fade-left"},"fade-right-fade-left":{id:10,group:"fade",label:"Fade right / Fade left",outClass:"fx-slide-moveToRightFade",inClass:"fx-slide-moveFromLeftFade",reverse:"fade-left-fade-right"},"fade-top-fade-bottom":{id:11,group:"fade",label:"Fade top / Fade bottom",outClass:"fx-slide-moveToTopFade",inClass:"fx-slide-moveFromBottomFade",reverse:"fade-bottom-fade-top"},"fade-bottom-fade-top":{id:12,group:"fade",label:"Fade bottom / Fade top",outClass:"fx-slide-moveToBottomFade",inClass:"fx-slide-moveFromTopFade",reverse:"fade-top-fade-bottom"},"different-easing-from-right":{id:13,group:"different-easing",label:"Different easing / from right",outClass:"fx-slide-moveToLeftEasing fx-slide-ontop",inClass:"fx-slide-moveFromRight",reverse:"different-easing-from-left"},"different-easing-from-left":{id:14,group:"different-easing",label:"Different easing / from left",outClass:"fx-slide-moveToRightEasing fx-slide-ontop",inClass:"fx-slide-moveFromLeft",reverse:"different-easing-from-right"},"different-easing-from-bottom":{id:15,group:"different-easing",label:"Different easing / from bottom",outClass:"fx-slide-moveToTopEasing fx-slide-ontop",inClass:"fx-slide-moveFromBottom",reverse:"different-easing-from-top"},"different-easing-from-top":{id:16,group:"different-easing",label:"Different easing / from top",outClass:"fx-slide-moveToBottomEasing fx-slide-ontop",inClass:"fx-slide-moveFromTop",reverse:"different-easing-from-bottom"},"scale-down-from-right":{id:17,group:"scale",label:"Scale down / from right",outClass:"fx-slide-scaleDown",inClass:"fx-slide-moveFromRight fx-slide-ontop",reverse:"move-to-right-scale-up"},"scale-down-from-left":{id:18,group:"scale",label:"Scale down / from left",outClass:"fx-slide-scaleDown",inClass:"fx-slide-moveFromLeft fx-slide-ontop",reverse:"move-to-left-scale-up"},"scale-down-from-bottom":{id:19,group:"scale",label:"Scale down / from bottom",outClass:"fx-slide-scaleDown",inClass:"fx-slide-moveFromBottom fx-slide-ontop",reverse:"move-to-bottom-scale-up"},"scale-down-from-top":{id:20,group:"scale",label:"Scale down / from top",outClass:"fx-slide-scaleDown",inClass:"fx-slide-moveFromTop fx-slide-ontop",reverse:"move-to-top-scale-up"},"scale-down-scale-down":{id:21,group:"scale",label:"Scale down / scale down",outClass:"fx-slide-scaleDown",inClass:"fx-slide-scaleUpDown fx-slide-delay300",reverse:"scale-up-scale-up"},"scale-up-scale-up":{id:22,group:"scale",label:"Scale up / scale up",outClass:"fx-slide-scaleDownUp",inClass:"fx-slide-scaleUp fx-slide-delay300",reverse:"scale-down-scale-down"},"move-to-left-scale-up":{id:23,group:"scale",label:"Move to left / scale up",outClass:"fx-slide-moveToLeft fx-slide-ontop",inClass:"fx-slide-scaleUp",reverse:"scale-down-from-left"},"move-to-right-scale-up":{id:24,group:"scale",label:"Move to right / scale up",outClass:"fx-slide-moveToRight fx-slide-ontop",inClass:"fx-slide-scaleUp",reverse:"scale-down-from-right"},"move-to-top-scale-up":{id:25,group:"scale",label:"Move to top / scale up",outClass:"fx-slide-moveToTop fx-slide-ontop",inClass:"fx-slide-scaleUp",reverse:"scale-down-from-top"},"move-to-bottom-scale-up":{id:26,group:"scale",label:"Move to bottom / scale up",outClass:"fx-slide-moveToBottom fx-slide-ontop",inClass:"fx-slide-scaleUp",reverse:"scale-down-from-bottom"},"scale-down-scale-up":{id:27,group:"scale",label:"Scale down / scale up",outClass:"fx-slide-scaleDownCenter",inClass:"fx-slide-scaleUpCenter fx-slide-delay400",reverse:"scale-down-scale-up"},"glue-left-from-right":{id:28,group:"rotate:glue",label:"Glue left / from right",outClass:"fx-slide-rotateRightSideFirst",inClass:"fx-slide-moveFromRight fx-slide-delay200 fx-slide-ontop",reverse:"glue-right-from-left"},"glue-right-from-left":{id:29,group:"rotate:glue",label:"Glue right / from left",outClass:"fx-slide-rotateLeftSideFirst",inClass:"fx-slide-moveFromLeft fx-slide-delay200 fx-slide-ontop",reverse:"glue-left-from-right"},"glue-bottom-from-top":{id:30,group:"rotate:glue",label:"Glue bottom / from top",outClass:"fx-slide-rotateTopSideFirst",inClass:"fx-slide-moveFromTop fx-slide-delay200 fx-slide-ontop",reverse:"glue-top-from-bottom"},"glue-top-from-bottom":{id:31,group:"rotate:glue",label:"Glue top / from bottom",outClass:"fx-slide-rotateBottomSideFirst",inClass:"fx-slide-moveFromBottom fx-slide-delay200 fx-slide-ontop",reverse:"glue-bottom-from-top"},"flip-right":{id:32,group:"rotate:flip",label:"Flip right",outClass:"fx-slide-flipOutRight",inClass:"fx-slide-flipInLeft fx-slide-delay500",reverse:"flip-left"},"flip-left":{id:33,group:"rotate:flip",label:"Flip left",outClass:"fx-slide-flipOutLeft",inClass:"fx-slide-flipInRight fx-slide-delay500",reverse:"flip-right"},"flip-top":{id:34,group:"rotate:flip",label:"Flip top",outClass:"fx-slide-flipOutTop",inClass:"fx-slide-flipInBottom fx-slide-delay500",reverse:"flip-bottom"},"flip-bottom":{id:35,group:"rotate:flip",label:"Flip bottom",outClass:"fx-slide-flipOutBottom",inClass:"fx-slide-flipInTop fx-slide-delay500",reverse:"flip-top"},fall:{id:36,group:"rotate",label:"Fall",outClass:"fx-slide-rotateFall fx-slide-ontop",inClass:"fx-slide-scaleUp",reverse:"fall"},newspaper:{id:37,group:"rotate",label:"Newspaper",outClass:"fx-slide-rotateOutNewspaper",inClass:"fx-slide-rotateInNewspaper fx-slide-delay500",reverse:"newspaper"},"push-left-from-right":{id:38,group:"rotate:push-pull",label:"Push left / from right",outClass:"fx-slide-rotatePushLeft",inClass:"fx-slide-moveFromRight",reverse:"push-right-from-left"},"push-right-from-left":{id:39,group:"rotate:push-pull",label:"Push right / from left",outClass:"fx-slide-rotatePushRight",inClass:"fx-slide-moveFromLeft",reverse:"push-left-from-right"},"push-top-from-bottom":{id:40,group:"rotate:push-pull",label:"Push top / from bottom",outClass:"fx-slide-rotatePushTop",inClass:"fx-slide-moveFromBottom",reverse:"push-bottom-from-top"},"push-bottom-from-top":{id:41,group:"rotate:push-pull",label:"Push bottom / from top",outClass:"fx-slide-rotatePushBottom",inClass:"fx-slide-moveFromTop",reverse:"push-top-from-bottom"},"push-left-pull-right":{id:42,group:"rotate:push-pull",label:"Push left / pull right",outClass:"fx-slide-rotatePushLeft",inClass:"fx-slide-rotatePullRight fx-slide-delay180",reverse:"push-right-pull-left"},"push-right-pull-left":{id:43,group:"rotate:push-pull",label:"Push right / pull left",outClass:"fx-slide-rotatePushRight",inClass:"fx-slide-rotatePullLeft fx-slide-delay180",reverse:"push-left-pull-right"},"push-top-pull-bottom":{id:44,group:"rotate:push-pull",label:"Push top / pull bottom",outClass:"fx-slide-rotatePushTop",inClass:"fx-slide-rotatePullBottom fx-slide-delay180",reverse:"push-bottom-pull-top"},"push-bottom-pull-top":{id:45,group:"rotate:push-pull",label:"Push bottom / pull top",outClass:"fx-slide-rotatePushBottom",inClass:"fx-slide-rotatePullTop fx-slide-delay180",reverse:"push-top-pull-bottom"},"fold-left-from-right":{id:46,group:"rotate:fold-unfold",label:"Fold left / from right",outClass:"fx-slide-rotateFoldLeft",inClass:"fx-slide-moveFromRightFade",reverse:"move-to-right-unfold-left"},"fold-right-from-left":{id:47,group:"rotate:fold-unfold",label:"Fold right / from left",outClass:"fx-slide-rotateFoldRight",inClass:"fx-slide-moveFromLeftFade",reverse:"move-to-left-unfold-right"},"fold-top-from-bottom":{id:48,group:"rotate:fold-unfold",label:"Fold top / from bottom",outClass:"fx-slide-rotateFoldTop",inClass:"fx-slide-moveFromBottomFade",reverse:"move-to-bottom-unfold-top"},"fold-bottom-from-top":{id:49,group:"rotate:fold-unfold",label:"Fold bottom / from top",outClass:"fx-slide-rotateFoldBottom",inClass:"fx-slide-moveFromTopFade",reverse:"move-to-top-unfold-bottom"},"move-to-right-unfold-left":{id:50,group:"rotate:fold-unfold",label:"Move to right / unfold left",outClass:"fx-slide-moveToRightFade",inClass:"fx-slide-rotateUnfoldLeft",reverse:"fold-left-from-right"},"move-to-left-unfold-right":{id:51,group:"rotate:fold-unfold",label:"Move to left / unfold right",outClass:"fx-slide-moveToLeftFade",inClass:"fx-slide-rotateUnfoldRight",reverse:"fold-right-from-left"},"move-to-bottom-unfold-top":{id:52,group:"rotate:fold-unfold",label:"Move to bottom / unfold top",outClass:"fx-slide-moveToBottomFade",inClass:"fx-slide-rotateUnfoldTop",reverse:"fold-top-from-bottom"},"move-to-top-unfold-bottom":{id:53,group:"rotate:fold-unfold",label:"Move to top / unfold bottom",outClass:"fx-slide-moveToTopFade",inClass:"fx-slide-rotateUnfoldBottom",reverse:"fold-bottom-from-top"},"room-to-left":{id:54,group:"rotate:room",label:"Room to left",outClass:"fx-slide-rotateRoomLeftOut fx-slide-ontop",inClass:"fx-slide-rotateRoomLeftIn",reverse:"room-to-right"},"room-to-right":{id:55,group:"rotate:room",label:"Room to right",outClass:"fx-slide-rotateRoomRightOut fx-slide-ontop",inClass:"fx-slide-rotateRoomRightIn",reverse:"room-to-left"},"room-to-top":{id:56,group:"rotate:room",label:"Room to top",outClass:"fx-slide-rotateRoomTopOut fx-slide-ontop",inClass:"fx-slide-rotateRoomTopIn",reverse:"room-to-bottom"},"room-to-bottom":{id:57,group:"rotate:room",label:"Room to bottom",outClass:"fx-slide-rotateRoomBottomOut fx-slide-ontop",inClass:"fx-slide-rotateRoomBottomIn",reverse:"room-to-top"},"cube-to-left":{id:58,label:"Cube to left",outClass:"fx-slide-rotateCubeLeftOut fx-slide-ontop",inClass:"fx-slide-rotateCubeLeftIn",reverse:"cube-to-right"},"cube-to-right":{id:59,label:"Cube to right",outClass:"fx-slide-rotateCubeRightOut fx-slide-ontop",inClass:"fx-slide-rotateCubeRightIn",reverse:"cube-to-left"},"cube-to-top":{id:60,label:"Cube to top",outClass:"fx-slide-rotateCubeTopOut fx-slide-ontop",inClass:"fx-slide-rotateCubeTopIn",reverse:"cube-to-bottom"},"cube-to-bottom":{id:61,label:"Cube to bottom",outClass:"fx-slide-rotateCubeBottomOut fx-slide-ontop",inClass:"fx-slide-rotateCubeBottomIn",reverse:"cube-to-top"},"carousel-to-left":{id:62,group:"rotate:carousel",label:"Carousel to left",outClass:"fx-slide-rotateCarouselLeftOut fx-slide-ontop",inClass:"fx-slide-rotateCarouselLeftIn",reverse:"carousel-to-right"},"carousel-to-right":{id:63,group:"rotate:carousel",label:"Carousel to right",outClass:"fx-slide-rotateCarouselRightOut fx-slide-ontop",inClass:"fx-slide-rotateCarouselRightIn",reverse:"carousel-to-left"},"carousel-to-top":{id:64,group:"rotate:carousel",label:"Carousel to top",outClass:"fx-slide-rotateCarouselTopOut fx-slide-ontop",inClass:"fx-slide-rotateCarouselTopIn",reverse:"carousel-to-bottom"},"carousel-to-bottom":{id:65,group:"rotate:carousel",label:"Carousel to bottom",outClass:"fx-slide-rotateCarouselBottomOut fx-slide-ontop",inClass:"fx-slide-rotateCarouselBottomIn",reverse:"carousel-to-top"},sides:{id:66,group:"rotate",label:"Sides",outClass:"fx-slide-rotateSidesOut",inClass:"fx-slide-rotateSidesIn fx-slide-delay200",reverse:"sides"},slide:{id:67,label:"Slide",outClass:"fx-slide-rotateSlideOut",inClass:"fx-slide-rotateSlideIn",reverse:"slide"}},animEndEventNames:{WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},addClassNames:function(a,b){for(var c=b.split(" "),d=0;d<c.length;d++)a.classList.add(c[d])},removeClassNames:function(a,b){for(var c=b.split(" "),d=0;d<c.length;d++)a.classList.remove(c[d])},prev:function(a){if(a.index>0&&!a.transition_complete){var b=a.slide,c=this.deck.slides[a.index-1];this.doTransition(b,c,"prev")}},next:function(a){if(a.index<this.deck.slides.length-1){var b=a.slide,c=this.deck.slides[a.index+1];this.doTransition(b,c,"next")}},slide:function(a){if(a.slide){var b=this.deck.slide(),c=this.deck.slides[b],d=a.index,e=a.slide,f=d>b?"next":"prev";this.doTransition(c,e,f)}},doTransition:function(a,b,c){var d=b.getAttribute("data-bespoke-fx-direction")?this.getAxisFromDirection(b.getAttribute("data-bespoke-fx-direction")):this.default_axis;(this.reverse||"true"===b.getAttribute("data-bespoke-fx-reverse"))&&(c="next"===c?"prev":"next");var e=b.getAttribute("data-bespoke-fx-transition"),f=e?this.fx[e][d]:this.fx[this.transition][d],g=f[c],h=this.animations[g].outClass,i=this.animations[g].inClass,j=this;a.addEventListener(this.animEndEventName,function(a){j.removeClassNames(a.target,h+" fx-transitioning-out")}),b.addEventListener(this.animEndEventName,function(a){j.removeClassNames(a.target,i+" fx-transitioning-in")}),this.addClassNames(a,h+" fx-transitioning-out"),this.addClassNames(b,i+" fx-transitioning-in")}},function(a,b){a.plugins.fx=function(a,c){b.init(a,c),a.on("next",b.next.bind(b)),a.on("prev",b.prev.bind(b)),a.on("slide",b.slide.bind(b))}}(bespoke,BespokeFx);var self="undefined"!=typeof window?window:{},Prism=function(){var a=/\blang(?:uage)?-(?!\*)(\w+)\b/i,b=self.Prism={util:{type:function(a){return Object.prototype.toString.call(a).match(/\[object (\w+)\]/)[1]
},clone:function(a){var c=b.util.type(a);switch(c){case"Object":var d={};for(var e in a)a.hasOwnProperty(e)&&(d[e]=b.util.clone(a[e]));return d;case"Array":return a.slice()}return a}},languages:{extend:function(a,c){var d=b.util.clone(b.languages[a]);for(var e in c)d[e]=c[e];return d},insertBefore:function(a,c,d,e){e=e||b.languages;var f=e[a],g={};for(var h in f)if(f.hasOwnProperty(h)){if(h==c)for(var i in d)d.hasOwnProperty(i)&&(g[i]=d[i]);g[h]=f[h]}return e[a]=g},DFS:function(a,c){for(var d in a)c.call(a,d,a[d]),"Object"===b.util.type(a)&&b.languages.DFS(a[d],c)}},highlightAll:function(a,c){for(var d,e=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),f=0;d=e[f++];)b.highlightElement(d,a===!0,c)},highlightElement:function(d,e,f){for(var g,h,i=d;i&&!a.test(i.className);)i=i.parentNode;if(i&&(g=(i.className.match(a)||[,""])[1],h=b.languages[g]),h){d.className=d.className.replace(a,"").replace(/\s+/g," ")+" language-"+g,i=d.parentNode,/pre/i.test(i.nodeName)&&(i.className=i.className.replace(a,"").replace(/\s+/g," ")+" language-"+g);var j=d.textContent;if(j){j=j.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ");var k={element:d,language:g,grammar:h,code:j};if(b.hooks.run("before-highlight",k),e&&self.Worker){var l=new Worker(b.filename);l.onmessage=function(a){k.highlightedCode=c.stringify(JSON.parse(a.data),g),b.hooks.run("before-insert",k),k.element.innerHTML=k.highlightedCode,f&&f.call(k.element),b.hooks.run("after-highlight",k)},l.postMessage(JSON.stringify({language:k.language,code:k.code}))}else k.highlightedCode=b.highlight(k.code,k.grammar,k.language),b.hooks.run("before-insert",k),k.element.innerHTML=k.highlightedCode,f&&f.call(d),b.hooks.run("after-highlight",k)}}},highlight:function(a,d,e){return c.stringify(b.tokenize(a,d),e)},tokenize:function(a,c){var d=b.Token,e=[a],f=c.rest;if(f){for(var g in f)c[g]=f[g];delete c.rest}a:for(var g in c)if(c.hasOwnProperty(g)&&c[g]){var h=c[g],i=h.inside,j=!!h.lookbehind,k=0;h=h.pattern||h;for(var l=0;l<e.length;l++){var m=e[l];if(e.length>a.length)break a;if(!(m instanceof d)){h.lastIndex=0;var n=h.exec(m);if(n){j&&(k=n[1].length);var o=n.index-1+k,n=n[0].slice(k),p=n.length,q=o+p,r=m.slice(0,o+1),s=m.slice(q+1),t=[l,1];r&&t.push(r);var u=new d(g,i?b.tokenize(n,i):n);t.push(u),s&&t.push(s),Array.prototype.splice.apply(e,t)}}}}return e},hooks:{all:{},add:function(a,c){var d=b.hooks.all;d[a]=d[a]||[],d[a].push(c)},run:function(a,c){var d=b.hooks.all[a];if(d&&d.length)for(var e,f=0;e=d[f++];)e(c)}}},c=b.Token=function(a,b){this.type=a,this.content=b};if(c.stringify=function(a,d,e){if("string"==typeof a)return a;if("[object Array]"==Object.prototype.toString.call(a))return a.map(function(b){return c.stringify(b,d,a)}).join("");var f={type:a.type,content:c.stringify(a.content,d,e),tag:"span",classes:["token",a.type],attributes:{},language:d,parent:e};"comment"==f.type&&(f.attributes.spellcheck="true"),b.hooks.run("wrap",f);var g="";for(var h in f.attributes)g+=h+'="'+(f.attributes[h]||"")+'"';return"<"+f.tag+' class="'+f.classes.join(" ")+'" '+g+">"+f.content+"</"+f.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(a){var c=JSON.parse(a.data),d=c.language,e=c.code;self.postMessage(JSON.stringify(b.tokenize(e,b.languages[d]))),self.close()},!1),self.Prism):self.Prism;var d=document.getElementsByTagName("script");return d=d[d.length-1],d&&(b.filename=d.src,document.addEventListener&&!d.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",b.highlightAll)),self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),Prism.languages.markup={comment:/&lt;!--[\w\W]*?-->/g,prolog:/&lt;\?.+?\?>/,doctype:/&lt;!DOCTYPE.+?>/,cdata:/&lt;!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/gi,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[\{\};:]/g},Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}}),Prism.languages.clike={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/gi,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|&lt;=?|>=?|={1,3}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|get|set|new|with|typeof|try|throw|catch|finally|null|break|continue|this)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}}),function(){if(self.Prism&&self.document&&document.querySelector){var a={js:"javascript",html:"markup",svg:"markup"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(b){var c=b.getAttribute("data-src"),d=(c.match(/\.(\w+)$/)||[,""])[1],e=a[d]||d,f=document.createElement("code");f.className="language-"+e,b.textContent="",f.textContent="Loading…",b.appendChild(f);var g=new XMLHttpRequest;g.open("GET",c,!0),g.onreadystatechange=function(){4==g.readyState&&(g.status<400&&g.responseText?(f.textContent=g.responseText,Prism.highlightElement(f)):f.textContent=g.status>=400?"✖ Error "+g.status+" while fetching file: "+g.statusText:"✖ Error: File does not exist or is empty")},g.send(null)})}}(),function(a){a.plugins.state=function(a){var b=function(b,c){var d=c.slide.getAttribute("data-bespoke-state");d&&d.split(" ").forEach(function(c){c&&a.parent.classList[b](c)})};a.on("activate",b.bind(null,"add")),a.on("deactivate",b.bind(null,"remove"))}}(bespoke),bespoke.from("article",{keys:!0,touch:!0,scale:!0,hash:!0,state:!0,progress:!0,forms:!0,fx:{direction:"horizontal",transition:"push"}});