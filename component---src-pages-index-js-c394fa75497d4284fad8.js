(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8ypT":function(t,e,r){},RXBc:function(t,e,r){"use strict";r.r(e);var n=r("dI71"),o=r("q1tI"),i=r("rePB"),a=r("KQm4");function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}r("8ypT");var p=r("HaPG");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){Object(i.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h=function(t){function e(e){var r;return r=t.call(this,e)||this,console.log("CALLED HERE"),r}Object(n.a)(e,t);var r=e.prototype;return r.plot=function(){var t=this,e=this.props.height/2/this.props.yFin;return Array(this.props.n+2).fill(1).map((function(r,n){var o=t.props.xStart+t.props.dx*n;return t.props.xStart+t.props.pixelStep*n+" "+(t.props.y0-e*function(e){return parseFloat(p.run("float(subst("+e+", x, "+t.props.func+"))"))}(o))})).join(" ")},r.plotRiemann=function(t){var e=this;void 0===t&&(t=!1);var r=function(t){return parseFloat(p.run("float(subst("+t+", x, "+e.props.func+"))"))};return Array(this.props.n+2).fill(1).map((function(t,n){var o=e.props.xStart+e.props.dx*n;r(o),r(o-e.props.dx),e.props.yFin;return"L "+(e.props.xStart+e.props.pixelStep*n)+" "+e.props.y0+" M "+(e.props.xStart+e.props.pixelStep*n)+" "+e.props.y0+" L "+(e.props.xStart+e.props.pixelStep*n)+" "+(e.props.y0-e.props.yStretch*r(o))+" L "+(e.props.xStart+e.props.pixelStep*(n+1))+" "+(e.props.y0-e.props.yStretch*r(o))})).join(" ")},r.plotTrapezoidal=function(){var t=this,e=function(e){return parseFloat(p.run("float(subst("+e+", x, "+t.props.func+"))"))};return Array(this.props.n+2).fill(1).map((function(r,n){var o=t.props.xStart+t.props.dx*n;return"L "+(t.props.xStart+t.props.pixelStep*n)+" "+(t.props.y0-t.props.yStretch*e(o))+" L "+(t.props.xStart+t.props.pixelStep*n)+" "+t.props.y0+" L "+(t.props.xStart+t.props.pixelStep*n)+" "+(t.props.y0-t.props.yStretch*e(o))})).join(" ")+"L "+(this.props.xStart+(this.props.n+3)*this.props.pixelStep)+" "+this.props.y0},r.render=function(){var t=this;console.log("PATH",this.plotTrapezoidal());var e=function(e){return parseFloat(p.run("float(subst("+e+", x, "+t.props.func+"))"))};return o.createElement(o.Fragment,null,o.createElement("path",{d:"M 0 "+(this.props.y0-this.props.yStretch*e(this.props.xStart))+" L "+this.plot(),fill:"transparent",stroke:"#0055CC",strokeWidth:"3px",pathLength:this.props.width,style:{strokeDasharray:this.props.width,strokeDashoffset:this.props.width,animation:"dash 3s linear forwards"}}),this.props.showRiemann?o.createElement("path",{opacity:.5,d:"M 0 "+(this.props.y0-e(this.props.xStart))+" "+this.plotRiemann(),fill:"transparent",stroke:"grey",strokeWidth:"3px",pathLength:this.props.width,style:{strokeDasharray:this.props.width,strokeDashoffset:this.props.width,animation:"dash "+3*this.props.n+"s linear forwards, colorchange1 1s 3s linear forwards"}}):o.createElement(o.Fragment,null),this.props.showTrapezoidal?o.createElement("path",{opacity:.5,d:"M 0 "+(this.props.y0-e(this.props.xStart))+" "+this.plotTrapezoidal()+" M 0 "+(this.props.y0-e(this.props.xStart)),fill:"transparent",stroke:"#B2D948",strokeWidth:"3px",pathLength:this.props.width,style:{strokeDasharray:this.props.width,strokeDashoffset:this.props.width,animation:"dash 3s linear forwards, colorchange2 1s 3s linear forwards"}}):o.createElement(o.Fragment,null))},e}(o.Component),c=function(t){function e(e){var r;r=t.call(this,e)||this,console.log("GOT PROPS",e);var n=r.props.width?r.props.width:window.innerWidth,o=r.props.height?r.props.height:window.innerHeight,i=r.props.xStart||0==r.props.xStart?r.props.xStart:-20,a=r.props.xFin||0==r.props.xFin?r.props.xFin:20,p=r.props.yStart||0==r.props.yStart?r.props.yStart:-100,u=r.props.yFin||0==r.props.yFin?r.props.yFin:10;return r.changeN=r.changeN.bind(s(r)),r.changeDim=r.changeDim.bind(s(r)),r.state={width:n,height:o,x0:n/2,y0:o/2,xStart:i,yStart:p,xFin:a,yFin:u,funcs:r.props.funcs,curFunc:"sin(x)"},r}Object(n.a)(e,t);var r=e.prototype;return r.addFunc=function(t,e,r){void 0===t&&(t=20),void 0===e&&(e=!1),void 0===r&&(r=!1),console.log("REACHED HERE");var n={n:t,showRiemann:e,showTrapezoidal:r,func:this.state.curFunc},o=this.state.funcs.concat(n);this.setState({funcs:o})},r.showTrapezoidal=function(t){this.setState((function(e){var r=e.funcs;return{funcs:[].concat(Object(a.a)(r.slice(0,t)),[l(l({},r[t]),{},{showTrapezoidal:!r[t].showTrapezoidal})],Object(a.a)(r.slice(t+1)))}}))},r.showRiemann=function(t){this.setState((function(e){var r=e.funcs;return{funcs:[].concat(Object(a.a)(r.slice(0,t)),[l(l({},r[t]),{},{showRiemann:!r[t].showRiemann})],Object(a.a)(r.slice(t+1)))}}))},r.changeN=function(t){console.log("EVENT RECEIVED",t.target.getAttribute("forFunc"),t.target.value);var e=parseInt(t.target.getAttribute("forFunc")),r=parseInt(t.target.value);this.setState((function(t){var n=t.funcs;return{funcs:[].concat(Object(a.a)(n.slice(0,e)),[l(l({},n[e]),{},{n:r})],Object(a.a)(n.slice(e+1)))}}))},r.changeDim=function(t){var e;console.log("EVENT RECEIVED",t.target.getAttribute("stateParam"),t.target.value);var r=t.target.getAttribute("stateParam"),n="curFunc"==r?t.target.value:parseFloat(t.target.value),o=(("xFin"==r?parseFloat(n):this.state.xFin)-("xFin"==r?parseFloat(n):this.state.xFin))/this.state.n;this.setState(((e={})[r]=n,e.dx=o,e))},r.render=function(){var t=this;console.log("FUNCS",this.state.funcs);var e=this.state.funcs.map((function(e,r){return o.createElement(o.Fragment,null,o.createElement("hr",null),o.createElement("h3",null,"Function ",r+1," = ",e.func),o.createElement("a",{className:"btn",onClick:function(){return t.showRiemann(r)}},e.showRiemann?"Remove":"Add"," Riemann"),o.createElement("a",{className:"btn",onClick:function(){return t.showTrapezoidal(r)}},e.showTrapezoidal?"Remove":"Add"," Trapezoidal"),o.createElement("p",{class:"range-field"},o.createElement("h3",null,"Set n:"),o.createElement("input",{type:"range",forFunc:r,min:"0",max:"50",defaultValue:e.n,onChange:t.changeN})),o.createElement("br",null),o.createElement("br",null))}));return o.createElement("div",{style:{height:this.state.height,width:this.state.width},className:"center-align"},o.createElement("svg",{width:this.state.width,height:"100%"},this.state.funcs.map((function(e){console.log("X",e),console.log("DIMS",t.state.xStart,t.state.xFin,t.state.yFin,t.state.dx);var r=(t.state.xFin-t.state.xStart)/e.n,n=t.state.width/e.n,i=t.state.height/2/t.state.yFin;return o.createElement(h,{width:t.state.width,height:t.state.height,xStart:t.state.xStart,yStart:t.state.yStart,xFin:t.state.xFin,yFin:t.state.yFin,x0:t.state.x0,y0:t.state.y0,yStretch:i,n:e.n,showRiemann:e.showRiemann,showTrapezoidal:e.showTrapezoidal,func:e.func,dx:r,pixelStep:n})})),o.createElement("line",{x1:0,y1:this.state.y0,x2:this.state.width,y2:this.state.y0,stroke:"#2A707A"})),o.createElement("div",{class:"row"},o.createElement("div",{className:"input-field col s4"},o.createElement("input",{stateParam:"xStart",type:"number",onChange:this.changeDim,defaultValue:this.state.xStart}),o.createElement("p",null,"x Min")),o.createElement("div",{className:"input-field col s4"},o.createElement("input",{stateParam:"xFin",type:"number",onChange:this.changeDim,defaultValue:this.state.xFin}),o.createElement("p",null,"x Max")),o.createElement("div",{className:"input-field col s4"},o.createElement("input",{stateParam:"yFin",type:"number",onChange:this.changeDim,defaultValue:this.state.yFin}),o.createElement("p",null,"y Max"))),o.createElement("div",{class:"row"},o.createElement("div",{className:"input-field col s8"},o.createElement("input",{stateParam:"curFunc",onChange:this.changeDim,placeholder:"e^x or sin(x) or cos(x) or x^2"}),o.createElement("p",null,"f(x) = ")),o.createElement("div",{className:"input-field col s4"},o.createElement("a",{class:"btn",onClick:function(){return t.addFunc()}},"Add Function"))),e)},e}(o.Component),f=function(t){function e(e){var r;return(r=t.call(this,e)||this).state={funcs:[],graphXStart:-10,graphXFin:10,graphYStart:-10,graphYFin:10},r._child=o.createRef(),r}Object(n.a)(e,t);var r=e.prototype;return r.componentDidMount=function(){},r.addFunc=function(t,e,r,n){void 0===e&&(e=25),void 0===r&&(r=!1),void 0===n&&(n=!1);var o=(this._child.current.state.xFin-this._child.current.state.xStart)/e,i=this._child.current.state.width/e,a={yStretch:this._child.current.state.height/2/this._child.current.state.yFin,n:e,showRiemann:r,showTrapezoidal:n,func:"x^2",dx:o,pixelStep:i},s=this._child.current.state.funcs.concat(a);this._child.current.setState({funcs:s,xStart:0})},r.render=function(){if("undefined"==typeof window)return o.createElement(o.Fragment,null);var t=window.innerHeight/4,e=window.innerWidth/4;console.log("INDEX FUNCS",this.state.funcs);var r=o.createElement(c,{ref:this._child,funcs:this.state.funcs.map((function(t){return t})),height:t,width:e,xStart:this.state.graphXStart,xFin:this.state.graphXFin,yFin:this.state.graphYFin});return o.createElement("main",{style:{height:"100vh",width:"100%"},className:"valign-wrapper center-align"},o.createElement("div",{className:"container center-align"},r))},e}(o.Component);e.default=f},YuTi:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},dAlA:function(t,e,r){(function(t){var n,o=function(t){"use strict";var e=1e7,r=9007199254740992,n=h(r),i="function"==typeof BigInt;function a(t,e,r,n){return void 0===t?a[0]:void 0!==e&&(10!=+e||r)?z(t,e,r,n):V(t)}function s(t,e){this.value=t,this.sign=e,this.isSmall=!1}function p(t){this.value=t,this.sign=t<0,this.isSmall=!0}function u(t){this.value=t}function l(t){return-r<t&&t<r}function h(t){return t<1e7?[t]:t<1e14?[t%1e7,Math.floor(t/1e7)]:[t%1e7,Math.floor(t/1e7)%1e7,Math.floor(t/1e14)]}function c(t){f(t);var r=t.length;if(r<4&&q(t,n)<0)switch(r){case 0:return 0;case 1:return t[0];case 2:return t[0]+t[1]*e;default:return t[0]+(t[1]+t[2]*e)*e}return t}function f(t){for(var e=t.length;0===t[--e];);t.length=e+1}function v(t){for(var e=new Array(t),r=-1;++r<t;)e[r]=0;return e}function y(t){return t>0?Math.floor(t):Math.ceil(t)}function g(t,r){var n,o,i=t.length,a=r.length,s=new Array(i),p=0,u=e;for(o=0;o<a;o++)p=(n=t[o]+r[o]+p)>=u?1:0,s[o]=n-p*u;for(;o<i;)p=(n=t[o]+p)===u?1:0,s[o++]=n-p*u;return p>0&&s.push(p),s}function d(t,e){return t.length>=e.length?g(t,e):g(e,t)}function m(t,r){var n,o,i=t.length,a=new Array(i),s=e;for(o=0;o<i;o++)n=t[o]-s+r,r=Math.floor(n/s),a[o]=n-r*s,r+=1;for(;r>0;)a[o++]=r%s,r=Math.floor(r/s);return a}function w(t,e){var r,n,o=t.length,i=e.length,a=new Array(o),s=0;for(r=0;r<i;r++)(n=t[r]-s-e[r])<0?(n+=1e7,s=1):s=0,a[r]=n;for(r=i;r<o;r++){if(!((n=t[r]-s)<0)){a[r++]=n;break}n+=1e7,a[r]=n}for(;r<o;r++)a[r]=t[r];return f(a),a}function b(t,e,r){var n,o,i=t.length,a=new Array(i),u=-e;for(n=0;n<i;n++)o=t[n]+u,u=Math.floor(o/1e7),o%=1e7,a[n]=o<0?o+1e7:o;return"number"==typeof(a=c(a))?(r&&(a=-a),new p(a)):new s(a,r)}function S(t,e){var r,n,o,i,a=t.length,s=e.length,p=v(a+s);for(o=0;o<a;++o){i=t[o];for(var u=0;u<s;++u)r=i*e[u]+p[o+u],n=Math.floor(r/1e7),p[o+u]=r-1e7*n,p[o+u+1]+=n}return f(p),p}function x(t,r){var n,o,i=t.length,a=new Array(i),s=e,p=0;for(o=0;o<i;o++)n=t[o]*r+p,p=Math.floor(n/s),a[o]=n-p*s;for(;p>0;)a[o++]=p%s,p=Math.floor(p/s);return a}function E(t,e){for(var r=[];e-- >0;)r.push(0);return r.concat(t)}function F(t,r,n){return new s(t<e?x(r,t):S(r,h(t)),n)}function N(t){var e,r,n,o,i=t.length,a=v(i+i);for(n=0;n<i;n++){r=0-(o=t[n])*o;for(var s=n;s<i;s++)e=o*t[s]*2+a[n+s]+r,r=Math.floor(e/1e7),a[n+s]=e-1e7*r;a[n+i]=r}return f(a),a}function O(t,e){var r,n,o,i,a=t.length,s=v(a);for(o=0,r=a-1;r>=0;--r)o=(i=1e7*o+t[r])-(n=y(i/e))*e,s[r]=0|n;return[s,0|o]}function M(t,r){var n,o=V(r);if(i)return[new u(t.value/o.value),new u(t.value%o.value)];var l,g=t.value,d=o.value;if(0===d)throw new Error("Cannot divide by zero");if(t.isSmall)return o.isSmall?[new p(y(g/d)),new p(g%d)]:[a[0],t];if(o.isSmall){if(1===d)return[t,a[0]];if(-1==d)return[t.negate(),a[0]];var m=Math.abs(d);if(m<e){l=c((n=O(g,m))[0]);var b=n[1];return t.sign&&(b=-b),"number"==typeof l?(t.sign!==o.sign&&(l=-l),[new p(l),new p(b)]):[new s(l,t.sign!==o.sign),new p(b)]}d=h(m)}var S=q(g,d);if(-1===S)return[a[0],t];if(0===S)return[a[t.sign===o.sign?1:-1],a[0]];l=(n=g.length+d.length<=200?function(t,r){var n,o,i,a,s,p,u,l=t.length,h=r.length,f=e,y=v(r.length),g=r[h-1],d=Math.ceil(f/(2*g)),m=x(t,d),w=x(r,d);for(m.length<=l&&m.push(0),w.push(0),g=w[h-1],o=l-h;o>=0;o--){for(n=f-1,m[o+h]!==g&&(n=Math.floor((m[o+h]*f+m[o+h-1])/g)),i=0,a=0,p=w.length,s=0;s<p;s++)i+=n*w[s],u=Math.floor(i/f),a+=m[o+s]-(i-u*f),i=u,a<0?(m[o+s]=a+f,a=-1):(m[o+s]=a,a=0);for(;0!==a;){for(n-=1,i=0,s=0;s<p;s++)(i+=m[o+s]-f+w[s])<0?(m[o+s]=i+f,i=0):(m[o+s]=i,i=1);a+=i}y[o]=n}return m=O(m,d)[0],[c(y),c(m)]}(g,d):function(t,e){for(var r,n,o,i,a,s=t.length,p=e.length,u=[],l=[];s;)if(l.unshift(t[--s]),f(l),q(l,e)<0)u.push(0);else{o=1e7*l[(n=l.length)-1]+l[n-2],i=1e7*e[p-1]+e[p-2],n>p&&(o=1e7*(o+1)),r=Math.ceil(o/i);do{if(q(a=x(e,r),l)<=0)break;r--}while(r);u.push(r),l=w(l,a)}return u.reverse(),[c(u),c(l)]}(g,d))[0];var E=t.sign!==o.sign,F=n[1],N=t.sign;return"number"==typeof l?(E&&(l=-l),l=new p(l)):l=new s(l,E),"number"==typeof F?(N&&(F=-F),F=new p(F)):F=new s(F,N),[l,F]}function q(t,e){if(t.length!==e.length)return t.length>e.length?1:-1;for(var r=t.length-1;r>=0;r--)if(t[r]!==e[r])return t[r]>e[r]?1:-1;return 0}function P(t){var e=t.abs();return!e.isUnit()&&(!!(e.equals(2)||e.equals(3)||e.equals(5))||!(e.isEven()||e.isDivisibleBy(3)||e.isDivisibleBy(5))&&(!!e.lesser(49)||void 0))}function A(t,e){for(var r,n,i,a=t.prev(),s=a,p=0;s.isEven();)s=s.divide(2),p++;t:for(n=0;n<e.length;n++)if(!t.lesser(e[n])&&!(i=o(e[n]).modPow(s,t)).isUnit()&&!i.equals(a)){for(r=p-1;0!=r;r--){if((i=i.square().mod(t)).isUnit())return!1;if(i.equals(a))continue t}return!1}return!0}s.prototype=Object.create(a.prototype),p.prototype=Object.create(a.prototype),u.prototype=Object.create(a.prototype),s.prototype.add=function(t){var e=V(t);if(this.sign!==e.sign)return this.subtract(e.negate());var r=this.value,n=e.value;return e.isSmall?new s(m(r,Math.abs(n)),this.sign):new s(d(r,n),this.sign)},s.prototype.plus=s.prototype.add,p.prototype.add=function(t){var e=V(t),r=this.value;if(r<0!==e.sign)return this.subtract(e.negate());var n=e.value;if(e.isSmall){if(l(r+n))return new p(r+n);n=h(Math.abs(n))}return new s(m(n,Math.abs(r)),r<0)},p.prototype.plus=p.prototype.add,u.prototype.add=function(t){return new u(this.value+V(t).value)},u.prototype.plus=u.prototype.add,s.prototype.subtract=function(t){var e=V(t);if(this.sign!==e.sign)return this.add(e.negate());var r=this.value,n=e.value;return e.isSmall?b(r,Math.abs(n),this.sign):function(t,e,r){var n;return q(t,e)>=0?n=w(t,e):(n=w(e,t),r=!r),"number"==typeof(n=c(n))?(r&&(n=-n),new p(n)):new s(n,r)}(r,n,this.sign)},s.prototype.minus=s.prototype.subtract,p.prototype.subtract=function(t){var e=V(t),r=this.value;if(r<0!==e.sign)return this.add(e.negate());var n=e.value;return e.isSmall?new p(r-n):b(n,Math.abs(r),r>=0)},p.prototype.minus=p.prototype.subtract,u.prototype.subtract=function(t){return new u(this.value-V(t).value)},u.prototype.minus=u.prototype.subtract,s.prototype.negate=function(){return new s(this.value,!this.sign)},p.prototype.negate=function(){var t=this.sign,e=new p(-this.value);return e.sign=!t,e},u.prototype.negate=function(){return new u(-this.value)},s.prototype.abs=function(){return new s(this.value,!1)},p.prototype.abs=function(){return new p(Math.abs(this.value))},u.prototype.abs=function(){return new u(this.value>=0?this.value:-this.value)},s.prototype.multiply=function(t){var r,n,o,i=V(t),p=this.value,u=i.value,l=this.sign!==i.sign;if(i.isSmall){if(0===u)return a[0];if(1===u)return this;if(-1===u)return this.negate();if((r=Math.abs(u))<e)return new s(x(p,r),l);u=h(r)}return n=p.length,o=u.length,new s(-.012*n-.012*o+15e-6*n*o>0?function t(e,r){var n=Math.max(e.length,r.length);if(n<=30)return S(e,r);n=Math.ceil(n/2);var o=e.slice(n),i=e.slice(0,n),a=r.slice(n),s=r.slice(0,n),p=t(i,s),u=t(o,a),l=t(d(i,o),d(s,a)),h=d(d(p,E(w(w(l,p),u),n)),E(u,2*n));return f(h),h}(p,u):S(p,u),l)},s.prototype.times=s.prototype.multiply,p.prototype._multiplyBySmall=function(t){return l(t.value*this.value)?new p(t.value*this.value):F(Math.abs(t.value),h(Math.abs(this.value)),this.sign!==t.sign)},s.prototype._multiplyBySmall=function(t){return 0===t.value?a[0]:1===t.value?this:-1===t.value?this.negate():F(Math.abs(t.value),this.value,this.sign!==t.sign)},p.prototype.multiply=function(t){return V(t)._multiplyBySmall(this)},p.prototype.times=p.prototype.multiply,u.prototype.multiply=function(t){return new u(this.value*V(t).value)},u.prototype.times=u.prototype.multiply,s.prototype.square=function(){return new s(N(this.value),!1)},p.prototype.square=function(){var t=this.value*this.value;return l(t)?new p(t):new s(N(h(Math.abs(this.value))),!1)},u.prototype.square=function(t){return new u(this.value*this.value)},s.prototype.divmod=function(t){var e=M(this,t);return{quotient:e[0],remainder:e[1]}},u.prototype.divmod=p.prototype.divmod=s.prototype.divmod,s.prototype.divide=function(t){return M(this,t)[0]},u.prototype.over=u.prototype.divide=function(t){return new u(this.value/V(t).value)},p.prototype.over=p.prototype.divide=s.prototype.over=s.prototype.divide,s.prototype.mod=function(t){return M(this,t)[1]},u.prototype.mod=u.prototype.remainder=function(t){return new u(this.value%V(t).value)},p.prototype.remainder=p.prototype.mod=s.prototype.remainder=s.prototype.mod,s.prototype.pow=function(t){var e,r,n,o=V(t),i=this.value,s=o.value;if(0===s)return a[1];if(0===i)return a[0];if(1===i)return a[1];if(-1===i)return o.isEven()?a[1]:a[-1];if(o.sign)return a[0];if(!o.isSmall)throw new Error("The exponent "+o.toString()+" is too large.");if(this.isSmall&&l(e=Math.pow(i,s)))return new p(y(e));for(r=this,n=a[1];!0&s&&(n=n.times(r),--s),0!==s;)s/=2,r=r.square();return n},p.prototype.pow=s.prototype.pow,u.prototype.pow=function(t){var e=V(t),r=this.value,n=e.value,o=BigInt(0),i=BigInt(1),s=BigInt(2);if(n===o)return a[1];if(r===o)return a[0];if(r===i)return a[1];if(r===BigInt(-1))return e.isEven()?a[1]:a[-1];if(e.isNegative())return new u(o);for(var p=this,l=a[1];(n&i)===i&&(l=l.times(p),--n),n!==o;)n/=s,p=p.square();return l},s.prototype.modPow=function(t,e){if(t=V(t),(e=V(e)).isZero())throw new Error("Cannot take modPow with modulus 0");var r=a[1],n=this.mod(e);for(t.isNegative()&&(t=t.multiply(a[-1]),n=n.modInv(e));t.isPositive();){if(n.isZero())return a[0];t.isOdd()&&(r=r.multiply(n).mod(e)),t=t.divide(2),n=n.square().mod(e)}return r},u.prototype.modPow=p.prototype.modPow=s.prototype.modPow,s.prototype.compareAbs=function(t){var e=V(t),r=this.value,n=e.value;return e.isSmall?1:q(r,n)},p.prototype.compareAbs=function(t){var e=V(t),r=Math.abs(this.value),n=e.value;return e.isSmall?r===(n=Math.abs(n))?0:r>n?1:-1:-1},u.prototype.compareAbs=function(t){var e=this.value,r=V(t).value;return(e=e>=0?e:-e)===(r=r>=0?r:-r)?0:e>r?1:-1},s.prototype.compare=function(t){if(t===1/0)return-1;if(t===-1/0)return 1;var e=V(t),r=this.value,n=e.value;return this.sign!==e.sign?e.sign?1:-1:e.isSmall?this.sign?-1:1:q(r,n)*(this.sign?-1:1)},s.prototype.compareTo=s.prototype.compare,p.prototype.compare=function(t){if(t===1/0)return-1;if(t===-1/0)return 1;var e=V(t),r=this.value,n=e.value;return e.isSmall?r==n?0:r>n?1:-1:r<0!==e.sign?r<0?-1:1:r<0?1:-1},p.prototype.compareTo=p.prototype.compare,u.prototype.compare=function(t){if(t===1/0)return-1;if(t===-1/0)return 1;var e=this.value,r=V(t).value;return e===r?0:e>r?1:-1},u.prototype.compareTo=u.prototype.compare,s.prototype.equals=function(t){return 0===this.compare(t)},u.prototype.eq=u.prototype.equals=p.prototype.eq=p.prototype.equals=s.prototype.eq=s.prototype.equals,s.prototype.notEquals=function(t){return 0!==this.compare(t)},u.prototype.neq=u.prototype.notEquals=p.prototype.neq=p.prototype.notEquals=s.prototype.neq=s.prototype.notEquals,s.prototype.greater=function(t){return this.compare(t)>0},u.prototype.gt=u.prototype.greater=p.prototype.gt=p.prototype.greater=s.prototype.gt=s.prototype.greater,s.prototype.lesser=function(t){return this.compare(t)<0},u.prototype.lt=u.prototype.lesser=p.prototype.lt=p.prototype.lesser=s.prototype.lt=s.prototype.lesser,s.prototype.greaterOrEquals=function(t){return this.compare(t)>=0},u.prototype.geq=u.prototype.greaterOrEquals=p.prototype.geq=p.prototype.greaterOrEquals=s.prototype.geq=s.prototype.greaterOrEquals,s.prototype.lesserOrEquals=function(t){return this.compare(t)<=0},u.prototype.leq=u.prototype.lesserOrEquals=p.prototype.leq=p.prototype.lesserOrEquals=s.prototype.leq=s.prototype.lesserOrEquals,s.prototype.isEven=function(){return 0==(1&this.value[0])},p.prototype.isEven=function(){return 0==(1&this.value)},u.prototype.isEven=function(){return(this.value&BigInt(1))===BigInt(0)},s.prototype.isOdd=function(){return 1==(1&this.value[0])},p.prototype.isOdd=function(){return 1==(1&this.value)},u.prototype.isOdd=function(){return(this.value&BigInt(1))===BigInt(1)},s.prototype.isPositive=function(){return!this.sign},p.prototype.isPositive=function(){return this.value>0},u.prototype.isPositive=p.prototype.isPositive,s.prototype.isNegative=function(){return this.sign},p.prototype.isNegative=function(){return this.value<0},u.prototype.isNegative=p.prototype.isNegative,s.prototype.isUnit=function(){return!1},p.prototype.isUnit=function(){return 1===Math.abs(this.value)},u.prototype.isUnit=function(){return this.abs().value===BigInt(1)},s.prototype.isZero=function(){return!1},p.prototype.isZero=function(){return 0===this.value},u.prototype.isZero=function(){return this.value===BigInt(0)},s.prototype.isDivisibleBy=function(t){var e=V(t);return!e.isZero()&&(!!e.isUnit()||(0===e.compareAbs(2)?this.isEven():this.mod(e).isZero()))},u.prototype.isDivisibleBy=p.prototype.isDivisibleBy=s.prototype.isDivisibleBy,s.prototype.isPrime=function(t){var e=P(this);if(void 0!==e)return e;var r=this.abs(),n=r.bitLength();if(n<=64)return A(r,[2,3,5,7,11,13,17,19,23,29,31,37]);for(var i=Math.log(2)*n.toJSNumber(),a=Math.ceil(!0===t?2*Math.pow(i,2):i),s=[],p=0;p<a;p++)s.push(o(p+2));return A(r,s)},u.prototype.isPrime=p.prototype.isPrime=s.prototype.isPrime,s.prototype.isProbablePrime=function(t,e){var r=P(this);if(void 0!==r)return r;for(var n=this.abs(),i=void 0===t?5:t,a=[],s=0;s<i;s++)a.push(o.randBetween(2,n.minus(2),e));return A(n,a)},u.prototype.isProbablePrime=p.prototype.isProbablePrime=s.prototype.isProbablePrime,s.prototype.modInv=function(t){for(var e,r,n,i=o.zero,a=o.one,s=V(t),p=this.abs();!p.isZero();)e=s.divide(p),r=i,n=s,i=a,s=p,a=r.subtract(e.multiply(a)),p=n.subtract(e.multiply(p));if(!s.isUnit())throw new Error(this.toString()+" and "+t.toString()+" are not co-prime");return-1===i.compare(0)&&(i=i.add(t)),this.isNegative()?i.negate():i},u.prototype.modInv=p.prototype.modInv=s.prototype.modInv,s.prototype.next=function(){var t=this.value;return this.sign?b(t,1,this.sign):new s(m(t,1),this.sign)},p.prototype.next=function(){var t=this.value;return t+1<r?new p(t+1):new s(n,!1)},u.prototype.next=function(){return new u(this.value+BigInt(1))},s.prototype.prev=function(){var t=this.value;return this.sign?new s(m(t,1),!0):b(t,1,this.sign)},p.prototype.prev=function(){var t=this.value;return t-1>-r?new p(t-1):new s(n,!0)},u.prototype.prev=function(){return new u(this.value-BigInt(1))};for(var I=[1];2*I[I.length-1]<=e;)I.push(2*I[I.length-1]);var j=I.length,B=I[j-1];function D(t){return Math.abs(t)<=e}function T(t,e,r){e=V(e);for(var n=t.isNegative(),i=e.isNegative(),a=n?t.not():t,s=i?e.not():e,p=0,u=0,l=null,h=null,c=[];!a.isZero()||!s.isZero();)p=(l=M(a,B))[1].toJSNumber(),n&&(p=B-1-p),u=(h=M(s,B))[1].toJSNumber(),i&&(u=B-1-u),a=l[0],s=h[0],c.push(r(p,u));for(var f=0!==r(n?1:0,i?1:0)?o(-1):o(0),v=c.length-1;v>=0;v-=1)f=f.multiply(B).add(o(c[v]));return f}s.prototype.shiftLeft=function(t){var e=V(t).toJSNumber();if(!D(e))throw new Error(String(e)+" is too large for shifting.");if(e<0)return this.shiftRight(-e);var r=this;if(r.isZero())return r;for(;e>=j;)r=r.multiply(B),e-=j-1;return r.multiply(I[e])},u.prototype.shiftLeft=p.prototype.shiftLeft=s.prototype.shiftLeft,s.prototype.shiftRight=function(t){var e,r=V(t).toJSNumber();if(!D(r))throw new Error(String(r)+" is too large for shifting.");if(r<0)return this.shiftLeft(-r);for(var n=this;r>=j;){if(n.isZero()||n.isNegative()&&n.isUnit())return n;n=(e=M(n,B))[1].isNegative()?e[0].prev():e[0],r-=j-1}return(e=M(n,I[r]))[1].isNegative()?e[0].prev():e[0]},u.prototype.shiftRight=p.prototype.shiftRight=s.prototype.shiftRight,s.prototype.not=function(){return this.negate().prev()},u.prototype.not=p.prototype.not=s.prototype.not,s.prototype.and=function(t){return T(this,t,(function(t,e){return t&e}))},u.prototype.and=p.prototype.and=s.prototype.and,s.prototype.or=function(t){return T(this,t,(function(t,e){return t|e}))},u.prototype.or=p.prototype.or=s.prototype.or,s.prototype.xor=function(t){return T(this,t,(function(t,e){return t^e}))},u.prototype.xor=p.prototype.xor=s.prototype.xor;function R(t){var r=t.value,n="number"==typeof r?r|1<<30:"bigint"==typeof r?r|BigInt(1<<30):r[0]+r[1]*e|1073758208;return n&-n}function k(t,e){return t=V(t),e=V(e),t.greater(e)?t:e}function C(t,e){return t=V(t),e=V(e),t.lesser(e)?t:e}function L(t,e){if(t=V(t).abs(),e=V(e).abs(),t.equals(e))return t;if(t.isZero())return e;if(e.isZero())return t;for(var r,n,o=a[1];t.isEven()&&e.isEven();)r=C(R(t),R(e)),t=t.divide(r),e=e.divide(r),o=o.multiply(r);for(;t.isEven();)t=t.divide(R(t));do{for(;e.isEven();)e=e.divide(R(e));t.greater(e)&&(n=e,e=t,t=n),e=e.subtract(t)}while(!e.isZero());return o.isUnit()?t:t.multiply(o)}s.prototype.bitLength=function(){var t=this;return t.compareTo(o(0))<0&&(t=t.negate().subtract(o(1))),0===t.compareTo(o(0))?o(0):o(function t(e,r){if(r.compareTo(e)<=0){var n=t(e,r.square(r)),i=n.p,a=n.e,s=i.multiply(r);return s.compareTo(e)<=0?{p:s,e:2*a+1}:{p:i,e:2*a}}return{p:o(1),e:0}}(t,o(2)).e).add(o(1))},u.prototype.bitLength=p.prototype.bitLength=s.prototype.bitLength;var z=function(t,e,r,n){r=r||"0123456789abcdefghijklmnopqrstuvwxyz",t=String(t),n||(t=t.toLowerCase(),r=r.toLowerCase());var o,i=t.length,a=Math.abs(e),s={};for(o=0;o<r.length;o++)s[r[o]]=o;for(o=0;o<i;o++){if("-"!==(l=t[o])&&(l in s&&s[l]>=a)){if("1"===l&&1===a)continue;throw new Error(l+" is not a valid digit in base "+e+".")}}e=V(e);var p=[],u="-"===t[0];for(o=u?1:0;o<t.length;o++){var l;if((l=t[o])in s)p.push(V(s[l]));else{if("<"!==l)throw new Error(l+" is not a valid character");var h=o;do{o++}while(">"!==t[o]&&o<t.length);p.push(V(t.slice(h+1,o)))}}return Z(p,e,u)};function Z(t,e,r){var n,o=a[0],i=a[1];for(n=t.length-1;n>=0;n--)o=o.add(t[n].times(i)),i=i.times(e);return r?o.negate():o}function J(t,e){if((e=o(e)).isZero()){if(t.isZero())return{value:[0],isNegative:!1};throw new Error("Cannot convert nonzero numbers to base 0.")}if(e.equals(-1)){if(t.isZero())return{value:[0],isNegative:!1};if(t.isNegative())return{value:[].concat.apply([],Array.apply(null,Array(-t.toJSNumber())).map(Array.prototype.valueOf,[1,0])),isNegative:!1};var r=Array.apply(null,Array(t.toJSNumber()-1)).map(Array.prototype.valueOf,[0,1]);return r.unshift([1]),{value:[].concat.apply([],r),isNegative:!1}}var n=!1;if(t.isNegative()&&e.isPositive()&&(n=!0,t=t.abs()),e.isUnit())return t.isZero()?{value:[0],isNegative:!1}:{value:Array.apply(null,Array(t.toJSNumber())).map(Number.prototype.valueOf,1),isNegative:n};for(var i,a=[],s=t;s.isNegative()||s.compareAbs(e)>=0;){i=s.divmod(e),s=i.quotient;var p=i.remainder;p.isNegative()&&(p=e.minus(p).abs(),s=s.next()),a.push(p.toJSNumber())}return a.push(s.toJSNumber()),{value:a.reverse(),isNegative:n}}function U(t,e,r){var n=J(t,e);return(n.isNegative?"-":"")+n.value.map((function(t){return function(t,e){return t<(e=e||"0123456789abcdefghijklmnopqrstuvwxyz").length?e[t]:"<"+t+">"}(t,r)})).join("")}function _(t){if(l(+t)){var e=+t;if(e===y(e))return i?new u(BigInt(e)):new p(e);throw new Error("Invalid integer: "+t)}var r="-"===t[0];r&&(t=t.slice(1));var n=t.split(/e/i);if(n.length>2)throw new Error("Invalid integer: "+n.join("e"));if(2===n.length){var o=n[1];if("+"===o[0]&&(o=o.slice(1)),(o=+o)!==y(o)||!l(o))throw new Error("Invalid integer: "+o+" is not a valid exponent.");var a=n[0],h=a.indexOf(".");if(h>=0&&(o-=a.length-h-1,a=a.slice(0,h)+a.slice(h+1)),o<0)throw new Error("Cannot include negative exponent part for integers");t=a+=new Array(o+1).join("0")}if(!/^([0-9][0-9]*)$/.test(t))throw new Error("Invalid integer: "+t);if(i)return new u(BigInt(r?"-"+t:t));for(var c=[],v=t.length,g=v-7;v>0;)c.push(+t.slice(g,v)),(g-=7)<0&&(g=0),v-=7;return f(c),new s(c,r)}function V(t){return"number"==typeof t?function(t){if(i)return new u(BigInt(t));if(l(t)){if(t!==y(t))throw new Error(t+" is not an integer.");return new p(t)}return _(t.toString())}(t):"string"==typeof t?_(t):"bigint"==typeof t?new u(t):t}s.prototype.toArray=function(t){return J(this,t)},p.prototype.toArray=function(t){return J(this,t)},u.prototype.toArray=function(t){return J(this,t)},s.prototype.toString=function(t,e){if(void 0===t&&(t=10),10!==t)return U(this,t,e);for(var r,n=this.value,o=n.length,i=String(n[--o]);--o>=0;)r=String(n[o]),i+="0000000".slice(r.length)+r;return(this.sign?"-":"")+i},p.prototype.toString=function(t,e){return void 0===t&&(t=10),10!=t?U(this,t,e):String(this.value)},u.prototype.toString=p.prototype.toString,u.prototype.toJSON=s.prototype.toJSON=p.prototype.toJSON=function(){return this.toString()},s.prototype.valueOf=function(){return parseInt(this.toString(),10)},s.prototype.toJSNumber=s.prototype.valueOf,p.prototype.valueOf=function(){return this.value},p.prototype.toJSNumber=p.prototype.valueOf,u.prototype.valueOf=u.prototype.toJSNumber=function(){return parseInt(this.toString(),10)};for(var H=0;H<1e3;H++)a[H]=V(H),H>0&&(a[-H]=V(-H));return a.one=a[1],a.zero=a[0],a.minusOne=a[-1],a.max=k,a.min=C,a.gcd=L,a.lcm=function(t,e){return t=V(t).abs(),e=V(e).abs(),t.divide(L(t,e)).multiply(e)},a.isInstance=function(t){return t instanceof s||t instanceof p||t instanceof u},a.randBetween=function(t,r,n){t=V(t),r=V(r);var o=n||Math.random,i=C(t,r),s=k(t,r).subtract(i).add(1);if(s.isSmall)return i.add(Math.floor(o()*s));for(var p=J(s,e).value,u=[],l=!0,h=0;h<p.length;h++){var c=l?p[h]:e,f=y(o()*c);u.push(f),f<c&&(l=!1)}return i.add(a.fromArray(u,e,!1))},a.fromArray=function(t,e,r){return Z(t.map(V),V(e||10),r)},a}();t.hasOwnProperty("exports")&&(t.exports=o),void 0===(n=function(){return o}.call(e,r,e,t))||(t.exports=n)}).call(this,r("YuTi")(t))}}]);
//# sourceMappingURL=component---src-pages-index-js-c394fa75497d4284fad8.js.map