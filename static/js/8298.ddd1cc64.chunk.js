"use strict";(self.webpackChunkionic_app_base=self.webpackChunkionic_app_base||[]).push([[8298],{5205:function(e,n,o){o.d(n,{Z:function(){return f}});var s=o(885),i=o(5812),l=(o(2834),o(4676),o(4432),o(9603)),t=o(2791),c=o(2299),a=o.n(c),r=(o(835),o(1921)),u=o(568),d=o(7242),m=o(2436),p=o(2926),x=o(2373),h=o(184),f=function(e){var n=(0,m.Z)(),o=n.profile,c=(n.updateProfile,n.loadingprofile),f=(0,l.Z)(),j=(f.cuentas,f.createNewCuenta),g=f.success,b=f.setSuccess,C=(0,t.useState)(""),O=(0,s.Z)(C,2),v=O[0],N=O[1],S=(0,t.useState)(!1),Z=(0,s.Z)(S,2),y=Z[0],k=Z[1],w=(0,t.useState)("#5499C7"),D=(0,s.Z)(w,2),P=D[0],I=D[1],q=(0,t.useState)("cashOutline"),F=(0,s.Z)(q,2),E=F[0],G=F[1],V=(0,t.useState)(0),_=(0,s.Z)(V,2),Q=_[0],W=_[1],$=(0,t.useState)({isOpen:!1,content:"Ha ocurrido un error!",color:"danger"}),z=(0,s.Z)($,2),Y=z[0],H=z[1];return(0,h.jsxs)(h.Fragment,{children:[c?(0,h.jsx)(a(),{color:"blue",loading:!0,css:"display: block;margin: 0 auto",size:150}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"mc-input value",children:[(0,h.jsx)("span",{children:"Valor inicial (EUR)"}),(0,h.jsxs)("div",{className:"input-currency",children:[(0,h.jsx)("button",{id:"decrement",className:"button-decrement",onClick:function(e){Q<1||W(Q-1)},children:(0,h.jsx)(r.Z,{name:"removeCircleOutline",slot:"end",color:"white"})}),(0,h.jsx)(x.Z,{className:"valueInput",id:"input-example",name:"input-name",placeholder:"Valor inicial de la cuenta",defaultValue:0,value:Q,decimalsLimit:2,onValueChange:function(e){W(e)},suffix:" \u20ac"}),(0,h.jsx)("button",{id:"increment",className:"button-increment",onClick:function(e){W(Q+1)},children:(0,h.jsx)(r.Z,{name:"addCircleOutline",slot:"end",color:"white"})})]})]}),(0,h.jsxs)(i.Ie,{className:"mc-input",children:[(0,h.jsxs)(i.Q$,{position:"floating",style:y&&!v?{color:"red"}:{color:"black"},children:["Nombre de la cuenta ",(0,h.jsx)("span",{className:"required",children:"*"})]}),(0,h.jsx)(i.pK,{maxlength:"20",disabled:g.status,value:v,placeholder:"Nombre de la cuenta",onIonChange:function(e){return N(e.detail.value)}})]}),(0,h.jsx)(u.Z,{onChange:function(e){I(e)},colorSelected:P}),(0,h.jsx)(d.Z,{onChange:function(e){G(e)},colorSelected:P,iconoSelected:E}),(0,h.jsxs)(i.YG,{expand:"full",className:"boton-guardar",onClick:function(){if(!v)return k(!0),void H({isOpen:!0,content:"Revise los campos marcados en rojo.",color:"danger"});k(!0);var e={uid:o.uid,icono:E||"cashOutline",color:P||"#5499C7",cantidad:Q?Q.replace(/,/g,"."):0,name:v};console.log("NewCuenta",e),j(e)},disabled:g.status,children:["Guardar",(0,h.jsx)(r.Z,{name:"arrowUpCircleOutline",slot:"end",color:"white"})]})]}),(0,h.jsx)(i.Px,{isOpen:Y.isOpen,onDidDismiss:function(){return H(!1)},message:Y.content,icon:p.informationCircle,position:"top",duration:2e3,color:Y.color}),(0,h.jsx)(i.Px,{isOpen:g.status,onDidDismiss:function(){return b({status:!1,msg:""})},message:g.msg,icon:p.informationCircle,position:"top",duration:2e3,color:"success"})]})}},6382:function(e,n,o){o.d(n,{Z:function(){return p}});var s=o(885),i=o(5812),l=(o(2834),o(4676),o(4432),o(9603)),t=o(2791),c=o(2299),a=o.n(c),r=o(835),u=o(1921),d=o(2926),m=o(184),p=function(e){var n=(0,l.Z)(),o=n.cuentas,c=n.loadingcuentas,p=n.deleteCuenta,x=n.success,h=n.setSuccess,f=n.error,j=n.setError,g=(0,t.useState)(!1),b=(0,s.Z)(g,2),C=b[0],O=b[1],v=(0,t.useState)({}),N=(0,s.Z)(v,2),S=N[0],Z=N[1];return(0,m.jsxs)(m.Fragment,{children:[c?(0,m.jsx)(a(),{color:"blue",loading:!0,css:"display: block;margin: 0 auto",size:150}):o?(0,m.jsx)(i.q_,{children:o.map((function(e,n){return(0,m.jsxs)(i.Ie,{className:"cuenta-item",children:[(0,m.jsxs)("div",{className:"cuenta-name-info",children:[(0,m.jsx)(u.Z,{name:e.icono,color:e.color}),(0,m.jsx)(i.Q$,{className:"cuenta-name",children:e.name})]}),(0,m.jsx)(r.ZP,{end:e.cantidad,suffix:" \u20ac",duration:1.5,separator:" ",decimal:",",decimals:2,className:"contador-money"}),(0,m.jsx)("div",{className:"cuenta-options",slot:"end",children:(0,m.jsx)("div",{className:"delete",onClick:function(){Z(e),O(!0)},children:(0,m.jsx)(u.Z,{name:"trash",color:"var(--ion-color-danger-tint)"})})})]},n)}))}):"Sin cuentas",(0,m.jsx)(i.Px,{isOpen:x.status,onDidDismiss:function(){return h({status:!1,msg:""})},message:x.msg,icon:d.informationCircle,position:"top",duration:2e3,color:"success"}),(0,m.jsx)(i.Px,{isOpen:f.status,onDidDismiss:function(){return j({status:!1,msg:""})},message:f.msg,icon:d.informationCircle,position:"top",duration:2e3,color:"warning"}),(0,m.jsx)(i.Ge,{isOpen:C,onDidDismiss:function(){return O(!1)},header:"Eliminar Cuenta",message:"\xbfSeguro que quieres elimiar la cuenta</br><strong>"+S.name+"</strong>?",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",id:"cancel-button"},{text:"Elimiar",id:"confirm-button",handler:function(){p(S)}}]})]})}},1921:function(e,n,o){var s=o(2926),i=o(5812),l=o(184);n.Z=function(e){var n=e.name,o=e.color,t=e.slot,c=s[n];return c?t?(0,l.jsx)(i.gu,{style:{color:o||"black"},icon:c,slot:t||null}):(0,l.jsx)(i.gu,{style:{color:o||"black"},icon:c}):(0,l.jsx)(i.gu,{icon:s.imageOutline,style:{color:o||"black"},slot:t||null})}},568:function(e,n,o){o.d(n,{Z:function(){return l}});o(5812);var s=o(2834),i=(o(4676),o(4432),o(9603),o(2791),o(835),o(1921),o(184)),l=function(e){var n=["#F44336","#9B59B6","#5499C7","#76D7C4","#7DCEA0","#F7DC6F","#E59866"];return(0,i.jsxs)("div",{className:"color-component",children:[(0,i.jsxs)("span",{className:"info",children:["Selecciona un color ",(0,i.jsx)("span",{className:"required",children:"*"})]}),(0,i.jsx)("hr",{className:"separador-color",style:{backgroundColor:e.colorSelected}}),(0,i.jsx)("div",{className:"color-list",children:(0,i.jsx)(s.t,{slidesPerView:5,loop:!0,className:"mySwiper",children:n?n.map((function(n,o){return(0,i.jsx)(s.o,{className:e.colorSelected==n?"color selected":"color",style:e.colorSelected==n?{borderColor:n,borderWidth:"3px",borderStyle:"solid"}:{},onClick:function(){e.onChange(n)},children:(0,i.jsx)("div",{className:"circle",style:{backgroundColor:n}})},o)})):"No hay colores disponibles"})})]})}},7242:function(e,n,o){o.d(n,{Z:function(){return t}});o(5812);var s=o(2834),i=(o(4676),o(4432),o(9603),o(2791),o(835),o(1921)),l=o(184),t=function(e){var n=["walletOutline","cardOutline","logoPaypal","cashOutline","contrastOutline","earthOutline","serverOutline","happyOutline","flashOutline","flaskOutline","globeOutline","heartOutline","flowerOutline","rocketOutline"],o=["happyOutline","flashOutline","flaskOutline","globeOutline","heartOutline","flowerOutline","rocketOutline","accessibilityOutline","airplaneOutline","alarmOutline","beerOutline","boatOutline","barbellOutline","bedOutline","chatbubblesOutline"];return(0,l.jsxs)("div",{className:"icono-component",children:[(0,l.jsxs)("span",{className:"info",children:["Selecciona un icono ",(0,l.jsx)("span",{className:"required",children:"*"})]}),(0,l.jsx)("div",{className:"icono-list",children:(0,l.jsx)(s.t,{slidesPerView:5,loop:!0,className:"mySwiper",children:"group"!=e.type?n?n.map((function(n,o){return(0,l.jsx)(s.o,{className:e.iconoSelected==n?"icono selected":"icono",style:e.iconoSelected==n?{borderColor:e.colorSelected,borderWidth:"3px",borderStyle:"solid"}:{},onClick:function(){e.onChange(n)},children:(0,l.jsx)(i.Z,{name:n,color:e.colorSelected})},o)})):"No hay iconos disponibles":o?o.map((function(n,o){return(0,l.jsx)(s.o,{className:e.iconoSelected==n?"icono selected":"icono",style:e.iconoSelected==n?{borderColor:e.colorSelected,borderWidth:"3px",borderStyle:"solid"}:{},onClick:function(){e.onChange(n)},children:(0,l.jsx)(i.Z,{name:n,color:e.colorSelected})},o)})):"No hay iconos disponibles"})})]})}},9417:function(e,n,o){o.r(n),o.d(n,{default:function(){return g}});var s=o(5812),i=(o(4676),o(4432),o(2791)),l=o(6786),t=o(9603),c=(o(6382),o(5205),o(885)),a=o(1171),r=o(2299),u=o.n(r),d=o(1921),m=o(568),p=o(7242),x=o(2436),h=o(2926),f=o(184),j=function(e){var n=(0,x.Z)(),o=n.profile,l=(n.updateProfile,n.loadingprofile),t=(0,a.Z)(),r=(t.grupos,t.loadinggrupos,t.createNewGrupo),j=t.success,g=t.setSuccess,b=(0,i.useState)(""),C=(0,c.Z)(b,2),O=C[0],v=C[1],N=(0,i.useState)(""),S=(0,c.Z)(N,2),Z=S[0],y=S[1],k=(0,i.useState)(!1),w=(0,c.Z)(k,2),D=w[0],P=w[1],I=(0,i.useState)(!1),q=(0,c.Z)(I,2),F=q[0],E=q[1],G=(0,i.useState)("#5499C7"),V=(0,c.Z)(G,2),_=V[0],Q=V[1],W=(0,i.useState)("happyOutline"),$=(0,c.Z)(W,2),z=$[0],Y=$[1],H=(0,i.useState)(0),R=(0,c.Z)(H,2),U=(R[0],R[1],(0,i.useState)({isOpen:!1,content:"Ha ocurrido un error!",color:"danger"})),B=(0,c.Z)(U,2),K=B[0],X=B[1];return(0,f.jsxs)(f.Fragment,{children:[l?(0,f.jsx)(u(),{color:"blue",loading:!0,css:"display: block;margin: 0 auto",size:150}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(s.Ie,{className:"mc-input",children:[(0,f.jsxs)(s.Q$,{position:"floating",style:D&&!O?{color:"red"}:{color:"black"},children:["Nombre del grupo ",(0,f.jsx)("span",{className:"required",children:"*"})]}),(0,f.jsx)(s.pK,{maxlength:"20",disabled:j.status,value:O,placeholder:"Nombre de la cuenta",onIonChange:function(e){return v(e.detail.value)}})]}),(0,f.jsxs)(s.Ie,{className:"mc-input",children:[(0,f.jsxs)(s.Q$,{position:"floating",style:D&&!Z?{color:"red"}:{color:"black"},children:["Descripci\xf3n ",(0,f.jsx)("span",{className:"required",children:"*"})]}),(0,f.jsx)(s.g2,{maxlength:"100",disabled:j.status,clearOnEdit:!0,value:Z,onIonChange:function(e){return y(e.detail.value)}})]}),(0,f.jsx)(m.Z,{onChange:function(e){Q(e)},colorSelected:_}),(0,f.jsx)(p.Z,{onChange:function(e){Y(e)},colorSelected:_,iconoSelected:z,type:"group"}),(0,f.jsxs)(s.Ie,{className:"checkbox-gprivate",children:[(0,f.jsxs)("div",{className:"checkbox-gprivate-text",children:[(0,f.jsx)(s.Q$,{children:"Grupo privado"}),(0,f.jsx)("small",{children:"Si activas esta opci\xf3n nadie podr\xe1 unirse."})]}),(0,f.jsx)(s.nz,{slot:"start",checked:F,onIonChange:function(e){return E(e.detail.checked)}})]}),(0,f.jsxs)(s.YG,{expand:"full",className:"boton-guardar",onClick:function(){if(!O)return P(!0),void X({isOpen:!0,content:"Revise los campos marcados en rojo.",color:"danger"});P(!0);var e={createdby:o.uid,icono:z||"cashOutline",color:_||"#5499C7",desc:Z,name:O,users:[o.uid],codinv:F};r(e)},disabled:j.status,children:["Guardar",(0,f.jsx)(d.Z,{name:"arrowUpCircleOutline",slot:"end",color:"white"})]})]}),(0,f.jsx)(s.Px,{isOpen:K.isOpen,onDidDismiss:function(){return X(!1)},message:K.content,icon:h.informationCircle,position:"top",duration:2e3,color:K.color}),(0,f.jsx)(s.Px,{isOpen:j.status,onDidDismiss:function(){return g({status:!1,msg:""})},message:j.msg,icon:h.informationCircle,position:"top",duration:2e3,color:"success"})]})},g=function(){var e=(0,t.Z)(),n=(e.cuentas,e.loadingcuentas,(0,l.TH)().pathname.split("/")),o=n[n.length-1];return(0,f.jsx)(s._i,{children:(0,f.jsx)(s.W2,{fullscreen:!0,scrollX:"false",scrollY:"false",children:(0,f.jsx)(s.W2,{scrollX:"true",scrollY:"true",children:(0,f.jsx)(j,{type:o})})})})}}}]);
//# sourceMappingURL=8298.ddd1cc64.chunk.js.map