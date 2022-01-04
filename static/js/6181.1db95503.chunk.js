"use strict";(self.webpackChunkionic_app_base=self.webpackChunkionic_app_base||[]).push([[6181],{6181:function(e,t,i){i.r(t),i.d(t,{ion_picker_column_internal:function(){return l}});var n=i(4039),r=i(323),o=i(4960),a=i(7368),s=i(8855),l=function(){function e(e){var t=this;(0,n.r)(this,e),this.ionChange=(0,n.e)(this,"ionChange",7),this.hapticsStarted=!1,this.isColumnVisible=!1,this.isActive=!1,this.items=[],this.color="primary",this.numericInput=!1,this.centerPickerItemInView=function(e,i){void 0===i&&(i=!0),t.el.scroll({top:e.offsetTop-3*e.clientHeight+e.clientHeight/2,left:0,behavior:i?"smooth":void 0})},this.inputModeChange=function(e){if(t.numericInput){var i=e.detail,n=i.useInputMode,r=i.inputModeColumn,o=void 0===r||r===t.el;t.isActive=!(!n||!o)}},this.initializeScrollListener=function(){var e,i=t.el,n=t.activeItem,r=function(){(0,o.r)((function(){e&&(clearTimeout(e),e=void 0),t.hapticsStarted||((0,a.a)(),t.hapticsStarted=!0);var r=i.getBoundingClientRect(),o=r.x+r.width/2,s=r.y+r.height/2,l=i.shadowRoot.elementFromPoint(o,s);null!==n&&n.classList.remove(c),l!==n&&(0,a.b)(),n=l,l.classList.add(c),e=setTimeout((function(){var e=l.getAttribute("data-index");if(null!==e){var i=parseInt(e,10),n=t.items[i];n.value!==t.value&&(t.value=n.value,(0,a.h)(),t.hapticsStarted=!1)}}),250)}))};(0,o.r)((function(){i.addEventListener("scroll",r),t.destroyScrollListener=function(){i.removeEventListener("scroll",r)}}))}}return e.prototype.valueChange=function(){if(this.isColumnVisible){var e=this.items,t=this.value;this.scrollActiveItemIntoView();var i=e.find((function(e){return e.value===t}));i&&this.ionChange.emit(i)}},e.prototype.componentWillLoad=function(){var e=this;new IntersectionObserver((function(t){var i;if(t[0].isIntersecting){var n=(0,o.g)(e.el).querySelector("."+c);null===n||void 0===n||n.classList.remove(c),e.scrollActiveItemIntoView(),null===(i=e.activeItem)||void 0===i||i.classList.add(c),e.initializeScrollListener(),e.isColumnVisible=!0}else e.destroyScrollListener&&(e.destroyScrollListener(),e.destroyScrollListener=void 0),e.isColumnVisible=!1}),{threshold:.01}).observe(this.el);var t=this.el.closest("ion-picker-internal");null!==t&&t.addEventListener("ionInputModeChange",(function(t){return e.inputModeChange(t)}))},e.prototype.scrollActiveItemIntoView=function(){var e=this.activeItem;e&&this.centerPickerItemInView(e,!1)},Object.defineProperty(e.prototype,"activeItem",{get:function(){return(0,o.g)(this.el).querySelector('.picker-item[data-value="'+this.value+'"]')},enumerable:!1,configurable:!0}),e.prototype.render=function(){var e,t=this,i=this,o=i.items,a=i.color,l=i.isActive,c=i.numericInput,p=(0,r.b)(this);return(0,n.h)(n.H,{tabindex:0,class:(0,s.c)(a,(e={},e[p]=!0,e["picker-column-active"]=l,e["picker-column-numeric-input"]=c,e))},(0,n.h)("div",{class:"picker-item picker-item-empty"},"\xa0"),(0,n.h)("div",{class:"picker-item picker-item-empty"},"\xa0"),(0,n.h)("div",{class:"picker-item picker-item-empty"},"\xa0"),o.map((function(e,i){return(0,n.h)("div",{class:"picker-item","data-value":e.value,"data-index":i,onClick:function(e){t.centerPickerItemInView(e.target)}},e.text)})),(0,n.h)("div",{class:"picker-item picker-item-empty"},"\xa0"),(0,n.h)("div",{class:"picker-item picker-item-empty"},"\xa0"),(0,n.h)("div",{class:"picker-item picker-item-empty"},"\xa0"))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,n.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChange"]}},enumerable:!1,configurable:!0}),e}(),c="picker-item-active";l.style={ios:":host{padding-left:16px;padding-right:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host::-webkit-scrollbar{display:none}:host .picker-item{height:34px;line-height:34px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty{scroll-snap-align:none}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}",md:":host{padding-left:16px;padding-right:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host::-webkit-scrollbar{display:none}:host .picker-item{height:34px;line-height:34px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty{scroll-snap-align:none}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}:host .picker-item-active{color:var(--ion-color-base)}"}}}]);
//# sourceMappingURL=6181.1db95503.chunk.js.map