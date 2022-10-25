import{h as b,Y as D,D as C,Z as F,j as A,E as B,C as $,b as k,w as a,s as r,a as y,p as o,l as i,u,ae as Y,$ as E,d as m,a1 as M}from"./index.c0431666.js";const U=b({__name:"install",setup(P){const n=D(),d=C(()=>`${n.urlPrefix}${n.apiUrl}${Y.installs}`),c=F({}),f=[{formatter:"responsiveCollapse",width:40,minWidth:30,hozAlign:"center",resizable:!0,headerSort:!1},{title:"\u65F6\u95F4",field:"updated_at",formatter(e){return E(e.getData().created_at,"YY-MM-DD HH:mm")},width:140},{title:"",width:280,field:"title",formatter(e){return m(`
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
          `)[0]},download:!0},{title:"",width:120,field:"title",formatter(e){return m(`
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
          `)[0]},download:!0},{title:"\u4F1A\u5458",field:"member.user_name",formatter(e){var t;return`${((t=e.getData().member)==null?void 0:t.user_name)||""}`}},{title:"vendor",hozAlign:"center",field:"vendor",width:180},{title:"model",hozAlign:"center",field:"model",width:180}],s=A({rangePicker:""});B(()=>{});const l=$(),p=()=>{l.value.reload(!0)};return(e,t)=>{const _=r("Litepicker"),h=r("h-form-item"),w=r("h-form"),v=M,x=r("h-card");return y(),k(x,{bordered:!1,title:"\u5B89\u88C5\u7EDF\u8BA1"},{default:a(()=>[o(v,{ref_key:"tableRef",ref:l,columns:f,ajaxUrl:u(d),config:u(c),queryParam:s},{search:a(()=>[o(w,{layout:"inline"},{default:a(()=>[o(h,{label:"\u521B\u5EFA\u65F6\u95F4",content:"",layout:"inline"},{default:a(()=>[o(_,{modelValue:s.rangePicker,"onUpdate:modelValue":t[0]||(t[0]=g=>s.rangePicker=g),options:{autoApply:!1,singleMode:!1,numberOfColumns:2,numberOfMonths:2,showWeekNumbers:!0,format:"YYYY-MM-DD",dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}},class:"mt-2 form-control sm:mt-0 sm:w-56 2xl:w-full"},null,8,["modelValue"])]),_:1}),i("div",{class:"mt-2 xl:mt-0"},[i("button",{type:"button",class:"w-full btn btn-primary sm:w-16",onClick:p}," \u67E5\u8BE2 ")])]),_:1})]),_:1},8,["ajaxUrl","config","queryParam"])]),_:1})}}});export{U as default};
