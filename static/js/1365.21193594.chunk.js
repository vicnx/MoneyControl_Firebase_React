"use strict";(self.webpackChunkionic_app_base=self.webpackChunkionic_app_base||[]).push([[1365],{1365:function(e,a,n){n.r(a),n.d(a,{default:function(){return u}});var s=n(5812),i=n(2436),r=(n(9698),n(885)),t=n(2791),c=n(2926),l=n(637);var o=n(184);function d(){var e=(0,i.Z)(),a=e.profile,n=e.updateProfile,d=(0,t.useState)(!1),u=(0,r.Z)(d,2),h=u[0],x=u[1],m=(0,t.useState)(a.image),p=(0,r.Z)(m,2),f=p[0],j=p[1],g={backgroundImage:'url("'+a.image+'")'},v=["adventurer","adventurer-neutral","avataaars","big-ears"];(0,t.useEffect)((function(){console.log("ha cambiado profile"),j(a.image)}),[a]);var k=function(){var e=v[Math.floor(Math.random()*v.length)];j("https://avatars.dicebear.com/api/"+e+"/"+function(e){for(var a="",n=e,s=0;s<e;s++)a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random()*n));return a}(8)+".svg")};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.ki,{isOpen:h,initialBreakpoint:.5,breakpoints:[0,.5,1],onDidDismiss:function(){return x(!1)},children:[(0,o.jsxs)(s.sr,{children:[(0,o.jsx)(s.wd,{children:"Cambiar foto"}),(0,o.jsx)(s.Sm,{slot:"end",children:(0,o.jsx)(s.YG,{onClick:function(){x(!1)},children:"Close"})})]}),(0,o.jsxs)(s.W2,{className:"modalContent",children:[(0,o.jsxs)(s.Ie,{children:[(0,o.jsx)(s.Q$,{position:"stacked",children:"Introduce la URL de la imagen"}),(0,o.jsx)(s.pK,{value:f,placeholder:"Enter new image URL",onIonChange:function(e){return j(e.detail.value)},clearInput:!0})]}),(0,o.jsxs)("div",{className:"buttons-div",children:[(0,o.jsxs)(s.YG,{onClick:function(){n({imageURL:f}),x(!1)},color:"success",children:[(0,o.jsx)(s.gu,{slot:"start",icon:c.logInOutline}),"Guardar"]}),(0,o.jsxs)(s.YG,{onClick:function(){k()},color:"warning",children:[(0,o.jsx)(s.gu,{slot:"start",icon:c.imageOutline}),"Generar Avatar"]})]}),(0,o.jsx)("div",{className:"imageCanvas",children:(0,o.jsx)("img",{src:f,alt:""})})]})]}),(0,o.jsx)(s.W2,{fullscreen:!0,children:(0,o.jsx)("div",{className:"profile-div",children:(0,o.jsxs)("div",{className:"up",children:[(0,o.jsxs)(s.Q$,{className:"icon-edit-photo",onClick:function(){x(!0)},children:[(0,o.jsx)(s.gu,{icon:c.createOutline,slot:"start"}),"Edit"]}),(0,o.jsx)("div",{className:"up__bkg-photo"}),(0,o.jsx)("div",{className:"up__face-photo",style:g,onClick:function(){x(!0)},id:"trigger-button"}),(0,o.jsxs)("div",{className:"up__text",children:[(0,o.jsx)("h3",{className:"up__text-header",children:a.name}),(0,o.jsx)("p",{className:"up__text-para",children:a.email}),(0,o.jsx)(l.Z,{})]})]})})})]})}var u=function(){(0,i.Z)().loadingprofile;return(0,o.jsx)(s._i,{children:(0,o.jsx)(d,{})})}}}]);
//# sourceMappingURL=1365.21193594.chunk.js.map