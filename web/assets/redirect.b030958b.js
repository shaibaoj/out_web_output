import{h as n,ay as p,u as _,a as i,c as u,_ as m}from"./index.814ec1c6.js";const l=n({__name:"redirect",setup(d){const{currentRoute:c,replace:s}=p(),{params:e,query:a}=_(c),{path:r,_redirect_type:o="path"}=e;Reflect.deleteProperty(e,"_redirect_type"),Reflect.deleteProperty(e,"path");const t=Array.isArray(r)?r.join("/"):r;return s(o==="name"?{name:t,query:a,params:e}:{path:t.startsWith("/")?t:"/"+t,query:a}),(f,h)=>(i(),u("div"))}}),w=m(l,[["__file","/Users/wu./Documents/os/web/www/web/src/views/common/redirect.vue"]]);export{w as default};