import{r as d,d as l,f as p}from"./index.e9af910d.js";import{_ as f}from"./type.a5bb541a.js";function x(){var t=d.exports.useReducer(function(n){return n+1},0),e=l(t,2),s=e[1];return s}var _=["xxl","xl","lg","md","sm","xs"],a={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},i=new Map,o=-1,u={},h={matchHandlers:{},dispatch:function(e){return u=e,i.forEach(function(s){return s(u)}),i.size>=1},subscribe:function(e){return i.size||this.register(),o+=1,i.set(o,e),e(u),o},unsubscribe:function(e){i.delete(e),i.size||this.unregister()},unregister:function(){var e=this;Object.keys(a).forEach(function(s){var n=a[s],r=e.matchHandlers[n];r==null||r.mql.removeListener(r==null?void 0:r.listener)}),i.clear()},register:function(){var e=this;Object.keys(a).forEach(function(s){var n=a[s],r=function(m){var v=m.matches;e.dispatch(f(f({},u),p({},s,v)))},c=window.matchMedia(n);c.addListener(r),e.matchHandlers[n]={mql:c,listener:r},r(c)})}};function y(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,e=d.exports.useRef({}),s=x();return d.exports.useEffect(function(){var n=h.subscribe(function(r){e.current=r,t&&s()});return function(){return h.unsubscribe(n)}},[]),e.current}export{x as a,h as b,_ as r,y as u};