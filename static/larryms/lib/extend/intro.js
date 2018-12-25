(function(e){if(window.layui&&layui.define){layui.define(function(t){t("intro",e())})}else if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=e();module.exports.introJs=function(){console.warn('Deprecated: please use require("intro.js") directly, instead of the introJs method of the function');return e().apply(this,arguments)}}else if(typeof define==="function"&&define.amd){define([],e)}else{var t;if(typeof window!=="undefined"){t=window}else if(typeof global!=="undefined"){t=global}else if(typeof self!=="undefined"){t=self}else{t=this}t.introJs=e()}})(function(){"use strict";if(!window.larrymsExtend){return false}layui.link(layui.cache.extendStyle+"intro/introjs.css");var t="2.9.3";function n(t){this._targetElement=t;this._introItems=[];this._options={nextLabel:"Next &rarr;",prevLabel:"&larr; Back",skipLabel:"Skip",doneLabel:"Done",hidePrev:false,hideNext:false,tooltipPosition:"bottom",tooltipClass:"",highlightClass:"",exitOnEsc:true,exitOnOverlayClick:true,showStepNumbers:true,keyboardNavigation:true,showButtons:true,showBullets:true,showProgress:false,scrollToElement:true,scrollTo:"element",scrollPadding:30,overlayOpacity:.8,positionPrecedence:["bottom","top","right","left"],disableInteraction:false,helperElementPadding:10,hintPosition:"top-middle",hintButtonLabel:"Got it",hintAnimation:true,buttonClass:"introjs-button"}}function e(t,i){var e=t.querySelectorAll("*[data-intro]"),n=[];if(this._options.steps){M(this._options.steps,function(t){var e=f(t);e.step=n.length+1;if(typeof e.element==="string"){e.element=document.querySelector(e.element)}if(typeof e.element==="undefined"||e.element===null){var i=document.querySelector(".introjsFloatingElement");if(i===null){i=document.createElement("div");i.className="introjsFloatingElement";document.body.appendChild(i)}e.element=i;e.position="floating"}e.scrollTo=e.scrollTo||this._options.scrollTo;if(typeof e.disableInteraction==="undefined"){e.disableInteraction=this._options.disableInteraction}if(e.element!==null){n.push(e)}}.bind(this))}else{var o=e.length;var r;if(o<1){return false}M(e,function(t){if(i&&t.getAttribute("data-intro-group")!==i){return}if(t.style.display==="none"){return}var e=parseInt(t.getAttribute("data-step"),10);if(typeof t.getAttribute("data-disable-interaction")!=="undefined"){r=!!t.getAttribute("data-disable-interaction")}else{r=this._options.disableInteraction}if(e>0){n[e-1]={element:t,intro:t.getAttribute("data-intro"),step:parseInt(t.getAttribute("data-step"),10),tooltipClass:t.getAttribute("data-tooltipclass"),highlightClass:t.getAttribute("data-highlightclass"),position:t.getAttribute("data-position")||this._options.tooltipPosition,scrollTo:t.getAttribute("data-scrollto")||this._options.scrollTo,disableInteraction:r}}}.bind(this));var s=0;M(e,function(t){if(i&&t.getAttribute("data-intro-group")!==i){return}if(t.getAttribute("data-step")===null){while(true){if(typeof n[s]==="undefined"){break}else{s++}}if(typeof t.getAttribute("data-disable-interaction")!=="undefined"){r=!!t.getAttribute("data-disable-interaction")}else{r=this._options.disableInteraction}n[s]={element:t,intro:t.getAttribute("data-intro"),step:s+1,tooltipClass:t.getAttribute("data-tooltipclass"),highlightClass:t.getAttribute("data-highlightclass"),position:t.getAttribute("data-position")||this._options.tooltipPosition,scrollTo:t.getAttribute("data-scrollto")||this._options.scrollTo,disableInteraction:r}}}.bind(this))}var l=[];for(var a=0;a<n.length;a++){if(n[a]){l.push(n[a])}}n=l;n.sort(function(t,e){return t.step-e.step});this._introItems=n;if(_.call(this,t)){N.call(this);if(this._options.keyboardNavigation){g.on(window,"keydown",u,this,true)}g.on(window,"resize",c,this,true)}return false}function c(){this.refresh.call(this)}function u(t){var e=t.code===null?t.which:t.code;if(e===null){e=t.charCode===null?t.keyCode:t.charCode}if((e==="Escape"||e===27)&&this._options.exitOnEsc===true){L.call(this,this._targetElement)}else if(e==="ArrowLeft"||e===37){A.call(this)}else if(e==="ArrowRight"||e===39){N.call(this)}else if(e==="Enter"||e===13){var i=t.target||t.srcElement;if(i&&i.className.match("introjs-prevbutton")){A.call(this)}else if(i&&i.className.match("introjs-skipbutton")){if(this._introItems.length-1===this._currentStep&&typeof this._introCompleteCallback==="function"){this._introCompleteCallback.call(this)}L.call(this,this._targetElement)}else if(i&&i.getAttribute("data-stepnumber")){i.click()}else{N.call(this)}if(t.preventDefault){t.preventDefault()}else{t.returnValue=false}}}function f(t){if(t===null||typeof t!=="object"||typeof t.nodeType!=="undefined"){return t}var e={};for(var i in t){if(typeof window.jQuery!=="undefined"&&t[i]instanceof window.jQuery){e[i]=t[i]}else{e[i]=f(t[i])}}return e}function i(t){this._currentStep=t-2;if(typeof this._introItems!=="undefined"){N.call(this)}}function o(t){this._currentStepNumber=t;if(typeof this._introItems!=="undefined"){N.call(this)}}function N(){this._direction="forward";if(typeof this._currentStepNumber!=="undefined"){M(this._introItems,function(t,e){if(t.step===this._currentStepNumber){this._currentStep=e-1;this._currentStepNumber=undefined}}.bind(this))}if(typeof this._currentStep==="undefined"){this._currentStep=0}else{++this._currentStep}var t=this._introItems[this._currentStep];var e=true;if(typeof this._introBeforeChangeCallback!=="undefined"){e=this._introBeforeChangeCallback.call(this,t.element)}if(e===false){--this._currentStep;return false}if(this._introItems.length<=this._currentStep){if(typeof this._introCompleteCallback==="function"){this._introCompleteCallback.call(this)}L.call(this,this._targetElement);return}s.call(this,t)}function A(){this._direction="backward";if(this._currentStep===0){return false}--this._currentStep;var t=this._introItems[this._currentStep];var e=true;if(typeof this._introBeforeChangeCallback!=="undefined"){e=this._introBeforeChangeCallback.call(this,t.element)}if(e===false){++this._currentStep;return false}s.call(this,t)}function r(){I.call(this,document.querySelector(".introjs-helperLayer"));I.call(this,document.querySelector(".introjs-tooltipReferenceLayer"));I.call(this,document.querySelector(".introjs-disableInteraction"));if(this._currentStep!==undefined&&this._currentStep!==null){var t=document.querySelector(".introjs-helperNumberLayer"),e=document.querySelector(".introjs-arrow"),i=document.querySelector(".introjs-tooltip");T.call(this,this._introItems[this._currentStep].element,i,e,t)}k.call(this);return this}function L(t,e){var i=true;if(this._introBeforeExitCallback!==undefined){i=this._introBeforeExitCallback.call(this)}if(!e&&i===false)return;var n=t.querySelectorAll(".introjs-overlay");if(n&&n.length){M(n,function(t){t.style.opacity=0;window.setTimeout(function(){if(this.parentNode){this.parentNode.removeChild(this)}}.bind(t),500)}.bind(this))}var o=t.querySelector(".introjs-helperLayer");if(o){o.parentNode.removeChild(o)}var r=t.querySelector(".introjs-tooltipReferenceLayer");if(r){r.parentNode.removeChild(r)}var s=t.querySelector(".introjs-disableInteraction");if(s){s.parentNode.removeChild(s)}var l=document.querySelector(".introjsFloatingElement");if(l){l.parentNode.removeChild(l)}H();var a=document.querySelectorAll(".introjs-fixParent");M(a,function(t){V(t,/introjs-fixParent/g)});g.off(window,"keydown",u,this,true);g.off(window,"resize",c,this,true);if(this._introExitCallback!==undefined){this._introExitCallback.call(this)}this._currentStep=undefined}function T(t,e,i,n,o){var r="",s,l,a,c,u;o=o||false;e.style.top=null;e.style.right=null;e.style.bottom=null;e.style.left=null;e.style.marginLeft=null;e.style.marginTop=null;i.style.display="inherit";if(typeof n!=="undefined"&&n!==null){n.style.top=null;n.style.left=null}if(!this._introItems[this._currentStep])return;s=this._introItems[this._currentStep];if(typeof s.tooltipClass==="string"){r=s.tooltipClass}else{r=this._options.tooltipClass}e.className=("introjs-tooltip "+r).replace(/^\s+|\s+$/g,"");e.setAttribute("role","dialog");u=this._introItems[this._currentStep].position;if(u!=="floating"){u=b.call(this,t,e,u)}var f;a=Q(t);l=Q(e);c=v();R(e,"introjs-"+u);switch(u){case"top-right-aligned":i.className="introjs-arrow bottom-right";var h=0;m(a,h,l,e);e.style.bottom=a.height+20+"px";break;case"top-middle-aligned":i.className="introjs-arrow bottom-middle";var d=a.width/2-l.width/2;if(o){d+=5}if(m(a,d,l,e)){e.style.right=null;p(a,d,l,c,e)}e.style.bottom=a.height+20+"px";break;case"top-left-aligned":case"top":i.className="introjs-arrow bottom";f=o?0:15;p(a,f,l,c,e);e.style.bottom=a.height+20+"px";break;case"right":e.style.left=a.width+20+"px";if(a.top+l.height>c.height){i.className="introjs-arrow left-bottom";e.style.top="-"+(l.height-a.height-20)+"px"}else{i.className="introjs-arrow left"}break;case"left":if(!o&&this._options.showStepNumbers===true){e.style.top="15px"}if(a.top+l.height>c.height){e.style.top="-"+(l.height-a.height-20)+"px";i.className="introjs-arrow right-bottom"}else{i.className="introjs-arrow right"}e.style.right=a.width+20+"px";break;case"floating":i.style.display="none";e.style.left="50%";e.style.top="50%";e.style.marginLeft="-"+l.width/2+"px";e.style.marginTop="-"+l.height/2+"px";if(typeof n!=="undefined"&&n!==null){n.style.left="-"+(l.width/2+18)+"px";n.style.top="-"+(l.height/2+18)+"px"}break;case"bottom-right-aligned":i.className="introjs-arrow top-right";h=0;m(a,h,l,e);e.style.top=a.height+20+"px";break;case"bottom-middle-aligned":i.className="introjs-arrow top-middle";d=a.width/2-l.width/2;if(o){d+=5}if(m(a,d,l,e)){e.style.right=null;p(a,d,l,c,e)}e.style.top=a.height+20+"px";break;default:i.className="introjs-arrow top";f=0;p(a,f,l,c,e);e.style.top=a.height+20+"px"}}function p(t,e,i,n,o){if(t.left+e+i.width>n.width){o.style.left=n.width-i.width-t.left+"px";return false}o.style.left=e+"px";return true}function m(t,e,i,n){if(t.left+t.width-e-i.width<0){n.style.left=-t.left+"px";return false}n.style.right=e+"px";return true}function b(t,e,i){var n=this._options.positionPrecedence.slice();var o=v();var r=Q(e).height+10;var s=Q(e).width+20;var l=t.getBoundingClientRect();var a="floating";if(l.bottom+r+r>o.height){d(n,"bottom")}if(l.top-r<0){d(n,"top")}if(l.right+s>o.width){d(n,"right")}if(l.left-s<0){d(n,"left")}var c=function(t){var e=t.indexOf("-");if(e!==-1){return t.substr(e)}return""}(i||"");if(i){i=i.split("-")[0]}if(n.length){if(i!=="auto"&&n.indexOf(i)>-1){a=i}else{a=n[0]}}if(["top","bottom"].indexOf(a)!==-1){a+=h(l.left,s,o,c)}return a}function h(t,e,i,n){var o=e/2,r=Math.min(i.width,window.screen.width),s=["-left-aligned","-middle-aligned","-right-aligned"],l="";if(r-t<e){d(s,"-left-aligned")}if(t<o||r-t<o){d(s,"-middle-aligned")}if(t<e){d(s,"-right-aligned")}if(s.length){if(s.indexOf(n)!==-1){l=n}else{l=s[0]}}else{l="-middle-aligned"}return l}function d(t,e){if(t.indexOf(e)>-1){t.splice(t.indexOf(e),1)}}function I(t){if(t){if(!this._introItems[this._currentStep])return;var e=this._introItems[this._currentStep],i=Q(e.element),n=this._options.helperElementPadding;if(y(e.element)){R(t,"introjs-fixedTooltip")}else{V(t,"introjs-fixedTooltip")}if(e.position==="floating"){n=0}t.style.cssText="width: "+(i.width+n)+"px; "+"height:"+(i.height+n)+"px; "+"top:"+(i.top-n/2)+"px;"+"left: "+(i.left-n/2)+"px;"}}function P(){var t=document.querySelector(".introjs-disableInteraction");if(t===null){t=document.createElement("div");t.className="introjs-disableInteraction";this._targetElement.appendChild(t)}I.call(this,t)}function q(t){t.setAttribute("role","button");t.tabIndex=0}function s(o){if(typeof this._introChangeCallback!=="undefined"){this._introChangeCallback.call(this,o.element)}var t=this,e=document.querySelector(".introjs-helperLayer"),i=document.querySelector(".introjs-tooltipReferenceLayer"),n="introjs-helperLayer",r,s,l,a;if(typeof o.highlightClass==="string"){n+=" "+o.highlightClass}if(typeof this._options.highlightClass==="string"){n+=" "+this._options.highlightClass}if(e!==null){var c=i.querySelector(".introjs-helperNumberLayer"),u=i.querySelector(".introjs-tooltiptext"),f=i.querySelector(".introjs-arrow"),h=i.querySelector(".introjs-tooltip");l=i.querySelector(".introjs-skipbutton");s=i.querySelector(".introjs-prevbutton");r=i.querySelector(".introjs-nextbutton");e.className=n;h.style.opacity=0;h.style.display="none";if(c!==null){var d=this._introItems[o.step-2>=0?o.step-2:0];if(d!==null&&(this._direction==="forward"&&d.position==="floating")||this._direction==="backward"&&o.position==="floating"){c.style.opacity=0}}a=X(o.element);if(a!==document.body){Y(a,o.element)}I.call(t,e);I.call(t,i);var p=document.querySelectorAll(".introjs-fixParent");M(p,function(t){V(t,/introjs-fixParent/g)});H();if(t._lastShowElementTimer){window.clearTimeout(t._lastShowElementTimer)}t._lastShowElementTimer=window.setTimeout(function(){if(c!==null){c.innerHTML=o.step}u.innerHTML=o.intro;h.style.display="block";T.call(t,o.element,h,f,c);if(t._options.showBullets){i.querySelector(".introjs-bullets li > a.active").className="";i.querySelector('.introjs-bullets li > a[data-stepnumber="'+o.step+'"]').className="active"}i.querySelector(".introjs-progress .introjs-progressbar").style.cssText="width:"+Z.call(t)+"%;";i.querySelector(".introjs-progress .introjs-progressbar").setAttribute("aria-valuenow",Z.call(t));h.style.opacity=1;if(c)c.style.opacity=1;if(typeof l!=="undefined"&&l!==null&&/introjs-donebutton/gi.test(l.className)){l.focus()}else if(typeof r!=="undefined"&&r!==null){r.focus()}B.call(t,o.scrollTo,o,u)},350)}else{var m=document.createElement("div"),b=document.createElement("div"),g=document.createElement("div"),y=document.createElement("div"),v=document.createElement("div"),w=document.createElement("div"),_=document.createElement("div"),C=document.createElement("div");m.className=n;b.className="introjs-tooltipReferenceLayer";a=X(o.element);if(a!==document.body){Y(a,o.element)}I.call(t,m);I.call(t,b);this._targetElement.appendChild(m);this._targetElement.appendChild(b);g.className="introjs-arrow";v.className="introjs-tooltiptext";v.innerHTML=o.intro;w.className="introjs-bullets";if(this._options.showBullets===false){w.style.display="none"}var j=document.createElement("ul");j.setAttribute("role","tablist");var k=function(){t.goToStep(this.getAttribute("data-stepnumber"))};M(this._introItems,function(t,e){var i=document.createElement("li");var n=document.createElement("a");i.setAttribute("role","presentation");n.setAttribute("role","tab");n.onclick=k;if(e===o.step-1){n.className="active"}q(n);n.innerHTML="&nbsp;";n.setAttribute("data-stepnumber",t.step);i.appendChild(n);j.appendChild(i)});w.appendChild(j);_.className="introjs-progress";if(this._options.showProgress===false){_.style.display="none"}var x=document.createElement("div");x.className="introjs-progressbar";x.setAttribute("role","progress");x.setAttribute("aria-valuemin",0);x.setAttribute("aria-valuemax",100);x.setAttribute("aria-valuenow",Z.call(this));x.style.cssText="width:"+Z.call(this)+"%;";_.appendChild(x);C.className="introjs-tooltipbuttons";if(this._options.showButtons===false){C.style.display="none"}y.className="introjs-tooltip";y.appendChild(v);y.appendChild(w);y.appendChild(_);var S=document.createElement("span");if(this._options.showStepNumbers===true){S.className="introjs-helperNumberLayer";S.innerHTML=o.step;b.appendChild(S)}y.appendChild(g);b.appendChild(y);r=document.createElement("a");r.onclick=function(){if(t._introItems.length-1!==t._currentStep){N.call(t)}};q(r);r.innerHTML=this._options.nextLabel;s=document.createElement("a");s.onclick=function(){if(t._currentStep!==0){A.call(t)}};q(s);s.innerHTML=this._options.prevLabel;l=document.createElement("a");l.className=this._options.buttonClass+" introjs-skipbutton ";q(l);l.innerHTML=this._options.skipLabel;l.onclick=function(){if(t._introItems.length-1===t._currentStep&&typeof t._introCompleteCallback==="function"){t._introCompleteCallback.call(t)}if(t._introItems.length-1!==t._currentStep&&typeof t._introExitCallback==="function"){t._introExitCallback.call(t)}if(typeof t._introSkipCallback==="function"){t._introSkipCallback.call(t)}L.call(t,t._targetElement)};C.appendChild(l);if(this._introItems.length>1){C.appendChild(s);C.appendChild(r)}y.appendChild(C);T.call(t,o.element,y,g,S);B.call(this,o.scrollTo,o,y)}var E=t._targetElement.querySelector(".introjs-disableInteraction");if(E){E.parentNode.removeChild(E)}if(o.disableInteraction){P.call(t)}if(this._currentStep===0&&this._introItems.length>1){if(typeof l!=="undefined"&&l!==null){l.className=this._options.buttonClass+" introjs-skipbutton"}if(typeof r!=="undefined"&&r!==null){r.className=this._options.buttonClass+" introjs-nextbutton"}if(this._options.hidePrev===true){if(typeof s!=="undefined"&&s!==null){s.className=this._options.buttonClass+" introjs-prevbutton introjs-hidden"}if(typeof r!=="undefined"&&r!==null){R(r,"introjs-fullbutton")}}else{if(typeof s!=="undefined"&&s!==null){s.className=this._options.buttonClass+" introjs-prevbutton introjs-disabled"}}if(typeof l!=="undefined"&&l!==null){l.innerHTML=this._options.skipLabel}}else if(this._introItems.length-1===this._currentStep||this._introItems.length===1){if(typeof l!=="undefined"&&l!==null){l.innerHTML=this._options.doneLabel;R(l,"introjs-donebutton")}if(typeof s!=="undefined"&&s!==null){s.className=this._options.buttonClass+" introjs-prevbutton"}if(this._options.hideNext===true){if(typeof r!=="undefined"&&r!==null){r.className=this._options.buttonClass+" introjs-nextbutton introjs-hidden"}if(typeof s!=="undefined"&&s!==null){R(s,"introjs-fullbutton")}}else{if(typeof r!=="undefined"&&r!==null){r.className=this._options.buttonClass+" introjs-nextbutton introjs-disabled"}}}else{if(typeof l!=="undefined"&&l!==null){l.className=this._options.buttonClass+" introjs-skipbutton"}if(typeof s!=="undefined"&&s!==null){s.className=this._options.buttonClass+" introjs-prevbutton"}if(typeof r!=="undefined"&&r!==null){r.className=this._options.buttonClass+" introjs-nextbutton"}if(typeof l!=="undefined"&&l!==null){l.innerHTML=this._options.skipLabel}}s.setAttribute("role","button");r.setAttribute("role","button");l.setAttribute("role","button");if(typeof r!=="undefined"&&r!==null){r.focus()}O(o);if(typeof this._introAfterChangeCallback!=="undefined"){this._introAfterChangeCallback.call(this,o.element)}}function B(t,e,i){if(t==="off")return;var n;if(!this._options.scrollToElement)return;if(t==="tooltip"){n=i.getBoundingClientRect()}else{n=e.element.getBoundingClientRect()}if(!w(e.element)){var o=v().height;var r=n.bottom-(n.bottom-n.top);if(r<0||e.element.clientHeight>o){window.scrollBy(0,n.top-(o/2-n.height/2)-this._options.scrollPadding)}else{window.scrollBy(0,n.top-(o/2-n.height/2)+this._options.scrollPadding)}}}function H(){var t=document.querySelectorAll(".introjs-showElement");M(t,function(t){V(t,/introjs-[a-zA-Z]+/g)})}function O(t){var e;if(t.element instanceof SVGElement){e=t.element.parentNode;while(t.element.parentNode!==null){if(!e.tagName||e.tagName.toLowerCase()==="body")break;if(e.tagName.toLowerCase()==="svg"){R(e,"introjs-showElement introjs-relativePosition")}e=e.parentNode}}R(t.element,"introjs-showElement");var i=l(t.element,"position");if(i!=="absolute"&&i!=="relative"&&i!=="fixed"){R(t.element,"introjs-relativePosition")}e=t.element.parentNode;while(e!==null){if(!e.tagName||e.tagName.toLowerCase()==="body")break;var n=l(e,"z-index");var o=parseFloat(l(e,"opacity"));var r=l(e,"transform")||l(e,"-webkit-transform")||l(e,"-moz-transform")||l(e,"-ms-transform")||l(e,"-o-transform");if(/[0-9]+/.test(n)||o<1||r!=="none"&&r!==undefined){R(e,"introjs-fixParent")}e=e.parentNode}}function M(t,e,i){if(t){for(var n=0,o=t.length;n<o;n++){e(t[n],n)}}if(typeof i==="function"){i()}}var a=function(){var n={};return function t(e,i){i=i||"introjs-stamp";n[i]=n[i]||0;if(e[i]===undefined){e[i]=n[i]++}return e[i]}}();var g=function(){function t(){var l="introjs_event";this._id=function(t,e,i,n){return e+a(i)+(n?"_"+a(n):"")};this.on=function(e,t,i,n,o){var r=this._id.apply(this,arguments),s=function(t){return i.call(n||e,t||window.event)};if("addEventListener"in e){e.addEventListener(t,s,o)}else if("attachEvent"in e){e.attachEvent("on"+t,s)}e[l]=e[l]||{};e[l][r]=s};this.off=function(t,e,i,n,o){var r=this._id.apply(this,arguments),s=t[l]&&t[l][r];if(!s){return}if("removeEventListener"in t){t.removeEventListener(e,s,o)}else if("detachEvent"in t){t.detachEvent("on"+e,s)}t[l][r]=null}}return new t}();function R(e,t){if(e instanceof SVGElement){var i=e.getAttribute("class")||"";e.setAttribute("class",i+" "+t)}else{if(e.classList!==undefined){var n=t.split(" ");M(n,function(t){e.classList.add(t)})}else if(!e.className.match(t)){e.className+=" "+t}}}function V(t,e){if(t instanceof SVGElement){var i=t.getAttribute("class")||"";t.setAttribute("class",i.replace(e,"").replace(/^\s+|\s+$/g,""))}else{t.className=t.className.replace(e,"").replace(/^\s+|\s+$/g,"")}}function l(t,e){var i="";if(t.currentStyle){i=t.currentStyle[e]}else if(document.defaultView&&document.defaultView.getComputedStyle){i=document.defaultView.getComputedStyle(t,null).getPropertyValue(e)}if(i&&i.toLowerCase){return i.toLowerCase()}else{return i}}function y(t){var e=t.parentNode;if(!e||e.nodeName==="HTML"){return false}if(l(t,"position")==="fixed"){return true}return y(e)}function v(){if(window.innerWidth!==undefined){return{width:window.innerWidth,height:window.innerHeight}}else{var t=document.documentElement;return{width:t.clientWidth,height:t.clientHeight}}}function w(t){var e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom+80<=window.innerHeight&&e.right<=window.innerWidth}function _(t){var e=document.createElement("div"),i="",n=this;e.className="introjs-overlay";if(!t.tagName||t.tagName.toLowerCase()==="body"){i+="top: 0;bottom: 0; left: 0;right: 0;position: fixed;";e.style.cssText=i}else{var o=Q(t);if(o){i+="width: "+o.width+"px; height:"+o.height+"px; top:"+o.top+"px;left: "+o.left+"px;";e.style.cssText=i}}t.appendChild(e);e.onclick=function(){if(n._options.exitOnOverlayClick===true){L.call(n,t)}};window.setTimeout(function(){i+="opacity: "+n._options.overlayOpacity.toString()+";";e.style.cssText=i},10);return true}function C(){var t=document.querySelector(".introjs-hintReference");if(t){var e=t.getAttribute("data-step");t.parentNode.removeChild(t);return e}}function j(t){this._introItems=[];if(this._options.hints){M(this._options.hints,function(t){var e=f(t);if(typeof e.element==="string"){e.element=document.querySelector(e.element)}e.hintPosition=e.hintPosition||this._options.hintPosition;e.hintAnimation=e.hintAnimation||this._options.hintAnimation;if(e.element!==null){this._introItems.push(e)}}.bind(this))}else{var e=t.querySelectorAll("*[data-hint]");if(!e||!e.length){return false}M(e,function(t){var e=t.getAttribute("data-hintanimation");if(e){e=e==="true"}else{e=this._options.hintAnimation}this._introItems.push({element:t,hint:t.getAttribute("data-hint"),hintPosition:t.getAttribute("data-hintposition")||this._options.hintPosition,hintAnimation:e,tooltipClass:t.getAttribute("data-tooltipclass"),position:t.getAttribute("data-position")||this._options.tooltipPosition})}.bind(this))}W.call(this);g.on(document,"click",C,this,false);g.on(window,"resize",k,this,true)}function k(){M(this._introItems,function(t){if(typeof t.targetElement==="undefined"){return}J.call(this,t.hintPosition,t.element,t.targetElement)}.bind(this))}function x(t){var e=document.querySelector(".introjs-hints");return e?e.querySelectorAll(t):[]}function S(t){var e=x('.introjs-hint[data-step="'+t+'"]')[0];C.call(this);if(e){R(e,"introjs-hidehint")}if(typeof this._hintCloseCallback!=="undefined"){this._hintCloseCallback.call(this,t)}}function E(){var t=x(".introjs-hint");M(t,function(t){S.call(this,t.getAttribute("data-step"))}.bind(this))}function z(){var t=x(".introjs-hint");if(t&&t.length){M(t,function(t){D.call(this,t.getAttribute("data-step"))}.bind(this))}else{j.call(this,this._targetElement)}}function D(t){var e=x('.introjs-hint[data-step="'+t+'"]')[0];if(e){V(e,/introjs-hidehint/g)}}function F(){var t=x(".introjs-hint");M(t,function(t){G.call(this,t.getAttribute("data-step"))}.bind(this))}function G(t){var e=x('.introjs-hint[data-step="'+t+'"]')[0];if(e){e.parentNode.removeChild(e)}}function W(){var n=this;var r=document.querySelector(".introjs-hints");if(r===null){r=document.createElement("div");r.className="introjs-hints"}var s=function(i){return function(t){var e=t?t:window.event;if(e.stopPropagation){e.stopPropagation()}if(e.cancelBubble!==null){e.cancelBubble=true}$.call(n,i)}};M(this._introItems,function(t,e){if(document.querySelector('.introjs-hint[data-step="'+e+'"]')){return}var i=document.createElement("a");q(i);i.onclick=s(e);i.className="introjs-hint";if(!t.hintAnimation){R(i,"introjs-hint-no-anim")}if(y(t.element)){R(i,"introjs-fixedhint")}var n=document.createElement("div");n.className="introjs-hint-dot";var o=document.createElement("div");o.className="introjs-hint-pulse";i.appendChild(n);i.appendChild(o);i.setAttribute("data-step",e);t.targetElement=t.element;t.element=i;J.call(this,t.hintPosition,i,t.targetElement);r.appendChild(i)}.bind(this));document.body.appendChild(r);if(typeof this._hintsAddedCallback!=="undefined"){this._hintsAddedCallback.call(this)}}function J(t,e,i){var n=Q.call(this,i);var o=20;var r=20;switch(t){default:case"top-left":e.style.left=n.left+"px";e.style.top=n.top+"px";break;case"top-right":e.style.left=n.left+n.width-o+"px";e.style.top=n.top+"px";break;case"bottom-left":e.style.left=n.left+"px";e.style.top=n.top+n.height-r+"px";break;case"bottom-right":e.style.left=n.left+n.width-o+"px";e.style.top=n.top+n.height-r+"px";break;case"middle-left":e.style.left=n.left+"px";e.style.top=n.top+(n.height-r)/2+"px";break;case"middle-right":e.style.left=n.left+n.width-o+"px";e.style.top=n.top+(n.height-r)/2+"px";break;case"middle-middle":e.style.left=n.left+(n.width-o)/2+"px";e.style.top=n.top+(n.height-r)/2+"px";break;case"bottom-middle":e.style.left=n.left+(n.width-o)/2+"px";e.style.top=n.top+n.height-r+"px";break;case"top-middle":e.style.left=n.left+(n.width-o)/2+"px";e.style.top=n.top+"px";break}}function $(t){var e=document.querySelector('.introjs-hint[data-step="'+t+'"]');var i=this._introItems[t];if(typeof this._hintClickCallback!=="undefined"){this._hintClickCallback.call(this,e,i,t)}var n=C.call(this);if(parseInt(n,10)===t){return}var o=document.createElement("div");var r=document.createElement("div");var s=document.createElement("div");var l=document.createElement("div");o.className="introjs-tooltip";o.onclick=function(t){if(t.stopPropagation){t.stopPropagation()}else{t.cancelBubble=true}};r.className="introjs-tooltiptext";var a=document.createElement("p");a.innerHTML=i.hint;var c=document.createElement("a");c.className=this._options.buttonClass;c.setAttribute("role","button");c.innerHTML=this._options.hintButtonLabel;c.onclick=S.bind(this,t);r.appendChild(a);r.appendChild(c);s.className="introjs-arrow";o.appendChild(s);o.appendChild(r);this._currentStep=e.getAttribute("data-step");l.className="introjs-tooltipReferenceLayer introjs-hintReference";l.setAttribute("data-step",e.getAttribute("data-step"));I.call(this,l);l.appendChild(o);document.body.appendChild(l);T.call(this,e,o,s,null,true)}function Q(t){var e=document.body;var i=document.documentElement;var n=window.pageYOffset||i.scrollTop||e.scrollTop;var o=window.pageXOffset||i.scrollLeft||e.scrollLeft;var r=t.getBoundingClientRect();return{top:r.top+n,width:r.width,height:r.height,left:r.left+o}}function X(t){var e=window.getComputedStyle(t);var i=e.position==="absolute";var n=/(auto|scroll)/;if(e.position==="fixed")return document.body;for(var o=t;o=o.parentElement;){e=window.getComputedStyle(o);if(i&&e.position==="static"){continue}if(n.test(e.overflow+e.overflowY+e.overflowX))return o}return document.body}function Y(t,e){t.scrollTop=e.offsetTop-t.offsetTop}function Z(){var t=parseInt(this._currentStep+1,10);return t/this._introItems.length*100}function K(t,e){var i={},n;for(n in t){i[n]=t[n]}for(n in e){i[n]=e[n]}return i}var U=function(t){var e;if(typeof t==="object"){e=new n(t)}else if(typeof t==="string"){var i=document.querySelector(t);if(i){e=new n(i)}else{throw new Error("There is no element with given selector.")}}else{e=new n(document.body)}U.instances[a(e,"introjs-instance")]=e;return e};U.version=t;U.instances={};U.fn=n.prototype={clone:function(){return new n(this)},setOption:function(t,e){this._options[t]=e;return this},setOptions:function(t){this._options=K(this._options,t);return this},start:function(t){e.call(this,this._targetElement,t);return this},goToStep:function(t){i.call(this,t);return this},addStep:function(t){if(!this._options.steps){this._options.steps=[]}this._options.steps.push(t);return this},addSteps:function(t){if(!t.length)return;for(var e=0;e<t.length;e++){this.addStep(t[e])}return this},goToStepNumber:function(t){o.call(this,t);return this},nextStep:function(){N.call(this);return this},previousStep:function(){A.call(this);return this},exit:function(t){L.call(this,this._targetElement,t);return this},refresh:function(){r.call(this);return this},onbeforechange:function(t){if(typeof t==="function"){this._introBeforeChangeCallback=t}else{throw new Error("Provided callback for onbeforechange was not a function")}return this},onchange:function(t){if(typeof t==="function"){this._introChangeCallback=t}else{throw new Error("Provided callback for onchange was not a function.")}return this},onafterchange:function(t){if(typeof t==="function"){this._introAfterChangeCallback=t}else{throw new Error("Provided callback for onafterchange was not a function")}return this},oncomplete:function(t){if(typeof t==="function"){this._introCompleteCallback=t}else{throw new Error("Provided callback for oncomplete was not a function.")}return this},onhintsadded:function(t){if(typeof t==="function"){this._hintsAddedCallback=t}else{throw new Error("Provided callback for onhintsadded was not a function.")}return this},onhintclick:function(t){if(typeof t==="function"){this._hintClickCallback=t}else{throw new Error("Provided callback for onhintclick was not a function.")}return this},onhintclose:function(t){if(typeof t==="function"){this._hintCloseCallback=t}else{throw new Error("Provided callback for onhintclose was not a function.")}return this},onexit:function(t){if(typeof t==="function"){this._introExitCallback=t}else{throw new Error("Provided callback for onexit was not a function.")}return this},onskip:function(t){if(typeof t==="function"){this._introSkipCallback=t}else{throw new Error("Provided callback for onskip was not a function.")}return this},onbeforeexit:function(t){if(typeof t==="function"){this._introBeforeExitCallback=t}else{throw new Error("Provided callback for onbeforeexit was not a function.")}return this},addHints:function(){j.call(this,this._targetElement);return this},hideHint:function(t){S.call(this,t);return this},hideHints:function(){E.call(this);return this},showHint:function(t){D.call(this,t);return this},showHints:function(){z.call(this);return this},removeHints:function(){F.call(this);return this},removeHint:function(t){G.call(this,t);return this},showHintDialog:function(t){$.call(this,t);return this}};return U});