(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order"],{"11b4":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-card",{attrs:{bordered:!1,title:"全网订单"}},[r("div",{staticClass:"table-page-search-wrapper"},[r("a-form",{attrs:{layout:"inline"}},[r("a-row",{attrs:{gutter:48}},[r("a-col",{attrs:{md:6,sm:24}},[r("a-form-item",{attrs:{label:"订单号"}},[r("a-input",{attrs:{placeholder:""},model:{value:t.queryParam.order_no,callback:function(e){t.$set(t.queryParam,"order_no",e)},expression:"queryParam.order_no"}})],1)],1),r("a-col",{attrs:{md:6,sm:24}},[r("span",{staticClass:"table-page-search-submitButtons",style:{overflow:"hidden"}||{}},[r("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.table.refresh(!0)}}},[t._v("查询")]),r("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(){return t.queryParam={}}}},[t._v("重置")])],1)])],1)],1)],1),r("s-table",{ref:"table",attrs:{size:"default",rowKey:function(t){return t.id},columns:t.columns,data:t.loadData,showPagination:"auto",bordered:""},scopedSlots:t._u([{key:"pid",fn:function(e,a){return[r("p",[t._v(t._s(a.alimama_id)+"_"+t._s(a.site_id)+"_"+t._s(a.zone_id))]),r("p",[t._v(t._s(a.site_name))]),r("p",[t._v(t._s(a.zone_name))])]}},{key:"status",fn:function(e){return r("span",{},[r("a-badge",{attrs:{status:t._f("statusTypeFilter")(e),text:t._f("statusFilter")(e)}})],1)}},{key:"name",fn:function(e,a){return r("span",{},[r("ellipsis",{attrs:{length:30,tooltip:""}},[t._v(t._s(a.title))])],1)}},{key:"action",fn:function(e,a){return r("span",{},[[0===a.status?r("a",{on:{click:function(e){return t.handlePass(a)}}},[t._v("通过")]):t._e()]],2)}}])})],1)},n=[],s=(r("0d03"),r("c32d")),o=r.n(s),d=r("2af9"),i=r("b775"),u={list:"/api/user/order/app/list"};function l(t){return Object(i["b"])({url:u.list,method:"post",data:t})}var c={name:"Page",components:{STable:d["o"],Ellipsis:d["f"]},data:function(){var t=this;return{mdl:{},advanced:!1,queryParam:{},columns:[{title:"订单号",dataIndex:"order_no",width:140},{title:"商品名称",dataIndex:"title",scopedSlots:{customRender:"name"}},{title:"状态",dataIndex:"status_name",width:80},{title:"收入比例",dataIndex:"commission_rate",width:80},{title:"付款金额",dataIndex:"price",width:80},{title:"预估收益",dataIndex:"",width:80},{title:"代理佣金",dataIndex:"",width:80},{title:"利润",dataIndex:"",width:80},{title:"渠道",dataIndex:"",width:120,customRender:function(t){return t.relation_id+" | "+t.special_id}},{title:"广告位",dataIndex:"",width:100,scopedSlots:{customRender:"pid"}},{title:"订单时间",dataIndex:"order_time",width:160},{title:"同步时间",dataIndex:"created_at",width:160}],loadData:function(e){return l(Object.assign(e,t.queryParam)).then((function(t){return t.data}))},selectedRowKeys:[],selectedRows:[],optionAlertShow:!1}},created:function(){},methods:{query:function(){this.$refs.table.refresh(!0)},onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectedRows=e},toggleAdvanced:function(){this.advanced=!this.advanced},resetSearchForm:function(){this.queryParam={date:o()(new Date)}}}},m=c,p=r("2877"),f=Object(p["a"])(m,a,n,!1,null,null,null);e["default"]=f.exports},4087:function(t,e,r){"use strict";r("7c3a")},"53ce":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a-card",{attrs:{bordered:!1}},[r("a-row",[r("a-col",{attrs:{sm:8,xs:24}},[r("head-info",{attrs:{title:"今日预估",bordered:!0}},[r("template",{slot:"content"},[r("vns",{attrs:{start:0,end:t.page.data.report.userDayOrder.money_taobao,times:10,speed:50}})],1)],2)],1),r("a-col",{attrs:{sm:8,xs:24}},[r("head-info",{attrs:{title:"昨日预估",bordered:!0}},[r("template",{slot:"content"},[r("vns",{attrs:{start:0,end:t.page.data.report.userDayOrderYesterday.money_taobao,times:10,speed:50}})],1)],2)],1),r("a-col",{attrs:{sm:8,xs:24}},[r("head-info",{attrs:{title:"累积预估",bordered:!1}},[r("template",{slot:"content"},[r("vns",{attrs:{start:0,end:t.page.data.report.userOrder.money_taobao,times:10,speed:50}})],1)],2)],1)],1)],1),r("a-card",{staticStyle:{"margin-top":"24px"},attrs:{bordered:!1,title:"淘宝订单"}},[r("div",{staticClass:"table-page-search-wrapper"},[r("a-form",{attrs:{layout:"inline"}},[r("a-row",{attrs:{gutter:48}},[r("a-col",{attrs:{md:6,sm:24}},[r("a-form-item",{attrs:{label:"订单号"}},[r("a-input",{attrs:{placeholder:""},model:{value:t.queryParam.order_no,callback:function(e){t.$set(t.queryParam,"order_no",e)},expression:"queryParam.order_no"}})],1)],1),r("a-col",{attrs:{md:6,sm:24}},[r("span",{staticClass:"table-page-search-submitButtons",style:{overflow:"hidden"}||{}},[r("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.table.refresh(!0)}}},[t._v("查询")]),r("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(){return t.queryParam={}}}},[t._v("重置")])],1)])],1)],1)],1),r("s-table",{ref:"table",attrs:{size:"default",rowKey:function(t){return t.id},columns:t.columns,data:t.loadData,showPagination:"auto",bordered:!1},scopedSlots:t._u([{key:"image",fn:function(t,e){return[r("a",{attrs:{target:"_blank",href:"https://detail.tmall.com/item.htm?id="+e.prod_id}},[r("img",{staticStyle:{"max-width":"60px"},attrs:{src:e.prod_img}})])]}},{key:"pid",fn:function(e,r){return[t._v(" "+t._s(r.pid)+t._s(r.zone_name)+" ")]}},{key:"status",fn:function(e){return r("span",{},[r("a-badge",{attrs:{status:t._f("statusTypeFilter")(e),text:t._f("statusFilter")(e)}})],1)}},{key:"name",fn:function(e,a){return r("span",{},[r("ellipsis",{attrs:{length:30,tooltip:""}},[t._v(t._s(a.prod_name))])],1)}},{key:"action",fn:function(e,a){return r("span",{},[[0===a.status?r("a",{on:{click:function(e){return t.handlePass(a)}}},[t._v("通过")]):t._e()]],2)}}])})],1)],1)},n=[],s=(r("0d03"),r("c32d")),o=r.n(s),d=r("81d1"),i=r("2af9"),u=r("b775"),l={list:"/api/user/order/order/list"};function c(t){return Object(u["b"])({url:l.list,method:"post",data:t})}var m=r("688f"),p=r("f2b3"),f={name:"Page",components:{vns:p["a"],STable:i["o"],HeadInfo:d["a"],Ellipsis:i["f"]},data:function(){var t=this;return{mdl:{},advanced:!1,queryParam:{},columns:[{title:"",dataIndex:"",width:80,scopedSlots:{customRender:"image"}},{title:"订单号",dataIndex:"order_no",width:140},{title:"商品名称",dataIndex:"prod_name",scopedSlots:{customRender:"name"}},{title:"状态",dataIndex:"status_name",width:60},{title:"订单类型",dataIndex:"order_type",width:90},{title:"付款金额",dataIndex:"am",width:80},{title:"预估收益",dataIndex:"commision",width:80},{title:"渠道",dataIndex:"",width:120,customRender:function(t){return t.relation_id+" | "+t.special_id}},{title:"广告位",dataIndex:"",width:80,scopedSlots:{customRender:"pid"}},{title:"订单时间",dataIndex:"order_time",width:120},{title:"同步时间",dataIndex:"created_at",width:120}],loadData:function(e){return c(Object.assign(e,t.queryParam)).then((function(t){return t.data}))},selectedRowKeys:[],selectedRows:[],optionAlertShow:!1,page:{data:{report:{userOrder:{},userDayOrder:{},userDayOrderYesterday:{}}}}}},mounted:function(){this.init()},methods:{init:function(){this.query()},query:function(){this.$refs.table.refresh(!0),this.query_user()},query_user:function(){var t=this;Object(m["f"])({}).then((function(e){e.data.report&&(t.page.data.report.userOrder=e.data.report)})),Object(m["c"])({}).then((function(e){e.data.report&&(t.page.data.report.userDayOrder=e.data.report),e.data.userDayOrderYesterday&&(t.page.data.report.userDayOrderYesterday=e.data.userDayOrderYesterday)}))},onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectedRows=e},toggleAdvanced:function(){this.advanced=!this.advanced},resetSearchForm:function(){this.queryParam={date:o()(new Date)}}}},h=f,b=r("2877"),_=Object(b["a"])(h,a,n,!1,null,null,null);e["default"]=_.exports},"688f":function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"g",(function(){return o})),r.d(e,"f",(function(){return d})),r.d(e,"c",(function(){return i})),r.d(e,"d",(function(){return u})),r.d(e,"e",(function(){return l})),r.d(e,"b",(function(){return c}));var a=r("b775"),n={getReportSale:"/api/common/report/sale",getReportVolume:"/api/common/report/volume",getReportUserOrder:"/api/common/report/user_order",getReportUserDayOrder:"/api/common/report/user_day_order",getReportUserDayOrderList:"/api/common/report/user_day_order_list",getReportUserMemeber:"/api/common/report/user_member",getReportUserDayMemeber:"/api/common/report/user_day_member",getReportUserDayMemeberList:"/api/common/report/user_day_member_list"};function s(t){return Object(a["b"])({url:n.getReportSale,method:"post",data:t})}function o(t){return Object(a["b"])({url:n.getReportVolume,method:"post",data:t})}function d(t){return Object(a["b"])({url:n.getReportUserOrder,method:"post",data:t})}function i(t){return Object(a["b"])({url:n.getReportUserDayOrder,method:"post",data:t})}function u(t){return Object(a["b"])({url:n.getReportUserDayOrderList,method:"post",data:t})}function l(t){return Object(a["b"])({url:n.getReportUserMemeber,method:"post",data:t})}function c(t){return Object(a["b"])({url:n.getReportUserDayMemeberList,method:"post",data:t})}},"7c3a":function(t,e,r){},"81d1":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"head-info",class:t.center&&"center"},[r("span",[t._t("title",[t._v(t._s(t.title))])],2),r("p",[t._t("content",[t._v(t._s(t.content))])],2),t.bordered?r("em"):t._e()])},n=[],s={name:"HeadInfo",props:{title:{type:String,default:""},content:{type:String,default:""},bordered:{type:Boolean,default:!1},center:{type:Boolean,default:!0}}},o=s,d=(r("4087"),r("2877")),i=Object(d["a"])(o,a,n,!1,null,"3fd6244e",null);e["a"]=i.exports},f2b3:function(t,e,r){"use strict";r("a9e3"),r("c975"),r("e25e"),r("4795");var a={name:"vue-number-scroll",props:{speed:{type:Number,required:!1,default:50},times:{type:Number,required:!1,default:10},start:{type:Number,required:!1,default:0},end:{type:Number,required:!1,default:0},format:{type:Function,required:!1,default:null}},data:function(){return{showNumber:0}},render:function(t){return t("font",this.format?this.format(this.showNumber):this.showNumber)},created:function(){this.showNumber=this.start},mounted:function(){this.JNumberScroll({speed:this.speed,times:this.times,start:this.start,end:this.end})},watch:{end:function(t,e){this.JNumberScroll({speed:this.speed,times:this.times,start:e,end:t})}},methods:{JNumberScroll:function(t){var e=[],r=Math.abs(t.end-t.start),a=t.end-t.start>0,n=r/t.times,s=String(t.end),o=-1!==s.indexOf(".");!o&&n<1&&(n=1)&&(t.times=r);for(var d=0;d<t.times;d++){var i=a?t.start+n*d:t.start-n*d,u=0;o&&(u=s.length-s.indexOf(".")-1),e.push(o?parseInt(i*Math.pow(10,u))/Math.pow(10,u):parseInt(i))}(a&&e[e.length-1]<t.end||!a&&e[e.length-1]>t.end)&&e.push(t.end);var l=0,c=this,m=setInterval((function(){l<e.length?c.showNumber=e[l++]:clearInterval(m)}),t.speed)}}};e["a"]=a}}]);