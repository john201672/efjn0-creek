/*
 * FitVids 1.1
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*/

!function(t){"use strict";t.fn.fitVids=function(e){var i={customSelector:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0],d=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",a=document.createElement("div");a.innerHTML='<p>x</p><style id="fit-vids-style">'+d+"</style>",r.appendChild(a.childNodes[1])}return e&&t.extend(i,e),this.each(function(){var e=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];i.customSelector&&e.push(i.customSelector);var r=t(this).find(e.join(","));r=r.not("object object"),r.each(function(){var e=t(this);if(!("embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){var i="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height(),r=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10),d=i/r;if(!e.attr("id")){var a="fitvid"+Math.floor(999999*Math.random());e.attr("id",a)}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*d+"%"),e.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto);

/*
 * By André Rinas, www.andrerinas.de
 * Documentation, www.simplelightbox.de
 * Available for use under the MIT License
 * 1.17.3
*/

!function(st,ot,E){"use strict";st.fn.simpleLightbox=function(N){N=st.extend({sourceAttr:"href",overlay:!0,spinner:!0,nav:!0,navText:["&lsaquo;","&rsaquo;"],captions:!0,captionDelay:0,captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionClass:"",close:!0,closeText:"&times;",swipeClose:!0,showCounter:!0,fileExt:"png|jpg|jpeg|gif|webp",animationSlide:!0,animationSpeed:250,preloading:!0,enableKeyboard:!0,loop:!0,rel:!1,docClose:!0,swipeTolerance:50,className:"simple-lightbox",widthRatio:.8,heightRatio:.9,scaleImageToRatio:!1,disableRightClick:!1,disableScroll:!0,alertError:!0,alertErrorMessage:"Image not found, next image will be loaded",additionalHtml:!1,history:!0,throttleInterval:0,doubleTapZoom:2,maxZoom:10,htmlClass:"has-lightbox"},N);function P(){return o.hash.substring(1)}function p(){P();var t="pid="+(V+1),e=o.href.split("#")[0]+"#"+t;s?history[f?"replaceState":"pushState"]("",E.title,e):f?o.replace(e):o.hash=t,f=!0}function t(e,a){var n;return function(){var t=arguments;n||(e.apply(this,t),n=!0,setTimeout(function(){return n=!1},a))}}function a(t){t.trigger(st.Event("show.simplelightbox")),N.disableScroll&&(u=T("hide")),N.htmlClass&&""!=N.htmlClass&&st("html").addClass(N.htmlClass),b.appendTo("body"),_.appendTo(b),N.overlay&&l.appendTo(st("body")),m=!0,V=$.index(t),K=st("<img/>").hide().attr("src",t.attr(N.sourceAttr)).attr("data-scale",1).attr("data-translate-x",0).attr("data-translate-y",0),-1==d.indexOf(t.attr(N.sourceAttr))&&d.push(t.attr(N.sourceAttr)),_.html("").attr("style",""),K.appendTo(_),C(),l.fadeIn("fast"),st(".sl-close").fadeIn("fast"),g.show(),J.fadeIn("fast"),st(".sl-wrapper .sl-counter .sl-current").text(V+1),c.fadeIn("fast"),tt(),N.preloading&&w(),setTimeout(function(){t.trigger(st.Event("shown.simplelightbox"))},N.animationSpeed)}function Z(t,e,a){return t<e?e:a<t?a:t}function z(t,e,a){K.data("scale",t),K.data("translate-x",e),K.data("translate-y",a)}var h,e,H="ontouchstart"in ot,L=(ot.navigator.pointerEnabled||ot.navigator.msPointerEnabled,0),j=0,K=st(),i=function(){var t=E.body||E.documentElement;return""===(t=t.style).WebkitTransition?"-webkit-":""===t.MozTransition?"-moz-":""===t.OTransition?"-o-":""===t.transition&&""},U=!1,d=[],$=N.rel&&!1!==N.rel?(e=N.rel,st(this).filter(function(){return st(this).attr("rel")===e})):this,n=$.get()[0].tagName,u=(i=i(),0),B=!1!==i,s="pushState"in history,f=!1,o=ot.location,Q=P(),G="simplelb",l=st("<div>").addClass("sl-overlay"),r=st("<button>").addClass("sl-close").html(N.closeText),g=st("<div>").addClass("sl-spinner").html("<div></div>"),J=st("<div>").addClass("sl-navigation").html('<button class="sl-prev">'+N.navText[0]+'</button><button class="sl-next">'+N.navText[1]+"</button>"),c=st("<div>").addClass("sl-counter").html('<span class="sl-current"></span>/<span class="sl-total"></span>'),m=!1,V=0,v=0,x=st("<div>").addClass("sl-caption "+N.captionClass+" pos-"+N.captionPosition),_=st("<div>").addClass("sl-image"),b=st("<div>").addClass("sl-wrapper").addClass(N.className),tt=function(o){if(K.length){var l=new Image,r=ot.innerWidth*N.widthRatio,c=ot.innerHeight*N.heightRatio;l.src=K.attr("src"),K.data("scale",1),K.data("translate-x",0),K.data("translate-y",0),at(0,0,1),st(l).on("error",function(t){$.eq(V).trigger(st.Event("error.simplelightbox")),U=!(m=!1),g.hide();var e=1==o||-1==o;v===V&&e?it():(N.alertError&&alert(N.alertErrorMessage),nt(e?o:1))}),l.onload=function(){void 0!==o&&$.eq(V).trigger(st.Event("changed.simplelightbox")).trigger(st.Event((1===o?"nextDone":"prevDone")+".simplelightbox")),N.history&&(f?h=setTimeout(p,800):p()),-1==d.indexOf(K.attr("src"))&&d.push(K.attr("src"));var t=l.width,e=l.height;if(N.scaleImageToRatio||r<t||c<e){var a=r/c<t/e?t/r:e/c;t/=a,e/=a}st(".sl-image").css({top:(ot.innerHeight-e)/2+"px",left:(ot.innerWidth-t)/2+"px",width:t+"px",height:e+"px"}),g.hide(),K.fadeIn("fast"),U=!0;var n,i="self"==N.captionSelector?$.eq(V):$.eq(V).find(N.captionSelector);if(n="data"==N.captionType?i.data(N.captionsData):"text"==N.captionType?i.html():i.prop(N.captionsData),N.loop||(0===V&&st(".sl-prev").hide(),V>=$.length-1&&st(".sl-next").hide(),0<V&&st(".sl-prev").show(),V<$.length-1&&st(".sl-next").show()),1==$.length&&st(".sl-prev, .sl-next").hide(),1==o||-1==o){var s={opacity:1};N.animationSlide&&(B?(et(0,100*o+"px"),setTimeout(function(){et(N.animationSpeed/1e3,"0px")},50)):s.left=parseInt(st(".sl-image").css("left"))+100*o+"px"),st(".sl-image").animate(s,N.animationSpeed,function(){m=!1,y(n,t)})}else m=!1,y(n,t);N.additionalHtml&&0===st(".sl-additional-html").length&&st("<div>").html(N.additionalHtml).addClass("sl-additional-html").appendTo(st(".sl-image"))}}},y=function(t,e){""!==t&&void 0!==t&&N.captions&&x.html(t).css({width:e+"px"}).hide().appendTo(st(".sl-image")).delay(N.captionDelay).fadeIn("fast")},et=function(t,e){var a={};a[i+"transform"]="translateX("+e+")",a[i+"transition"]=i+"transform "+t+"s linear",st(".sl-image").css(a)},at=function(t,e,a){var n={};n[i+"transform"]="translate("+t+","+e+") scale("+a+")",K.css(n)},C=function(){st(ot).on("resize."+G,tt),st(".sl-wrapper").on("click."+G+" touchstart."+G,".sl-close",function(t){t.preventDefault(),U&&it()}),N.history&&setTimeout(function(){st(ot).on("hashchange."+G,function(){U&&P()===Q&&it()})},40),J.on("click."+G,"button",t(function(t){t.preventDefault(),L=0,nt(st(this).hasClass("sl-next")?1:-1)},N.throttleInterval));var e,a,n,i,s,o,l,r,c,p,h,d,u,f,g,m,v,x,b,y,C,w,T,E,S,M,I,k=0,q=0,X=0,D=0,Y=!1,A=!1,O=0,R=!1,W=Z(1,1,N.maxZoom),F=!1;_.on("touchstart."+G+" mousedown."+G,function(t){if("A"===t.target.tagName&&"touchstart"==t.type)return!0;if("mousedown"==(t=t.originalEvent).type)c=t.clientX,p=t.clientY,e=_.height(),a=_.width(),s=K.height(),o=K.width(),n=_.position().left,i=_.position().top,l=parseFloat(K.data("translate-x")),r=parseFloat(K.data("translate-y")),R=!0;else{if(I=t.touches.length,c=t.touches[0].clientX,p=t.touches[0].clientY,e=_.height(),a=_.width(),s=K.height(),o=K.width(),n=_.position().left,i=_.position().top,1===I){if(F)return K.addClass("sl-transition"),Y=Y?(z(0,0,W=1),at("0px","0px",W),!1):(W=N.doubleTapZoom,z(0,0,W),at("0px","0px",W),st(".sl-caption").fadeOut(200),!0),setTimeout(function(){K.removeClass("sl-transition")},200),!1;F=!0,setTimeout(function(){F=!1},300),l=parseFloat(K.data("translate-x")),r=parseFloat(K.data("translate-y"))}else 2===I&&(h=t.touches[1].clientX,d=t.touches[1].clientY,l=parseFloat(K.data("translate-x")),r=parseFloat(K.data("translate-y")),C=(c+h)/2,w=(p+d)/2,u=Math.sqrt((c-h)*(c-h)+(p-d)*(p-d)));R=!0}return!!A||(B&&(O=parseInt(_.css("left"))),A=!0,j=L=0,k=t.pageX||t.touches[0].pageX,X=t.pageY||t.touches[0].pageY,!1)}).on("touchmove."+G+" mousemove."+G+" MSPointerMove",function(t){if(!A)return!0;if(t.preventDefault(),"touchmove"==(t=t.originalEvent).type){if(!1===R)return!1;f=t.touches[0].clientX,g=t.touches[0].clientY,I=t.touches.length,0,1<I?(m=t.touches[1].clientX,v=t.touches[1].clientY,M=Math.sqrt((f-m)*(f-m)+(g-v)*(g-v)),null===u&&(u=M),1<=Math.abs(u-M)&&(y=Z(M/u*W,1,N.maxZoom),T=(o*y-a)/2,E=(s*y-e)/2,S=y-W,x=o*y<=a?0:Z(l-(C-n-a/2-l)/(y-S)*S,-1*T,T),b=s*y<=e?0:Z(r-(w-i-e/2-r)/(y-S)*S,-1*E,E),at(x+"px",b+"px",y),1<y&&(Y=!0,st(".sl-caption").fadeOut(200)),u=M,W=y,l=x,r=b)):(T=(o*(y=W)-a)/2,E=(s*y-e)/2,x=o*y<=a?0:Z(f-(c-l),-1*T,T),b=s*y<=e?0:Z(g-(p-r),-1*E,E),Math.abs(x)===Math.abs(T)&&(l=x,c=f),Math.abs(b)===Math.abs(E)&&(r=b,p=g),z(W,x,b),at(x+"px",b+"px",y))}if("mousemove"==t.type&&A){if("touchmove"==t.type)return!0;if(!1===R)return!1;f=t.clientX,g=t.clientY,T=(o*(y=W)-a)/2,E=(s*y-e)/2,x=o*y<=a?0:Z(f-(c-l),-1*T,T),b=s*y<=e?0:Z(g-(p-r),-1*E,E),Math.abs(x)===Math.abs(T)&&(l=x,c=f),Math.abs(b)===Math.abs(E)&&(r=b,p=g),z(W,x,b),at(x+"px",b+"px",y)}Y||(q=t.pageX||t.touches[0].pageX,D=t.pageY||t.touches[0].pageY,L=k-q,j=X-D,N.animationSlide&&(B?et(0,-L+"px"):_.css("left",O-L+"px")))}).on("touchend."+G+" mouseup."+G+" touchcancel."+G+" mouseleave."+G+" pointerup pointercancel MSPointerUp MSPointerCancel",function(t){if(t=t.originalEvent,H&&"touchend"==t.type&&(0===(I=t.touches.length)?(z(W,x,b),1==W&&(Y=!1,st(".sl-caption").fadeIn(200)),u=null,R=!1):1===I?(c=t.touches[0].clientX,p=t.touches[0].clientY):1<I&&(u=null)),A){var e=!(A=!1);N.loop||(0===V&&L<0&&(e=!1),V>=$.length-1&&0<L&&(e=!1)),Math.abs(L)>N.swipeTolerance&&e?nt(0<L?1:-1):N.animationSlide&&(B?et(N.animationSpeed/1e3,"0px"):_.animate({left:O+"px"},N.animationSpeed/2)),N.swipeClose&&50<Math.abs(j)&&Math.abs(L)<N.swipeTolerance&&it()}}).on("dblclick",function(t){return c=t.clientX,p=t.clientY,e=_.height(),a=_.width(),s=K.height(),o=K.width(),n=_.position().left,i=_.position().top,K.addClass("sl-transition"),Y?(z(0,0,W=1),at("0px","0px",W),Y=!1,st(".sl-caption").fadeIn(200)):(W=N.doubleTapZoom,z(0,0,W),at("0px","0px",W),st(".sl-caption").fadeOut(200),Y=!0),setTimeout(function(){K.removeClass("sl-transition")},200),!(R=!0)})},w=function(){var t=V+1<0?$.length-1:V+1>=$.length-1?0:V+1,e=V-1<0?$.length-1:V-1>=$.length-1?0:V-1;st("<img />").attr("src",$.eq(t).attr(N.sourceAttr)).on("load",function(){-1==d.indexOf(st(this).attr("src"))&&d.push(st(this).attr("src")),$.eq(V).trigger(st.Event("nextImageLoaded.simplelightbox"))}),st("<img />").attr("src",$.eq(e).attr(N.sourceAttr)).on("load",function(){-1==d.indexOf(st(this).attr("src"))&&d.push(st(this).attr("src")),$.eq(V).trigger(st.Event("prevImageLoaded.simplelightbox"))})},nt=function(e){$.eq(V).trigger(st.Event("change.simplelightbox")).trigger(st.Event((1===e?"next":"prev")+".simplelightbox"));var t=V+e;if(!(m||(t<0||t>=$.length)&&!1===N.loop)){V=t<0?$.length-1:t>$.length-1?0:t,st(".sl-wrapper .sl-counter .sl-current").text(V+1);var a={opacity:0};N.animationSlide&&(B?et(N.animationSpeed/1e3,-100*e-L+"px"):a.left=parseInt(st(".sl-image").css("left"))+-100*e+"px"),st(".sl-image").animate(a,N.animationSpeed,function(){setTimeout(function(){var t=$.eq(V);K.attr("src",t.attr(N.sourceAttr)),-1==d.indexOf(t.attr(N.sourceAttr))&&g.show(),st(".sl-caption").remove(),tt(e),N.preloading&&w()},100)})}},it=function(){if(!m){var t=$.eq(V),e=!1;t.trigger(st.Event("close.simplelightbox")),N.history&&(s?history.pushState("",E.title,o.pathname+o.search):o.hash="",clearTimeout(h)),st(".sl-image img, .sl-overlay, .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter").fadeOut("fast",function(){N.disableScroll&&T("show"),N.htmlClass&&""!=N.htmlClass&&st("html").removeClass(N.htmlClass),st(".sl-wrapper, .sl-overlay").remove(),J.off("click","button"),st(".sl-wrapper").off("click."+G,".sl-close"),st(ot).off("resize."+G),st(ot).off("hashchange."+G),e||t.trigger(st.Event("closed.simplelightbox")),e=!0}),K=st(),m=U=!1}},T=function(t){var e=0;if("hide"==t){var a=ot.innerWidth;if(!a){var n=E.documentElement.getBoundingClientRect();a=n.right-Math.abs(n.left)}if(E.body.clientWidth<a){var i=E.createElement("div"),s=parseInt(st("body").css("padding-right"),10);i.className="sl-scrollbar-measure",st("body").append(i),e=i.offsetWidth-i.clientWidth,st(E.body)[0].removeChild(i),st("body").data("padding",s),0<e&&st("body").addClass("hidden-scroll").css({"padding-right":s+e})}}else st("body").removeClass("hidden-scroll").css({"padding-right":st("body").data("padding")});return e};return N.close&&r.appendTo(b),N.showCounter&&1<$.length&&(c.appendTo(b),c.find(".sl-total").text($.length)),N.nav&&J.appendTo(b),N.spinner&&g.appendTo(b),$.on("click."+G,function(t){if(function(t){if(!N.fileExt)return!0;var e=st(t).attr(N.sourceAttr).match(/\.([0-9a-z]+)(?=[?#])|(\.)(?:[\w]+)$/gim);return e&&st(t).prop("tagName").toUpperCase()==n&&new RegExp(".("+N.fileExt+")$","i").test(e)}(this)){if(t.preventDefault(),m)return!1;var e=st(this);v=$.index(e),a(e)}}),st(E).on("click."+G+" touchstart."+G,function(t){U&&N.docClose&&0===st(t.target).closest(".sl-image").length&&0===st(t.target).closest(".sl-navigation").length&&it()}),N.disableRightClick&&st(E).on("contextmenu",".sl-image img",function(t){return!1}),N.enableKeyboard&&st(E).on("keyup."+G,t(function(t){L=0;var e=t.keyCode;m&&27==e&&(K.attr("src",""),m=!1,it()),U&&(t.preventDefault(),27==e&&it(),37!=e&&39!=t.keyCode||nt(39==t.keyCode?1:-1))},N.throttleInterval)),this.open=function(t){t=t||st(this[0]),v=$.index(t),a(t)},this.next=function(){nt(1)},this.prev=function(){nt(-1)},this.close=function(){it()},this.destroy=function(){st(E).off("click."+G).off("keyup."+G),it(),st(".sl-overlay, .sl-wrapper").remove(),this.off("click")},this.refresh=function(){this.destroy(),st(this).simpleLightbox(N)},this}}(jQuery,window,document);

/* PrismJS 1.17.1
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript */

var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(u){var c=/\blang(?:uage)?-([\w-]+)\b/i,n=0,C={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof _?new _(e.type,C.util.encode(e.content),e.alias):Array.isArray(e)?e.map(C.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function r(e,t){var a,n,i=C.util.type(e);switch(t=t||{},i){case"Object":if(n=C.util.objId(e),t[n])return t[n];for(var o in a={},t[n]=a,e)e.hasOwnProperty(o)&&(a[o]=r(e[o],t));return a;case"Array":return n=C.util.objId(e),t[n]?t[n]:(a=[],t[n]=a,e.forEach(function(e,n){a[n]=r(e,t)}),a);default:return e}},getLanguage:function(e){for(;e&&!c.test(e.className);)e=e.parentElement;return e?(e.className.match(c)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var n=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack)||[])[1];if(n){var r=document.getElementsByTagName("script");for(var t in r)if(r[t].src==n)return r[t]}return null}}},languages:{extend:function(e,n){var r=C.util.clone(C.languages[e]);for(var t in n)r[t]=n[t];return r},insertBefore:function(r,e,n,t){var a=(t=t||C.languages)[r],i={};for(var o in a)if(a.hasOwnProperty(o)){if(o==e)for(var l in n)n.hasOwnProperty(l)&&(i[l]=n[l]);n.hasOwnProperty(o)||(i[o]=a[o])}var s=t[r];return t[r]=i,C.languages.DFS(C.languages,function(e,n){n===s&&e!=r&&(this[e]=i)}),i},DFS:function e(n,r,t,a){a=a||{};var i=C.util.objId;for(var o in n)if(n.hasOwnProperty(o)){r.call(n,o,n[o],t||o);var l=n[o],s=C.util.type(l);"Object"!==s||a[i(l)]?"Array"!==s||a[i(l)]||(a[i(l)]=!0,e(l,r,o,a)):(a[i(l)]=!0,e(l,r,null,a))}}},plugins:{},highlightAll:function(e,n){C.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,r){var t={callback:r,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};C.hooks.run("before-highlightall",t),t.elements=Array.prototype.slice.apply(t.container.querySelectorAll(t.selector)),C.hooks.run("before-all-elements-highlight",t);for(var a,i=0;a=t.elements[i++];)C.highlightElement(a,!0===n,t.callback)},highlightElement:function(e,n,r){var t=C.util.getLanguage(e),a=C.languages[t];e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+t;var i=e.parentNode;i&&"pre"===i.nodeName.toLowerCase()&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+t);var o={element:e,language:t,grammar:a,code:e.textContent};function l(e){o.highlightedCode=e,C.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,C.hooks.run("after-highlight",o),C.hooks.run("complete",o),r&&r.call(o.element)}if(C.hooks.run("before-sanity-check",o),!o.code)return C.hooks.run("complete",o),void(r&&r.call(o.element));if(C.hooks.run("before-highlight",o),o.grammar)if(n&&u.Worker){var s=new Worker(C.filename);s.onmessage=function(e){l(e.data)},s.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else l(C.highlight(o.code,o.grammar,o.language));else l(C.util.encode(o.code))},highlight:function(e,n,r){var t={code:e,grammar:n,language:r};return C.hooks.run("before-tokenize",t),t.tokens=C.tokenize(t.code,t.grammar),C.hooks.run("after-tokenize",t),_.stringify(C.util.encode(t.tokens),t.language)},matchGrammar:function(e,n,r,t,a,i,o){for(var l in r)if(r.hasOwnProperty(l)&&r[l]){var s=r[l];s=Array.isArray(s)?s:[s];for(var u=0;u<s.length;++u){if(o&&o==l+","+u)return;var c=s[u],g=c.inside,f=!!c.lookbehind,h=!!c.greedy,d=0,m=c.alias;if(h&&!c.pattern.global){var p=c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern=RegExp(c.pattern.source,p+"g")}c=c.pattern||c;for(var y=t,v=a;y<n.length;v+=n[y].length,++y){var k=n[y];if(n.length>e.length)return;if(!(k instanceof _)){if(h&&y!=n.length-1){if(c.lastIndex=v,!(O=c.exec(e)))break;for(var b=O.index+(f&&O[1]?O[1].length:0),w=O.index+O[0].length,A=y,P=v,x=n.length;A<x&&(P<w||!n[A].type&&!n[A-1].greedy);++A)(P+=n[A].length)<=b&&(++y,v=P);if(n[y]instanceof _)continue;S=A-y,k=e.slice(v,P),O.index-=v}else{c.lastIndex=0;var O=c.exec(k),S=1}if(O){f&&(d=O[1]?O[1].length:0);w=(b=O.index+d)+(O=O[0].slice(d)).length;var j=k.slice(0,b),N=k.slice(w),E=[y,S];j&&(++y,v+=j.length,E.push(j));var L=new _(l,g?C.tokenize(O,g):O,m,O,h);if(E.push(L),N&&E.push(N),Array.prototype.splice.apply(n,E),1!=S&&C.matchGrammar(e,n,r,y,v,!0,l+","+u),i)break}else if(i)break}}}}},tokenize:function(e,n){var r=[e],t=n.rest;if(t){for(var a in t)n[a]=t[a];delete n.rest}return C.matchGrammar(e,r,n,0,0,!1),r},hooks:{all:{},add:function(e,n){var r=C.hooks.all;r[e]=r[e]||[],r[e].push(n)},run:function(e,n){var r=C.hooks.all[e];if(r&&r.length)for(var t,a=0;t=r[a++];)t(n)}},Token:_};function _(e,n,r,t,a){this.type=e,this.content=n,this.alias=r,this.length=0|(t||"").length,this.greedy=!!a}if(u.Prism=C,_.stringify=function(e,n){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return _.stringify(e,n)}).join("");var r={type:e.type,content:_.stringify(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n};if(e.alias){var t=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,t)}C.hooks.run("wrap",r);var a=Object.keys(r.attributes).map(function(e){return e+'="'+(r.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+(a?" "+a:"")+">"+r.content+"</"+r.tag+">"},!u.document)return u.addEventListener&&(C.disableWorkerMessageHandler||u.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,t=n.code,a=n.immediateClose;u.postMessage(C.highlight(t,C.languages[r],r)),a&&u.close()},!1)),C;var e=C.util.currentScript();if(e&&(C.filename=e.src,e.hasAttribute("data-manual")&&(C.manual=!0)),!C.manual){function r(){C.manual||C.highlightAll()}var t=document.readyState;"loading"===t||"interactive"===t&&e&&e.defer?document.addEventListener("DOMContentLoaded",r):window.requestAnimationFrame?window.requestAnimationFrame(r):window.setTimeout(r,16)}return C}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};n["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var t={};t[a]={pattern:RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g,a),"i"),lookbehind:!0,greedy:!0,inside:n},Prism.languages.insertBefore("markup","cdata",t)}}),Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
!function(s){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var e=s.languages.markup;e&&(e.tag.addInlined("style","css"),s.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:e.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:s.languages.css}},alias:"language-css"}},e.tag))}(Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*(?:$|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript;
