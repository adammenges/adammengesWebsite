(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{137:function(e,t,n){var i=n(0),r={display:"block",opacity:0,position:"absolute",top:0,left:0,height:"100%",width:"100%",overflow:"hidden",pointerEvents:"none",zIndex:-1},o=function(e){var t=e.onResize,n=i.useRef();return function(e,t){i.useEffect(function(){var n=e.current&&e.current.contentDocument.defaultView;return t(),n&&n.addEventListener("resize",t),function(){n&&"function"==typeof n.removeEventListener&&n.removeEventListener("resize",t)}},[])}(n,function(){return t(n)}),i.createElement("object",{type:"text/html",style:r,data:"about:blank",ref:n,"aria-hidden":!0,"aria-label":"resize-listener",tabIndex:-1})},a=function(e){return{width:null!=e?e.offsetWidth:null,height:null!=e?e.offsetHeight:null}};e.exports=function(e){void 0===e&&(e=a);var t=i.useState({width:null,height:null}),n=t[0],r=t[1],l=i.useCallback(function(t){return r(e(t.current))},[e]);return[i.useMemo(function(){return i.createElement(o,{onResize:l})},[l]),n]}},53:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i);n(137);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(i=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(d){r=!0,o=d}finally{try{i||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=function(){var e,t,n,a=(e=o(Object(i.useState)(function(){return{width:window.innerWidth,height:window.innerHeight}}),2),t=e[0],n=e[1],Object(i.useEffect)(function(){var e=function(){return n({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),t);r.a.useEffect(function(){console.log("size.width "+a.width),console.log("size.height "+a.height)},[a.width,a.height]);var l=a.width<640,d="100%",s="100%";"undefined"!=typeof window&&(d=window.innerHeight,s=window.innerWidth),a.height&&(d=a.height),a.width&&(s=a.width);var u=r.a.createElement("div",{style:{backgroundColor:"#00080e",height:d,width:s,position:"relative",overflow:"hidden"}},r.a.createElement("div",{className:"me-blend",style:{position:"absolute",left:s/2-200,top:d/2-320}}),r.a.createElement("div",{style:{position:"absolute",left:s/2-300,top:d/2-50}},r.a.createElement("div",{style:{fontSize:37}},"Adam Menges"),r.a.createElement("div",{style:{fontSize:17,marginTop:-2}},r.a.createElement("a",{href:"mailto:adam@adammenges.com"},"adam@adammenges.com")),r.a.createElement("div",{style:{fontSize:17}},r.a.createElement("a",{href:"sms:720-484-0275"},"720-484-0275")))),c=r.a.createElement("div",{style:{backgroundColor:"#00080e",height:d,width:s,position:"relative",overflow:"hidden"}},r.a.createElement("div",{className:"me-blend",style:{position:"absolute",left:s/2-225,top:d/2-225-75}}),r.a.createElement("div",{style:{position:"absolute",left:s/2-110,top:d/2+125}},r.a.createElement("div",{style:{fontSize:37}},"Adam Menges"),r.a.createElement("div",{style:{fontSize:17,marginTop:-2}},r.a.createElement("a",{href:"mailto:adam@adammenges.com"},"adam@adammenges.com")),r.a.createElement("div",{style:{fontSize:17}},r.a.createElement("a",{href:"sms:720-484-0275"},"720-484-0275"))));return console.log(l),r.a.createElement("div",{style:{position:"relative"}},l?c:u)};t.default=function(){return r.a.createElement("div",null,r.a.createElement(a,null))}}}]);