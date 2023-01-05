import{r as h,d as N,a2 as O,G as R,l as b,a3 as I,C as G,n as i,e as H,w as a,b as L,h as o,g as d,u as f,B as v,j as k,a as l,a4 as W,q as g,a5 as F,a6 as J,a8 as K,k as Q}from"./index.7108f388.js";const p={list:"/api/admin/goods_miandan/list",pass:"/api/admin/goods_miandan/pass",feedback:"/api/admin/goods_miandan/feedback",reject:"/api/admin/goods_miandan/reject",upComplete:"/api/admin/goods_miandan/upComplete"};function X(s){return h({url:p.pass,method:"post",data:s})}function Z(s){return h({url:p.feedback,method:"post",data:s})}function ee(s){return h({url:p.reject,method:"post",data:s})}function te(s){return h({url:p.upComplete,method:"post",data:s})}const ae=d("option",{value:""},"\u5168\u90E8",-1),oe=d("option",{value:"1"},"\u63D0\u4EA4\u5BA1\u6838",-1),ne=d("option",{value:"2"},"\u63A8\u5E7F\u4E2D",-1),se=d("option",{value:"3"},"\u63A8\u5E7F\u5B8C\u6210",-1),ue=d("option",{value:"0"},"\u8349\u7A3F",-1),ie=d("option",{value:"-1"},"\u62D2\u7EDD",-1),re={class:"mt-2 xl:mt-0"},le=N({__name:"miandan",setup(s){const{proxy:w}=K(),x=O(),E=R(()=>`${x.urlPrefix}${x.apiUrl}${p.list}`),_=b({modal:{feedback:!1}}),c=b({id:0,feedback:""}),A=I({}),B=[{formatter:"responsiveCollapse",width:40,minWidth:30,hozAlign:"center",resizable:!0,headerSort:!1},{title:"",field:"title",formatter(e){return l(`
          <div class="flex items-center">
            <div class="w-9 h-9 image-fit zoom-in">
              <a target="_blank" href="${e.getData().item_url}">
                <img class="border-white rounded-lg shadow-md" src="${e.getData().pic_url||""}" />
              </a>
            </div>
            <div class="ml-4">
              <a target="_blank" href="${e.getData().item_url}" >
              <div class="font-medium ">
                ${e.getData().d_title||""}
              </div>
              </a>

              <a target="_blank" href="${e.getData().item_url}" >
              <div class="text-slate-500 text-xs mt-0.5">
                ${e.getData().title||""}
              </div>
              </a>
            </div>
          </div>
          `)[0]},download:!0},{title:"\u4EF7\u683C",width:120,field:"price",sorter:!0,formatter(e){return l(`
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
          `)[0]}},{title:"\u8DD1\u91CF/\u9500\u91CF",hozAlign:"center",width:120,field:"",formatter(e){return e.getData().promotion_orders+"/"+e.getData().volume}},{title:"\u72B6\u6001",hozAlign:"center",width:120,field:"status_name",sorter:!0},{title:"\u65F6\u95F4",width:140,field:"updated_at",formatter(e){return W(e.getData().updated_at,"YY-MM-DD HH:mm")}},{title:"\u53D1\u5E03\u4EBA",width:120,field:"user.nick_name"},{title:"\u53CD\u9988",width:120,field:"feedback"},{title:"\u64CD\u4F5C",field:"action",width:250,formatter(e){const t=l(`<div class="flex items-center lg:justify-center">
        ${e.getData().status===1?`<a class="flex items-center mr-3 action-pass" href="javascript:;">
                <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> \u901A\u8FC7
              </a>`:""}
        ${e.getData().status===1?`<a class="flex items-center text-danger action-reject" href="javascript:;">
                <i data-lucide="trash-2" class="w-4 h-4 mr-1"></i> \u62D2\u7EDD
              </a>`:""} | ${e.getData().status===1?`<a class="flex items-center text-danger action-feedback" href="javascript:;">
                 \u53CD\u9988
              </a>`:""}
              ${e.getData().status==2?`<a class="flex items-center text-danger action-complete" href="javascript:;">
                <i data-lucide="trash-2" class="w-4 h-4 mr-1"></i> \u5B8C\u6210\u63A8\u5E7F
              </a>`:""}
              </div>`);return l(t).find(".action-pass").on("click",function(r){j(e.getData())}),l(t).find(".action-reject").on("click",function(r){$(e.getData())}),l(t).find(".action-feedback").on("click",function(r){y(e.getData())}),l(t).find(".action-complete").on("click",function(r){V(e.getData())}),t[0]}}],n=b({rangePicker:"",status:"",startTime:"",endTime:"",url:""}),m=G(),$=e=>{const t=w.$confirm;t({title:"\u63D0\u793A",content:"\u771F\u7684\u8981\u62D2\u7EDD\u4E48 ?",onOk:()=>{ee({id:e.id}).then(()=>{g.success("\u5DF2\u62D2\u7EDD"),m.value.reload()})},onCancel(){}})},y=e=>{_.modal.feedback=!0,c.id=e.id,c.feedback=""},j=e=>{const t=w.$confirm;t({title:"\u63D0\u793A",content:"\u786E\u5B9A\u7ACB\u523B\u5BA1\u6838\u901A\u8FC7\u4E48 ?",onOk:()=>{X({id:e.id}).then(r=>{g.success(r.message),m.value.reload()})},onCancel(){}})},V=e=>{te({id:e.id}).then(()=>{g.success("\u4E0A\u67B6\u6210\u529F"),m.value.reload()})},C=()=>{n.startTime=F(n.rangePicker)[0],n.endTime=F(n.rangePicker)[0],m.value.reload(!0)},T=()=>{Z({id:c.id,feedback:c.feedback}).then(e=>{g.success(e.message),_.modal.feedback=!1,m.value.reload(!0)})};return(e,t)=>{const r=i("FormInput"),D=i("h-form-item"),P=i("FormSelect"),U=i("Litepicker"),Y=i("h-form"),M=J,S=i("FormTextarea"),q=i("h-modal"),z=i("h-card");return L(),H(z,{bordered:!1,title:"\u514D\u5355\u5BA1\u6838"},{header:a(()=>[]),default:a(()=>[o(M,{ref_key:"tableRef",ref:m,columns:B,ajaxUrl:f(E),config:f(A),queryParam:n},{search:a(()=>[o(Y,{layout:"inline"},{default:a(()=>[o(D,{label:"\u5546\u54C1\u5730\u5740",content:"",layout:"inline"},{default:a(()=>[o(r,{modelValue:n.url,"onUpdate:modelValue":t[0]||(t[0]=u=>n.url=u),type:"text",class:"mt-2 sm:mt-0 sm:w-40 2xl:w-full"},null,8,["modelValue"])]),_:1}),o(D,{label:"\u72B6\u6001",content:"",layout:"inline"},{default:a(()=>[o(P,{modelValue:n.status,"onUpdate:modelValue":t[1]||(t[1]=u=>n.status=u),class:"mt-2 w-full sm:mt-0 sm:w-auto",onChange:C},{default:a(()=>[ae,oe,ne,se,ue,ie]),_:1},8,["modelValue"])]),_:1}),o(D,{label:"\u521B\u5EFA\u65F6\u95F4",content:"",layout:"inline"},{default:a(()=>[o(U,{modelValue:n.rangePicker,"onUpdate:modelValue":t[2]||(t[2]=u=>n.rangePicker=u),options:{autoApply:!1,singleMode:!1,numberOfColumns:2,numberOfMonths:2,showWeekNumbers:!0,format:"YYYY-MM-DD",dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}},class:"mt-2 sm:mt-0 sm:w-56 2xl:w-full"},null,8,["modelValue"])]),_:1}),d("div",re,[o(f(v),{variant:"primary",type:"button",class:"w-full sm:w-16",onClick:C},{default:a(()=>[k(" \u67E5\u8BE2 ")]),_:1})])]),_:1})]),_:1},8,["ajaxUrl","config","queryParam"]),o(q,{title:"\u5BA1\u6838\u53CD\u9988",visible:_.modal.feedback},{footer:a(()=>[o(f(v),{variant:"primary",type:"button",onClick:t[4]||(t[4]=u=>_.modal.feedback=!1),class:"btn btn-outline-secondary mr-1 w-20"},{default:a(()=>[k(" \u53D6\u6D88 ")]),_:1}),o(f(v),{variant:"primary",type:"button",class:"w-20",onClick:T},{default:a(()=>[k(" \u63D0\u4EA4 ")]),_:1})]),default:a(()=>[o(S,{modelValue:c.feedback,"onUpdate:modelValue":t[3]||(t[3]=u=>c.feedback=u),rows:4,placeholder:"\u95EE\u9898\u53CD\u9988\u63CF\u8FF0"},null,8,["modelValue"])]),_:1},8,["visible"])]),_:1})}}}),ce=Q(le,[["__file","/Users/wu./Documents/os/web/www/web/src/views/user/admin/miandan.vue"]]);export{ce as default};
