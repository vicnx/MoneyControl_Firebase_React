/*! For license information please see 5573.221f80bf.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkionic_app_base=self.webpackChunkionic_app_base||[]).push([[5573],{5573:function(e,n,t){t.r(n),t.d(n,{KEYBOARD_DID_CLOSE:function(){return r},KEYBOARD_DID_OPEN:function(){return i},copyVisualViewport:function(){return l},keyboardDidClose:function(){return g},keyboardDidOpen:function(){return p},keyboardDidResize:function(){return b},resetKeyboardAssist:function(){return s},setKeyboardClose:function(){return h},setKeyboardOpen:function(){return d},startKeyboardAssist:function(){return f},trackViewportChanges:function(){return y}});var i="ionKeyboardDidShow",r="ionKeyboardDidHide",o={},u={},a=!1,s=function(){o={},u={},a=!1},f=function(e){c(e),e.visualViewport&&(u=l(e.visualViewport),e.visualViewport.onresize=function(){y(e),p()||b(e)?d(e):g(e)&&h(e)})},c=function(e){e.addEventListener("keyboardDidShow",(function(n){return d(e,n)})),e.addEventListener("keyboardDidHide",(function(){return h(e)}))},d=function(e,n){w(e,n),a=!0},h=function(e){v(e),a=!1},p=function(){var e=(o.height-u.height)*u.scale;return!a&&o.width===u.width&&e>150},b=function(e){return a&&!g(e)},g=function(e){return a&&u.height===e.innerHeight},w=function(e,n){var t=n?n.keyboardHeight:e.innerHeight-u.height,r=new CustomEvent(i,{detail:{keyboardHeight:t}});e.dispatchEvent(r)},v=function(e){var n=new CustomEvent(r);e.dispatchEvent(n)},y=function(e){o=Object.assign({},u),u=l(e.visualViewport)},l=function(e){return{width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale}}}}]);
//# sourceMappingURL=5573.221f80bf.chunk.js.map