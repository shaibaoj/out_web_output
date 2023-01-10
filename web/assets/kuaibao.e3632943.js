import{r as w,d as y,a7 as j,G as E,a8 as A,l as P,C as V,n as d,e as U,w as u,b as T,h as o,u as f,ad as Y,g as r,B as q,j as M,a as i,aa as g,q as h,ab as N,k as R}from"./index.06fc13de.js";const _={list:"/api/admin/kuaibao/list",view:"/api/admin/kuaibao/view",pass:"/api/admin/kuaibao/pass",reject:"/api/admin/kuaibao/reject"};function S(l){return w({url:_.pass,method:"post",data:l})}function z(l){return w({url:_.reject,method:"post",data:l})}const G=r("option",{value:""},"\u5168\u90E8",-1),L=r("option",{value:"1"},"\u901A\u8FC7",-1),O=r("option",{value:"0"},"\u672A\u786E\u8BA4",-1),W=r("option",{value:"-1"},"\u62D2\u7EDD",-1),H={class:"mt-2 xl:mt-0"},I=y({__name:"kuaibao",setup(l){const b=j(),D=E(()=>`${b.urlPrefix}${b.apiUrl}${_.list}`),v=A({}),x=[{formatter:"responsiveCollapse",width:40,minWidth:30,hozAlign:"center",resizable:!0,headerSort:!1},{title:"\u540D\u79F0",width:150,field:"kuaibao.title"},{title:"\u5185\u5BB9",field:"content",formatter(e){var a,s,m;return i(`<ul>
            ${((m=(s=(a=e.getData().kuaibao)==null?void 0:a.items)==null?void 0:s.array)==null?void 0:m.forEach(n=>`<li v-for="(item, index) in record.kuaibao.items" :key="index">
            <span>{{ item.text }}</span>
            <a target="_blank" href="${n.click_url}">${n.click_url}</a>
            <a target="_blank" href="${n.pic_view}">
              <img src="${n.pic_view}" />
            </a>
          </li>`))||""}
          </ul>`)[0]}},{title:"\u66F4\u65B0\u65F6\u95F4",width:160,field:"kuaibao.updated_at"},{title:"\u6D88\u606F\u72B6\u6001",field:"message",width:200,formatter(e){return i(`<ul>
          <li>
            <p>${e.getData().kuaibao.message_status}</p>
            <p>${e.getData().kuaibao.message_title}</p>
            <p>${e.getData().kuaibao.message_content}</p>
          </li>
        </ul>`)[0]}},{title:"\u6765\u8DEF",field:"url",width:200,formatter(e){return i(`<a target="_blank" href="${e.getData().url}">
          ${e.getData().url||""}
        </a>`)[0]}},{title:"\u72B6\u6001",field:"kuaibao.status",width:80},{title:"\u64CD\u4F5C",field:"action",width:120,formatter(e){if(e.getData().kuaibao.status!==1){const a=i('<a class="flex items-center" href="javascript:;">\u901A\u8FC7</a>');return i(a).on("click",function(s){F(e.getData())}),a[0]}else if(e.getData().kuaibao.status!==-1){const a=i('<a class="flex items-center" href="javascript:;">\u62D2\u7EDD</a>');return i(a).on("click",function(s){B(e.getData())}),a[0]}return""}}],t=P({rangePicker:"",status:"",startTime:"",endTime:""}),c=V(),k=()=>{t.startTime=g(t.rangePicker)[0],t.endTime=g(t.rangePicker)[0],c.value.reload(!0)},B=e=>{z({id:e.kuaibao.id}).then(()=>{h.success("\u5DF2\u62D2\u7EDD"),c.value.reload()})},F=e=>{S({id:e.kuaibao.id}).then(a=>{h.success(a.message),c.value.reload()})};return(e,a)=>{const s=d("h-form-item"),m=d("Litepicker"),n=d("h-form"),C=N,$=d("h-card");return T(),U($,{bordered:!1,title:"\u7EBF\u62A5\u7BA1\u7406"},{default:u(()=>[o(C,{ref_key:"tableRef",ref:c,columns:x,ajaxUrl:f(D),config:f(v),queryParam:t},{search:u(()=>[o(n,{layout:"inline"},{default:u(()=>[o(s,{label:"\u72B6\u6001",content:"",layout:"inline"},{default:u(()=>[o(f(Y),{modelValue:t.status,"onUpdate:modelValue":a[0]||(a[0]=p=>t.status=p),class:"w-full mt-2 sm:mt-0 sm:w-auto",onChange:k},{default:u(()=>[G,L,O,W]),_:1},8,["modelValue"])]),_:1}),o(s,{label:"\u521B\u5EFA\u65F6\u95F4",content:"",layout:"inline"},{default:u(()=>[o(m,{modelValue:t.rangePicker,"onUpdate:modelValue":a[1]||(a[1]=p=>t.rangePicker=p),options:{autoApply:!1,singleMode:!1,numberOfColumns:2,numberOfMonths:2,showWeekNumbers:!0,format:"YYYY-MM-DD",dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}},class:"mt-2 sm:mt-0 sm:w-56 2xl:w-full"},null,8,["modelValue"])]),_:1}),r("div",H,[o(f(q),{variant:"primary",type:"button",class:"w-full sm:w-16",onClick:k},{default:u(()=>[M(" \u67E5\u8BE2 ")]),_:1})])]),_:1})]),_:1},8,["ajaxUrl","config","queryParam"])]),_:1})}}}),K=R(I,[["__file","/Users/wu./Documents/os/web/www/web/src/views/user/admin/kuaibao.vue"]]);export{K as default};