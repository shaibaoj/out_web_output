import{h as U,Y as P,j as w,E as G,k as z,t as O,a as A,b as x,w as n,l as t,n as M,e as j,p as o,x as F,y as D,u as B,v as H,al as Z,q as L,s as r,o as J,am as K,a2 as Y,an as Q,D as N,Z as T,C,ae as R,$ as q,a1 as I}from"./index.a61f9404.js";import{p as X}from"./pick.e65abaad.js";const ee={class:"w-32 mt-1 mb-2 mr-2 btn btn-outline-success btn-sm"},te=U({__name:"push",emits:["ok"],setup(V,{expose:b,emit:l}){const p=P().uploadUrl,m=w({title:"",content:"",pic_url:""}),h={},a=w({visible:!1,confirmLoading:!1});G(()=>{});const f=()=>{a.visible=!1},g=s=>{m.pic_url=s.data.item.img},c=z(h,O(m)),d=()=>{a.visible=!0,H(()=>{Object.assign(m,{title:"",content:"",pic_url:""})})},e=s=>{if(a.confirmLoading=!0,c.value.$touch(),c.value.$invalid)c.value.$errors,a.confirmLoading=!1;else{const u=B(m);Z(Object.assign(u,{task:s})).then(_=>{_.code===0&&(L.success("\u63D0\u4EA4\u6210\u529F"),l("ok",u),a.visible=!1),a.confirmLoading=!1})}};return b({edit:d}),(s,u)=>{const _=r("h-form-item"),k=r("UploadIcon"),i=r("h-upload"),v=r("h-form"),$=r("h-spin"),S=r("LoadingIcon"),W=r("h-modal");return A(),x(W,{title:"\u53D1\u5E03\u6D88\u606F",size:"modal-lg",visible:a.visible,"confirm-loading":a.confirmLoading,onCancel:f},{footer:n(()=>[t("button",{class:"w-full mb-2 mr-1 btn btn-primary",onClick:u[3]||(u[3]=y=>e(0))},[M(" \u7ACB\u5373\u63A8\u9001 "),a.confirmLoading?(A(),x(S,{key:0,icon:"oval",color:"white",class:"w-4 h-4 ml-2"})):j("",!0)]),t("button",{class:"w-full mb-2 mr-1 btn btn-primary",onClick:u[4]||(u[4]=y=>e(1))},[M(" \u6DFB\u52A0\u5230\u63A8\u9001\u5E93 "),a.confirmLoading?(A(),x(S,{key:0,icon:"oval",color:"white",class:"w-4 h-4 ml-2"})):j("",!0)])]),default:n(()=>[o($,{spinning:a.confirmLoading},{default:n(()=>[o(v,{layout:"small"},{default:n(()=>[o(_,{label:"\u6807\u9898",content:"",layout:"small"},{default:n(()=>[F(t("input",{type:"text",class:"form-control","onUpdate:modelValue":u[0]||(u[0]=y=>m.title=y),placeholder:"\u6807\u9898"},null,512),[[D,m.title]])]),_:1}),o(_,{label:"\u5185\u5BB9",content:"",layout:"small"},{default:n(()=>[F(t("textarea",{class:"form-control","onUpdate:modelValue":u[1]||(u[1]=y=>m.content=y),rows:4,placeholder:"\u6587\u6848\uFF0C\u7CBE\u7F8E\u7B80\u6D01\u7684\u6587\u6848\uFF0C\u6709\u5229\u4E8E\u5BA2\u6237\u6210\u4EA4"},null,512),[[D,m.content]])]),_:1}),o(_,{label:"\u56FE\u7247",content:"",layout:"small"},{default:n(()=>[F(t("input",{type:"text",class:"form-control","onUpdate:modelValue":u[2]||(u[2]=y=>m.pic_url=y),placeholder:""},null,512),[[D,m.pic_url]]),o(i,{name:"file",multiple:!0,action:B(p),onChange:g},{default:n(()=>[t("button",ee,[o(k,{class:"w-4 h-4 mr-2"}),M("\u4E0A\u4F20 ")])]),_:1},8,["action"])]),_:1})]),_:1})]),_:1},8,["spinning"])]),_:1},8,["visible","confirm-loading"])}}}),oe={class:"input-group"},ne=t("div",{class:"input-group-text"},"\u6709\u65B0\u7528\u6237\u5B89\u5353app\uFF0C\u7ED9\u7528\u6237\u53D1\u9001\u7684\u6D88\u606F\u63D0\u9192",-1),le=t("option",{value:0},"\u5173\u95ED",-1),ue=t("option",{value:1},"\u5F00\u901A",-1),ae=[le,ue],se=t("option",{value:0},"\u5173\u95ED",-1),ie=t("option",{value:1},"\u5F00\u901A",-1),re=[se,ie],me=t("option",{value:0},"\u5173\u95ED",-1),ce=t("option",{value:1},"\u5F00\u901A",-1),de=[me,ce],fe={class:"input-group"},_e=t("div",{class:"input-group-text"},"\u5EFA\u8BAE\u8BBE\u7F6E2\u5C0F\u65F6(7200)\u4EE5\u4E0A,\u7FA4\u63A8\u4EFB\u52A1\u5EFA\u8BAE\u6BCF\u592910\u4E2A\u4EE5\u5185",-1),pe=U({__name:"data",setup(V,{expose:b}){const l=w({task_day_start_time:"",task_day_end_time:"",notice_install:"",push_igetui:"",push_umeng:"",push_xg:"",task_times:0}),E={},p=w({visible:!1,confirmLoading:!1});J(()=>{m()});const m=()=>{a()},h=()=>{p.visible=!0},a=()=>{K({}).then(d=>{d.data.app_detail&&H(()=>{const e=X(d.data.app_detail,["notice_install","push_igetui","push_umeng","push_xg","task_times","task_day_start_time","task_day_end_time"]);Object.assign(l,e)})})},f=z(E,O(l)),g=d=>{if(d.preventDefault(),f.value.$touch(),f.value.$invalid)f.value.$errors;else{const e=B(l);Q(e).then(s=>{const{code:u}=s||{};u===0?L.success("\u4FDD\u5B58\u6210\u529F"):L.error(s.message)})}},c=()=>{p.visible=!1};return b({edit:h}),(d,e)=>{const s=r("h-form-item"),u=r("Litepicker"),_=r("h-form"),k=r("h-drawer");return A(),x(k,{title:"\u8BBE\u7F6E",visible:p.visible,"confirm-loading":p.confirmLoading,onCancel:c},{footer:n(()=>[t("button",{class:"w-24 mb-2 mr-1 btn btn-primary",onClick:g},"\u4FDD\u5B58")]),default:n(()=>[o(_,{layout:"small"},{default:n(()=>[o(s,{label:"\u65B0\u7528\u6237\u63D0\u9192",content:"",layout:"small"},{default:n(()=>[t("div",oe,[F(t("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=i=>l.notice_install=i)},null,512),[[D,l.notice_install]]),ne])]),_:1}),o(s,{label:"\u4E2A\u63A8\u63A8\u9001\u901A\u9053",content:"",layout:"small"},{default:n(()=>[F(t("select",{class:"form-select","onUpdate:modelValue":e[1]||(e[1]=i=>l.push_igetui=i)},ae,512),[[Y,l.push_igetui]])]),_:1}),o(s,{label:"\u53CB\u76DF\u63A8\u9001\u901A\u9053",content:"",layout:"small"},{default:n(()=>[F(t("select",{class:"form-select","onUpdate:modelValue":e[2]||(e[2]=i=>l.push_umeng=i)},re,512),[[Y,l.push_umeng]])]),_:1}),o(s,{label:"\u4FE1\u9E3D\u63A8\u9001\u901A\u9053",content:"",layout:"small"},{default:n(()=>[F(t("select",{class:"form-select","onUpdate:modelValue":e[3]||(e[3]=i=>l.push_xg=i)},de,512),[[Y,l.push_xg]])]),_:1}),o(s,{label:"\u4EFB\u52A1\u95F4\u9694\u65F6\u95F4",content:"",layout:"small"},{default:n(()=>[t("div",fe,[F(t("input",{type:"text",class:"form-control","onUpdate:modelValue":e[4]||(e[4]=i=>l.task_times=i)},null,512),[[D,l.task_times]]),_e])]),_:1}),o(s,{label:"\u4EFB\u52A1\u6BCF\u5929\u5F00\u59CB\u65F6\u95F4",content:"",layout:"small"},{default:n(()=>[o(u,{modelValue:l.task_day_start_time,"onUpdate:modelValue":e[5]||(e[5]=i=>l.task_day_start_time=i),options:{autoApply:!1,showWeekNumbers:!0,format:"HH:mm:ss",dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}},class:"block w-56 mx-auto form-control"},null,8,["modelValue"])]),_:1}),o(s,{label:"\u4EFB\u52A1\u6BCF\u5929\u7ED3\u675F\u65F6\u95F4",content:"",layout:"small"},{default:n(()=>[o(u,{modelValue:l.task_day_end_time,"onUpdate:modelValue":e[6]||(e[6]=i=>l.task_day_end_time=i),options:{autoApply:!1,showWeekNumbers:!0,format:"HH:mm:ss",dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}},class:"block w-56 mx-auto form-control"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["visible","confirm-loading"])}}}),he=U({__name:"task",setup(V,{expose:b}){const l=P(),E=N(()=>`${l.urlPrefix}${l.apiUrl}${R.taskItems}`),p=T({}),m=[{formatter:"responsiveCollapse",width:40,minWidth:30,hozAlign:"center",resizable:!0,headerSort:!1},{title:"\u6807\u9898",field:"title",fixed:"left",width:150},{title:"\u5185\u5BB9",field:"content"},{title:"\u72B6\u6001",field:"status_name",width:80},{title:"\u65F6\u95F4",hozAlign:"center",field:"created_at",formatter(e){return q(e.getData().created_at,"YY-MM-DD HH:mm")},width:140},{title:"\u64CD\u4F5C",field:"action",fixed:"right",width:50,hozAlign:"center"}],h=w({rangePicker:""}),a=w({visible:!1,confirmLoading:!1}),f=C(),g=()=>{f.value.reload(!0)},c=()=>{a.visible=!0},d=()=>{a.visible=!1};return b({show:c}),(e,s)=>{const u=r("Litepicker"),_=r("h-form-item"),k=r("h-form"),i=I,v=r("h-drawer");return A(),x(v,{size:"modal-xl",title:"\u4EFB\u52A1\u8BB0\u5F55",visible:a.visible,"confirm-loading":a.confirmLoading,onCancel:d},{default:n(()=>[o(i,{ref_key:"tableRef",ref:f,columns:m,ajaxUrl:B(E),config:B(p),queryParam:h},{search:n(()=>[o(k,{layout:"inline"},{default:n(()=>[o(_,{label:"\u521B\u5EFA\u65F6\u95F4",content:"",layout:"inline"},{default:n(()=>[o(u,{modelValue:h.rangePicker,"onUpdate:modelValue":s[0]||(s[0]=$=>h.rangePicker=$),options:{autoApply:!1,singleMode:!1,numberOfColumns:2,numberOfMonths:2,showWeekNumbers:!0,format:"YYYY-MM-DD",dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}},class:"mt-2 form-control sm:mt-0 sm:w-56 2xl:w-full"},null,8,["modelValue"])]),_:1}),t("div",{class:"mt-2 xl:mt-0"},[t("button",{type:"button",class:"w-full btn btn-primary sm:w-16",onClick:g}," \u67E5\u8BE2 ")])]),_:1})]),_:1},8,["ajaxUrl","config","queryParam"])]),_:1},8,["visible","confirm-loading"])}}}),ve=U({__name:"push",setup(V){const b=P(),l=N(()=>`${b.urlPrefix}${b.apiUrl}${R.pushItems}`),E=T({}),p=[{formatter:"responsiveCollapse",width:40,minWidth:30,hozAlign:"center",resizable:!0,headerSort:!1},{title:"\u65F6\u95F4",hozAlign:"center",field:"created_at",formatter(d){return q(d.getData().created_at,"YY-MM-DD HH:mm")},width:140},{title:"\u6807\u9898",field:"title",width:150},{title:"\u5185\u5BB9",field:"content"},{title:"\u72B6\u6001",field:"status_name",width:80},{title:"\u64CD\u4F5C",field:"action",fixed:"right",width:120,hozAlign:"center"}],m=w({rangePicker:""}),h=C(),a=C(),f=C(),g=C(),c=()=>{h.value.reload(!0)};return(d,e)=>{const s=r("Litepicker"),u=r("h-form-item"),_=r("h-form"),k=I,i=r("h-card");return A(),x(i,{title:"\u63A8\u9001\u6D88\u606F",bordered:!1},{header:n(()=>[t("button",{class:"mr-2 shadow-md btn btn-primary",onClick:e[0]||(e[0]=v=>a.value.edit({}))},"\u53D1\u5E03\u63A8\u9001\u6D88\u606F "),t("button",{class:"mr-2 shadow-md btn btn-primary",onClick:e[1]||(e[1]=v=>f.value.edit({}))},"\u8BBE\u7F6E "),t("button",{class:"mr-2 shadow-md btn btn-primary",onClick:e[2]||(e[2]=v=>g.value.show({}))},"\u4EFB\u52A1\u8BB0\u5F55 ")]),default:n(()=>[o(k,{ref_key:"tableRef",ref:h,columns:p,ajaxUrl:B(l),config:B(E),queryParam:m},{search:n(()=>[o(_,{layout:"inline"},{default:n(()=>[o(u,{label:"\u521B\u5EFA\u65F6\u95F4",content:"",layout:"inline"},{default:n(()=>[o(s,{modelValue:m.rangePicker,"onUpdate:modelValue":e[3]||(e[3]=v=>m.rangePicker=v),options:{autoApply:!1,singleMode:!1,numberOfColumns:2,numberOfMonths:2,showWeekNumbers:!0,format:"YYYY-MM-DD",dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}},class:"mt-2 form-control sm:mt-0 sm:w-56 2xl:w-full"},null,8,["modelValue"])]),_:1}),t("div",{class:"mt-2 xl:mt-0"},[t("button",{type:"button",class:"w-full btn btn-primary sm:w-16",onClick:c}," \u67E5\u8BE2 ")])]),_:1})]),_:1},8,["ajaxUrl","config","queryParam"]),o(te,{ref_key:"pushModal",ref:a,onOk:c},null,512),o(pe,{ref_key:"dataModal",ref:f,onOk:c},null,512),o(he,{ref_key:"taskModal",ref:g,onOk:c},null,512)]),_:1})}}});export{ve as default};