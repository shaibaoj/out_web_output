import{h as o,u as p,a as _,c as i,aC as u}from"./index.729dcb01.js";const h=o({__name:"redirect",setup(l){const{currentRoute:s,replace:a}=u(),{params:e,query:c}=p(s),{path:r,_redirect_type:n="path"}=e;Reflect.deleteProperty(e,"_redirect_type"),Reflect.deleteProperty(e,"path");const t=Array.isArray(r)?r.join("/"):r;return a(n==="name"?{name:t,query:c,params:e}:{path:t.startsWith("/")?t:"/"+t,query:c}),(m,d)=>(_(),i("div"))}});export{h as default};