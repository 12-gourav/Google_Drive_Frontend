import{r as m,a as d,A as Re,_ as fe,f as n,d as T,g as V,e as re,j as P,F as Fe}from"./index.6c9b87f9.js";import{m as De}from"./motion.08662943.js";import{p as Se,q as je,_ as G,C as ne,t as _e,d as Xe,s as Ue,a as Ge}from"./type.d47588eb.js";import{d as Je}from"./index.c84aba24.js";import{b as Me,r as Q,u as Ve}from"./useBreakpoint.85f93246.js";import{u as Ke,S as qe}from"./index.8b56a125.js";import{P as Ye,S as Qe,M as Ze}from"./index.6aa0836c.js";import{A as ke}from"./index.6afb24a1.js";import"./motion.04f77c3d.js";import"./slide.138704b1.js";import"./pickAttrs.912e100a.js";import"./Compact.2f55ebc9.js";import"./index.c816b7fc.js";import"./CloseOutlined.11b2fdea.js";import"./PurePanel.177a57f8.js";import"./styleChecker.9fc32a24.js";import"./LeftOutlined.fa30e872.js";import"./index.17206201.js";import"./roundedArrow.6f9d2b2b.js";var et={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"};const tt=et;var Le=function(e,i){return d(Re,{...fe(fe({},e),{},{ref:i,icon:tt})})};Le.displayName="GithubOutlined";const rt=m.exports.forwardRef(Le);var nt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};const it=nt;var Ae=function(e,i){return d(Re,{...fe(fe({},e),{},{ref:i,icon:it})})};Ae.displayName="UserOutlined";const at=m.exports.forwardRef(Ae);var ot=m.exports.createContext({});const Ee=ot;var lt=function(e){var i=e.componentCls;return n({},i,{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around ":{justifyContent:"space-around"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}})},st=function(e){var i=e.componentCls;return n({},i,{position:"relative",maxWidth:"100%",minHeight:1})},dt=function(e,i){for(var r=e.componentCls,a=e.gridColumns,s={},l=a;l>=0;l--)l===0?(s[""+r+i+"-"+l]={display:"none"},s[r+"-push-"+l]={insetInlineStart:"auto"},s[r+"-pull-"+l]={insetInlineEnd:"auto"},s[""+r+i+"-push-"+l]={insetInlineStart:"auto"},s[""+r+i+"-pull-"+l]={insetInlineEnd:"auto"},s[""+r+i+"-offset-"+l]={marginInlineEnd:0},s[""+r+i+"-order-"+l]={order:0}):(s[""+r+i+"-"+l]={display:"block",flex:"0 0 "+l/a*100+"%",maxWidth:l/a*100+"%"},s[""+r+i+"-push-"+l]={insetInlineStart:l/a*100+"%"},s[""+r+i+"-pull-"+l]={insetInlineEnd:l/a*100+"%"},s[""+r+i+"-offset-"+l]={marginInlineStart:l/a*100+"%"},s[""+r+i+"-order-"+l]={order:l});return s},ye=function(e,i){return dt(e,i)},ct=function(e,i,r){return n({},"@media (min-width: "+i+"px)",G({},ye(e,r)))},ut=Se("Grid",function(t){return[lt(t)]}),mt=Se("Grid",function(t){var e=je(t,{gridColumns:24}),i={"-sm":e.screenSMMin,"-md":e.screenMDMin,"-lg":e.screenLGMin,"-xl":e.screenXLMin,"-xxl":e.screenXXLMin};return[st(e),ye(e,""),ye(e,"-xs"),Object.keys(i).map(function(r){return ct(e,i[r],r)}).reduce(function(r,a){return G(G({},r),a)},{})]}),ft=globalThis&&globalThis.__rest||function(t,e){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(i[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(i[r[a]]=t[r[a]]);return i};function pt(t){return typeof t=="number"?t+" "+t+" auto":/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 "+t:t}var gt=["xs","sm","md","lg","xl","xxl"],ht=m.exports.forwardRef(function(t,e){var i,r=m.exports.useContext(ne),a=r.getPrefixCls,s=r.direction,l=m.exports.useContext(Ee),c=l.gutter,o=l.wrap,g=l.supportFlexGap,f=t.prefixCls,h=t.span,I=t.order,p=t.offset,w=t.push,M=t.pull,W=t.className,S=t.children,N=t.flex,z=t.style,L=ft(t,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),u=a("col",f),C=mt(u),A=T(C,2),D=A[0],U=A[1],H={};gt.forEach(function(R){var _,x={},b=t[R];typeof b=="number"?x.span=b:V(b)==="object"&&(x=b||{}),delete L[R],H=G(G({},H),(_={},n(_,u+"-"+R+"-"+x.span,x.span!==void 0),n(_,u+"-"+R+"-order-"+x.order,x.order||x.order===0),n(_,u+"-"+R+"-offset-"+x.offset,x.offset||x.offset===0),n(_,u+"-"+R+"-push-"+x.push,x.push||x.push===0),n(_,u+"-"+R+"-pull-"+x.pull,x.pull||x.pull===0),n(_,u+"-rtl",s==="rtl"),_))});var K=re(u,(i={},n(i,u+"-"+h,h!==void 0),n(i,u+"-order-"+I,I),n(i,u+"-offset-"+p,p),n(i,u+"-push-"+w,w),n(i,u+"-pull-"+M,M),i),W,H,U),j={};if(c&&c[0]>0){var E=c[0]/2;j.paddingLeft=E,j.paddingRight=E}if(c&&c[1]>0&&!g){var q=c[1]/2;j.paddingTop=q,j.paddingBottom=q}return N&&(j.flex=pt(N),o===!1&&!j.minWidth&&(j.minWidth=0)),D(d("div",{...L,style:G(G({},j),z),className:K,ref:e,children:S}))});const vt=ht;var xt=globalThis&&globalThis.__rest||function(t,e){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(i[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(i[r[a]]=t[r[a]]);return i};_e("top","middle","bottom","stretch");_e("start","end","center","space-around","space-between","space-evenly");function Ne(t,e){var i=m.exports.useState(typeof t=="string"?t:""),r=T(i,2),a=r[0],s=r[1],l=function(){if(V(t)==="object")for(var o=0;o<Q.length;o++){var g=Q[o];if(!!e[g]){var f=t[g];if(f!==void 0){s(f);return}}}};return m.exports.useEffect(function(){l()},[JSON.stringify(t),e]),a}var yt=m.exports.forwardRef(function(t,e){var i,r=t.prefixCls,a=t.justify,s=t.align,l=t.className,c=t.style,o=t.children,g=t.gutter,f=g===void 0?0:g,h=t.wrap,I=xt(t,["prefixCls","justify","align","className","style","children","gutter","wrap"]),p=m.exports.useContext(ne),w=p.getPrefixCls,M=p.direction,W=m.exports.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),S=T(W,2),N=S[0],z=S[1],L=m.exports.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),u=T(L,2),C=u[0],A=u[1],D=Ne(s,C),U=Ne(a,C),H=Ke(),K=m.exports.useRef(f);m.exports.useEffect(function(){var se=Me.subscribe(function(v){A(v);var F=K.current||0;(!Array.isArray(F)&&V(F)==="object"||Array.isArray(F)&&(V(F[0])==="object"||V(F[1])==="object"))&&z(v)});return function(){return Me.unsubscribe(se)}},[]);var j=function(){var v=[void 0,void 0],F=Array.isArray(f)?f:[f,void 0];return F.forEach(function(J,de){if(V(J)==="object")for(var ee=0;ee<Q.length;ee++){var B=Q[ee];if(N[B]&&J[B]!==void 0){v[de]=J[B];break}}else v[de]=J}),v},E=w("row",r),q=ut(E),R=T(q,2),_=R[0],x=R[1],b=j(),pe=re(E,(i={},n(i,E+"-no-wrap",h===!1),n(i,E+"-"+U,U),n(i,E+"-"+D,D),n(i,E+"-rtl",M==="rtl"),i),l,x),X={},Z=b[0]!=null&&b[0]>0?b[0]/-2:void 0,k=b[1]!=null&&b[1]>0?b[1]/-2:void 0;if(Z&&(X.marginLeft=Z,X.marginRight=Z),H){var ie=T(b,2);X.rowGap=ie[1]}else k&&(X.marginTop=k,X.marginBottom=k);var ae=T(b,2),oe=ae[0],le=ae[1],ge=m.exports.useMemo(function(){return{gutter:[oe,le],wrap:h,supportFlexGap:H}},[oe,le,h,H]);return _(d(Ee.Provider,{value:ge,children:d("div",{...I,className:pe,style:G(G({},X),c),ref:e,children:o})}))});const St=yt;var $e=globalThis&&globalThis.__rest||function(t,e){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(i[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(i[r[a]]=t[r[a]]);return i},Ct=function(e){var i=e.prefixCls,r=e.className,a=e.avatar,s=e.title,l=e.description,c=$e(e,["prefixCls","className","avatar","title","description"]),o=m.exports.useContext(ne),g=o.getPrefixCls,f=g("list",i),h=re(f+"-item-meta",r),I=P("div",{className:f+"-item-meta-content",children:[s&&d("h4",{className:f+"-item-meta-title",children:s}),l&&d("div",{className:f+"-item-meta-description",children:l})]});return P("div",{...c,className:h,children:[a&&d("div",{className:f+"-item-meta-avatar",children:a}),(s||l)&&I]})},bt=function(e,i){var r=e.prefixCls,a=e.children,s=e.actions,l=e.extra,c=e.className,o=e.colStyle,g=$e(e,["prefixCls","children","actions","extra","className","colStyle"]),f=m.exports.useContext(Ce),h=f.grid,I=f.itemLayout,p=m.exports.useContext(ne),w=p.getPrefixCls,M=function(){var C;return m.exports.Children.forEach(a,function(A){typeof A=="string"&&(C=!0)}),C&&m.exports.Children.count(a)>1},W=function(){return I==="vertical"?!!l:!M()},S=w("list",r),N=s&&s.length>0&&d("ul",{className:S+"-item-action",children:s.map(function(u,C){return P("li",{children:[u,C!==s.length-1&&d("em",{className:S+"-item-action-split"})]},S+"-item-action-"+C)})},"actions"),z=h?"div":"li",L=d(z,{...g,...h?{}:{ref:i},className:re(S+"-item",n({},S+"-item-no-flex",!W()),c),children:I==="vertical"&&l?[P("div",{className:S+"-item-main",children:[a,N]},"content"),d("div",{className:S+"-item-extra",children:l},"extra")]:[a,N,Xe(l,{key:"extra"})]});return h?d(vt,{ref:i,flex:1,style:o,children:L}):L},ze=m.exports.forwardRef(bt);ze.Meta=Ct;const wt=ze;var It=function(e){var i,r,a=e.listBorderedCls,s=e.componentCls,l=e.paddingLG,c=e.margin,o=e.padding,g=e.listItemPaddingSM,f=e.marginLG,h=e.borderRadiusLG;return r={},n(r,""+a,(i={border:e.lineWidth+"px "+e.lineType+" "+e.colorBorder,borderRadius:h},n(i,s+"-header,"+s+"-footer,"+s+"-item",{paddingInline:l}),n(i,s+"-pagination",{margin:c+"px "+f+"px"}),i)),n(r,""+a+s+"-sm",n({},s+"-item,"+s+"-header,"+s+"-footer",{padding:g})),n(r,""+a+s+"-lg",n({},s+"-item,"+s+"-header,"+s+"-footer",{padding:o+"px "+l+"px"})),r},Ot=function(e){var i,r,a,s,l=e.componentCls,c=e.screenSM,o=e.screenMD,g=e.marginLG,f=e.marginSM,h=e.margin;return s={},n(s,"@media screen and (max-width:"+o+")",(i={},n(i,""+l,n({},l+"-item",n({},l+"-item-action",{marginInlineStart:g}))),n(i,l+"-vertical",n({},l+"-item",n({},l+"-item-extra",{marginInlineStart:g}))),i)),n(s,"@media screen and (max-width: "+c+")",(a={},n(a,""+l,n({},l+"-item",n({flexWrap:"wrap"},l+"-action",{marginInlineStart:f}))),n(a,l+"-vertical",n({},l+"-item",(r={flexWrap:"wrap-reverse"},n(r,l+"-item-main",{minWidth:e.contentWidth}),n(r,l+"-item-extra",{margin:"auto auto "+h+"px"}),r))),a)),s},Pt=function(e){var i,r,a,s,l,c,o=e.componentCls,g=e.antCls,f=e.controlHeight,h=e.minHeight,I=e.paddingSM,p=e.marginLG,w=e.padding,M=e.listItemPadding,W=e.colorPrimary,S=e.listItemPaddingSM,N=e.listItemPaddingLG,z=e.paddingXS,L=e.margin,u=e.colorText,C=e.colorTextDescription,A=e.motionDurationSlow,D=e.lineWidth;return c={},n(c,""+o,G(G({},Ue(e)),(s={position:"relative","*":{outline:"none"}},n(s,o+"-header, "+o+"-footer",{background:"transparent",paddingBlock:I}),n(s,o+"-pagination",n({marginBlockStart:p,textAlign:"end"},g+"-pagination-options",{textAlign:"start"})),n(s,o+"-spin",{minHeight:h,textAlign:"center"}),n(s,o+"-items",{margin:0,padding:0,listStyle:"none"}),n(s,o+"-item",(a={display:"flex",alignItems:"center",justifyContent:"space-between",padding:M,color:u},n(a,o+"-item-meta",(i={display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%"},n(i,o+"-item-meta-avatar",{marginInlineEnd:w}),n(i,o+"-item-meta-content",{flex:"1 0",width:0,color:u}),n(i,o+"-item-meta-title",{marginBottom:e.marginXXS,color:u,fontSize:e.fontSize,lineHeight:e.lineHeight,"> a":n({color:u,transition:"all "+A},"&:hover",{color:W})}),n(i,o+"-item-meta-description",{color:C,fontSize:e.fontSize,lineHeight:e.lineHeight}),i)),n(a,o+"-item-action",(r={flex:"0 0 auto",marginInlineStart:e.marginXXL,padding:0,fontSize:0,listStyle:"none"},n(r,"& > li",n({position:"relative",display:"inline-block",padding:"0 "+z+"px",color:C,fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"center"},"&:first-child",{paddingInlineStart:0})),n(r,o+"-item-action-split",{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:D,height:Math.ceil(e.fontSize*e.lineHeight)-e.marginXXS*2,transform:"translateY(-50%)",backgroundColor:e.colorSplit}),r)),a)),n(s,o+"-empty",{padding:w+"px 0",color:C,fontSize:e.fontSizeSM,textAlign:"center"}),n(s,o+"-empty-text",{padding:w,color:e.colorTextDisabled,fontSize:e.fontSize,textAlign:"center"}),n(s,o+"-item-no-flex",{display:"block"}),s))),n(c,o+"-grid "+g+"-col > "+o+"-item",{display:"block",maxWidth:"100%",marginBlockEnd:L,paddingBlock:0,borderBlockEnd:"none"}),n(c,o+"-vertical "+o+"-item",(l={alignItems:"initial"},n(l,o+"-item-main",{display:"block",flex:1}),n(l,o+"-item-extra",{marginInlineStart:p}),n(l,o+"-item-meta",n({marginBlockEnd:w},o+"-item-meta-title",{marginBlockEnd:I,color:u,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG})),n(l,o+"-item-action",{marginBlockStart:w,marginInlineStart:"auto","> li":n({padding:"0 "+w+"px"},"&:first-child",{paddingInlineStart:0})}),l)),n(c,o+"-split "+o+"-item",n({borderBlockEnd:e.lineWidth+"px "+e.lineType+" "+e.colorSplit},"&:last-child",{borderBlockEnd:"none"})),n(c,o+"-split "+o+"-header",{borderBlockEnd:e.lineWidth+"px "+e.lineType+" "+e.colorSplit}),n(c,o+"-split"+o+"-empty "+o+"-footer",{borderTop:e.lineWidth+"px "+e.lineType+" "+e.colorSplit}),n(c,o+"-loading "+o+"-spin-nested-loading",{minHeight:f}),n(c,o+"-split"+o+"-something-after-last-item "+g+"-spin-container > "+o+"-items > "+o+"-item:last-child",{borderBlockEnd:e.lineWidth+"px "+e.lineType+" "+e.colorSplit}),n(c,o+"-lg "+o+"-item",{padding:N}),n(c,o+"-sm "+o+"-item",{padding:S}),n(c,o+":not("+o+"-vertical)",n({},o+"-item-no-flex",n({},o+"-item-action",{float:"right"}))),c};const Gt=Se("List",function(t){var e=je(t,{listBorderedCls:t.componentCls+"-bordered",minHeight:t.controlHeightLG,listItemPadding:t.paddingContentVertical+"px "+t.paddingContentHorizontalLG+"px",listItemPaddingSM:t.paddingContentVerticalSM+"px "+t.paddingContentHorizontal+"px",listItemPaddingLG:t.paddingContentVerticalLG+"px "+t.paddingContentHorizontalLG+"px"});return[Pt(e),It(e),Ot(e)]},{contentWidth:220});var Mt=globalThis&&globalThis.__rest||function(t,e){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(i[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(i[r[a]]=t[r[a]]);return i},Ce=m.exports.createContext({});Ce.Consumer;function te(t){var e,i=t.pagination,r=i===void 0?!1:i,a=t.prefixCls,s=t.bordered,l=s===void 0?!1:s,c=t.split,o=c===void 0?!0:c,g=t.className,f=t.children,h=t.itemLayout,I=t.loadMore,p=t.grid,w=t.dataSource,M=w===void 0?[]:w,W=t.size,S=t.header,N=t.footer,z=t.loading,L=z===void 0?!1:z,u=t.rowKey,C=t.renderItem,A=t.locale,D=Mt(t,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),U=r&&V(r)==="object"?r:{},H=m.exports.useState(U.defaultCurrent||1),K=T(H,2),j=K[0],E=K[1],q=m.exports.useState(U.defaultPageSize||10),R=T(q,2),_=R[0],x=R[1],b=m.exports.useContext(ne),pe=b.getPrefixCls,X=b.renderEmpty,Z=b.direction,k={current:1,total:0},ie=function(O){return function(Y,Pe){E(Y),x(Pe),r&&r[O]&&r[O](Y,Pe)}},ae=ie("onChange"),oe=ie("onShowSizeChange"),le=function(O,Y){return C?(typeof u=="function"?u(O):u?O[u]:O.key,d(Fe,{children:C(O,Y)})):null},ge=function(){return!!(I||r||N)},se=function(O,Y){return d("div",{className:O+"-empty-text",children:A&&A.emptyText||Y("List")})},v=pe("list",a),F=Gt(v),J=T(F,2),de=J[0],ee=J[1],B=L;typeof B=="boolean"&&(B={spinning:B});var he=B&&B.spinning,ce="";switch(W){case"large":ce="lg";break;case"small":ce="sm";break}var Be=re(v,(e={},n(e,v+"-vertical",h==="vertical"),n(e,v+"-"+ce,ce),n(e,v+"-split",o),n(e,v+"-bordered",l),n(e,v+"-loading",he),n(e,v+"-grid",!!p),n(e,v+"-something-after-last-item",ge()),n(e,v+"-rtl",Z==="rtl"),e),g,ee),$=G(G(G({},k),{total:M.length,current:j,pageSize:_}),r||{}),be=Math.ceil($.total/$.pageSize);$.current>be&&($.current=be);var we=r?d("div",{className:v+"-pagination",children:d(Ye,{...$,onChange:ae,onShowSizeChange:oe})}):null,ve=Ge(M);r&&M.length>($.current-1)*$.pageSize&&(ve=Ge(M).splice(($.current-1)*$.pageSize,$.pageSize));var Te=Object.keys(p||{}).some(function(y){return["xs","sm","md","lg","xl","xxl"].includes(y)}),Ie=Ve(Te),ue=m.exports.useMemo(function(){for(var y=0;y<Q.length;y+=1){var O=Q[y];if(Ie[O])return O}},[Ie]),We=m.exports.useMemo(function(){if(!!p){var y=ue&&p[ue]?p[ue]:p.column;if(y)return{width:100/y+"%",maxWidth:100/y+"%"}}},[p==null?void 0:p.column,ue]),xe=he&&d("div",{style:{minHeight:53}});if(ve.length>0){var Oe=ve.map(function(y,O){return le(y,O)});xe=p?d(St,{gutter:p.gutter,children:m.exports.Children.map(Oe,function(y){return d("div",{style:We,children:y},y==null?void 0:y.key)})}):d("ul",{className:v+"-items",children:Oe})}else!f&&!he&&(xe=se(v,X||Je));var me=$.position||"bottom",He=m.exports.useMemo(function(){return{grid:p,itemLayout:h}},[JSON.stringify(p),h]);return de(d(Ce.Provider,{value:He,children:P("div",{className:Be,...D,children:[(me==="top"||me==="both")&&we,S&&d("div",{className:v+"-header",children:S}),P(Qe,{...B,children:[xe,f]}),N&&d("div",{className:v+"-footer",children:N}),I||(me==="bottom"||me==="both")&&we]})}))}te.Item=wt;const Kt=()=>P("div",{className:"about",children:[P(De.h2,{initial:{x:-100,scale:0},whileInView:{x:0,scale:1},viewport:{once:!1,amount:0},transition:{type:"spring",bounce:.4,duration:.8},children:["About ",d("span",{children:"CoolDrive"})]}),d("hr",{}),P("p",{children:[" ","A comfortable way to have access to all your files.It manages every media type files format.",d("br",{}),"All data are stored in the encrypted formates"]}),d("p",{children:"Before we go into all the benefits of using cloud storage, let\u2019s quickly go over how it works. When you upload a file to a cloud storage service, it gets saved on a remote computer called a \u201Cserver.\u201D You can access these servers from anywhere in the world via the internet. This means that your file is no longer tied to your device, and you can access it from any device, anywhere in the world."}),d("b",{children:"Advantages"}),P(te,{children:[d(te.Item,{children:"A cloud storage service has many benefits over traditional physical storage methods, including more accessible data storage."}),d(te.Item,{children:"Using the cloud, you can easily share files and collaborate with others."}),d(te.Item,{children:"The only true disadvantage of cloud storage is that you need to be online to use it."})]}),d("h3",{children:"Our Team"}),P(qe,{children:[d(ke,{size:50,src:"https://avatars.githubusercontent.com/u/67543863?v=4"}),P("p",{children:[d(at,{style:{paddingRight:"0.5rem",color:"#606CFC",fontWeight:"bold"}}),"Gaurav Bajpai ",d("b",{children:"(Cool Developer)"})]}),P("p",{children:[d(rt,{style:{paddingRight:"0.5rem",color:"#606CFC",fontWeight:"bold"}}),d("a",{href:"https://github.com/12-gourav",children:"https://github.com/12-gourav"})]}),P("p",{children:[d(Ze,{style:{paddingRight:"0.5rem",color:"#606CFC",fontWeight:"bold"}}),"gouravbajpai143@gmail.com ",d("b",{children:"(+91 7355 22 8160)"})]})]})]});export{Kt as default};
