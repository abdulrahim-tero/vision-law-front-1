"use strict";(self.webpackChunkfinalproject=self.webpackChunkfinalproject||[]).push([[231],{75217:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var a=t(1413),i=t(70885),s=t(47313),l=t(27998),o=t(22370),r=t(33471),d=t(62361),c=t(62111),u=t(56448),h=t(62463),p=t(10383),x=t(42318),v=t(88905),m=t(99480),f=t(43394),j=t(44948),g=t(67881),N=t(85554),b=t(26058),S=t(57765),Z=t(79136),C=t(936),y=t(76736),_=t(75743),E=t(25218),A=t(9212),k=t(88793),I=t(75330),T=t(2135),w=t(59108),F=t(46417),M=function(e){var n;return null===(n=e.file)||void 0===n?void 0:n.map((function(n,t){var a;return(0,F.jsx)(l.b7,{lg:3,md:4,sm:6,children:(0,F.jsxs)(l.xH,{className:"mb-4 mt-4 text-center",children:[(0,F.jsxs)(l.bn,{children:[(0,F.jsxs)(T.rU,{to:"/file-management/".concat(n.CAS_ID_PK),children:[(0,F.jsxs)("div",{children:[(0,F.jsx)("small",{children:(0,w.Z)("clientName")})," ",(0,F.jsx)("br",{}),(0,F.jsx)("h5",{children:"ltr"==document.body.getAttribute("dir")&&n.CLI_NAME_ENGLISH?n.CLI_NAME_ENGLISH:n.CLI_NAME})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)("small",{children:(0,w.Z)("fileNum")}),(0,F.jsx)("br",{}),(0,F.jsx)("p",{children:n.CAS_NUMBER})]})]}),(0,F.jsx)(o.Z,{style:{height:"16px",cursor:"pointer",position:"absolute",top:"3px",left:"3px",color:"red",boxShadow:"6px 6px 6px rgb(0 0 0 / 5%), -6px -6px 6px rgb(0 0 0 / 5%)"},icon:d.x,customClassName:"nav-icon",onClick:function(){return e.handleDeleteItem(n.CAS_ID_PK)}})]}),(0,F.jsxs)("div",{className:"container-card",children:[(0,F.jsx)("div",{className:"front ".concat(e.collapseId==n.CAS_ID_PK&&"hidden"!==e.theClassName?"hidden":(e.collapseId==n.CAS_ID_PK&&e.theClassName,"visible")),onClick:function(){return e.getStages(n.CAS_ID_PK)},children:(0,F.jsxs)(l.sl,{children:[(0,F.jsxs)("div",{className:"mb-3 pt-2 pb-2",children:[(0,F.jsxs)("span",{children:[(0,w.Z)("agents")," "]}),(0,F.jsx)("p",{children:"ltr"==document.body.getAttribute("dir")&&n.AGENTS_EN?n.AGENTS_EN:n.AGENTS})]}),(0,F.jsxs)("div",{className:"mb-3 pt-2 pb-2",children:[(0,F.jsxs)("span",{children:[(0,w.Z)("ants")," "]}),(0,F.jsx)("p",{children:"ltr"==document.body.getAttribute("dir")&&n.ANTS_EN?n.ANTS_EN:n.ANTS})]}),(0,F.jsxs)("div",{className:"mb-3 pt-2 pb-2",style:{display:"flex",justifyContent:"space-between"},children:[(0,F.jsxs)("div",{style:{borderLeft:"none",boxShadow:"none"},children:[(0,F.jsxs)("span",{children:[" ",(0,w.Z)("fileStatus")," "]}),(0,F.jsx)("p",{children:"ltr"==document.body.getAttribute("dir")&&n.FIL_STATUS_NAME_EN?n.FIL_STATUS_NAME_EN:n.FIL_STATUS_NAME?n.FIL_STATUS_NAME:(0,w.Z)("notFound")})]}),(0,F.jsxs)("div",{style:{borderLeft:"none",boxShadow:"none"},children:[(0,F.jsxs)("span",{children:[(0,w.Z)("casType")," "]}),(0,F.jsx)("p",{children:"ltr"==document.body.getAttribute("dir")&&n.FIL_TYPE_NAME_EN?n.FIL_TYPE_NAME_EN:n.FIL_TYPE_NAME?n.FIL_TYPE_NAME:(0,w.Z)("notFound")})]})]})]})}),(0,F.jsx)("div",{className:"back ".concat(e.collapseId==n.CAS_ID_PK&&"hidden"!==e.theClassName?"visible":(e.collapseId==n.CAS_ID_PK&&e.theClassName,"hidden")," "),children:(0,F.jsxs)(l.Sx,{className:"text-center",onClick:function(){return e.setTheClassName("hidden")},children:[(0,F.jsx)(l.V,{children:(0,F.jsxs)(l.T6,{children:[(0,F.jsx)(l.is,{scope:"col",children:(0,F.jsx)(T.rU,{to:"/file-management/".concat(n.CAS_NUMBER),children:"#"})}),(0,F.jsx)(l.is,{scope:"col",children:(0,F.jsx)(T.rU,{to:"/file-management/".concat(n.CAS_NUMBER),children:"".concat((0,w.Z)("number")," | ").concat((0,w.Z)("type"))})}),(0,F.jsx)(l.is,{scope:"col",children:(0,F.jsx)(T.rU,{to:"/file-management/".concat(n.CAS_NUMBER),children:(0,w.Z)("status")})}),(0,F.jsx)(l.is,{scope:"col",children:(0,F.jsx)(T.rU,{to:"/file-management/".concat(n.CAS_NUMBER),children:(0,w.Z)("stage")})})]})}),(0,F.jsx)(l.NR,{children:e.allStages?null===(a=e.allStages)||void 0===a?void 0:a.map((function(e,n){return(0,F.jsxs)(l.T6,{children:[(0,F.jsx)(l.is,{scope:"row",children:n+=1}),(0,F.jsxs)(l.NN,{children:[e.STG_NUMBER," | ","ltr"==document.body.getAttribute("dir")&&e.STG_TYPE_NAME_EN?e.STG_TYPE_NAME_EN:e.STG_TYPE_NAME]}),(0,F.jsx)(l.NN,{children:"ltr"==document.body.getAttribute("dir")&&e.FIL_STATUS_NAME_EN?e.FIL_STATUS_NAME_EN:e.FIL_STATUS_NAME}),(0,F.jsx)(l.NN,{children:"ltr"==document.body.getAttribute("dir")&&e.STG_KIND_NAME_EN?e.STG_KIND_NAME_EN:e.STG_KIND_NAME})]},n)})):null})]})})]})]})},t)}))},P=(t(38638),t(97512)),B={PaperProps:{style:{maxHeight:224,width:250}}};function L(e,n,t){return{fontWeight:-1===n.indexOf(e)?t.typography.fontWeightRegular:t.typography.fontWeightMedium}}y.kL.register(y.qi,y.u,y.De);var R=function(){var e,n,t,y=(0,s.useState)(!1),T=(0,i.Z)(y,2),R=T[0],D=T[1],U=(0,s.useState)(!1),z=(0,i.Z)(U,2),O=z[0],H=z[1],G=(0,s.useState)(null),K=(0,i.Z)(G,2),V=K[0],Y=K[1],W=(0,s.useState)(null),q=(0,i.Z)(W,2),J=q[0],$=q[1],Q=(0,s.useState)(!1),X=(0,i.Z)(Q,2),ee=X[0],ne=X[1],te=(0,s.useState)(!1),ae=(0,i.Z)(te,2),ie=ae[0],se=ae[1],le=(0,s.useState)(!1),oe=(0,i.Z)(le,2),re=oe[0],de=oe[1],ce=(0,s.useState)(!1),ue=(0,i.Z)(ce,2),he=ue[0],pe=ue[1],xe=(0,s.useState)(!1),ve=(0,i.Z)(xe,2),me=ve[0],fe=ve[1],je=(0,s.useState)(!1),ge=(0,i.Z)(je,2),Ne=(ge[0],ge[1]),be=(0,s.useState)(!1),Se=(0,i.Z)(be,2),Ze=Se[0],Ce=Se[1],ye=(0,s.useState)(!1),_e=(0,i.Z)(ye,2),Ee=_e[0],Ae=_e[1],ke=(0,s.useState)([]),Ie=(0,i.Z)(ke,2),Te=Ie[0],we=Ie[1],Fe=(0,s.useState)(""),Me=(0,i.Z)(Fe,2),Pe=Me[0],Be=Me[1],Le=(0,s.useState)(""),Re=(0,i.Z)(Le,2),De=Re[0],Ue=Re[1],ze=(0,s.useState)(""),Oe=(0,i.Z)(ze,2),He=Oe[0],Ge=Oe[1],Ke=(0,s.useState)(""),Ve=(0,i.Z)(Ke,2),Ye=Ve[0],We=Ve[1],qe=(0,s.useState)(""),Je=(0,i.Z)(qe,2),$e=Je[0],Qe=Je[1],Xe=(0,s.useState)(void 0),en=(0,i.Z)(Xe,2),nn=en[0],tn=en[1],an=(0,s.useState)(void 0),sn=(0,i.Z)(an,2),ln=sn[0],on=sn[1],rn=(0,s.useState)(""),dn=(0,i.Z)(rn,2),cn=dn[0],un=dn[1],hn=(0,s.useState)(""),pn=(0,i.Z)(hn,2),xn=pn[0],vn=pn[1],mn=(0,s.useState)(1),fn=(0,i.Z)(mn,2),jn=fn[0],gn=(fn[1],(0,s.useState)(1)),Nn=(0,i.Z)(gn,2),bn=Nn[0],Sn=Nn[1],Zn=(0,s.useState)(null),Cn=(0,i.Z)(Zn,2),yn=Cn[0],_n=Cn[1],En=(0,s.useState)(null),An=(0,i.Z)(En,2),kn=An[0],In=An[1],Tn=(0,s.useState)(!1),wn=(0,i.Z)(Tn,2),Fn=wn[0],Mn=wn[1],Pn=(0,c.Z)(),Bn=(0,N.I0)(),Ln=(0,C.Z)().formatMessage,Rn=(0,N.v9)((function(e){return e.fileManagement})),Dn=Rn.allCases,Un=(Rn.isLoadingFileManagment,(0,N.v9)((function(e){return e.stage})).allStages),zn=(0,N.v9)((function(e){return e.reminderData})),On=zn.reminderCases,Hn=(zn.isLoadingReminder,[Ln({id:"fileCategory"}),Ln({id:"casType"}),Ln({id:"ants"}),Ln({id:"agents"}),Ln({id:"case"}),Ln({id:"openDate"}),Ln({id:"fileNum"})]);(0,s.useEffect)((function(){Bn((0,E.cJ)({theParams:null})),Bn((0,k.D7)())}),[Bn]);var Gn=function(e){Bn((0,A.yN)(e)),Y(e),D(!R),$(null)},Kn=function(e){In(e),Ce(!0)},Vn=s.forwardRef((function(e,n){return(0,F.jsx)(Z.Z,(0,a.Z)({elevation:6,ref:n,variant:"filled"},e))})),Yn=function(e,n){"clickaway"!==n&&(fe(!1),se(!1),de(!1),Ae(!1))},Wn=s.useMemo((function(){return function(e){var n=e.target.value;we("string"===typeof n?n.split(","):n)}}),[Te,Pe,De,He,$e,nn,cn,xn]),qn=s.useCallback((function(){nn>ln&&Mn(!0),Bn((0,E.cJ)({theParams:{casNumberSearch:De||void 0,antsSearch:He||void 0,agentSearch:Ye||void 0,fileTypeSearch:$e||void 0,caseOpenFromSearch:nn||void 0,caseOpenToSearch:ln||void 0,subCasSearch:cn||void 0,categorySearch:xn||void 0,searchVal:Pe||void 0}}))}),[Te,Pe,De,He,$e,nn,cn,xn]),Jn=s.useMemo((function(){return function(e){Be(e.target.value),"Enter"===e.key&&(_n(null),qn())}}),[Te,Pe,De,He,$e,nn,cn,xn]),$n=s.useCallback((function(e,n){Sn(n),Bn((0,E.cJ)({theParams:{offset:10*(n-1)}}))}),[bn]),Qn=Dn.total?Math.ceil((null===Dn||void 0===Dn?void 0:Dn.total)/10):1;return(0,F.jsxs)("div",{className:"file-management box",children:[(0,F.jsxs)("div",{className:"checkboxBtn",children:[(0,F.jsxs)("label",{className:"switch",onClick:function(e){return ne(e.target.checked)},children:[(0,F.jsx)("input",{type:"checkbox"}),(0,F.jsx)("span",{className:"slider round"})]}),(0,F.jsx)("span",{style:{marginRight:"10px",display:"inline-block",marginTop:"-5px"},children:Ln({id:"charts"})})]}),(0,F.jsx)(l.rc,{className:"mb-3 mt-2"}),(0,F.jsxs)(l.rb,{className:"".concat(ee?"showChart":"hideChart"),children:[(0,F.jsx)(l.b7,{md:3,sm:6,children:(0,F.jsx)(l.xH,{className:"mb-4",children:(0,F.jsxs)(l.sl,{children:[(0,F.jsx)(_.$I,{data:{labels:[Ln({id:"theAll"}),Ln({id:"new"})],datasets:[{data:[null===On||void 0===On?void 0:On.total,null===On||void 0===On||null===(e=On.FILE_NEW)||void 0===e?void 0:e.total],backgroundColor:["#36A2EB","#FF6384"],hoverBackgroundColor:["#36A2EB","#FF6384"]}]},options:{plugins:{legend:{display:!1}}}}),(0,F.jsxs)("div",{style:{display:"flex",fontSize:"10px",justifyContent:"space-between"},children:[(0,F.jsxs)("div",{children:[(0,F.jsx)("span",{className:"allChart"}),(0,F.jsx)("span",{children:Ln({id:"theAll"})})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)("span",{className:"allChart thirdSpecified"}),(0,F.jsx)("span",{children:Ln({id:"new"})})]})]})]})})}),(0,F.jsx)(l.b7,{md:3,sm:6,children:(0,F.jsx)(l.xH,{className:"mb-4",children:(0,F.jsxs)(l.sl,{children:[(0,F.jsx)(_.$I,{data:{labels:[Ln({id:"new"}),Ln({id:"withoutAgency"})],datasets:[{data:[null===On||void 0===On?void 0:On.total,null===On||void 0===On?void 0:On.FILE_WITHOUT_AGENCY.total],backgroundColor:["#36A2EB","#FFCE56"],hoverBackgroundColor:["#36A2EB","#FFCE56"]}]},options:{plugins:{legend:{display:!1}}}}),(0,F.jsxs)("div",{style:{display:"flex",fontSize:"10px",justifyContent:"space-between"},children:[(0,F.jsxs)("div",{children:[(0,F.jsx)("span",{className:"allChart"}),(0,F.jsx)("span",{children:Ln({id:"new"})})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)("span",{className:"allChart secondSpeicified"}),(0,F.jsx)("span",{children:Ln({id:"withoutAgency"})})]})]})]})})}),(0,F.jsx)(l.b7,{md:3,sm:6,children:(0,F.jsx)(l.xH,{className:"mb-4",children:(0,F.jsxs)(l.sl,{children:[(0,F.jsx)(_.$I,{data:{labels:[Ln({id:"new"}),Ln({id:"notUsed"})],datasets:[{data:[null===On||void 0===On?void 0:On.total,null===On||void 0===On||null===(n=On.FILE_USE)||void 0===n?void 0:n.total],backgroundColor:["#36A2EB","#FF6384"],hoverBackgroundColor:["#36A2EB","#FF6384"]}]},options:{plugins:{legend:{display:!1}}}}),(0,F.jsxs)("div",{style:{display:"flex",fontSize:"10px",justifyContent:"space-between"},children:[(0,F.jsxs)("div",{children:[(0,F.jsx)("span",{className:"allChart"}),(0,F.jsx)("span",{children:Ln({id:"new"})})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)("span",{className:"allChart thirdSpecified"}),(0,F.jsx)("span",{children:Ln({id:"notUsed"})})]})]})]})})}),(0,F.jsx)(l.b7,{md:3,sm:6,children:(0,F.jsx)(l.xH,{className:"mb-4",children:(0,F.jsxs)(l.sl,{children:[(0,F.jsx)(_.$I,{data:{labels:[Ln({id:"new"}),Ln({id:"withoutContract"})],datasets:[{data:[null===On||void 0===On?void 0:On.total,null===On||void 0===On||null===(t=On.FILE_WITHOUT_CONTRACT)||void 0===t?void 0:t.total],backgroundColor:["#36A2EB","#FFCE56"],hoverBackgroundColor:["#36A2EB","#FFCE56"]}]},options:{plugins:{legend:{display:!1}}}}),(0,F.jsxs)("div",{style:{display:"flex",fontSize:"10px",justifyContent:"space-between"},children:[(0,F.jsxs)("div",{children:[(0,F.jsx)("span",{className:"allChart"}),(0,F.jsx)("span",{children:Ln({id:"new"})})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)("span",{className:"allChart secondSpeicified"}),(0,F.jsx)("span",{children:Ln({id:"withoutContract"})})]})]})]})})})]}),(0,F.jsxs)(l.rb,{children:[(0,F.jsxs)(l.b7,{md:12,children:[(0,F.jsxs)("div",{className:"headerFiles",children:[(0,F.jsxs)("div",{children:[(0,F.jsx)(l.u5,{className:"add-contact",onClick:function(){return H(!0)},children:(0,F.jsx)(o.Z,{style:{height:"25px"},className:"icon",customClassName:"nav-icon",icon:r.q})}),(0,F.jsx)(p.Z,{sx:{m:1,width:300,mt:3},className:"classified",children:(0,F.jsx)(v.Z,{multiple:!0,displayEmpty:!0,value:Te,onChange:Wn,input:(0,F.jsx)(x.Z,{}),renderValue:function(e){return 0===e.length?(0,F.jsx)("span",{children:(0,w.Z)("classification")}):e.join(", ")},MenuProps:B,inputProps:{"aria-label":"Without label"},children:Hn.map((function(e){return(0,F.jsx)(b.Z,{value:e,style:L(e,Te,Pn),children:e},e)}))})})]}),(0,F.jsx)("div",{className:"search",children:(0,F.jsx)(l.jO,{type:"text",value:Pe,onChange:function(e){if(Be(e.target.value),e.target.value){var n,t=null===Dn||void 0===Dn||null===(n=Dn.data)||void 0===n?void 0:n.filter((function(n){return Object.values(n).find((function(n){var t;return"string"==typeof n||"object"==typeof n?null===n||void 0===n?void 0:n.includes(e.target.value):null===(t=n.toString())||void 0===t?void 0:t.includes(e.target.value)}))}));_n(t)}else _n(null)},placeholder:"\u0628\u062d\u062b...",onKeyDown:function(e){return Jn(e)}})})]}),(0,F.jsxs)("div",{className:"classified-global-criteria ".concat(0==(null===Te||void 0===Te?void 0:Te.length)&&"hide"),children:[(null===Te||void 0===Te?void 0:Te.find((function(e){return e==Ln({id:"fileNum"})})))&&(0,F.jsx)(g.Z,{style:{width:"30%"},label:Ln({id:"fileNum"}),value:De,onChange:function(e){return Ue(e.target.value)}}),(null===Te||void 0===Te?void 0:Te.find((function(e){return e==Ln({id:"ants"})})))&&(0,F.jsx)(g.Z,{style:{width:"30%"},label:Ln({id:"ants"}),value:He,onChange:function(e){return Ge(e.target.value)}}),(null===Te||void 0===Te?void 0:Te.find((function(e){return e==Ln({id:"agents"})})))&&(0,F.jsx)(g.Z,{style:{width:"30%"},label:Ln({id:"agents"}),value:Ye,onChange:function(e){return We(e.target.value)}}),(null===Te||void 0===Te?void 0:Te.find((function(e){return e==Ln({id:"openDate"})})))&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(f._,{dateAdapter:m.H,children:(0,F.jsx)(j.M,{label:Ln({id:"from"}),value:nn,onChange:tn,renderInput:function(e){return(0,F.jsx)(g.Z,(0,a.Z)((0,a.Z)({},e),{},{helperText:Fn?Ln({id:"notCorrect"}):null}))}})}),(0,F.jsx)(f._,{dateAdapter:m.H,children:(0,F.jsx)(j.M,{label:Ln({id:"to"}),value:ln,onChange:on,renderInput:function(e){return(0,F.jsx)(g.Z,(0,a.Z)((0,a.Z)({},e),{},{helperText:Fn?Ln({id:"notCorrect"}):null}))}})})]}),(null===Te||void 0===Te?void 0:Te.find((function(e){return e==Ln({id:"case"})})))&&(0,F.jsx)(g.Z,{style:{width:"30%"},label:Ln({id:"case"}),value:cn,onChange:function(e){return un(e.target.value)}}),(null===Te||void 0===Te?void 0:Te.find((function(e){return e==Ln({id:"fileCategory"})})))&&(0,F.jsx)(g.Z,{style:{width:"30%"},label:Ln({id:"fileCategory"}),value:xn,onChange:function(e){return vn(e.target.value)}}),(null===Te||void 0===Te?void 0:Te.find((function(e){return e==Ln({id:"casType"})})))&&(0,F.jsx)(g.Z,{style:{width:"30%"},label:Ln({id:"casType"}),value:$e,onChange:function(e){return Qe(e.target.value)}}),Te.length>0&&(0,F.jsxs)("div",{style:{width:"120px",margin:"20px auto",display:"block"},children:[(0,F.jsx)(l.u5,{onClick:qn,children:Ln({id:"apply"})}),(0,F.jsx)(o.Z,{style:{height:"16px",cursor:"pointer",position:"absolute",top:"7px",left:"7px"},icon:d.x,customClassName:"nav-icon",onClick:function(){we([]),Ue(""),Ge(""),We(""),Qe(""),tn(void 0),on(void 0),un(""),vn(""),Bn((0,E.cJ)({theParams:null}))}})]})]})]}),M(yn?{file:yn,getStages:Gn,setTheClassName:$,allStages:Un,collapseId:V,theClassName:J,handleDeleteItem:Kn}:{file:Dn.data,getStages:Gn,setTheClassName:$,allStages:Un,collapseId:V,theClassName:J,handleDeleteItem:Kn}),(0,F.jsx)(l.b7,{md:12,children:(0,F.jsx)(h.Z,{spacing:2,children:(0,F.jsx)(u.Z,{count:0==Qn?1:Qn,page:bn,defaultPage:jn,siblingCount:0,shape:"rounded",color:"primary",onChange:$n})})})]}),O&&(0,F.jsx)(I.T,{stage:null,exitSelectModal:function(){H(!1)},setOpenAddSnack:de,setOpenEditSnack:se,setOpenDelSnack:pe,setOpenAttachedSnack:fe,setOpenErrorSnack:Ne,setOpenDelErrorSnack:Ae}),Ze?(0,F.jsx)(P.Z,{exitSelectModal:function(){return Ce(!1)},handleDelete:function(e){Bn((0,E._I)(kn)).then((function(e){var n,t;console.log(e.payload),200==(null===e||void 0===e||null===(n=e.payload)||void 0===n||null===(t=n.result)||void 0===t?void 0:t.status)?pe(!0):(Ae(!0),Bn((0,E.cJ)({theParams:null})),Ce(!1))}))}}):null,Ee||re||he||me?(0,F.jsx)(S.Z,{open:Ee||re||he||me,autoHideDuration:2e3,onClose:Yn,children:(0,F.jsx)(Vn,{onClose:Yn,severity:"".concat(he||me||Ee?"error":"success"),sx:{width:"100%"},children:Ln(ie?{id:"itemUpdated"}:Ee?{id:"itemDeleted"}:me?{id:"error"}:{id:"itemAdded"})})}):null]})},D=s.memo(R)},11155:function(e,n,t){t.d(n,{c:function(){return a}});var a=["512 512","<rect width='368' height='32' x='72' y='240' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>"]},75161:function(e,n,t){var a=t(64836);n.Z=void 0;var i=a(t(45045)),s=t(46417),l=(0,i.default)((0,s.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");n.Z=l},43692:function(e,n,t){var a=t(64836);n.Z=void 0;var i=a(t(45045)),s=t(46417),l=(0,i.default)((0,s.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank");n.Z=l},12499:function(e,n,t){t.d(n,{Z:function(){return v}});var a=t(87462),i=t(63366),s=t(47313),l=t(83061),o=t(84472),r=t(63649),d=t(39028),c=t(86728),u=t(46417),h=["className","component"];var p=t(41271),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.defaultTheme,t=e.defaultClassName,p=void 0===t?"MuiBox-root":t,x=e.generateClassName,v=e.styleFunctionSx,m=void 0===v?r.Z:v,f=(0,o.ZP)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(m),j=s.forwardRef((function(e,t){var s=(0,c.Z)(n),o=(0,d.Z)(e),r=o.className,v=o.component,m=void 0===v?"div":v,j=(0,i.Z)(o,h);return(0,u.jsx)(f,(0,a.Z)({as:m,ref:t,className:(0,l.Z)(r,x?x(p):p),theme:s},j))}));return j}({defaultTheme:(0,t(49494).Z)(),defaultClassName:"MuiBox-root",generateClassName:p.Z.generate}),v=x},41769:function(e,n,t){t.d(n,{Z:function(){return A}});var a=t(4942),i=t(63366),s=t(87462),l=t(47313),o=t(83061),r=t(21921),d=t(17551),c=t(45359),u=t(25700),h=t(46417),p=(0,u.Z)((0,h.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),x=(0,u.Z)((0,h.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),v=(0,u.Z)((0,h.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),m=t(28170),f=t(11236),j=t(64164),g=t(77430),N=t(32298);function b(e){return(0,N.Z)("MuiCheckbox",e)}var S=(0,g.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),Z=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],C=(0,j.ZP)(c.Z,{shouldForwardProp:function(e){return(0,j.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.indeterminate&&n.indeterminate,"default"!==t.color&&n["color".concat((0,m.Z)(t.color))]]}})((function(e){var n,t=e.theme,i=e.ownerState;return(0,s.Z)({color:(t.vars||t).palette.text.secondary},!i.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===i.color?t.vars.palette.action.activeChannel:t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,d.Fq)("default"===i.color?t.palette.action.active:t.palette[i.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&(n={},(0,a.Z)(n,"&.".concat(S.checked,", &.").concat(S.indeterminate),{color:(t.vars||t).palette[i.color].main}),(0,a.Z)(n,"&.".concat(S.disabled),{color:(t.vars||t).palette.action.disabled}),n))})),y=(0,h.jsx)(x,{}),_=(0,h.jsx)(p,{}),E=(0,h.jsx)(v,{}),A=l.forwardRef((function(e,n){var t,a,d=(0,f.Z)({props:e,name:"MuiCheckbox"}),c=d.checkedIcon,u=void 0===c?y:c,p=d.color,x=void 0===p?"primary":p,v=d.icon,j=void 0===v?_:v,g=d.indeterminate,N=void 0!==g&&g,S=d.indeterminateIcon,A=void 0===S?E:S,k=d.inputProps,I=d.size,T=void 0===I?"medium":I,w=d.className,F=(0,i.Z)(d,Z),M=N?A:j,P=N?A:u,B=(0,s.Z)({},d,{color:x,indeterminate:N,size:T}),L=function(e){var n=e.classes,t=e.indeterminate,a=e.color,i={root:["root",t&&"indeterminate","color".concat((0,m.Z)(a))]},l=(0,r.Z)(i,b,n);return(0,s.Z)({},n,l)}(B);return(0,h.jsx)(C,(0,s.Z)({type:"checkbox",inputProps:(0,s.Z)({"data-indeterminate":N},k),icon:l.cloneElement(M,{fontSize:null!=(t=M.props.fontSize)?t:T}),checkedIcon:l.cloneElement(P,{fontSize:null!=(a=P.props.fontSize)?a:T}),ownerState:B,ref:n,className:(0,o.Z)(L.root,w)},F,{classes:L}))}))},45359:function(e,n,t){t.d(n,{Z:function(){return b}});var a=t(70885),i=t(63366),s=t(87462),l=t(47313),o=t(83061),r=t(21921),d=t(28170),c=t(64164),u=t(56716),h=t(11736),p=t(44848),x=t(77430),v=t(32298);function m(e){return(0,v.Z)("PrivateSwitchBase",e)}(0,x.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var f=t(46417),j=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],g=(0,c.ZP)(p.Z)((function(e){var n=e.ownerState;return(0,s.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),N=(0,c.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),b=l.forwardRef((function(e,n){var t=e.autoFocus,l=e.checked,c=e.checkedIcon,p=e.className,x=e.defaultChecked,v=e.disabled,b=e.disableFocusRipple,S=void 0!==b&&b,Z=e.edge,C=void 0!==Z&&Z,y=e.icon,_=e.id,E=e.inputProps,A=e.inputRef,k=e.name,I=e.onBlur,T=e.onChange,w=e.onFocus,F=e.readOnly,M=e.required,P=e.tabIndex,B=e.type,L=e.value,R=(0,i.Z)(e,j),D=(0,u.Z)({controlled:l,default:Boolean(x),name:"SwitchBase",state:"checked"}),U=(0,a.Z)(D,2),z=U[0],O=U[1],H=(0,h.Z)(),G=v;H&&"undefined"===typeof G&&(G=H.disabled);var K="checkbox"===B||"radio"===B,V=(0,s.Z)({},e,{checked:z,disabled:G,disableFocusRipple:S,edge:C}),Y=function(e){var n=e.classes,t=e.checked,a=e.disabled,i=e.edge,s={root:["root",t&&"checked",a&&"disabled",i&&"edge".concat((0,d.Z)(i))],input:["input"]};return(0,r.Z)(s,m,n)}(V);return(0,f.jsxs)(g,(0,s.Z)({component:"span",className:(0,o.Z)(Y.root,p),centerRipple:!0,focusRipple:!S,disabled:G,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),H&&H.onFocus&&H.onFocus(e)},onBlur:function(e){I&&I(e),H&&H.onBlur&&H.onBlur(e)},ownerState:V,ref:n},R,{children:[(0,f.jsx)(N,(0,s.Z)({autoFocus:t,checked:l,defaultChecked:x,className:Y.input,disabled:G,id:K&&_,name:k,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var n=e.target.checked;O(n),T&&T(e,n)}},readOnly:F,ref:A,required:M,ownerState:V,tabIndex:P,type:B},"checkbox"===B&&void 0===L?{}:{value:L},E)),z?c:y]}))}))}}]);