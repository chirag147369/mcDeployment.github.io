(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{BYMX:function(t,e,n){t.exports=function(){"use strict";function t(){return(t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var e=window.Element.prototype.matches,n=function(t,e){return t.closest(e)},i=function(t,e){return new window.Event(t,e)},s=function(t,e){return new window.CustomEvent(t,e)};!function(){if(window.Element.prototype.matches||(e=window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector),window.Element.prototype.closest||(n=function(t,n){if(!document.documentElement.contains(t))return null;do{if(e.call(t,n))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}),window.Event&&"function"==typeof window.Event||(i=function(t,e){e=e||{};var n=document.createEvent("Event");return n.initEvent(t,Boolean(e.bubbles),Boolean(e.cancelable)),n}),"function"!=typeof window.CustomEvent){var t=window.Event.prototype.preventDefault;s=function(e,n){var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,(n=n||{bubbles:!1,cancelable:!1,detail:null}).bubbles,n.cancelable,n.detail),i.preventDefault=function(){this.cancelable&&(t.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}))},i}}}();var c="active",o="linear",a="dstepper-block",r="dstepper-none",p="fade",u="transitionend",l=function(t,e,n,i){var o=t.bsStepper;if(!o._steps[e].classList.contains(c)&&!o._stepsContents[e].classList.contains(c)){var r=s("show.bs-stepper",{cancelable:!0,detail:{from:o._currentIndex,to:e,indexStep:e}});t.dispatchEvent(r);var p=o._steps.filter(function(t){return t.classList.contains(c)}),u=o._stepsContents.filter(function(t){return t.classList.contains(c)});r.defaultPrevented||(p.length&&p[0].classList.remove(c),u.length&&(u[0].classList.remove(c),t.classList.contains("vertical")||o.options.animation||u[0].classList.remove(a)),d(t,o._steps[e],o._steps,n),h(t,o._stepsContents[e],o._stepsContents,u,i))}},d=function(t,e,n,i){n.forEach(function(e){var n=e.querySelector(i.selectors.trigger);n.setAttribute("aria-selected","false"),t.classList.contains(o)&&n.setAttribute("disabled","disabled")}),e.classList.add(c);var s=e.querySelector(i.selectors.trigger);s.setAttribute("aria-selected","true"),t.classList.contains(o)&&s.removeAttribute("disabled")},h=function(t,e,n,i,o){var l=t.bsStepper,d=n.indexOf(e),h=s("shown.bs-stepper",{cancelable:!0,detail:{from:l._currentIndex,to:d,indexStep:d}});if(e.classList.contains(p)){e.classList.remove(r);var f=b(e);e.addEventListener(u,function n(){e.classList.add(a),e.removeEventListener(u,n),t.dispatchEvent(h),o()}),i.length&&i[0].classList.add(r),e.classList.add(c),g(e,f)}else e.classList.add(c),e.classList.add(a),t.dispatchEvent(h),o()},b=function(t){if(!t)return 0;var e=window.getComputedStyle(t).transitionDuration;return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},g=function(t,e){var n=!1,s=e+5;function c(){n=!0,t.removeEventListener(u,c)}t.addEventListener(u,c),window.setTimeout(function(){n||t.dispatchEvent(i(u)),t.removeEventListener(u,c)},s)},f={linear:!0,animation:!1,selectors:{steps:".step",trigger:".step-trigger",stepper:".bs-stepper"}};return function(){function e(e,n){var i=this;void 0===n&&(n={}),this._element=e,this._currentIndex=0,this._stepsContents=[],this.options=t({},f,{},n),this.options.selectors=t({},f.selectors,{},this.options.selectors),this.options.linear&&this._element.classList.add(o),this._steps=[].slice.call(this._element.querySelectorAll(this.options.selectors.steps)),this._steps.filter(function(t){return t.hasAttribute("data-target")}).forEach(function(t){i._stepsContents.push(i._element.querySelector(t.getAttribute("data-target")))}),this.options.animation&&this._stepsContents.forEach(function(t){t.classList.add(p),t.classList.add(r)}),this._setLinkListeners(),Object.defineProperty(this._element,"bsStepper",{value:this,writable:!0}),this._steps.length&&l(this._element,this._currentIndex,this.options,function(){})}var i=e.prototype;return i._setLinkListeners=function(){var t=this;this._steps.forEach(function(e){var i,s=e.querySelector(t.options.selectors.trigger);t.options.linear?(t._clickStepLinearListener=function(t){t.preventDefault()},s.addEventListener("click",t._clickStepLinearListener)):(t._clickStepNonLinearListener=(i=t.options,function(t){t.preventDefault();var e=n(t.target,i.selectors.steps),s=n(e,i.selectors.stepper),c=s.bsStepper,o=c._steps.indexOf(e);l(s,o,i,function(){c._currentIndex=o})}),s.addEventListener("click",t._clickStepNonLinearListener))})},i.next=function(){var t=this,e=this._currentIndex+1<=this._steps.length-1?this._currentIndex+1:this._steps.length-1;l(this._element,e,this.options,function(){t._currentIndex=e})},i.previous=function(){var t=this,e=this._currentIndex-1>=0?this._currentIndex-1:0;l(this._element,e,this.options,function(){t._currentIndex=e})},i.to=function(t){var e=this,n=t-1,i=n>=0&&n<this._steps.length?n:0;l(this._element,i,this.options,function(){e._currentIndex=i})},i.reset=function(){var t=this;l(this._element,0,this.options,function(){t._currentIndex=0})},i.destroy=function(){var t=this;this._steps.forEach(function(e){e.querySelector(t.options.selectors.trigger).removeEventListener("click",t.options.linear?t._clickStepLinearListener:t._clickStepNonLinearListener)}),this._element.bsStepper=void 0,this._element=void 0,this._currentIndex=void 0,this._steps=void 0,this._stepsContents=void 0,this._clickStepLinearListener=void 0,this._clickStepNonLinearListener=void 0},e}()}()},"P9+s":function(t,e,n){"use strict";n.d(e,"a",function(){return h}),n.d(e,"b",function(){return b});var i=n("1OyB"),s=n("vuIU"),c=n("fXoL"),o=n("TNpa"),a=n.n(o),r=n("ofXK"),p=function(t){return{active:t}};function u(t,e){if(1&t){var n=c.ac();c.Zb(0,"li",8),c.Zb(1,"a",3),c.kc("click",function(){c.Lc(n);var t=e.$implicit;return c.oc(2).setPage(t)}),c.Vc(2),c.Yb(),c.Yb()}if(2&t){var i=e.$implicit,s=c.oc(2);c.vc("ngClass",c.Ac(2,p,s.pager.currentPage===i)),c.Fb(2),c.Wc(i)}}var l=function(t){return{disabled:t}};function d(t,e){if(1&t){var n=c.ac();c.Zb(0,"ul",1),c.Zb(1,"li",2),c.Zb(2,"a",3),c.kc("click",function(){return c.Lc(n),c.oc().setPage(1)}),c.Vc(3,"First"),c.Yb(),c.Yb(),c.Zb(4,"li",4),c.Zb(5,"a",3),c.kc("click",function(){c.Lc(n);var t=c.oc();return t.setPage(t.pager.currentPage-1)}),c.Vc(6,"Previous"),c.Yb(),c.Yb(),c.Tc(7,u,3,4,"li",5),c.Zb(8,"li",6),c.Zb(9,"a",3),c.kc("click",function(){c.Lc(n);var t=c.oc();return t.setPage(t.pager.currentPage+1)}),c.Vc(10,"Next"),c.Yb(),c.Yb(),c.Zb(11,"li",7),c.Zb(12,"a",3),c.kc("click",function(){c.Lc(n);var t=c.oc();return t.setPage(t.pager.totalPages)}),c.Vc(13,"Last"),c.Yb(),c.Yb(),c.Yb()}if(2&t){var i=c.oc();c.Fb(1),c.vc("ngClass",c.Ac(5,l,1===i.pager.currentPage)),c.Fb(3),c.vc("ngClass",c.Ac(7,l,1===i.pager.currentPage)),c.Fb(3),c.vc("ngForOf",i.pager.pages),c.Fb(1),c.vc("ngClass",c.Ac(9,l,i.pager.currentPage===i.pager.totalPages)),c.Fb(3),c.vc("ngClass",c.Ac(11,l,i.pager.currentPage===i.pager.totalPages))}}var h=function(){var t=function(){function t(){Object(i.a)(this,t),this.changePage=new c.o(!0),this.initialPage=1,this.pageSize=10,this.maxPages=10,this.pager={}}return Object(s.a)(t,[{key:"ngOnInit",value:function(){this.items&&this.items.length&&this.setPage(this.initialPage)}},{key:"ngOnChanges",value:function(t){t.items.currentValue!==t.items.previousValue&&this.setPage(this.initialPage)}},{key:"setPage",value:function(t){this.pager=a()(this.items.length,t,this.pageSize,this.maxPages);var e=this.items.slice(this.pager.startIndex,this.pager.endIndex+1);this.changePage.emit(e)}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Nb({type:t,selectors:[["jw-pagination"]],inputs:{initialPage:"initialPage",pageSize:"pageSize",maxPages:"maxPages",items:"items"},outputs:{changePage:"changePage"},features:[c.Db],decls:1,vars:1,consts:[["class","pagination",4,"ngIf"],[1,"pagination"],[1,"page-item","first-item",3,"ngClass"],[1,"page-link",3,"click"],[1,"page-item","previous-item",3,"ngClass"],["class","page-item number-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item","next-item",3,"ngClass"],[1,"page-item","last-item",3,"ngClass"],[1,"page-item","number-item",3,"ngClass"]],template:function(t,e){1&t&&c.Tc(0,d,14,13,"ul",0),2&t&&c.vc("ngIf",e.pager.pages&&e.pager.pages.length)},directives:[r.p,r.n,r.o],encapsulation:2}),t}(),b=function(){var t=function t(){Object(i.a)(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Rb({type:t}),t.\u0275inj=c.Qb({imports:[[r.c]]}),t}()},RbH5:function(t,e,n){"use strict";n.d(e,"a",function(){return b});var i=n("fXoL"),s=n("ofXK"),c=n("znSr"),o=n("3Pt+"),a=n("DGdB");function r(t,e){1&t&&i.Ub(0,"span",7)}function p(t,e){1&t&&i.Ub(0,"span",8)}function u(t,e){1&t&&i.Ub(0,"span",9)}function l(t,e){1&t&&i.Ub(0,"span",8)}var d=function(t,e){return{"touchspin-sm":t,"touchspin-lg":e}},h=function(t,e,n,i){return{"btn-info":t,"btn-warning":e,"btn-success":n,"btn-danger":i}},b=function(){function t(){this.numberValue=0,this.iconChevron=!1,this.disable=!1,this.size="",this.color="",this.maxValue=9999,this.minValue=0,this.disabledValueIncrement=!1,this.disabledValueDecrement=!1}return t.prototype.inputChange=function(t){this.disabledValueIncrement=t==this.maxValue||t>this.maxValue,this.disabledValueDecrement=t==this.minValue||t<this.minValue},t.prototype.increment=function(){this.numberValue+=null==this.stepValue?1:this.stepValue,null!=this.minValue&&null!=this.maxValue&&(this.disabledValueIncrement=this.numberValue==this.maxValue||this.numberValue>this.maxValue,this.disabledValueDecrement=!(this.numberValue>this.minValue))},t.prototype.decrement=function(){this.numberValue-=null==this.stepValue?1:this.stepValue,null!=this.minValue&&null!=this.maxValue&&(this.disabledValueDecrement=this.numberValue==this.minValue||this.numberValue<this.minValue,this.disabledValueIncrement=!(this.numberValue<this.maxValue))},t.prototype.ngOnInit=function(){this.disabledValueIncrement=this.disable,this.disabledValueDecrement=this.disable},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Nb({type:t,selectors:[["core-touchspin"]],inputs:{numberValue:"numberValue",iconChevron:"iconChevron",disable:"disable",size:"size",color:"color",stepValue:"stepValue",maxValue:"maxValue",minValue:"minValue"},decls:8,vars:28,consts:[[1,"btn-group","touchspin-wrapper",3,"ngClass"],[1,"btn","btn-sm","btn-primary","btn-touchspin","btn-touchspin-down",3,"disabled","ngClass","click"],["appDataFeather","minus",4,"ngIf"],["appDataFeather","chevron-down",4,"ngIf"],["type","text","pattern","\\d*","maxlength","4",1,"form-control",3,"ngModel","value","disabled","step","min","max","ngModelChange","input"],[1,"btn","btn-sm","btn-primary","btn-touchspin","btn-touchspin-up",3,"disabled","ngClass","click"],["appDataFeather","plus",4,"ngIf"],["appDataFeather","minus"],["appDataFeather","chevron-down"],["appDataFeather","plus"]],template:function(t,e){1&t&&(i.Zb(0,"div",0),i.Zb(1,"button",1),i.kc("click",function(){return e.decrement()}),i.Tc(2,r,1,0,"span",2),i.Tc(3,p,1,0,"span",3),i.Yb(),i.Zb(4,"input",4),i.kc("ngModelChange",function(t){return e.numberValue=t})("input",function(t){return e.inputChange(t.target.value)}),i.Yb(),i.Zb(5,"button",5),i.kc("click",function(){return e.increment()}),i.Tc(6,u,1,0,"span",6),i.Tc(7,l,1,0,"span",3),i.Yb(),i.Yb()),2&t&&(i.vc("ngClass",i.Bc(15,d,"sm"==e.size,"lg"==e.size)),i.Fb(1),i.vc("disabled",e.disabledValueDecrement)("ngClass",i.Dc(18,h,"info"==e.color,"warning"==e.color,"success"==e.color,"danger"==e.color)),i.Fb(1),i.vc("ngIf",!e.iconChevron),i.Fb(1),i.vc("ngIf",e.iconChevron),i.Fb(1),i.wc("value",e.numberValue),i.vc("ngModel",e.numberValue)("disabled",e.disable)("step",e.stepValue)("min",e.minValue)("max",e.maxValue),i.Fb(1),i.vc("disabled",e.disabledValueIncrement)("ngClass",i.Dc(23,h,"info"==e.color,"warning"==e.color,"success"==e.color,"danger"==e.color)),i.Fb(1),i.vc("ngIf",!e.iconChevron),i.Fb(1),i.vc("ngIf",e.iconChevron))},directives:[s.n,c.a,s.p,o.c,o.w,o.l,o.q,o.t,a.a],styles:[".touchspin-wrapper{width:8.4rem}.touchspin-wrapper .btn-touchspin{z-index:1;padding:0;min-width:20px;height:20px;border-radius:5px!important;position:relative;top:4px}.touchspin-wrapper .btn-touchspin span{position:relative;top:1px}.touchspin-wrapper .btn-touchspin.btn-touchspin-down{left:10px}.touchspin-wrapper .btn-touchspin.btn-touchspin-up{right:10px}.touchspin-wrapper .form-control{padding:5px;height:auto;border-radius:5px!important;border:0!important;background-color:#f8f8f8;text-align:center;font-weight:500}.touchspin-wrapper .form-control:focus{box-shadow:none}.touchspin-wrapper.touchspin-lg{width:9.375rem}.touchspin-wrapper.touchspin-lg .btn-touchspin{min-width:24px;height:24px;top:5px}.touchspin-wrapper.touchspin-lg .form-control{padding:9px;height:auto}.touchspin-wrapper.touchspin-sm{width:6.25rem}.touchspin-wrapper.touchspin-sm .btn-touchspin{min-width:16px;height:16px;top:4px}.touchspin-wrapper.touchspin-sm .form-control{padding:2px;height:auto}.dark-layout .touchspin-wrapper .form-control{background-color:#161d31}"],encapsulation:2}),t}()},TNpa:function(t,e,n){"use strict";t.exports=function(t,e,n,i){void 0===e&&(e=1),void 0===n&&(n=10),void 0===i&&(i=10);var s,c,o=Math.ceil(t/n);if(e<1?e=1:e>o&&(e=o),o<=i)s=1,c=o;else{var a=Math.floor(i/2),r=Math.ceil(i/2)-1;e<=a?(s=1,c=i):e+r>=o?(s=o-i+1,c=o):(s=e-a,c=e+r)}var p=(e-1)*n,u=Math.min(p+n-1,t-1),l=Array.from(Array(c+1-s).keys()).map(function(t){return s+t});return{totalItems:t,currentPage:e,pageSize:n,totalPages:o,startPage:s,endPage:c,startIndex:p,endIndex:u,pages:l}}},XGjr:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("fXoL"),s=function(){function t(){}return t.prototype.transform=function(t,e,n){return t?e?(e=e.toLowerCase(),t.filter(function(t){return t[n].toLowerCase().includes(e)})):t:[]},t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i.Sb({name:"filter",type:t,pure:!0}),t}()},"pN+Y":function(t,e,n){"use strict";n.d(e,"a",function(){return S});var i=n("mrSG"),s=n("fXoL"),c=n("1kSV"),o=n("ofXK"),a=n("OtPg");function r(t,e){if(1&t){var n=s.ac();s.Zb(0,"i",16),s.kc("click",function(){s.Lc(n);var t=s.oc(3);return t.copyCode(t.snippetCode.html)}),s.Yb()}}function p(t,e){1&t&&(s.Zb(0,"span",17),s.Vc(1,"copied !"),s.Yb())}var u=function(){return["html"]};function l(t,e){if(1&t&&(s.Zb(0,"div",12),s.Zb(1,"pre"),s.Vc(2,"                  "),s.Tc(3,r,1,0,"i",13),s.Vc(4,"\n                  "),s.Tc(5,p,2,0,"span",14),s.Vc(6,"\n                  "),s.Zb(7,"code",15),s.Vc(8,"\n                  "),s.Yb(),s.Vc(9,"\n                "),s.Yb(),s.Yb()),2&t){var n=s.oc(2);s.Fb(3),s.vc("ngIf",!n.copyCodeStatus),s.Fb(2),s.vc("ngIf",n.copyCodeStatus),s.Fb(2),s.vc("highlight",n.snippetCode.html)("languages",s.zc(4,u))}}function d(t,e){1&t&&(s.Zb(0,"li",9),s.Zb(1,"a",10),s.Vc(2,"HTML"),s.Yb(),s.Tc(3,l,10,5,"ng-template",11),s.Yb()),2&t&&s.vc("ngbNavItem","html")}function h(t,e){if(1&t){var n=s.ac();s.Zb(0,"i",20),s.kc("click",function(){s.Lc(n);var t=s.oc(3);return t.copyCode(t.snippetCode.ts)}),s.Yb()}}function b(t,e){1&t&&(s.Zb(0,"span",21),s.Vc(1,"copied !"),s.Yb())}var g=function(){return["typescript"]};function f(t,e){if(1&t&&(s.Zb(0,"div",12),s.Zb(1,"pre"),s.Vc(2,"                  "),s.Tc(3,h,1,0,"i",18),s.Vc(4,"\n                  "),s.Tc(5,b,2,0,"span",19),s.Vc(6,"\n                  "),s.Zb(7,"code",15),s.Vc(8,"\n                  "),s.Yb(),s.Vc(9,"\n                "),s.Yb(),s.Yb()),2&t){var n=s.oc(2);s.Fb(3),s.vc("ngIf",!n.copyCodeStatus),s.Fb(2),s.vc("ngIf",n.copyCodeStatus),s.Fb(2),s.vc("highlight",n.snippetCode.ts)("languages",s.zc(4,g))}}function m(t,e){1&t&&(s.Zb(0,"li",9),s.Zb(1,"a",10),s.Vc(2,"TS"),s.Yb(),s.Tc(3,f,10,5,"ng-template",11),s.Yb()),2&t&&s.vc("ngbNavItem","ts")}function v(t,e){if(1&t){var n=s.ac();s.Zb(0,"i",20),s.kc("click",function(){s.Lc(n);var t=s.oc(3);return t.copyCode(t.snippetCode.scss)}),s.Yb()}}function C(t,e){1&t&&(s.Zb(0,"span",21),s.Vc(1,"copied !"),s.Yb())}var w=function(){return["scss"]};function x(t,e){if(1&t&&(s.Zb(0,"div",12),s.Zb(1,"pre"),s.Vc(2,"                  "),s.Tc(3,v,1,0,"i",18),s.Vc(4,"\n                  "),s.Tc(5,C,2,0,"span",19),s.Vc(6,"\n                  "),s.Zb(7,"code",15),s.Vc(8,"\n                  "),s.Yb(),s.Vc(9,"\n                "),s.Yb(),s.Yb()),2&t){var n=s.oc(2);s.Fb(3),s.vc("ngIf",!n.copyCodeStatus),s.Fb(2),s.vc("ngIf",n.copyCodeStatus),s.Fb(2),s.vc("highlight",n.snippetCode.scss)("languages",s.zc(4,w))}}function V(t,e){1&t&&(s.Zb(0,"li",9),s.Zb(1,"a",10),s.Vc(2,"SCSS"),s.Yb(),s.Tc(3,x,10,5,"ng-template",11),s.Yb()),2&t&&s.vc("ngbNavItem","scss")}function y(t,e){if(1&t){var n=s.ac();s.Zb(0,"i",20),s.kc("click",function(){s.Lc(n);var t=s.oc(3);return t.copyCode(t.snippetCode.json)}),s.Yb()}}function _(t,e){1&t&&(s.Zb(0,"span",21),s.Vc(1,"copied !"),s.Yb())}var L=function(){return["json"]};function I(t,e){if(1&t&&(s.Zb(0,"div",12),s.Ub(1,"div",22),s.Zb(2,"pre"),s.Vc(3,"                  "),s.Tc(4,y,1,0,"i",18),s.Vc(5,"\n                  "),s.Tc(6,_,2,0,"span",19),s.Vc(7,"\n                  "),s.Zb(8,"code",15),s.Vc(9,"\n                  "),s.Yb(),s.Vc(10,"\n                "),s.Yb(),s.Yb()),2&t){var n=s.oc(2);s.Fb(4),s.vc("ngIf",!n.copyCodeStatus),s.Fb(2),s.vc("ngIf",n.copyCodeStatus),s.Fb(2),s.vc("highlight",n.snippetCode.json)("languages",s.zc(4,L))}}function k(t,e){1&t&&(s.Zb(0,"li",9),s.Zb(1,"a",10),s.Vc(2,"JSON"),s.Yb(),s.Tc(3,I,11,5,"ng-template",11),s.Yb()),2&t&&s.vc("ngbNavItem","json")}var P=[[["",8,"card-title"]],[["",8,"card-body"]],"*"],Y=[".card-title",".card-body","*"],S=function(){function t(){this.copyCodeStatus=!1,this._defaultSnippetCode={isCollapsed:!0}}return t.prototype.copyCode=function(t){var e=this,n=document.createElement("textarea");n.style.position="fixed",n.value=t,document.body.appendChild(n),n.focus(),n.select(),document.execCommand("copy"),document.body.removeChild(n),setTimeout(function(){e.copyCodeStatus=!1},500),this.copyCodeStatus=!0},t.prototype.ngOnInit=function(){this.snippetCode=Object(i.a)(Object(i.a)({},this._defaultSnippetCode),this.snippetCode)},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Nb({type:t,selectors:[["core-card-snippet"]],inputs:{snippetCode:"snippetCode"},ngContentSelectors:Y,decls:15,vars:8,consts:[[1,"card"],[1,"card-header"],[1,"code-icon",3,"click"],[3,"ngbCollapse"],[1,"card-body","pt-0"],["ngbNav","",1,"nav-tabs",3,"activeId","activeIdChange"],["nav","ngbNav"],[3,"ngbNavItem",4,"ngIf"],[1,"mt-2",3,"ngbNavOutlet"],[3,"ngbNavItem"],["ngbNavLink",""],["ngbNavContent",""],[1,"code-toggle"],["class","feather icon-copy font-medium-2 cursor-pointer text-white p-1",3,"click",4,"ngIf"],["class","text-white text-copied mr-1 badge badge-secondary",4,"ngIf"],[3,"highlight","languages"],[1,"feather","icon-copy","font-medium-2","cursor-pointer","text-white","p-1",3,"click"],[1,"text-white","text-copied","mr-1","badge","badge-secondary"],["class","feather icon-copy font-medium-2 cursor-pointer text-white float-right p-1",3,"click",4,"ngIf"],["class","text-white float-right mr-1 badge badge-secondary",4,"ngIf"],[1,"feather","icon-copy","font-medium-2","cursor-pointer","text-white","float-right","p-1",3,"click"],[1,"text-white","float-right","mr-1","badge","badge-secondary"],[1,"mb-1","ml-50"]],template:function(t,e){if(1&t&&(s.uc(P),s.Zb(0,"div",0),s.Zb(1,"div",1),s.tc(2),s.Zb(3,"i",2),s.kc("click",function(){return e.snippetCode.isCollapsed=!e.snippetCode.isCollapsed}),s.Yb(),s.Yb(),s.tc(4,1),s.tc(5,2),s.Zb(6,"div",3),s.Zb(7,"div",4),s.Zb(8,"ul",5,6),s.kc("activeIdChange",function(t){return e.snippetCode.active=t}),s.Tc(10,d,4,1,"li",7),s.Tc(11,m,4,1,"li",7),s.Tc(12,V,4,1,"li",7),s.Tc(13,k,4,1,"li",7),s.Yb(),s.Ub(14,"div",8),s.Yb(),s.Yb(),s.Yb()),2&t){var n=s.Hc(9);s.Fb(3),s.Gb("aria-expanded",!e.snippetCode.isCollapsed),s.Fb(3),s.vc("ngbCollapse",e.snippetCode.isCollapsed),s.Fb(2),s.vc("activeId",e.snippetCode.active),s.Fb(2),s.vc("ngIf",e.snippetCode.html),s.Fb(1),s.vc("ngIf",e.snippetCode.ts),s.Fb(1),s.vc("ngIf",e.snippetCode.scss),s.Fb(1),s.vc("ngIf",e.snippetCode.json),s.Fb(1),s.vc("ngbNavOutlet",n)}},directives:[c.g,c.q,o.p,c.u,c.s,c.t,c.r,a.b],styles:['@charset "UTF-8";.code-icon[_ngcontent-%COMP%]{font:normal normal normal 14px/1 FontAwesome;display:inline-block;font-weight:700!important;cursor:pointer}.code-icon[_ngcontent-%COMP%]:before{content:"\uf121"}.code-toggle[_ngcontent-%COMP%]{transition:transform .35s,opacity .35s,max-height .4s ease-out;position:relative}.code-toggle.collapse[_ngcontent-%COMP%]{opacity:0;max-height:0;transform:translateY(100%)}.code-toggle.collapse.show[_ngcontent-%COMP%]{opacity:1;max-height:600px;transform:translateY(0)}.code-toggle.collapse[_ngcontent-%COMP%]:not(.show){display:block}.code-toggle[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{max-height:350px;overflow:auto;white-space:nowrap;margin:0}.code-toggle[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{white-space:pre;overflow:visible;padding:2rem .5em}.code-toggle[_ngcontent-%COMP%]   .icon-copy[_ngcontent-%COMP%], .code-toggle[_ngcontent-%COMP%]   .text-copied[_ngcontent-%COMP%]{position:absolute;right:7px}.code-toggle[_ngcontent-%COMP%]   .text-copied[_ngcontent-%COMP%]{top:5px}']}),t}()}}]);