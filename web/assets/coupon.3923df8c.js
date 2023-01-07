import{r as g,d as U,a7 as P,G as T,a8 as Y,l as O,C as M,n as p,e as q,w as s,b as z,h as a,j as f,u as o,B as _,ad as L,F as v,g as r,a as d,a9 as N,q as h,aa as F,ab as R,k as S}from"./index.37edada6.js";const c={couponList:"/api/admin/goods_apply/list",pass:"/api/admin/goods_apply/pass",reject:"/api/admin/goods_apply/reject",upOnline:"/api/admin/goods_apply/upOnline",pass_all:"/api/admin/goods_apply/pass_all"};function G(i){return g({url:c.pass,method:"post",data:i})}function H(i){return g({url:c.reject,method:"post",data:i})}function W(i){return g({url:c.upOnline,method:"post",data:i})}function I(i){return g({url:c.pass_all,method:"post",data:i})}const J={class:"mt-2 xl:mt-0"},K=r("option",{value:""},"\u5168\u90E8",-1),Q=r("option",{value:"2"},"\u901A\u8FC7",-1),X=r("option",{value:"1"},"\u5BA1\u6838\u4E2D",-1),Z=r("option",{value:"0"},"\u8349\u7A3F",-1),ee=r("option",{value:"-1"},"\u62D2\u7EDD",-1),te=r("option",{value:"-2"},"\u4E0B\u67B6",-1),ae={class:"mt-2 xl:mt-0"},se=U({__name:"coupon",setup(i){const D=P(),b=T(()=>`${D.urlPrefix}${D.apiUrl}${c.couponList}`),k=Y({}),C=[{formatter:"responsiveCollapse",width:40,minWidth:30,hozAlign:"center",resizable:!0,headerSort:!1},{title:"",field:"title",formatter(e){return d(`
          <div class="flex items-center">
            <div class="w-9 h-9 image-fit zoom-in">
              <a target="_blank" href="${e.getData().item_url}" class="font-medium whitespace-nowrap">
              <img class="border-white rounded-lg shadow-md" src="${e.getData().pic_url||""}" />
              </a>
            </div>
            <div class="ml-4">
              <a target="_blank" href="${e.getData().item_url}" class="font-medium whitespace-nowrap">
              <div class="font-medium whitespace-nowrap">
                ${e.getData().d_title||""}
              </div>
              </a>

              <a target="_blank" href="${e.getData().item_url}" class="font-medium whitespace-nowrap">
              <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                ${e.getData().title||""}
              </div>
              </a>
            </div>
          </div>
          `)[0]},download:!0},{title:"\u5238",hozAlign:"center",width:80,field:"money",formatter(e){return d(`<a target="_blank" href="${e.getData().coupon_url}" class="underline decoration-dotted">
        ${e.getData().money}
        </a>`)[0]}},{title:"\u4EF7\u683C",width:80,field:"price",sorter:!0,formatter(e){return d(`<a target="_blank" href="${e.getData().item_url}">
          ${e.getData().price}
        </a>`)[0]}},{title:"\u9500\u91CF",width:80,field:"volume"},{title:"\u72B6\u6001",width:80,field:"status_name",sorter:!0},{title:"\u680F\u76EE",field:"cid1",width:80},{title:"\u5E97\u94FA",field:"user_type",width:80},{title:"\u65F6\u95F4",width:140,field:"updated_at",formatter(e){return N(e.getData().created_at,"YY-MM-DD HH:mm")}},{title:"\u65E5/2\u5C0F\u65F6",width:80,field:"data.day_sales",formatter(e){var t,n;return`${((t=e.getData().data)==null?void 0:t.day_sales)||"0"}/${((n=e.getData().data)==null?void 0:n.sales2h)||"0"}`}},{title:"\u53D1\u5E03\u4EBA",width:120,field:"user.nick_name"},{title:"\u64CD\u4F5C",field:"action",width:120,formatter(e){const t=d(`<div class="flex items-center lg:justify-center">
        ${e.getData().status===1?`<a class="flex items-center mr-3 action-pass" href="javascript:;">
                <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> \u901A\u8FC7
              </a>`:""}
        ${e.getData().status===1?`<a class="flex items-center text-danger action-reject" href="javascript:;">
                <i data-lucide="trash-2" class="w-4 h-4 mr-1"></i> \u62D2\u7EDD
              </a>`:""}
              ${e.getData().status<0?`<a class="flex items-center text-danger action-uponline" href="javascript:;">
                <i data-lucide="trash-2" class="w-4 h-4 mr-1"></i> \u4E0A\u67B6
              </a>`:""}
              </div>`);return d(t).find(".action-pass").on("click",function(n){B(e.getData())}),d(t).find(".action-reject").on("click",function(n){E(e.getData())}),d(t).find(".action-uponline").on("click",function(n){$(e.getData())}),t[0]}}],u=O({rangePicker:"",status:0,startTime:"",endTime:"",item_id:"",url:""}),m=M(),E=e=>{H({id:e.id}).then(()=>{h.success("\u5DF2\u62D2\u7EDD"),m.value.reload()})},B=e=>{G({id:e.id}).then(t=>{h.success(t.message),m.value.reload()})},$=e=>{W({id:e.id}).then(()=>{h.success("\u4E0A\u67B6\u6210\u529F"),m.value.reload()})},y=e=>{I({force:e}).then(()=>{h.success("\u6279\u91CF\u5BA1\u6838\u5B8C\u6210"),m.value.reload()})},w=()=>{u.startTime=F(u.rangePicker)[0],u.endTime=F(u.rangePicker)[0],m.value.reload(!0)};return(e,t)=>{const n=p("h-form-item"),A=p("Litepicker"),x=p("h-form"),V=R,j=p("h-card");return z(),q(j,{bordered:!1,title:"\u4F18\u60E0\u5238\u5BA1\u6838"},{header:s(()=>[a(o(_),{variant:"primary",class:"mr-2 shadow-md",onClick:t[0]||(t[0]=l=>y(0))},{default:s(()=>[f("\u4E00\u952E\u6279\u91CF\u5BA1\u6838 ")]),_:1}),a(o(_),{variant:"primary",class:"mr-2 shadow-md",onClick:t[1]||(t[1]=l=>y(1))},{default:s(()=>[f("\u4E00\u952E\u6279\u91CF\u5F3A\u5236\u5BA1\u6838 ")]),_:1})]),search:s(()=>[a(x,{layout:"inline"},{default:s(()=>[a(n,{label:"\u72B6\u6001",content:"",layout:"inline"},{default:s(()=>[a(o(L),{modelValue:u.status,"onUpdate:modelValue":t[4]||(t[4]=l=>u.status=l),class:"w-full mt-2 sm:mt-0 sm:w-auto",onChange:w},{default:s(()=>[K,Q,X,Z,ee,te]),_:1},8,["modelValue"])]),_:1}),a(n,{label:"\u5546\u54C1\u7F16\u53F7",content:"",layout:"inline"},{default:s(()=>[a(o(v),{modelValue:u.item_id,"onUpdate:modelValue":t[5]||(t[5]=l=>u.item_id=l),type:"text",class:"mt-2 sm:mt-0 sm:w-40 2xl:w-full"},null,8,["modelValue"])]),_:1}),a(n,{label:"\u5546\u54C1\u5730\u5740",content:"",layout:"inline"},{default:s(()=>[a(o(v),{modelValue:u.url,"onUpdate:modelValue":t[6]||(t[6]=l=>u.url=l),type:"text",class:"mt-2 sm:mt-0 sm:w-40 2xl:w-full"},null,8,["modelValue"])]),_:1}),r("div",ae,[a(o(_),{variant:"primary",type:"button",class:"w-full sm:w-16",onClick:w},{default:s(()=>[f(" \u67E5\u8BE2 ")]),_:1})])]),_:1})]),default:s(()=>[a(V,{ref_key:"tableRef",ref:m,columns:C,ajaxUrl:o(b),config:o(k),queryParam:u},{search:s(()=>[a(x,{layout:"inline"},{default:s(()=>[a(n,{label:"\u5546\u54C1\u7F16\u53F7",content:"",layout:"inline"},{default:s(()=>[a(o(v),{modelValue:u.item_id,"onUpdate:modelValue":t[2]||(t[2]=l=>u.item_id=l),type:"text",class:"mt-2 sm:mt-0 sm:w-40 2xl:w-full"},null,8,["modelValue"])]),_:1}),a(n,{label:"\u521B\u5EFA\u65F6\u95F4",content:"",layout:"inline"},{default:s(()=>[a(A,{modelValue:u.rangePicker,"onUpdate:modelValue":t[3]||(t[3]=l=>u.rangePicker=l),options:{autoApply:!1,singleMode:!1,numberOfColumns:2,numberOfMonths:2,showWeekNumbers:!0,format:"YYYY-MM-DD",dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}},class:"mt-2 sm:mt-0 sm:w-56 2xl:w-full"},null,8,["modelValue"])]),_:1}),r("div",J,[a(o(_),{variant:"primary",type:"button",class:"w-full sm:w-16",onClick:w},{default:s(()=>[f(" \u67E5\u8BE2 ")]),_:1})])]),_:1})]),_:1},8,["ajaxUrl","config","queryParam"])]),_:1})}}}),ne=S(se,[["__file","/Users/wu./Documents/os/web/www/web/src/views/user/admin/coupon.vue"]]);export{ne as default};
