(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=r("q1tI"),i=n(o),a=n(r("Gytx"));function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function d(){s=e(u.map((function(e){return e.props}))),p.canUseDOM?t(s):r&&(s=r(s))}var p=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var l=o.prototype;return l.shouldComponentUpdate=function(e){return!a(e,this.props)},l.componentWillMount=function(){u.push(this),d()},l.componentDidUpdate=function(){d()},l.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),d()},l.render=function(){return i.createElement(n,this.props)},o}(o.Component);return l(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),l(p,"canUseDOM",c),p}}},Gytx:function(e,t,r){r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var s=i[c];if(!l(s))return!1;var u=e[s],d=t[s];if(!1===(o=r?r.call(n,u,d,s):void 0)||void 0===o&&u!==d)return!1}return!0}},QeBL:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=(r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("lSNA")),i=r.n(o),a=r("4qRI"),l=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,c=Object(a.a)((function(e){return l.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),s=r("qKvR"),u=r("SIPS"),d=r("MiSq"),p=c,f=function(e){return"theme"!==e&&"innerRef"!==e},b=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?p:f};function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T=function e(t,r){var o,i,a;void 0!==r&&(o=r.label,a=r.target,i=t.__emotion_forwardProp&&r.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&r.shouldForwardProp(e)}:r.shouldForwardProp);var l=t.__emotion_real===t,c=l&&t.__emotion_base||t;"function"!=typeof i&&l&&(i=t.__emotion_forwardProp);var p=i||b(c),f=!p("as");return function(){var m=arguments,T=l&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==o&&T.push("label:"+o+";"),null==m[0]||void 0===m[0].raw)T.push.apply(T,m);else{0,T.push(m[0][0]);for(var g=m.length,y=1;y<g;y++)T.push(m[y],m[0][y])}var E=Object(s.c)((function(e,t,r){return Object(n.createElement)(s.a.Consumer,null,(function(o){var l=f&&e.as||c,s="",m=[],h=e;if(null==e.theme){for(var g in h={},e)h[g]=e[g];h.theme=o}"string"==typeof e.className?s=Object(u.a)(t.registered,m,e.className):null!=e.className&&(s=e.className+" ");var y=Object(d.a)(T.concat(m),t.registered,h);Object(u.b)(t,y,"string"==typeof l);s+=t.key+"-"+y.name,void 0!==a&&(s+=" "+a);var E=f&&void 0===i?b(l):p,A={};for(var v in e)f&&"as"===v||E(v)&&(A[v]=e[v]);return A.className=s,A.ref=r||e.innerRef,Object(n.createElement)(l,A)}))}));return E.displayName=void 0!==o?o:"Styled("+("string"==typeof c?c:c.displayName||c.name||"Component")+")",E.defaultProps=t.defaultProps,E.__emotion_real=E,E.__emotion_base=c,E.__emotion_styles=T,E.__emotion_forwardProp=i,Object.defineProperty(E,"toString",{value:function(){return"."+a}}),E.withComponent=function(t,n){return e(t,void 0!==n?h({},r||{},{},n):r).apply(void 0,T)},E}},g=r("+ZDr"),y=r.n(g),E=(T("h1",{target:"e1h04ftx0"})({name:"t2gj22",styles:"font-size:1.25rem;margin-top:0;@media (min-width:30em){margin-top:0.67em;font-size:1.5rem;}"}),T("h3",{target:"e1h04ftx1"})({name:"wibfrs",styles:"font-size:1rem;@media (min-width:30em){font-size:1.25rem;}"}),T("header",{target:"e1h04ftx2"})({name:"1wwbjex",styles:"display:flex;justify-content:space-around;padding-bottom:1em;flex-direction:column;padding:2rem 0;align-items:center;"}),T("section",{target:"e1h04ftx3"})({name:"6zd2w2",styles:"background:rgba(74,84,89,0.2);position:relative;padding:0.5rem 1rem;margin-bottom:-17px;::before{content:' ';position:absolute;display:block;border:0.5rem solid #0078d7;height:calc(100% - 1em);left:-2em;top:0;border-radius:5px;}"}),T("footer",{target:"e1h04ftx4"})({name:"woapwa",styles:"grid-area:footer;background:rgba(0,120,215,0.5);display:flex;align-items:center;justify-content:center;z-index:1;"})),A=T("main",{target:"e1h04ftx5"})({name:"1bizv36",styles:"grid-area:main;padding:1rem;@media (min-width:0em){padding:0;width:92vw;margin:0 auto;}@media (min-width:45em){padding:0;width:50vw;margin:0 auto;}"}),v=(T("main",{target:"e1h04ftx6"})({name:"9qtcho",styles:"grid-area:main;flex:1 0 auto;padding:1rem;width:50vw;background:rgba(0,0,0,0.25);margin:2rem;border-radius:1rem;box-shadow:0 19px 38px rgba(0,0,0,0.3),0 15px 12px rgba(0,0,0,0.22);p{text-align:justify;}"}),T("nav",{target:"e1h04ftx7"})({name:"10j27j8",styles:"grid-area:nav;font-size:1rem;color:#0078d7;display:flex;flex-direction:row;justify-content:center;margin:0;height:100%;align-items:center;@media (min-width:30em){justify-content:flex-end;}> ul{padding:0;margin:0;}"})),O=T("li",{target:"e1h04ftx8"})({name:"mdk9gn",styles:"display:inline-block;margin:0 1em;"}),x=(T("img",{target:"e1h04ftx9"})({name:"1q0nlag",styles:"width:7em;height:7em;border-radius:50%;box-shadow:0 4px 28px rgba(0,0,0,0.25),0 1px 10px rgba(0,0,0,0.22);"}),T(y.a,{target:"e1h04ftx10"})({name:"m1kt3l",styles:"color:#0078d7;text-decoration:none;&:hover{text-decoration:underline;}"})),S=(T("div",{target:"e1h04ftx11"})({name:"rzgg4d",styles:"padding-left:1rem;width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;z-index:5;"}),T("nav",{target:"e1h04ftx12"})({name:"6kzlz7",styles:"grid-area:work-nav;background:#0078d7;"}),T("header",{target:"e1h04ftx13"})({name:"1ietk4q",styles:"grid-area:work-header;background:#0063b1;"}),T("section",{target:"e1h04ftx14"})({name:"p35mou",styles:"grid-area:work-content;background:rgba(76,74,72,0.6);"}),T("cite",{target:"e1h04ftx15"})({name:"nji03h",styles:"display:inline-block;background:#0078d7;padding:0.5rem 1rem;margin-left:212px;margin-bottom:1rem;width:212px;text-align:right;z-index:5;"}),T("header",{target:"e1h04ftx16"})({name:"111kh6f",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;padding:2em 0;color:white;text-shadow:0 10px 20px rgba(0,0,0,0.3);"}),T("div",{target:"e1h04ftx17"})({name:"1gpc5x7",styles:"display:flex;padding:1em 2em;flex-direction:column;align-items:center;"}),T("section",{target:"e1h04ftx18"})({name:"103wwl",styles:"display:flex;flex-direction:column;position:relative;padding:1rem;box-shadow:0 10px 20px rgba(0,0,0,0.3),0 8px 6px rgba(0,0,0,0.22);margin:1.75rem 0 2rem 0;border-radius:1rem;p:first-of-type{order:2;}p:nth-of-type(2){order:3;}p:nth-of-type(3){order:4;}@media (min-width:45em){margin:6rem 0;p:first-of-type{width:60%;}}"}),T("img",{target:"e1h04ftx19"})({name:"bf4hc7",styles:"width:100%;order:1;border-radius:2rem;@media (min-width:45em){width:50%;position:absolute;max-width:12em;right:-2em;top:-4em;box-shadow:0 4px 28px rgba(0,0,0,0.25),0 1px 10px rgba(0,0,0,0.22);}"}),T("label",{target:"e1h04ftx20"})({name:"lgx4k7",styles:"padding:1em 3.6em;text-align:right;"}),T("input",{target:"e1h04ftx21"})({name:"8pz7c3",styles:"border-radius:5px;background:#C73042;padding:0.25rem 1rem;border:0;color:white;font-size 16px;line-height:24px;transition:all 300ms cubic-bezier(0.25,0.8,0.25,1);box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);&:hover{box-shadow:0 4px 28px rgba(0,0,0,0.25),0 1px 10px rgba(0,0,0,0.22);}"}),T("input",{target:"e1h04ftx22"})({name:"stgnzf",styles:"background:#d8d8d8;border-radius:1rem;outline:0;border:0;padding:0.5rem;width:100%;margin:1rem 0;"}),T("textarea",{target:"e1h04ftx23"})({name:"stgnzf",styles:"background:#d8d8d8;border-radius:1rem;outline:0;border:0;padding:0.5rem;width:100%;margin:1rem 0;"}),T("label",{target:"e1h04ftx24"})({name:"14khfyg",styles:"width:80%;text-transform:capitalize;color:white;"}),T("section",{target:"e1h04ftx25"})({name:"akdej2",styles:"background:rgba(74,84,89,0.2);position:relative;padding:0.5rem 1rem 0.5rem 1rem;border-radius:1rem;margin:10rem 0;::before{content:' ';position:absolute;display:block;border:0.5rem solid #0078d7;height:calc(100% - 1em);left:-2em;top:0;border-radius:5px;}:first-of-type{margin-top:6rem;}:last-child{margin-bottom:6rem;}"})),w=T("cite",{target:"e1h04ftx26"})({name:"vk38t1",styles:"display:inline-block;background:#0078d7;padding:0.5rem 1rem;width:101px;text-align:center;z-index:5;border-radius:5px;font-size:14px;position:absolute;right:0;bottom:-17px;@media (min-width:45em){right:-38px;}"}),_=(T("div",{target:"e1h04ftx27"})({name:"f3jgxz",styles:"width:50%;height:100%;position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column;h5,p{z-index:10;width:75%;}div:nth-of-type(3){width:200px;height:100px;background:white;filter:blur(5px);position:absolute;top:1rem;border:1em solid white;box-shadow:0 4px 28px rgba(0,0,0,0.25),0 1px 10px rgba(0,0,0,0.22);}div:nth-of-type(4){width:100px;height:100px;background:white;filter:blur(10px);position:absolute;left:50%;top:50%;border:1em solid white;box-shadow:0 4px 28px rgba(0,0,0,0.25),0 1px 10px rgba(0,0,0,0.22);}div:nth-of-type(5){width:50px;height:50px;background:white;filter:blur(15px);position:absolute;bottom:1rem;left:1rem;border:1em solid white;box-shadow:0 4px 28px rgba(0,0,0,0.25),0 1px 10px rgba(0,0,0,0.22);}"}),T("img",{target:"e1h04ftx28"})({name:"1ieiqwn",styles:"max-width:400px;width:100%;border:1em solid white;box-shadow:0 4px 28px rgba(0,0,0,0.25),0 1px 10px rgba(0,0,0,0.22);"}),Object(n.memo)((function(){return Object(s.b)(E,null,Object(s.b)("p",null,"Made with"," ",Object(s.b)("span",{role:"img","aria-label":"coffee"},"☕")," ","| 2019"))}))),P=(r("VxdY"),function(e){return e.isCurrent?{className:"selected"}:null}),R=Object(n.memo)((function(){return Object(s.b)(v,null,Object(s.b)("ul",null,Object(s.b)(O,null,Object(s.b)(x,{to:"/",getProps:P},"Home")),Object(s.b)(O,null,Object(s.b)(x,{to:"/about",getProps:P},"About")),Object(s.b)(O,null,Object(s.b)(x,{to:"/skills",getProps:P},"Skills")),Object(s.b)(O,null,Object(s.b)(x,{to:"/work",getProps:P},"Work")),Object(s.b)(O,null,Object(s.b)(x,{to:"/contact",getProps:P},"Contact"))))})),j=T("header",{target:"e1b707p20"})({name:"1k38ufm",styles:"display:inline-block;padding:0.5rem 0rem;max-width:50vw;text-align:left;z-index:5;border-top-left-radius:5px;border-top-right-radius:5px;position:absolute top:-5rem;left:0;h5{margin:0 0 0 1rem;;}"}),M=T(y.a,{target:"e1b707p21"})({name:"1k72z6a",styles:"text-decoration:none;h2{transition:color 200ms ease-in;}&:hover{h2{color:#0078d7;}}"}),k=function(e){var t=e.text;return Object(s.b)(M,{to:t[0].url},Object(s.b)(j,null,Object(s.b)("h2",null,t[0].title)))},C=Object(n.memo)((function(e){var t=e.blog;console.log(t.props[0].frontmatter);var r=t.props.map((function(e){return Object(s.b)(S,{key:e.id},Object(s.b)(k,{text:e.frontmatter.title}),Object(s.b)("p",null,e.excerpt),Object(s.b)(w,null,e.frontmatter.date))}));return Object(s.b)("div",null,r)})),I=r("TJpk"),N=r.n(I),L=function(e){return Object(s.b)(A,null,Object(s.b)(N.a,null,Object(s.b)("title",null,"Elliot Evans - Home"),Object(s.b)("meta",{name:"description",content:"Home Page"}),Object(s.b)("meta",{name:"keywords",content:"Front End Developer, Web Application Developer, Web Developer, Javascript Developer"})),Object(s.b)(C,{blog:e}))},G=(r("Z2Ku"),r("L9s1"),r("SWUc"),Object(n.memo)((function(e){return"/"===e.props.location.pathname?Object(s.b)("div",null,Object(s.b)("div",{id:"blob-1"}),Object(s.b)("div",{id:"blob-2"}),Object(s.b)("div",{id:"blob-3"}),Object(s.b)("div",{id:"blob-4"}),Object(s.b)("div",{id:"blob-6"}),Object(s.b)("div",{id:"blob-7"}),Object(s.b)("div",{id:"blob-5"}),Object(s.b)("div",{id:"blob-8"}),Object(s.b)("div",{id:"blob-9"}),Object(s.b)("div",{id:"blob-10"}),Object(s.b)("div",{id:"blob-11"}),Object(s.b)("div",{id:"blob-12"})):e.props.location.pathname.includes("post")?Object(s.b)("div",null,Object(s.b)("div",{id:"blob-2"}),Object(s.b)("div",{id:"blob-3"}),Object(s.b)("div",{id:"post-blob-5"}),Object(s.b)("div",{id:"blob-8"})):Object(s.b)("div",null,Object(s.b)("div",{id:"blob-1"}),Object(s.b)("div",{id:"blob-2"}),Object(s.b)("div",{id:"blob-3"}),Object(s.b)("div",{id:"blob-4"}),Object(s.b)("div",{id:"blob-6"}),Object(s.b)("div",{id:"blob-7"}))})));r.d(t,"default",(function(){return H})),r.d(t,"pageQuery",(function(){return U}));var H=function(e){var t,r;function o(t,r){return e.call(this,t,r)||this}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.prototype.render=function(){return Object(s.b)("div",{className:"appGrid"},Object(s.b)(R,null),Object(s.b)(n.StrictMode,null,Object(s.b)(A,null,Object(s.b)(G,{props:this.props}),Object(s.b)(L,{props:this.props.data.allMarkdownRemark.edges}))),Object(s.b)(_,null))},o}(n.Component),U="3014963385"},TJpk:function(e,t,r){r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("/SS/"),r("91GP"),t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=d(r("q1tI")),a=d(r("17x9")),l=d(r("8+s/")),c=d(r("bmMU")),s=r("v1p5"),u=r("hFT/");function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var f,b,m,h=(0,l.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),T=(f=h,m=b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return n({},o,((t={})[r.type]=[].concat(o[r.type]||[],[n({},i,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,o=e.child,i=e.newProps,a=e.newChildProps,l=e.nestedChildren;switch(o.type){case u.TAG_NAMES.TITLE:return n({},i,((t={})[o.type]=l,t.titleAttributes=n({},a),t));case u.TAG_NAMES.BODY:return n({},i,{bodyAttributes:n({},a)});case u.TAG_NAMES.HTML:return n({},i,{htmlAttributes:n({},a)})}return n({},i,((r={})[o.type]=n({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var o;r=n({},r,((o={})[t]=e[t],o))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=p(o,["children"]),l=(0,s.convertReactPropstoHtmlAttributes)(a);switch(r.warnOnInvalidChildren(e,i),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:l,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=p(e,["children"]),o=n({},r);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(f,o)},o(t,null,[{key:"canUseDOM",set:function(e){f.canUseDOM=e}}]),t}(i.default.Component),b.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},b.defaultProps={defer:!0,encodeSpecialCharacters:!0},b.peek=f.peek,b.rewind=function(){var e=f.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},m);T.renderStatic=T.rewind,t.Helmet=T,t.default=T},bmMU:function(e,t,r){"use strict";r("SRfc"),r("a1Th"),r("Oyvg"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var n=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var l,c,s,u=n(t),d=n(r);if(u&&d){if((c=t.length)!=r.length)return!1;for(l=c;0!=l--;)if(!e(t[l],r[l]))return!1;return!0}if(u!=d)return!1;var p=t instanceof Date,f=r instanceof Date;if(p!=f)return!1;if(p&&f)return t.getTime()==r.getTime();var b=t instanceof RegExp,m=r instanceof RegExp;if(b!=m)return!1;if(b&&m)return t.toString()==r.toString();var h=o(t);if((c=h.length)!==o(r).length)return!1;for(l=c;0!=l--;)if(!i.call(r,h[l]))return!1;if(a&&t instanceof Element&&r instanceof Element)return t===r;for(l=c;0!=l--;)if(!("_owner"===(s=h[l])&&t.$$typeof||e(t[s],r[s])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},"hFT/":function(e,t,r){r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},jm62:function(e,t,r){var n=r("XKFU"),o=r("mQtv"),i=r("aCFj"),a=r("EemH"),l=r("8a7r");n(n.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,r,n=i(e),c=a.f,s=o(n),u={},d=0;s.length>d;)void 0!==(r=c(n,t=s[d++]))&&l(u,t,r);return u}})},mQtv:function(e,t,r){var n=r("kJMx"),o=r("JiEa"),i=r("y3w9"),a=r("dyZX").Reflect;e.exports=a&&a.ownKeys||function(e){var t=n.f(i(e)),r=o.f;return r?t.concat(r(e)):t}},v1p5:function(e,t,r){(function(e){r("KKXr"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("pIFo"),r("91GP"),r("rE2o"),r("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=c(r("q1tI")),a=c(r("MgzW")),l=r("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=h(e,l.TAG_NAMES.TITLE),r=h(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=h(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},p=function(e){return h(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},f=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},b=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},m=function(e,t,r){var o={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&A("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||r===l.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||s===l.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==l.TAG_PROPERTIES.INNER_HTML&&c!==l.TAG_PROPERTIES.CSS_TEXT&&c!==l.TAG_PROPERTIES.ITEM_PROP||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return o[r]||(o[r]={}),n[r]||(n[r]={}),!o[r][u]&&(n[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(n),c=0;c<i.length;c++){var s=i[c],u=(0,a.default)({},o[s],n[s]);o[s]=u}return e}),[]).reverse()},h=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},T=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){T(e)}),0)}),g=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||T:e.requestAnimationFrame||T,E="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||g:e.cancelAnimationFrame||g,A=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,O=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,d=e.styleTags,p=e.title,f=e.titleAttributes;w(l.TAG_NAMES.BODY,n),w(l.TAG_NAMES.HTML,o),S(p,f);var b={baseTag:_(l.TAG_NAMES.BASE,r),linkTags:_(l.TAG_NAMES.LINK,i),metaTags:_(l.TAG_NAMES.META,a),noscriptTags:_(l.TAG_NAMES.NOSCRIPT,c),scriptTags:_(l.TAG_NAMES.SCRIPT,u),styleTags:_(l.TAG_NAMES.STYLE,d)},m={},h={};Object.keys(b).forEach((function(e){var t=b[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=b[e].oldTags)})),t&&t(),s(e,m,h)},x=function(e){return Array.isArray(e)?e.join(""):e},S=function(e,t){void 0!==e&&document.title!==e&&(document.title=x(e)),w(l.TAG_NAMES.TITLE,t)},w=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(l.HELMET_ATTRIBUTE),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],u=t[s]||"";r.getAttribute(s)!==u&&r.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var d=i.indexOf(s);-1!==d&&i.splice(d,1)}for(var p=i.length-1;p>=0;p--)r.removeAttribute(i[p]);o.length===i.length?r.removeAttribute(l.HELMET_ATTRIBUTE):r.getAttribute(l.HELMET_ATTRIBUTE)!==a.join(",")&&r.setAttribute(l.HELMET_ATTRIBUTE,a.join(","))}},_=function(e,t){var r=document.head||document.querySelector(l.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===l.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===l.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(l.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},P=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[l.REACT_TAG_MAP[r]||r]=e[r],t}),t)},j=function(e,t,r){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[l.HELMET_ATTRIBUTE]=!0,o=R(r,n),[i.default.createElement(l.TAG_NAMES.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=P(r),i=x(t);return o?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+">"+u(i,n)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+u(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return R(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[l.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=l.REACT_TAG_MAP[e]||e;if(r===l.TAG_PROPERTIES.INNER_HTML||r===l.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),i.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+u(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[l.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){v&&E(v),e.defer?v=y((function(){O(e,(function(){v=null}))})):(O(e),v=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,d=e.title,p=void 0===d?"":d,f=e.titleAttributes;return{base:j(l.TAG_NAMES.BASE,t,n),bodyAttributes:j(l.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:j(l.ATTRIBUTE_NAMES.HTML,o,n),link:j(l.TAG_NAMES.LINK,i,n),meta:j(l.TAG_NAMES.META,a,n),noscript:j(l.TAG_NAMES.NOSCRIPT,c,n),script:j(l.TAG_NAMES.SCRIPT,s,n),style:j(l.TAG_NAMES.STYLE,u,n),title:j(l.TAG_NAMES.TITLE,{title:p,titleAttributes:f},n)}},t.reducePropsToState=function(e){return{baseTag:b([l.TAG_PROPERTIES.HREF],e),bodyAttributes:f(l.ATTRIBUTE_NAMES.BODY,e),defer:h(e,l.HELMET_PROPS.DEFER),encode:h(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:f(l.ATTRIBUTE_NAMES.HTML,e),linkTags:m(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:m(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:m(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:f(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=A}).call(this,r("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-10ea7ac1050ed164fcd4.js.map