(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{118:function(e,t,c){},119:function(e,t,c){},159:function(e,t,c){"use strict";c.r(t);var n,s=c(196),i=c(197),a=c(200),l=c(0),o=c.n(l),r=c(13),j=c.n(r),b=c(15),d=c(95),x=c(12),O=(c(116),c(117),c(118),c(119),c(8)),h=c(7),u=c(59),m=c.n(u),p={touchMove:!1,dots:!1,arrows:!1},g=[{title:{first:"\ub0b4\ub9d8\ub300\ub85c",second:"\ud61c\ud0dd\uace0\ub974\uae30!"},description:["\uc815\ud574\uc9c4 \ud2c0\uc5d0 \ub9de\ucdb0\uc11c","\ud61c\ud0dd\ubc1b\uae30\ub294 \uc2eb\uc5b4!"],highLight:"\ub0b4\uac00 \uad00\uc2ec\uc788\ub294 \uce74\ud14c\uace0\ub9ac \ub300\ub85c \ud61c\ud0dd\uc744!",imgPath:"/images/rending_1.png"},{title:{first:"\ub098\ub294 \uc18c\ube44\ud558\uba74\uc11c",second:"\uc0ac\ud68c\uae4c\uc9c0 \uc0dd\uac01\ud55c\ub2e4!"},description:["\ud658\uacbd, \uc720\uae30\uacac, \uc18c\uc0c1\uacf5\uc778","\uc800\uc18c\ub4dd\uce35, \ub3d9\ubb3c\ubcf4\ud638..."],highLight:"\uc791\uc740 \uc18c\ube44 \ud558\ub098\ud558\ub098 \ubaa8\uc5ec \uc0ac\ud68c\ub97c \uac1c\uc120!",imgPath:"/images/rending_2.png"},{title:{first:"\ub0b4\uac00 \uc774 \uace8\ubaa9 \ud61c\ud0dd\uc655!",second:"\uce5c\uad6c\ub4e4\uacfc \ud61c\ud0dd\ub300\uacb0"},description:["\ub204\uac00 \ub204\uac00","\ub354 \ub9ce\uc774 \ud61c\ud0dd\uc744 \ubaa8\uc558\ub098?"],highLight:"\uc5ec\uae30 \ubaa8\uc5ec\ub77c! \uce5c\uad6c\ub4e4\ub07c\ub9ac \ud61c\ud0dd \ub300\uacb0!",imgPath:"/images/rending_3.png"},{title:{first:"\ud61c\ud0dd\uc744 \ubaa8\uc544\ubaa8\uc544",second:"\uae30\ubd80\uae4c\uc9c0?!"},description:["\ud61c\ud0dd\ubc1b\uc740 \uae08\uc561\uc744 \uc778\ucd9c\ud558\uac70\ub098","\uc6d0\ud558\ub294 \uacf3\uc5d0 \uae30\ubd80\ud560 \uc218 \uc788\uc9c0!"],highLight:"\uc6b0\ub9ac\uc740\ud589\uc5d0\uc11c '\ubaa8\uc778 \uae30\ubd80\uc561\uc758 2\ubc30\ub97c' \uae30\ubd80!",imgPath:"/images/rending_4.png"}],_=c(53),f=c(184),v=c(199),N=c(186),C=c(189),k=c(99),y=c(188),S=c(2),w=Object(f.a)((function(){return{buttonOverride:{position:"absolute !important"}}})),B=function(e){var t=e.data,c=Object(_.a)(e,["data"]),n=w();return Object(S.jsxs)(v.a,{style:{position:"relative"},width:"100%",height:"100%",children:[Object(S.jsx)("div",{className:"container mg_t10",style:{overflowX:"visible"},children:Object(S.jsx)(N.a,{className:"back_div ".concat(c.isFirst&&"hide"),onClick:function(){c.onMoveButtonClick(-1)},children:Object(S.jsx)(y.a,{})})}),Object(S.jsxs)("div",{children:[Object(S.jsx)("p",{className:"rd_posi_1 txt_30",children:t.title.first}),Object(S.jsx)("p",{className:"rd_posi_2 txt_30 txt_b",children:t.title.second}),Object(S.jsxs)("p",{className:"rd_posi_3 txt_18",children:[t.description[0],Object(S.jsx)("br",{}),t.description[1]]}),Object(S.jsx)("div",{className:"txt_back_highlight",style:{width:"276px"}}),Object(S.jsx)("p",{className:"rd_posi_4 txt_18 txt_b",children:t.highLight})]}),Object(S.jsx)("div",{className:"pd_b30 rd_posi_img",style:{left:"5%"},children:Object(S.jsx)("p",{className:"txt_center",children:Object(S.jsx)("img",{className:"img_rending",src:t.imgPath})})}),Object(S.jsx)(C.a,{className:"btn_bottom bg_primaryblue ".concat(n.buttonOverride),onClick:function(){c.onMoveButtonClick(1)},children:Object(S.jsx)(k.a,{className:"p_btn_bottom txt_wh txt_b",children:"\ub2e4\uc74c"})})]})},M=c(93),L=Object(M.recoilPersist)({key:"recoil-persist",storage:localStorage}).persistAtom,R=(Object(b.atom)({key:"IsLoginState",default:!1,effects_UNSTABLE:[L]}),Object(b.atom)({key:"IsSplashSkip",default:!1,effects_UNSTABLE:[L]})),D=Object(b.atom)({key:"SignUpProfileState",default:{cellNumber:"",nickName:"",realName:""}}),P=Object(b.atom)({key:"SignUpAccNumState",default:""}),A=Object(b.atom)({key:"SignUpCategoryState",default:[]}),F=Object(f.a)((function(){return{imgContainer:{width:"100px"},button:{display:"block",width:"100%"},bodyReplace:{zIndex:-1,position:"fixed",width:"100%",height:"100%"}}})),I=function(e){var t=F(),c=Object(x.g)();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"bg_primaryblue ".concat(t.bodyReplace)}),Object(S.jsxs)("div",{className:"container",children:[Object(S.jsxs)("div",{className:"div_rd_txt pd_t60",children:[Object(S.jsx)("p",{className:"txt_center",children:Object(S.jsx)("img",{style:{width:"100px"},className:"pd_t130 ".concat(t.imgContainer),src:"images/Logo.png"})}),Object(S.jsx)("p",{className:"txt_24 txt_wh txt_center",children:"\ud658\uc601\ud569\ub2c8\ub2e4!"})]}),Object(S.jsxs)("div",{className:"login_btn",children:[Object(S.jsx)(C.a,{onClick:function(){c.push("/signup")},className:t.button,style:{backgroundColor:"white",height:"55px"},children:Object(S.jsx)("p",{className:"txt_primaryBlue txt_center txt_b",children:"\ud61c\ud0dd\ud1b5 \uccab\ub2ec \ubb34\ub8cc \uccb4\ud5d8\ud558\uae30"})}),Object(S.jsx)(C.a,{className:"mg_t10 ".concat(t.button),style:{border:"1px solid white",height:"55px"},children:Object(S.jsx)("p",{className:"txt_wh txt_center",children:"\uae30\uc874 \uc0ac\uc6a9\uc790 \ub85c\uadf8\uc778"})})]})]})]})},T=function(){var e=Object(b.useRecoilState)(R),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(l.useRef)(null);return Object(S.jsx)(S.Fragment,{children:c?Object(S.jsx)(I,{}):Object(S.jsx)(m.a,Object(O.a)(Object(O.a)({},p),{},{ref:s,children:g.map((function(e,t){return Object(S.jsx)(B,{data:e,isFirst:0===t,onMoveButtonClick:function(e){return function(e,t){if(e+t>=g.length)n(!0);else{if(e+t===-1)return;s.current&&s.current.slickGoTo(e+t)}}(t,e)}},e.title.first)}))}))})};!function(e){e[e.PROFILE=0]="PROFILE",e[e.ACCOUNT=1]="ACCOUNT",e[e.ADD_CATEGORY=2]="ADD_CATEGORY",e[e.BILL_INFO=3]="BILL_INFO",e[e.PASSWORD=4]="PASSWORD"}(n||(n={}));var E=[{title:"\uc774\ub984\uc744 \uc54c\ub824\uc8fc\uc138\uc694.",description:"\uc774\ub984"},{title:"\ub2c9\ub124\uc784\uc744 \uc815\ud574\uc8fc\uc138\uc694.",description:"\ub2c9\ub124\uc784"},{title:"\ud734\ub300\ud3f0\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694.",description:"\ud734\ub300\ud3f0\ubc88\ud638"}],U=c(203),z=c(198),G=function(e){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"toptitle_div bg_wh",children:Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(N.a,{className:"back_div",disabled:e.isLast,onClick:function(){return e.isLast||e.onMoveButtonClick(-1)},children:e.isLast||Object(S.jsx)(y.a,{})}),Object(S.jsx)("p",{className:"txt_24 txt_b mg_t10",children:"\ud61c\ud0dd\ud1b5 \ub9cc\ub4e4\uae30"})]})}),Object(S.jsx)("div",{className:"glow_body",children:Object(S.jsx)("div",{className:"container mg_t30",style:{height:"100%"},children:e.children})}),Object(S.jsx)(C.a,{disableRipple:e.buttonDisable,disabled:e.buttonDisable,className:"btn_bottom ".concat(e.buttonDisable?"bg_gray3":"bg_primaryblue"),onClick:function(){e.onCustomizeNextClick?e.onCustomizeNextClick():e.onMoveButtonClick(1)},children:Object(S.jsx)("p",{className:"p_btn_bottom txt_wh txt_b",children:e.isLast?"\uc644\ub8cc! \ud61c\ud0dd \ubc1b\uc73c\ub7ec \uac00\uae30":"\ub2e4\uc74c"})})]})},q=function(e){var t=e.onClose,c=e.open,n=function(){t()};return Object(S.jsxs)(U.a,{onClose:n,open:c,children:[Object(S.jsx)(v.a,{mt:"15px",mx:"15px",children:Object(S.jsx)(k.a,{children:"\uacc4\uc88c \uc778\uc99d\uc774 \ud655\uc778 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."})}),Object(S.jsx)(v.a,{children:Object(S.jsx)(C.a,{onClick:n,className:"p_btn_bottom txt_b",children:"\ud655\uc778"})})]})},J=function(e){var t=Object(b.useRecoilState)(P),c=Object(h.a)(t,2),n=c[0],s=c[1],i=Object(l.useState)(!1),a=Object(h.a)(i,2),o=a[0],r=a[1],j=Object(l.useState)(""),d=Object(h.a)(j,2),x=d[0],O=d[1],u=Object(l.useState)(!1),m=Object(h.a)(u,2),p=m[0],g=m[1],_=Object(l.useState)(!1),f=Object(h.a)(_,2),v=f[0],N=f[1];return Object(S.jsxs)("div",{className:"bg_gray5",children:[Object(S.jsx)(q,{open:p,onClose:function(){g(!1)}}),Object(S.jsxs)(G,{buttonDisable:!v,onMoveButtonClick:e.onMoveButtonClick,children:[Object(S.jsx)("p",{className:"txt_20 txt_b",children:"\ubcf8\uc778\uc758 \uc6b0\ub9ac\uc740\ud589 \uacc4\uc88c\ubc88\ud638\ub97c \uc54c\ub824\uc8fc\uc138\uc694."}),Object(S.jsx)("div",{className:"box_div mg_t20 bg_wh",children:Object(S.jsx)("table",{style:{width:"100%"},children:Object(S.jsx)("tbody",{children:Object(S.jsxs)("tr",{children:[Object(S.jsxs)("td",{children:[Object(S.jsx)("div",{className:"pd_t16 mg_l16",children:Object(S.jsx)(z.a,{disabled:o||v,value:n,defaultValue:n,onChange:function(e){s(e.target.value)},label:"\uacc4\uc88c\ubc88\ud638",variant:"outlined"})}),Object(S.jsx)("div",{className:"pd_t4 mg_l16 pd_b16"})]}),Object(S.jsx)("td",{style:{textAlign:"right"},children:Object(S.jsx)("div",{className:"",children:Object(S.jsx)(C.a,{disabled:""===n||v,className:"btn_blueBorder",style:{marginRight:"16px"},onClick:function(){r(!o)},children:o?"\ucde8\uc18c":"1\uc6d0 \uc778\uc99d"})})})]})})})}),Object(S.jsxs)("p",{className:"mg_t30 txt_14 txt_center",children:["\uacc4\uc88c \ud655\uc778\uc744 \uc704\ud574 \uacc4\uc88c\ubc88\ud638\ub85c 1\uc6d0\uc744 \ubcf4\ub0bc\uac8c\uc694",Object(S.jsx)("br",{}),"\uc785\uae08\uba85\uc744 \ud655\uc778\ud574 \uc8fc\uc138\uc694"]}),Object(S.jsx)("div",{className:"box_div mg_t30 bg_wh",children:Object(S.jsx)("table",{style:{width:"100%"},children:Object(S.jsx)("tbody",{children:Object(S.jsxs)("tr",{children:[Object(S.jsxs)("td",{children:[Object(S.jsx)("div",{className:"pd_t16 mg_l16",children:Object(S.jsx)(z.a,{disabled:!o||v,onChange:function(e){O(e.target.value)},placeholder:"\ud61c\ud0dd\ud1b5 +",label:"\uc785\uae08\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",variant:"outlined"})}),Object(S.jsx)("div",{className:"pd_t4 mg_l16 pd_b16"})]}),Object(S.jsx)("td",{style:{textAlign:"right"},children:Object(S.jsx)("div",{className:"",children:o&&Object(S.jsx)(C.a,{disabled:""===x||v,className:"btn_blueBorder",style:{marginRight:"16px"},onClick:function(){N(!0),g(!0)},children:"\uc785\ub825"})})})]})})})})]})]})},V=c(190),W=c(191),Y=function(e){return Object(S.jsx)("div",{className:"bg_gray5",children:Object(S.jsxs)(G,{buttonDisable:!1,onMoveButtonClick:e.onMoveButtonClick,children:[Object(S.jsx)("p",{className:"txt_20",children:"\ud61c\ud0dd \uad6c\ub3c5\uc744 \uc704\ud55c"}),Object(S.jsx)("p",{className:"txt_20 txt_b",children:"\uacb0\uc81c \uc815\ubcf4\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694."}),Object(S.jsx)(v.a,{mt:"15px",children:Object(S.jsx)("p",{style:{color:"#62c3eb"},children:"\uccab\ub2ec \ubb34\ub8cc \uc774\uc6a9 \ud6c4 \ud574\uc9c0\ud558\uc2e4 \uc218 \uc788\uc5b4\uc694."})}),Object(S.jsx)(v.a,{mt:"25px",children:Object(S.jsx)(V.a,{children:Object(S.jsxs)(W.a,{children:[Object(S.jsxs)(v.a,{display:"flex",children:[Object(S.jsxs)(v.a,{flexGrow:"1",children:[Object(S.jsx)(k.a,{variant:"body2",color:"textSecondary",children:"\uc774\ub984"}),Object(S.jsx)(k.a,{variant:"body1",children:"\uc774\uc9c4\uc601"})]}),Object(S.jsx)(C.a,{disabled:!0,className:"btn_blueBorder",children:"\uc2a4\uce94\ud558\uae30"})]}),Object(S.jsxs)(v.a,{mt:"10px",children:[Object(S.jsx)(k.a,{variant:"body2",color:"textSecondary",children:"\uce74\ub4dc\ubc88\ud638"}),Object(S.jsx)(k.a,{variant:"body1",children:"0123-4567-0123-4567"})]}),Object(S.jsxs)(v.a,{mt:"10px",children:[Object(S.jsx)(k.a,{variant:"body2",color:"textSecondary",children:"\uce74\ub4dc \uc720\ud6a8\uae30\uac04"}),Object(S.jsx)(k.a,{variant:"body1",children:"01/2345"})]}),Object(S.jsxs)(v.a,{mt:"10px",children:[Object(S.jsx)(k.a,{variant:"body2",color:"textSecondary",children:"CVC"}),Object(S.jsx)(k.a,{variant:"body1",children:"012"})]})]})})})]})})},X=c(52),H=c(192),K=c(202),Q=[{id:101,name:"\uc800\ud50c\ub77c\uc2a4\ud2f1"},{id:102,name:"\uc800\ud0c4\uc18c"},{id:103,name:"\ub3d9\ubb3c\uc2e4\ud5d8\ubc18\ub300"},{id:104,name:"\uacb0\uc2dd\uc544\ub3d9"},{id:105,name:"\ub178\uc778\ubcf4\ud638"},{id:106,name:"\uc7a5\uc560\uc778 \ubcf5\uc9c0"},{id:107,name:"\uc7a5\uc560\uc778\uc774 \ub9cc\ub4e0 \uc81c\ud488"},{id:108,name:"\uad6c\ud638\ubb3c\ud488"}],Z=function(e){var t=e.onClose,c=e.open,n=function(){t()};return Object(S.jsxs)(U.a,{onClose:n,open:c,children:[Object(S.jsx)(v.a,{mt:"15px",mx:"15px",children:Object(S.jsx)(k.a,{children:"\ub2c8\uac00\uc6d0\ud558\ub294\uac70\uc2a8 \ube44\uac74\uc5b4\uca4c\uace0\uc800\uca4c\uace0"})}),Object(S.jsx)(v.a,{children:Object(S.jsx)(C.a,{onClick:n,className:"p_btn_bottom txt_b",children:"\ud655\uc778"})})]})},$=function(e){var t=e.onClose,c=e.open,n=function(){t()};return Object(S.jsxs)(U.a,{onClose:n,open:c,children:[Object(S.jsx)(v.a,{mt:"15px",mx:"15px",children:Object(S.jsx)(k.a,{children:"\ub531 2\uac00\uc9c0\ub9cc \uc120\ud0dd\ud574\uc8fc\uc138\uc694"})}),Object(S.jsx)(v.a,{children:Object(S.jsx)(C.a,{onClick:n,className:"p_btn_bottom txt_b",children:"\ud655\uc778"})})]})},ee=function(e){var t=Object(b.useRecoilState)(A),c=Object(h.a)(t,2),n=c[0],s=c[1],i=Object(l.useState)(!1),a=Object(h.a)(i,2),o=a[0],r=a[1],j=Object(l.useState)(!1),d=Object(h.a)(j,2),x=d[0],O=d[1],u=2!==n.length;return Object(S.jsxs)("div",{className:"bg_gray5",children:[Object(S.jsx)(Z,{open:o,onClose:function(){r(!1)}}),Object(S.jsx)($,{open:x,onClose:function(){O(!1)}}),Object(S.jsxs)(G,{buttonDisable:u,onMoveButtonClick:e.onMoveButtonClick,children:[Object(S.jsx)("p",{className:"txt_20",children:"\uad00\uc2ec\uc788\ub294 \uce74\ud14c\uace0\ub9ac 2\uac00\uc9c0\ub97c \uace8\ub77c"}),Object(S.jsx)("p",{className:"txt_20 txt_b",children:"\uc9d1\uc911 \ud61c\ud0dd \ubc1b\uc73c\uc138\uc694."}),Q.map((function(e){return Object(S.jsx)("div",{className:"box_div mg_t20 bg_wh height_80",children:Object(S.jsx)(H.a,{style:{display:"flex"},className:"checkbox__label pd_t26 pd_l20",control:Object(S.jsx)(K.a,{color:"primary",checked:n.indexOf(e)>=0,onChange:function(t){!function(e,t){t.currentTarget.checked?n.length<2?s([].concat(Object(X.a)(n),[e])):O(!0):s(n.filter((function(t){return e!==t})))}(e,t)}}),label:e.name})},e.id)}))]})]})},te=function(e){return Object(S.jsx)("div",{className:"bg_gray5",children:Object(S.jsx)(G,{isLast:!0,buttonDisable:!1,onMoveButtonClick:e.onMoveButtonClick,children:Object(S.jsxs)(v.a,{display:"flex",flexDirection:"column",height:"100%",children:[Object(S.jsx)(v.a,{mt:"25px"}),Object(S.jsx)("p",{className:"txt_20 txt_b",children:"\ucd95\ud558\ud569\ub2c8\ub2e4!"}),Object(S.jsx)("p",{className:"txt_20",children:"\ud61c\ud0dd\ud1b5\uc774 \ub9cc\ub4e4\uc5b4\uc84c\uc5b4\uc694!"}),Object(S.jsx)("p",{className:"txt_20",children:"\uc774\uc81c \ucc29\ud55c \uc18c\ube44\ud558\uace0"}),Object(S.jsx)("p",{className:"txt_20",children:"\ud61c\ud0dd\ub3c4 \ubc1b\uc73c\uc138\uc694."}),Object(S.jsx)(v.a,{flexGrow:"1"}),Object(S.jsx)("p",{className:"txt_center",children:Object(S.jsx)("img",{className:"img_rending",src:"/images/rending_1.png"})}),Object(S.jsx)(v.a,{mb:"45px"})]})})})},ce=c(193),ne=c(194),se=c(195),ie=function(e){var t=e.onClose,c=e.open,n=function(){t()};return Object(S.jsxs)(U.a,{onClose:n,open:c,children:[Object(S.jsx)(v.a,{mt:"15px",mx:"15px",children:Object(S.jsx)(k.a,{children:"\uc9c0\ubb38\ub4f1\ub85d \u3131\u3131\u3131\u3131"})}),Object(S.jsx)(v.a,{children:Object(S.jsx)(C.a,{onClick:n,className:"p_btn_bottom txt_b",children:"\ud655\uc778"})})]})},ae=function(e){var t=Object(l.useState)(""),c=Object(h.a)(t,2),n=c[0],s=c[1],i=Object(l.useState)(!1),a=Object(h.a)(i,2),o=a[0],r=a[1],j=Object(l.useState)(!1),b=Object(h.a)(j,2),d=b[0],x=b[1];return Object(S.jsxs)("div",{className:"bg_gray5",children:[Object(S.jsx)(ie,{open:d,onClose:function(){x(!1),e.onMoveButtonClick(1)}}),Object(S.jsxs)(G,{buttonDisable:""===n,onMoveButtonClick:e.onMoveButtonClick,onCustomizeNextClick:function(){x(!0)},children:[Object(S.jsx)("p",{className:"txt_20 txt_b",children:"\uc571 \uc0ac\uc6a9\uc744 \uc704\ud55c"}),Object(S.jsx)("p",{className:"txt_20",children:"\ube44\ubc00\ubc88\ud638\ub97c \uc124\uc815\ud574 \uc8fc\uc138\uc694."}),Object(S.jsx)(v.a,{mt:"25px",children:Object(S.jsx)(z.a,{style:{width:"80%",marginLeft:"10%"},label:"Password",type:o?"text":"password",autoComplete:"current-password",onChange:function(e){return s(e.target.value)},InputProps:{endAdornment:Object(S.jsx)(ce.a,{position:"end",children:Object(S.jsx)(N.a,{"aria-label":"toggle password visibility",onClick:function(){return r(!o)},onMouseDown:function(){return r(!o)},children:o?Object(S.jsx)(ne.a,{style:{fontSize:"1.5rem"}}):Object(S.jsx)(se.a,{style:{fontSize:"1.5rem"}})})})}})})]})]})},le=c(94),oe=c.n(le).a.create({baseURL:"http://localhost:8000"});oe.interceptors.request.use((function(e){return console.log("Reqeust Interceptor Called"),e}),(function(e){return console.log(e),Promise.reject(e)})),oe.interceptors.response.use((function(e){return console.log("Response Interceptor Called"),e}),(function(e){return console.log(e),Promise.reject(e)}));var re=oe,je=function(e){var t=Object(b.useRecoilState)(D),c=Object(h.a)(t,2),n=c[0],s=c[1],i=function(e,t){switch(t){case 0:return e.realName;case 1:return e.nickName;case 2:return e.cellNumber}return""}(n,e.index),a=""===i,o=Object(l.useState)(!1),r=Object(h.a)(o,2),j=r[0],d=r[1];return Object(S.jsx)("div",{className:"bg_gray5",children:Object(S.jsxs)(G,{buttonDisable:a||j,onMoveButtonClick:e.onMoveButtonClick,children:[Object(S.jsx)("p",{className:"txt_20 txt_b",children:e.data.title}),Object(S.jsxs)("div",{className:"box_div mg_t20 bg_wh",children:[Object(S.jsx)("div",{className:"pd_t16 mg_l16"}),Object(S.jsx)("div",{className:"pd_t4 mg_l16 pd_b16",children:Object(S.jsx)(z.a,{error:j,helperText:j&&"\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \ub2c9\ub124\uc784\uc785\ub2c8\ub2e4.",value:i,onChange:function(t){!function(e,t){switch(e){case 0:s(Object(O.a)(Object(O.a)({},n),{},{realName:t}));break;case 1:console.log("Onchange Called"),s(Object(O.a)(Object(O.a)({},n),{},{nickName:t})),re.get("/api/members/nicknameCheck/".concat(t)).then((function(e){var t=e.data.data;t!==j&&d(t)}));break;case 2:s(Object(O.a)(Object(O.a)({},n),{},{cellNumber:t}))}}(e.index,t.target.value)},label:e.data.description,variant:"outlined"})})]})]})})},be=function(){var e=Object(x.g)(),t=Object(b.useResetRecoilState)(D),c=Object(l.useRef)(null),n=[];E.forEach((function(e,t){n.push(Object(S.jsx)(je,{index:t,data:e,onMoveButtonClick:function(e){return s(t,e)}},t))})),n.push(Object(S.jsx)(J,{onMoveButtonClick:function(e){s(3,e)}},3)),n.push(Object(S.jsx)(ee,{onMoveButtonClick:function(e){s(4,e)}},4)),n.push(Object(S.jsx)(Y,{onMoveButtonClick:function(e){s(5,e)}},5)),n.push(Object(S.jsx)(ae,{onMoveButtonClick:function(e){s(6,e)}},6)),n.push(Object(S.jsx)(te,{onMoveButtonClick:function(e){s(7,e)}},7));var s=function(n,s){if(n+s<0)return t(),void e.replace("/mainpage");n+s>7?console.log("last page"):(console.log("goto slide ".concat(n+s)),c.current&&c.current.slickGoTo(n+s))};return console.log(n),Object(S.jsx)(m.a,Object(O.a)(Object(O.a)({},p),{},{ref:c,children:n}))},de=function(){return Object(S.jsx)(d.a,{children:Object(S.jsxs)(x.d,{children:[Object(S.jsx)(x.b,{exact:!0,path:"/mainpage",component:T}),Object(S.jsx)(x.b,{exact:!0,path:"/signup",component:be}),Object(S.jsx)(x.a,{from:"*",to:"/mainpage"})]})})},xe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,206)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))},Oe=Object(s.a)();j.a.render(Object(S.jsx)(o.a.StrictMode,{children:Object(S.jsx)(b.RecoilRoot,{children:Object(S.jsx)(i.a,{theme:Oe,children:Object(S.jsx)(a.b,{injectFirst:!0,children:Object(S.jsx)(de,{})})})})}),document.getElementById("root")),xe()}},[[159,1,2]]]);
//# sourceMappingURL=main.5a23d183.chunk.js.map