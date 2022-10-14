import{r as M,h as B,j as D,k as U,t as j,a as x,b as F,w as l,l as d,n as P,e as N,p as n,x as L,y as T,v as O,u as C,$ as Y,q as R,s,Y as S,D as q,Z as W,C as V,c as z,F as I,d as b,a0 as $,a1 as G}from"./index.e66323b7.js";import{p as Z}from"./pick.dfcbe59d.js";const A={list:"/api/admin/activity/list",adds:"/api/admin/activity/adds",update:"/api/admin/activity/update"};function H(h){return M({timeout:6e4,url:A.adds,method:"post",data:h})}const J=B({__name:"edit",emits:["ok"],setup(h,{expose:f,emit:k}){const r=D({start_time:"",end_time:"",content:""}),v={},a=D({visible:!1,confirmLoading:!1}),p=()=>{a.visible=!1},i=U(v,j(r)),_=e=>{a.visible=!0,O(()=>{Object.assign(r,{start_time:"",end_time:"",content:""}),Object.assign(r,Z(e,["content"]))})},o=e=>{if(a.confirmLoading=!0,i.value.$touch(),i.value.$invalid)i.value.$errors,a.confirmLoading=!1;else{const t=C(r);t.start_time&&(t.start_time=Y(t.start_time)),t.end_time&&(t.end_time=Y(t.end_time)),H(Object.assign(t,{plan:e})).then(()=>{R.success("\u53D1\u5E03\u6210\u529F"),a.confirmLoading=!1,k("ok",t),a.visible=!1})}};return f({edit:_}),(e,t)=>{const g=s("Litepicker"),c=s("h-form-item"),w=s("h-form"),y=s("h-spin"),u=s("LoadingIcon"),E=s("h-modal");return x(),F(E,{title:"\u6D3B\u52A8\u5546\u54C1",size:"modal-xl",visible:a.visible,"confirm-loading":a.confirmLoading,onCancel:p},{footer:l(()=>[d("button",{class:"w-24 mb-2 mr-1 btn btn-primary",onClick:t[3]||(t[3]=m=>o(11))},[P(" \u6279\u91CF\u6DFB\u52A0 "),a.confirmLoading?(x(),F(u,{key:0,icon:"oval",color:"white",class:"w-4 h-4 ml-2"})):N("",!0)])]),default:l(()=>[n(y,{spinning:a.confirmLoading},{default:l(()=>[n(w,{layout:"small"},{default:l(()=>[n(c,{label:"\u5F00\u59CB\u65F6\u95F4",content:"",layout:"small"},{default:l(()=>[n(g,{modelValue:r.start_time,"onUpdate:modelValue":t[0]||(t[0]=m=>r.start_time=m),options:{autoApply:!1,showWeekNumbers:!0,format:"YYYY-MM-DD",dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}},class:"block w-full mx-auto form-control"},null,8,["modelValue"])]),_:1}),n(c,{label:"\u7ED3\u675F\u65F6\u95F4",content:"",layout:"small"},{default:l(()=>[n(g,{modelValue:r.end_time,"onUpdate:modelValue":t[1]||(t[1]=m=>r.end_time=m),options:{autoApply:!1,showWeekNumbers:!0,format:"YYYY-MM-DD",dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}},class:"block w-full mx-auto form-control"},null,8,["modelValue"])]),_:1}),n(c,{label:"\u5185\u5BB9",content:"",layout:"small"},{default:l(()=>[L(d("textarea",{class:"form-control","onUpdate:modelValue":t[2]||(t[2]=m=>r.content=m),rows:8},null,512),[[T,r.content]])]),_:1})]),_:1})]),_:1},8,["spinning"])]),_:1},8,["visible","confirm-loading"])}}}),X=B({__name:"activity",setup(h){const f=S(),k=q(()=>`${f.urlPrefix}${f.apiUrl}${A.list}`),r=W({}),v=[{formatter:"responsiveCollapse",width:40,minWidth:30,hozAlign:"center",resizable:!0,headerSort:!1},{title:"\u56FE\u7247",width:60,field:"pic_url",formatter(o){var e;return b(`<a target="_blank" href="${o.getData().item_url}">
          <img src="${(e=o.getData().goods)==null?void 0:e.pic_url}" />
        </a>`)[0]}},{title:"\u6807\u9898",field:"title",formatter(o){var e;return b(`<a target="_blank" href="${o.getData().item_url}">
          ${(e=o.getData().goods)==null?void 0:e.title}
        </a>`)[0]}},{title:"\u4EF7\u683C",width:150,field:"",formatter(o){return o.getData().price}},{title:"\u9500\u91CF",width:80,field:"",formatter(o){var e;return(e=o.getData().goods)==null?void 0:e.volume}},{title:"\u65E5\u9500\u91CF",width:100,field:"",formatter(o){var e;return(e=o.getData().goods_data)==null?void 0:e.day_sales}},{title:"2\u5C0F\u65F6\u9500\u91CF",width:100,field:"",formatter(o){var e;return(e=o.getData().goods_data)==null?void 0:e.sales2h}},{title:"\u64CD\u4F5C",field:"action",width:120,formatter(o){if(o.getData().status===0){const e=b('<a class="flex items-center" href="javascript:;">\u901A\u8FC7</a>');return b(e).on("click",function(t){}),e[0]}return""}}],a=D({rangePicker:"",username:"",status:0,startTime:"",endTime:""}),p=V(),i=V(),_=()=>{a.startTime=$(a.rangePicker)[0],a.endTime=$(a.rangePicker)[0],p.value.reload(!0)};return(o,e)=>{const t=s("h-form-item"),g=s("Litepicker"),c=s("h-form"),w=G,y=s("h-card");return x(),z(I,null,[n(y,{bordered:!1,title:"\u6D3B\u52A8"},{header:l(()=>[d("button",{class:"btn btn-primary mr-2 shadow-md",onClick:e[0]||(e[0]=u=>i.value.edit({}))},"\u65B0\u5EFA ")]),default:l(()=>[n(w,{ref_key:"tableRef",ref:p,columns:v,ajaxUrl:C(k),config:C(r),queryParam:a},{search:l(()=>[n(c,{layout:"inline"},{default:l(()=>[n(t,{label:"\u7528\u6237\u540D",content:"",layout:"inline"},{default:l(()=>[L(d("input",{"onUpdate:modelValue":e[1]||(e[1]=u=>a.username=u),type:"text",class:"form-control mt-2 sm:mt-0 sm:w-40 2xl:w-full"},null,512),[[T,a.username]])]),_:1}),n(t,{label:"\u521B\u5EFA\u65F6\u95F4",content:"",layout:"inline"},{default:l(()=>[n(g,{modelValue:a.rangePicker,"onUpdate:modelValue":e[2]||(e[2]=u=>a.rangePicker=u),options:{autoApply:!1,singleMode:!1,numberOfColumns:2,numberOfMonths:2,showWeekNumbers:!0,format:"YYYY-MM-DD",dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}},class:"form-control mt-2 sm:mt-0 sm:w-56 2xl:w-full"},null,8,["modelValue"])]),_:1}),d("div",{class:"mt-2 xl:mt-0"},[d("button",{type:"button",class:"btn btn-primary w-full sm:w-16",onClick:_}," \u67E5\u8BE2 ")])]),_:1})]),_:1},8,["ajaxUrl","config","queryParam"])]),_:1}),n(J,{ref_key:"modal",ref:i,onOk:_},null,512)],64)}}});export{X as default};