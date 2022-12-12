import{h as N,Z as O,j as S,C as G,o as L,k as M,t as T,as as $,v as h,at as z,l as c,b as Q,w as a,a as R,m as u,q as o,p as m,e as p,x as r,y as d,u as E,a3 as g,au as W,s as b,av as Z,_ as H}from"./index.814ec1c6.js";import{p as x}from"./pick.f88df2a3.js";const J={class:"grid grid-cols-11 pb-20 gap-x-6"},K={class:"col-span-11 intro-y 2xl:col-span-9"},P=u("div",{class:"text-right form-help"}," 0/70",-1),X={class:"p-5 border-2 border-dashed rounded-md shadow-sm border-slate-200/60 dark:border-darkmode-400"},Y={class:"relative w-32 h-32 cursor-pointer image-fit zoom-in"},uu=["src"],eu={class:"w-32 mt-1 mb-2 mr-2 btn btn-outline-success btn-sm"},tu=u("div",{class:"text-right form-help"}," 0/70",-1),ou={class:"w-32 mt-1 mb-2 mr-2 btn btn-outline-success btn-sm"},lu={class:"w-32 mt-1 mb-2 mr-2 btn btn-outline-success btn-sm"},au=u("option",{value:0},"\u5173\u95ED",-1),nu=u("option",{value:1},"\u5F00\u901A",-1),su=[au,nu],ru=u("option",{value:0},"\u4E0D\u7F13\u5B58",-1),du=u("option",{value:1},"\u7F13\u5B58",-1),iu=[ru,du],cu={class:"sticky top-0 mt-5 box"},pu={class:"p-5"},mu={class:"flex items-center font-medium text-primary",href:""},Eu={class:"flex items-center mt-5",href:""},Fu={class:"sticky top-0 pt-10"},_u=u("ul",{class:"relative text-slate-500 before:absolute before:left-0 before:z-[-1] before:h-full before:w-[2px] before:bg-slate-200 before:content-[''] before:dark:bg-darkmode-600"},[u("li",{class:"pl-5 mb-4 font-medium border-l-2 border-primary text-primary dark:border-primary"},[u("a",{href:""},"\u5E94\u7528\u8BBE\u7F6E")]),u("li",{class:"pl-5 mb-4 border-l-2 border-transparent dark:border-transparent"},[u("a",{href:""},"\u7F51\u7AD9\u8BBE\u7F6E")]),u("li",{class:"pl-5 mb-4 border-l-2 border-transparent dark:border-transparent"},[u("a",{href:""},"\u5BA2\u670D\u8BBE\u7F6E")]),u("li",{class:"pl-5 mb-4 border-l-2 border-transparent dark:border-transparent"},[u("a",{href:""},"\u63A8\u5E7F\u4F4D\u8BBE\u7F6E")]),u("li",{class:"pl-5 mb-4 border-l-2 border-transparent dark:border-transparent"},[u("a",{href:""},"\u6269\u5C55\u8BBE\u7F6E")])],-1),bu={class:"relative p-5 mt-10 border rounded-md border-warning bg-warning/20 dark:border-0 dark:bg-darkmode-600"},Bu=u("h2",{class:"text-lg font-medium"},"\u63D0\u9192",-1),fu=u("div",{class:"mt-5 font-medium"},"\u7F51\u7AD9\u8BBE\u7F6E",-1),Du=u("div",{class:"mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-500"},[u("div",null," \u5E94\u7528\u8BBE\u7F6E\u540D\u79F0\u548C\u56FE\u6807\u4E3B\u8981\u7528\u6237\u7BA1\u7406\u5E73\u53F0\u663E\u793A\u4F7F\u7528. "),u("div",{class:"mt-2"}," \u7F51\u7AD9\u8BBE\u7F6E\u4E3B\u8981\u8BBE\u7F6E\u7F51\u7AD9\u76F8\u5173\u7684\u914D\u7F6E\u4FE1\u606F. ")],-1),Au=N({__name:"setting",setup(hu){const F=O().uploadUrl,e=S({name:"",icon_url:"",site_name:"",title:"",logo_url:"",keywords:"",description:"",beianhao:"",introduce:"",qq_url:"",tj:"",weixin_url:""}),w={},D=G(0);L(()=>{v()});const B=M(w,T(e)),v=()=>{C()},C=()=>{$({}).then(s=>{s.data.app&&h(()=>{Object.assign(e,x(s.data.app,["name","icon_url","site_name","title","logo_url","keywords","description","beianhao","introduce","qq_url","tj","weixin","qq","tel","weixin_url"])),D.value=s.data.app.id})}),z({}).then(s=>{s.data.app_data&&h(()=>{const t=x(s.data.app_data,["mall_all","cache"]);Object.assign(e,t)})})},y=s=>{if(s.preventDefault(),B.value.$touch(),B.value.$invalid)B.value.$errors;else{const t=E(e);W(t).then(n=>{const{code:i}=n||{};i===0?b.success("\u4FDD\u5B58\u6210\u529F"):b.error(n.message)}),Z(Object.assign(t,{page_view:"cms"})).then(n=>{const{code:i}=n||{};i===0?b.success("\u4FDD\u5B58\u6210\u529F"):b.error(n.message)})}},A=s=>{Object.assign(e,{icon_url:s.data.item.img})},k=s=>{Object.assign(e,{logo_url:s.data.item.img})},q=s=>{Object.assign(e,{weixin_url:s.data.item.img})};return(s,t)=>{const n=c("h-form-item"),i=c("h-upload"),f=c("UploadIcon"),_=c("h-form"),V=c("ActivityIcon"),U=c("BoxIcon"),I=c("LightbulbIcon"),j=c("h-card");return R(),Q(j,{title:"\u5E94\u7528\u8BBE\u7F6E"},{menu:a(()=>[u("div",cu,[u("div",pu,[u("a",mu,[o(V,{class:"w-4 h-4 mr-2"}),m(" \u5E2E\u52A9\u4E2D\u5FC3 ")]),u("a",Eu,[o(U,{class:"w-4 h-4 mr-2"}),m(" \u89E3\u6790\u6559\u7A0B ")])])]),u("div",Fu,[_u,u("div",bu,[o(I,{class:"absolute top-0 right-0 w-12 h-12 mt-5 mr-3 text-warning/80"}),Bu,fu,Du])])]),default:a(()=>[u("div",J,[u("div",K,[p(" BEGIN: \u57FA\u7840\u8BBE\u7F6E "),o(_,{label:"\u5E94\u7528\u8BBE\u7F6E("+D.value+")",border:!0},{default:a(()=>[o(n,{label:"\u5E94\u7528\u540D\u79F0",content:"\u7ED9\u5E94\u7528\u8D77\u4E2A\u540D\u5B57\u5427",required:!1},{default:a(()=>[r(u("input",{type:"text",class:"form-control",placeholder:"\u5E94\u7528\u540D\u5B57","onUpdate:modelValue":t[0]||(t[0]=l=>e.name=l)},null,512),[[d,e.name]]),P]),_:1}),o(n,{label:"\u5E94\u7528\u56FE\u6807",content:"\u8BBE\u7F6E\u5E94\u7528\u7684logo\uFF0C\u4E0D\u8BBE\u7F6E\u4E0D\u663E\u793A",required:!1},{default:a(()=>[u("div",X,[o(i,{name:"file",multiple:!0,action:E(F),onChange:A},{default:a(()=>[u("div",Y,[u("img",{class:"rounded-md",alt:"",src:e.icon_url},null,8,uu)])]),_:1},8,["action"]),o(i,{name:"file",multiple:!0,action:E(F),onChange:A},{default:a(()=>[u("button",eu,[o(f,{class:"w-4 h-4 mr-2"}),m("\u4E0A\u4F20 ")])]),_:1},8,["action"])])]),_:1})]),_:1},8,["label"]),p(" END: \u57FA\u7840\u8BBE\u7F6E "),p(" BEGIN: \u7F51\u7AD9\u8BBE\u7F6E "),o(_,{label:"\u7F51\u7AD9\u8BBE\u7F6E",border:!0},{default:a(()=>[o(n,{label:"\u7F51\u7AD9\u540D\u79F0",content:"\u7ED9\u7F51\u7AD9\u8D77\u4E2A\u540D\u5B57\u5427"},{default:a(()=>[r(u("input",{type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=l=>e.site_name=l),placeholder:""},null,512),[[d,e.site_name]])]),_:1}),o(n,{label:"\u7F51\u7AD9\u9996\u9875\u6807\u9898",content:"\u7F51\u7AD9\u9996\u9875\u6807\u9898"},{default:a(()=>[r(u("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=l=>e.title=l),placeholder:""},null,512),[[d,e.title]])]),_:1}),o(n,{label:"\u5173\u952E\u8BCD",content:"\u7ED9\u7F51\u7AD9\u5199\u4E00\u4E9B\u5173\u952E\u8BCD\u5427\uFF01",required:!1},{default:a(()=>[r(u("input",{type:"text",class:"form-control",placeholder:"\u5173\u952E\u8BCD","onUpdate:modelValue":t[3]||(t[3]=l=>e.keywords=l)},null,512),[[d,e.keywords]]),tu]),_:1}),o(n,{label:"\u7F51\u7AD9logo",content:"\u8BBE\u7F6E\u7F51\u7AD9\u7684logo\uFF0C\u4E0D\u8BBE\u7F6E\u4E0D\u663E\u793A",required:!1},{default:a(()=>[r(u("input",{type:"text",class:"form-control",placeholder:"logo\u7684url\u5730\u5740","onUpdate:modelValue":t[4]||(t[4]=l=>e.logo_url=l)},null,512),[[d,e.logo_url]]),o(i,{name:"file",multiple:!0,action:E(F),onChange:k},{default:a(()=>[u("button",ou,[o(f,{class:"w-4 h-4 mr-2"}),m("\u4E0A\u4F20 ")])]),_:1},8,["action"])]),_:1}),o(n,{label:"\u5FAE\u4FE1\u4E8C\u7EF4\u7801",content:"\u7F51\u7EDC\u5730\u5740\u56FE\u7247\uFF0C\u4E5F\u53EF\u4EE5\u4E0A\u4F20\u5FAE\u4FE1\u56FE\u7247\u5230\u81EA\u5DF1\u7684\u670D\u52A1\u5668\uFF01"},{default:a(()=>[r(u("input",{type:"text",class:"form-control","onUpdate:modelValue":t[5]||(t[5]=l=>e.weixin_url=l),placeholder:""},null,512),[[d,e.weixin_url]]),o(i,{name:"file",multiple:!0,action:E(F),onChange:q},{default:a(()=>[u("button",lu,[o(f,{class:"w-4 h-4 mr-2"}),m("\u4E0A\u4F20 ")])]),_:1},8,["action"])]),_:1}),o(n,{label:"\u7F51\u7AD9\u5907\u6848\u53F7",content:""},{default:a(()=>[r(u("input",{type:"text",class:"form-control","onUpdate:modelValue":t[6]||(t[6]=l=>e.beianhao=l),placeholder:""},null,512),[[d,e.beianhao]])]),_:1}),o(n,{label:"\u4ECB\u7ECD",content:"\u5EFA\u8BAE\u7B80\u5355\u7B80\u6D01\u660E\u4E86"},{default:a(()=>[r(u("input",{type:"text",class:"form-control","onUpdate:modelValue":t[7]||(t[7]=l=>e.introduce=l),placeholder:""},null,512),[[d,e.introduce]])]),_:1}),o(n,{label:"\u52A0\u7FA4\u94FE\u63A5",content:"\u7559\u7A7A\u5C06\u4E0D\u663E\u793A\u52A0\u7FA4\u56FE\u6807\uFF01"},{default:a(()=>[r(u("input",{type:"text",class:"form-control","onUpdate:modelValue":t[8]||(t[8]=l=>e.qq_url=l),placeholder:""},null,512),[[d,e.qq_url]])]),_:1}),o(n,{label:"\u7EDF\u8BA1\u4EE3\u7801",content:"\u901A\u8FC7\u7B2C\u4E09\u65B9\u7EDF\u8BA1\u5DE5\u5177\u7EDF\u8BA1\u7F51\u7AD9\u6D41\u91CF"},{default:a(()=>[r(u("textarea",{class:"form-control","onUpdate:modelValue":t[9]||(t[9]=l=>e.tj=l),rows:4,placeholder:""},null,512),[[d,e.tj]])]),_:1})]),_:1}),p(" END: \u7F51\u7AD9\u8BBE\u7F6E "),p(" BEGIN: \u5BA2\u670D\u8BBE\u7F6E "),o(_,{label:"\u5BA2\u670D\u8BBE\u7F6E",border:!0},{default:a(()=>[o(n,{label:"\u5FAE\u4FE1\u5BA2\u670D",content:""},{default:a(()=>[r(u("input",{type:"text",class:"form-control","onUpdate:modelValue":t[10]||(t[10]=l=>e.weixin=l),placeholder:""},null,512),[[d,e.weixin]])]),_:1}),o(n,{label:"qq",content:"QQ\u53F7\u7801"},{default:a(()=>[r(u("input",{type:"text",class:"form-control","onUpdate:modelValue":t[11]||(t[11]=l=>e.qq=l),placeholder:""},null,512),[[d,e.qq]])]),_:1}),o(n,{label:"\u7535\u8BDD",content:"\u8054\u7CFB\u7535\u8BDD"},{default:a(()=>[r(u("input",{type:"text",class:"form-control","onUpdate:modelValue":t[12]||(t[12]=l=>e.tel=l),placeholder:""},null,512),[[d,e.tel]])]),_:1})]),_:1}),p(" END: \u5BA2\u670D\u8BBE\u7F6E "),p(" BEGIN: \u6269\u5C55\u8BBE\u7F6E "),o(_,{label:"\u6269\u5C55\u8BBE\u7F6E",border:!0},{default:a(()=>[o(n,{label:"\u5168\u7F51\u8D2D",content:""},{default:a(()=>[r(u("select",{class:"form-select","onUpdate:modelValue":t[13]||(t[13]=l=>e.mall_all=l)},su,512),[[g,e.mall_all]])]),_:1}),o(n,{label:"\u7F13\u5B58\u8BBE\u7F6E",content:"\u8BE5\u53C2\u6570\u9488\u5BF9\u4F7F\u7528\u81EA\u8D2D\u57DF\u540D\u548C\u7A7A\u95F4\u7684\u7528\u6237\uFF0C\u8BBE\u7F6E\u662F\u5426\u7F13\u5B58\u9875\u9762\u4FE1\u606F\uFF0C\u7F13\u5B58\u4F1A\u63D0\u4F9B\u8BBF\u95EE\u901F\u5EA6\uFF0C\u4F46\u662F\u4F1A\u589E\u52A0\u7A7A\u95F4\u4F7F\u7528\u91CF"},{default:a(()=>[r(u("select",{class:"form-select","onUpdate:modelValue":t[14]||(t[14]=l=>e.cache=l)},iu,512),[[g,e.cache]])]),_:1})]),_:1}),p(" END: \u6269\u5C55\u8BBE\u7F6E "),u("div",{class:"flex flex-col justify-end gap-2 mt-5 md:flex-row"},[u("button",{type:"button",class:"w-full py-3 btn btn-primary md:w-52",onClick:y}," \u4FDD\u5B58 ")])])])]),_:1})}}}),vu=H(Au,[["__file","/Users/wu./Documents/os/web/www/web/src/views/user/cms/setting.vue"]]);export{vu as default};