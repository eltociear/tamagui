"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[987],{1045:function(e,t,n){n.d(t,{H:function(){return l}});var o=n(2322),r=n(7729),i=n.n(r),s=n(5632);function l(e){var t;let{url:n="https://tamagui.dev",pathname:r,title:l="Tamagui",description:a="",poster:u,...d}=e,c=(0,s.useRouter)(),k=null!==(t=d.image)&&void 0!==t?t:u?"".concat(n,"/").concat(u):"".concat(n,"/social.png"),h=r||c.asPath;return(0,o.jsxs)(i(),{children:[(0,o.jsx)("title",{children:l}),(0,o.jsx)("meta",{name:"description",content:a}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, user-scalable=no"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"}),(0,o.jsx)("meta",{property:"og:url",content:"".concat(n).concat(h)}),(0,o.jsx)("meta",{property:"og:title",content:l}),(0,o.jsx)("meta",{property:"og:description",content:a}),(0,o.jsx)("meta",{property:"og:image",content:k}),(0,o.jsx)("meta",{name:"twitter:site",content:"@tamagui_js"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}n(2784)},7611:function(e,t,n){n.d(t,{B:function(){return u}});var o=n(2322),r=n(1401),i=n(102),s=n(4697),l=n(2784),a=n(8652);function u(e){let t=e.extractable((0,l.forwardRef)((t,n)=>{let u=(0,i.R)(e)&&e.staticConfig.isInput,d=(0,l.useRef)(t.value||t.defaultValue||""),c=(0,l.useCallback)(e=>{t.id&&e&&(0,a.QS)(t.id,{focus:e.focus,...u&&{focusAndSelect(){e.focus(),e.setSelection&&"string"==typeof d.current&&e.setSelection(0,d.current.length)}}})},[u,t.id]),k=(0,r.F)(n,c);(0,l.useEffect)(()=>{if(t.id)return()=>{(0,a.Xe)(t.id)}},[t.id]);let h=(0,s.z)(e=>{var n;d.current=e,null===(n=t.onChangeText)||void 0===n||n.call(t,e)}),f=u?{...t,onChangeText:h}:t;return(0,o.jsx)(e,{ref:k,...f})}));return t}},8652:function(e,t,n){n.d(t,{Q8:function(){return i},QS:function(){return o},Xe:function(){return r}});let o=(e,t)=>{},r=e=>{},i=e=>{}},4476:function(e,t,n){n.d(t,{E:function(){return d}});var o=n(2322),r=n(2717),i=n(1560),s=n(8694),l=n(6030),a=n(2832);(0,r.Gy)({Image:a.Z});let u=(0,i.z)(a.Z,{name:"Image",position:"relative",source:{uri:""},zIndex:1}),d=u.extractable(e=>{let t=(0,s.p)(e),{src:n,...r}=t,i="string"==typeof n?{uri:n,...l.$L&&{width:t.width,height:t.height}}:n;return(0,o.jsx)(u,{source:i,...r})})},8848:function(e,t,n){n.d(t,{G:function(){return u},y:function(){return a}});var o=n(4289),r=n(6030),i=n(5678),s=n(8480),l=n(7800);let a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"$4",t=arguments.length>1?arguments[1]:void 0;if(t.props.multiline||t.props.numberOfLines>1)return u(e,t);let n=(0,s.f)(e,t),i=(0,o.C)(t.tokens.space,e,-1,[2]),a=(0,l.H)(e,t);return!r.$L&&a&&delete a.lineHeight,{...a,...n,paddingHorizontal:i}},u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"$4",t=arguments.length>1?arguments[1]:void 0,{props:n}=t,r=(0,s.f)(e,t),a=(0,l.H)(e,t),u=n.numberOfLines?(n.numberOfLines||1)*(0,i.Ve)(a.lineHeight):"auto",d=(0,o.C)(t.tokens.space,e,-2,[2]),c=(0,o.C)(t.tokens.space,e,-1,[2]);return{...r,...a,paddingVertical:d,paddingHorizontal:c,height:u}}},712:function(e,t,n){n.d(t,{r:function(){return l}});var o=n(2322),r=n(6030),i=n(2655),s=n(2784);function l(e){let{children:t,columns:n,itemMinWidth:l=200,gap:a}=e;if(r.$L)return(0,o.jsx)("div",{style:{gap:a,display:"grid",justifyContent:"stretch",gridTemplateColumns:"repeat( auto-fit, minmax(".concat(l,"px, 1fr) )")},children:t});let u=s.Children.toArray(t);return(0,o.jsx)(i.sL,{alignItems:"center",justifyContent:"center",flexWrap:"wrap",children:u.map((e,t)=>e?(0,o.jsx)(i.sL,{flex:1,minWidth:l,marginRight:a,marginBottom:a,children:e},t):null)})}},3197:function(e,t,n){n.d(t,{I:function(){return C},z:function(){return W}});var o=n(2717),r=n(1560),i=n(7611),s=n(2784),l=n(4545),a=n(302),u=n(9005),d=n(4393),c=n(9973),k=n(4304),h=n(9538),f=n(7851),p=n(2424),x=n(6218);let m=(e,t)=>{let{selectionEnd:n,selectionStart:o}=e,{start:r,end:i}=t;return r!==o||i!==n},y=(e,t)=>{if(m(e,t)){let{start:n,end:o}=t;try{e.setSelectionRange(n,o||n)}catch(r){}}},j=Object.assign({},a.Tf.defaultProps,a.Tf.accessibilityProps,a.Tf.clickProps,a.Tf.focusProps,a.Tf.keyboardProps,a.Tf.mouseProps,a.Tf.touchProps,a.Tf.styleProps,{autoCapitalize:!0,autoComplete:!0,autoCorrect:!0,autoFocus:!0,defaultValue:!0,disabled:!0,lang:!0,maxLength:!0,onChange:!0,onScroll:!0,placeholder:!0,pointerEvents:!0,readOnly:!0,rows:!0,spellCheck:!0,value:!0,type:!0}),L=e=>(0,u.Z)(e,j),g="undefined"==typeof window?s.useEffect:s.useLayoutEffect,v=null,w=s.forwardRef((e,t)=>{let n,o;let{autoCapitalize:r="sentences",autoComplete:i,autoCompleteType:l,autoCorrect:a=!0,blurOnSubmit:u,clearTextOnFocus:m,dir:j,editable:w=!0,keyboardType:b="default",multiline:W=!1,numberOfLines:C=1,onBlur:H,onChange:z,onChangeText:B,onContentSizeChange:S,onFocus:N,onKeyPress:T,onLayout:E,onMoveShouldSetResponder:F,onMoveShouldSetResponderCapture:I,onResponderEnd:P,onResponderGrant:R,onResponderMove:Z,onResponderReject:_,onResponderRelease:A,onResponderStart:M,onResponderTerminate:K,onResponderTerminationRequest:O,onScrollShouldSetResponder:U,onScrollShouldSetResponderCapture:V,onSelectionChange:D,onSelectionChangeShouldSetResponder:G,onSelectionChangeShouldSetResponderCapture:Q,onStartShouldSetResponder:q,onStartShouldSetResponderCapture:X,onSubmitEditing:J,placeholderTextColor:Y,returnKeyType:ee,secureTextEntry:et=!1,selection:en,selectTextOnFocus:eo,spellCheck:er}=e;switch(b){case"email-address":n="email";break;case"number-pad":case"numeric":o="numeric";break;case"decimal-pad":o="decimal";break;case"phone-pad":n="tel";break;case"search":case"web-search":n="search";break;case"url":n="url";break;default:n="text"}et&&(n="password");let ei=s.useRef({height:null,width:null}),es=s.useRef(null),el=s.useCallback(e=>{if(W&&S&&null!=e){let t=e.scrollHeight,n=e.scrollWidth;(t!==ei.current.height||n!==ei.current.width)&&(ei.current.height=t,ei.current.width=n,S({nativeEvent:{contentSize:{height:ei.current.height,width:ei.current.width}}}))}},[W,S]),ea=s.useMemo(()=>e=>{null!=e&&(e.clear=function(){null!=e&&(e.value="")},e.isFocused=function(){return null!=e&&d.Z.currentlyFocusedField()===e},el(e))},[el]);g(()=>{let e=es.current;null!=e&&null!=en&&y(e,en),document.activeElement===e&&(d.Z._currentlyFocusedNode=e)},[es,en]),(0,c.Z)(es,E),(0,k.Gy)(es,{onMoveShouldSetResponder:F,onMoveShouldSetResponderCapture:I,onResponderEnd:P,onResponderGrant:R,onResponderMove:Z,onResponderReject:_,onResponderRelease:A,onResponderStart:M,onResponderTerminate:K,onResponderTerminationRequest:O,onScrollShouldSetResponder:U,onScrollShouldSetResponderCapture:V,onSelectionChangeShouldSetResponder:G,onSelectionChangeShouldSetResponderCapture:Q,onStartShouldSetResponder:q,onStartShouldSetResponderCapture:X});let{direction:eu}=(0,h.PE)(),ed=L(e);ed.autoCapitalize=r,ed.autoComplete=i||l||"on",ed.autoCorrect=a?"on":"off",ed.dir=void 0!==j?j:"auto",ed.enterKeyHint=ee,ed.inputMode=o,ed.onBlur=function(e){d.Z._currentlyFocusedNode=null,H&&(e.nativeEvent.text=e.target.value,H(e))},ed.onChange=function(e){let t=e.target,n=t.value;e.nativeEvent.text=n,el(t),z&&z(e),B&&B(n)},ed.onFocus=function(e){let t=e.target;N&&(e.nativeEvent.text=t.value,N(e)),null!=t&&(d.Z._currentlyFocusedNode=t,m&&(t.value=""),eo&&(null!=v&&clearTimeout(v),v=setTimeout(()=>{null!=t&&t.select()},0)))},ed.onKeyDown=function(e){let t=e.target;e.stopPropagation();let n=e.nativeEvent,o=n.isComposing||229===n.keyCode;T&&T(e),"Enter"!==e.key||e.shiftKey||o||e.isDefaultPrevented()||((u||!W)&&J&&(e.preventDefault(),n.text=e.target.value,J(e)),(null==u?!W:u)&&null!=t&&(t.blur(),setTimeout(()=>t.blur(),0)))},ed.onSelect=function(e){if(D)try{let t=e.target,{selectionStart:n,selectionEnd:o}=t;e.nativeEvent.selection={start:n,end:o},e.nativeEvent.text=e.target.value,D(e)}catch(r){}},ed.readOnly=!w,ed.rows=W?C:void 0,ed.spellCheck=null!=er?er:a,ed.style=[{"--placeholderTextColor":Y},$.textinput$raw,$.placeholder,e.style],ed.type=W?void 0:n;let ec=(0,f.Z)(ed),ek=(0,p.q)(es,ec,ea,t);ed.ref=ek;let eh=null!=e.lang?(0,h.w1)(e.lang):null,ef=e.dir||eh,ep=(0,x.Z)(W?"textarea":"input",ed,{writingDirection:ef||eu});return ep});w.displayName="TextInput",w.State=d.Z;let $=l.Z.create({textinput$raw:{MozAppearance:"textfield",WebkitAppearance:"none",backgroundColor:"transparent",border:"0 solid black",borderRadius:0,boxSizing:"border-box",font:"14px System",margin:0,padding:0,resize:"none"},placeholder:{placeholderTextColor:"var(--placeholderTextColor)"}});var b=n(8848);(0,o.Gy)({TextInput:w});let W=(0,r.z)(w,{name:"Input",fontFamily:"$body",borderWidth:1,outlineWidth:0,color:"$color",focusable:!0,borderColor:"$borderColor",backgroundColor:"$background",placeholderTextColor:"$placeholderColor",minWidth:0,hoverStyle:{borderColor:"$borderColorHover"},focusStyle:{borderColor:"$borderColorFocus",borderWidth:2,marginHorizontal:-1},variants:{size:{"...size":b.y}},defaultVariants:{size:"$4"}},{isInput:!0}),C=(0,i.B)(W)},858:function(e,t,n){n.d(t,{Zb:function(){return h}});var o=n(2322),r=n(1560),i=n(7537),s=n(3716),l=n(3164),a=n(2784);let u=(0,r.z)(l.K,{name:"Card",backgroundColor:"$background",position:"relative",overflow:"hidden",variants:{size:{"...size":(e,{tokens:t})=>({borderRadius:t.radius[e]??e})}},defaultVariants:{size:"$4"}}),d=(0,r.z)(l.K,{name:"CardHeader",zIndex:10,backgroundColor:"transparent",marginBottom:"auto",variants:{size:{"...size":(e,{tokens:t})=>({padding:t.space[e]??e})}}}),c=(0,r.z)(d,{name:"CardFooter",zIndex:5,flexDirection:"row",marginTop:"auto",marginBottom:0}),k=(0,r.z)(l.K,{name:"CardBackground",zIndex:0,fullscreen:!0,overflow:"hidden",pointerEvents:"none",padding:0}),h=(0,i.$)(u.extractable((0,a.forwardRef)(({size:e,__scopeCard:t,children:n,...r},i)=>(0,o.jsx)(u,{ref:i,...r,children:a.Children.map(n,t=>(0,s.y)(t)&&!t.props.size?(0,a.cloneElement)(t,{size:e}):t)}))),{Header:d,Footer:c,Background:k})},2029:function(e,t,n){n.d(t,{K:function(){return a}});var o=n(2322),r=n(2784),i=n(1862),s=n(1618);let l=e=>{let{color:t="black",size:n=24,...r}=e;return(0,o.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.x1,{x1:"12",y1:"5",x2:"12",y2:"19",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.aH,{points:"19 12 12 19 5 12",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="ArrowDown";let a=(0,r.memo)((0,s.H)(l))},1255:function(e,t,n){n.d(t,{s:function(){return a}});var o=n(2322),r=n(2784),i=n(1862),s=n(1618);let l=e=>{let{color:t="black",size:n=24,...r}=e;return(0,o.jsx)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:(0,o.jsx)(i.aH,{points:"15 18 9 12 15 6",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};l.displayName="ChevronLeft";let a=(0,r.memo)((0,s.H)(l))},9941:function(e,t,n){n.d(t,{_:function(){return a}});var o=n(2322),r=n(2784),i=n(1862),s=n(1618);let l=e=>{let{color:t="black",size:n=24,...r}=e;return(0,o.jsx)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:(0,o.jsx)(i.aH,{points:"9 18 15 12 9 6",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};l.displayName="ChevronRight";let a=(0,r.memo)((0,s.H)(l))},3161:function(e,t,n){n.d(t,{E:function(){return a}});var o=n(2322),r=n(2784),i=n(1862),s=n(1618);let l=e=>{let{color:t="black",size:n=24,...r}=e;return(0,o.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.aH,{points:"16 18 22 12 16 6",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.aH,{points:"8 6 2 12 8 18",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Code";let a=(0,r.memo)((0,s.H)(l))},3557:function(e,t,n){n.d(t,{C:function(){return a}});var o=n(2322),r=n(2784),i=n(1862),s=n(1618);let l=e=>{let{color:t="black",size:n=24,...r}=e;return(0,o.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.UL,{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.y$,{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Copy";let a=(0,r.memo)((0,s.H)(l))},5920:function(e,t,n){n.d(t,{x:function(){return a}});var o=n(2322),r=n(2784),i=n(1862),s=n(1618);let l=e=>{let{color:t="black",size:n=24,...r}=e;return(0,o.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.UL,{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.UL,{x:"9",y:"9",width:"6",height:"6",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.x1,{x1:"9",y1:"2",x2:"9",y2:"4",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.x1,{x1:"15",y1:"2",x2:"15",y2:"4",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.x1,{x1:"9",y1:"21",x2:"9",y2:"22",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.x1,{x1:"15",y1:"20",x2:"15",y2:"22",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.x1,{x1:"20",y1:"9",x2:"22",y2:"9",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.x1,{x1:"20",y1:"14",x2:"22",y2:"14",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.x1,{x1:"2",y1:"9",x2:"4",y2:"9",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.x1,{x1:"2",y1:"14",x2:"4",y2:"14",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Cpu";let a=(0,r.memo)((0,s.H)(l))},2930:function(e,t,n){n.d(t,{N:function(){return a}});var o=n(2322),r=n(2784),i=n(1862),s=n(1618);let l=e=>{let{color:t="black",size:n=24,...r}=e;return(0,o.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.mg,{points:"13 19 22 12 13 5 13 19",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.mg,{points:"2 19 11 12 2 5 2 19",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="FastForward";let a=(0,r.memo)((0,s.H)(l))},726:function(e,t,n){n.d(t,{S:function(){return a}});var o=n(2322),r=n(2784),i=n(1862),s=n(1618);let l=e=>{let{color:t="black",size:n=24,...r}=e;return(0,o.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.mg,{points:"12 2 2 7 12 12 22 7 12 2",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.aH,{points:"2 17 12 22 22 17",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.aH,{points:"2 12 12 17 22 12",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Layers";let a=(0,r.memo)((0,s.H)(l))},1190:function(e,t,n){n.d(t,{H:function(){return a}});var o=n(2322),r=n(2784),i=n(1862),s=n(1618);let l=e=>{let{color:t="black",size:n=24,...r}=e;return(0,o.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.UL,{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.y$,{d:"M7 11V7a5 5 0 0 1 10 0v4",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Lock";let a=(0,r.memo)((0,s.H)(l))},3669:function(e,t,n){n.d(t,{M:function(){return a}});var o=n(2322),r=n(2784),i=n(1862),s=n(1618);let l=e=>{let{color:t="black",size:n=24,...r}=e;return(0,o.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.UL,{x:"2",y:"4",width:"20",height:"16",rx:"2",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.y$,{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Mail";let a=(0,r.memo)((0,s.H)(l))},7576:function(e,t,n){n.d(t,{$:function(){return a}});var o=n(2322),r=n(2784),i=n(1862),s=n(1618);let l=e=>{let{color:t="black",size:n=24,...r}=e;return(0,o.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.y$,{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.Cd,{cx:"12",cy:"10",r:"3",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="MapPin";let a=(0,r.memo)((0,s.H)(l))},6935:function(e,t,n){n.d(t,{d:function(){return a}});var o=n(2322),r=n(2784),i=n(1862),s=n(1618);let l=e=>{let{color:t="black",size:n=24,...r}=e;return(0,o.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.UL,{x:"6",y:"4",width:"4",height:"16",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.UL,{x:"14",y:"4",width:"4",height:"16",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Pause";let a=(0,r.memo)((0,s.H)(l))},4128:function(e,t,n){n.d(t,{s:function(){return a}});var o=n(2322),r=n(2784),i=n(1862),s=n(1618);let l=e=>{let{color:t="black",size:n=24,...r}=e;return(0,o.jsx)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:(0,o.jsx)(i.mg,{points:"5 3 19 12 5 21 5 3",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};l.displayName="Play";let a=(0,r.memo)((0,s.H)(l))},5032:function(e,t,n){n.d(t,{F:function(){return a}});var o=n(2322),r=n(2784),i=n(1862),s=n(1618);let l=e=>{let{color:t="black",size:n=24,...r}=e;return(0,o.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.mg,{points:"11 19 2 12 11 5 11 19",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.mg,{points:"22 19 13 12 22 5 22 19",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Rewind";let a=(0,r.memo)((0,s.H)(l))},2800:function(e,t,n){n.d(t,{U:function(){return a}});var o=n(2322),r=n(2784),i=n(1862),s=n(1618);let l=e=>{let{color:t="black",size:n=24,...r}=e;return(0,o.jsx)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:(0,o.jsx)(i.mg,{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};l.displayName="Star";let a=(0,r.memo)((0,s.H)(l))},8682:function(e,t,n){n.d(t,{Q:function(){return d}});var o=n(2322),r=n(3630),i=n(4128),s=n(3554),l=n(4697),a=n(8785),u=n(9145);function d(e){let[t,n]=(0,s.T)({strategy:"most-recent-wins",prop:e.position,defaultProp:0}),d=c[t],k=(0,l.z)(()=>{n(e=>(e+1)%c.length)});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.b,{animation:e.animation||"bouncy",onPress:k,size:104,boc:"$borderColor",bw:1,br:"$9",bc:"$color9",hoverStyle:{scale:1.1},pressStyle:{scale:.9},...d,children:e.children||(0,o.jsx)(r.K7,{downscale:.75})}),(0,o.jsx)(u.zx,{pos:"absolute",b:20,l:20,icon:i.s,theme:e.tint,size:"$5",circular:!0,onPress:k})]})}let c=[{x:0,y:0,scale:1,rotate:"0deg"},{x:-50,y:-50,scale:.5,rotate:"-45deg",hoverStyle:{scale:.6},pressStyle:{scale:.4}},{x:50,y:50,scale:1,rotate:"180deg",hoverStyle:{scale:1.1},pressStyle:{scale:.9}}]},1428:function(e,t,n){n.d(t,{O:function(){return s},q:function(){return l}});var o=n(2784),r=n(6030),i=n(4697);function s(e,{once:t,...n}={}){let[i,s]=(0,o.useState)([]);return r.$L&&l(e,e=>{let n=e.some(e=>null==e?void 0:e.isIntersecting);(!t||n)&&s(t=>{let n=e.map(e=>(null==e?void 0:e.isIntersecting)??!1);return t.length===n.length&&t.every((e,t)=>e===n[t])?t:n})},n),Array.isArray(e)?i:i[0]}function l(e,t,{threshold:n=0,root:r,rootMargin:s}={},l=[]){let a=(0,i.z)(t);(0,o.useEffect)(()=>{let t=Array.isArray(e)?e:[e];if(!t.length)return;let o=null,i=[],l=new IntersectionObserver(e=>{i=t.map((t,n)=>e.find(e=>e.target===t.current)??i[n]??null),null==o||o(),o=a(i)||null},{threshold:n,root:r,rootMargin:s});for(let u of t)u.current&&l.observe(u.current);return()=>{null==o||o(),l.disconnect()}},[a,e,r,s,n,...l])}}}]);