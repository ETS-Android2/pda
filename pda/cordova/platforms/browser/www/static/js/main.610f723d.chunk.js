(this["webpackJsonppda-client"]=this["webpackJsonppda-client"]||[]).push([[0],{47:function(e,t,a){e.exports=a(78)},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a.n(n),o=a(0),l=a.n(o),r=a(35),s=a.n(r),i=(a(46),a(1)),m=a(16),u=a(2),f="pda",d="http://dionisio.famo.pt:3030/",p=a(19),b=a(13),E=a(18),h="SS_PALLET",v=function(){function e(){Object(b.a)(this,e)}return Object(E.a)(e,null,[{key:"clear",value:function(e){e?e.pallet||window.sessionStorage.removeItem(h):window.sessionStorage.clear()}}]),e}(),N=a(5);var y=Object(p.g)(Object(N.c)()((function(e){var t=e.t,a=Object(o.useState)({inventory:!1,pallet:!1}),n=Object(i.a)(a,2),c=n[0],r=n[1],s=[{label:t("key_806"),key:"inventory",image:"btn-inventario.png"},{label:t("key_826"),key:"pallet",image:"btn-palete.png"}];return Object(o.useEffect)((function(){v.clear()}),[]),c.inventory?l.a.createElement(p.a,{push:!0,to:"/Inventory"}):c.pallet?l.a.createElement(p.a,{push:!0,to:"/Pallet"}):l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row",style:{justifyContent:"center"}},s.map((function(e,t){return l.a.createElement("div",{key:t,className:"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"},l.a.createElement("section",{className:"famo-wrapper",onClick:function(t){return r((function(t){return Object(u.a)({},t,Object(m.a)({},e.key,!0))}))}},l.a.createElement("div",{className:"famo-content"},l.a.createElement("div",{className:"famo-grid famo-sidebar-main-item"},l.a.createElement("div",{className:"famo-row"},l.a.createElement("div",{className:"famo-cell famo-sidebar-item-label text-center"},l.a.createElement("span",{className:"famo-text-19",title:e.label},e.label))),l.a.createElement("div",{className:"famo-row"},l.a.createElement("div",{className:"famo-cell famo-sidebar-item-img text-center"},l.a.createElement("img",{src:d+"Images/"+e.image,alt:e.label})))))))}))))}))),g=a(3),O=a.n(g),k=a(15),w=a.n(k);function j(e){return e?e.toString().replace(new RegExp("\\"+w.a.localeData().delimiters.thousands,"g"),"").replace(new RegExp("\\"+w.a.localeData().delimiters.decimal,"g"),"."):e}window.numeral=w.a;var x,C=function(){function e(){Object(b.a)(this,e)}return Object(E.a)(e,null,[{key:"analyze",value:function(e,t){e.forEach((function(e,a){e.isDisabled||t[a]((function(e){return Object(u.a)({},e,{analyze:!0})}))}))}},{key:"areAllAnalyzed",value:function(e){return!e.filter((function(e){return!e.isDisabled})).some((function(e){return!e.analyzeForm}))}},{key:"areAllValid",value:function(e){return!e.filter((function(e){return!e.isDisabled})).some((function(e){return e.noData||e.wrongFormat||e.invalidValue}))}},{key:"getValue",value:function(e){return e.isNumber?parseFloat(j(e.value)):e.value}},{key:"popUpAlerts",value:function(e,t){e.some((function(e){return e.noData}))&&_.noDataAlert(t),e.some((function(e){return e.wrongFormat}))&&_.wrongFormatAlert(e.filter((function(e){return e.wrongFormat})).map((function(e){return e.label})),t),e.some((function(e){return e.invalidValue}))&&_.invalidValuesAlert(e.filter((function(e){return e.invalidValue})).map((function(e){return e.label})),t)}},{key:"resetValues",value:function(e,t){e.forEach((function(e,a){e.isDisabled||t[a]((function(e){return Object(u.a)({},e,{value:"",noData:!1,wrongFormat:!1,invalidValue:!1,analyze:!1,analyzeForm:!1})}))}))}},{key:"resetValidations",value:function(e,t){e.forEach((function(e,a){e.isDisabled||t[a]((function(e){return Object(u.a)({},e,{analyze:!1,analyzeForm:!1})}))}))}}]),e}(),_=function(){function e(){Object(b.a)(this,e)}return Object(E.a)(e,null,[{key:"invalidValuesAlert",value:function(e,t){for(var a=t("key_192"),n=0,c=e.length;n<c;n++)a+=e[n],n<c-2?a+=", ":n===c-2&&(a+=" "+t("key_573")+" ");alert(a)}},{key:"noDataAlert",value:function(e){alert(e("key_197"))}},{key:"wrongFormatAlert",value:function(e,t){for(var a=t("key_191"),n=0,c=e.length;n<c;n++)a+=e[n],n<c-2?a+=", ":n===c-2&&(a+=" "+t("key_573")+" ");alert(a)}}]),e}(),S=function(e){var t=Object(N.b)().t,a=e.className,n=e.isDisabled,r=e.isNumber,s=e.name,m=e.value,f=e.noData,d=e.wrongFormat,p=e.invalidValue,b=e.invalidMessage,E=e.analyze,h=e.set,v=e.children,y=Object(o.useState)({noData:!1,wrongFormat:!1,invalidValue:!1}),g=Object(i.a)(y,2),O=g[0],k=g[1],x=l.a.Children.count(v)>0,C=l.a.createRef();return Object(o.useEffect)((function(){if(!n&&E){var e=m;h((function(e){return Object(u.a)({},e,{noData:!1,wrongFormat:!1,invalidValue:!1})})),e?r&&e&&(e=j(e),isNaN(e)?h((function(e){return Object(u.a)({},e,{noData:!1,wrongFormat:!0,invalidValue:!1})})):parseFloat(e)<=0&&h((function(e){return Object(u.a)({},e,{noData:!1,wrongFormat:!1,invalidValue:!0})}))):h((function(e){return Object(u.a)({},e,{noData:!0,wrongFormat:!1,invalidValue:!1})})),h((function(e){return Object(u.a)({},e,{analyzeForm:!0})}))}}),[E]),Object(o.useEffect)((function(){k({noData:f,wrongFormat:d,invalidValue:p})}),[f,d,p]),l.a.createElement(l.a.Fragment,null,x?l.a.createElement("select",{className:a+(O.noData?" famo-input-error":""),name:s,ref:C,disabled:n,onChange:function(e){return h((function(e){return Object(u.a)({},e,{value:C.current.value})}))}},v):l.a.createElement("input",{type:"text",className:a+(O.noData?" famo-input-error":O.wrongFormat||O.invalidValue?" famo-input-warning":""),name:s,value:m,ref:C,disabled:n,onKeyDown:function(e){r&&function(e,t){var a,n;c.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:a=t.current.selectionStart,n=t.current.value,110===e.keyCode&&(e.preventDefault(),t.current.value=n.substr(0,a)+w.a.localeData().delimiters.decimal+n.substr(a,n.length-1));case 2:case"end":return c.stop()}}))}(e,C)},onChange:function(e){return h((function(e){return Object(u.a)({},e,{value:C.current.value})}))}}),!x&&l.a.createElement(l.a.Fragment,null,!n&&l.a.createElement("div",{className:"famo-input-message"+(O.wrongFormat?"":" hide")},l.a.createElement("span",{className:"famo-text-15"},t("key_808"))),b&&!n&&l.a.createElement("div",{className:"famo-input-message"+(O.invalidValue?"":" hide")},l.a.createElement("span",{className:"famo-text-15"},b))))};!function(e){e[e.inventoryProduct=1]="inventoryProduct",e[e.palletBox=2]="palletBox"}(x||(x={}));var D=Object(N.c)()((function(e){var t=e.contentType,a=e.visible,n=e.setVisible,c=e.confirm,r=e.t,s=Object(o.useState)(a),m=Object(i.a)(s,2),u=m[0],f=m[1],d=Object(o.useState)({className:"famo-input famo-text-10",isDisabled:!1,isNumber:!1,label:r("key_87"),name:"productCode",value:"",noData:!1,analyze:!1,analyzeForm:!1}),p=Object(i.a)(d,2),b=p[0],E=p[1],h=Object(o.useState)({className:"famo-input famo-text-10",isDisabled:!1,isNumber:!1,label:r("key_819"),name:"boxCode",value:"",noData:!1,analyze:!1,analyzeForm:!1}),v=Object(i.a)(h,2),N=v[0],y=v[1],g=function(){switch(t){case x.inventoryProduct:return[b];case x.palletBox:return[N]}}(),O=function(){switch(t){case x.inventoryProduct:return[E];case x.palletBox:return[y]}}();function k(){switch(t){case x.inventoryProduct:case x.palletBox:C.analyze(g,O)}}function w(e){e.preventDefault(),k()}return Object(o.useEffect)((function(){f(a),a||C.resetValues(g,O)}),[a]),Object(o.useEffect)((function(){if(C.areAllAnalyzed(g)){if(C.areAllValid(g))switch(t){case x.inventoryProduct:c(g[0].value),n(!1);break;case x.palletBox:c(g[0].value),C.resetValues(g,O)}C.resetValidations(g,O)}}),g),l.a.createElement("section",{className:"w3-modal famo-modal"+(u?" w3-show":""),onClick:function(e){return n(!1)}},l.a.createElement("div",{className:"w3-modal-content famo-modal-content",onClick:function(e){return e.stopPropagation()}},function(){switch(t){case x.inventoryProduct:case x.palletBox:return l.a.createElement("section",{className:"famo-wrapper"},l.a.createElement("div",{className:"famo-content"},l.a.createElement("form",{className:"famo-grid famo-form-grid famo-submit-form",noValidate:!0,onSubmit:w},l.a.createElement("div",{className:"famo-row"},l.a.createElement("div",{className:"famo-cell famo-input-label"},l.a.createElement("span",{className:"famo-text-11"},g[0].label)),l.a.createElement("div",{className:"famo-cell"},l.a.createElement(S,Object.assign({},g[0],{set:O[0]})))),l.a.createElement("input",{type:"submit",className:"hide",value:""})),l.a.createElement("div",{className:"famo-grid famo-buttons"},l.a.createElement("div",{className:"famo-row"},l.a.createElement("div",{className:"famo-cell text-right"},l.a.createElement("button",{type:"button",className:"famo-button famo-confirm-button",onClick:function(e){return k()}},l.a.createElement("span",{className:"famo-text-12"},r("key_701"))),l.a.createElement("button",{type:"button",className:"famo-button famo-cancel-button",onClick:function(e){return n(!1)}},l.a.createElement("span",{className:"famo-text-12"},r("key_484"))))))))}}()),l.a.createElement("div",{className:"famo-buttons"},l.a.createElement("button",{type:"button",className:"famo-button famo-icon-button",title:r("key_200"),onClick:function(e){e.stopPropagation(),n(!1)}},l.a.createElement("span",{className:"fas fa-times"}))))}));var P=function(e){var t=e.text,a=Object(o.useState)(!1),n=Object(i.a)(a,2),c=n[0],r=n[1];return l.a.createElement("div",{className:"famo-title"+(c?" collapsed":"")},l.a.createElement("span",{className:"famo-text-13",onClick:function(e){r(!c)}},t))};function A(e,t){function a(e){e.preventDefault(),document.removeEventListener("backbutton",a,!1)}document.addEventListener("backbutton",a,!1),window.cordova.plugins.barcodeScanner.scan((function(t){t.cancelled||(e(t),document.removeEventListener("backbutton",a,!1))}),(function(e){alert(t("key_686"))}),{preferFrontCamera:!1,showFlipCameraButton:!1,showTorchButton:!0,torchOn:!1,saveHistory:!1,prompt:"",resultDisplayDuration:0,formats:"CODE_39,CODE_128",orientation:"unset",disableAnimations:!0,disableSuccessBeep:!1,continuousMode:!1})}function F(e){var t=e.hide;return l.a.createElement("div",{className:"pda-app-loader"+(t?" hide":"")},l.a.createElement("div",{className:"famo-loader"}))}function I(e){var t=e.hide;return l.a.createElement("div",{className:"famo-loader-wrapper"+(t?" hide":"")},l.a.createElement("div",{className:"famo-loader"}))}function T(e){var t="?timestamp="+(new Date).getTime();for(var a in e){var n=e[a];if(Array.isArray(n))for(var c=0,o=n.length;c<o;c++)t+="&"+a+"="+(null===n[c]?"":encodeURIComponent(n[c]));else t+="&"+a+"="+(null===n?"":encodeURIComponent(n))}return t}function V(e,t){var a=document.createElement("script");a.async=!0,a.src=e,a.type="text/javascript",t.current.appendChild(a)}function U(e){fetch(d+"Log/Http/Errors?appName="+f+"&timestamp="+(new Date).getTime(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:e.status,statusText:e.statusText,url:e.url}),credentials:"include"}).then((function(){})).catch((function(){}))}function R(e){fetch(d+"Log/Promise/Errors?appName="+f+"&timestamp="+(new Date).getTime(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e.message,stack:e.stack,request:e.request?{method:e.request.method,path:e.request.path}:null,response:e.response?{status:e.response.status}:null}),credentials:"include"}).then((function(){})).catch((function(){}))}var M=a(41),z={setAndroidApp:function(e,t){e.setState(Object(u.a)({},e.state,{androidApp:t}))},setAuthUser:function(e,t){e.setState(Object(u.a)({},e.state,{authUser:t}))},setLoadPage:function(e,t){e.setState(Object(u.a)({},e.state,{loadPage:t}))}},L=Object(M.a)(l.a,{androidApp:!1,authUser:null,loadPage:!1},z);var B=Object(p.g)(Object(N.c)()((function(e){var t=e.t,a=L(),n=Object(i.a)(a,2),c=n[0],r=n[1],s=Object(o.useState)({className:"famo-input famo-text-10",isDisabled:!1,isNumber:!1,label:t("key_806"),name:"inventoryCode",value:""}),m=Object(i.a)(s,2),f=m[0],p=m[1],b=Object(o.useState)([]),E=Object(i.a)(b,2),h=E[0],N=E[1],y=Object(o.useState)(!1),g=Object(i.a)(y,2),k=g[0],w=g[1],j=Object(o.useState)(!1),_=Object(i.a)(j,2),F=_[0],M=_[1],z=Object(o.useState)(null),B=Object(i.a)(z,2),K=B[0],G=B[1],J=Object(o.useState)({className:"famo-input famo-text-10",isDisabled:!0,isNumber:!1,label:t("key_87"),name:"productCode",value:""}),H=Object(i.a)(J,2),q=H[0],Y=H[1],Q=Object(o.useState)({className:"famo-input famo-text-10",isDisabled:!0,isNumber:!1,label:t("key_464"),name:"productVariantCode",value:""}),W=Object(i.a)(Q,2),X=W[0],Z=W[1],$=Object(o.useState)({className:"famo-input famo-text-10",isDisabled:!0,isNumber:!1,label:t("key_138"),name:"productDescription",value:""}),ee=Object(i.a)($,2),te=ee[0],ae=ee[1],ne=Object(o.useState)({className:"famo-input famo-text-10",isDisabled:!0,isNumber:!1,label:t("key_751"),name:"locationCode",value:""}),ce=Object(i.a)(ne,2),oe=ce[0],le=ce[1],re=Object(o.useState)({className:"famo-input famo-text-10",isDisabled:!1,isNumber:!0,label:t("key_347"),name:"quantity",value:"",noData:!1,wrongFormat:!1,invalidValue:!1,invalidMessage:t("key_13"),analyze:!1,analyzeForm:!1}),se=Object(i.a)(re,2),ie=se[0],me=se[1],ue=[q,X,te,oe,ie],fe=[Y,Z,ae,le,me],de=l.a.createRef();function pe(e){var a=e.split("/"),n=a[0],c="";a.length>1&&(c=a[1]),M(!0),be(),fetch(d+"ERP/Inventories/Products"+T({inventoryCode:f.value,productCode:n,productVariantCode:c}),{method:"GET",credentials:"include"}).then((function(e){e.ok&&e.status===O.a.OK?e.json().then((function(e){G(e),Y((function(t){return Object(u.a)({},t,{value:e.ProductCode})})),Z((function(t){return Object(u.a)({},t,{value:e.ProductVariantCode})})),ae((function(t){return Object(u.a)({},t,{value:e.ProductDescription})})),le((function(t){return Object(u.a)({},t,{value:e.LocationCode})}))})).catch((function(e){R(e),alert(t("key_416"))})):(U(e),alert(e.status===O.a.NOT_FOUND?t("key_809"):t("key_303")))})).catch((function(e){R(e),alert(t("key_416"))})).finally((function(){M(!1)}))}function be(){G(null),C.resetValues(ue,fe)}return Object(o.useEffect)((function(){c.authUser&&fetch(d+"ERP/Inventories?timestamp="+(new Date).getTime(),{method:"GET",credentials:"include"}).then((function(e){e.ok&&e.status===O.a.OK?e.json().then((function(e){N(e)})).catch((function(e){R(e),alert(t("key_416"))})):(U(e),alert(t("key_303")))})).catch((function(e){R(e),alert(t("key_416"))})).finally((function(){r.setLoadPage(!1)}))}),[c.authUser]),Object(o.useEffect)((function(){r.setLoadPage(!0),1===Object.keys(window.numeral.locales).length&&(V("http://www.famo-code.com/Scripts/numeral/locales/pt-pt.js?version=27",de),V("http://www.famo-code.com/Scripts/numeral/locales/es-es.js?version=27",de),V("http://www.famo-code.com/Scripts/numeral/locales/fr.js?version=27",de)),v.clear()}),[]),Object(o.useEffect)((function(){be()}),[f]),Object(o.useEffect)((function(){C.areAllAnalyzed(ue)&&(C.areAllValid(ue)?(M(!0),fetch(d+"ERP/Inventories/Products"+T({documentCode:K.Code,productCode:K.ProductCode,productVariantCode:K.ProductVariantCode,locationCode:K.LocationCode,quantity:C.getValue(ie)}),{method:"PATCH",credentials:"include"}).then((function(e){e.ok&&e.status===O.a.OK?(be(),alert(t("key_805"))):(U(e),alert(t("key_302")))})).catch((function(e){R(e),alert(t("key_416"))})).finally((function(){M(!1)}))):C.popUpAlerts(ue,t),C.resetValidations(ue,fe))}),ue),l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"famo-wrapper",ref:de},l.a.createElement("div",{className:"famo-content"},l.a.createElement("form",{className:"famo-grid famo-form-grid",noValidate:!0,onSubmit:function(e){return e.preventDefault()}},l.a.createElement("div",{className:"famo-row"},l.a.createElement("div",{className:"famo-cell famo-input-label"},l.a.createElement("span",{className:"famo-text-11"},f.label)),l.a.createElement("div",{className:"famo-cell"},l.a.createElement(S,Object.assign({},f,{isDisabled:F,set:p}),l.a.createElement("option",{key:""}),h.map((function(e,t){return l.a.createElement("option",{key:t,value:e.Code},e.Name)})))))))),(K||F)&&l.a.createElement("section",{className:"famo-wrapper"},l.a.createElement(P,{text:t("key_339")}),l.a.createElement("div",{className:"famo-content"},l.a.createElement(I,{hide:!F}),l.a.createElement("form",{className:"famo-grid famo-form-grid"+(F?" hide":""),noValidate:!0,onSubmit:function(e){return e.preventDefault()}},l.a.createElement("div",{className:"famo-row"},l.a.createElement("div",{className:"famo-cell famo-input-label"},l.a.createElement("span",{className:"famo-text-11"},q.label)),l.a.createElement("div",{className:"famo-cell"},l.a.createElement(S,q))),l.a.createElement("div",{className:"famo-row"},l.a.createElement("div",{className:"famo-cell famo-input-label"},l.a.createElement("span",{className:"famo-text-11"},X.label)),l.a.createElement("div",{className:"famo-cell"},l.a.createElement(S,X))),l.a.createElement("div",{className:"famo-row"},l.a.createElement("div",{className:"famo-cell famo-input-label"},l.a.createElement("span",{className:"famo-text-11"},te.label)),l.a.createElement("div",{className:"famo-cell"},l.a.createElement(S,te))),l.a.createElement("div",{className:"famo-row"},l.a.createElement("div",{className:"famo-cell famo-input-label"},l.a.createElement("span",{className:"famo-text-11"},oe.label)),l.a.createElement("div",{className:"famo-cell"},l.a.createElement(S,oe))),l.a.createElement("div",{className:"famo-row"},l.a.createElement("div",{className:"famo-cell famo-input-label"},l.a.createElement("span",{className:"famo-text-11"},ie.label)),l.a.createElement("div",{className:"famo-cell"},l.a.createElement(S,Object.assign({},ie,{set:me}))))),l.a.createElement("div",{className:"famo-grid famo-buttons"+(F?" hide":"")},l.a.createElement("div",{className:"famo-row"},l.a.createElement("div",{className:"famo-cell text-right"},l.a.createElement("button",{type:"button",className:"famo-button famo-confirm-button",onClick:function(e){C.analyze(ue,fe)}},l.a.createElement("span",{className:"famo-text-12"},t("key_810")))))))),f.value&&l.a.createElement("section",{className:"famo-wrapper"},l.a.createElement("div",{className:"famo-grid"},l.a.createElement("div",{className:"famo-row"},l.a.createElement("div",{className:"famo-cell text-right"},l.a.createElement("button",{type:"button",className:"famo-button famo-normal-button",disabled:F,onClick:function(e){return w(!0)}},l.a.createElement("span",{className:"famo-text-12"},t("key_807"))),c.androidApp&&l.a.createElement("button",{type:"button",className:"famo-button famo-normal-button",disabled:F,onClick:function(e){A((function(e){pe(e.text)}),t)}},l.a.createElement("span",{className:"famo-text-12"},t("key_681"))))))),l.a.createElement(D,{contentType:x.inventoryProduct,visible:k,setVisible:w,confirm:pe}))}))),K=a(45),G=a(42),J=a.n(G);function H(e){var t=Object(N.b)().t,a=e.history,n=L(),c=Object(i.a)(n,1)[0],r=window.sessionStorage.getItem(h),s=Object(o.useState)({className:"famo-input famo-text-10",isDisabled:!1,isNumber:!1,label:t("key_822"),name:"shipmentCode",value:r?JSON.parse(window.sessionStorage.getItem(h)).shipmentCode:""}),m=Object(i.a)(s,2),f=m[0],p=m[1],b=Object(o.useState)(!1),E=Object(i.a)(b,2),y=E[0],g=E[1],k=Object(o.useState)(null),w=Object(i.a)(k,2),j=w[0],x=w[1],C=[t("key_279")];function _(e){g(!0),x(null),fetch(d+"ERP/Pallets"+T({shipmentCode:e}),{method:"GET",credentials:"include"}).then((function(a){a.ok&&a.status===O.a.OK?a.json().then((function(t){p((function(t){return Object(u.a)({},t,{valueSubmit:e})})),x(t)})).catch((function(e){R(e),alert(t("key_416"))})):(U(a),alert(a.status===O.a.NOT_FOUND?t("key_825"):t("key_303")))})).catch((function(e){R(e),alert(t("key_416"))})).finally((function(){g(!1)}))}function D(e){window.sessionStorage.setItem(h,JSON.stringify({shipmentCode:f.valueSubmit})),a.push("/Pallet/Edit?shipmentCode="+f.valueSubmit+(e?"&palletID="+e:""))}return Object(o.useEffect)((function(){r&&_(f.value),v.clear()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"famo-wrapper"},l.a.createElement("div",{className:"famo-content"},l.a.createElement("form",{className:"famo-grid famo-form-grid",noValidate:!0,onSubmit:function(e){e.preventDefault(),_(f.value)}},l.a.createElement("div",{className:"famo-row"},l.a.createElement("div",{className:"famo-cell famo-input-label"},l.a.createElement("span",{className:"famo-text-11"},f.label)),l.a.createElement("div",{className:"famo-cell"},l.a.createElement(S,Object.assign({},f,{set:p})))),l.a.createElement("input",{type:"submit",className:"hide",value:""})),l.a.createElement("div",{className:"famo-grid famo-buttons"},l.a.createElement("div",{className:"famo-row"},l.a.createElement("div",{className:"famo-cell text-right"},c.androidApp&&l.a.createElement("button",{type:"button",className:"famo-button famo-normal-button",disabled:y,onClick:function(e){A((function(e){p((function(t){return Object(u.a)({},t,{value:e.text})})),_(e.text)}),t)}},l.a.createElement("span",{className:"famo-text-12"},t("key_681"))),l.a.createElement("button",{type:"button",className:"famo-button famo-normal-button",disabled:y,onClick:function(e){return _(f.value)}},l.a.createElement("span",{className:"famo-text-12"},t("key_323")))))))),(j||y)&&l.a.createElement("section",{className:"famo-wrapper"},l.a.createElement(P,{text:"Paletes"}),l.a.createElement("div",{className:"famo-content"},l.a.createElement(I,{hide:!y}),l.a.createElement("div",{className:"famo-grid famo-content-grid pallets"+(y?" hide":"")},l.a.createElement("div",{className:"famo-row famo-header-row"},C.map((function(e,t){return l.a.createElement("div",{key:t,className:"famo-cell famo-col-"+(t+1)},l.a.createElement("span",{className:"famo-text-11"},e))}))),j&&j.map((function(e,t){return l.a.createElement("div",{key:t,className:"famo-row famo-body-row",onClick:function(t){return D(e.ID)}},l.a.createElement("div",{className:"famo-cell famo-col-1"},l.a.createElement("span",{className:"famo-text-10"},e.ID)))}))))),j&&l.a.createElement("section",{className:"famo-wrapper"},l.a.createElement("div",{className:"famo-grid"},l.a.createElement("div",{className:"famo-row"},l.a.createElement("div",{className:"famo-cell text-right"},l.a.createElement("button",{type:"button",className:"famo-button famo-normal-button",disabled:y,onClick:function(e){return D()}},l.a.createElement("span",{className:"famo-text-12"},t("key_817"))))))))}function q(e){var t=Object(N.b)().t,a=e.location,n=e.history,c=L(),r=Object(i.a)(c,2),s=r[0],m=r[1],f=J.a.parse(a.search),b=Object(o.useState)(f.palletID),E=Object(i.a)(b,2),h=E[0],y=E[1],g=[t("key_87"),t("key_179"),""],k=Object(o.useState)(!0),w=Object(i.a)(k,2),j=w[0],C=w[1],_=Object(o.useState)([]),S=Object(i.a)(_,2),F=S[0],V=S[1],M=Object(o.useState)(!1),z=Object(i.a)(M,2),B=z[0],G=z[1],H=Object(o.useState)(!1),q=Object(i.a)(H,2),Y=q[0],Q=q[1],W=Object(o.useState)(!1),X=Object(i.a)(W,2),Z=X[0],$=X[1],ee=Object(o.useState)(!1),te=Object(i.a)(ee,2),ae=te[0],ne=te[1];function ce(e){F.some((function(t){return t.Code===e}))?alert(t("key_814")):(G(!0),fetch(d+"ERP/Shipments/Boxes"+T({shipmentCode:f.shipmentCode,boxCode:e}),{method:"GET",credentials:"include"}).then((function(e){e.ok&&e.status===O.a.OK?e.json().then((function(e){e.isNew=!0,V([].concat(Object(K.a)(F),[e]))})).catch((function(e){R(e),alert(t("key_416"))})):(U(e),e.status===O.a.NOT_FOUND?alert(t("key_824")):e.status===O.a.FORBIDDEN?alert(t("key_828")):alert(t("key_303")))})).catch((function(e){R(e),alert(t("key_416"))})).finally((function(){G(!1)})))}function oe(){j&&F.some((function(e){return e.isNew}))?alert(t("key_821")):($(!0),fetch(d+"ERP/Pallets/"+(j?"Close":"Reopen")+T({shipmentCode:f.shipmentCode,palletID:h||""}),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F.map((function(e){return e.Code}))),credentials:"include"}).then((function(e){e.ok&&e.status===O.a.OK?(alert(t(j?"key_812":"key_813")),C(!j)):(U(e),alert(t("key_302")))})).catch((function(e){R(e),alert(t("key_416"))})).finally((function(){$(!1)})))}return Object(o.useEffect)((function(){f.palletID&&(m.setLoadPage(!0),fetch(d+"ERP/Pallets/Boxes"+T({shipmentCode:f.shipmentCode,palletID:f.palletID}),{method:"GET",credentials:"include"}).then((function(e){e.ok&&e.status===O.a.OK?e.json().then((function(e){C(e.some((function(e){return e.IsPalletOpen}))),e.forEach((function(e){e.isNew=!1})),V(e)})).catch((function(e){R(e),alert(t("key_416"))})):(U(e),e.status===O.a.NOT_FOUND?n.replace("/Pallet"):alert(t("key_303")))})).catch((function(e){R(e),alert(t("key_416"))})).finally((function(){m.setLoadPage(!1)}))),v.clear({pallet:!0})}),[]),f.shipmentCode?l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"famo-wrapper"},l.a.createElement(P,{text:t("key_820")}),l.a.createElement("div",{className:"famo-content"},l.a.createElement(I,{hide:!Y}),l.a.createElement("div",{className:"famo-grid famo-content-grid pallet-boxes"+(Y?" hide":"")},l.a.createElement("div",{className:"famo-row famo-header-row"},g.map((function(e,t){return l.a.createElement("div",{key:t,className:"famo-cell famo-col-"+(t+1)},l.a.createElement("span",{className:"famo-text-11"},e))}))),F.map((function(e,t){return l.a.createElement("div",{key:t,className:"famo-row famo-body-row"},l.a.createElement("div",{className:"famo-cell famo-col-1"},l.a.createElement("span",{className:"famo-text-10"},e.Code)),l.a.createElement("div",{className:"famo-cell famo-col-2"},l.a.createElement("span",{className:"famo-text-10"},e.OrderCode)),l.a.createElement("div",{className:"famo-cell famo-col-3"},l.a.createElement("span",{className:"famo-text-10"},e.isNew&&l.a.createElement("button",{type:"button",className:"famo-button famo-cancel-button button-delete-box",onClick:function(t){return a=e.Code,void V(F.filter((function(e){return e.Code!==a})));var a}},l.a.createElement("span",{className:"fas fa-trash-alt"})))))}))),j&&l.a.createElement("div",{className:"famo-grid famo-buttons"+(Y?" hide":"")},l.a.createElement("div",{className:"famo-row"},l.a.createElement("div",{className:"famo-cell text-right"},l.a.createElement("button",{type:"button",className:"famo-button famo-normal-button",disabled:B||Z,onClick:function(e){return ne(!0)}},l.a.createElement("span",{className:"famo-text-12"},t("key_815")+" ("+t("key_807").toLowerCase()+")")),s.androidApp&&l.a.createElement("button",{type:"button",className:"famo-button famo-normal-button",disabled:B||Z,onClick:function(e){A((function(e){ce(e.text)}),t)}},l.a.createElement("span",{className:"famo-text-12"},t("key_815")+" ("+t("key_681").toLowerCase()+")"))))))),F.length>0&&l.a.createElement("section",{className:"famo-wrapper"},l.a.createElement("div",{className:"famo-grid"},l.a.createElement("div",{className:"famo-row"},l.a.createElement("div",{className:"famo-cell text-right"},j?l.a.createElement(l.a.Fragment,null,F.some((function(e){return e.isNew}))&&l.a.createElement("button",{type:"button",className:"famo-button famo-normal-button",disabled:B||Y||Z,onClick:function(e){return Q(!0),void fetch(d+"ERP/Pallets/Boxes"+T({shipmentCode:f.shipmentCode,palletID:h||""}),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(F.filter((function(e){return e.isNew})).map((function(e){return e.Code}))),credentials:"include"}).then((function(e){e.ok&&e.status===O.a.OK?(e.json().then((function(e){y(e.palletID)})).catch((function(e){R(e),alert(t("key_416"))})),V(F.map((function(e){return Object(u.a)({},e,{isNew:!1})})))):(U(e),alert(t("key_302")))})).catch((function(e){R(e),alert(t("key_416"))})).finally((function(){Q(!1)}))}},l.a.createElement("span",{className:"famo-text-12"},t("key_220"))),l.a.createElement("button",{type:"button",className:"famo-button famo-confirm-button famo-loader-button",disabled:B||Y||Z,onClick:function(e){return oe()}},l.a.createElement("span",{className:"fas fa-spinner fa-spin"+(Z?"":" hide")}),l.a.createElement("span",{className:"famo-text-12"+(Z?" hide":"")},t("key_200")))):l.a.createElement("button",{type:"button",className:"famo-button famo-confirm-button famo-loader-button",disabled:B||Y||Z,onClick:function(e){return oe()}},l.a.createElement("span",{className:"fas fa-spinner fa-spin"+(Z?"":" hide")}),l.a.createElement("span",{className:"famo-text-12"+(Z?" hide":"")},t("key_827"))))))),l.a.createElement(D,{contentType:x.palletBox,visible:ae,setVisible:ne,confirm:ce})):l.a.createElement(p.a,{to:"/Pallet"})}var Y=Object(p.g)((function(){return l.a.createElement(p.d,null,l.a.createElement(p.b,{exact:!0,path:"/Pallet",render:function(e){return l.a.createElement(H,e)}}),l.a.createElement(p.b,{exact:!0,path:"/Pallet/Edit",render:function(e){return l.a.createElement(q,e)}}),l.a.createElement(p.b,{path:"/Pallet/*",render:function(){return l.a.createElement(p.a,{to:"/Pallet"})}}))})),Q=a(31),W=a(30),X=a(32);function Z(e,t,a){fetch(d+"Platform/Android?timestamp="+(new Date).getTime(),{method:"GET",credentials:"include"}).then((function(n){n.ok&&n.status===O.a.OK?n.json().then((function(a){!function(e){switch(e){case"POR":w.a.locale("pt-pt");break;case"ENG":w.a.locale("en");break;case"ESP":w.a.locale("es-es");break;case"FRA":w.a.locale("fr")}}(e.Language.Code),t.setAndroidApp(a),t.setAuthUser(e)})).catch((function(e){R(e),alert(a("key_416"))})):(U(n),alert(a("key_303")))})).catch((function(e){R(e),alert(a("key_416"))}))}function $(e,t){ee.autoSignIn().then((function(a){a.ok&&a.status===O.a.OK?a.json().then((function(a){Z(a,e,t)})).catch((function(e){R(e),alert(t("key_416"))})):(U(a),alert(t("key_306")))})).catch((function(e){R(e),alert(t("key_416"))}))}var ee=function e(){Object(b.a)(this,e)};ee.signIn=function(e,t){return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",fetch(d+"Authentication/SignIn",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t}),credentials:"include"}));case 1:case"end":return a.stop()}}))},ee.autoSignIn=function(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(d+"Authentication/AutoSignIn?timestamp="+(new Date).getTime(),{method:"GET",credentials:"include"}));case 1:case"end":return e.stop()}}))},ee.signOut=function(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(d+"Authentication/SignOut",{method:"GET",credentials:"include"}));case 1:case"end":return e.stop()}}))};var te=a(26),ae=a.n(te),ne=a(44),ce=a(43);ne.a.use(ce.a).use(N.a).init({lng:"pt",fallbackLng:"pt",whitelist:["pt","en","es","fr"],debug:!1,react:{},backend:{loadPath:d+"JSON/i18n/{{lng}}.json?timestamp="+(new Date).getTime(),crossDomain:!0}});var oe=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(Q.a)(this,Object(W.a)(t).call(this,e))).usernameRef=void 0,a.hideInputMsg=function(e){return"signin-error-input"+(e?" hide":"")},a.handleChangeInput=function(e){a.setState(Object(m.a)({},e.target.name,e.target.value))},a.handleUserInput=function(e){e.target.value||a.setState({hideUserMsg:"blur"!==e.type})},a.handlePwdInput=function(e){e.target.value||a.setState({hidePwdMsg:"blur"!==e.type})},a.handleSubmit=function(e){var t,n,o,l,r,s;return c.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:if(e.preventDefault(),t=L(),n=Object(i.a)(t,2),o=n[1],a.state.username&&a.state.password){m.next=6;break}a.setState({hideUserMsg:!!a.state.username,hidePwdMsg:!!a.state.password}),m.next=24;break;case 6:return m.next=8,c.a.awrap(ee.signIn(a.state.username,a.state.password));case 8:if(l=m.sent,r=a.props.t,a.setState({authError:!1,authHttpCode:-1}),!l.ok){m.next=20;break}return a.setState({authSuccess:!0}),m.t0=o,m.next=16,c.a.awrap(l.json());case 16:m.t1=m.sent,m.t0.setAuthUser.call(m.t0,m.t1),m.next=24;break;case 20:400!==(s=l.status)&&500!==s&&console.log(r("key_416")+" - "+s),a.usernameRef.current.focus(),a.setState({password:"",hidePwdMsg:!0,authError:!0,authHttpCode:s});case 24:case"end":return m.stop()}}))},a.state={username:"",password:"",hideUserMsg:!0,hidePwdMsg:!0,authSuccess:!1,authError:!1,authHttpCode:-1},a.usernameRef=l.a.createRef(),a}return Object(X.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.usernameRef.current.focus()}},{key:"render",value:function(){var e=ae()("famo-input signin-form-input famo-text-3",{"famo-input-error":!this.state.hideUserMsg}),t=ae()("famo-input signin-form-input famo-text-3",{"famo-input-error":!this.state.hidePwdMsg}),a=ae()("signin-error-submit",{hide:!this.state.authError}),n=this.props,c=n.t,o=n.location;return this.state.authSuccess?l.a.createElement(p.a,{to:o.state||{from:{pathname:"/"}}}):l.a.createElement("section",{className:"famo-grid signin"},l.a.createElement("div",{className:"famo-row"},l.a.createElement("div",{className:"famo-cell"},l.a.createElement("div",{className:"signin-body"},l.a.createElement("div",{className:"signin-famo-logo"},l.a.createElement("img",{src:"http://www.famo-code.com/Content/Images/logo-famo-black-normal.png",alt:"FAMO"})),l.a.createElement("div",{className:"signin-form"},l.a.createElement("div",{className:"signin-app-name"},l.a.createElement("span",{className:"famo-text-2"},"PDA")),l.a.createElement("form",{id:"signin-form",method:"POST",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"signin-input-wrapper"},l.a.createElement("input",{type:"text",id:"signin-username-input",className:e,placeholder:c("key_397"),ref:this.usernameRef,name:"username",value:this.state.username,autoComplete:"off",onChange:this.handleChangeInput,onFocus:this.handleUserInput,onBlur:this.handleUserInput}),l.a.createElement(le,{msgClass:this.hideInputMsg(this.state.hideUserMsg),msgText:c("key_196")})),l.a.createElement("div",{className:"signin-input-wrapper"},l.a.createElement("input",{type:"password",id:"signin-password-input",className:t,placeholder:c("key_314"),name:"password",value:this.state.password,onChange:this.handleChangeInput,onFocus:this.handlePwdInput,onBlur:this.handlePwdInput}),l.a.createElement(le,{msgClass:this.hideInputMsg(this.state.hidePwdMsg),msgText:c("key_195")})),l.a.createElement("div",{className:a},this.state.authError&&400===this.state.authHttpCode&&l.a.createElement("span",{className:"famo-text-7"},c("key_398")),this.state.authError&&500===this.state.authHttpCode&&l.a.createElement("span",{className:"famo-text-7"},c("key_306"))),l.a.createElement("button",{className:"famo-button famo-confirm-button signin-button-submit",type:"submit"},l.a.createElement("span",{className:"famo-text-5"},c("key_238"))),l.a.createElement("button",{type:"button",className:"famo-button famo-transparent-button signup-button"},l.a.createElement("span",{className:"famo-text-27"},c("key_648")))))))),l.a.createElement("div",{className:"famo-row"},l.a.createElement("div",{className:"famo-cell famo-cell-bottom"},l.a.createElement("div",{className:"signin-footer text-center"},l.a.createElement("span",{className:"famo-text-1"},(new Date).getFullYear()," \xa9 FAMO - ","PDA")))))}}]),t}(l.a.Component),le=function(e){function t(){return Object(b.a)(this,t),Object(Q.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(X.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.msgClass,a=e.msgText;return l.a.createElement("div",{className:t},l.a.createElement("span",{className:"famo-text-7"},a))}}]),t}(l.a.Component),re=(Object(N.c)()(oe),a(20));a(77);function se(e){var t=e.t,a=L(),n=Object(i.a)(a,2),c=n[0],r=n[1];return Object(o.useEffect)((function(){fetch(d+"Authentication/Session/User",{method:"GET",credentials:"include"}).then((function(e){e.ok&&e.status===O.a.OK?e.json().then((function(e){Z(e,r,t)})).catch((function(e){$(r,t),R(e)})):($(r,t),U(e))})).catch((function(e){$(r,t),R(e)}))}),[]),l.a.createElement("section",{className:"famo-body"},l.a.createElement(p.d,null,l.a.createElement(p.b,{exact:!0,path:"/",render:function(){return l.a.createElement(y,null)}}),l.a.createElement(p.b,{path:"/Inventory",render:function(){return l.a.createElement(B,null)}}),l.a.createElement(p.b,{path:"/Pallet",render:function(){return l.a.createElement(Y,null)}})),l.a.createElement(F,{hide:c.authUser&&!c.loadPage}))}var ie=Object(N.c)()((function(e){return window.cordova?l.a.createElement(re.b,null,l.a.createElement(se,e)):l.a.createElement(re.a,null,l.a.createElement(se,e))}));function me(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:try{document.getElementById("pda-footer").innerText=(new Date).getFullYear()+" \xa9 FAMO - PDA",s.a.render(l.a.createElement(o.Suspense,{fallback:l.a.createElement(F,{hide:!0})},l.a.createElement(ie,null)),document.getElementById("root"))}catch(t){alert("Oops!! Liga o servidor Node.js!")}case 1:case"end":return e.stop()}}))}window.cordova?document.addEventListener("deviceready",me,!1):me()}},[[47,1,2]]]);