import{h as N,Z as V,j as h,G as b,o as O,k as j,t as P,aa as J,v as $,l as r,b as q,w as n,a as _,q as i,x as v,y as F,m as e,u as c,c as w,e as B,ab as G,s as C,_ as I}from"./index.fe592241.js";import{p as M}from"./pick.75b5e982.js";const R={class:"app-icon"},T=e("i",{class:"cmsfont icon-jia"},null,-1),Z=["src"],z=e("a",{class:"icons-hover-bg"}," \u56FE\u6807\u4E0A\u4F20 ",-1),H={class:"app-icon static-icon"},K=e("i",{class:"cmsfont icon-jia"},null,-1),L=["src"],Q=e("a",{class:"icons-hover-bg"}," \u56FE\u6807\u4E0A\u4F20 ",-1),W=N({__name:"setting",setup(X){const m=V().uploadUrl,s=h({name:"",icon:"",startup_pic:"",brief:""}),E={},a=h({uploading:!0,icon:{url:""},startup_pic:{url:""}}),f=b(()=>a.icon.url?a.icon.url:""),g=b(()=>a.startup_pic.url?a.startup_pic.url:"");O(()=>{y()});const p=j(E,P(s)),y=()=>{A()},A=()=>{J({}).then(t=>{t.data.app&&$(()=>{const o=M(t.data.app,["name","icon","startup_pic","brief"]);o.icon=JSON.stringify(t.data.app.icon),o.startup_pic=JSON.stringify(t.data.app.startup_pic),Object.assign(s,o),a.icon.url=t.data.app.icon.url,a.startup_pic.url=t.data.app.startup_pic.url})})},D=t=>{if(t.preventDefault(),Object.assign(s,{icon:JSON.stringify(a.icon),startup_pic:JSON.stringify(a.startup_pic)}),p.value.$touch(),p.value.$invalid)p.value.$errors;else{const o=c(s);G(o).then(u=>{const{code:l}=u||{};l===0?C.success("\u4FDD\u5B58\u6210\u529F"):C.error(u.message)})}},S=t=>{a.icon.url=t.data.item.img},k=t=>{a.startup_pic.url=t.data.item.img};return(t,o)=>{const u=r("h-form-item"),l=r("h-upload"),x=r("h-form"),U=r("h-card");return _(),q(U,{bordered:!1,title:"APP\u8BBE\u7F6E"},{menu:n(()=>[]),default:n(()=>[i(x,{label:"\u57FA\u7840\u8BBE\u7F6E",border:!0},{default:n(()=>[i(u,{label:"App\u540D\u79F0",content:""},{default:n(()=>[v(e("input",{type:"text",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=d=>s.name=d),placeholder:"App\u540D\u79F0"},null,512),[[F,s.name]])]),_:1}),i(u,{label:"APP\u56FE\u6807",content:""},{default:n(()=>[i(l,{name:"file",multiple:!0,action:c(m),onChange:S},{default:n(()=>[e("div",null,[e("div",R,[T,c(f)?(_(),w("img",{key:0,src:c(f)},null,8,Z)):B("v-if",!0),z])])]),_:1},8,["action"])]),_:1}),i(u,{label:"\u542F\u52A8\u753B\u9762",content:""},{default:n(()=>[i(l,{name:"file",multiple:!0,action:c(m),onChange:k},{default:n(()=>[e("div",null,[e("div",H,[K,c(g)?(_(),w("img",{key:0,src:c(g)},null,8,L)):B("v-if",!0),Q])])]),_:1},8,["action"])]),_:1}),i(u,{label:"\u7B80\u4ECB\u63CF\u8FF0",content:""},{default:n(()=>[v(e("textarea",{class:"form-control","onUpdate:modelValue":o[1]||(o[1]=d=>s.brief=d),rows:10,placeholder:""},null,512),[[F,s.brief]])]),_:1}),i(u,null,{default:n(()=>[e("button",{class:"w-24 mb-2 mr-1 btn btn-primary",onClick:D},"\u4FDD\u5B58")]),_:1})]),_:1})]),_:1})}}}),at=I(W,[["__file","/Users/wu./Documents/os/web/www/web/src/views/user/app/setting.vue"]]);export{at as default};