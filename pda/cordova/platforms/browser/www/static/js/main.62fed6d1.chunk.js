(this["webpackJsonppda-client"]=this["webpackJsonppda-client"]||[]).push([[0],{42:function(e,t,a){e.exports=a(62)},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(5),s=a.n(n),r=a(17),c=a(0),o=a.n(c),i=a(32),m=a.n(i),l=(a(33),a(1)),u=a(18),p=a(9),d=a(34);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E={setAuthUser:function(e,t){e.setState(h({},e.state,{authUser:t}))},setLoadPage:function(e,t){e.setState(h({},e.state,{loadPage:t}))}},b=Object(d.a)(o.a,{authUser:null,loadPage:!0},E),g=a(11);var v=Object(u.g)(Object(g.b)()((function(){var e=b(),t=Object(l.a)(e,2)[1],a=Object(c.useState)(!1),n=Object(l.a)(a,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){t.setLoadPage(!1)}),[]),s?o.a.createElement(u.a,{to:"/Inventory"}):o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"famo-wrapper"},o.a.createElement("div",{className:"famo-content"},o.a.createElement("div",{className:"famo-grid"},o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell text-center"},o.a.createElement("button",{type:"button",className:"famo-button famo-normal-button",onClick:function(e){r(!0)}},o.a.createElement("span",{className:"famo-text-5"},"Invent\xe1rio"))))))))}))),N=a(21),y=a.n(N),O="pda",w="http://cpu-244.famo.pt:3030/";function j(e){fetch(w+"Log/Http/Errors?appName="+O+"&timestamp="+(new Date).getTime(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:e.status,statusText:e.statusText,url:e.url}),credentials:"include"}).then((function(){})).catch((function(){}))}function k(e){fetch(w+"Log/Promise/Errors?appName="+O+"&timestamp="+(new Date).getTime(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e.message,stack:e.stack,request:e.request?{method:e.request.method,path:e.request.path}:null,response:e.response?{status:e.response.status}:null}),credentials:"include"}).then((function(){})).catch((function(){}))}var x=Object(u.g)(Object(g.b)()((function(e){var t=e.t,a=Object(c.useState)(""),n=Object(l.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)([]),m=Object(l.a)(i,2),u=m[0],p=m[1],d=Object(c.useState)(),f=Object(l.a)(d,2),h=f[0],E=f[1],g=b(),v=Object(l.a)(g,2),N=v[0],O=v[1];function x(){window.cordova.plugins.barcodeScanner.scan((function(e){if(!e.cancelled){var a=e.text.split("/"),n=a[0],r="";a.length>1&&(r=a[1]),fetch(w+"ERP/Inventories/Products?productCode="+n+"&productVariantCode="+r+"&inventoryCode="+s+"&timestamp="+(new Date).getTime(),{method:"GET",credentials:"include"}).then((function(e){e.ok&&e.status===y.a.OK?e.json().then((function(e){E(e)})).catch((function(e){alert(t("key_416")),k(e)})):(alert(t("O c\xf3digo de barras n\xe3o corresponde a um produto do invent\xe1rio.")),j(e))})).catch((function(e){alert(t("key_416")),k(e)}))}}),(function(e){alert(t("key_686"))}),{preferFrontCamera:!1,showFlipCameraButton:!1,showTorchButton:!0,torchOn:!1,saveHistory:!1,prompt:"",resultDisplayDuration:0,formats:"CODE_39",orientation:"unset",disableAnimations:!0,disableSuccessBeep:!1,continuousMode:!1})}return Object(c.useEffect)((function(){N.authUser&&fetch(w+"ERP/Inventories?timestamp="+(new Date).getTime(),{method:"GET",credentials:"include"}).then((function(e){e.ok&&e.status===y.a.OK?e.json().then((function(e){p(e),O.setLoadPage(!1)})).catch((function(e){alert(t("key_416")),k(e)})):(alert(t("key_303")),j(e))})).catch((function(e){alert(t("key_416")),k(e)}))}),[N.authUser]),Object(c.useEffect)((function(){""!==s&&x()}),[s]),o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"famo-wrapper"},o.a.createElement("div",{className:"famo-content"},o.a.createElement("form",{action:"javascript:void(0)",className:"famo-grid famo-form-grid",noValidate:!0},o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell famo-input-label"},o.a.createElement("span",{className:"famo-text-11"},"Invent\xe1rio")),o.a.createElement("div",{className:"famo-cell"},o.a.createElement("select",{className:"famo-input famo-text-10",name:"inventoryCode",onChange:function(e){r(e.target.value)}},o.a.createElement("option",{key:""}),u.map((function(e){return o.a.createElement("option",{value:e.Code},e.Name)})))))))),h?o.a.createElement("section",{className:"famo-wrapper"},o.a.createElement("div",{className:"famo-title"},o.a.createElement("span",{className:"famo-text-13"},t("key_339"))),o.a.createElement("div",{className:"famo-content"},o.a.createElement("form",{action:"javascript:void(0)",className:"famo-grid famo-form-grid",noValidate:!0},o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell famo-input-label"},o.a.createElement("span",{className:"famo-text-11"},t("key_87"))),o.a.createElement("div",{className:"famo-cell"},o.a.createElement("input",{type:"text",className:"famo-input famo-text-10",name:"productCode",disabled:!0,value:h.ProductCode}))),o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell famo-input-label"},o.a.createElement("span",{className:"famo-text-11"},t("key_464"))),o.a.createElement("div",{className:"famo-cell"},o.a.createElement("input",{type:"text",className:"famo-input famo-text-10",name:"productVariantCode",disabled:!0,value:h.ProductVariantCode}))),o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell famo-input-label"},o.a.createElement("span",{className:"famo-text-11"},t("key_138"))),o.a.createElement("div",{className:"famo-cell"},o.a.createElement("input",{type:"text",className:"famo-input famo-text-10",name:"productDescription",disabled:!0,value:h.ProductDescription}))),o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell famo-input-label"},o.a.createElement("span",{className:"famo-text-11"},t("key_751"))),o.a.createElement("div",{className:"famo-cell"},o.a.createElement("input",{type:"text",className:"famo-input famo-text-10",name:"locationCode",disabled:!0,value:h.LocationCode}))),o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell famo-input-label"},o.a.createElement("span",{className:"famo-text-11"},t("key_347"))),o.a.createElement("div",{className:"famo-cell"},o.a.createElement("input",{type:"text",className:"famo-input famo-text-10",name:"quantity","data-sub-type":"number"}),o.a.createElement("div",{className:"famo-input-message hide"},o.a.createElement("span",{className:"famo-text-15"},t("key_13")))))))):null,s?o.a.createElement("section",{className:"famo-wrapper"},o.a.createElement("div",{className:"famo-grid"},o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell text-right"},o.a.createElement("button",{type:"button",className:"famo-button famo-normal-button",onClick:function(e){x()}},o.a.createElement("span",{className:"famo-text-12"},t("key_681"))))))):null)}))),S=a(3),C=a(4),P=a(14),I=a(19),_=a(20);function T(e,t){D.autoSignIn().then((function(a){a.ok&&a.status===y.a.OK?a.json().then((function(t){e.setAuthUser(t)})).catch((function(e){alert(t("key_416")),k(e)})):(alert(t("key_306")),j(a))})).catch((function(e){alert(t("key_416")),k(e)}))}var D=function e(){Object(S.a)(this,e)};D.signIn=function(){var e=Object(r.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(w+"Authentication/SignIn",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:a}),credentials:"include"}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),D.autoSignIn=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(w+"Authentication/AutoSignIn?timestamp="+(new Date).getTime(),{method:"GET",credentials:"include"}));case 1:case"end":return e.stop()}}),e)}))),D.signOut=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(w+"Authentication/SignOut",{method:"GET",credentials:"include"}));case 1:case"end":return e.stop()}}),e)})));var M=a(26),U=a.n(M),A=a(41),F=a(40);A.a.use(F.a).use(g.a).init({lng:"pt",fallbackLng:"pt",whitelist:["pt","en","es","fr"],debug:!1,react:{useSuspense:!1},backend:{loadPath:"./JSON/i18n/{{lng}}.json?timestamp="+(new Date).getTime(),crossDomain:!0}});var L=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(P.a)(this,Object(I.a)(t).call(this,e))).usernameInput=void 0,a.hideInputMsg=function(e){return"signin-error-input"+(e?" hide":"")},a.handleChangeInput=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.handleUserInput=function(e){e.target.value||a.setState({hideUserMsg:"blur"!==e.type})},a.handlePwdInput=function(e){e.target.value||a.setState({hidePwdMsg:"blur"!==e.type})},a.handleSubmit=function(){var e=Object(r.a)(s.a.mark((function e(t){var n,r,c,o,i,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=b(),r=Object(l.a)(n,2),c=r[1],a.state.username&&a.state.password){e.next=6;break}a.setState({hideUserMsg:!!a.state.username,hidePwdMsg:!!a.state.password}),e.next=24;break;case 6:return e.next=8,D.signIn(a.state.username,a.state.password);case 8:if(o=e.sent,i=a.props.t,a.setState({authError:!1,authHttpCode:-1}),!o.ok){e.next=20;break}return a.setState({authSuccess:!0}),e.t0=c,e.next=16,o.json();case 16:e.t1=e.sent,e.t0.setAuthUser.call(e.t0,e.t1),e.next=24;break;case 20:400!==(m=o.status)&&500!==m&&console.log(i("key_416")+" - "+m),a.usernameInput.current.focus(),a.setState({password:"",hidePwdMsg:!0,authError:!0,authHttpCode:m});case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={username:"",password:"",hideUserMsg:!0,hidePwdMsg:!0,authSuccess:!1,authError:!1,authHttpCode:-1},a.usernameInput=o.a.createRef(),a}return Object(_.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.usernameInput.current.focus()}},{key:"render",value:function(){var e=U()("famo-input signin-form-input famo-text-3",{"famo-input-error":!this.state.hideUserMsg}),t=U()("famo-input signin-form-input famo-text-3",{"famo-input-error":!this.state.hidePwdMsg}),a=U()("signin-error-submit",{hide:!this.state.authError}),n=this.props,s=n.t,r=n.location;return this.state.authSuccess?o.a.createElement(u.a,{to:r.state||{from:{pathname:"/"}}}):o.a.createElement("section",{className:"famo-grid signin"},o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell"},o.a.createElement("div",{className:"signin-body"},o.a.createElement("div",{className:"signin-famo-logo"},o.a.createElement("img",{src:"http://www.famo-code.com/Content/Images/logo-famo-black-normal.png",alt:"FAMO"})),o.a.createElement("div",{className:"signin-form"},o.a.createElement("div",{className:"signin-app-name"},o.a.createElement("span",{className:"famo-text-2"},"PDA")),o.a.createElement("form",{id:"signin-form",method:"POST",onSubmit:this.handleSubmit},o.a.createElement("div",{className:"signin-input-wrapper"},o.a.createElement("input",{type:"text",id:"signin-username-input",className:e,placeholder:s("key_397"),ref:this.usernameInput,name:"username",value:this.state.username,autoComplete:"off",onChange:this.handleChangeInput,onFocus:this.handleUserInput,onBlur:this.handleUserInput}),o.a.createElement(H,{msgClass:this.hideInputMsg(this.state.hideUserMsg),msgText:s("key_196")})),o.a.createElement("div",{className:"signin-input-wrapper"},o.a.createElement("input",{type:"password",id:"signin-password-input",className:t,placeholder:s("key_314"),name:"password",value:this.state.password,onChange:this.handleChangeInput,onFocus:this.handlePwdInput,onBlur:this.handlePwdInput}),o.a.createElement(H,{msgClass:this.hideInputMsg(this.state.hidePwdMsg),msgText:s("key_195")})),o.a.createElement("div",{className:a},this.state.authError&&400===this.state.authHttpCode&&o.a.createElement("span",{className:"famo-text-7"},s("key_398")),this.state.authError&&500===this.state.authHttpCode&&o.a.createElement("span",{className:"famo-text-7"},s("key_306"))),o.a.createElement("button",{className:"famo-button famo-confirm-button signin-button-submit",type:"submit"},o.a.createElement("span",{className:"famo-text-5"},s("key_238"))),o.a.createElement("button",{type:"button",className:"famo-button famo-transparent-button signup-button"},o.a.createElement("span",{className:"famo-text-27"},s("key_648")))))))),o.a.createElement("div",{className:"famo-row"},o.a.createElement("div",{className:"famo-cell famo-cell-bottom"},o.a.createElement("div",{className:"signin-footer text-center"},o.a.createElement("span",{className:"famo-text-1"},(new Date).getFullYear()," \xa9 FAMO - ","PDA")))))}}]),t}(o.a.Component),H=function(e){function t(){return Object(S.a)(this,t),Object(P.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props,t=e.msgClass,a=e.msgText;return o.a.createElement("div",{className:t},o.a.createElement("span",{className:"famo-text-7"},a))}}]),t}(o.a.Component),B=(Object(g.b)()(L),a(22));a(61);function J(e){var t=e.t,a=b(),n=Object(l.a)(a,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){fetch(w+"Authentication/Session/User",{method:"GET",credentials:"include"}).then((function(e){e.ok&&e.status===y.a.OK?e.json().then((function(e){r.setAuthUser(e)})).catch((function(e){T(r,t),k(e)})):(T(r,t),j(e))})).catch((function(e){T(r,t),k(e)}))}),[]),o.a.createElement("section",{className:"famo-body"},o.a.createElement("div",{className:"pda-app-loader"+(s.authUser&&!s.loadPage?" hide":"")},o.a.createElement("div",{className:"famo-loader"})),o.a.createElement(u.d,null,o.a.createElement(u.b,{exact:!0,path:"/"},o.a.createElement(v,null)),o.a.createElement(u.b,{path:"/Inventory"},o.a.createElement(x,null))))}var q=Object(g.b)()((function(e){return window.cordova?o.a.createElement(B.b,null,o.a.createElement(J,e)):o.a.createElement(B.a,null,o.a.createElement(J,e))}));function G(){return V.apply(this,arguments)}function V(){return(V=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{m.a.render(o.a.createElement(q,null),document.getElementById("root"))}catch(t){alert("Oops!! Liga o servidor Node.js!")}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.cordova?document.addEventListener("deviceready",G,!1):G()}},[[42,1,2]]]);