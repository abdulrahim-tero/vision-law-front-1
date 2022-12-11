"use strict";(self.webpackChunkfinalproject=self.webpackChunkfinalproject||[]).push([[769],{73769:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var i=t(70885),o=t(47313),l=t(62111),a=t(12499),s=t(27998),r=t(55316),c=t(88170),d=t(85554),u=t(58467),_=t(936),v=t(68355),f=(t(59108),t(46417));var m=function(){(0,l.Z)();var n=(0,o.useState)(0),e=(0,i.Z)(n,2),t=(e[0],e[1],(0,o.useState)([])),m=(0,i.Z)(t,2),N=m[0],S=m[1],h=(0,o.useState)("work"),E=(0,i.Z)(h,2),p=E[0],A=E[1],g=(0,o.useState)([]),C=(0,i.Z)(g,2),b=C[0],x=C[1],I=(0,o.useState)(!1),K=(0,i.Z)(I,2),j=(K[0],K[1],(0,o.useState)("2022-07-30")),D=(0,i.Z)(j,2),P=D[0],k=D[1],y=(0,o.useState)("2022-03-17"),w=(0,i.Z)(y,2),T=w[0],M=w[1],Z=(0,_.Z)().formatMessage,R=(0,d.I0)(),W=(0,u.s0)();(0,o.useEffect)((function(){R((0,v.zt)(T)).then((function(n){return null!==n&&void 0!==n&&n.payload?S(n.payload):null})),R((0,v.v0)(P)).then((function(n){return null!==n&&void 0!==n&&n.payload?x(n.payload):null}))}),[]);var O={columns:[{field:"id",label:"#",sort:"asc",width:50},{field:"casNumber",label:Z({id:"stageNum"}),sort:"asc"},{field:"stage",label:Z({id:"stage"}),sort:"asc"},{field:"clientName",label:Z({id:"clientName"}),sort:"asc"},{field:"court",label:Z({id:"court"}),sort:"asc"},{field:"infoNum",label:Z({id:"warningNum"}),sort:"asc"},{field:"workType",label:Z({id:"workType"}),sort:"asc"},{field:"reasons",label:Z({id:"wrkReason"}),sort:"asc"},{field:"ants",label:Z({id:"ants"}),sort:"asc"},{field:"clients",label:Z({id:"agents"}),sort:"asc"}],rows:(null===N||void 0===N?void 0:N.length)>0?null===N||void 0===N?void 0:N.map((function(n,e){return{id:(0,f.jsx)("span",{onClick:function(){return W("/file-management/".concat(n.CAS_ID_PK,"/work/").concat(null===n||void 0===n?void 0:n.WRK_ID_PK))},children:e+=1}),casNumber:(0,f.jsx)("span",{onClick:function(){return W("/file-management/".concat(n.CAS_ID_PK,"/work/").concat(null===n||void 0===n?void 0:n.WRK_ID_PK))},children:n.CAS_NUMBER}),stage:(0,f.jsx)("span",{onClick:function(){return W("/file-management/".concat(n.CAS_ID_PK,"/work/").concat(null===n||void 0===n?void 0:n.WRK_ID_PK))},children:"ltr"==document.body.getAttribute("dir")&&n.STG_KIND_NAME_EN?n.STG_KIND_NAME_EN:n.STG_KIND_NAME}),clientName:(0,f.jsx)("span",{onClick:function(){return W("/file-management/".concat(n.CAS_ID_PK,"/work/").concat(null===n||void 0===n?void 0:n.WRK_ID_PK))},children:"ltr"==document.body.getAttribute("dir")&&n.CLI_NAME_ENGLISh?n.CLI_NAME_ENGLISh:n.CLI_NAME}),court:(0,f.jsx)("span",{onClick:function(){return W("/file-management/".concat(n.CAS_ID_PK,"/work/").concat(null===n||void 0===n?void 0:n.WRK_ID_PK))},children:"ltr"==document.body.getAttribute("dir")&&n.COU_NAME_EN?n.COU_NAME_EN:n.COU_NAME}),infoNum:(0,f.jsx)("span",{onClick:function(){return W("/file-management/".concat(n.CAS_ID_PK,"/work/").concat(null===n||void 0===n?void 0:n.WRK_ID_PK))},children:n.INR_NUMBER}),workType:(0,f.jsx)("span",{onClick:function(){return W("/file-management/".concat(n.CAS_ID_PK,"/work/").concat(null===n||void 0===n?void 0:n.WRK_ID_PK))},children:"ltr"==document.body.getAttribute("dir")&&n.WRK_TYPE_NAME_EN?n.WRK_TYPE_NAME_EN:n.WRK_TYPE_NAME}),reasons:(0,f.jsx)("span",{onClick:function(){return W("/file-management/".concat(n.CAS_ID_PK,"/work/").concat(null===n||void 0===n?void 0:n.WRK_ID_PK))},children:"ltr"==document.body.getAttribute("dir")&&n.WRK_REASON_NAME_EN?n.WRK_REASON_NAME_EN:n.WRK_REASON_NAME}),ants:(0,f.jsx)("span",{onClick:function(){return W("/file-management/".concat(n.CAS_ID_PK,"/work/").concat(null===n||void 0===n?void 0:n.WRK_ID_PK))},children:"ltr"==document.body.getAttribute("dir")&&n.ANTS_EN?n.ANTS_EN:n.ANTS}),clients:(0,f.jsx)("span",{onClick:function(){return W("/file-management/".concat(n.CAS_ID_PK,"/work/").concat(null===n||void 0===n?void 0:n.WRK_ID_PK))},children:"ltr"==document.body.getAttribute("dir")&&n.AGENTS_EN?n.AGENTS_EN:n.AGENTS})}})):[]},G={columns:[{field:"id",label:"#",sort:"asc",width:50},{field:"casNumber",label:Z({id:"stageNum"}),sort:"asc"},{field:"sessionType",label:Z({id:"theSession"}),sort:"asc"},{field:"sessDate",label:Z({id:"sessionDate"}),sort:"asc"},{field:"court",label:Z({id:"court"}),sort:"asc"},{field:"clientName",label:Z({id:"clientName"}),sort:"asc"},{field:"ants",label:Z({id:"ants"}),sort:"asc"},{field:"clients",label:Z({id:"agents"}),sort:"asc"}],rows:(null===b||void 0===b?void 0:b.length)>0?null===b||void 0===b?void 0:b.map((function(n,e){var t;return{id:e+=1,casNumber:(0,f.jsx)("span",{onClick:function(){return W("/file-management/".concat(n.CAS_ID_PK,"/session/").concat(null===n||void 0===n?void 0:n.SES_ID_PK))},children:null===n||void 0===n?void 0:n.CAS_NUMBER}),sessionType:(0,f.jsx)("span",{onClick:function(){return W("/file-management/".concat(n.CAS_ID_PK,"/session/").concat(null===n||void 0===n?void 0:n.SES_ID_PK))},children:"ltr"==document.body.getAttribute("dir")&&null!==n&&void 0!==n&&n.CAS_TYPE_NAME_EN?null===n||void 0===n?void 0:n.CAS_TYPE_NAME_EN:null===n||void 0===n?void 0:n.CAS_TYPE_NAME}),sessDate:(0,f.jsx)("span",{onClick:function(){return W("/file-management/".concat(n.CAS_ID_PK,"/session/").concat(null===n||void 0===n?void 0:n.SES_ID_PK))},children:null!==n&&void 0!==n&&n.SES_DATE?null===(t=new Date(null===n||void 0===n?void 0:n.SES_DATE))||void 0===t?void 0:t.toISOString().split("T")[0]:null}),court:(0,f.jsx)("span",{onClick:function(){return W("/file-management/".concat(n.CAS_ID_PK,"/session/").concat(null===n||void 0===n?void 0:n.SES_ID_PK))},children:"ltr"==document.body.getAttribute("dir")&&null!==n&&void 0!==n&&n.COU_NAME_EN?null===n||void 0===n?void 0:n.COU_NAME_EN:null===n||void 0===n?void 0:n.COU_NAME}),clientName:(0,f.jsx)("span",{onClick:function(){return W("/file-management/".concat(n.CAS_ID_PK,"/session/").concat(null===n||void 0===n?void 0:n.SES_ID_PK))},children:"ltr"==document.body.getAttribute("dir")&&null!==n&&void 0!==n&&n.CLI_NAME_ENGLISh?null===n||void 0===n?void 0:n.CLI_NAME_ENGLISh:null===n||void 0===n?void 0:n.CLI_NAME}),ants:(0,f.jsx)("span",{onClick:function(){return W("/file-management/".concat(n.CAS_ID_PK,"/session/").concat(null===n||void 0===n?void 0:n.SES_ID_PK))},children:"ltr"==document.body.getAttribute("dir")&&null!==n&&void 0!==n&&n.ANTS_EN?null===n||void 0===n?void 0:n.ANTS_EN:null===n||void 0===n?void 0:n.ANTS}),clients:(0,f.jsx)("span",{onClick:function(){return W("/file-management/".concat(n.CAS_ID_PK,"/session/").concat(null===n||void 0===n?void 0:n.SES_ID_PK))},children:"ltr"==document.body.getAttribute("dir")&&null!==n&&void 0!==n&&n.AGENTS_EN?null===n||void 0===n?void 0:n.AGENTS_EN:null===n||void 0===n?void 0:n.AGENTS})}})):[]};return(0,f.jsx)("div",{className:"daily-update",children:(0,f.jsx)(s.rb,{children:(0,f.jsx)(s.b7,{xs:12,children:(0,f.jsx)(a.Z,{sx:{bgcolor:"background.paper"},className:"daily-update-wrapper mt-1",children:(0,f.jsx)("div",{className:"dailySection",children:(0,f.jsxs)("div",{className:"daily-wrapper",children:[(0,f.jsxs)("div",{className:"header",children:[(0,f.jsx)(r.Z,{}),(0,f.jsxs)("div",{className:"name",children:[(0,f.jsxs)("div",{onClick:function(){return A("work")},className:"".concat("work"==p?"active":null," shiftWorkSession"),children:[(0,f.jsx)("h4",{children:Z({id:"work"})}),(0,f.jsxs)("small",{style:{display:"flex",alignItems:"baseline",height:"40px"},children:[" ",(0,f.jsx)("span",{children:Z({id:"forDay"})})," ",(0,f.jsx)(s.jO,{type:"date",id:"inputEmail4",value:T,onChange:function(n){return e=n.target.value,M(new Date(e).toISOString().split("T")[0]),void R((0,v.zt)(new Date(e).toISOString().split("T")[0])).then((function(n){return S(n.payload)}));var e}})]})]}),(0,f.jsxs)("div",{onClick:function(){return A("session")},className:"".concat("session"==p?"active":null," shiftWorkSession"),children:[(0,f.jsxs)("h4",{children:[Z({id:"sessions"})," "]}),(0,f.jsxs)("small",{style:{display:"flex",alignItems:"baseline",height:"25px"},children:[" ",(0,f.jsx)("span",{children:Z({id:"forDay"})})," ",(0,f.jsx)(s.jO,{type:"date",id:"inputEmail4",value:P,onChange:function(n){return e=n.target.value,k(new Date(e).toISOString().split("T")[0]),void R((0,v.v0)(new Date(e).toISOString().split("T")[0])).then((function(n){return x(n.payload)}));var e}})]})]})]})]}),"work"==p?(0,f.jsx)("p",{children:" (".concat(null===N||void 0===N?void 0:N.total,") ").concat(Z({id:"work"}))}):(0,f.jsx)("p",{children:"(".concat(null===b||void 0===b?void 0:b.total,") \u062c\u0644\u0633\u0647")}),(0,f.jsxs)("div",{className:"body",children:[(0,f.jsx)(r.Z,{}),(0,f.jsx)("div",{className:"body-data",children:(0,f.jsx)("div",{className:"daily-update-table",children:"work"==p?(0,f.jsx)(c.g0K,{striped:!0,bordered:!0,responsive:!0,small:!0,data:O,searching:!1}):(0,f.jsx)(c.g0K,{striped:!0,bordered:!0,responsive:!0,small:!0,data:G,searching:!1})})})]})]})})})})})})},N=o.memo(m)},55316:function(n,e,t){var i=t(64836);e.Z=void 0;var o=i(t(45045)),l=t(46417),a=(0,o.default)((0,l.jsx)("path",{d:"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"}),"Update");e.Z=a},12499:function(n,e,t){t.d(e,{Z:function(){return m}});var i=t(87462),o=t(63366),l=t(47313),a=t(83061),s=t(84472),r=t(63649),c=t(39028),d=t(86728),u=t(46417),_=["className","component"];var v=t(41271),f=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.defaultTheme,t=n.defaultClassName,v=void 0===t?"MuiBox-root":t,f=n.generateClassName,m=n.styleFunctionSx,N=void 0===m?r.Z:m,S=(0,s.ZP)("div",{shouldForwardProp:function(n){return"theme"!==n&&"sx"!==n&&"as"!==n}})(N),h=l.forwardRef((function(n,t){var l=(0,d.Z)(e),s=(0,c.Z)(n),r=s.className,m=s.component,N=void 0===m?"div":m,h=(0,o.Z)(s,_);return(0,u.jsx)(S,(0,i.Z)({as:N,ref:t,className:(0,a.Z)(r,f?f(v):v),theme:l},h))}));return h}({defaultTheme:(0,t(49494).Z)(),defaultClassName:"MuiBox-root",generateClassName:v.Z.generate}),m=f},39028:function(n,e,t){t.d(e,{Z:function(){return c}});var i=t(42982),o=t(87462),l=t(63366),a=t(13019),s=t(43103),r=["sx"];function c(n){var e,t=n.sx,c=function(n){var e={systemProps:{},otherProps:{}};return Object.keys(n).forEach((function(t){s.Gc[t]?e.systemProps[t]=n[t]:e.otherProps[t]=n[t]})),e}((0,l.Z)(n,r)),d=c.systemProps,u=c.otherProps;return e=Array.isArray(t)?[d].concat((0,i.Z)(t)):"function"===typeof t?function(){var n=t.apply(void 0,arguments);return(0,a.P)(n)?(0,o.Z)({},d,n):d}:(0,o.Z)({},d,t),(0,o.Z)({},u,{sx:e})}}}]);