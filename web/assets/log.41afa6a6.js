import{h as y,Z as P,G as $,$ as C,j as B,C as U,l as n,a as x,b as D,w as t,q as e,x as j,y as V,m,u as f,a1 as F,a2 as Y,_ as T,d as E,a0 as A,p as k}from"./index.fe592241.js";const M={list:"/api/admin/log/list",list_cms:"/api/admin/log/list_cms",stat:"/api/admin/log/stat"},S=y({__name:"stat",setup(v){const r=P(),_=$(()=>`${r.urlPrefix}${r.apiUrl}${M.list}`),i=C({}),u=[{formatter:"responsiveCollapse",width:40,minWidth:30,hozAlign:"center",resizable:!0,headerSort:!1},{title:"\u57DF\u540D",field:"host"},{title:"\u641C\u7D22",width:100,field:"agent"},{title:"\u65E5\u671F",width:100,field:"date"},{title:"\u6D41\u91CF",width:100,field:"views"}],a=B({rangePicker:"",startTime:"",endTime:"",host:""}),l=U(),c=()=>{a.startTime=F(a.rangePicker)[0],a.endTime=F(a.rangePicker)[0],l.value.reload(!0)};return(o,s)=>{const d=n("h-form-item"),p=n("Litepicker"),w=n("h-form"),g=Y,b=n("h-card");return x(),D(b,{bordered:!1,title:""},{default:t(()=>[e(g,{ref_key:"tableRef",ref:l,columns:u,ajaxUrl:f(_),config:f(i),queryParam:a},{search:t(()=>[e(w,{layout:"inline"},{default:t(()=>[e(d,{label:"\u57DF\u540D",content:"",layout:"inline"},{default:t(()=>[j(m("input",{"onUpdate:modelValue":s[0]||(s[0]=h=>a.host=h),type:"text",class:"form-control mt-2 sm:mt-0 sm:w-40 2xl:w-full"},null,512),[[V,a.host]])]),_:1}),e(d,{label:"\u521B\u5EFA\u65F6\u95F4",content:"",layout:"inline"},{default:t(()=>[e(p,{modelValue:a.rangePicker,"onUpdate:modelValue":s[1]||(s[1]=h=>a.rangePicker=h),options:{autoApply:!1,singleMode:!1,numberOfColumns:2,numberOfMonths:2,showWeekNumbers:!0,format:"YYYY-MM-DD",dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}},class:"form-control mt-2 sm:mt-0 sm:w-56 2xl:w-full"},null,8,["modelValue"])]),_:1}),m("div",{class:"mt-2 xl:mt-0"},[m("button",{type:"button",class:"btn btn-primary w-full sm:w-16",onClick:c}," \u67E5\u8BE2 ")])]),_:1})]),_:1},8,["ajaxUrl","config","queryParam"])]),_:1})}}}),q=T(S,[["__file","/Users/wu./Documents/os/web/www/web/src/views/user/admin/log/stat.vue"]]),L=y({__name:"logs",setup(v){const r=P(),_=$(()=>`${r.urlPrefix}${r.apiUrl}${M.list}`),i=C({}),u=[{formatter:"responsiveCollapse",width:40,minWidth:30,hozAlign:"center",resizable:!0,headerSort:!1},{title:"\u57DF\u540D",width:150,field:"host"},{title:"ip",width:130,field:"ip"},{title:"\u4F4D\u7F6E",width:80,field:"country_name",formatter(o){return E(`<span
          >${o.getData().country_name}<span v-if="record.country_code">(${o.getData().country_code})</span></span
        >
        <p v-if="record.region_name">
          ${o.getData().region_name}<span v-if="record.region_code">(${o.getData().region_code})</span>
        </p>
        <p v-if="record.city_name">
          ${o.getData().city_name}<span v-if="record.postal">(${o.getData().postal})</span>
        </p>`)[0]}},{title:"\u7C7B\u578B",width:60,field:"agent"},{title:"\u5730\u5740",width:160,field:"url",formatter(o){return E(`<a target="_blank" href="${o.getData().url}">
          ${o.getData().url}
        </a>`)[0]}},{title:"user_agent",field:"user_agent"},{title:"\u65F6\u95F4",width:140,field:"created_at",formatter(o){return A(o.getData().created_at,"YY-MM-DD HH:mm")}},{title:"\u6267\u884C\u65F6\u95F4",field:"time",width:80},{title:"\u6765\u8DEF",field:"referer",width:100}],a=B({name:"",status:0,startTime:"",endTime:"",host:""}),l=U(),c=()=>{l.value.reload(!0)};return(o,s)=>{const d=n("h-form-item"),p=n("h-form"),w=Y,g=n("h-card");return x(),D(g,{bordered:!1,title:""},{default:t(()=>[e(w,{ref_key:"tableRef",ref:l,columns:u,ajaxUrl:f(_),config:f(i),queryParam:a},{search:t(()=>[e(p,{layout:"inline"},{default:t(()=>[e(d,{label:"\u57DF\u540D",content:"",layout:"inline"},{default:t(()=>[j(m("input",{"onUpdate:modelValue":s[0]||(s[0]=b=>a.host=b),type:"text",class:"mt-2 form-control sm:mt-0 sm:w-40 2xl:w-full"},null,512),[[V,a.host]])]),_:1}),m("div",{class:"mt-2 xl:mt-0"},[m("button",{type:"button",class:"w-full btn btn-primary sm:w-16",onClick:c}," \u67E5\u8BE2 ")])]),_:1})]),_:1},8,["ajaxUrl","config","queryParam"])]),_:1})}}}),R=T(L,[["__file","/Users/wu./Documents/os/web/www/web/src/views/user/admin/log/logs.vue"]]),W=y({__name:"log",setup(v){return(r,_)=>{const i=n("FileTextIcon"),u=n("Tippy"),a=n("Tab"),l=n("TabList"),c=n("TabPanel"),o=n("TabPanels"),s=n("TabGroup");return x(),D(s,{class:"mt-5 overflow-hidden post intro-y box"},{default:t(()=>[e(l,{class:"flex-col post__tabs nav-tabs bg-slate-200 dark:bg-darkmode-800 sm:flex-row"},{default:t(()=>[e(a,{fullWidth:!1,class:"w-full px-0 py-0 sm:w-40",tag:"button"},{default:t(()=>[e(u,{content:"\u7EDF\u8BA1",class:"flex items-center justify-center w-full py-4 tooltip","aria-controls":"content","aria-selected":"true"},{default:t(()=>[e(i,{class:"w-4 h-4 mr-2"}),k(" \u7EDF\u8BA1 ")]),_:1})]),_:1}),e(a,{fullWidth:!1,class:"w-full px-0 py-0 sm:w-40",tag:"button"},{default:t(()=>[e(u,{content:"\u8BBF\u95EE\u660E\u7EC6",class:"flex items-center justify-center w-full py-4 tooltip","aria-selected":"false"},{default:t(()=>[e(i,{class:"w-4 h-4 mr-2"}),k(" \u8BBF\u95EE\u660E\u7EC6 ")]),_:1})]),_:1})]),_:1}),e(o,{class:"post__content"},{default:t(()=>[e(c,{class:"p-5"},{default:t(()=>[e(f(q))]),_:1}),e(c,{class:"p-5"},{default:t(()=>[e(f(R))]),_:1})]),_:1})]),_:1})}}}),G=T(W,[["__file","/Users/wu./Documents/os/web/www/web/src/views/user/admin/log.vue"]]);export{G as default};