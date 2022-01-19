"use strict";(self.webpackChunkionic_app_base=self.webpackChunkionic_app_base||[]).push([[4905],{3224:function(e,r,n){var a=n(2926),o=n(5812),t=n(184);r.Z=function(e){var r=e.name,n=e.color,i=e.slot,l=a[r];return l?i?(0,t.jsx)(o.gu,{style:{color:n||"black"},icon:l,slot:i||null}):(0,t.jsx)(o.gu,{style:{color:n||"black"},icon:l}):(0,t.jsx)(o.gu,{icon:a.imageOutline})}},23:function(e,r,n){n.d(r,{Z:function(){return m}});var a=n(885),o=n(5812),t=(n(2834),n(4676),n(4432),n(9603)),i=n(2791),l=n(2299),c=n.n(l),s=n(835),u=n(3224),d=n(2926),p=n(184),m=function(e){var r=(0,t.Z)(),n=r.cuentas,l=r.loadingcuentas,m=r.deleteCuenta,f=r.success,v=r.setSuccess,g=r.error,x=r.setError,h=(0,i.useState)(!1),S=(0,a.Z)(h,2),b=S[0],y=S[1],j=(0,i.useState)({}),w=(0,a.Z)(j,2),C=w[0],N=w[1];return(0,p.jsxs)(p.Fragment,{children:[l?(0,p.jsx)(c(),{color:"blue",loading:!0,css:"display: block;margin: 0 auto",size:150}):n?(0,p.jsx)(o.q_,{children:n.map((function(e,r){return(0,p.jsxs)(o.Ie,{className:"cuenta-item",children:[(0,p.jsxs)("div",{className:"cuenta-name-info",children:[(0,p.jsx)(u.Z,{name:e.icono,color:e.color}),(0,p.jsx)(o.Q$,{className:"cuenta-name",children:e.name})]}),(0,p.jsx)(s.ZP,{end:e.cantidad,suffix:" \u20ac",duration:1.5,separator:" ",decimal:",",decimals:2,className:"contador-money"}),(0,p.jsx)("div",{className:"cuenta-options",slot:"end",children:(0,p.jsx)("div",{className:"delete",onClick:function(){N(e),y(!0)},children:(0,p.jsx)(u.Z,{name:"trash",color:"var(--ion-color-danger-tint)"})})})]},r)}))}):"Sin cuentas",(0,p.jsx)(o.Px,{isOpen:f.status,onDidDismiss:function(){return v({status:!1,msg:""})},message:f.msg,icon:d.informationCircle,position:"top",duration:2e3,color:"success"}),(0,p.jsx)(o.Px,{isOpen:g.status,onDidDismiss:function(){return x({status:!1,msg:""})},message:g.msg,icon:d.informationCircle,position:"top",duration:2e3,color:"warning"}),(0,p.jsx)(o.Ge,{isOpen:b,onDidDismiss:function(){return y(!1)},header:"Eliminar Cuenta",message:"\xbfSeguro que quieres elimiar la cuenta</br><strong>"+C.name+"</strong>?",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",id:"cancel-button"},{text:"Elimiar",id:"confirm-button",handler:function(){m(C)}}]})]})}},507:function(e,r,n){n.r(r),n.d(r,{default:function(){return V}});var a=n(5812),o=(n(4676),n(4432),n(2791)),t=n(6786),i=n(9603),l=(n(23),n(885)),c=n(2834),s=n(2299),u=n.n(s),d=(n(835),n(3224)),p=n(184),m=function(e){var r=["#F44336","#9B59B6","#5499C7","#76D7C4","#7DCEA0","#F7DC6F","#E59866"];return(0,p.jsxs)("div",{className:"color-component",children:[(0,p.jsxs)("span",{className:"info",children:["Selecciona un color ",(0,p.jsx)("span",{className:"required",children:"*"})]}),(0,p.jsx)("hr",{className:"separador-color",style:{backgroundColor:e.colorSelected}}),(0,p.jsx)("div",{className:"color-list",children:(0,p.jsx)(c.t,{slidesPerView:5,loop:!0,className:"mySwiper",children:r?r.map((function(r,n){return(0,p.jsx)(c.o,{className:e.colorSelected==r?"color selected":"color",style:e.colorSelected==r?{borderColor:r,borderWidth:"3px",borderStyle:"solid"}:{},onClick:function(){e.onChange(r)},children:(0,p.jsx)("div",{className:"circle",style:{backgroundColor:r}})},n)})):"No hay colores disponibles"})})]})},f=function(e){var r=["walletOutline","cardOutline","logoPaypal","cashOutline","contrastOutline","earthOutline","serverOutline","happyOutline","flashOutline","flaskOutline","globeOutline","heartOutline","flowerOutline","rocketOutline"];return(0,p.jsxs)("div",{className:"icono-component",children:[(0,p.jsxs)("span",{className:"info",children:["Selecciona un icono ",(0,p.jsx)("span",{className:"required",children:"*"})]}),(0,p.jsx)("div",{className:"icono-list",children:(0,p.jsx)(c.t,{slidesPerView:5,loop:!0,className:"mySwiper",children:r?r.map((function(r,n){return(0,p.jsx)(c.o,{className:e.iconoSelected==r?"icono selected":"icono",style:e.iconoSelected==r?{borderColor:e.colorSelected,borderWidth:"3px",borderStyle:"solid"}:{},onClick:function(){e.onChange(r)},children:(0,p.jsx)(d.Z,{name:r,color:e.colorSelected})},n)})):"No hay iconos disponibles"})})]})},v=n(2436),g=n(2926),x=function(){return x=Object.assign||function(e){for(var r,n=1,a=arguments.length;n<a;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},x.apply(this,arguments)};function h(e,r,n){if(n||2===arguments.length)for(var a,o=0,t=r.length;o<t;o++)!a&&o in r||(a||(a=Array.prototype.slice.call(r,0,o)),a[o]=r[o]);return e.concat(a||r)}var S=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},b={k:1e3,m:1e6,b:1e9},y=function(e){var r=e.value,n=e.groupSeparator,a=void 0===n?",":n,o=e.decimalSeparator,t=void 0===o?".":o,i=e.allowDecimals,l=void 0===i||i,c=e.decimalsLimit,s=void 0===c?2:c,u=e.allowNegativeValue,d=void 0===u||u,p=e.disableAbbreviations,m=void 0!==p&&p,f=e.prefix,v=void 0===f?"":f,g=e.transformRawValue,x=(void 0===g?function(e){return e}:g)(r);if("-"===x)return x;var y=m?[]:["k","m","b"],j=new RegExp("((^|\\D)-\\d)|(-"+S(v)+")").test(x),w=RegExp("(\\d+)-?"+S(v)).exec(r)||[],C=w[0],N=w[1],O=function(e,r){void 0===r&&(r=",");var n=new RegExp(S(r),"g");return e.replace(n,"")}(v?C?x.replace(C,"").concat(N):x.replace(v,""):x,a),D=function(e,r){var n=S(r.join("")),a=new RegExp("[^\\d"+n+"]","gi");return e.replace(a,"")}(O,h([a,t],y)),k=D;if(!m){if(y.some((function(e){return e===D.toLowerCase()})))return"";var E=function(e,r){void 0===r&&(r=".");var n=new RegExp("(\\d+("+S(r)+"\\d*)?)([kmb])$","i"),a=e.match(n);if(a){var o=a[1],t=a[3],i=b[t.toLowerCase()];return Number(o.replace(r,"."))*i}}(D,t);E&&(k=String(E))}var R=j&&d?"-":"";if(t&&k.includes(t)){var V=D.split(t),F=V[0],Z=V[1],P=s&&Z?Z.slice(0,s):Z;return""+R+F+(l?""+t+P:"")}return""+R+k},j=function(e,r){var n=r.groupSeparator,a=void 0===n?",":n,o=r.decimalSeparator,t=void 0===o?".":o,i=new RegExp("\\d([^"+S(a)+S(t)+"0-9]+)"),l=e.match(i);return l?l[1]:void 0},w=function(e){var r=e.value,n=e.decimalSeparator,a=e.intlConfig,o=e.decimalScale,t=e.prefix,i=void 0===t?"":t,l=e.suffix,c=void 0===l?"":l;if(""===r||void 0===r)return"";if("-"===r)return"-";var s=new RegExp("^\\d?-"+(i?S(i)+"?":"")+"\\d").test(r),u="."!==n?C(r,n,s):r,d=(a?new Intl.NumberFormat(a.locale,a.currency?{style:"currency",currency:a.currency,minimumFractionDigits:o||0,maximumFractionDigits:20}:void 0):new Intl.NumberFormat(void 0,{minimumFractionDigits:o||0,maximumFractionDigits:20})).formatToParts(Number(u)),p=N(d,e),m=j(p,x({},e)),f=r.slice(-1)===n?n:"",v=(u.match(RegExp("\\d+\\.(\\d+)"))||[])[1];return void 0===o&&v&&n&&(p=p.includes(n)?p.replace(RegExp("(\\d+)("+S(n)+")(\\d+)","g"),"$1$2"+v):m&&!c?p.replace(m,""+n+v+m):""+p+n+v),c&&f?""+p+f+c:m&&f?p.replace(m,""+f+m):m&&c?p.replace(m,""+f+c):[p,f,c].join("")},C=function(e,r,n){var a=e;return r&&"."!==r&&(a=a.replace(RegExp(S(r),"g"),"."),n&&"-"===r&&(a="-"+a.slice(1))),a},N=function(e,r){var n=r.prefix,a=r.groupSeparator,o=r.decimalSeparator,t=r.decimalScale,i=r.disableGroupSeparators,l=void 0!==i&&i;return e.reduce((function(e,r,i){var c=r.type,s=r.value;return 0===i&&n?"minusSign"===c?[s,n]:"currency"===c?h(h([],e),[n]):[n,s]:"currency"===c?n?e:h(h([],e),[s]):"group"===c?l?e:h(h([],e),[void 0!==a?a:s]):"decimal"===c?void 0!==t&&0===t?e:h(h([],e),[void 0!==o?o:s]):h(h([],e),"fraction"===c?[void 0!==t?s.slice(0,t):s]:[s])}),[""]).join("")},O={currencySymbol:"",groupSeparator:"",decimalSeparator:"",prefix:"",suffix:""},D=function(e){return RegExp(/\d/,"gi").test(e)},k=(0,o.forwardRef)((function(e,r){var n=e.allowDecimals,a=void 0===n||n,t=e.allowNegativeValue,i=void 0===t||t,l=e.id,c=e.name,s=e.className,u=e.customInput,d=e.decimalsLimit,p=e.defaultValue,m=e.disabled,f=void 0!==m&&m,v=e.maxLength,g=e.value,h=e.onValueChange,S=e.fixedDecimalLength,b=e.placeholder,C=e.decimalScale,N=e.prefix,k=e.suffix,E=e.intlConfig,R=e.step,V=e.min,F=e.max,Z=e.disableGroupSeparators,P=void 0!==Z&&Z,I=e.disableAbbreviations,A=void 0!==I&&I,L=e.decimalSeparator,K=e.groupSeparator,U=e.onChange,G=e.onFocus,$=e.onBlur,q=e.onKeyDown,B=e.onKeyUp,_=e.transformRawValue,T=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)r.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n}(e,["allowDecimals","allowNegativeValue","id","name","className","customInput","decimalsLimit","defaultValue","disabled","maxLength","value","onValueChange","fixedDecimalLength","placeholder","decimalScale","prefix","suffix","intlConfig","step","min","max","disableGroupSeparators","disableAbbreviations","decimalSeparator","groupSeparator","onChange","onFocus","onBlur","onKeyDown","onKeyUp","transformRawValue"]);if(L&&D(L))throw new Error("decimalSeparator cannot be a number");if(K&&D(K))throw new Error("groupSeparator cannot be a number");var W=(0,o.useMemo)((function(){return function(e){var r=e||{},n=r.locale,a=r.currency;return(n?new Intl.NumberFormat(n,a?{currency:a,style:"currency"}:void 0):new Intl.NumberFormat).formatToParts(1000.1).reduce((function(e,r,n){return"currency"===r.type?x(x({},e),0===n?{currencySymbol:r.value,prefix:r.value}:{currencySymbol:r.value,suffix:r.value}):"group"===r.type?x(x({},e),{groupSeparator:r.value}):"decimal"===r.type?x(x({},e),{decimalSeparator:r.value}):e}),O)}(E)}),[E]),Y=L||W.decimalSeparator||"",z=K||W.groupSeparator||"";if(Y&&z&&Y===z&&!1===P)throw new Error("decimalSeparator cannot be the same as groupSeparator");var H={decimalSeparator:Y,groupSeparator:z,disableGroupSeparators:P,intlConfig:E,prefix:N||W.prefix,suffix:k},M={decimalSeparator:Y,groupSeparator:z,allowDecimals:a,decimalsLimit:d||S||2,allowNegativeValue:i,disableAbbreviations:A,prefix:N||W.prefix,transformRawValue:_},Q=void 0!==p&&null!==p?w(x(x({},H),{decimalScale:C,value:String(p)})):void 0!==g&&null!==g?w(x(x({},H),{decimalScale:C,value:String(g)})):"",X=(0,o.useState)(Q),J=X[0],ee=X[1],re=(0,o.useState)(!1),ne=re[0],ae=re[1],oe=(0,o.useState)(0),te=oe[0],ie=oe[1],le=(0,o.useState)(0),ce=le[0],se=le[1],ue=(0,o.useState)(null),de=ue[0],pe=ue[1],me=r||(0,o.useRef)(null),fe=function(e,r){ae(!0);var n=function(e){var r=e.selectionStart,n=e.value,a=e.lastKeyStroke,o=e.stateValue,t=e.groupSeparator,i=r,l=n;if(o&&i){var c=n.split("");return"Backspace"===a&&o[i]===t&&(c.splice(i-1,1),i-=1),"Delete"===a&&o[i]===t&&(c.splice(i,1),i+=1),{modifiedValue:l=c.join(""),cursorPosition:i}}return{modifiedValue:l,cursorPosition:r}}({selectionStart:r,value:e,lastKeyStroke:de,stateValue:J,groupSeparator:z}),a=n.modifiedValue,o=n.cursorPosition,t=y(x({value:a},M));if(!(v&&t.replace(/-/g,"").length>v)){if(""===t||"-"===t||t===Y)return h&&h(void 0,c,{float:null,formatted:"",value:""}),void ee(t);var i=parseFloat(t.replace(Y,".")),l=w(x({value:t},H));if(void 0!==o&&null!==o){var s=o+(l.length-e.length);s=s<=0?N?N.length:0:s,ie(s),se(ce+1)}if(ee(l),h)h(t,c,{float:i,formatted:l,value:t})}};(0,o.useEffect)((function(){ne&&"-"!==J&&me&&"object"===typeof me&&me.current&&me.current.setSelectionRange(te,te)}),[J,te,me,ne,ce]);var ve=x({type:"text",inputMode:"decimal",id:l,name:c,className:s,onChange:function(e){var r=e.target,n=r.value,a=r.selectionStart;fe(n,a),U&&U(e)},onBlur:function(e){var r=e.target.value,n=y(x({value:r},M));if("-"===n||!n)return ee(""),void($&&$(e));var a=function(e,r,n){if(n&&e.length>1){if(e.includes(r)){var a=e.split(r),o=a[0];if((t=a[1]).length>n)return""+o+r+t.slice(0,n)}var t,i=e.length>n?new RegExp("(\\d+)(\\d{"+n+"})"):new RegExp("(\\d)(\\d+)"),l=e.match(i);if(l)return""+(o=l[1])+r+l[2]}return e}(n,Y,S),o=function(e,r,n){if(void 0===r&&(r="."),void 0===n||""===e||void 0===e)return e;if(!e.match(/\d/g))return"";var a=e.split(r),o=a[0],t=a[1];if(0===n)return o;var i=t||"";if(i.length<n)for(;i.length<n;)i+="0";else i=i.slice(0,n);return""+o+r+i}(a,Y,void 0!==C?C:S),t=parseFloat(o.replace(Y,".")),i=w(x(x({},H),{value:o}));h&&h(o,c,{float:t,formatted:i,value:o}),ee(i),$&&$(e)},onFocus:function(e){return G&&G(e),J?J.length:0},onKeyDown:function(e){var r=e.key;if(pe(r),R&&("ArrowUp"===r||"ArrowDown"===r)){e.preventDefault(),ie(J.length);var n=parseFloat(void 0!==g&&null!==g?String(g).replace(Y,"."):y(x({value:J},M)))||0,a="ArrowUp"===r?n+R:n-R;if(void 0!==V&&a<V)return;if(void 0!==F&&a>F)return;var o=String(R).includes(".")?Number(String(R).split(".")[1].length):void 0;fe(String(o?a.toFixed(o):a).replace(".",Y))}q&&q(e)},onKeyUp:function(e){var r=e.key,n=e.currentTarget.selectionStart;if("ArrowUp"!==r&&"ArrowDown"!==r&&"-"!==J){var a=j(J,{groupSeparator:z,decimalSeparator:Y});if(a&&n&&n>J.length-a.length&&me&&"object"===typeof me&&me.current){var o=J.length-a.length;me.current.setSelectionRange(o,o)}}B&&B(e)},placeholder:b,disabled:f,value:void 0===g||null===g||"-"===J||Y&&J===Y?J:w(x(x({},H),{decimalScale:ne?void 0:C,value:String(g)})),ref:me},T);if(u){var ge=u;return o.createElement(ge,x({},ve))}return o.createElement("input",x({},ve))}));k.displayName="CurrencyInput";var E=k,R=function(e){var r=(0,v.Z)(),n=r.profile,t=(r.updateProfile,r.loadingprofile),c=(0,i.Z)(),s=(c.cuentas,c.createNewCuenta),x=c.success,h=c.setSuccess,S=(0,o.useState)(""),b=(0,l.Z)(S,2),y=b[0],j=b[1],w=(0,o.useState)(!1),C=(0,l.Z)(w,2),N=C[0],O=C[1],D=(0,o.useState)("#5499C7"),k=(0,l.Z)(D,2),R=k[0],V=k[1],F=(0,o.useState)("cashOutline"),Z=(0,l.Z)(F,2),P=Z[0],I=Z[1],A=(0,o.useState)(0),L=(0,l.Z)(A,2),K=L[0],U=L[1],G=(0,o.useState)({isOpen:!1,content:"Ha ocurrido un error!",color:"danger"}),$=(0,l.Z)(G,2),q=$[0],B=$[1];return(0,p.jsxs)(p.Fragment,{children:[t?(0,p.jsx)(u(),{color:"blue",loading:!0,css:"display: block;margin: 0 auto",size:150}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"mc-input value",children:[(0,p.jsx)("span",{children:"Valor inicial (EUR)"}),(0,p.jsxs)("div",{className:"input-currency",children:[(0,p.jsx)("button",{id:"decrement",className:"button-decrement",onClick:function(e){K<1||U(K-1)},children:(0,p.jsx)(d.Z,{name:"removeCircleOutline",slot:"end",color:"white"})}),(0,p.jsx)(E,{className:"valueInput",id:"input-example",name:"input-name",placeholder:"Valor inicial de la cuenta",defaultValue:0,value:K,decimalsLimit:2,onValueChange:function(e){U(e)},suffix:" \u20ac"}),(0,p.jsx)("button",{id:"increment",className:"button-increment",onClick:function(e){U(K+1)},children:(0,p.jsx)(d.Z,{name:"addCircleOutline",slot:"end",color:"white"})})]})]}),(0,p.jsxs)(a.Ie,{className:"mc-input",children:[(0,p.jsxs)(a.Q$,{position:"floating",style:N&&!y?{color:"red"}:{color:"black"},children:["Nombre de la cuenta ",(0,p.jsx)("span",{className:"required",children:"*"})]}),(0,p.jsx)(a.pK,{maxlength:"20",disabled:x.status,value:y,placeholder:"Nombre de la cuenta",onIonChange:function(e){return j(e.detail.value)}})]}),(0,p.jsx)(m,{onChange:function(e){V(e)},colorSelected:R}),(0,p.jsx)(f,{onChange:function(e){I(e)},colorSelected:R,iconoSelected:P}),(0,p.jsxs)(a.YG,{expand:"full",className:"boton-guardar",onClick:function(){if(!y)return O(!0),void B({isOpen:!0,content:"Revise los campos marcados en rojo.",color:"danger"});O(!0);var e={uid:n.uid,icono:P||"cashOutline",color:R||"#5499C7",cantidad:K?K.replace(/,/g,"."):0,name:y};console.log("NewCuenta",e),s(e)},disabled:x.status,children:["Guardar",(0,p.jsx)(d.Z,{name:"arrowUpCircleOutline",slot:"end",color:"white"})]})]}),(0,p.jsx)(a.Px,{isOpen:q.isOpen,onDidDismiss:function(){return B(!1)},message:q.content,icon:g.informationCircle,position:"top",duration:2e3,color:q.color}),(0,p.jsx)(a.Px,{isOpen:x.status,onDidDismiss:function(){return h({status:!1,msg:""})},message:x.msg,icon:g.informationCircle,position:"top",duration:2e3,color:"success"})]})},V=function(){var e=(0,i.Z)(),r=(e.cuentas,e.loadingcuentas,(0,t.TH)().pathname.split("/")),n=r[r.length-1];return(0,p.jsx)(a._i,{children:(0,p.jsx)(a.W2,{fullscreen:!0,scrollX:"false",scrollY:"false",children:(0,p.jsx)(a.W2,{scrollX:"true",scrollY:"true",children:(0,p.jsx)(R,{type:n})})})})}}}]);
//# sourceMappingURL=4905.70fb2b9a.chunk.js.map