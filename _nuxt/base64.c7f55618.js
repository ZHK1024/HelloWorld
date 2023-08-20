import{A as nt,B as rt,_ as D,E as q,f as M,k as V,z as H,s as w,v as j,t as ot,q as T,m as it,l as ut}from"./entry.afcc1a4d.js";import{_ as at}from"./BasicLayout.3378e304.js";import{C as N}from"./index.9c76e7ab.js";var I={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(_,x){(function(C,h){_.exports=h()})(nt,function(){return function(){var E={686:function(f,u,t){t.d(u,{default:function(){return et}});var a=t(279),c=t.n(a),l=t(370),m=t.n(l),y=t(817),g=t.n(y);function p(i){try{return document.execCommand(i)}catch{return!1}}var v=function(n){var e=g()(n);return p("cut"),e},d=v;function S(i){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(r,"px"),e.setAttribute("readonly",""),e.value=i,e}var U=function(n,e){var r=S(n);e.container.appendChild(r);var o=g()(r);return p("copy"),r.remove(),o},z=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},r="";return typeof n=="string"?r=U(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?r=U(n.value,e):(r=g()(n),p("copy")),r},P=z;function O(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?O=function(e){return typeof e}:O=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(i)}var $=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,r=e===void 0?"copy":e,o=n.container,s=n.target,b=n.text;if(r!=="copy"&&r!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(s!==void 0)if(s&&O(s)==="object"&&s.nodeType===1){if(r==="copy"&&s.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(r==="cut"&&(s.hasAttribute("readonly")||s.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(b)return P(b,{container:o});if(s)return r==="cut"?d(s):P(s,{container:o})},Y=$;function A(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?A=function(e){return typeof e}:A=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(i)}function G(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function F(i,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}function J(i,n,e){return n&&F(i.prototype,n),e&&F(i,e),i}function X(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&R(i,n)}function R(i,n){return R=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},R(i,n)}function K(i){var n=Z();return function(){var r=k(i),o;if(n){var s=k(this).constructor;o=Reflect.construct(r,arguments,s)}else o=r.apply(this,arguments);return Q(this,o)}}function Q(i,n){return n&&(A(n)==="object"||typeof n=="function")?n:W(i)}function W(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Z(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function k(i){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(i)}function B(i,n){var e="data-clipboard-".concat(i);if(n.hasAttribute(e))return n.getAttribute(e)}var tt=function(i){X(e,i);var n=K(e);function e(r,o){var s;return G(this,e),s=n.call(this),s.resolveOptions(o),s.listenClick(r),s}return J(e,[{key:"resolveOptions",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof o.action=="function"?o.action:this.defaultAction,this.target=typeof o.target=="function"?o.target:this.defaultTarget,this.text=typeof o.text=="function"?o.text:this.defaultText,this.container=A(o.container)==="object"?o.container:document.body}},{key:"listenClick",value:function(o){var s=this;this.listener=m()(o,"click",function(b){return s.onClick(b)})}},{key:"onClick",value:function(o){var s=o.delegateTarget||o.currentTarget,b=this.action(s)||"copy",L=Y({action:b,container:this.container,target:this.target(s),text:this.text(s)});this.emit(L?"success":"error",{action:b,text:L,trigger:s,clearSelection:function(){s&&s.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(o){return B("action",o)}},{key:"defaultTarget",value:function(o){var s=B("target",o);if(s)return document.querySelector(s)}},{key:"defaultText",value:function(o){return B("text",o)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return P(o,s)}},{key:"cut",value:function(o){return d(o)}},{key:"isSupported",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],s=typeof o=="string"?[o]:o,b=!!document.queryCommandSupported;return s.forEach(function(L){b=b&&!!document.queryCommandSupported(L)}),b}}]),e}(c()),et=tt},828:function(f){var u=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function a(c,l){for(;c&&c.nodeType!==u;){if(typeof c.matches=="function"&&c.matches(l))return c;c=c.parentNode}}f.exports=a},438:function(f,u,t){var a=t(828);function c(y,g,p,v,d){var S=m.apply(this,arguments);return y.addEventListener(p,S,d),{destroy:function(){y.removeEventListener(p,S,d)}}}function l(y,g,p,v,d){return typeof y.addEventListener=="function"?c.apply(null,arguments):typeof p=="function"?c.bind(null,document).apply(null,arguments):(typeof y=="string"&&(y=document.querySelectorAll(y)),Array.prototype.map.call(y,function(S){return c(S,g,p,v,d)}))}function m(y,g,p,v){return function(d){d.delegateTarget=a(d.target,g),d.delegateTarget&&v.call(y,d)}}f.exports=l},879:function(f,u){u.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},u.nodeList=function(t){var a=Object.prototype.toString.call(t);return t!==void 0&&(a==="[object NodeList]"||a==="[object HTMLCollection]")&&"length"in t&&(t.length===0||u.node(t[0]))},u.string=function(t){return typeof t=="string"||t instanceof String},u.fn=function(t){var a=Object.prototype.toString.call(t);return a==="[object Function]"}},370:function(f,u,t){var a=t(879),c=t(438);function l(p,v,d){if(!p&&!v&&!d)throw new Error("Missing required arguments");if(!a.string(v))throw new TypeError("Second argument must be a String");if(!a.fn(d))throw new TypeError("Third argument must be a Function");if(a.node(p))return m(p,v,d);if(a.nodeList(p))return y(p,v,d);if(a.string(p))return g(p,v,d);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function m(p,v,d){return p.addEventListener(v,d),{destroy:function(){p.removeEventListener(v,d)}}}function y(p,v,d){return Array.prototype.forEach.call(p,function(S){S.addEventListener(v,d)}),{destroy:function(){Array.prototype.forEach.call(p,function(S){S.removeEventListener(v,d)})}}}function g(p,v,d){return c(document.body,p,v,d)}f.exports=l},817:function(f){function u(t){var a;if(t.nodeName==="SELECT")t.focus(),a=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var c=t.hasAttribute("readonly");c||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),c||t.removeAttribute("readonly"),a=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var l=window.getSelection(),m=document.createRange();m.selectNodeContents(t),l.removeAllRanges(),l.addRange(m),a=l.toString()}return a}f.exports=u},279:function(f){function u(){}u.prototype={on:function(t,a,c){var l=this.e||(this.e={});return(l[t]||(l[t]=[])).push({fn:a,ctx:c}),this},once:function(t,a,c){var l=this;function m(){l.off(t,m),a.apply(c,arguments)}return m._=a,this.on(t,m,c)},emit:function(t){var a=[].slice.call(arguments,1),c=((this.e||(this.e={}))[t]||[]).slice(),l=0,m=c.length;for(l;l<m;l++)c[l].fn.apply(c[l].ctx,a);return this},off:function(t,a){var c=this.e||(this.e={}),l=c[t],m=[];if(l&&a)for(var y=0,g=l.length;y<g;y++)l[y].fn!==a&&l[y].fn._!==a&&m.push(l[y]);return m.length?c[t]=m:delete c[t],this}},f.exports=u,f.exports.TinyEmitter=u}},C={};function h(f){if(C[f])return C[f].exports;var u=C[f]={exports:{}};return E[f](u,u.exports,h),u.exports}return function(){h.n=function(f){var u=f&&f.__esModule?function(){return f.default}:function(){return f};return h.d(u,{a:u}),u}}(),function(){h.d=function(f,u){for(var t in u)h.o(u,t)&&!h.o(f,t)&&Object.defineProperty(f,t,{enumerable:!0,get:u[t]})}}(),function(){h.o=function(f,u){return Object.prototype.hasOwnProperty.call(f,u)}}(),h(686)}().default})})(I);var ct=I.exports;const st=rt(ct),lt={name:"CopyButton",props:{value:{type:String,default:""},unique:{type:String,required:!0},type:{type:String,default:"primary"},title:{type:String,default:"复制"},icon:{type:String,default:"DocumentCopy"}},data(){return{text:this.value}},mounted(){let _=new st("#"+this.unique,{text:()=>this.value});_.on("success",x=>{q({title:"提示",message:"复制成功",type:"success"})}),_.on("error",x=>{console.log(x),q({title:"提示",message:"复制失败",type:"error"})})}};function ft(_,x,E,C,h,f){const u=M("el-button");return V(),H(u,{id:E.unique,type:E.type,icon:E.icon},{default:w(()=>[j(ot(E.title),1)]),_:1},8,["id","type","icon"])}const pt=D(lt,[["render",ft]]),dt={data(){return{text:"",result:""}},methods:{encode(){const _=N.enc.Utf8.parse(this.text);this.result=N.enc.Base64.stringify(_)},decode(){const _=N.enc.Base64.parse(this.text);this.result=_.toString(N.enc.Utf8)}}},yt=it("h1",null,"Base64 编码/解码",-1);function vt(_,x,E,C,h,f){const u=M("el-input"),t=M("el-button"),a=pt,c=at;return V(),H(c,null,{title:w(()=>[yt]),input:w(()=>[T(u,{type:"textarea",placeholder:"请输入字符串",modelValue:h.text,"onUpdate:modelValue":x[0]||(x[0]=l=>h.text=l),rows:"6"},null,8,["modelValue"])]),actions:w(()=>[T(t,{type:"primary",onClick:f.encode},{default:w(()=>[j(" Base64 编码 ")]),_:1},8,["onClick"]),T(t,{type:"primary",onClick:f.decode},{default:w(()=>[j(" Base64 解码 ")]),_:1},8,["onClick"]),T(a,{value:h.result,unique:"aa1",title:"复制结果"},null,8,["value"])]),results:w(()=>[T(u,{type:"textarea",placeholder:"编/解码结果",modelValue:h.result,"onUpdate:modelValue":x[1]||(x[1]=l=>h.result=l),rows:"6"},null,8,["modelValue"])]),_:1})}const mt=D(dt,[["render",vt]]),ht={};function gt(_,x){const E=mt;return V(),ut("div",null,[T(E)])}const St=D(ht,[["render",gt]]);export{St as default};
