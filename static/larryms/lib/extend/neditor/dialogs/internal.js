(function(){var e=window.parent;dialog=e.$EDITORUI[window.frameElement.id.replace(/_iframe$/,"")];editor=dialog.editor;UE=e.UE;domUtils=UE.dom.domUtils;utils=UE.utils;browser=UE.browser;ajax=UE.ajax;$G=function(e){return document.getElementById(e)};$focus=function(t){setTimeout(function(){if(browser.ie){var e=t.createTextRange();e.collapse(false);e.select()}else{t.focus()}},0)};utils.loadFile(document,{href:editor.options.themePath+editor.options.theme+"/dialogbase.css?cache="+Math.random(),tag:"link",type:"text/css",rel:"stylesheet"});lang=editor.getLang(dialog.className.split("-")[2]);if(lang){domUtils.on(window,"load",function(){var e=editor.options.langPath+editor.options.lang+"/images/";for(var t in lang["static"]){var a=$G(t);if(!a)continue;var o=a.tagName,i=lang["static"][t];if(i.src){i=utils.extend({},i,false);i.src=e+i.src}if(i.style){i=utils.extend({},i,false);i.style=i.style.replace(/url\s*\(/g,"url("+e)}switch(o.toLowerCase()){case"var":a.parentNode.replaceChild(document.createTextNode(i),a);break;case"select":var s=a.options;for(var r=0,l;l=s[r];){l.innerHTML=i.options[r++]}for(var n in i){n!="options"&&a.setAttribute(n,i[n])}break;default:domUtils.setAttributes(a,i)}}})}})();