import{_ as f}from"./BasicLayout.3378e304.js";import{C as r}from"./index.9c76e7ab.js";import{_ as i,f as d,k as m,z as k,s as o,q as n,v as p,m as c,l as V}from"./entry.afcc1a4d.js";const h={data(){return{text:"",key:"",result:""}},methods:{encode(){this.result=r.DES.encrypt(this.text,this.key).toString()},decode(){this.result=r.DES.decrypt(this.text,this.key).toString(r.enc.Utf8)}}},C=c("h1",null,"DES 加密/解密",-1),S=c("br",null,null,-1),D=c("br",null,null,-1);function E(y,e,u,w,t,a){const s=d("el-input"),_=d("el-button"),x=f;return m(),k(x,null,{title:o(()=>[C]),input:o(()=>[n(s,{type:"textarea",placeholder:"请输入字符串",modelValue:t.text,"onUpdate:modelValue":e[0]||(e[0]=l=>t.text=l),rows:"6"},null,8,["modelValue"]),S,D,n(s,{type:"textarea",placeholder:"请输入 Key",modelValue:t.key,"onUpdate:modelValue":e[1]||(e[1]=l=>t.key=l),rows:"3"},null,8,["modelValue"])]),actions:o(()=>[n(_,{type:"primary",onClick:a.encode},{default:o(()=>[p(" DES 加密 ")]),_:1},8,["onClick"]),n(_,{type:"primary",onClick:a.decode},{default:o(()=>[p(" DES 解密 ")]),_:1},8,["onClick"])]),results:o(()=>[n(s,{type:"textarea",placeholder:"加密/解密结果",modelValue:t.result,"onUpdate:modelValue":e[2]||(e[2]=l=>t.result=l),rows:"6"},null,8,["modelValue"])]),_:1})}const B=i(h,[["render",E]]),b={};function v(y,e){const u=B;return m(),V("div",null,[n(u)])}const T=i(b,[["render",v]]);export{T as default};
