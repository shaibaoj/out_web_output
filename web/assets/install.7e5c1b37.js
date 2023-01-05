import{d as g,a2 as D,G as b,a3 as C,l as F,I as A,C as B,n as o,e as k,w as a,b as y,h as s,g as $,u as n,B as Y,j as M,al as E,a4 as P,a as u,a6 as U,k as V}from"./index.7108f388.js";const j={class:"mt-2 xl:mt-0"},z=g({__name:"install",setup(N){const l=D(),d=b(()=>`${l.urlPrefix}${l.apiUrl}${E.installs}`),m=C({}),c=[{formatter:"responsiveCollapse",width:40,minWidth:30,hozAlign:"center",resizable:!0,headerSort:!1},{title:"\u65F6\u95F4",field:"updated_at",formatter(e){return P(e.getData().created_at,"YY-MM-DD HH:mm")},width:140},{title:"",width:280,field:"title",formatter(e){return u(`
          <div class="flex items-center">
            <div class="ml-4">
              <div class="whitespace-nowrap mt-0.5">
                ${e.getData().platform}
              </div>
              <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                ${e.getData().client_id}
              </div>
            </div>
          </div>
          `)[0]},download:!0},{title:"",width:120,field:"title",formatter(e){return u(`
          <div class="flex items-center">
            <div class="ml-4">
              <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                \u6DD8\u5B9D\uFF1A${e.getData().taobao==1?"\u5DF2\u88C5":"\u672A\u5B89\u88C5"}
              </div>
              <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                \u62FC\u591A\u591A\uFF1A${e.getData().pinduoduo==1?"\u5DF2\u88C5":"\u672A\u5B89\u88C5"}
              </div>
              <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                \u4EAC\u4E1C\uFF1A${e.getData().jd==1?"\u5DF2\u88C5":"\u672A\u5B89\u88C5"}
              </div>
            </div>
          </div>
          `)[0]},download:!0},{title:"\u4F1A\u5458",field:"member.nick_name",formatter(e){var t;return`${((t=e.getData().member)==null?void 0:t.user_name)||""}`}},{title:"vendor",hozAlign:"center",field:"vendor",width:180},{title:"model",hozAlign:"center",field:"model",width:180}],r=F({rangePicker:""});A(()=>{});const i=B(),f=()=>{i.value.reload(!0)};return(e,t)=>{const p=o("Litepicker"),_=o("h-form-item"),w=o("h-form"),h=U,v=o("h-card");return y(),k(v,{bordered:!1,title:"\u5B89\u88C5\u7EDF\u8BA1"},{default:a(()=>[s(h,{ref_key:"tableRef",ref:i,columns:c,ajaxUrl:n(d),config:n(m),queryParam:r},{search:a(()=>[s(w,{layout:"inline"},{default:a(()=>[s(_,{label:"\u521B\u5EFA\u65F6\u95F4",content:"",layout:"inline"},{default:a(()=>[s(p,{modelValue:r.rangePicker,"onUpdate:modelValue":t[0]||(t[0]=x=>r.rangePicker=x),options:{autoApply:!1,singleMode:!1,numberOfColumns:2,numberOfMonths:2,showWeekNumbers:!0,format:"YYYY-MM-DD",dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}},class:"mt-2 sm:mt-0 sm:w-56 2xl:w-full"},null,8,["modelValue"])]),_:1}),$("div",j,[s(n(Y),{variant:"primary",type:"button",class:"w-full sm:w-16",onClick:f},{default:a(()=>[M(" \u67E5\u8BE2 ")]),_:1})])]),_:1})]),_:1},8,["ajaxUrl","config","queryParam"])]),_:1})}}}),S=V(z,[["__file","/Users/wu./Documents/os/web/www/web/src/views/user/app/install.vue"]]);export{S as default};
