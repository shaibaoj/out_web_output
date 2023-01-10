import{r as f,d as g,l as b,o as V,m as D,t as $,n as p,e as x,w as i,b as A,h as l,ac as d,g as o,u as I,B as U,j as T,q as E,s as N,k as S}from"./index.06fc13de.js";const F={getItems:"/api/user/info/template/list",getView:"/api/user/info/template/view",updateItem:"/api/user/info/template/update"};function M(r){return f({url:F.getView,method:"post",data:r})}function Q(r){return f({url:F.updateItem,method:"post",data:r})}const R=o("option",{value:"qq"},"QQ\u6587\u6848",-1),j=o("option",{value:"weixin"},"\u5FAE\u4FE1\u6587\u6848",-1),z=o("option",{value:"cms"},"CMS\u6587\u6848",-1),G=o("option",{value:"mall"},"\u5168\u7F51\u8D2D\u7269\u6587\u6848",-1),H=o("option",{value:"quan"},"\u5168\u7F51\u8D2D\u7269\u5E26\u5238\u6587\u6848",-1),J=o("option",{value:"app"},"APP\u6587\u6848",-1),K=o("div",{class:"desc"},"\u53EF\u4EE5\u70B9\u51FB\u4E0B\u9762\u7684\u6587\u5B57,\u5C06\u5BF9\u5E94\u6807\u7B7E\u63D2\u5165\u5230\u6A21\u677F\u4E2D",-1),L={class:"flex flex-row flex-wrap mt-2 gap-x-4 gap-y-4"},O=g({__name:"template",setup(r){const w=b({}),v={},e=b({uploading:!0,model:"qq",content:"",content_qq:"",content_cms:"",content_mall:"",content_mall_coupon:"",content_app_coupon:""});V(()=>{q()});const _=D(v,$(w)),q=()=>{k()},k=()=>{M({}).then(s=>{s.data.item&&(e.content=s.data.item.content,e.content_qq=s.data.item.content_qq,e.content_cms=s.data.item.content_cms,e.content_mall=s.data.item.content_mall,e.content_mall_coupon=s.data.item.content_mall_coupon,e.content_app_coupon=s.data.item.content_app_coupon)})},y=s=>{s.preventDefault(),_.value.$touch(),_.value.$invalid?_.value.$errors:Q({content:e.content,content_qq:e.content_qq,content_cms:e.content_cms,content_mall:e.content_mall,content_mall_coupon:e.content_mall_coupon,content_app_coupon:e.content_app_coupon}).then(n=>{const{code:a}=n||{};a===0?E.success("\u4FDD\u5B58\u6210\u529F"):E.error(n.message)})},u=s=>{let n=document.getElementById("content_qq");e.model==="qq"?n=document.getElementById("content_qq"):e.model==="weixin"?n=document.getElementById("content"):e.model==="cms"?n=document.getElementById("content_cms"):e.model==="mall"?n=document.getElementById("content_mall"):e.model==="quan"?n=document.getElementById("content_mall_coupon"):e.model==="app"&&(n=document.getElementById("content_app_coupon"));let a="";if(n!=null){if(n.onselectstart||n.onselectstart===0){var c=n.onselectstart,m=n.onselect;a=n.value.substring(0,c)+s+n.value.substring(m,n.value.length),N(()=>{n!=null&&(n.focus(),n.onselectionchange(m+s.length,m+s.length))})}else a+=s;e.model==="qq"?e.content_qq=a:e.model==="weixin"?e.content=a:e.model==="cms"?e.content_cms=a:e.model==="mall"?e.content_mall=a:e.model==="quan"?e.content_mall_coupon=a:e.model==="app"&&(e.content_app_coupon=a)}};return(s,n)=>{const a=p("h-radio-group"),c=p("FormTextarea"),m=p("h-form-item"),C=p("h-form"),B=p("h-card");return A(),x(B,{bordered:!1,title:"\u6A21\u7248\u8BBE\u7F6E"},{default:i(()=>[l(a,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=t=>e.model=t)},{default:i(()=>[R,j,z,G,H,J]),_:1},8,["modelValue"]),l(C,{layout:"small",name:"\u6587\u6848\u6A21\u677F"},{default:i(()=>[l(m,{class:d({hidden:e.model!="qq"}),label:"",layout:"small"},{default:i(()=>[l(c,{id:"content_qq",modelValue:e.content_qq,"onUpdate:modelValue":n[1]||(n[1]=t=>e.content_qq=t),rows:10},null,8,["modelValue"])]),_:1},8,["class"]),l(m,{class:d({hidden:e.model!="weixin"}),label:"",layout:"small"},{default:i(()=>[l(c,{id:"content",modelValue:e.content,"onUpdate:modelValue":n[2]||(n[2]=t=>e.content=t),rows:10},null,8,["modelValue"])]),_:1},8,["class"]),l(m,{class:d({hidden:e.model!="cms"}),label:"",layout:"small"},{default:i(()=>[l(c,{id:"content_cms",modelValue:e.content_cms,"onUpdate:modelValue":n[3]||(n[3]=t=>e.content_cms=t),rows:10},null,8,["modelValue"])]),_:1},8,["class"]),l(m,{class:d({hidden:e.model!="mall"}),label:"",layout:"small"},{default:i(()=>[l(c,{id:"content_mall",modelValue:e.content_mall,"onUpdate:modelValue":n[4]||(n[4]=t=>e.content_mall=t),rows:10},null,8,["modelValue"])]),_:1},8,["class"]),l(m,{class:d({hidden:e.model!="quan"}),label:"",layout:"small"},{default:i(()=>[l(c,{id:"content_mall_coupon",modelValue:e.content_mall_coupon,"onUpdate:modelValue":n[5]||(n[5]=t=>e.content_mall_coupon=t),rows:10},null,8,["modelValue"])]),_:1},8,["class"]),l(m,{class:d({hidden:e.model!="app"}),label:"",layout:"small"},{default:i(()=>[l(c,{id:"content_app_coupon",modelValue:e.content_app_coupon,"onUpdate:modelValue":n[6]||(n[6]=t=>e.content_app_coupon=t),rows:10},null,8,["modelValue"])]),_:1},8,["class"]),l(m,{label:" ",content:"",layout:"small"},{default:i(()=>[K,o("div",L,[o("span",{class:"inline-block w-24 mb-2 mr-1 btn btn-outline-secondary",onClick:n[7]||(n[7]=t=>u("{\u56FE\u7247}"))},"{\u56FE\u7247}"),o("span",{class:"inline-block w-24 mb-2 mr-1 btn btn-outline-secondary",onClick:n[8]||(n[8]=t=>u("{\u77ED\u6807\u9898}"))},"{\u77ED\u6807\u9898}"),o("span",{class:"inline-block w-24 mb-2 mr-1 btn btn-outline-secondary",onClick:n[9]||(n[9]=t=>u("{\u4ECB\u7ECD}"))},"{\u4ECB\u7ECD}"),o("span",{class:"inline-block w-24 mb-2 mr-1 btn btn-outline-secondary",onClick:n[10]||(n[10]=t=>u("{\u5E97\u94FA\u7C7B\u578B}"))},"{\u5E97\u94FA\u7C7B\u578B}"),o("span",{class:"inline-block w-24 mb-2 mr-1 btn btn-outline-secondary",onClick:n[11]||(n[11]=t=>u("{\u539F\u4EF7}"))},"{\u539F\u4EF7}"),o("span",{class:"inline-block w-24 mb-2 mr-1 btn btn-outline-secondary",onClick:n[12]||(n[12]=t=>u("{\u5238\u540E\u4EF7}"))},"{\u5238\u540E\u4EF7}"),o("span",{class:"inline-block w-24 mb-2 mr-1 btn btn-outline-secondary",onClick:n[13]||(n[13]=t=>u("{\u9500\u91CF}"))},"{\u9500\u91CF}"),o("span",{class:"inline-block w-24 mb-2 mr-1 btn btn-outline-secondary",onClick:n[14]||(n[14]=t=>u("{\u4F63\u91D1\u6BD4\u4F8B}"))},"{\u4F63\u91D1\u6BD4\u4F8B}"),o("span",{class:"inline-block w-24 mb-2 mr-1 btn btn-outline-secondary",onClick:n[15]||(n[15]=t=>u("{\u9886\u5238\u94FE\u63A5}"))},"{\u9886\u5238\u94FE\u63A5}"),o("span",{class:"inline-block w-24 mb-2 mr-1 btn btn-outline-secondary",onClick:n[16]||(n[16]=t=>u("{\u5238\u6EE1}"))},"{\u5238\u6EE1}"),o("span",{class:"inline-block w-24 mb-2 mr-1 btn btn-outline-secondary",onClick:n[17]||(n[17]=t=>u("{\u5238\u989D}"))},"{\u5238\u989D}"),o("span",{class:"inline-block w-24 mb-2 mr-1 btn btn-outline-secondary",onClick:n[18]||(n[18]=t=>u("{\u4F18\u60E0\u5238\u5269\u4F59\u6570\u91CF}"))},"{\u4F18\u60E0\u5238\u5269\u4F59\u6570\u91CF}"),o("span",{class:"inline-block w-24 mb-2 mr-1 btn btn-outline-secondary",onClick:n[19]||(n[19]=t=>u("{\u4F18\u60E0\u5238\u6709\u6548\u9650\u671F}"))},"{\u4F18\u60E0\u5238\u6709\u6548\u9650\u671F}"),o("span",{class:"inline-block w-24 mb-2 mr-1 btn btn-outline-secondary",onClick:n[20]||(n[20]=t=>u("{\u957F\u94FE\u63A5}"))},"{\u957F\u94FE\u63A5}"),o("span",{class:"inline-block w-24 mb-2 mr-1 btn btn-outline-secondary",onClick:n[21]||(n[21]=t=>u("{\u77ED\u94FE\u63A5}"))},"{\u77ED\u94FE\u63A5}"),o("span",{class:"inline-block w-24 mb-2 mr-1 btn btn-outline-secondary",onClick:n[22]||(n[22]=t=>u("{\u53E3\u4EE4}"))},"{\u53E3\u4EE4}")])]),_:1}),l(m,{layout:"small"},{default:i(()=>[l(I(U),{variant:"primary",class:"w-24 mb-2 mr-1",onClick:y},{default:i(()=>[T("\u4FDD\u5B58")]),_:1})]),_:1})]),_:1})]),_:1})}}}),W=S(O,[["__file","/Users/wu./Documents/os/web/www/web/src/views/user/info/template.vue"]]);export{W as default};