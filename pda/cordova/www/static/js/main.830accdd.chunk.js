(this["webpackJsonppda-client"]=this["webpackJsonppda-client"]||[]).push([[0],{45:function(e,t,a){e.exports=a(65)},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(11),s=a.n(n),c=a(0),o=a.n(c),r=a(35),l=a.n(r),m=(a(44),a(1)),i=a(14),u=a(24),f=a(36),d={setAndroidApp:function(e,t){e.setState(Object(u.a)({},e.state,{androidApp:t}))},setAuthUser:function(e,t){e.setState(Object(u.a)({},e.state,{authUser:t}))},setLoadPage:function(e,t){e.setState(Object(u.a)({},e.state,{loadPage:t}))}},p=Object(f.a)(o.a,{androidApp:!1,authUser:null,loadPage:!1},d),h=a(4);var E,b=Object(i.g)(Object(h.b)()((function(){var e=p(),t=Object(m.a)(e,2)[1],a=Object(c.useState)(!1),n=Object(m.a)(a,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){t.setLoadPage(!1)}),[]),s?o.a.createElement(i.a,{to:"/Inventory"}):o.a.createElement("section",{className:"famo-wrapper"},o.a.createElement("div",{className:"famo-content"},o.a.createElement("div",{className:"famo-grid"},o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell text-center"},o.a.createElement("button",{type:"button",className:"famo-button famo-normal-button",onClick:function(e){r(!0)}},o.a.createElement("span",{className:"famo-text-5"},"Invent\xe1rio")))))))}))),v=a(10),g=a.n(v);!function(e){e[e.productInput=1]="productInput"}(E||(E={}));var N=Object(h.b)()((function(e){var t=e.contentType,a=e.visible,n=e.setVisible,s=e.confirm,r=e.t,l=Object(c.useState)(a),i=Object(m.a)(l,2),u=i[0],f=i[1],d=Object(c.useState)(""),p=Object(m.a)(d,2),h=p[0],b=p[1],v=[b];function g(){switch(t){case E.productInput:s(h)}n(!1)}function N(e){e.preventDefault(),g()}return Object(c.useEffect)((function(){f(a),a||v.forEach((function(e){e("")}))}),[a]),o.a.createElement("section",{className:"w3-modal famo-modal"+(u?" w3-show":""),onClick:function(e){return n(!1)}},o.a.createElement("div",{className:"w3-modal-content famo-modal-content",onClick:function(e){return e.stopPropagation()}},function(){switch(t){case E.productInput:return o.a.createElement("section",{className:"famo-wrapper"},o.a.createElement("div",{className:"famo-content"},o.a.createElement("form",{className:"famo-grid famo-form-grid famo-submit-form",noValidate:!0,onSubmit:N},o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell famo-input-label"},o.a.createElement("span",{className:"famo-text-11"},r("key_87"))),o.a.createElement("div",{className:"famo-cell"},o.a.createElement("input",{type:"text",className:"famo-input famo-text-10",name:"productCode",value:h,onInput:function(e){return b(e.target.value)}}))),o.a.createElement("input",{type:"submit",className:"hide",value:""})),o.a.createElement("div",{className:"famo-grid famo-buttons"},o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell text-right"},o.a.createElement("button",{type:"button",className:"famo-button famo-confirm-button",onClick:function(e){return g()}},o.a.createElement("span",{className:"famo-text-12"},r("key_701"))),o.a.createElement("button",{type:"button",className:"famo-button famo-cancel-button",onClick:function(e){return n(!1)}},o.a.createElement("span",{className:"famo-text-12"},r("key_484"))))))))}}()),o.a.createElement("div",{className:"famo-buttons"},o.a.createElement("button",{type:"button",className:"famo-button famo-icon-button",title:r("key_200"),onClick:function(e){e.stopPropagation(),n(!1)}},o.a.createElement("span",{className:"fas fa-times"}))))}));function y(e){var t=e.hide;return o.a.createElement("div",{className:"famo-loader-wrapper"+(t?" hide":"")},o.a.createElement("div",{className:"famo-loader"}))}var w="pda",O="http://cpu-244.famo.pt:3030/";function k(e){fetch(O+"Log/Http/Errors?appName="+w+"&timestamp="+(new Date).getTime(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:e.status,statusText:e.statusText,url:e.url}),credentials:"include"}).then((function(){})).catch((function(){}))}function j(e){fetch(O+"Log/Promise/Errors?appName="+w+"&timestamp="+(new Date).getTime(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e.message,stack:e.stack,request:e.request?{method:e.request.method,path:e.request.path}:null,response:e.response?{status:e.response.status}:null}),credentials:"include"}).then((function(){})).catch((function(){}))}var x=a(16),C=a.n(x);var S=Object(i.g)(Object(h.b)()((function(e){var t=e.t,a=Object(c.useState)(""),n=Object(m.a)(a,2),s=n[0],r=n[1],l=Object(c.useState)([]),i=Object(m.a)(l,2),u=i[0],f=i[1],d=Object(c.useState)(!1),h=Object(m.a)(d,2),b=h[0],v=h[1],w=Object(c.useState)(!1),x=Object(m.a)(w,2),C=x[0],S=x[1],I=Object(c.useState)(null),P=Object(m.a)(I,2),_=P[0],T=P[1],A=Object(c.useState)(),D=Object(m.a)(A,2),M=D[0],U=D[1],L=p(),V=Object(m.a)(L,2),F=V[0],R=V[1];function H(e){var a=e.split("/"),n=a[0],c="";a.length>1&&(c=a[1]),S(!0),fetch(O+"ERP/Inventories/Products?inventoryCode="+s+"&productCode="+n+"&productVariantCode="+c+"&timestamp="+(new Date).getTime(),{method:"GET",credentials:"include"}).then((function(e){e.ok&&e.status===g.a.OK?e.json().then((function(e){T(e)})).catch((function(e){T(null),j(e),alert(t("key_416"))})):(T(null),k(e),alert("O c\xf3digo n\xe3o corresponde a um produto do invent\xe1rio."))})).catch((function(e){T(null),j(e),alert(t("key_416"))})).finally((function(){S(!1)}))}return Object(c.useEffect)((function(){R.setLoadPage(!0)}),[]),Object(c.useEffect)((function(){F.authUser&&fetch(O+"ERP/Inventories?timestamp="+(new Date).getTime(),{method:"GET",credentials:"include"}).then((function(e){e.ok&&e.status===g.a.OK?e.json().then((function(e){f(e),R.setLoadPage(!1)})).catch((function(e){j(e),alert(t("key_416"))})):(k(e),alert(t("key_303")))})).catch((function(e){j(e),alert(t("key_416"))}))}),[F.authUser]),Object(c.useEffect)((function(){""===s&&T(null)}),[s]),o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"famo-wrapper"},o.a.createElement("div",{className:"famo-content"},o.a.createElement("form",{className:"famo-grid famo-form-grid",noValidate:!0,onSubmit:function(e){return e.preventDefault()}},o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell famo-input-label"},o.a.createElement("span",{className:"famo-text-11"},"Invent\xe1rio")),o.a.createElement("div",{className:"famo-cell"},o.a.createElement("select",{className:"famo-input famo-text-10",name:"inventoryCode",disabled:C,onChange:function(e){return r(e.target.value)}},o.a.createElement("option",{key:""}),u.map((function(e,t){return o.a.createElement("option",{key:t,value:e.Code},e.Name)})))))))),_||C?o.a.createElement("section",{className:"famo-wrapper"},o.a.createElement("div",{className:"famo-title"},o.a.createElement("span",{className:"famo-text-13"},t("key_339"))),o.a.createElement("div",{className:"famo-content"},o.a.createElement(y,{hide:!C}),o.a.createElement("form",{className:"famo-grid famo-form-grid"+(C?" hide":""),noValidate:!0,onSubmit:function(e){return e.preventDefault()}},o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell famo-input-label"},o.a.createElement("span",{className:"famo-text-11"},t("key_87"))),o.a.createElement("div",{className:"famo-cell"},o.a.createElement("input",{type:"text",className:"famo-input famo-text-10",name:"productCode",disabled:!0,value:_?_.ProductCode:""}))),o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell famo-input-label"},o.a.createElement("span",{className:"famo-text-11"},t("key_464"))),o.a.createElement("div",{className:"famo-cell"},o.a.createElement("input",{type:"text",className:"famo-input famo-text-10",name:"productVariantCode",disabled:!0,value:_?_.ProductVariantCode:""}))),o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell famo-input-label"},o.a.createElement("span",{className:"famo-text-11"},t("key_138"))),o.a.createElement("div",{className:"famo-cell"},o.a.createElement("input",{type:"text",className:"famo-input famo-text-10",name:"productDescription",disabled:!0,value:_?_.ProductDescription:""}))),o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell famo-input-label"},o.a.createElement("span",{className:"famo-text-11"},t("key_751"))),o.a.createElement("div",{className:"famo-cell"},o.a.createElement("input",{type:"text",className:"famo-input famo-text-10",name:"locationCode",disabled:!0,value:_?_.LocationCode:""}))),o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell famo-input-label"},o.a.createElement("span",{className:"famo-text-11"},t("key_347"))),o.a.createElement("div",{className:"famo-cell"},o.a.createElement("input",{type:"text",className:"famo-input famo-text-10",name:"quantity","data-sub-type":"number",onInput:function(e){U(e.target.value),function(e,t){110===e.keyCode&&alert("Teste")}(e)}}),o.a.createElement("div",{className:"famo-input-message hide"},o.a.createElement("span",{className:"famo-text-15"},t("key_13")))))),o.a.createElement("div",{className:"famo-grid famo-buttons"+(C?" hide":"")},o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell text-right"},o.a.createElement("button",{type:"button",className:"famo-button famo-confirm-button",onClick:function(e){S(!0),fetch(O+"ERP/Inventories/Products"+function(e){var t="?timestamp="+(new Date).getTime();for(var a in e){var n=e[a];if(Array.isArray(n))for(var s=0,c=n.length;s<c;s++)t+="&"+a+"="+(null===n[s]?"":encodeURIComponent(n[s]));else t+="&"+a+"="+(null===n?"":encodeURIComponent(n))}return t}({documentCode:_.Code,productCode:_.ProductCode,productVariantCode:_.ProductVariantCode,locationCode:_.LocationCode,quantity:M}),{method:"PATCH",credentials:"include"}).then((function(e){e.ok&&e.status===g.a.OK?(T(null),alert("A quantidade foi alterada com sucesso.")):(k(e),alert(t("key_302")))})).catch((function(e){j(e),alert(t("key_416"))})).finally((function(){S(!1)}))}},o.a.createElement("span",{className:"famo-text-12"},"Registar"))))))):null,s?o.a.createElement("section",{className:"famo-wrapper"},o.a.createElement("div",{className:"famo-grid"},o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell text-right"},o.a.createElement("button",{type:"button",className:"famo-button famo-normal-button",disabled:C,onClick:function(e){return v(!0)}},o.a.createElement("span",{className:"famo-text-12"},"Manual")),F.androidApp?o.a.createElement("button",{type:"button",className:"famo-button famo-normal-button",disabled:C,onClick:function(e){window.cordova.plugins.barcodeScanner.scan((function(e){e.cancelled||H(e.text)}),(function(e){alert(t("key_686"))}),{preferFrontCamera:!1,showFlipCameraButton:!1,showTorchButton:!0,torchOn:!1,saveHistory:!1,prompt:"",resultDisplayDuration:0,formats:"CODE_39",orientation:"unset",disableAnimations:!0,disableSuccessBeep:!1,continuousMode:!1})}},o.a.createElement("span",{className:"famo-text-12"},t("key_681"))):null)))):null,o.a.createElement(N,{contentType:E.productInput,visible:b,setVisible:v,confirm:H}))}))),I=a(18),P=a(21),_=a(29),T=a(31),A=a(30),D=a(32);function M(e,t,a){fetch(O+"Platform/Android?timestamp="+(new Date).getTime(),{method:"GET",credentials:"include"}).then((function(n){n.ok&&n.status===g.a.OK?n.json().then((function(a){!function(e){switch(e){case"POR":C.a.locale("pt-pt");break;case"ENG":C.a.locale("en");break;case"ESP":C.a.locale("es-es");break;case"FRA":C.a.locale("fr")}}(a.Language.Code),t.setAndroidApp(a),t.setAuthUser(e)})).catch((function(e){j(e),alert(a("key_416"))})):(k(n),alert(a("key_303")))})).catch((function(e){j(e),alert(a("key_416"))}))}function U(e,t){L.autoSignIn().then((function(a){a.ok&&a.status===g.a.OK?a.json().then((function(a){M(a,e,t)})).catch((function(e){j(e),alert(t("key_416"))})):(k(a),alert(t("key_306")))})).catch((function(e){j(e),alert(t("key_416"))}))}var L=function e(){Object(P.a)(this,e)};L.signIn=function(e,t){return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",fetch(O+"Authentication/SignIn",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t}),credentials:"include"}));case 1:case"end":return a.stop()}}))},L.autoSignIn=function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(O+"Authentication/AutoSignIn?timestamp="+(new Date).getTime(),{method:"GET",credentials:"include"}));case 1:case"end":return e.stop()}}))},L.signOut=function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(O+"Authentication/SignOut",{method:"GET",credentials:"include"}));case 1:case"end":return e.stop()}}))};var V=a(25),F=a.n(V),R=a(43),H=a(42);R.a.use(H.a).use(h.a).init({lng:"pt",fallbackLng:"pt",whitelist:["pt","en","es","fr"],debug:!1,react:{useSuspense:!1},backend:{loadPath:"./JSON/i18n/{{lng}}.json?timestamp="+(new Date).getTime(),crossDomain:!0}});var q=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(T.a)(this,Object(A.a)(t).call(this,e))).usernameInput=void 0,a.hideInputMsg=function(e){return"signin-error-input"+(e?" hide":"")},a.handleChangeInput=function(e){a.setState(Object(I.a)({},e.target.name,e.target.value))},a.handleUserInput=function(e){e.target.value||a.setState({hideUserMsg:"blur"!==e.type})},a.handlePwdInput=function(e){e.target.value||a.setState({hidePwdMsg:"blur"!==e.type})},a.handleSubmit=function(e){var t,n,c,o,r,l;return s.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(e.preventDefault(),t=p(),n=Object(m.a)(t,2),c=n[1],a.state.username&&a.state.password){i.next=6;break}a.setState({hideUserMsg:!!a.state.username,hidePwdMsg:!!a.state.password}),i.next=24;break;case 6:return i.next=8,s.a.awrap(L.signIn(a.state.username,a.state.password));case 8:if(o=i.sent,r=a.props.t,a.setState({authError:!1,authHttpCode:-1}),!o.ok){i.next=20;break}return a.setState({authSuccess:!0}),i.t0=c,i.next=16,s.a.awrap(o.json());case 16:i.t1=i.sent,i.t0.setAuthUser.call(i.t0,i.t1),i.next=24;break;case 20:400!==(l=o.status)&&500!==l&&console.log(r("key_416")+" - "+l),a.usernameInput.current.focus(),a.setState({password:"",hidePwdMsg:!0,authError:!0,authHttpCode:l});case 24:case"end":return i.stop()}}))},a.state={username:"",password:"",hideUserMsg:!0,hidePwdMsg:!0,authSuccess:!1,authError:!1,authHttpCode:-1},a.usernameInput=o.a.createRef(),a}return Object(D.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){this.usernameInput.current.focus()}},{key:"render",value:function(){var e=F()("famo-input signin-form-input famo-text-3",{"famo-input-error":!this.state.hideUserMsg}),t=F()("famo-input signin-form-input famo-text-3",{"famo-input-error":!this.state.hidePwdMsg}),a=F()("signin-error-submit",{hide:!this.state.authError}),n=this.props,s=n.t,c=n.location;return this.state.authSuccess?o.a.createElement(i.a,{to:c.state||{from:{pathname:"/"}}}):o.a.createElement("section",{className:"famo-grid signin"},o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell"},o.a.createElement("div",{className:"signin-body"},o.a.createElement("div",{className:"signin-famo-logo"},o.a.createElement("img",{src:"http://www.famo-code.com/Content/Images/logo-famo-black-normal.png",alt:"FAMO"})),o.a.createElement("div",{className:"signin-form"},o.a.createElement("div",{className:"signin-app-name"},o.a.createElement("span",{className:"famo-text-2"},"PDA")),o.a.createElement("form",{id:"signin-form",method:"POST",onSubmit:this.handleSubmit},o.a.createElement("div",{className:"signin-input-wrapper"},o.a.createElement("input",{type:"text",id:"signin-username-input",className:e,placeholder:s("key_397"),ref:this.usernameInput,name:"username",value:this.state.username,autoComplete:"off",onChange:this.handleChangeInput,onFocus:this.handleUserInput,onBlur:this.handleUserInput}),o.a.createElement(G,{msgClass:this.hideInputMsg(this.state.hideUserMsg),msgText:s("key_196")})),o.a.createElement("div",{className:"signin-input-wrapper"},o.a.createElement("input",{type:"password",id:"signin-password-input",className:t,placeholder:s("key_314"),name:"password",value:this.state.password,onChange:this.handleChangeInput,onFocus:this.handlePwdInput,onBlur:this.handlePwdInput}),o.a.createElement(G,{msgClass:this.hideInputMsg(this.state.hidePwdMsg),msgText:s("key_195")})),o.a.createElement("div",{className:a},this.state.authError&&400===this.state.authHttpCode&&o.a.createElement("span",{className:"famo-text-7"},s("key_398")),this.state.authError&&500===this.state.authHttpCode&&o.a.createElement("span",{className:"famo-text-7"},s("key_306"))),o.a.createElement("button",{className:"famo-button famo-confirm-button signin-button-submit",type:"submit"},o.a.createElement("span",{className:"famo-text-5"},s("key_238"))),o.a.createElement("button",{type:"button",className:"famo-button famo-transparent-button signup-button"},o.a.createElement("span",{className:"famo-text-27"},s("key_648")))))))),o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell famo-cell-bottom"},o.a.createElement("div",{className:"signin-footer text-center"},o.a.createElement("span",{className:"famo-text-1"},(new Date).getFullYear()," \xa9 FAMO - ","PDA")))))}}]),t}(o.a.Component),G=function(e){function t(){return Object(P.a)(this,t),Object(T.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this.props,t=e.msgClass,a=e.msgText;return o.a.createElement("div",{className:t},o.a.createElement("span",{className:"famo-text-7"},a))}}]),t}(o.a.Component),B=(Object(h.b)()(q),a(17));a(64);function J(e){var t=e.t,a=p(),n=Object(m.a)(a,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){fetch(O+"Authentication/Session/User",{method:"GET",credentials:"include"}).then((function(e){e.ok&&e.status===g.a.OK?e.json().then((function(e){M(e,r,t)})).catch((function(e){U(r,t),j(e)})):(U(r,t),k(e))})).catch((function(e){U(r,t),j(e)}))}),[]),o.a.createElement("section",{className:"famo-body"},o.a.createElement("div",{className:"pda-app-loader"+(s.authUser&&!s.loadPage?" hide":"")},o.a.createElement("div",{className:"famo-loader"})),o.a.createElement(i.d,null,o.a.createElement(i.b,{exact:!0,path:"/"},o.a.createElement(b,null)),o.a.createElement(i.b,{path:"/Inventory"},o.a.createElement(S,null))))}var K=Object(h.b)()((function(e){return window.cordova?o.a.createElement(B.b,null,o.a.createElement(J,e)):o.a.createElement(B.a,null,o.a.createElement(J,e))}));function Y(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:try{l.a.render(o.a.createElement(K,null),document.getElementById("root"))}catch(t){alert("Oops!! Liga o servidor Node.js!")}case 1:case"end":return e.stop()}}))}window.cordova?document.addEventListener("deviceready",Y,!1):Y()}},[[45,1,2]]]);