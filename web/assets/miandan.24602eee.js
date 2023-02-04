import{r as g,d as M,a7 as N,G as O,l as v,a8 as R,C as G,n as f,e as I,w as a,b as L,h as s,u as l,F as W,ad as H,g as d,B as x,j as D,a as r,ae as C,q as h,aa as F,ab as J,af as K,k as Q}from"./index.980215a1.js";const p={list:"/api/admin/goods_miandan/list",pass:"/api/admin/goods_miandan/pass",feedback:"/api/admin/goods_miandan/feedback",reject:"/api/admin/goods_miandan/reject",upComplete:"/api/admin/goods_miandan/upComplete"};function X(u){return g({url:p.pass,method:"post",data:u})}function Z(u){return g({url:p.feedback,method:"post",data:u})}function ee(u){return g({url:p.reject,method:"post",data:u})}function te(u){return g({url:p.upComplete,method:"post",data:u})}const ae=d("option",{value:""},"\u5168\u90E8",-1),se=d("option",{value:"1"},"\u63D0\u4EA4\u5BA1\u6838",-1),oe=d("option",{value:"2"},"\u63A8\u5E7F\u4E2D",-1),ne=d("option",{value:"3"},"\u63A8\u5E7F\u5B8C\u6210",-1),ue=d("option",{value:"0"},"\u8349\u7A3F",-1),ie=d("option",{value:"-1"},"\u62D2\u7EDD",-1),re={class:"mt-2 xl:mt-0"},le=M({__name:"miandan",setup(u){const{proxy:w}=K(),b=N(),E=O(()=>`${b.urlPrefix}${b.apiUrl}${p.list}`),_=v({modal:{feedback:!1}}),c=v({id:0,feedback:""}),A=R({}),B=[{formatter:"responsiveCollapse",width:40,minWidth:30,hozAlign:"center",resizable:!0,headerSort:!1},{title:"",field:"title",formatter(e){return r(`
          <div class="flex items-center">
            <div class="w-9 h-9 image-fit zoom-in">
              <a target="_blank" href="${e.getData().item_url}">
                <img class="border-white rounded-lg shadow-md" src="${e.getData().pic_url||""}" />
              </a>
            </div>
            <div class="ml-4">
              <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                ${e.getData().d_title||""}
              </div>
              <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                ${e.getData().title||""}
              </div>
              <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                ${e.getData().platform_type_name||""}
              </div>
              <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                ${e.getData().feedback||""}
              </div>
            </div>
          </div>
          `)[0]},download:!0},{title:"\u4EF7\u683C",width:120,field:"price",sorter:!0,formatter(e){return r(`
          <div class="flex flex-col items-start">
            <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
              \u5238\u540E\u4EF7:${e.getData().coupon_price}
            </div>
            <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
              \u798F\u5229\u91D1:${e.getData().rebate_amount}
            </div>
            <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
              \u5230\u624B\u4EF7:${(e.getData().coupon_price-e.getData().rebate_amount).toFixed(2)}
            </div>
          </div>
          `)[0]}},{title:"\u8DD1\u91CF/\u9884\u8BA1",hozAlign:"center",width:120,field:"",formatter(e){return e.getData().promotion_orders+"/"+e.getData().rebate_orders}},{title:"\u72B6\u6001",hozAlign:"center",width:120,field:"status_name",sorter:!0},{title:"\u6D3B\u52A8\u65F6\u95F4",field:"",width:120,formatter(e){return r(`
          <div class="flex flex-col items-center">
            <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
            ${C(e.getData().activity_start_time)}
            </div>
            <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
              ${C(e.getData().activity_end_time)}
            </div>
          </div>
          `)[0]}},{title:"\u53D1\u5E03\u4EBA",width:120,field:"user.nick_name"},{title:"\u64CD\u4F5C",field:"action",width:250,formatter(e){const t=r(`<div class="flex items-center lg:justify-center">
        ${e.getData().status===1?`<a class="flex items-center mr-3 action-pass" href="javascript:;">
                <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> \u901A\u8FC7
              </a>`:""}
        ${e.getData().status===1?`<a class="flex items-center mr-3 text-danger action-reject" href="javascript:;">
                <i data-lucide="trash-2" class="w-4 h-4 mr-1"></i> \u62D2\u7EDD
              </a>`:""}  
        ${e.getData().status===1?`<a class="flex items-center mr-3 text-danger action-feedback" href="javascript:;">
                 \u53CD\u9988
              </a>`:""}
              ${e.getData().status==2?`<a class="flex items-center mr-3 text-danger action-complete" href="javascript:;">
                <i data-lucide="trash-2" class="w-4 h-4 mr-1"></i> \u5B8C\u6210\u63A8\u5E7F
              </a>`:""}
              </div>`);return r(t).find(".action-pass").on("click",function(n){j(e.getData())}),r(t).find(".action-reject").on("click",function(n){$(e.getData())}),r(t).find(".action-feedback").on("click",function(n){y(e.getData())}),r(t).find(".action-complete").on("click",function(n){V(e.getData())}),t[0]}}],o=v({rangePicker:"",status:"",startTime:"",endTime:"",url:""}),m=G(),$=e=>{const t=w.$confirm;t({title:"\u63D0\u793A",content:"\u771F\u7684\u8981\u62D2\u7EDD\u4E48 ?",onOk:()=>{ee({id:e.id}).then(()=>{h.success("\u5DF2\u62D2\u7EDD"),m.value.reload()})},onCancel(){}})},y=e=>{_.modal.feedback=!0,c.id=e.id,c.feedback=""},j=e=>{const t=w.$confirm;t({title:"\u63D0\u793A",content:"\u786E\u5B9A\u7ACB\u523B\u5BA1\u6838\u901A\u8FC7\u4E48 ?",onOk:()=>{X({id:e.id}).then(n=>{h.success(n.message),m.value.reload()})},onCancel(){}})},V=e=>{te({id:e.id}).then(()=>{h.success("\u4E0A\u67B6\u6210\u529F"),m.value.reload()})},k=()=>{o.startTime=F(o.rangePicker)[0],o.endTime=F(o.rangePicker)[0],m.value.reload(!0)},P=()=>{Z({id:c.id,feedback:c.feedback}).then(e=>{h.success(e.message),_.modal.feedback=!1,m.value.reload(!0)})};return(e,t)=>{const n=f("h-form-item"),T=f("Litepicker"),U=f("h-form"),Y=J,q=f("FormTextarea"),z=f("h-modal"),S=f("h-card");return L(),I(S,{bordered:!1,title:"\u514D\u5355\u5BA1\u6838"},{header:a(()=>[]),default:a(()=>[s(Y,{ref_key:"tableRef",ref:m,columns:B,ajaxUrl:l(E),config:l(A),queryParam:o},{search:a(()=>[s(U,{layout:"inline"},{default:a(()=>[s(n,{label:"\u5546\u54C1\u5730\u5740",content:"",layout:"inline"},{default:a(()=>[s(l(W),{modelValue:o.url,"onUpdate:modelValue":t[0]||(t[0]=i=>o.url=i),type:"text",class:"mt-2 sm:mt-0 sm:w-40 2xl:w-full"},null,8,["modelValue"])]),_:1}),s(n,{label:"\u72B6\u6001",content:"",layout:"inline"},{default:a(()=>[s(l(H),{modelValue:o.status,"onUpdate:modelValue":t[1]||(t[1]=i=>o.status=i),class:"w-full mt-2 sm:mt-0 sm:w-auto",onChange:k},{default:a(()=>[ae,se,oe,ne,ue,ie]),_:1},8,["modelValue"])]),_:1}),s(n,{label:"\u521B\u5EFA\u65F6\u95F4",content:"",layout:"inline"},{default:a(()=>[s(T,{modelValue:o.rangePicker,"onUpdate:modelValue":t[2]||(t[2]=i=>o.rangePicker=i),options:{autoApply:!1,singleMode:!1,numberOfColumns:2,numberOfMonths:2,showWeekNumbers:!0,format:"YYYY-MM-DD",dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}},class:"mt-2 sm:mt-0 sm:w-56 2xl:w-full"},null,8,["modelValue"])]),_:1}),d("div",re,[s(l(x),{variant:"primary",type:"button",class:"w-full sm:w-16",onClick:k},{default:a(()=>[D(" \u67E5\u8BE2 ")]),_:1})])]),_:1})]),_:1},8,["ajaxUrl","config","queryParam"]),s(z,{title:"\u5BA1\u6838\u53CD\u9988",visible:_.modal.feedback},{footer:a(()=>[s(l(x),{variant:"primary",type:"button",onClick:t[4]||(t[4]=i=>_.modal.feedback=!1),class:"w-20 mr-1 btn btn-outline-secondary"},{default:a(()=>[D(" \u53D6\u6D88 ")]),_:1}),s(l(x),{variant:"primary",type:"button",class:"w-20",onClick:P},{default:a(()=>[D(" \u63D0\u4EA4 ")]),_:1})]),default:a(()=>[s(q,{modelValue:c.feedback,"onUpdate:modelValue":t[3]||(t[3]=i=>c.feedback=i),rows:4,placeholder:"\u95EE\u9898\u53CD\u9988\u63CF\u8FF0"},null,8,["modelValue"])]),_:1},8,["visible"])]),_:1})}}}),ce=Q(le,[["__file","/Users/wu./Documents/os/web/www/web/src/views/user/admin/miandan.vue"]]);export{ce as default};
