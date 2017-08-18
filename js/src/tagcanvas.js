!function(){"use strict";function t(t){return void 0!==t}function i(t){return"object"==typeof t&&null!=t}function e(t,i,e){return isNaN(t)?e:vt(e,xt(i,t))}function s(){return!1}function h(){return(new Date).valueOf()}function n(t,i){var e,s=[],h=t.length;for(e=0;e<h;++e)s.push(t[e]);return s.sort(i),s}function a(t){for(var i,e,s=t.length-1;s;)e=~~(Math.random()*s),i=t[s],t[s]=t[e],t[e]=i,--s}function o(t,i,e){this.x=t,this.y=i,this.z=e}function r(t,i){return i=i*Math.PI/180,t=t*Math.PI/180,new o(pt(t)*wt(i),-pt(i),-wt(t)*wt(i))}function l(t){this[1]={1:t[0],2:t[1],3:t[2]},this[2]={1:t[3],2:t[4],3:t[5]},this[3]={1:t[6],2:t[7],3:t[8]}}function u(t,i,e,s,h){var n,a,o,r,l,u=[],g=2/t;for(l=Math.PI*(3-yt(5)+(parseFloat(h)?parseFloat(h):0)),n=0;n<t;++n)a=n*g-1+g/2,o=yt(1-a*a),r=n*l,u.push([wt(r)*o*i,a*e,pt(r)*o*s]);return u}function g(t,i,e,s,h,n){var a,o,r,l,u,g,c=[],f=2/t;for(o=Math.PI*(3-yt(5)+(parseFloat(n)?parseFloat(n):0)),r=0;r<t;++r)l=r*f-1+f/2,a=r*o,u=wt(a),g=pt(a),c.push(i?[l*e,u*s,g*h]:[u*e,l*s,g*h]);return c}function c(t,i,e,s,h,n){var a,o,r,l,u=[],g=2*Math.PI/i;for(o=0;o<i;++o)a=o*g,r=wt(a),l=pt(a),u.push(t?[n*e,r*s,l*h]:[r*e,n*s,l*h]);return u}function f(t,i,e,s,h){return g(t,0,i,e,s,h)}function d(t,i,e,s,h){return g(t,1,i,e,s,h)}function m(t,i,e,s,h){return h=isNaN(h)?0:1*h,c(0,t,i,e,s,h)}function p(t,i,e,s,h){return h=isNaN(h)?0:1*h,c(1,t,i,e,s,h)}function w(t){var i=new Image;i.onload=function(){var e=i.width/2,s=i.height/2;t.centreFunc=function(t,h,n,a,o){t.setTransform(1,0,0,1,0,0),t.globalAlpha=1,t.drawImage(i,a-e,o-s)}},i.src=t.centreImage}function x(t,i){var e,s,h=t,n=(1*i).toPrecision(3)+")";return"#"===t[0]?(bt[t]||(4===t.length?bt[t]="rgba("+zt[t[1]]+zt[t[2]]+zt[t[3]]:bt[t]="rgba("+Ct[t.substr(1,2)]+Ct[t.substr(3,2)]+Ct[t.substr(5,2)]),h=bt[t]+n):"rgb("===t.substr(0,4)||"hsl("===t.substr(0,4)?h=t.replace("(","a(").replace(")",","+n):"rgba("!==t.substr(0,5)&&"hsla("!==t.substr(0,5)||(e=t.lastIndexOf(",")+1,s=t.indexOf(")"),i*=parseFloat(t.substring(e,s)),h=t.substr(0,e)+i.toPrecision(3)+")"),h}function v(t,i){if(window.G_vmlCanvasManager)return null;var e=Dt.createElement("canvas");return e.width=t,e.height=i,e}function T(){var t,i,e=v(3,3);return!!e&&(t=e.getContext("2d"),t.strokeStyle="#000",t.shadowColor="#fff",t.shadowBlur=3,t.globalAlpha=0,t.strokeRect(2,2,2,2),t.globalAlpha=1,i=t.getImageData(2,2,1,1),e=null,i.data[0]>0)}function y(t,i,e,s){var h,n=t.createLinearGradient(0,0,i,0);for(h in s)n.addColorStop(1-h,s[h]);t.fillStyle=n,t.fillRect(0,e,i,1)}function S(t,e,s){var h,n,a,o,r=1024,l=1,u=t.weightGradient;if(t.gCanvas)n=t.gCanvas.getContext("2d"),l=t.gCanvas.height;else{if(i(u[0])?l=u.length:u=[u],t.gCanvas=h=v(r,l),!h)return null;for(n=h.getContext("2d"),a=0;a<l;++a)y(n,r,a,u[a])}return s=xt(vt(s||0,l-1),0),"rgba("+(o=n.getImageData(~~((r-1)*e),s,1,1).data)[0]+","+o[1]+","+o[2]+","+o[3]/255+")"}function b(t,i,e,s,h,n,a,o,r,l,u,g){var c,f,d=h+(o||0)+(r.length&&r[0]<0?mt(r[0]):0),m=n+(o||0)+(r.length&&r[1]<0?mt(r[1]):0);for(t.font=i,t.textBaseline="top",t.fillStyle=e,a&&(t.shadowColor=a),o&&(t.shadowBlur=o),r.length&&(t.shadowOffsetX=r[0],t.shadowOffsetY=r[1]),c=0;c<s.length;++c)f=0,u&&("right"==g?f=l-u[c]:"centre"==g&&(f=(l-u[c])/2)),t.fillText(s[c],d+f,m),m+=parseInt(i)}function C(t,i,e,s,h,n,a){n?(t.beginPath(),t.moveTo(i,e+h-n),t.arcTo(i,e,i+n,e,n),t.arcTo(i+s,e,i+s,e+n,n),t.arcTo(i+s,e+h,i+s-n,e+h,n),t.arcTo(i,e+h,i,e+h-n,n),t.closePath(),t[a?"stroke":"fill"]()):t[a?"strokeRect":"fillRect"](i,e,s,h)}function z(t,i,e,s,h,n,a,o,r){this.strings=t,this.font=i,this.width=e,this.height=s,this.maxWidth=h,this.stringWidths=n,this.align=a,this.valign=o,this.scale=r}function D(t,i,e){var s=v(i,e);return s?(s.getContext("2d").drawImage(t,(i-t.width)/2,(e-t.height)/2),s):null}function A(t,i,e){var s=v(i,e);return s?(s.getContext("2d").drawImage(t,0,0,i,e),s):null}function I(t,i,e,s,h,n,a,o,r,l){var u,g,c,f,d,m,p,w,x=i+(2*o+n)*s,T=e+(2*o+n)*s,y=v(x,T);return y?(n*=s,r*=s,g=c=n/2,f=x-n,d=T-n,o=o*s+g,u=y.getContext("2d"),w=vt(r,f/2,d/2),h&&(u.fillStyle=h,C(u,g,c,f,d,w)),n&&(u.strokeStyle=a,u.lineWidth=n,C(u,g,c,f,d,w,!0)),l?(m=v(x,T),(p=m.getContext("2d")).drawImage(t,o,o,i,e),p.globalCompositeOperation="source-in",p.fillStyle=a,p.fillRect(0,0,x,T),p.globalCompositeOperation="destination-over",p.drawImage(y,0,0),p.globalCompositeOperation="source-over",u.drawImage(m,0,0)):u.drawImage(t,o,o,t.width,t.height),{image:y,width:x/s,height:T/s}):null}function M(t,i,e,s,h){var n,a,o=parseFloat(i),r=xt(e,s);return(n=v(e,s))?(i.indexOf("%")>0?o=r*o/100:o*=h,a=n.getContext("2d"),a.globalCompositeOperation="source-over",a.fillStyle="#fff",o>=r/2?(o=vt(e,s)/2,a.beginPath(),a.moveTo(e/2,s/2),a.arc(e/2,s/2,o,0,2*Math.PI,!1),a.fill(),a.closePath()):(o=vt(e/2,s/2,o),C(a,0,0,e,s,o,!0),a.fill()),a.globalCompositeOperation="source-in",a.drawImage(t,0,0,e,s),n):null}function F(t,i,e,s,h,n,a){var o,r,l=mt(a[0]),u=mt(a[1]),g=i+(l>n?l+n:2*n)*s,c=e+(u>n?u+n:2*n)*s,f=s*((n||0)+(a[0]<0?l:0)),d=s*((n||0)+(a[1]<0?u:0));return(o=v(g,c))?(r=o.getContext("2d"),h&&(r.shadowColor=h),n&&(r.shadowBlur=n*s),a&&(r.shadowOffsetX=a[0]*s,r.shadowOffsetY=a[1]*s),r.drawImage(t,f,d,i,e),{image:o,width:g/s,height:c/s}):null}function O(t,i,e){var s,h,n,a,o,r,l,u,g=parseInt(t.toString().length*e),c=parseInt(2*e*t.length),f=v(g,c);if(!f)return null;for((s=f.getContext("2d")).fillStyle="#000",s.fillRect(0,0,g,c),b(s,e+"px "+i,"#fff",t,0,0,0,0,[],"centre"),u={min:{x:n=(h=s.getImageData(0,0,g,c)).width,y:a=h.height},max:{x:-1,y:-1}},r=0;r<a;++r)for(o=0;o<n;++o)l=4*(r*n+o),h.data[l+1]>0&&(o<u.min.x&&(u.min.x=o),o>u.max.x&&(u.max.x=o),r<u.min.y&&(u.min.y=r),r>u.max.y&&(u.max.y=r));return n!=g&&(u.min.x*=g/n,u.max.x*=g/n),a!=c&&(u.min.y*=g/a,u.max.y*=g/a),f=null,u}function k(t){return"'"+t.replace(/(\'|\")/g,"").replace(/\s*,\s*/g,"', '")+"'"}function P(t,i,e){(e=e||Dt).addEventListener?e.addEventListener(t,i,!1):e.attachEvent("on"+t,i)}function E(t,i,e){(e=e||Dt).removeEventListener?e.removeEventListener(t,i):e.detachEvent("on"+t,i)}function B(t,i,e,s){var h,n,a,o,r,l,u=s.imageScale;return i.complete?t.complete?(i.width=i.width,i.height=i.height,u&&(t.width=i.width*u,t.height=i.height*u),e.iw=t.width,e.ih=t.height,s.txtOpt&&(n=t,h=s.zoomMax*s.txtScale,r=e.iw*h,l=e.ih*h,r<i.naturalWidth||l<i.naturalHeight?(n=A(t,r,l))&&(e.fimage=n):(r=e.iw,l=e.ih,h=1),parseFloat(s.imageRadius)&&(e.image=e.fimage=t=M(e.image,s.imageRadius,r,l,h)),e.HasText()||(s.shadow&&(n=F(e.image,r,l,h,s.shadow,s.shadowBlur,s.shadowOffset))&&(e.fimage=n.image,e.w=n.width,e.h=n.height),(s.bgColour||s.bgOutlineThickness)&&(a="tag"==s.bgColour?R(e.a,"background-color"):s.bgColour,o="tag"==s.bgOutline?R(e.a,"color"):s.bgOutline||s.textColour,r=e.fimage.width,l=e.fimage.height,"colour"==s.outlineMethod&&(n=I(e.fimage,r,l,h,a,s.bgOutlineThickness,e.outline.colour,s.padding,s.bgRadius,1))&&(e.oimage=n.image),(n=I(e.fimage,r,l,h,a,s.bgOutlineThickness,o,s.padding,s.bgRadius))&&(e.fimage=n.image,e.w=n.width,e.h=n.height)),"size"==s.outlineMethod&&(s.outlineIncrease>0?(e.iw+=2*s.outlineIncrease,e.ih+=2*s.outlineIncrease,r=h*e.iw,l=h*e.ih,n=A(e.fimage,r,l),e.oimage=n,e.fimage=D(e.fimage,e.oimage.width,e.oimage.height)):(r=h*(e.iw+2*s.outlineIncrease),l=h*(e.ih+2*s.outlineIncrease),n=A(e.fimage,r,l),e.oimage=D(n,e.fimage.width,e.fimage.height))))),void e.Init()):P("load",function(){B(t,i,e,s)},t):P("load",function(){B(t,i,e,s)},i)}function R(t,i){var e=Dt.defaultView,s=i.replace(/\-([a-z])/g,function(t){return t.charAt(1).toUpperCase()});return e&&e.getComputedStyle&&e.getComputedStyle(t,null).getPropertyValue(i)||t.currentStyle&&t.currentStyle[s]}function N(t,i,e){var s,h=1;return i?h=1*(t.getAttribute(i)||e):(s=R(t,"font-size"))&&(h=s.indexOf("px")>-1&&1*s.replace("px","")||s.indexOf("pt")>-1&&1.25*s.replace("pt","")||3.3*s),h}function _(i){return i.target&&t(i.target.id)?i.target.id:i.srcElement.parentNode.id}function L(i,e){var s,h,n=parseInt(R(e,"width"))/e.width,a=parseInt(R(e,"height"))/e.height;return t(i.offsetX)?s={x:i.offsetX,y:i.offsetY}:(h=K(e.id),t(i.changedTouches)&&(i=i.changedTouches[0]),i.pageX&&(s={x:i.pageX-h.x,y:i.pageY-h.y})),s&&n&&a&&(s.x/=n,s.y/=a),s}function H(t){var i=t.target||t.fromElement.parentNode,e=et.tc[i.id];e&&(e.mx=e.my=-1,e.UnFreeze(),e.EndDrag())}function W(t){var i,e,s,h=et,n=_(t);for(i in h.tc)(e=h.tc[i]).tttimer&&(clearTimeout(e.tttimer),e.tttimer=null);n&&h.tc[n]&&(e=h.tc[n],(s=L(t,e.canvas))&&(e.mx=s.x,e.my=s.y,e.Drag(t,s)),e.drawn=0)}function X(t){var i=et,e=Dt.addEventListener?0:1,s=_(t);s&&t.button==e&&i.tc[s]&&i.tc[s].BeginDrag(t)}function Y(t){var i,e=et,s=Dt.addEventListener?0:1,h=_(t);h&&t.button==s&&e.tc[h]&&(i=e.tc[h],W(t),i.EndDrag()||i.touchState||i.Clicked(t))}function U(t){var i,e=_(t),s=e&&et.tc[e];s&&t.changedTouches&&(1==t.touches.length&&0==s.touchState?(s.touchState=1,s.BeginDrag(t),(i=L(t,s.canvas))&&(s.mx=i.x,s.my=i.y,s.drawn=0)):2==t.targetTouches.length&&s.pinchZoom?(s.touchState=3,s.EndDrag(),s.BeginPinch(t)):(s.EndDrag(),s.EndPinch(),s.touchState=0))}function V(t){var i=_(t),e=i&&et.tc[i];if(e&&t.changedTouches){switch(e.touchState){case 1:e.Draw(),e.Clicked();break;case 2:e.EndDrag();break;case 3:e.EndPinch()}e.touchState=0}}function q(t){var i,e,s,h=et,n=_(t);for(i in h.tc)(e=h.tc[i]).tttimer&&(clearTimeout(e.tttimer),e.tttimer=null);if((e=n&&h.tc[n])&&t.changedTouches&&e.touchState){switch(e.touchState){case 1:case 2:(s=L(t,e.canvas))&&(e.mx=s.x,e.my=s.y,e.Drag(t,s)&&(e.touchState=2));break;case 3:e.Pinch(t)}e.drawn=0}}function G(t){var i=et,e=_(t);e&&i.tc[e]&&(t.cancelBubble=!0,t.returnValue=!1,t.preventDefault&&t.preventDefault(),i.tc[e].Wheel((t.wheelDelta||t.detail)>0))}function Z(t){var i,e=et;clearTimeout(e.scrollTimer);for(i in e.tc)e.tc[i].Pause();e.scrollTimer=setTimeout(function(){var t,i=et;for(t in i.tc)i.tc[t].Resume()},e.scrollPause)}function j(){J(h())}function J(t){var i,e=et.tc;et.NextFrame(et.interval),t=t||h();for(i in e)e[i].Draw(t)}function K(t){var i=Dt.getElementById(t).getBoundingClientRect(),e=Dt.documentElement,s=Dt.body,h=window,n=h.pageXOffset||e.scrollLeft,a=h.pageYOffset||e.scrollTop,o=e.clientLeft||s.clientLeft,r=e.clientTop||s.clientTop;return{x:i.left+n-o,y:i.top+a-r}}function Q(t,i,e,s){var h=t.radius*t.z1/(t.z1+t.z2+i.z);return{x:i.x*h*e,y:i.y*h*s,z:i.z,w:(t.z1-i.z)/t.z2}}function $(t){this.e=t,this.br=0,this.line=[],this.text=[],this.original=t.innerText||t.textContent}function tt(t,i){this.ts=null,this.tc=t,this.tag=i,this.x=this.y=this.w=this.h=this.sc=1,this.z=0,this.pulse=1,this.pulsate=t.pulsateTo<1,this.colour=t.outlineColour,this.adash=~~t.outlineDash,this.agap=~~t.outlineDashSpace||this.adash,this.aspeed=1*t.outlineDashSpeed,"tag"==this.colour?this.colour=R(i.a,"color"):"tagbg"==this.colour&&(this.colour=R(i.a,"background-color")),this.Draw=this.pulsate?this.DrawPulsate:this.DrawSimple,this.radius=0|t.outlineRadius,this.SetMethod(t.outlineMethod)}function it(t,i,e,s,h,n,a,r,l,u,g,c,f,d){this.tc=t,this.image=null,this.text=i,this.text_original=d,this.line_widths=[],this.title=e.title||null,this.a=e,this.position=new o(s[0],s[1],s[2]),this.x=this.y=this.z=0,this.w=h,this.h=n,this.colour=a||t.textColour,this.bgColour=r||t.bgColour,this.bgRadius=0|l,this.bgOutline=u||this.colour,this.bgOutlineThickness=0|g,this.textFont=c||t.textFont,this.padding=0|f,this.sc=this.alpha=1,this.weighted=!t.weight,this.outline=new tt(t,this)}function et(i,n,a){var o,r,u,g=Dt.getElementById(i),c=["id","class","innerHTML"];if(!g)throw 0;if(t(window.G_vmlCanvasManager)&&(g=window.G_vmlCanvasManager.initElement(g),this.ie=parseFloat(navigator.appVersion.split("MSIE")[1])),g&&(!g.getContext||!g.getContext("2d").fillText)){for(r=Dt.createElement("DIV"),o=0;o<c.length;++o)r[c[o]]=g[c[o]];throw g.parentNode.insertBefore(r,g),g.parentNode.removeChild(g),0}for(o in et.options)this[o]=a&&t(a[o])?a[o]:t(et[o])?et[o]:et.options[o];if(this.canvas=g,this.ctxt=g.getContext("2d"),this.z1=250/xt(this.depth,.001),this.z2=this.z1/this.zoom,this.radius=.0075*vt(g.height,g.width),this.max_radius=100,this.max_weight=[],this.min_weight=[],this.textFont=this.textFont&&k(this.textFont),this.textHeight*=1,this.imageRadius=this.imageRadius.toString(),this.pulsateTo=e(this.pulsateTo,0,1),this.minBrightness=e(this.minBrightness,0,1),this.maxBrightness=e(this.maxBrightness,this.minBrightness,1),this.ctxt.textBaseline="top",this.lx=(this.lock+"").indexOf("x")+1,this.ly=(this.lock+"").indexOf("y")+1,this.frozen=this.dx=this.dy=this.fixedAnim=this.touchState=0,this.fixedAlpha=1,this.source=n||i,this.repeatTags=vt(64,~~this.repeatTags),this.minTags=vt(200,~~this.minTags),~~this.scrollPause>0?et.scrollPause=~~this.scrollPause:this.scrollPause=0,this.minTags>0&&this.repeatTags<1&&(o=this.GetTags().length)&&(this.repeatTags=Tt(this.minTags/o)-1),this.transform=l.Identity(),this.startTime=this.time=h(),this.mx=this.my=-1,this.centreImage&&w(this),this.Animate=this.dragControl?this.AnimateDrag:this.AnimatePosition,this.animTiming="function"==typeof et[this.animTiming]?et[this.animTiming]:et.Smooth,this.shadowBlur||this.shadowOffset[0]||this.shadowOffset[1]?(this.ctxt.shadowColor=this.shadow,this.shadow=this.ctxt.shadowColor,this.shadowAlpha=T()):delete this.shadow,this.Load(),n&&this.hideTags&&function(t){et.loaded?t.HideTags():P("load",function(){t.HideTags()},window)}(this),this.yaw=this.initial?this.initial[0]*this.maxSpeed:0,this.pitch=this.initial?this.initial[1]*this.maxSpeed:0,this.tooltip?(this.ctitle=g.title,g.title="","native"==this.tooltip?this.Tooltip=this.TooltipNative:(this.Tooltip=this.TooltipDiv,this.ttdiv||(this.ttdiv=Dt.createElement("div"),this.ttdiv.className=this.tooltipClass,this.ttdiv.style.position="absolute",this.ttdiv.style.zIndex=g.style.zIndex+1,P("mouseover",function(t){t.target.style.display="none"},this.ttdiv),Dt.body.appendChild(this.ttdiv)))):this.Tooltip=this.TooltipNone,!this.noMouse&&!At[i])for(At[i]=[["mousemove",W],["mouseout",H],["mouseup",Y],["touchstart",U],["touchend",V],["touchcancel",V],["touchmove",q]],this.dragControl&&(At[i].push(["mousedown",X]),At[i].push(["selectstart",s])),this.wheelZoom&&(At[i].push(["mousewheel",G]),At[i].push(["DOMMouseScroll",G])),this.scrollPause&&At[i].push(["scroll",Z,window]),o=0;o<At[i].length;++o)r=At[i][o],P(r[0],r[1],r[2]?r[2]:g);et.started||(u=window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,et.NextFrame=u?et.NextFrameRAF:et.NextFrameTimeout,et.interval=this.interval,et.NextFrame(this.interval),et.started=1)}function st(t){var i=t.targetTouches[0],e=t.targetTouches[1];return yt(St(e.pageX-i.pageX,2)+St(e.pageY-i.pageY,2))}function ht(t,i){et.tc[i]&&et.tc[i][t]()}var nt,at,ot,rt,lt,ut,gt,ct,ft,dt,mt=Math.abs,pt=Math.sin,wt=Math.cos,xt=Math.max,vt=Math.min,Tt=Math.ceil,yt=Math.sqrt,St=Math.pow,bt={},Ct={},zt={0:"0,",1:"17,",2:"34,",3:"51,",4:"68,",5:"85,",6:"102,",7:"119,",8:"136,",9:"153,",a:"170,",A:"170,",b:"187,",B:"187,",c:"204,",C:"204,",d:"221,",D:"221,",e:"238,",E:"238,",f:"255,",F:"255,"},Dt=document,At={};for(nt=0;nt<256;++nt)at=nt.toString(16),nt<16&&(at="0"+at),Ct[at]=Ct[at.toUpperCase()]=nt.toString()+",";(gt=o.prototype).length=function(){return yt(this.x*this.x+this.y*this.y+this.z*this.z)},gt.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},gt.cross=function(t){return new o(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},gt.angle=function(t){var i,e=this.dot(t);return 0==e?Math.PI/2:(i=e/(this.length()*t.length()))>=1?0:i<=-1?Math.PI:Math.acos(i)},gt.unit=function(){var t=this.length();return new o(this.x/t,this.y/t,this.z/t)},ut=l.prototype,l.Identity=function(){return new l([1,0,0,0,1,0,0,0,1])},l.Rotation=function(t,i){var e=pt(t),s=wt(t),h=1-s;return new l([s+St(i.x,2)*h,i.x*i.y*h-i.z*e,i.x*i.z*h+i.y*e,i.y*i.x*h+i.z*e,s+St(i.y,2)*h,i.y*i.z*h-i.x*e,i.z*i.x*h-i.y*e,i.z*i.y*h+i.x*e,s+St(i.z,2)*h])},ut.mul=function(t){var i,e,s=[],h=t.xform?1:0;for(i=1;i<=3;++i)for(e=1;e<=3;++e)h?s.push(this[i][1]*t[1][e]+this[i][2]*t[2][e]+this[i][3]*t[3][e]):s.push(this[i][e]*t);return new l(s)},ut.xform=function(t){var i={},e=t.x,s=t.y,h=t.z;return i.x=e*this[1][1]+s*this[2][1]+h*this[3][1],i.y=e*this[1][2]+s*this[2][2]+h*this[3][2],i.z=e*this[1][3]+s*this[2][3]+h*this[3][3],i},(ft=z.prototype).SetImage=function(t,i,e,s,h,n,a,o){this.image=t,this.iwidth=i*this.scale,this.iheight=e*this.scale,this.ipos=s,this.ipad=h*this.scale,this.iscale=o,this.ialign=n,this.ivalign=a},ft.Align=function(t,i,e){var s=0;return"right"==e||"bottom"==e?s=i-t:"left"!=e&&"top"!=e&&(s=(i-t)/2),s},ft.Create=function(t,i,e,s,h,n,a,o,r){var l,u,g,c,f,d,m,p,w,x,T,y,S,z,D,A,I,M=mt(a[0]),F=mt(a[1]);return o=xt(o,M+n,F+n),f=2*(o+s),m=2*(o+s),u=this.width+f,g=this.height+m,w=x=o+s,this.image&&(T=y=o+s,S=this.iwidth,z=this.iheight,"top"==this.ipos||"bottom"==this.ipos?(S<this.width?T+=this.Align(S,this.width,this.ialign):w+=this.Align(this.width,S,this.align),"top"==this.ipos?x+=z+this.ipad:y+=this.height+this.ipad,u=xt(u,S+f),g+=z+this.ipad):(z<this.height?y+=this.Align(z,this.height,this.ivalign):x+=this.Align(this.height,z,this.valign),"right"==this.ipos?T+=this.width+this.ipad:w+=S+this.ipad,u+=S+this.ipad,g=xt(g,z+m))),(l=v(u,g))?(f=m=s/2,d=u-s,p=g-s,D=vt(r,d/2,p/2),c=l.getContext("2d"),i&&(c.fillStyle=i,C(c,f,m,d,p,D)),s&&(c.strokeStyle=e,c.lineWidth=s,C(c,f,m,d,p,D,!0)),(n||M||F)&&(A=v(u,g))&&(I=c,c=A.getContext("2d")),b(c,this.font,t,this.strings,w,x,0,0,[],this.maxWidth,this.stringWidths,this.align),this.image&&c.drawImage(this.image,T,y,S,z),I&&(c=I,h&&(c.shadowColor=h),n&&(c.shadowBlur=n),c.shadowOffsetX=a[0],c.shadowOffsetY=a[1],c.drawImage(A,0,0)),l):null},(ct=$.prototype).Empty=function(){for(var t=0;t<this.text.length;++t)if(this.text[t].length)return!1;return!0},ct.Lines=function(t){var i,e,s,h=t?1:0;for(e=(i=(t=t||this.e).childNodes).length,s=0;s<e;++s)"BR"==i[s].nodeName?(this.text.push(this.line.join(" ")),this.br=1):3==i[s].nodeType?this.br?(this.line=[i[s].nodeValue],this.br=0):this.line.push(i[s].nodeValue):this.Lines(i[s]);return h||this.br||this.text.push(this.line.join(" ")),this.text},ct.SplitWidth=function(t,i,e,s){var h,n,a,o=[];for(i.font=s+"px "+e,h=0;h<this.text.length;++h){for(a=this.text[h].split(/\s+/),this.line=[a[0]],n=1;n<a.length;++n)i.measureText(this.line.join(" ")+" "+a[n]).width>t?(o.push(this.line.join(" ")),this.line=[a[n]]):this.line.push(a[n]);o.push(this.line.join(" "))}return this.text=o},(ot=tt.prototype).SetMethod=function(t){var i={block:["PreDraw","DrawBlock"],colour:["PreDraw","DrawColour"],outline:["PostDraw","DrawOutline"],classic:["LastDraw","DrawOutline"],size:["PreDraw","DrawSize"],none:["LastDraw"]},e=i[t]||i.outline;"none"==t?this.Draw=function(){return 1}:this.drawFunc=this[e[1]],this[e[0]]=this.Draw},ot.Update=function(t,i,e,s,h,n,a,o){var r=this.tc.outlineOffset,l=2*r;this.x=h*t+a-r,this.y=h*i+o-r,this.w=h*e+l,this.h=h*s+l,this.sc=h,this.z=n},ot.Ants=function(t){if(this.adash){var i,e=this.adash,s=this.agap,n=this.aspeed,a=e+s,o=0,r=e,l=s,u=0,g=0;n&&(g=mt(n)*(h()-this.ts)/50,n<0&&(g=864e4-g),n=~~g%a),n?(e>=n?(o=e-n,r=n):(l=a-n,u=s-l),i=[o,l,r,u]):i=[e,s],t.setLineDash(i)}},ot.DrawOutline=function(t,i,e,s,h,n){var a=vt(this.radius,h/2,s/2);t.strokeStyle=n,this.Ants(t),C(t,i,e,s,h,a,!0)},ot.DrawSize=function(t,i,e,s,h,n,a,o,r){var l,u,g,c=a.w,f=a.h;return this.pulsate?(g=a.image?(a.image.height+this.tc.outlineIncrease)/a.image.height:a.oscale,u=a.fimage||a.image,l=1+(g-1)*(1-this.pulse),a.h*=l,a.w*=l):u=a.oimage,a.alpha=1,a.Draw(t,o,r,u),a.h=f,a.w=c,1},ot.DrawColour=function(t,i,e,s,h,n,a,o,r){return a.oimage?(this.pulse<1?(a.alpha=1-St(this.pulse,2),a.Draw(t,o,r,a.fimage),a.alpha=this.pulse):a.alpha=1,a.Draw(t,o,r,a.oimage),1):this[a.image?"DrawColourImage":"DrawColourText"](t,i,e,s,h,n,a,o,r)},ot.DrawColourText=function(t,i,e,s,h,n,a,o,r){var l=a.colour;return a.colour=n,a.alpha=1,a.Draw(t,o,r),a.colour=l,1},ot.DrawColourImage=function(t,i,e,s,h,n,a,o,r){var l=t.canvas,u=~~xt(i,0),g=~~xt(e,0),c=vt(l.width-u,s)+.5|0,f=vt(l.height-g,h)+.5|0;return dt?(dt.width=c,dt.height=f):dt=v(c,f),dt?(dt.getContext("2d").drawImage(l,u,g,c,f,0,0,c,f),t.clearRect(u,g,c,f),this.pulsate?a.alpha=1-St(this.pulse,2):a.alpha=1,a.Draw(t,o,r),t.setTransform(1,0,0,1,0,0),t.save(),t.beginPath(),t.rect(u,g,c,f),t.clip(),t.globalCompositeOperation="source-in",t.fillStyle=n,t.fillRect(u,g,c,f),t.restore(),t.globalAlpha=1,t.globalCompositeOperation="destination-over",t.drawImage(dt,0,0,c,f,u,g,c,f),t.globalCompositeOperation="source-over",1):this.SetMethod("outline")},ot.DrawBlock=function(t,i,e,s,h,n){var a=vt(this.radius,h/2,s/2);t.fillStyle=n,C(t,i,e,s,h,a)},ot.DrawSimple=function(t,i,e,s,h,n){var a=this.tc;return t.setTransform(1,0,0,1,0,0),t.strokeStyle=this.colour,t.lineWidth=a.outlineThickness,t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0,t.globalAlpha=n?h:1,this.drawFunc(t,this.x,this.y,this.w,this.h,this.colour,i,e,s)},ot.DrawPulsate=function(t,i,e,s){var n=h()-this.ts,a=this.tc,o=a.pulsateTo+(1-a.pulsateTo)*(.5+wt(2*Math.PI*n/(1e3*a.pulsateTime))/2);return this.pulse=o=et.Smooth(1,o),this.DrawSimple(t,i,e,s,o,1)},ot.Active=function(t,i,e){var s=i>=this.x&&e>=this.y&&i<=this.x+this.w&&e<=this.y+this.h;return this.ts=s?this.ts||h():null,s},ot.PreDraw=ot.PostDraw=ot.LastDraw=s,(rt=it.prototype).Init=function(t){var i=this.tc;this.textHeight=i.textHeight,this.HasText()?this.Measure(i.ctxt,i):(this.w=this.iw,this.h=this.ih),this.SetShadowColour=i.shadowAlpha?this.SetShadowColourAlpha:this.SetShadowColourFixed,this.SetDraw(i)},rt.Draw=s,rt.HasText=function(){return this.text&&this.text[0].length>0},rt.EqualTo=function(t){var i=t.getElementsByTagName("img");return this.a.href!=t.href?0:i.length?this.image.src==i[0].src:(t.innerText||t.textContent)==this.text_original},rt.SetImage=function(t){this.image=this.fimage=t},rt.SetDraw=function(t){this.Draw=this.fimage?t.ie>7?this.DrawImageIE:this.DrawImage:this.DrawText,t.noSelect&&(this.CheckActive=s)},rt.MeasureText=function(t){var i,e,s=this.text.length,h=0;for(i=0;i<s;++i)this.line_widths[i]=e=t.measureText(this.text[i]).width,h=xt(h,e);return h},rt.Measure=function(t,i){var e,s,h,n,a,o,r,l,u,g=O(this.text,this.textFont,this.textHeight);r=g?g.max.y+g.min.y:this.textHeight,t.font=this.font=this.textHeight+"px "+this.textFont,o=this.MeasureText(t),i.txtOpt&&(e=i.txtScale,s=e*this.textHeight,h=s+"px "+this.textFont,n=[e*i.shadowOffset[0],e*i.shadowOffset[1]],t.font=h,a=this.MeasureText(t),u=new z(this.text,h,a+e,e*r+e,a,this.line_widths,i.textAlign,i.textVAlign,e),this.image&&u.SetImage(this.image,this.iw,this.ih,i.imagePosition,i.imagePadding,i.imageAlign,i.imageVAlign,i.imageScale),l=u.Create(this.colour,this.bgColour,this.bgOutline,e*this.bgOutlineThickness,i.shadow,e*i.shadowBlur,n,e*this.padding,e*this.bgRadius),"colour"==i.outlineMethod?this.oimage=u.Create(this.outline.colour,this.bgColour,this.outline.colour,e*this.bgOutlineThickness,i.shadow,e*i.shadowBlur,n,e*this.padding,e*this.bgRadius):"size"==i.outlineMethod&&(g=O(this.text,this.textFont,this.textHeight+i.outlineIncrease),s=g.max.y+g.min.y,h=e*(this.textHeight+i.outlineIncrease)+"px "+this.textFont,t.font=h,a=this.MeasureText(t),u=new z(this.text,h,a+e,e*s+e,a,this.line_widths,i.textAlign,i.textVAlign,e),this.image&&u.SetImage(this.image,this.iw+i.outlineIncrease,this.ih+i.outlineIncrease,i.imagePosition,i.imagePadding,i.imageAlign,i.imageVAlign,i.imageScale),this.oimage=u.Create(this.colour,this.bgColour,this.bgOutline,e*this.bgOutlineThickness,i.shadow,e*i.shadowBlur,n,e*this.padding,e*this.bgRadius),this.oscale=this.oimage.width/l.width,i.outlineIncrease>0?l=D(l,this.oimage.width,this.oimage.height):this.oimage=D(this.oimage,l.width,l.height)),l&&(this.fimage=l,o=this.fimage.width/e,r=this.fimage.height/e),this.SetDraw(i),i.txtOpt=!!this.fimage),this.h=r,this.w=o},rt.SetFont=function(t,i,e,s){this.textFont=t,this.colour=i,this.bgColour=e,this.bgOutline=s,this.Measure(this.tc.ctxt,this.tc)},rt.SetWeight=function(t){var i,e,s=this.tc,h=s.weightMode.split(/[, ]/),n=t.length;if(this.HasText()){for(this.weighted=!0,e=0;e<n;++e)"both"==(i=h[e]||"size")?(this.Weight(t[e],s.ctxt,s,"size",s.min_weight[e],s.max_weight[e],e),this.Weight(t[e],s.ctxt,s,"colour",s.min_weight[e],s.max_weight[e],e)):this.Weight(t[e],s.ctxt,s,i,s.min_weight[e],s.max_weight[e],e);this.Measure(s.ctxt,s)}},rt.Weight=function(t,i,e,s,h,n,a){var o=((t=isNaN(t)?1:t)-h)/(n-h);"colour"==s?this.colour=S(e,o,a):"bgcolour"==s?this.bgColour=S(e,o,a):"bgoutline"==s?this.bgOutline=S(e,o,a):"outline"==s?this.outline.colour=S(e,o,a):"size"==s&&(e.weightSizeMin>0&&e.weightSizeMax>e.weightSizeMin?this.textHeight=e.weightSize*(e.weightSizeMin+(e.weightSizeMax-e.weightSizeMin)*o):this.textHeight=xt(1,t*e.weightSize))},rt.SetShadowColourFixed=function(t,i,e){t.shadowColor=i},rt.SetShadowColourAlpha=function(t,i,e){t.shadowColor=x(i,e)},rt.DrawText=function(t,i,e){var s,h,n=this.tc,a=this.x,o=this.y,r=this.sc;for(t.globalAlpha=this.alpha,t.fillStyle=this.colour,n.shadow&&this.SetShadowColour(t,n.shadow,this.alpha),t.font=this.font,a+=i/r,o+=e/r-this.h/2,s=0;s<this.text.length;++s)h=a,"right"==n.textAlign?h+=this.w/2-this.line_widths[s]:"centre"==n.textAlign?h-=this.line_widths[s]/2:h-=this.w/2,t.setTransform(r,0,0,r,r*h,r*o),t.fillText(this.text[s],0,0),o+=this.textHeight},rt.DrawImage=function(t,i,e,s){var h=this.x,n=this.y,a=this.sc,o=s||this.fimage,r=this.w,l=this.h,u=this.alpha,g=this.shadow;t.globalAlpha=u,g&&this.SetShadowColour(t,g,u),h+=i/a-r/2,n+=e/a-l/2,t.setTransform(a,0,0,a,a*h,a*n),t.drawImage(o,0,0,r,l)},rt.DrawImageIE=function(t,i,e){var s=this.fimage,h=this.sc,n=s.width=this.w*h,a=s.height=this.h*h,o=this.x*h+i-n/2,r=this.y*h+e-a/2;t.setTransform(1,0,0,1,0,0),t.globalAlpha=this.alpha,t.drawImage(s,o,r)},rt.Calc=function(t,i){var s,h=this.tc,n=h.minBrightness,a=h.maxBrightness,o=h.max_radius;return s=t.xform(this.position),this.xformed=s,s=Q(h,s,h.stretchX,h.stretchY),this.x=s.x,this.y=s.y,this.z=s.z,this.sc=s.w,this.alpha=i*e(n+(a-n)*(o-this.z)/(2*o),0,1),this.xformed},rt.UpdateActive=function(t,i,e){var s=this.outline,h=this.w,n=this.h,a=this.x-h/2,o=this.y-n/2;return s.Update(a,o,h,n,this.sc,this.z,i,e),s},rt.CheckActive=function(t,i,e){var s=this.tc,h=this.UpdateActive(t,i,e);return h.Active(t,s.mx,s.my)?h:null},rt.Clicked=function(t){var i,e=this.a,s=e.target,h=e.href;if(""==s||"_self"==s){if(Dt.createEvent){if((i=Dt.createEvent("MouseEvents")).initMouseEvent("click",1,1,window,0,0,0,0,0,0,0,0,0,0,null),!e.dispatchEvent(i))return}else if(e.fireEvent&&!e.fireEvent("onclick"))return;Dt.location=h}else if(self.frames[s])self.frames[s].document.location=h;else{try{if(top.frames[s])return void(top.frames[s].document.location=h)}catch(t){}window.open(h,s)}},(lt=et.prototype).SourceElements=function(){return Dt.querySelectorAll?Dt.querySelectorAll("#"+this.source):[Dt.getElementById(this.source)]},lt.HideTags=function(){var t,i=this.SourceElements();for(t=0;t<i.length;++t)i[t].style.display="none"},lt.GetTags=function(){var t,i,e,s,h=this.SourceElements(),n=[];for(s=0;s<=this.repeatTags;++s)for(i=0;i<h.length;++i)for(t=h[i].getElementsByTagName("a"),e=0;e<t.length;++e)n.push(t[e]);return n},lt.Message=function(t){var i,e,s,h,n,a,o=[],r=t.split("");for(i=0;i<r.length;++i)" "!=r[i]&&(e=i-r.length/2,s=Dt.createElement("A"),s.href="#",s.innerText=r[i],n=100*pt(e/9),a=-100*wt(e/9),(h=new it(this,r[i],s,[n,0,a],2,18,"#000","#fff",0,0,0,"monospace",2,r[i])).Init(),o.push(h));return o},lt.CreateTag=function(t){var i,e,s,h,n,a,o,r,l=[0,0,0];return"text"!=this.imageMode&&(i=t.getElementsByTagName("img")).length&&(e=new Image,e.src=i[0].src,!this.imageMode)?((s=new it(this,"",t,l,0,0)).SetImage(e),B(e,i[0],s,this),s):("image"!=this.imageMode&&(n=new $(t),h=n.Lines(),n.Empty()?n=null:(a=this.textFont||k(R(t,"font-family")),this.splitWidth&&(h=n.SplitWidth(this.splitWidth,this.ctxt,a,this.textHeight)),o="tag"==this.bgColour?R(t,"background-color"):this.bgColour,r="tag"==this.bgOutline?R(t,"color"):this.bgOutline)),n||e?(s=new it(this,h,t,l,2,this.textHeight+2,this.textColour||R(t,"color"),o,this.bgRadius,r,this.bgOutlineThickness,a,this.padding,n&&n.original),e?(s.SetImage(e),B(e,i[0],s,this)):s.Init(),s):void 0)},lt.UpdateTag=function(t,i){var e=this.textColour||R(i,"color"),s=this.textFont||k(R(i,"font-family")),h="tag"==this.bgColour?R(i,"background-color"):this.bgColour,n="tag"==this.bgOutline?R(i,"color"):this.bgOutline;t.a=i,t.title=i.title,t.colour==e&&t.textFont==s&&t.bgColour==h&&t.bgOutline==n||t.SetFont(s,e,h,n)},lt.Weight=function(t){var i,e,s,h,n=t.length,a=[],o=this.weightFrom?this.weightFrom.split(/[, ]/):[null],r=o.length;for(e=0;e<n;++e)for(a[e]=[],s=0;s<r;++s)i=N(t[e].a,o[s],this.textHeight),(!this.max_weight[s]||i>this.max_weight[s])&&(this.max_weight[s]=i),(!this.min_weight[s]||i<this.min_weight[s])&&(this.min_weight[s]=i),a[e][s]=i;for(s=0;s<r;++s)this.max_weight[s]>this.min_weight[s]&&(h=1);if(h)for(e=0;e<n;++e)t[e].SetWeight(a[e])},lt.Load=function(){var t,i,e,s,h,n,r,l,g=this.GetTags(),c=[],w=[],x={sphere:u,vcylinder:f,hcylinder:d,vring:m,hring:p};if(g.length){for(w.length=g.length,l=0;l<g.length;++l)w[l]=l;for(this.shuffleTags&&a(w),s=100*this.radiusX,h=100*this.radiusY,n=100*this.radiusZ,this.max_radius=xt(s,xt(h,n)),l=0;l<g.length;++l)(i=this.CreateTag(g[w[l]]))&&c.push(i);for(this.weight&&this.Weight(c,!0),this.shapeArgs?this.shapeArgs[0]=c.length:(e=this.shape.toString().split(/[(),]/),t=e.shift(),"function"==typeof window[t]?this.shape=window[t]:this.shape=x[t]||x.sphere,this.shapeArgs=[c.length,s,h,n].concat(e)),r=this.shape.apply(this,this.shapeArgs),this.listLength=c.length,l=0;l<c.length;++l)c[l].position=new o(r[l][0],r[l][1],r[l][2])}this.noTagsMessage&&!c.length&&(l=this.imageMode&&"both"!=this.imageMode?this.imageMode+" ":"",c=this.Message("No "+l+"tags")),this.taglist=c},lt.Update=function(){var t,i,e,s,h,n,r=this.GetTags(),l=[],u=this.taglist,g=[],c=[];if(!this.shapeArgs)return this.Load();if(r.length){for(s=this.listLength=r.length,e=u.length,h=0;h<e;++h)l.push(u[h]),c.push(h);for(h=0;h<s;++h){for(n=0,t=0;n<e;++n)u[n].EqualTo(r[h])&&(this.UpdateTag(l[n],r[h]),t=c[n]=-1);t||g.push(h)}for(h=0,n=0;h<e;++h)-1==c[n]?c.splice(n,1):++n;if(c.length){for(a(c);c.length&&g.length;)h=c.shift(),n=g.shift(),l[h]=this.CreateTag(r[n]);for(c.sort(function(t,i){return t-i});c.length;)l.splice(c.pop(),1)}for(n=l.length/(g.length+1),h=0;g.length;)l.splice(Tt(++h*n),0,this.CreateTag(r[g.shift()]));for(this.shapeArgs[0]=s=l.length,i=this.shape.apply(this,this.shapeArgs),h=0;h<s;++h)l[h].position=new o(i[h][0],i[h][1],i[h][2]);this.weight&&this.Weight(l)}this.taglist=l},lt.SetShadow=function(t){t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffset[0],t.shadowOffsetY=this.shadowOffset[1]},lt.Draw=function(t){if(!this.paused){var i,e,h,a,o=this.canvas,r=o.width,l=o.height,u=0,g=(t-this.time)*et.interval/1e3,c=r/2+this.offsetX,f=l/2+this.offsetY,d=this.ctxt,m=-1,p=this.taglist,w=p.length,x=this.frontSelect,v=this.centreFunc==s;if(this.time=t,this.frozen&&this.drawn)return this.Animate(r,l,g);for(a=this.AnimateFixed(),d.setTransform(1,0,0,1,0,0),h=0;h<w;++h)p[h].Calc(this.transform,this.fixedAlpha);if(p=n(p,function(t,i){return i.z-t.z}),a&&this.fixedAnim.active)i=this.fixedAnim.tag.UpdateActive(d,c,f);else{for(this.active=null,h=0;h<w;++h)(e=this.mx>=0&&this.my>=0&&this.taglist[h].CheckActive(d,c,f))&&e.sc>u&&(!x||e.z<=0)&&(i=e,m=h,i.tag=this.taglist[h],u=e.sc);this.active=i}for(this.txtOpt||this.shadow&&this.SetShadow(d),d.clearRect(0,0,r,l),h=0;h<w;++h){if(!v&&p[h].z<=0){try{this.centreFunc(d,r,l,c,f)}catch(t){alert(t),this.centreFunc=s}v=!0}i&&i.tag==p[h]&&i.PreDraw(d,p[h],c,f)||p[h].Draw(d,c,f),i&&i.tag==p[h]&&i.PostDraw(d)}this.freezeActive&&i?this.Freeze():(this.UnFreeze(),this.drawn=w==this.listLength),this.fixedCallback&&(this.fixedCallback(this,this.fixedCallbackTag),this.fixedCallback=null),a||this.Animate(r,l,g),i&&i.LastDraw(d),o.style.cursor=i?this.activeCursor:"",this.Tooltip(i,this.taglist[m])}},lt.TooltipNone=function(){},lt.TooltipNative=function(t,i){this.canvas.title=t?i&&i.title?i.title:"":this.ctitle},lt.SetTTDiv=function(t,i){var e=this,s=e.ttdiv.style;t!=e.ttdiv.innerHTML&&(s.display="none"),e.ttdiv.innerHTML=t,i&&(i.title=e.ttdiv.innerHTML),"none"!=s.display||e.tttimer||(e.tttimer=setTimeout(function(){var t=K(e.canvas.id);s.display="block",s.left=t.x+e.mx+"px",s.top=t.y+e.my+24+"px",e.tttimer=null},e.tooltipDelay))},lt.TooltipDiv=function(t,i){t&&i&&i.title?this.SetTTDiv(i.title,i):!t&&-1!=this.mx&&-1!=this.my&&this.ctitle.length?this.SetTTDiv(this.ctitle):this.ttdiv.style.display="none"},lt.Transform=function(t,i,e){if(i||e){var s=pt(i),h=wt(i),n=pt(e),a=wt(e),o=new l([a,0,n,0,1,0,-n,0,a]),r=new l([1,0,0,0,h,-s,0,s,h]);t.transform=t.transform.mul(o.mul(r))}},lt.AnimateFixed=function(){var t,i,e,s,n;return this.fadeIn&&((i=h()-this.startTime)>=this.fadeIn?(this.fadeIn=0,this.fixedAlpha=1):this.fixedAlpha=i/this.fadeIn),!!this.fixedAnim&&(this.fixedAnim.transform||(this.fixedAnim.transform=this.transform),t=this.fixedAnim,i=h()-t.t0,e=t.angle,n=this.animTiming(t.t,i),this.transform=t.transform,i>=t.t?(this.fixedCallbackTag=t.tag,this.fixedCallback=t.cb,this.fixedAnim=this.yaw=this.pitch=0):e*=n,s=l.Rotation(e,t.axis),this.transform=this.transform.mul(s),0!=this.fixedAnim)},lt.AnimatePosition=function(t,i,e){var s,h,n=this,a=n.mx,o=n.my;!n.frozen&&a>=0&&o>=0&&a<t&&o<i?(s=n.maxSpeed,h=n.reverse?-1:1,n.lx||(n.yaw=(2*a*s/t-s)*h*e),n.ly||(n.pitch=(2*o*s/i-s)*-h*e),n.initial=null):n.initial||(n.frozen&&!n.freezeDecel?n.yaw=n.pitch=0:n.Decel(n)),this.Transform(n,n.pitch,n.yaw)},lt.AnimateDrag=function(t,i,e){var s=this,h=100*e*s.maxSpeed/s.max_radius/s.zoom;s.dx||s.dy?(s.lx||(s.yaw=s.dx*h/s.stretchX),s.ly||(s.pitch=s.dy*-h/s.stretchY),s.dx=s.dy=0,s.initial=null):s.initial||s.Decel(s),this.Transform(s,s.pitch,s.yaw)},lt.Freeze=function(){this.frozen||(this.preFreeze=[this.yaw,this.pitch],this.frozen=1,this.drawn=0)},lt.UnFreeze=function(){this.frozen&&(this.yaw=this.preFreeze[0],this.pitch=this.preFreeze[1],this.frozen=0)},lt.Decel=function(t){var i=t.minSpeed,e=mt(t.yaw),s=mt(t.pitch);!t.lx&&e>i&&(t.yaw=e>t.z0?t.yaw*t.decel:0),!t.ly&&s>i&&(t.pitch=s>t.z0?t.pitch*t.decel:0)},lt.Zoom=function(t){this.z2=this.z1*(1/t),this.drawn=0},lt.Clicked=function(t){var i=this.active;try{i&&i.tag&&(!1===this.clickToFront||null===this.clickToFront?i.tag.Clicked(t):this.TagToFront(i.tag,this.clickToFront,function(){i.tag.Clicked(t)},!0))}catch(t){}},lt.Wheel=function(t){var i=this.zoom+this.zoomStep*(t?1:-1);this.zoom=vt(this.zoomMax,xt(this.zoomMin,i)),this.Zoom(this.zoom)},lt.BeginDrag=function(t){this.down=L(t,this.canvas),t.cancelBubble=!0,t.returnValue=!1,t.preventDefault&&t.preventDefault()},lt.Drag=function(t,i){if(this.dragControl&&this.down){var e=this.dragThreshold*this.dragThreshold,s=i.x-this.down.x,h=i.y-this.down.y;(this.dragging||s*s+h*h>e)&&(this.dx=s,this.dy=h,this.dragging=1,this.down=i)}return this.dragging},lt.EndDrag=function(){var t=this.dragging;return this.dragging=this.down=null,t},lt.BeginPinch=function(t){this.pinched=[st(t),this.zoom],t.preventDefault&&t.preventDefault()},lt.Pinch=function(t){var i,e,s=this.pinched;s&&(e=st(t),i=s[1]*e/s[0],this.zoom=vt(this.zoomMax,xt(this.zoomMin,i)),this.Zoom(this.zoom))},lt.EndPinch=function(t){this.pinched=null},lt.Pause=function(){this.paused=!0},lt.Resume=function(){this.paused=!1},lt.SetSpeed=function(t){this.initial=t,this.yaw=t[0]*this.maxSpeed,this.pitch=t[1]*this.maxSpeed},lt.FindTag=function(e){if(!t(e))return null;if(t(e.index)&&(e=e.index),!i(e))return this.taglist[e];var s,h,n;for(t(e.id)?(s="id",h=e.id):t(e.text)&&(s="innerText",h=e.text),n=0;n<this.taglist.length;++n)if(this.taglist[n].a[s]==h)return this.taglist[n]},lt.RotateTag=function(t,i,e,s,n,a){var l=t.Calc(this.transform,1),u=new o(l.x,l.y,l.z),g=r(e,i),c=u.angle(g),f=u.cross(g).unit();0==c?(this.fixedCallbackTag=t,this.fixedCallback=n):this.fixedAnim={angle:-c,axis:f,t:s,t0:h(),cb:n,tag:t,active:a}},lt.TagToFront=function(t,i,e,s){this.RotateTag(t,0,0,i,e,s)},et.Start=function(t,i,e){et.Delete(t),et.tc[t]=new et(t,i,e)},et.Linear=function(t,i){return i/t},et.Smooth=function(t,i){return.5-wt(i*Math.PI/t)/2},et.Pause=function(t){ht("Pause",t)},et.Resume=function(t){ht("Resume",t)},et.Reload=function(t){ht("Load",t)},et.Update=function(t){ht("Update",t)},et.SetSpeed=function(t,e){return!(!i(e)||!et.tc[t]||isNaN(e[0])||isNaN(e[1])||(et.tc[t].SetSpeed(e),0))},et.TagToFront=function(t,e){return!!i(e)&&(e.lat=e.lng=0,et.RotateTag(t,e))},et.RotateTag=function(t,e){if(i(e)&&et.tc[t]){isNaN(e.time)&&(e.time=500);var s=et.tc[t].FindTag(e);if(s)return et.tc[t].RotateTag(s,e.lat,e.lng,e.time,e.callback,e.active),!0}return!1},et.Delete=function(t){var i,e;if(At[t]&&(e=Dt.getElementById(t)))for(i=0;i<At[t].length;++i)E(At[t][i][0],At[t][i][1],e);delete At[t],delete et.tc[t]},et.NextFrameRAF=function(){requestAnimationFrame(J)},et.NextFrameTimeout=function(t){setTimeout(j,t)},et.tc={},et.options={z1:2e4,z2:2e4,z0:2e-4,freezeActive:!1,freezeDecel:!1,activeCursor:"pointer",pulsateTo:1,pulsateTime:3,reverse:!1,depth:.5,maxSpeed:.05,minSpeed:0,decel:.95,interval:20,minBrightness:.1,maxBrightness:1,outlineColour:"#ffff99",outlineThickness:2,outlineOffset:5,outlineMethod:"outline",outlineRadius:0,textColour:"#ff99ff",textHeight:15,textFont:"Helvetica, Arial, sans-serif",shadow:"#000",shadowBlur:0,shadowOffset:[0,0],initial:null,hideTags:!0,zoom:1,weight:!1,weightMode:"size",weightFrom:null,weightSize:1,weightSizeMin:null,weightSizeMax:null,weightGradient:{0:"#f00",.33:"#ff0",.66:"#0f0",1:"#00f"},txtOpt:!0,txtScale:2,frontSelect:!1,wheelZoom:!0,zoomMin:.3,zoomMax:3,zoomStep:.05,shape:"sphere",lock:null,tooltip:null,tooltipDelay:300,tooltipClass:"tctooltip",radiusX:1,radiusY:1,radiusZ:1,stretchX:1,stretchY:1,offsetX:0,offsetY:0,shuffleTags:!1,noSelect:!1,noMouse:!1,imageScale:1,paused:!1,dragControl:!1,dragThreshold:4,centreFunc:s,splitWidth:0,animTiming:"Smooth",clickToFront:!1,fadeIn:0,padding:0,bgColour:null,bgRadius:0,bgOutline:null,bgOutlineThickness:0,outlineIncrease:4,textAlign:"centre",textVAlign:"middle",imageMode:null,imagePosition:null,imagePadding:2,imageAlign:"centre",imageVAlign:"middle",noTagsMessage:!0,centreImage:null,pinchZoom:!1,repeatTags:0,minTags:0,imageRadius:0,scrollPause:!1,outlineDash:0,outlineDashSpace:0,outlineDashSpeed:1};for(nt in et.options)et[nt]=et.options[nt];window.TagCanvas=et,P("load",function(){et.loaded=1},window)}();