import{r as z,h as q,j as $,a as E,b as A,w as o,l as e,n as f,e as U,s as n,Y as P,k as Q,t as X,p as u,x as C,y as v,a2 as ee,u as y,v as te,O as ue,q as L,D as W,C as T,Z as oe,c as ne,F as le,d as O,a1 as se,ay as ae}from"./index.e66323b7.js";import{c as ie}from"./index.cf01fc89.js";import{p as re}from"./pick.dfcbe59d.js";const R={getDomainGenerate:"/api/user/cms/domain/generate",getDomainItems:"/api/user/cms/domain/list",updateDomain:"/api/user/cms/domain/update",delDomainItems:"/api/user/cms/domain/delete",downloadCms:"/api/user/cms/download/cms"};function ce(D){return z({url:R.updateDomain,method:"post",data:D})}function de(D){return z({url:R.delDomainItems,method:"post",data:D})}function me(D){return z({url:R.getDomainGenerate,method:"post",data:D})}function pe(D){return z({url:R.downloadCms,method:"post",data:D,responseType:"blob"})}const fe={class:"flex flex-col w-full gap-y-2"},_e=e("p",null," \u514D\u8D39\u63D0\u4F9B\u7684\u4E00\u7CFB\u5217\u8F6F\u4EF6\u7A0B\u5E8F\uFF0C\u65E8\u5728\u4E0E\u5E2E\u52A9\u7528\u6237\u9AD8\u6548\u7684\u8FDB\u884C\u5BFC\u8D2D\u4E1A\u52A1\u8FD0\u8425\u3002\u4F7F\u7528\u8005\u52A1\u5FC5\u9075\u5FAA\u56FD\u5BB6\u6CD5\u5F8B\u6CD5\u89C4\u8FDB\u884C\u63A8\u5E7F\uFF0C\u4E0D\u80FD\u6709\u4EFB\u4F55\u8FDD\u53CD\u56FD\u5BB6\u6CD5\u5F8B\u6CD5\u89C4\u7684\u884C\u4E3A\uFF01\u540C\u6837\u8BF7\u9075\u5B88\u7535\u5546\u5546\u52A1\u6CD5\u89C4\u3001\u5E7F\u544A\u6CD5\u3001\u5546\u5BB6\u5E73\u53F0\u89C4\u5219\uFF0C\u4E0D\u5F97\u6709\u4EFB\u4F55\u8FDD\u89C4\u884C\u4E3A\uFF01 ",-1),Fe=q({__name:"download",setup(D,{expose:B}){const x=$({domain_url:"",url:""}),F=$({visible:!1,confirmLoading:!1}),g=()=>{F.visible=!1},t=s=>{F.visible=!0,Object.assign(x,s)},w=()=>{pe({}).then(s=>{if(!s)return;let c=window.URL.createObjectURL(new Blob([s])),d=document.createElement("a");d.style.display="none",d.href=c,d.setAttribute("download","index.php"),document.body.appendChild(d),d.click(),window.URL.revokeObjectURL(d.href),document.body.removeChild(d)}).catch(s=>{ie.log(s)})};return B({edit:t}),(s,c)=>{const d=n("LoadingIcon"),k=n("h-modal");return E(),A(k,{title:"\u72EC\u7ACB\u57DF\u540D\u6E90\u7801\u6587\u4EF6\u4E0B\u8F7D",size:"modal-lg",visible:F.visible,"confirm-loading":F.confirmLoading,onCancel:g},{footer:o(()=>[e("button",{class:"w-24 mb-2 mr-1 btn btn-primary",onClick:c[1]||(c[1]=b=>g())},[f(" \u5173\u95ED "),F.confirmLoading?(E(),A(d,{key:0,icon:"oval",color:"white",class:"w-4 h-4 ml-2"})):U("",!0)])]),default:o(()=>[e("div",fe,[_e,e("button",{class:"w-32 mb-2 mr-1 btn btn-primary",onClick:c[0]||(c[0]=b=>w())},[f(" \u4E0B\u8F7D\u6E90\u7801\u6587\u4EF6 "),F.confirmLoading?(E(),A(d,{key:0,icon:"oval",color:"white",class:"w-4 h-4 ml-2"})):U("",!0)])])]),_:1},8,["visible","confirm-loading"])}}}),ge={class:"flex flex-col gap-y-2"},De={class:"input-group"},be=e("div",{class:"input-group-text"},"Http://",-1),he={class:"input-group"},Ce=e("div",{class:"input-group-text"},"Http://",-1),Ee={class:"input-group-text w-96"},we=e("option",{value:"gouwu.rocks"},"gouwu.rocks",-1),ve=[we],Ae={class:"w-32 mt-1 mb-2 mr-2 btn btn-outline-success btn-sm"},ye=q({__name:"edit",emits:["ok"],setup(D,{expose:B,emit:x}){const g=P().uploadUrl,t=$({id:0,url:"",prefix:"",domain_url:"",tao_pid:"",site_name:"",logo_url:"",js:"",type:0}),w={},s=$({visible:!1,confirmLoading:!1}),c=Q(w,X(t)),d=m=>{s.visible=!0,te(()=>{Object.assign(t,{id:0,url:"",prefix:"",domain_url:"",tao_pid:"",site_name:"",logo_url:"",js:"",type:0}),Object.assign(t,re(m,["id","url","tao_pid","domain_url","site_name","logo_url","js","prefix","type"]))})},k=()=>{if(s.confirmLoading=!0,c.value.$touch(),c.value.$invalid)c.value.$errors,s.confirmLoading=!1;else{const m=y(t);ue(m.domain_url)||Object.assign(m,{url:m.prefix+"."+m.domain_url}),ce(m).then(l=>{const{code:p}=l||{};p===0?L.success("\u4FDD\u5B58\u6210\u529F"):L.error(l.message),s.confirmLoading=!1,x("ok",m),s.visible=!1})}},b=()=>{s.visible=!1},_=m=>{Object.assign(t,{logo_url:m.data.item.img})};return B({edit:d}),(m,l)=>{const p=n("h-form-item"),j=n("UploadIcon"),i=n("h-upload"),r=n("h-form"),h=n("h-spin"),V=n("LoadingIcon"),I=n("h-modal");return E(),A(I,{title:"\u57DF\u540D\u7F16\u8F91",size:"modal-lg",visible:s.visible,"confirm-loading":s.confirmLoading,onCancel:b},{footer:o(()=>[e("button",{class:"w-24 mb-2 mr-1 btn btn-primary",onClick:l[8]||(l[8]=a=>k())},[f(" \u4FDD\u5B58 "),s.confirmLoading?(E(),A(V,{key:0,icon:"oval",color:"white",class:"w-4 h-4 ml-2"})):U("",!0)])]),default:o(()=>[u(h,{spinning:s.confirmLoading},{default:o(()=>[u(r,{border:!1},{default:o(()=>[C(e("input",{"onUpdate:modelValue":l[0]||(l[0]=a=>t.id=a),type:"hidden"},null,512),[[v,t.id]]),e("div",ge,[t.type==1?(E(),A(p,{key:0,label:"\u57DF\u540D",content:"",layout:"small"},{default:o(()=>[e("div",De,[be,C(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[1]||(l[1]=a=>t.url=a)},null,512),[[v,t.url]])])]),_:1})):U("",!0),t.type==2?(E(),A(p,{key:1,label:"\u57DF\u540D",content:"",layout:"small"},{default:o(()=>[e("div",he,[Ce,C(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[2]||(l[2]=a=>t.prefix=a)},null,512),[[v,t.prefix]]),e("div",Ee,[C(e("select",{class:"form-select","onUpdate:modelValue":l[3]||(l[3]=a=>t.domain_url=a)},ve,512),[[ee,t.domain_url]])])])]),_:1})):U("",!0),u(p,{label:"\u5E7F\u544A\u4F4D",content:"",layout:"small"},{default:o(()=>[C(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[4]||(l[4]=a=>t.tao_pid=a)},null,512),[[v,t.tao_pid]])]),_:1}),u(p,{label:"\u7F51\u7AD9\u540D\u5B57",content:"",layout:"small"},{default:o(()=>[C(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[5]||(l[5]=a=>t.site_name=a)},null,512),[[v,t.site_name]])]),_:1}),u(p,{label:"\u7F51\u7AD9logo",content:"",layout:"small"},{default:o(()=>[C(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[6]||(l[6]=a=>t.logo_url=a)},null,512),[[v,t.logo_url]]),u(i,{name:"file",action:y(g),onChange:_},{default:o(()=>[e("button",Ae,[u(j,{class:"w-4 h-4 mr-2"}),f("\u4E0A\u4F20 ")])]),_:1},8,["action"])]),_:1}),u(p,{label:"js\u4EE3\u7801",content:"",layout:"small"},{default:o(()=>[C(e("textarea",{class:"form-control","onUpdate:modelValue":l[7]||(l[7]=a=>t.js=a),placeholder:"\u9700\u8981\u7ED9\u5355\u72EC\u57DF\u540D\u8BBE\u7F6E\u4EE3\u7801\u4F7F\u7528\uFF0C\u4E0D\u9700\u8981\u60C5\u51B5\u8BEF\u586B"},null,512),[[v,t.js]])]),_:1})])]),_:1})]),_:1},8,["spinning"])]),_:1},8,["visible","confirm-loading"])}}}),Be=e("span",null,[f(" 1\u3001\u4E0A\u4F20\u9A8C\u8BC1\u6587\u4EF6\u4EC5\u4EC5\u9488\u5BF9\u4F7F\u7528\u597D\u7269\u8054\u76DF\u7A7A\u95F4\u6216\u8005\u514D\u8D39\u4E8C\u7EA7\u57DF\u540D\u7684\u60C5\u51B5"),e("br"),f(" 2\u3001\u5982\u679C\u4F60\u4F7F\u7528\u7684\u81EA\u5DF1\u7A7A\u95F4\u6216\u72EC\u7ACB\u670D\u52A1\u5668\uFF0C\u8BF7\u76F4\u63A5\u4E0B\u8F7D\u9A8C\u8BC1\u6587\u4EF6\u5230\u4F60\u670D\u52A1\u5668\uFF0C\u65E0\u6CD5\u901A\u8FC7\u6B64\u5904\u4E0A\u4F20\u9A8C\u8BC1\u6587\u4EF6 ")],-1),xe={class:"flex flex-col gap-y-2"},ke={class:"w-32 mt-1 mb-2 mr-2 btn btn-outline-success btn-sm"},$e={class:"w-32 mt-1 mb-2 mr-2 btn btn-outline-success btn-sm"},je=q({__name:"data",setup(D,{expose:B}){const F=P().uploadUrl,g=$({id:0,url:""}),t=$({visible:!1,confirmLoading:!1}),w=W(()=>g.url),s=()=>{t.visible=!1},c=b=>{t.visible=!0,Object.assign(g,b)},d=b=>{L.success("\u4E0A\u4F20\u6210\u529F,\u53BB\u9A8C\u8BC1\u5427")},k=b=>{L.success("\u4E0A\u4F20\u6210\u529F,\u53BB\u9A8C\u8BC1\u5427")};return B({edit:c}),(b,_)=>{const m=n("AlertCircleIcon"),l=n("Alert"),p=n("UploadIcon"),j=n("h-upload"),i=n("h-form-item"),r=n("h-form"),h=n("h-spin"),V=n("LoadingIcon"),I=n("h-modal");return E(),A(I,{title:"\u9AD8\u7EA7\u8BBE\u7F6E",size:"modal-lg",visible:t.visible,"confirm-loading":t.confirmLoading,onCancel:s},{footer:o(()=>[e("button",{class:"w-24 mb-2 mr-1 btn btn-primary",onClick:_[1]||(_[1]=a=>s())},[f(" \u5173\u95ED "),t.confirmLoading?(E(),A(V,{key:0,icon:"oval",color:"white",class:"w-4 h-4 ml-2"})):U("",!0)])]),default:o(()=>[u(l,{class:"flex items-center mb-2 alert-outline-primary"},{default:o(()=>[u(m,{class:"w-6 h-6 mr-2"}),Be]),_:1}),u(h,{spinning:t.confirmLoading},{default:o(()=>[u(r,{border:!1},{default:o(()=>[C(e("input",{"onUpdate:modelValue":_[0]||(_[0]=a=>g.id=a),type:"hidden"},null,512),[[v,g.id]]),e("div",xe,[u(i,{label:"\u963F\u91CC\u5988\u5988\u6587\u4EF6",content:"",layout:"small"},{default:o(()=>[u(j,{name:"file",action:y(F),data:{url:y(w),action:"root"},fileType:[".txt",".jpg",".png",".jpeg",".gif"],onChange:d},{default:o(()=>[e("button",ke,[u(p,{class:"w-4 h-4 mr-2"}),f("\u4E0A\u4F20 ")])]),_:1},8,["action","data","fileType"])]),_:1}),u(i,{label:"\u5176\u4ED6\u9A8C\u8BC1\u6587\u4EF6",content:"",layout:"small"},{default:o(()=>[u(j,{name:"file",action:y(F),data:{url:y(w),action:"other"},fileType:[".txt",".jpg",".png",".jpeg",".gif"],onChange:k},{default:o(()=>[e("button",$e,[u(p,{class:"w-4 h-4 mr-2"}),f("\u4E0A\u4F20 ")])]),_:1},8,["action","data","fileType"])]),_:1})])]),_:1})]),_:1},8,["spinning"])]),_:1},8,["visible","confirm-loading"])}}}),Ie={class:"flex items-center justify-center w-5 h-5"},Ue={class:"sticky top-0 mt-5 box"},Le={class:"p-5"},Ve={class:"flex items-center font-medium text-primary",target:"_blank",rel:"noopener noreferrer",href:"https://www.haowulm.com/article/7"},Oe=e("h2",{class:"text-lg font-medium"},"\u63D0\u793A",-1),Re=e("div",null,[f(" 1\u3001\u5982\u679C\u4F60\u6709\u57DF\u540D\uFF0C\u6CA1\u6709\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u57DF\u540D\u89E3\u6790\u5230cname\u89E3\u6790\u5230:cms.youdanhui.cn\uFF0C\u4F7F\u7528\u597D\u7269\u8054\u76DF\u63D0\u4F9B\u7684\u7A7A\u95F4\u5373\u53EF\uFF0C\u76EE\u524D\u7A7A\u95F4\u514D\u8D39\u4F7F\u7528 "),e("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.haowulm.com/article/7"}," \u89E3\u6790\u6559\u7A0B>>> ")],-1),qe=q({__name:"domain",setup(D){const{proxy:B}=ae(),x=P(),F=W(()=>`${x.urlPrefix}${x.apiUrl}${R.getDomainItems}`),g=T(),t=T(),w=T(),s=T(),c=$({url:""}),d=oe({}),k=[{formatter:"responsiveCollapse",width:40,minWidth:30,hozAlign:"center",resizable:!0,headerSort:!1},{title:"\u57DF\u540D",minWidth:200,responsive:0,field:"url",vertAlign:"middle",print:!0,download:!0,headerSort:!1,formatter(i){return`<div>
                <div class="font-medium whitespace-nowrap"><a target="_blank" href="http://${i.getData().url}">${i.getData().url}</a></div>
              </div>`}},{title:"\u5E7F\u544A\u4F4D",minWidth:200,field:"tao_pid",hozAlign:"center",vertAlign:"middle",print:!0,download:!0},{title:"\u8BBE\u7F6E",minWidth:200,field:"tao_pid",hozAlign:"center",vertAlign:"middle",print:!1,download:!1,formatter(i){const r=O(`    <div class="flex items-center lg:justify-center">
          <a class="flex items-center mr-3" href="javascript:;">
                   \u6587\u4EF6\u9A8C\u8BC1
                </a>
                </div>`);return O(r).on("click",function(h){l(i.getData())}),r[0]}},{title:"\u64CD\u4F5C",minWidth:200,field:"actions",responsive:1,hozAlign:"center",vertAlign:"middle",print:!1,download:!1,formatter(i){const r=O(`    <div class="flex items-center lg:justify-center">
          <a class="flex items-center mr-3" href="javascript:;">
                  <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> \u4FEE\u6539
                </a>
                <a class="flex items-center text-danger" href="javascript:;">
                  <i data-lucide="trash-2" class="w-4 h-4 mr-1"></i> \u5220\u9664
                </a>
                </div>`);return O(r).find("a:first-child").on("click",function(h){h.target,p(i.getData())}),O(r).find("a:nth-child(2)").on("click",function(){j(i.getData())}),r[0]}}],b=()=>{me({domain_url:"gouwu.rocks"}).then(i=>{L.success(i.message),_()})},_=()=>{t.value.reload(!0)},m=()=>{w.value.edit({})},l=i=>{s.value.edit(i)},p=i=>{g.value.edit(i)},j=i=>{const r=B.$confirm;r({title:"\u63D0\u793A",content:"\u771F\u7684\u8981\u5220\u9664\u4E48 ?",onOk:()=>{de({id:i.id}).then(h=>{L.success(h.message),_()})},onCancel(){}})};return(i,r)=>{const h=n("PlusIcon"),V=n("DropdownToggle"),I=n("FileIcon"),a=n("DropdownItem"),G=n("DropdownContent"),M=n("DropdownMenu"),N=n("Dropdown"),H=n("h-form-item"),Y=n("h-form"),Z=se,J=n("ActivityIcon"),K=n("h-card");return E(),ne(le,null,[u(K,{title:"\u57DF\u540D\u7BA1\u7406",bordered:!1},{header:o(()=>[e("button",{class:"mr-2 shadow-md btn btn-primary",onClick:r[0]||(r[0]=S=>b())}," \u4E00\u952E\u7533\u8BF7\u514D\u8D39\u57DF\u540D "),e("button",{class:"mr-2 shadow-md btn btn-primary",onClick:m}," \u6E90\u7801\u4E0B\u8F7D "),u(N,{class:"ml-auto pos-dropdown sm:ml-0"},{default:o(()=>[u(V,{class:"px-2 btn box"},{default:o(()=>[e("span",Ie,[u(h,{class:"w-4 h-4"})])]),_:1}),u(M,{class:"w-40"},{default:o(()=>[u(G,null,{default:o(()=>[u(a,{onClick:r[1]||(r[1]=S=>p({type:1}))},{default:o(()=>[u(I,{class:"w-4 h-4 mr-2"}),f(" \u7ED1\u5B9A\u81EA\u5B9A\u4E49\u57DF\u540D ")]),_:1}),u(a,{onClick:r[2]||(r[2]=S=>p({type:2}))},{default:o(()=>[u(I,{class:"w-4 h-4 mr-2"}),f(" \u7ED1\u5B9A\u514D\u8D39\u57DF\u540D ")]),_:1})]),_:1})]),_:1})]),_:1})]),menu:o(()=>[e("div",Ue,[e("div",Le,[e("a",Ve,[u(J,{class:"w-4 h-4 mr-2"}),f(" \u89E3\u6790\u6559\u7A0B>>> ")])])]),e("div",{class:"sticky top-0"},[e("div",{class:"relative p-5 mt-10 border rounded-md border-warning bg-warning/20 dark:border-0 dark:bg-darkmode-600"},[Oe,e("div",{class:"mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-500"},[Re,e("div",{class:"mt-2"},[f(" 2\u3001\u5982\u679C\u4F60\u6709\u57DF\u540D\uFF0C\u6709\u72EC\u7ACB\u7A7A\u95F4\u6216\u8005\u670D\u52A1\u5668\uFF0C\u8BF7\u4E0B\u8F7D\u6E90\u7801\u5230\u81EA\u5DF1\u7A7A\u95F4\u5C31\u53EF\u4EE5\u4E86\uFF0C\u6E90\u7801\u6587\u4EF6\u4E0B\u8F7D\u5730\u5740: "),e("button",{class:"w-24 mb-2 mr-1 btn btn-primary",icon:"download",onClick:m},"\u4E0B\u8F7D\u6E90\u7801")])])])])]),default:o(()=>[u(Z,{ref_key:"tableRef",ref:t,columns:k,ajaxUrl:y(F),config:y(d),queryParam:c},{search:o(()=>[u(Y,{layout:"inline"},{default:o(()=>[u(H,{label:"\u57DF\u540D",content:"",layout:"inline"},{default:o(()=>[C(e("input",{"onUpdate:modelValue":r[3]||(r[3]=S=>c.url=S),type:"text",class:"mt-2 form-control sm:mt-0 sm:w-40 2xl:w-full"},null,512),[[v,c.url]])]),_:1}),e("div",{class:"mt-2 xl:mt-0"},[e("button",{type:"button",class:"w-full btn btn-primary sm:w-16",onClick:_}," \u67E5\u8BE2 ")])]),_:1})]),_:1},8,["ajaxUrl","config","queryParam"])]),_:1}),u(ye,{ref_key:"editRef",ref:g,onOk:_},null,512),u(Fe,{ref_key:"downloadRef",ref:w,onOk:_},null,512),u(je,{ref_key:"dataRef",ref:s,onOk:_},null,512)],64)}}});export{qe as default};