import{h as j,Y as I,j as O,o as S,k as L,t as M,au as N,v as D,av as T,b as $,w as n,s as i,a as Q,l as u,p as l,n as m,x as a,y as r,u as F,a2 as f,aw as R,q as E,ax as z}from"./index.729dcb01.js";import{p as A}from"./pick.8672c236.js";const G={class:"grid grid-cols-11 pb-20 mt-5 gap-x-6"},W={class:"col-span-11 intro-y 2xl:col-span-9"},Y=u("div",{class:"text-right form-help"}," 0/70",-1),H={class:"w-32 mt-1 mb-2 mr-2 btn btn-outline-success btn-sm"},J=u("div",{class:"text-right form-help"}," 0/70",-1),K={class:"w-32 mt-1 mb-2 mr-2 btn btn-outline-success btn-sm"},P={class:"w-32 mt-1 mb-2 mr-2 btn btn-outline-success btn-sm"},X=u("option",{value:0},"\u5173\u95ED",-1),Z=u("option",{value:1},"\u5F00\u901A",-1),uu=[X,Z],tu={class:"input-group"},eu=u("div",{class:"input-group-text"},"% ",-1),ou=u("option",{value:0},"\u5168\u90E8",-1),lu=u("option",{value:1},"\u5B98\u65B9\u5BA1\u6838",-1),nu=[ou,lu],su=u("span",null,null,-1),au={class:"input-group"},ru=u("div",{class:"input-group-text"},"\u7B14 ",-1),du=u("option",{value:0},"\u4E0D\u7F13\u5B58",-1),iu=u("option",{value:1},"\u7F13\u5B58",-1),cu=[du,iu],mu={class:"sticky top-0 mt-5 box"},pu={class:"p-5"},Fu={class:"flex items-center font-medium text-primary",href:""},Eu={class:"flex items-center mt-5",href:""},_u={class:"sticky top-0 pt-10"},Bu=u("ul",{class:"relative text-slate-500 before:absolute before:left-0 before:z-[-1] before:h-full before:w-[2px] before:bg-slate-200 before:content-[''] before:dark:bg-darkmode-600"},[u("li",{class:"pl-5 mb-4 font-medium border-l-2 border-primary text-primary dark:border-primary"},[u("a",{href:""},"\u5E94\u7528\u8BBE\u7F6E")]),u("li",{class:"pl-5 mb-4 border-l-2 border-transparent dark:border-transparent"},[u("a",{href:""},"\u7F51\u7AD9\u8BBE\u7F6E")]),u("li",{class:"pl-5 mb-4 border-l-2 border-transparent dark:border-transparent"},[u("a",{href:""},"\u5BA2\u670D\u8BBE\u7F6E")]),u("li",{class:"pl-5 mb-4 border-l-2 border-transparent dark:border-transparent"},[u("a",{href:""},"\u63A8\u5E7F\u4F4D\u8BBE\u7F6E")]),u("li",{class:"pl-5 mb-4 border-l-2 border-transparent dark:border-transparent"},[u("a",{href:""},"\u6269\u5C55\u8BBE\u7F6E")])],-1),bu={class:"relative p-5 mt-10 border rounded-md border-warning bg-warning/20 dark:border-0 dark:bg-darkmode-600"},fu=u("h2",{class:"text-lg font-medium"},"\u63D0\u9192",-1),Du=u("div",{class:"mt-5 font-medium"},"\u7F51\u7AD9\u8BBE\u7F6E",-1),Au=u("div",{class:"mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-500"},[u("div",null," \u5E94\u7528\u8BBE\u7F6E\u540D\u79F0\u548C\u56FE\u6807\u4E3B\u8981\u7528\u6237\u7BA1\u7406\u5E73\u53F0\u663E\u793A\u4F7F\u7528. "),u("div",{class:"mt-2"}," \u7F51\u7AD9\u8BBE\u7F6E\u4E3B\u8981\u8BBE\u7F6E\u7F51\u7AD9\u76F8\u5173\u7684\u914D\u7F6E\u4FE1\u606F. ")],-1),Cu=j({__name:"setting",setup(xu){const _=I().uploadUrl,t=O({name:"",icon_url:"",site_name:"",title:"",logo_url:"",keywords:"",description:"",beianhao:"",introduce:"",qq_url:"",tj:"",weixin_url:""}),x={};S(()=>{g()});const B=L(x,M(t)),g=()=>{h()},h=()=>{N({}).then(d=>{d.data.item&&D(()=>{Object.assign(t,A(d.data.item,["name","icon_url","site_name","title","logo_url","keywords","description","beianhao","introduce","qq_url","tj","weixin","qq","tel","weixin_url"]))})}),T({}).then(d=>{d.data.item&&D(()=>{const e=A(d.data.item,["mall_all","commssion_rate","status","volume","cache"]);Object.assign(t,e)})})},v=d=>{if(d.preventDefault(),B.value.$touch(),B.value.$invalid)B.value.$errors;else{const e=F(t);R(e).then(s=>{const{code:c}=s||{};c===0?E.success("\u4FDD\u5B58\u6210\u529F"):E.error(s.message)}),z(Object.assign(e,{page_view:"cms"})).then(s=>{const{code:c}=s||{};c===0?E.success("\u4FDD\u5B58\u6210\u529F"):E.error(s.message)})}},C=d=>{Object.assign(t,{icon_url:d.data.item.img})},w=d=>{Object.assign(t,{logo_url:d.data.item.img})},y=d=>{Object.assign(t,{weixin_url:d.data.item.img})};return(d,e)=>{const s=i("h-form-item"),c=i("UploadIcon"),b=i("h-upload"),p=i("h-form"),V=i("ActivityIcon"),k=i("BoxIcon"),U=i("LightbulbIcon"),q=i("h-card");return Q(),$(q,{title:"\u5E94\u7528\u8BBE\u7F6E"},{menu:n(()=>[u("div",mu,[u("div",pu,[u("a",Fu,[l(V,{class:"w-4 h-4 mr-2"}),m(" \u5E2E\u52A9\u4E2D\u5FC3 ")]),u("a",Eu,[l(k,{class:"w-4 h-4 mr-2"}),m(" \u89E3\u6790\u6559\u7A0B ")])])]),u("div",_u,[Bu,u("div",bu,[l(U,{class:"absolute top-0 right-0 w-12 h-12 mt-5 mr-3 text-warning/80"}),fu,Du,Au])])]),default:n(()=>[u("div",G,[u("div",W,[l(p,{label:"\u5E94\u7528\u8BBE\u7F6E",border:!0},{default:n(()=>[l(s,{label:"\u5E94\u7528\u540D\u79F0",content:"\u7ED9\u5E94\u7528\u8D77\u4E2A\u540D\u5B57\u5427",required:!1},{default:n(()=>[a(u("input",{type:"text",class:"form-control",placeholder:"\u5E94\u7528\u540D\u5B57","onUpdate:modelValue":e[0]||(e[0]=o=>t.name=o)},null,512),[[r,t.name]]),Y]),_:1}),l(s,{label:"\u5E94\u7528\u56FE\u6807",content:"\u8BBE\u7F6E\u5E94\u7528\u7684logo\uFF0C\u4E0D\u8BBE\u7F6E\u4E0D\u663E\u793A",required:!1},{default:n(()=>[a(u("input",{type:"text",class:"form-control",placeholder:"\u5E94\u7528\u56FE\u6807\u7684url\u5730\u5740","onUpdate:modelValue":e[1]||(e[1]=o=>t.icon_url=o)},null,512),[[r,t.icon_url]]),l(b,{name:"file",multiple:!0,action:F(_),onChange:C},{default:n(()=>[u("button",H,[l(c,{class:"w-4 h-4 mr-2"}),m("\u4E0A\u4F20 ")])]),_:1},8,["action"])]),_:1})]),_:1}),l(p,{label:"\u7F51\u7AD9\u8BBE\u7F6E",border:!0},{default:n(()=>[l(s,{label:"\u7F51\u7AD9\u540D\u79F0",content:"\u7ED9\u7F51\u7AD9\u8D77\u4E2A\u540D\u5B57\u5427"},{default:n(()=>[a(u("input",{type:"text",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=o=>t.site_name=o),placeholder:""},null,512),[[r,t.site_name]])]),_:1}),l(s,{label:"\u7F51\u7AD9\u9996\u9875\u6807\u9898",content:"\u7F51\u7AD9\u9996\u9875\u6807\u9898"},{default:n(()=>[a(u("input",{type:"text",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=o=>t.title=o),placeholder:""},null,512),[[r,t.title]])]),_:1}),l(s,{label:"\u5173\u952E\u8BCD",content:"\u7ED9\u7F51\u7AD9\u5199\u4E00\u4E9B\u5173\u952E\u8BCD\u5427\uFF01",required:!1},{default:n(()=>[a(u("input",{type:"text",class:"form-control",placeholder:"\u5173\u952E\u8BCD","onUpdate:modelValue":e[4]||(e[4]=o=>t.keywords=o)},null,512),[[r,t.keywords]]),J]),_:1}),l(s,{label:"\u7F51\u7AD9logo",content:"\u8BBE\u7F6E\u7F51\u7AD9\u7684logo\uFF0C\u4E0D\u8BBE\u7F6E\u4E0D\u663E\u793A",required:!1},{default:n(()=>[a(u("input",{type:"text",class:"form-control",placeholder:"logo\u7684url\u5730\u5740","onUpdate:modelValue":e[5]||(e[5]=o=>t.logo_url=o)},null,512),[[r,t.logo_url]]),l(b,{name:"file",multiple:!0,action:F(_),onChange:w},{default:n(()=>[u("button",K,[l(c,{class:"w-4 h-4 mr-2"}),m("\u4E0A\u4F20 ")])]),_:1},8,["action"])]),_:1}),l(s,{label:"\u5FAE\u4FE1\u4E8C\u7EF4\u7801",content:"\u7F51\u7EDC\u5730\u5740\u56FE\u7247\uFF0C\u4E5F\u53EF\u4EE5\u4E0A\u4F20\u5FAE\u4FE1\u56FE\u7247\u5230\u81EA\u5DF1\u7684\u670D\u52A1\u5668\uFF01"},{default:n(()=>[a(u("input",{type:"text",class:"form-control","onUpdate:modelValue":e[6]||(e[6]=o=>t.weixin_url=o),placeholder:""},null,512),[[r,t.weixin_url]]),l(b,{name:"file",multiple:!0,action:F(_),onChange:y},{default:n(()=>[u("button",P,[l(c,{class:"w-4 h-4 mr-2"}),m("\u4E0A\u4F20 ")])]),_:1},8,["action"])]),_:1}),l(s,{label:"\u7F51\u7AD9\u5907\u6848\u53F7",content:""},{default:n(()=>[a(u("input",{type:"text",class:"form-control","onUpdate:modelValue":e[7]||(e[7]=o=>t.beianhao=o),placeholder:""},null,512),[[r,t.beianhao]])]),_:1}),l(s,{label:"\u4ECB\u7ECD",content:"\u5EFA\u8BAE\u7B80\u5355\u7B80\u6D01\u660E\u4E86"},{default:n(()=>[a(u("input",{type:"text",class:"form-control","onUpdate:modelValue":e[8]||(e[8]=o=>t.introduce=o),placeholder:""},null,512),[[r,t.introduce]])]),_:1}),l(s,{label:"\u52A0\u7FA4\u94FE\u63A5",content:"\u7559\u7A7A\u5C06\u4E0D\u663E\u793A\u52A0\u7FA4\u56FE\u6807\uFF01"},{default:n(()=>[a(u("input",{type:"text",class:"form-control","onUpdate:modelValue":e[9]||(e[9]=o=>t.qq_url=o),placeholder:""},null,512),[[r,t.qq_url]])]),_:1}),l(s,{label:"\u7EDF\u8BA1\u4EE3\u7801",content:"\u901A\u8FC7\u7B2C\u4E09\u65B9\u7EDF\u8BA1\u5DE5\u5177\u7EDF\u8BA1\u7F51\u7AD9\u6D41\u91CF"},{default:n(()=>[a(u("textarea",{class:"form-control","onUpdate:modelValue":e[10]||(e[10]=o=>t.tj=o),rows:4,placeholder:""},null,512),[[r,t.tj]])]),_:1})]),_:1}),l(p,{label:"\u5BA2\u670D\u8BBE\u7F6E",border:!0},{default:n(()=>[l(s,{label:"\u5FAE\u4FE1\u5BA2\u670D",content:""},{default:n(()=>[a(u("input",{type:"text",class:"form-control","onUpdate:modelValue":e[11]||(e[11]=o=>t.weixin=o),placeholder:""},null,512),[[r,t.weixin]])]),_:1}),l(s,{label:"qq",content:"QQ\u53F7\u7801"},{default:n(()=>[a(u("input",{type:"text",class:"form-control","onUpdate:modelValue":e[12]||(e[12]=o=>t.qq=o),placeholder:""},null,512),[[r,t.qq]])]),_:1}),l(s,{label:"\u7535\u8BDD",content:"\u8054\u7CFB\u7535\u8BDD"},{default:n(()=>[a(u("input",{type:"text",class:"form-control","onUpdate:modelValue":e[13]||(e[13]=o=>t.tel=o),placeholder:""},null,512),[[r,t.tel]])]),_:1})]),_:1}),l(p,{label:"\u6269\u5C55\u8BBE\u7F6E",border:!0},{default:n(()=>[l(s,{label:"\u5168\u7F51\u8D2D",content:""},{default:n(()=>[a(u("select",{class:"form-select","onUpdate:modelValue":e[14]||(e[14]=o=>t.mall_all=o)},uu,512),[[f,t.mall_all]])]),_:1}),l(s,{label:"\u4F63\u91D1\u6BD4\u4F8B\u8FC7\u6EE4",content:"\u8BBE\u7F6E\u4F63\u91D1\u6BD4\u4F8B\u540E\uFF0Ccms\u4E2D\u53EA\u4F1A\u663E\u793A\u9AD8\u4E8E\u6B64\u6BD4\u4F8B\u7684\u5546\u54C1"},{default:n(()=>[u("div",tu,[a(u("input",{type:"text",class:"form-control","onUpdate:modelValue":e[15]||(e[15]=o=>t.commssion_rate=o)},null,512),[[r,t.commssion_rate]]),eu])]),_:1}),l(s,{label:"\u5546\u54C1\u7C7B\u578B",content:"\u5185\u6D4B\u529F\u80FD\uFF0C\u6682\u65F6\u4E0D\u652F\u6301\u4FEE\u6539"},{default:n(()=>[a(u("select",{class:"form-select","onUpdate:modelValue":e[16]||(e[16]=o=>t.status=o),disabled:""},nu,512),[[f,t.status]]),su]),_:1}),l(s,{label:"\u9500\u91CF\u8BBE\u7F6E",content:"\u8BBE\u7F6E\u4F63\u91D1\u6BD4\u4F8B\u540E\uFF0Ccms\u4E2D\u53EA\u4F1A\u663E\u793A\u9AD8\u4E8E\u6B64\u9500\u91CF\u7684\u5546\u54C1"},{default:n(()=>[u("div",au,[a(u("input",{type:"text",class:"form-control","onUpdate:modelValue":e[17]||(e[17]=o=>t.volume=o)},null,512),[[r,t.volume]]),ru])]),_:1}),l(s,{label:"\u7F13\u5B58\u8BBE\u7F6E",content:"\u8BE5\u53C2\u6570\u9488\u5BF9\u4F7F\u7528\u81EA\u8D2D\u57DF\u540D\u548C\u7A7A\u95F4\u7684\u7528\u6237\uFF0C\u8BBE\u7F6E\u662F\u5426\u7F13\u5B58\u9875\u9762\u4FE1\u606F\uFF0C\u7F13\u5B58\u4F1A\u63D0\u4F9B\u8BBF\u95EE\u901F\u5EA6\uFF0C\u4F46\u662F\u4F1A\u589E\u52A0\u7A7A\u95F4\u4F7F\u7528\u91CF"},{default:n(()=>[a(u("select",{class:"form-select","onUpdate:modelValue":e[18]||(e[18]=o=>t.cache=o)},cu,512),[[f,t.cache]])]),_:1})]),_:1}),u("div",{class:"flex flex-col justify-end gap-2 mt-5 md:flex-row"},[u("button",{type:"button",class:"w-full py-3 btn btn-primary md:w-52",onClick:v}," \u4FDD\u5B58 ")])])])]),_:1})}}});export{Cu as default};