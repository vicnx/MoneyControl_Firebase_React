"use strict";(self.webpackChunkionic_app_base=self.webpackChunkionic_app_base||[]).push([[128],{3128:function(e,a,n){n.r(a),n.d(a,{default:function(){return h}});var s=n(5812),i=n(885),t=n(2436),r=n(2926),l=n(2791),c=n(184);function o(){var e=(0,t.Z)().SignOut;return(0,c.jsxs)(s.YG,{size:"medium",shape:"round",color:"danger",onClick:e,children:[(0,c.jsx)(s.gu,{slot:"start",icon:r.logOutOutline}),"Logout"]})}var u=n(6392);function d(){var e=(0,t.Z)(),a=e.profile,n=e.updateProfile,d=(0,l.useState)(!1),h=(0,i.Z)(d,2),x=h[0],m=h[1],p=(0,l.useState)(a.image),j=(0,i.Z)(p,2),g=j[0],f=j[1],v={backgroundImage:'url("'+(a.image?a.image:u.tl.defaultAvatar)+'")'},k=["adventurer","adventurer-neutral","avataaars","big-ears","fun-emoji","bottts","bottts-neutral","personas","pixel-art","pixel-art-neutral"];(0,l.useEffect)((function(){console.log("ha cambiado profile"),f(a.image?a.image:u.tl.defaultAvatar)}),[a]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.ki,{isOpen:x,initialBreakpoint:.5,breakpoints:[0,.5,1],onDidDismiss:function(){return m(!1)},children:[(0,c.jsxs)(s.sr,{children:[(0,c.jsx)(s.wd,{children:"Cambiar foto"}),(0,c.jsx)(s.Sm,{slot:"end",children:(0,c.jsx)(s.YG,{onClick:function(){m(!1)},children:"Close"})})]}),(0,c.jsxs)(s.W2,{className:"modalContent",children:[(0,c.jsxs)(s.Ie,{children:[(0,c.jsx)(s.Q$,{position:"stacked",children:"Introduce la URL de la imagen"}),(0,c.jsx)(s.pK,{value:g,placeholder:"Enter new image URL",onIonChange:function(e){return f(e.detail.value)},clearInput:!0})]}),(0,c.jsxs)("div",{className:"buttons-div",children:[(0,c.jsxs)(s.YG,{onClick:function(){n({imageURL:g}),m(!1)},color:"success",children:[(0,c.jsx)(s.gu,{slot:"start",icon:r.logInOutline}),"Guardar"]}),(0,c.jsxs)(s.YG,{onClick:function(){!function(){var e=k[Math.floor(Math.random()*k.length)],a="https://api.dicebear.com/5.x/".concat(e,"/svg?seed=").concat((0,u.O1)(8));f(a)}()},color:"warning",children:[(0,c.jsx)(s.gu,{slot:"start",icon:r.imageOutline}),"Generar Avatar"]})]}),(0,c.jsx)("div",{className:"imageCanvas",children:(0,c.jsx)("img",{src:g,alt:""})})]})]}),(0,c.jsx)(s.W2,{fullscreen:!0,children:(0,c.jsx)("div",{className:"profile-div",children:(0,c.jsxs)("div",{className:"up",children:[(0,c.jsxs)(s.Q$,{className:"icon-edit-photo",onClick:function(){m(!0)},children:[(0,c.jsx)(s.gu,{icon:r.createOutline,slot:"start"}),"Edit"]}),(0,c.jsx)("div",{className:"up__bkg-photo"}),(0,c.jsx)("div",{className:"up__face-photo",style:v,onClick:function(){m(!0)},id:"trigger-button"}),(0,c.jsxs)("div",{className:"up__text",children:[(0,c.jsx)("h3",{className:"up__text-header",children:a.name}),(0,c.jsx)("p",{className:"up__text-para",children:a.email}),(0,c.jsx)(o,{})]})]})})})]})}var h=function(){return(0,c.jsx)(s._i,{children:(0,c.jsx)(d,{})})}}}]);
//# sourceMappingURL=128.b9531d7c.chunk.js.map