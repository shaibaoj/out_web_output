import{r as _,h as P,Y as U,D as T,Z as V,j as Y,C as M,b as O,w as o,s as c,a as q,l as a,p as i,x as p,a2 as z,y as g,u as v,d as r,$ as L,q as f,a0 as y,a1 as R}from"./index.e66323b7.js";const m={couponList:"/api/admin/goods_apply/list",pass:"/api/admin/goods_apply/pass",reject:"/api/admin/goods_apply/reject",upOnline:"/api/admin/goods_apply/upOnline",pass_all:"/api/admin/goods_apply/pass_all"};function S(l){return _({url:m.pass,method:"post",data:l})}function N(l){return _({url:m.reject,method:"post",data:l})}function H(l){return _({url:m.upOnline,method:"post",data:l})}function W(l){return _({url:m.pass_all,method:"post",data:l})}const G=a("option",{value:""},"\u5168\u90E8",-1),Z=a("option",{value:"2"},"\u901A\u8FC7",-1),I=a("option",{value:"1"},"\u5BA1\u6838\u4E2D",-1),J=a("option",{value:"0"},"\u8349\u7A3F",-1),K=a("option",{value:"-1"},"\u62D2\u7EDD",-1),Q=a("option",{value:"-2"},"\u4E0B\u67B6",-1),X=[G,Z,I,J,K,Q],et=P({__name:"coupon",setup(l){const w=U(),x=T(()=>`${w.urlPrefix}${w.apiUrl}${m.couponList}`),C=V({}),F=[{formatter:"responsiveCollapse",width:40,minWidth:30,hozAlign:"center",resizable:!0,headerSort:!1},{title:"",field:"title",formatter(t){return r(`
          <div class="flex items-center">
            <div class="w-9 h-9 image-fit zoom-in">
              <a target="_blank" href="${t.getData().item_url}" class="font-medium whitespace-nowrap">
              <img class="border-white rounded-lg shadow-md" src="${t.getData().pic_url||"/@/assets/images/user.png"}" />
              </a>
            </div>
            <div class="ml-4">
              <a target="_blank" href="${t.getData().item_url}" class="font-medium whitespace-nowrap">
              <div class="font-medium whitespace-nowrap">
                ${t.getData().d_title||""}
              </div>
              </a>

              <a target="_blank" href="${t.getData().item_url}" class="font-medium whitespace-nowrap">
              <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                ${t.getData().title||""}
              </div>
              </a>
            </div>
          </div>
          `)[0]},download:!0},{title:"\u5238",hozAlign:"center",width:80,field:"money",formatter(t){return r(`<a target="_blank" href="${t.getData().coupon_url}" class="underline decoration-dotted">
        ${t.getData().money}
        </a>`)[0]}},{title:"\u4EF7\u683C",width:80,field:"price",sorter:!0,formatter(t){return r(`<a target="_blank" href="${t.getData().item_url}">
          ${t.getData().price}
        </a>`)[0]}},{title:"\u9500\u91CF",width:80,field:"volume"},{title:"\u72B6\u6001",width:80,field:"status_name",sorter:!0},{title:"\u680F\u76EE",field:"cid1",width:80},{title:"\u5E97\u94FA",field:"user_type",width:80},{title:"\u65F6\u95F4",width:140,field:"updated_at",formatter(t){return L(t.getData().created_at,"YY-MM-DD HH:mm")}},{title:"\u65E5/2\u5C0F\u65F6",width:80,field:"data.day_sales",formatter(t){var e,n;return`${((e=t.getData().data)==null?void 0:e.day_sales)||"0"}/${((n=t.getData().data)==null?void 0:n.sales2h)||"0"}`}},{title:"\u53D1\u5E03\u4EBA",width:120,field:"user.user_name"},{title:"\u64CD\u4F5C",field:"action",width:120,formatter(t){const e=r(`<div class="flex items-center lg:justify-center">
        ${t.getData().status===1?`<a class="flex items-center mr-3 action-pass" href="javascript:;">
                <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> \u901A\u8FC7
              </a>`:""}
        ${t.getData().status===1?`<a class="flex items-center text-danger action-reject" href="javascript:;">
                <i data-lucide="trash-2" class="w-4 h-4 mr-1"></i> \u62D2\u7EDD
              </a>`:""}
              ${t.getData().status<0?`<a class="flex items-center text-danger action-uponline" href="javascript:;">
                <i data-lucide="trash-2" class="w-4 h-4 mr-1"></i> \u4E0A\u67B6
              </a>`:""}
              </div>`);return r(e).find(".action-pass").on("click",function(n){k(t.getData())}),r(e).find(".action-reject").on("click",function(n){E(t.getData())}),r(e).find(".action-uponline").on("click",function(n){$(t.getData())}),e[0]}}],s=Y({rangePicker:"",status:0,startTime:"",endTime:"",num_iid:"",url:""}),d=M(),E=t=>{N({id:t.id}).then(()=>{f.success("\u5DF2\u62D2\u7EDD"),d.value.reload()})},k=t=>{S({id:t.id}).then(e=>{f.success(e.message),d.value.reload()})},$=t=>{H({id:t.id}).then(()=>{f.success("\u4E0A\u67B6\u6210\u529F"),d.value.reload()})},D=t=>{W({force:t}).then(()=>{f.success("\u6279\u91CF\u5BA1\u6838\u5B8C\u6210"),d.value.reload()})},h=()=>{s.startTime=y(s.rangePicker)[0],s.endTime=y(s.rangePicker)[0],d.value.reload(!0)};return(t,e)=>{const n=c("h-form-item"),A=c("Litepicker"),b=c("h-form"),B=R,j=c("h-card");return q(),O(j,{bordered:!1,title:"\u4F18\u60E0\u5238\u5BA1\u6838"},{header:o(()=>[a("button",{class:"mr-2 shadow-md btn btn-primary",onClick:e[0]||(e[0]=u=>D(0))},"\u4E00\u952E\u6279\u91CF\u5BA1\u6838 "),a("button",{class:"mr-2 shadow-md btn btn-primary",onClick:e[1]||(e[1]=u=>D(1))},"\u4E00\u952E\u6279\u91CF\u5F3A\u5236\u5BA1\u6838 ")]),search:o(()=>[i(b,{layout:"inline"},{default:o(()=>[i(n,{label:"\u72B6\u6001",content:"",layout:"inline"},{default:o(()=>[p(a("select",{"onUpdate:modelValue":e[4]||(e[4]=u=>s.status=u),class:"w-full mt-2 form-select sm:mt-0 sm:w-auto",onChange:h},X,544),[[z,s.status]])]),_:1}),i(n,{label:"\u5546\u54C1\u7F16\u53F7",content:"",layout:"inline"},{default:o(()=>[p(a("input",{"onUpdate:modelValue":e[5]||(e[5]=u=>s.num_iid=u),type:"text",class:"mt-2 form-control sm:mt-0 sm:w-40 2xl:w-full"},null,512),[[g,s.num_iid]])]),_:1}),i(n,{label:"\u5546\u54C1\u5730\u5740",content:"",layout:"inline"},{default:o(()=>[p(a("input",{"onUpdate:modelValue":e[6]||(e[6]=u=>s.url=u),type:"text",class:"mt-2 form-control sm:mt-0 sm:w-40 2xl:w-full"},null,512),[[g,s.url]])]),_:1}),a("div",{class:"mt-2 xl:mt-0"},[a("button",{type:"button",class:"w-full btn btn-primary sm:w-16",onClick:h}," \u67E5\u8BE2 ")])]),_:1})]),default:o(()=>[i(B,{ref_key:"tableRef",ref:d,columns:F,ajaxUrl:v(x),config:v(C),queryParam:s},{search:o(()=>[i(b,{layout:"inline"},{default:o(()=>[i(n,{label:"\u5546\u54C1\u7F16\u53F7",content:"",layout:"inline"},{default:o(()=>[p(a("input",{"onUpdate:modelValue":e[2]||(e[2]=u=>s.num_iid=u),type:"text",class:"mt-2 form-control sm:mt-0 sm:w-40 2xl:w-full"},null,512),[[g,s.num_iid]])]),_:1}),i(n,{label:"\u521B\u5EFA\u65F6\u95F4",content:"",layout:"inline"},{default:o(()=>[i(A,{modelValue:s.rangePicker,"onUpdate:modelValue":e[3]||(e[3]=u=>s.rangePicker=u),options:{autoApply:!1,singleMode:!1,numberOfColumns:2,numberOfMonths:2,showWeekNumbers:!0,format:"YYYY-MM-DD",dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}},class:"mt-2 form-control sm:mt-0 sm:w-56 2xl:w-full"},null,8,["modelValue"])]),_:1}),a("div",{class:"mt-2 xl:mt-0"},[a("button",{type:"button",class:"w-full btn btn-primary sm:w-16",onClick:h}," \u67E5\u8BE2 ")])]),_:1})]),_:1},8,["ajaxUrl","config","queryParam"])]),_:1})}}});export{et as default};
