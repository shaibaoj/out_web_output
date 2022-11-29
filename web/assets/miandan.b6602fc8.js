import{r as g,h as z,Z as S,G as O,j as h,$ as R,C as N,l as m,b as G,w as n,a as H,q as r,x as D,y as w,m as a,a3 as L,u as x,d as l,a0 as W,s as _,a1 as C,a2 as I,a4 as Z,_ as J}from"./index.92deb929.js";const f={list:"/api/admin/goods_miandan/list",pass:"/api/admin/goods_miandan/pass",feedback:"/api/admin/goods_miandan/feedback",reject:"/api/admin/goods_miandan/reject",upComplete:"/api/admin/goods_miandan/upComplete"};function K(u){return g({url:f.pass,method:"post",data:u})}function Q(u){return g({url:f.feedback,method:"post",data:u})}function X(u){return g({url:f.reject,method:"post",data:u})}function ee(u){return g({url:f.upComplete,method:"post",data:u})}const te=a("option",{value:""},"\u5168\u90E8",-1),ae=a("option",{value:"1"},"\u63D0\u4EA4\u5BA1\u6838",-1),oe=a("option",{value:"2"},"\u63A8\u5E7F\u4E2D",-1),se=a("option",{value:"3"},"\u63A8\u5E7F\u5B8C\u6210",-1),ne=a("option",{value:"0"},"\u8349\u7A3F",-1),ue=a("option",{value:"-1"},"\u62D2\u7EDD",-1),ie=[te,ae,oe,se,ne,ue],re=z({__name:"miandan",setup(u){const{proxy:b}=Z(),v=S(),F=O(()=>`${v.urlPrefix}${v.apiUrl}${f.list}`),p=h({modal:{feedback:!1}}),d=h({id:0,feedback:""}),E=R({}),A=[{formatter:"responsiveCollapse",width:40,minWidth:30,hozAlign:"center",resizable:!0,headerSort:!1},{title:"",field:"title",formatter(e){return l(`
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
              </div>`);return l(t).find(".action-pass").on("click",function(s){B(e.getData())}),l(t).find(".action-reject").on("click",function(s){$(e.getData())}),l(t).find(".action-feedback").on("click",function(s){y(e.getData())}),l(t).find(".action-complete").on("click",function(s){j(e.getData())}),t[0]}}],o=h({rangePicker:"",status:"",startTime:"",endTime:"",url:""}),c=N(),$=e=>{const t=b.$confirm;t({title:"\u63D0\u793A",content:"\u771F\u7684\u8981\u62D2\u7EDD\u4E48 ?",onOk:()=>{X({id:e.id}).then(()=>{_.success("\u5DF2\u62D2\u7EDD"),c.value.reload()})},onCancel(){}})},y=e=>{p.modal.feedback=!0,d.id=e.id,d.feedback=""},B=e=>{const t=b.$confirm;t({title:"\u63D0\u793A",content:"\u786E\u5B9A\u7ACB\u523B\u5BA1\u6838\u901A\u8FC7\u4E48 ?",onOk:()=>{K({id:e.id}).then(s=>{_.success(s.message),c.value.reload()})},onCancel(){}})},j=e=>{ee({id:e.id}).then(()=>{_.success("\u4E0A\u67B6\u6210\u529F"),c.value.reload()})},k=()=>{o.startTime=C(o.rangePicker)[0],o.endTime=C(o.rangePicker)[0],c.value.reload(!0)},M=()=>{Q({id:d.id,feedback:d.feedback}).then(e=>{_.success(e.message),p.modal.feedback=!1,c.value.reload(!0)})};return(e,t)=>{const s=m("h-form-item"),P=m("Litepicker"),U=m("h-form"),T=I,V=m("ModalFooter"),Y=m("h-modal"),q=m("h-card");return H(),G(q,{bordered:!1,title:"\u514D\u5355\u5BA1\u6838"},{header:n(()=>[]),default:n(()=>[r(T,{ref_key:"tableRef",ref:c,columns:A,ajaxUrl:x(F),config:x(E),queryParam:o},{search:n(()=>[r(U,{layout:"inline"},{default:n(()=>[r(s,{label:"\u5546\u54C1\u5730\u5740",content:"",layout:"inline"},{default:n(()=>[D(a("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>o.url=i),type:"text",class:"mt-2 form-control sm:mt-0 sm:w-40 2xl:w-full"},null,512),[[w,o.url]])]),_:1}),r(s,{label:"\u72B6\u6001",content:"",layout:"inline"},{default:n(()=>[D(a("select",{"onUpdate:modelValue":t[1]||(t[1]=i=>o.status=i),class:"w-full mt-2 form-select sm:mt-0 sm:w-auto",onChange:k},ie,544),[[L,o.status]])]),_:1}),r(s,{label:"\u521B\u5EFA\u65F6\u95F4",content:"",layout:"inline"},{default:n(()=>[r(P,{modelValue:o.rangePicker,"onUpdate:modelValue":t[2]||(t[2]=i=>o.rangePicker=i),options:{autoApply:!1,singleMode:!1,numberOfColumns:2,numberOfMonths:2,showWeekNumbers:!0,format:"YYYY-MM-DD",dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}},class:"mt-2 form-control sm:mt-0 sm:w-56 2xl:w-full"},null,8,["modelValue"])]),_:1}),a("div",{class:"mt-2 xl:mt-0"},[a("button",{type:"button",class:"w-full btn btn-primary sm:w-16",onClick:k}," \u67E5\u8BE2 ")])]),_:1})]),_:1},8,["ajaxUrl","config","queryParam"]),r(Y,{title:"\u5BA1\u6838\u53CD\u9988",visible:p.modal.feedback},{default:n(()=>[D(a("textarea",{class:"form-control","onUpdate:modelValue":t[3]||(t[3]=i=>d.feedback=i),rows:4,placeholder:"\u95EE\u9898\u53CD\u9988\u63CF\u8FF0"},null,512),[[w,d.feedback]]),r(V,null,{default:n(()=>[a("button",{type:"button",onClick:t[4]||(t[4]=i=>p.modal.feedback=!1),class:"w-20 mr-1 btn btn-outline-secondary"}," \u53D6\u6D88 "),a("button",{type:"button",class:"w-20 btn btn-primary",onClick:M}," \u63D0\u4EA4 ")]),_:1})]),_:1},8,["visible"])]),_:1})}}}),de=J(re,[["__file","/Users/wu./Documents/os/web/www/web/src/views/user/admin/miandan.vue"]]);export{de as default};
