(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[135],{1520:function(e,r,s){"use strict";s.d(r,{S:function(){return a}});var t=s(2111),i=s(2784);class a extends i.Component{static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,r){console.log({error:e,errorInfo:r})}render(){return this.state.hasError?(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{children:"Oops, there is an error!"}),(0,t.jsx)("button",{type:"button",onClick:()=>this.setState({hasError:!1}),children:"Try again?"})]}):this.props.children}constructor(...e){super(...e),this.state={hasError:!1}}}},8332:function(e,r,s){"use strict";s.d(r,{Q:function(){return i}});var t=s(2784);let i=t.createContext({})},4868:function(e,r,s){"use strict";s.d(r,{O:function(){return $}});var t=s(2111),i=s(8045),a=s(2366),o=s(4513),_=s(536),l=s(6297),n=s(258),c=s(4583),d=s(2784),p=s(9406);let x=["css","react-native"],b=()=>{let e=(0,d.useContext)(m);if(!e)throw Error("Should be used within the AnimationDriverTogglerContext provider");return e},m=(0,d.createContext)(null),h=e=>{let{children:r}=e,[s,i]=(0,d.useState)("react-native"),a=()=>{i(x[(x.indexOf(s)+1)%x.length])},o=(0,d.useMemo)(()=>{if("css"===s){var e;return e={bouncy:"ease-in 200ms",lazy:"ease-in 600ms",slow:"ease-in 500ms",quick:"ease-in 100ms",tooltip:"ease-in 400ms"},{View:l.K,Text:n.x,animations:e,usePresence:_.oO,useAnimatedNumber(e){let[r,s]=(0,d.useState)(e);return{getInstance:()=>r,getValue:()=>r,setValue(e){s(e)},stop(){}}},useAnimatedNumberReaction({hostRef:e,value:r},s){(0,c.LI)(()=>{if(!e.current)return;let t=e=>{s(r.getValue())},i=e.current;return i.addEventListener("transitionstart",t),i.addEventListener("transitioncancel",t),i.addEventListener("transitionend",t),()=>{i.removeEventListener("transitionstart",t),i.removeEventListener("transitioncancel",t),i.removeEventListener("transitionend",t)}},[e,s])},useAnimatedNumberStyle:(e,r)=>r(e.getValue()),useAnimations:({props:r,presence:s,style:t,state:i,hostRef:a})=>{i.unmounted;let o=(null==s?void 0:s[0])===!1,_=null==s?void 0:s[1],l=Array.isArray(r.animation)?r.animation[0]:r.animation,n=e[l];if(!n)return null;let p=r.animateOnly?r.animateOnly.join(" "):"all";return(0,c.LI)(()=>{if(!_||!o||!a.current)return;let e=a.current,r=()=>{null==_||_()};return e.addEventListener("transitionend",r),e.addEventListener("transitioncancel",r),()=>{e.removeEventListener("transitionend",r),e.addEventListener("transitioncancel",r)}},[_,o]),t.transition=`${p} ${n}`,(0,d.useMemo)(()=>({style:t}),[JSON.stringify(t)])}}}return p.Z.animations},[s]);return(0,t.jsx)(m.Provider,{value:{driverName:s,nextDriver:a,setDriverName:i,driver:o},children:r})};var f=s(5721),u=s(4176),j=s(9430),w=s(9949),g=s(3273);let v=e=>(0,t.jsx)(g.j.Provider,{value:e.driver,children:e.children});var y=s(928),k=s(1520);function $(e){let{children:r,demoMultiple:s=!1,smaller:a,noPad:o,noScroll:_,alignItems:l,minimal:n,tinted:c,showAnimationDriverControl:d=!1}=e,p=(0,t.jsx)(C,{demoMultiple:s,children:r}),x=(0,t.jsx)(f.FA,{className:(n?"":"hero-gradient")+(_?"":" hero-scroll"),boc:"$borderColor",bw:.5,mt:"$4",mb:"$4",position:"relative",display:"flex",alignItems:l||"center",justifyContent:"center",py:70,pos:"relative",minHeight:300,y:0,borderRadius:"$4",...o&&{py:0},$gtMd:{mx:a?0:"$-4"},children:(0,t.jsxs)(h,{children:[s?(0,t.jsx)("div",{className:"  is_XStack _jc-flex-start _maw-10011 _mah-10011 _fd-row _miw-10011 _mih-0px _pos-unset _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:p}):p,d&&(0,t.jsx)("div",{className:"  is_XStack _l-1aj14e0 _t-16px _jc-7aqssh _fd-row _miw-0px _mih-0px _pos-absolute _bxs-border-box _fb-auto _dsp-175izsd _fs-0 _ai-center  _dsp-_xxs_none _l-_gtMd_lrpiu9",children:(0,t.jsx)(z,{})})]})});return c?(0,t.jsx)(i.eL,{children:x}):x}let S=(0,u.z)(f.FA,{elevation:"$1",borderTopLeftRadius:"_btlr-lmimby",borderTopRightRadius:"_btrr-lmimby",borderBottomRightRadius:"_bbrr-lmimby",borderBottomLeftRadius:"_bblr-lmimby",minHeight:"_mih-220px",backgroundColor:"_bg-180kg62",minWidth:"_miw-180px",overflowX:"_ox-hidden",overflowY:"_oy-hidden",justifyContent:"_jc-center",alignItems:"_ai-center",transform:"_transform-19qlv72"}),N={"react-native":"React Native",css:"css"},z=()=>{let e=b();return(0,t.jsx)(j.w,{placement:"top",label:"Animations: ".concat(N[e.driverName]),children:(0,t.jsxs)(f.sL,{zIndex:1e8,space:"$2",ai:"center",children:[(0,t.jsx)(a.B,{size:14,opacity:.6}),(0,t.jsx)(w.rs,{size:"$1",theme:"Switch",checked:"react-native"===e.driverName,onCheckedChange:r=>e.setDriverName(r?"react-native":"css"),children:(0,t.jsx)(w.rs.Thumb,{animation:"quick"})}),(0,t.jsx)(o.P,{size:14,opacity:.6})]})})},C=e=>{let{children:r,demoMultiple:s}=e,{driver:i,driverName:a}=b();return(0,t.jsx)(v,{driver:i,children:(0,t.jsx)(k.S,{children:s?(0,t.jsxs)(f.sL,{space:"$3",px:"$8",children:[(0,t.jsx)(y.Q,{name:"blue",children:(0,t.jsx)(S,{children:r})}),(0,t.jsx)(y.Q,{name:"red",children:(0,t.jsx)(S,{children:r})}),(0,t.jsx)(y.Q,{name:"pink",children:(0,t.jsx)(S,{children:r})}),(0,t.jsx)(y.Q,{name:"orange",children:(0,t.jsx)(S,{children:r})}),(0,t.jsx)(y.Q,{name:"green",children:(0,t.jsx)(S,{children:r})}),(0,t.jsx)(y.Q,{name:"yellow",children:(0,t.jsx)(S,{children:r})})]}):r})},a)};s(276)},216:function(e,r,s){"use strict";s.d(r,{w:function(){return eh}});var t=s(2111),i=s(8045),a=s(3231),o=s(4244),_=s(2784),l=s(8620),n=s(4176),c=s(3017),d=s(6695),p=s(5721),x=s(7376),b=s(6473),m=s(928),h=s(9375),f=s(9430),u=s(9145),j=s(4959),w=s(9705),g=s(6167);let v=()=>(0,t.jsx)(g.i,{large:!0,data:[{name:"Tamagui",value:108},{name:"React Native",value:106},{name:"NativeBase",value:247}]});var y=s(7727),k=s(5469),$=s(146),S=s(2506);s(6722);var N=s(7596),z=s(1388),C=s(2016),L=s(4321),F=s(7036),q=s(1617),T=s(1520),R=s(4223),P=s(37);let A=(0,_.forwardRef)((e,r)=>{let{className:s,children:i,id:a,showLineNumbers:o=!1,isHero:n=!1,isCollapsible:c=!1,isHighlightingLines:d}=e,[x,b]=(0,_.useState)(n||c),[m,h]=(0,_.useState)(void 0),j=(0,_.useRef)(null),{hasCopied:w,onCopy:g,value:v}=(0,q.V)(m);return(0,_.useEffect)(()=>{try{if(j.current){let e=j.current.querySelector("code");if(e){let r=e.innerText.replace(/\n{3,}/g,"\n");h(r)}}}catch(e){}},[j]),(0,t.jsx)("div",{ref:r,className:(0,P.concatClassName)("  is_YStack _fd-column _miw-0px _mih-0px _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch  _mb-lrpiu9 _pos-relative  "+(n?"  _mr-lrpkij _ml-lrpkij _pr-lrpiu9 _pl-lrpiu9":" ")+" "+(n?"  _mr-_gtMd_lrpl4x _ml-_gtMd_lrpl4x":" ")),children:(0,t.jsxs)(T.S,{children:[c&&(0,t.jsxs)(p.sL,{space:"$2",position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"flex-end",top:-70,r:"$6",$gtMd:{r:"$7"},children:[(0,t.jsx)(u.zx,{accessibilityLabel:"Show or hide code",size:"$2",onPress:()=>b(e=>!e),children:x?"Show code":"Hide code"}),(0,t.jsx)(f.w,{label:"Toggle tint on/off",children:(0,t.jsx)(u.zx,{accessibilityLabel:"Toggle tint on/off",size:"$2",onPress:F.EG,icon:L.f})})]}),(!x||!c)&&(0,t.jsxs)("div",{className:"  is_YStack _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:[(0,t.jsx)(R.S,{ref:j,"data-invert-line-highlight":d,"data-line-numbers":o,className:s,p:0,mb:0,id:a,children:(0,t.jsx)(l.Z,{style:{width:"100%"},contentContainerStyle:{minWidth:"100%"},horizontal:!0,showsHorizontalScrollIndicator:!1,children:(0,t.jsx)(k.E,{p:"$4",backgroundColor:"transparent",f:1,className:s,children:i})})}),(0,t.jsx)(f.w,{label:w?"Copied":"Copy to clipboard",children:(0,t.jsx)(u.zx,{"aria-label":"Copy code to clipboard",position:"absolute",size:"$2",top:"$3",right:"$3",display:"inline-flex",icon:w?z.f:C.T,onPress:g,$xs:{display:"none"}})})]})]})})});s(7332);var B=s(9122),E=s(5595);let D=e=>{let{items:r,size:s,...i}=e;return(0,t.jsx)(p.FA,{mt:"$4",mb:"$6",...i,space:"$4",children:r.map((e,r)=>(0,t.jsxs)("li",{className:"  is_XStack _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:[(0,t.jsx)("div",{className:"  is_YStack _mt--5px _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:(0,t.jsx)(E.f,{})}),(0,t.jsx)(d.Paragraph,{size:s,color:"$gray11",children:e})]},r))})};s(1736);var H=s(4868),W=s(3572),O=s(7010),Y=s(8332),I=s(4795);let M="  is_YStack _ml-1aj148u _o-0d0t51a _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",X="  is_SizableText font_body _ff-4yewjq _mt-0px _mr-0px _mb-0px _ml-0px _ww-break-word _bxs-border-box _dsp-inline _fow-3uqccu _ls-3w5fb2 _fos-3slpxi _lh-3or5rz ";s(4152);var Q=s(6197);let V=()=>(0,t.jsxs)("div",{className:"  is_YStack _maw-5011 _mr-auto _ml-auto _mt-lrpj15 _mb-lrpj15 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:[(0,t.jsx)(Q.g,{}),(0,t.jsx)("div",{className:"  is_YStack _fg-1 _fs-1 _fb-auto _bbw-1px _bbc-zx92k3 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _dsp-flex _ai-stretch _bbs-solid "})]});s(512);let G=(0,n.z)(d.Paragraph,{tag:"li",size:"$5",paddingBottom:"_pb-1aj14ak",display:"_dsp-list-item"});s(3084);var Z=s(1659);function K(e){return _.Children.toArray(e).map(e=>{var r;return(null==e?void 0:null===(r=e.props)||void 0===r?void 0:r.children)?e.props.children:e})}let J=e=>{let{children:r,theme:s="yellow",disableUnwrap:i,...a}=e;return(0,t.jsx)(U,{theme:s,...a,children:(0,t.jsx)(m.Q,{name:"alt1",children:(0,t.jsx)("p",{className:"  is_Paragraph font_body _mb--3px _mt--3px _pt-1aj14ca _pb-1aj14ca _col-b5vn3b _ff-4yewjq _ussel-auto _mr-0px _ml-0px _ww-break-word _bxs-border-box _dsp-inline _fow-3uqcek _ls-3w5fcs _fos-3slpz8 _lh-3or5tp  paragraph-parent",children:i?r:K(r)})})})},U=(0,n.z)(p.sL,{className:"no-opacity-fade",space:"$3",position:"_pos-relative",marginTop:"_mt-lrpiu9",marginBottom:"_mb-lrpiu9",borderTopLeftRadius:"_btlr-lmimby",borderTopRightRadius:"_btrr-lmimby",borderBottomRightRadius:"_bbrr-lmimby",borderBottomLeftRadius:"_bblr-lmimby",backgroundColor:"_bg-180kg62",paddingTop:"_pt-1aj14e0",paddingBottom:"_pb-1aj14e0",paddingRight:"_pr-lrpiu9",paddingLeft:"_pl-lrpiu9",borderTopColor:"_btc-zx92k3",borderRightColor:"_brc-zx92k3",borderBottomColor:"_bbc-zx92k3",borderLeftColor:"_blc-zx92k3",borderTopWidth:"_btw-1px",borderRightWidth:"_brw-1px",borderBottomWidth:"_bbw-1px",borderLeftWidth:"_blw-1px",borderBottomStyle:"_bbs-solid",borderTopStyle:"_bts-solid",borderLeftStyle:"_bls-solid",borderRightStyle:"_brs-solid"});s(1454);let ee=(0,n.z)(p.FA,{name:"OffsetBox",variants:{size:{hero:{$gtSm:{mx:"$-2"},$gtMd:{mx:"$-4"},$gtLg:{mx:"$-6"}}}}}),er=e=>(0,t.jsx)(p.FA,{"data-preview":!0,margin:0,overflow:"visible",borderWidth:1,borderColor:"$borderColor",borderTopLeftRadius:"$3",borderTopRightRadius:"$3",mb:"$-3",padding:"$3",pb:"$4",position:"relative",ai:"flex-start",...e}),es="  is_Separator _mt-1aj14ca _mb-1aj14ca _mr-lrpiu9 _ml-lrpiu9 _h-initial _mah-initial _w-0px _maw-0px _bbw-0px _brw-1px _bbs-solid _brs-solid _als-stretch _fg-1 _fs-1 _fb-auto _btw-0px _blw-0px _btc-zx92k3 _brc-zx92k3 _bbc-zx92k3 _blc-zx92k3 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _dsp-flex _ai-stretch _bts-solid _bls-solid _transform-d0tcx1iw7 ";s(3408);var et=s(5912),ei=s(5217),ea=s(5284),eo=s(7383),e_=s(9373);let el=(0,n.z)(p.FA,{tag:"ul",marginRight:"_mr-1aj14ca",marginLeft:"_ml-lrpiu9",marginTop:"_mt-1aj14ak",marginBottom:"_mb-1aj14ak"});s(1943);let en="  is_Paragraph font_body _col-b5vn3b _ff-4yewjq _ussel-auto _mt-0px _mr-0px _mb-0px _ml-0px _ww-break-word _bxs-border-box _dsp-inline _fow-3uqcek _ls-3w5fcs _fos-3slpz8 _lh-3or5tp ",ec=(0,n.z)(c.K,{bordered:!0,marginTop:"_mt-lrpiu9",marginBottom:"_mb-lrpiu9",overflowX:"_ox-hidden",overflowY:"_oy-hidden",borderTopLeftRadius:"_btlr-lmimby",borderTopRightRadius:"_btrr-lmimby",borderBottomRightRadius:"_bbrr-lmimby",borderBottomLeftRadius:"_bblr-lmimby"}),ed=e=>{let{heading:r,children:s,...i}=e;return(0,t.jsxs)(ec,{className:"no-scrollbar",overflow:"scroll",...i,children:[!!r&&(0,t.jsx)(ex,{size:"$4",bc:"$color1",fow:"500",color:"$color9",children:r}),(0,t.jsx)("div",{className:"  is_XStack _fd-row _miw-10011 _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:s})]})},ep=e=>{let{hero:r,line:s,scrollable:i,className:a,children:o,id:_,showLineNumbers:l,collapsible:n,...c}=e;return a?(0,t.jsx)("div",{className:"  is_YStack _mt-1aj14e0 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:(0,t.jsx)(A,{isHighlightingLines:void 0!==s,className:a,isHero:void 0!==r,isCollapsible:void 0!==r||void 0!==n,isScrollable:void 0!==i,showLineNumbers:void 0!==l,...c,children:o})}):(0,t.jsx)(k.w,{children:K(o)})},ex=(0,n.z)(d.Paragraph,{size:"$5",ellipse:!0,variants:{head:{true:{bc:"$color1"}},highlight:{true:{bc:"$yellow2"}}},paddingRight:"_pr-1aj14e0",paddingLeft:"_pl-1aj14e0",paddingTop:"_pt-1aj14ca",paddingBottom:"_pb-1aj14ca",height:"_h-qnlncu",textAlign:"_ta-center",justifyContent:"_jc-center",flexGrow:"_fg-1",flexShrink:"_fs-1",flexBasis:"_fb-auto",position:"_pos-relative",alignItems:"_ai-center",flexDirection:"_fd-row",borderBottomColor:"_bbc-zx92k3",borderBottomWidth:"_bbw-1px",borderBottomStyle:"_bbs-solid"}),eb=(0,n.z)(c.K,{flexDirection:"_fd-column",marginRight:"_mr--1px",flexGrow:"_fg-1",flexShrink:"_fs-1",flexBasis:"_fb-auto",borderRightColor:"_brc-zx92k3",borderRightWidth:"_brw-1px",borderRightStyle:"_brs-solid"}),em=(0,n.z)(p.FA,{fullscreen:!0,backgroundColor:"_bg-1rd2qj1"}),eh={SocialLinksRow:()=>(0,t.jsx)("div",{className:"  is_YStack _mr-lrpkij _ml-lrpkij _mt-lrpixp _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:(0,t.jsx)(et.B,{})}),Wide:e=>(0,t.jsx)("div",{className:"  is_YStack _mr-lrpl5s _ml-lrpl5s _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch  _mr-_sm_lrpkf3 _ml-_sm_lrpkf3",children:e.children}),Table:ed,TableCell:ex,TableHighlight:em,TableCol:eb,Spacer:x.LZ,ExampleAnimations:W.q,ScrollView:l.Z,Features:D,Text:b.Text,Paragraph:d.Paragraph,OffsetBox:ee,YStack:p.FA,XStack:p.sL,Theme:m.Q,BenchmarkChart:g.i,Separator:h.Z,Code:k.E,HeroContainer:H.O,BenchmarkChartNative:v,BenchmarkChartWeb:y.F,TooltipSimple:f.w,...N,Highlights:function(e){let{features:r,disableLinks:s}=e,i=_.useContext(Y.Q);return(0,t.jsxs)("div",{className:"  is_YStack _fg-1 _fs-1 _fb-auto _mt-1aj14ca _mb-1aj14ca _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _dsp-flex _ai-stretch  _fd-_gtSm_row",children:[(0,t.jsxs)("div",{className:"  is_YStack _fg-1 _fs-1 _fb-auto _fd-column _miw-0px _mih-142px _pos-relative _bxs-border-box _dsp-flex _ai-stretch  _mr-_gtSm_lrpiwu _fg-_gtSm_1 _fs-_gtSm_1 _fb-_gtSm_auto",children:[(0,t.jsx)("h2",{className:"  is_H2 font_body _mb-1aj14ca _col-b5vn3b _ff-4yewjq _mt-0px _mr-0px _ml-0px _ussel-auto _ww-break-word _bxs-border-box _dsp-inline _fow-800 _ls-3w5fei _fos-3slq0y _lh-3or5vf ",children:"Features"}),(0,t.jsx)(p.FA,{tag:"ul",p:0,m:0,space:!0,children:(0,t.jsx)(D,{space:"$2",items:r})})]}),!s&&(0,t.jsxs)(p.FA,{space:"$3",tag:"nav","aria-labelledby":"site-component-info-header",children:[(0,t.jsx)("div",{className:"  is_Stack _pe-none _o-1e-8 _ox-hidden _oy-hidden _zi--10000 _mt--1px _mr--1px _mb--1px _ml--1px _h-1px _w-1px _pos-absolute _fd-column _miw-0px _mih-0px _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:(0,t.jsx)("h2",{id:"site-component-info-heading",children:"Component Reference Links"})}),(0,t.jsx)("div",{className:"  is_Separator _bbw-1px _mah-0px _h-0px _fg-1 _fs-1 _fb-auto _btw-0px _brw-0px _blw-0px _btc-zx92k3 _brc-zx92k3 _bbc-zx92k3 _blc-zx92k3 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _dsp-flex _ai-stretch _bbs-solid _bts-solid _bls-solid _brs-solid _transform-d0tn24na2 "}),(0,t.jsxs)(p.FA,{mb:"$4",space:"$1",children:[(0,t.jsx)(I.r,{href:"https://github.com/tamagui/tamagui/tree/master/packages/".concat(i.package?"".concat(i.package,"/src/").concat(i.component,".tsx"):"tamagui/src/views/".concat(i.component,".tsx")),target:"_blank",children:(0,t.jsxs)(p.sL,{ai:"center",space:"$1",children:[(0,t.jsx)("span",{className:X,children:"View source"}),(0,t.jsx)("div",{className:M,children:(0,t.jsx)(O.d,{size:12,color:"var(--colorHover)"})})]})}),(0,t.jsx)(I.r,{href:"https://www.npmjs.com/package/tamagui",target:"_blank",children:(0,t.jsxs)(p.sL,{ai:"center",space:"$1",children:[(0,t.jsx)("span",{className:X,children:"View on npm"}),(0,t.jsx)("div",{className:M,children:(0,t.jsx)(O.d,{size:12,color:"var(--colorHover)"})})]})}),(0,t.jsx)(I.r,{href:"https://github.com/tamagui/tamagui/issues/new/choose",target:"_blank",children:(0,t.jsxs)(p.sL,{ai:"center",space:"$1",children:[(0,t.jsx)("span",{className:X,children:"Report an issue"}),(0,t.jsx)("div",{className:M,children:(0,t.jsx)(O.d,{size:12,color:"var(--colorHover)"})})]})}),i.aria&&(0,t.jsx)("div",{className:"  is_YStack _mb-1aj14ca _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:(0,t.jsx)(I.r,{theme:"blue",href:i.aria,target:"_blank",children:(0,t.jsxs)("div",{className:"  is_XStack _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:[(0,t.jsx)(m.Q,{name:"alt1",children:(0,t.jsx)("p",{className:"  is_Paragraph font_body _col-b5vn3b _ff-4yewjq _ussel-auto _mt-0px _mr-0px _mb-0px _ml-0px _ww-break-word _bxs-border-box _dsp-inline _fow-3uqccu _ls-3w5fb2 _fos-3slpxi _lh-3or5rz ",children:"ARIA design pattern"})}),(0,t.jsx)("div",{className:"  is_YStack _ml-1aj14ak _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:(0,t.jsx)(m.Q,{name:"alt2",children:(0,t.jsx)("span",{className:"  is_Text font_System _mt-0px _mr-0px _mb-0px _ml-0px _ww-break-word _bxs-border-box _ff-System _dsp-inline ",children:(0,t.jsx)(O.d,{size:12,color:"var(--color)"})})})})]})})})]})]})]})},ThemeTint:i.eL,PropsTable:function(e){let{title:r="Props",data:s,"aria-label":i,"aria-labelledby":a}=e;return(0,t.jsxs)("div",{"aria-label":i||a?i:"Component Props","aria-labelledby":a,className:"  is_YStack _fg-1 _fs-1 _fb-auto _btc-zx92k3 _brc-zx92k3 _bbc-zx92k3 _blc-zx92k3 _btw-1px _brw-1px _bbw-1px _blw-1px _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _dsp-flex _ai-stretch _bbs-solid _bts-solid _bls-solid _brs-solid  _mr-lrpkij _ml-lrpkij _ox-hidden _oy-hidden _btlr-lmimby _btrr-lmimby _bbrr-lmimby _bblr-lmimby _mt-lrpiu9 _mb-lrpiu9  _mr-_sm_0px _ml-_sm_0px",children:[(0,t.jsx)("div",{className:"  is_XStack _bg-zx92k3 _pr-lrpiu9 _pl-lrpiu9 _pt-1aj14ca _pb-1aj14ca _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-center ",children:(0,t.jsx)("h3",{className:"  is_H3 font_heading _col-b5vn3b _ff-4yewjq _mt-0px _mr-0px _mb-0px _ml-0px _ussel-auto _ww-break-word _bxs-border-box _dsp-inline _tt-3tb9fh _fow-3uqcdp _ls-3w5fbx _fos-3slpyd _lh-3or5su ",children:r})}),s.map((e,r)=>{let{name:s,type:i,required:a,default:o,description:_}=e;return(0,t.jsxs)(S.HC,{p:0,children:[(0,t.jsxs)("div",{className:"  is_YStack _w-10011 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:[(0,t.jsxs)("div",{className:"  is_XStack _pr-lrpiu9 _pl-lrpiu9 _pt-1aj14e0 _pb-1aj14e0 _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch  _fd-_sm_column",children:[(0,t.jsx)("div",{className:"  is_YStack _o-0d0t51a _zi--1 _bg-180kg62 _pos-absolute _t-0px _l-0px _r-0px _b-0px _fd-column _miw-0px _mih-0px _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch "}),(0,t.jsx)(p.sL,{miw:"30%",ai:"center",space:!0,children:(0,t.jsxs)("h4",{className:"  is_H4 font_mono _w-200px _col-b5vn3b _ff-4yewjq _mt-0px _mr-0px _mb-0px _ml-0px _ussel-auto _ww-break-word _bxs-border-box _dsp-inline _tt-none _fow-800 _ls-3w5fcs _fos-3slpz8 _lh-3or5tp ",children:[s,a?(0,t.jsxs)("span",{className:"  is_Paragraph font_body _o-0d0t51a _col-b5vn3b _ff-4yewjq _ussel-auto _mt-0px _mr-0px _mb-0px _ml-0px _ww-break-word _bxs-border-box _dsp-inline _fos-inherit _fow-3uqcek _ls-3w5fcs _lh-3or5tp ",children:[" ",(0,t.jsx)("span",{className:"  is_Paragraph font_body _col-b5vn3b _ff-4yewjq _ussel-auto _mt-0px _mr-0px _mb-0px _ml-0px _ww-break-word _bxs-border-box _dsp-inline _fow-300 _ls-3w5fcs _fos-3slpz8 _lh-3or5tp ",children:"(required)"})]}):null]})}),(0,t.jsx)("div",{className:es}),(0,t.jsxs)(p.sL,{f:2,miw:"30%",ai:"center",separator:(0,t.jsx)("div",{className:es}),$xs:{flexDirection:"column",ai:"flex-start"},children:[(0,t.jsx)("p",{className:"  is_Paragraph font_mono _mr-auto _maw-10011 _ox-hidden _oy-hidden _textOverflow-ellipsis _whiteSpace-nowrap _o-0d0t81a _col-b5vn3b _ff-4yewjq _ussel-auto _mt-0px _mb-0px _ml-0px _ww-break-word _bxs-border-box _dsp-inline _fow-3uqcdp _ls-3w5fbx _fos-3slpyd _lh-3or5su ",children:i}),(0,t.jsx)("div",{className:"  is_XStack _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-center ",children:Boolean(o)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{className:"  is_Paragraph font_body _o-0d0t51a _col-b5vn3b _ff-4yewjq _ussel-auto _mt-0px _mr-0px _mb-0px _ml-0px _ww-break-word _bxs-border-box _dsp-inline _fow-3uqccu _ls-3w5fb2 _fos-3slpxi _lh-3or5rz ",children:"Default:\xa0"}),(0,t.jsx)(k.E,{my:"$-1",bc:"$backgroundPress",children:o})]}):null})]})]}),!!_&&(0,t.jsx)("div",{className:"  is_YStack _pr-lrpiu9 _pl-lrpiu9 _pt-1aj14ca _pb-1aj14ca _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:(0,t.jsx)("p",{className:"  is_Paragraph font_body _o-0d0t651a _col-b5vn3b _ff-4yewjq _ussel-auto _mt-0px _mr-0px _mb-0px _ml-0px _ww-break-word _bxs-border-box _dsp-inline _fow-3uqccu _ls-3w5fb2 _fos-3slpxi _lh-3or5rz ",children:_})})]}),(0,t.jsx)("div",{className:"  is_Separator _mt-2px _mb-2px _bbw-1px _mah-0px _h-0px _fg-1 _fs-1 _fb-auto _btw-0px _brw-0px _blw-0px _btc-zx92k3 _brc-zx92k3 _bbc-zx92k3 _blc-zx92k3 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _dsp-flex _ai-stretch _bbs-solid _bts-solid _bls-solid _brs-solid _transform-d0tn24na2 "})]},"".concat(s,"-").concat(r))})]})},DataTable:function(e){let{title:r="",rows:s,"aria-label":i,"aria-labelledby":a}=e;return(0,t.jsx)($.p,{horizontal:!0,children:(0,t.jsxs)("div",{"aria-label":i||a?i:"Component Props","aria-labelledby":a,className:"  is_YStack _fg-1 _fs-1 _fb-auto _btc-zx92k3 _brc-zx92k3 _bbc-zx92k3 _blc-zx92k3 _btw-1px _brw-1px _bbw-1px _blw-1px _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _dsp-flex _ai-stretch _bbs-solid _bts-solid _bls-solid _brs-solid  _mr-lrpkij _ml-lrpkij _ox-hidden _oy-hidden _btlr-lmimby _btrr-lmimby _bbrr-lmimby _bblr-lmimby _mt-lrpiu9 _mb-lrpiu9  _mr-_sm_0px _ml-_sm_0px",children:[!!r&&(0,t.jsx)("div",{className:"  is_XStack _bg-zx92k3 _pr-lrpiu9 _pl-lrpiu9 _pt-1aj14ca _pb-1aj14ca _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-center ",children:(0,t.jsx)("h3",{className:"  is_H3 font_heading _col-b5vn3b _ff-4yewjq _mt-0px _mr-0px _mb-0px _ml-0px _ussel-auto _ww-break-word _bxs-border-box _dsp-inline _tt-3tb9fh _fow-3uqcdp _ls-3w5fbx _fos-3slpyd _lh-3or5su ",children:r})}),s.map((e,r)=>(0,t.jsx)(S.HC,{p:0,children:(0,t.jsx)("div",{className:"  is_XStack _pr-lrpiu9 _pl-lrpiu9 _pt-1aj14e0 _pb-1aj14e0 _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-center  _fd-_sm_column",children:e.map(e=>(0,t.jsx)("h4",{className:"  is_H4 font_mono _mt-0px _mr-0px _mb-0px _ml-0px _ussel-auto _ww-break-word _bxs-border-box  _w-200px _col-b5vn3b _ff-4yewjq _WebkitLineClamp-3 _WebkitBoxOrient-vertical _dsp-1mnrhil _ox-hidden _oy-hidden _ta-center _jc-center _ai-center _maw-100px _tt-none _fow-3uqcek _ls-3w5fcs _fos-3slpz8 _lh-3or5tp ",children:e},e))})},r))]})})},Description:ea.D,UL:el,LI:G,TamaguiExamplesCode:e_.F,TLDR:e=>(0,t.jsx)(p.FA,{$gtMd:{mx:"$-4"},mt:"$5",mb:"$3",px:"$6",py:"$2",br:"$6",bw:1,o:.8,boc:"$borderColor",...e}),DeployToVercel:()=>(0,t.jsx)("a",{href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftamagui%2Fstarters&root-directory=next-expo-solito/next&envDescription=Set%20this%20environment%20variable%20to%201%20for%20Turborepo%20to%20cache%20your%20node_modules.&envLink=https%3A%2F%2Ftamagui.dev&project-name=tamagui-app&repo-name=tamagui-app&demo-title=Tamagui%20App%20%E2%9A%A1%EF%B8%8F&demo-description=Tamagui%20React%20Native%20%2B%20Next.js%20starter&demo-url=https%3A%2F%2Ftamagui.dev%2Fstarter&demo-image=https%3A%2F%2Ftamagui.dev%2Fblog%2Fintroducing-tamagui%2Fhero.png",target:"_blank",rel:"noreferrer",children:(0,t.jsx)("img",{alt:"Deploy with Vercel",style:{height:32,width:90},src:"https://vercel.com/button"})}),Button:u.zx,Beta:()=>(0,t.jsx)(u.zx,{accessibilityLabel:"Beta blog post",pe:"none",size:"$2",theme:"pink_alt2",pos:"absolute",t:-15,r:-75,rotate:"5deg",children:"Beta"}),IntroParagraph:e=>{let{children:r,large:s,disableUnwrapText:i,...a}=e;return(0,t.jsx)(d.Paragraph,{tag:"p",size:s?"$9":"$7",className:"intro-paragraph"+(s?" large":""),my:"$3",fow:s?"200":"300",...a,children:i?r:K(r)})},Grid:e=>(0,t.jsx)(p.sL,{flexWrap:"wrap",jc:"space-between",...e}),Card:eo.S,Note:e=>(0,t.jsx)(p.FA,{tag:"aside",mt:"$5",mb:"$5",borderRadius:"$3",...e}),Aside:e=>(0,t.jsx)(d.Paragraph,{color:"$color11",tag:"span",als:"center",fow:"600",fontSize:"$2",...e}),Notice:J,h1:e=>(0,t.jsx)(d.H1,{width:"max-content",pos:"relative",mb:"$2",...e}),h2:e=>{let{children:r,...s}=e;return(0,t.jsx)(d.H2,{pos:"relative",width:"fit-content",pt:"$8",mt:"$-4",mb:"$2","data-heading":!0,...s,children:r})},h3:e=>{let{children:r,id:s,...i}=e;return(0,t.jsxs)(ef,{pt:"$8",mt:"$-4",mb:"$1",id:s,children:[(0,t.jsx)(d.H3,{pos:"relative",width:"fit-content",nativeID:s,"data-heading":!0,...i,children:r}),eu(r)]})},h4:e=>(0,t.jsx)(d.H4,{pos:"relative",width:"fit-content",mt:"$4",mb:"$3",...e}),h5:e=>(0,t.jsx)(d.H5,{mt:"$4",...e}),p:e=>(0,t.jsx)(d.Paragraph,{className:"docs-paragraph",display:"block",fontSize:15,lineHeight:24,my:"$2.5",...e}),a:e=>{let{href:r="",children:s,...i}=e;return(0,t.jsx)(o.p,{className:"link",href:r,children:(0,t.jsxs)(d.Paragraph,{tag:"span",fontSize:"inherit",display:"inline",cursor:"pointer",...i,children:[s,r.startsWith("http")?(0,t.jsxs)(t.Fragment,{children:["\xa0",(0,t.jsx)("span",{className:"  is_Text font_System _ml--1px _mt-0px _mr-0px _mb-0px _ww-break-word _bxs-border-box _ff-System _dsp-175izsd _fos-inherit _transform-19qn564 ",children:(0,t.jsx)(B.O,{})})]}):null]})})},hr:V,ul:e=>{let{children:r}=e;return(0,t.jsx)(el,{my:"$4",children:_.Children.toArray(r).map(e=>"string"==typeof e?null:e)})},ol:e=>(0,t.jsx)(p.FA,{...e,tag:"ol",mb:"$3"}),li:e=>(0,t.jsx)(G,{my:"$1",children:e.children}),strong:e=>(0,t.jsx)(d.Paragraph,{tag:"strong",fontSize:"inherit",...e,fontWeight:"700"}),img:e=>{let{...r}=e;return(0,t.jsx)("span",{className:"  is_YStack _mt-lrpixp _mb-lrpixp _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:(0,t.jsx)(p.FA,{tag:"img",...r,maxWidth:"100%"})})},pre:e=>{let{children:r}=e;return(0,t.jsx)(t.Fragment,{children:r})},code:ep,Image:e=>{let{children:r,size:s,overlap:i,linked:a,..._}=e,l=(0,t.jsxs)(ee,{size:s,tag:"figure",f:1,mx:0,mb:"$3",ai:"center",jc:"center",ov:"hidden",...i&&{mt:"$-6"},children:[(0,t.jsx)(j.E,{maxWidth:"100%",..._}),!!r&&(0,t.jsx)("figcaption",{className:"  is_Text font_System _mt-1aj14ca _col-vhj0rs _mr-0px _mb-0px _ml-0px _ww-break-word _bxs-border-box _ff-System _dsp-inline _lh-23px ",children:r})]});return a?(0,t.jsx)(o.p,{target:"_blank",href:_.src,children:l}):l},Video:e=>{let{small:r,large:s,src:i,children:a="",muted:o=!0,autoPlay:_=!0,controls:l,size:n,...c}=e;return(0,t.jsxs)("figure",{className:"  is_YStack _mt-lrpixp _mb-lrpixp _mr-0px _ml-0px _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:[(0,t.jsx)(ee,{size:n,children:(0,t.jsx)("video",{src:i,autoPlay:_,playsInline:!0,muted:o,controls:l,loop:!0,style:{width:"100%",display:"block"}})}),(0,t.jsx)("figcaption",{className:"  is_Text font_System _col-vhj0rs _mt-1aj14ca _mr-0px _mb-0px _ml-0px _ww-break-word _bxs-border-box _ff-System _dsp-inline _lh-23px ",children:a})]})},blockquote:e=>{let{children:r,...s}=e;return(0,t.jsx)(p.FA,{my:"$4",px:"$6",ml:"$3",borderLeftWidth:1,borderColor:"$borderColor",jc:"center",...s,children:(0,t.jsx)("p",{className:"  is_Paragraph font_silkscreen _o-0d0t651a _whiteSpace-revert _col-b5vn3b _ff-4yewjq _ussel-auto _mt-0px _mr-0px _mb-0px _ml-0px _ww-break-word _bxs-border-box _dsp-inline _ls-010 _fow-300 _lh-3or5y0 _fos-3slq2o ",children:K(r)})})},Preview:e=>(0,t.jsx)(er,{...e,mt:"$5"}),MediaPlayerDemo:e=>{let{theme:r,...s}=e;return(0,t.jsx)(m.Q,{name:r,children:(0,t.jsx)(Z.S,{...s})})},GroupDisabledDemo:()=>(0,t.jsxs)(w.E4,{als:"center",disabled:!0,children:[(0,t.jsx)(w.E4.Item,{children:(0,t.jsx)(u.zx,{children:"First"})}),(0,t.jsx)(w.E4.Item,{children:(0,t.jsx)(u.zx,{children:"Second"})}),(0,t.jsx)(w.E4.Item,{children:(0,t.jsx)(u.zx,{children:"Third"})})]}),DemoButton:()=>(0,t.jsx)(u.zx,{children:"Hello world"}),SponsorButton:ei.R,SponsorNotice:()=>(0,t.jsx)(U,{theme:"red",children:(0,t.jsxs)(p.FA,{maw:"100%",space:!0,children:[(0,t.jsx)("h4",{className:"  is_H4 font_silkscreen _col-29nc2w _ff-4yewjq _mt-0px _mr-0px _mb-0px _ml-0px _ussel-auto _ww-break-word _bxs-border-box _dsp-inline _fow-3uqch5 _ls-3w5ffd _fos-3slq1t _lh-3or5wa ",children:"\uD83D\uDC4B Hey! Listen!"}),(0,t.jsxs)(p.FA,{ov:"hidden",f:1,o:.85,space:!0,children:[(0,t.jsxs)("p",{className:en,children:["Tamagui is fully OSS, self-funded and built by"," ",(0,t.jsx)("a",{href:"https://twitter.com/natebirdman",target:"_blank",children:"me"}),"."]}),(0,t.jsxs)("p",{className:en,children:["My goal is to support Tamagui development with sponsorships that get early access to ",(0,t.jsx)("a",{href:"#sponsors",children:"some really interesting"})," new features."]}),(0,t.jsx)(ei.R,{})]})]})})},ef=e=>{let{id:r,children:s,...i}=e;return(0,t.jsxs)(p.sL,{tag:"a",href:"#".concat(r),id:r,"data-id":r,display:"inline-flex",ai:"center",space:!0,...i,children:[s,(0,t.jsx)("span",{className:"  is_YStack _o-0d0t31a _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:(0,t.jsx)(a.r,{size:12,color:"var(--color)","aria-hidden":!0})})]})},eu=e=>_.Children.map(e,e=>"string"==typeof e||e.type===ep?null:e).flat();s(1372)},5284:function(e,r,s){"use strict";s.d(r,{D:function(){return _},n:function(){return o}});var t=s(2111),i=s(2784),a=s(6695);let o=e=>{if("string"!=typeof e)return e;let r=e.split(" ");return 1===r.length?e:r.map((e,s)=>s===r.length-1?(0,t.jsxs)(i.Fragment,{children:["\xa0",e]},s):(0,t.jsxs)(i.Fragment,{children:[" ",e]},s))},_=e=>{let{children:r,...s}=e;if(!r)return null;let i="string"==typeof r?r:r.props.children;return(0,t.jsx)(a.H3,{pos:"relative",width:"max-content",size:"$8",color:"$gray9",fontFamily:"$body",fontWeight:"300",tag:"p",mb:"$2",mt:"$0",maxWidth:"80%",$sm:{maxWidth:"100%",size:"$6"},...s,children:o(i)})}},7383:function(e,r,s){"use strict";s.d(r,{S:function(){return o}});var t=s(2111),i=s(2391),a=s(928);function o(e){let{children:r,title:s,subTitle:o,..._}=e;return(0,t.jsxs)(i.Z,{p:"$4",mx:"$1",my:"$2",mb:"$2",space:"$2",$gtSm:{width:"50%",maxWidth:"calc(50% - var(--space-8))"},$sm:{width:"auto",maxWidth:"auto",f:1},children:[(0,t.jsx)("span",{className:"  is_H3 font_silkscreen _cur-inherit _col-b5vn3b _ff-4yewjq _mt-0px _mr-0px _mb-0px _ml-0px _ussel-auto _ww-break-word _bxs-border-box _dsp-inline _ls-0px _lh-3or5vf _fow-3uqch5 _fos-3slq1t ",children:s}),!!o&&(0,t.jsx)("div",{className:"  is_XStack _o-0d0t51a _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:o}),(0,t.jsx)(a.Q,{name:"alt2",children:(0,t.jsx)("span",{className:"  is_Paragraph font_body _o-0d0t71a _cur-inherit _col-b5vn3b _ff-4yewjq _ussel-auto _mt-0px _mr-0px _mb-0px _ml-0px _ww-break-word _bxs-border-box _dsp-inline _fow-3uqcek _ls-3w5fcs _fos-3slpz8 _lh-3or5tp ",children:r})})]})}s(7812)},9373:function(e,r,s){"use strict";s.d(r,{F:function(){return n},d:function(){return l}});var t=s(2111),i=s(2784),a=s(4868),o=s(7078);let _="  is_Spacer _pe-none _w-lrpiv4 _h-lrpiv4 _miw-lrpiv4 _mih-lrpiv4 _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",l=(0,i.createContext)(null);function n(){try{let e=(0,i.useContext)(l);return(0,t.jsxs)(a.O,{noScroll:!0,noPad:!0,children:[(0,t.jsx)("span",{className:_}),(0,t.jsx)(o.D,{onlyDemo:!0,examples:null==e?void 0:e.compilationExamples}),(0,t.jsx)("span",{className:_})]})}catch(e){return null}}s(3963)},7036:function(e,r,s){"use strict";s.d(r,{EG:function(){return a},aC:function(){return o}});let t=!0,i=e=>{t=e,o.forEach(r=>r(e))},a=()=>{i(!t)},o=new Set},6722:function(){},7332:function(){},1736:function(){},512:function(){},276:function(){},4152:function(){},3084:function(){},1372:function(){},1454:function(){},3408:function(){},7812:function(){},3963:function(){},1943:function(){},3098:function(e,r,s){e.exports=s(7575)},7575:function(e,r,s){"use strict";r.getMDXComponent=function(e,r){let s=function(e,r){let s={React:t,ReactDOM:a,_jsx_runtime:i,...r},o=Function(...Object.keys(s),e);return o(...Object.values(s))}(e,r);return s.default};var t=_(s(2784)),i=_(s(2111)),a=_(s(8316));function o(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,s=new WeakMap;return(o=function(e){return e?s:r})(e)}function _(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var s=o(r);if(s&&s.has(e))return s.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var _=i?Object.getOwnPropertyDescriptor(e,a):null;_&&(_.get||_.set)?Object.defineProperty(t,a,_):t[a]=e[a]}return t.default=e,s&&s.set(e,t),t}}}]);