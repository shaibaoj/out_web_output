import{h as A,Y as B,D as j,Z as P,j as U,C as V,b as Y,w as i,s as d,a as M,l as a,p as o,x as m,a2 as T,y as p,u as w,d as l,$ as q,q as c,a0 as D,a1 as z}from"./index.35f51f2d.js";import{a as O,r as R,p as S,u as L,b as N}from"./coupon.69b30968.js";const H=a("option",{value:""},"\u5168\u90E8",-1),W=a("option",{value:"2"},"\u901A\u8FC7",-1),G=a("option",{value:"1"},"\u5BA1\u6838\u4E2D",-1),Z=a("option",{value:"0"},"\u8349\u7A3F",-1),I=a("option",{value:"-1"},"\u62D2\u7EDD",-1),J=a("option",{value:"-2"},"\u4E0B\u67B6",-1),K=[H,W,G,Z,I,J],et=A({__name:"coupon",setup(Q){const _=B(),b=j(()=>`${_.urlPrefix}${_.apiUrl}${O.couponList}`),v=P({}),x=[{formatter:"responsiveCollapse",width:40,minWidth:30,hozAlign:"center",resizable:!0,headerSort:!1},{title:"",field:"title",formatter(t){return l(`
          <div class="flex items-center">
            <div class="w-9 h-9 image-fit zoom-in">
              <a target="_blank" href="${t.getData().item_url}" class="font-medium whitespace-nowrap">
              <img class="border-white rounded-lg shadow-md" src="${t.getData().pic_url||""}" />
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
          `)[0]},download:!0},{title:"\u5238",hozAlign:"center",width:80,field:"money",formatter(t){return l(`<a target="_blank" href="${t.getData().coupon_url}" class="underline decoration-dotted">
        ${t.getData().money}
        </a>`)[0]}},{title:"\u4EF7\u683C",width:80,field:"price",sorter:!0,formatter(t){return l(`<a target="_blank" href="${t.getData().item_url}">
          ${t.getData().price}
        </a>`)[0]}},{title:"\u9500\u91CF",width:80,field:"volume"},{title:"\u72B6\u6001",width:80,field:"status_name",sorter:!0},{title:"\u680F\u76EE",field:"cid1",width:80},{title:"\u5E97\u94FA",field:"user_type",width:80},{title:"\u65F6\u95F4",width:140,field:"updated_at",formatter(t){return q(t.getData().created_at,"YY-MM-DD HH:mm")}},{title:"\u65E5/2\u5C0F\u65F6",width:80,field:"data.day_sales",formatter(t){var e,u;return`${((e=t.getData().data)==null?void 0:e.day_sales)||"0"}/${((u=t.getData().data)==null?void 0:u.sales2h)||"0"}`}},{title:"\u53D1\u5E03\u4EBA",width:120,field:"user.user_name"},{title:"\u64CD\u4F5C",field:"action",width:120,formatter(t){const e=l(`<div class="flex items-center lg:justify-center">
        ${t.getData().status===1?`<a class="flex items-center mr-3 action-pass" href="javascript:;">
                <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> \u901A\u8FC7
              </a>`:""}
        ${t.getData().status===1?`<a class="flex items-center text-danger action-reject" href="javascript:;">
                <i data-lucide="trash-2" class="w-4 h-4 mr-1"></i> \u62D2\u7EDD
              </a>`:""}
              ${t.getData().status<0?`<a class="flex items-center text-danger action-uponline" href="javascript:;">
                <i data-lucide="trash-2" class="w-4 h-4 mr-1"></i> \u4E0A\u67B6
              </a>`:""}
              </div>`);return l(e).find(".action-pass").on("click",function(u){C(t.getData())}),l(e).find(".action-reject").on("click",function(u){y(t.getData())}),l(e).find(".action-uponline").on("click",function(u){F(t.getData())}),e[0]}}],s=U({rangePicker:"",status:0,startTime:"",endTime:"",item_id:"",url:""}),r=V(),y=t=>{R({id:t.id}).then(()=>{c.success("\u5DF2\u62D2\u7EDD"),r.value.reload()})},C=t=>{S({id:t.id}).then(e=>{c.success(e.message),r.value.reload()})},F=t=>{L({id:t.id}).then(()=>{c.success("\u4E0A\u67B6\u6210\u529F"),r.value.reload()})},h=t=>{N({force:t}).then(()=>{c.success("\u6279\u91CF\u5BA1\u6838\u5B8C\u6210"),r.value.reload()})},f=()=>{s.startTime=D(s.rangePicker)[0],s.endTime=D(s.rangePicker)[0],r.value.reload(!0)};return(t,e)=>{const u=d("h-form-item"),E=d("Litepicker"),g=d("h-form"),k=z,$=d("h-card");return M(),Y($,{bordered:!1,title:"\u4F18\u60E0\u5238\u5BA1\u6838"},{header:i(()=>[a("button",{class:"mr-2 shadow-md btn btn-primary",onClick:e[0]||(e[0]=n=>h(0))},"\u4E00\u952E\u6279\u91CF\u5BA1\u6838 "),a("button",{class:"mr-2 shadow-md btn btn-primary",onClick:e[1]||(e[1]=n=>h(1))},"\u4E00\u952E\u6279\u91CF\u5F3A\u5236\u5BA1\u6838 ")]),search:i(()=>[o(g,{layout:"inline"},{default:i(()=>[o(u,{label:"\u72B6\u6001",content:"",layout:"inline"},{default:i(()=>[m(a("select",{"onUpdate:modelValue":e[4]||(e[4]=n=>s.status=n),class:"w-full mt-2 form-select sm:mt-0 sm:w-auto",onChange:f},K,544),[[T,s.status]])]),_:1}),o(u,{label:"\u5546\u54C1\u7F16\u53F7",content:"",layout:"inline"},{default:i(()=>[m(a("input",{"onUpdate:modelValue":e[5]||(e[5]=n=>s.item_id=n),type:"text",class:"mt-2 form-control sm:mt-0 sm:w-40 2xl:w-full"},null,512),[[p,s.item_id]])]),_:1}),o(u,{label:"\u5546\u54C1\u5730\u5740",content:"",layout:"inline"},{default:i(()=>[m(a("input",{"onUpdate:modelValue":e[6]||(e[6]=n=>s.url=n),type:"text",class:"mt-2 form-control sm:mt-0 sm:w-40 2xl:w-full"},null,512),[[p,s.url]])]),_:1}),a("div",{class:"mt-2 xl:mt-0"},[a("button",{type:"button",class:"w-full btn btn-primary sm:w-16",onClick:f}," \u67E5\u8BE2 ")])]),_:1})]),default:i(()=>[o(k,{ref_key:"tableRef",ref:r,columns:x,ajaxUrl:w(b),config:w(v),queryParam:s},{search:i(()=>[o(g,{layout:"inline"},{default:i(()=>[o(u,{label:"\u5546\u54C1\u7F16\u53F7",content:"",layout:"inline"},{default:i(()=>[m(a("input",{"onUpdate:modelValue":e[2]||(e[2]=n=>s.item_id=n),type:"text",class:"mt-2 form-control sm:mt-0 sm:w-40 2xl:w-full"},null,512),[[p,s.item_id]])]),_:1}),o(u,{label:"\u521B\u5EFA\u65F6\u95F4",content:"",layout:"inline"},{default:i(()=>[o(E,{modelValue:s.rangePicker,"onUpdate:modelValue":e[3]||(e[3]=n=>s.rangePicker=n),options:{autoApply:!1,singleMode:!1,numberOfColumns:2,numberOfMonths:2,showWeekNumbers:!0,format:"YYYY-MM-DD",dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}},class:"mt-2 form-control sm:mt-0 sm:w-56 2xl:w-full"},null,8,["modelValue"])]),_:1}),a("div",{class:"mt-2 xl:mt-0"},[a("button",{type:"button",class:"w-full btn btn-primary sm:w-16",onClick:f}," \u67E5\u8BE2 ")])]),_:1})]),_:1},8,["ajaxUrl","config","queryParam"])]),_:1})}}});export{et as default};
