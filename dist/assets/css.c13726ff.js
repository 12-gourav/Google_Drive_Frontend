var o;function h(i){if(typeof document>"u")return 0;if(i||o===void 0){var e=document.createElement("div");e.style.width="100%",e.style.height="200px";var t=document.createElement("div"),n=t.style;n.position="absolute",n.top="0",n.left="0",n.pointerEvents="none",n.visibility="hidden",n.width="200px",n.height="150px",n.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var c=e.offsetWidth;t.style.overflow="scroll";var d=e.offsetWidth;c===d&&(d=t.clientWidth),document.body.removeChild(t),o=c-d}return o}function l(i){var e=i.match(/^(.*)px$/),t=Number(e==null?void 0:e[1]);return Number.isNaN(t)?h():t}function f(i){if(typeof document>"u"||!i||!(i instanceof Element))return{width:0,height:0};var e=getComputedStyle(i,"::-webkit-scrollbar"),t=e.width,n=e.height;return{width:l(t),height:l(n)}}function a(){var i=document.documentElement.clientWidth,e=window.innerHeight||document.documentElement.clientHeight;return{width:i,height:e}}function m(i){var e=i.getBoundingClientRect(),t=document.documentElement;return{left:e.left+(window.pageXOffset||t.scrollLeft)-(t.clientLeft||document.body.clientLeft||0),top:e.top+(window.pageYOffset||t.scrollTop)-(t.clientTop||document.body.clientTop||0)}}export{a,m as b,f as c,h as g};