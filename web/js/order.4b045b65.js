(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order"],{"2f9b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-card",{attrs:{bordered:!1}},[a("a-row",[a("a-col",{attrs:{sm:8,xs:24}},[a("head-info",{attrs:{title:"今日预估",bordered:!0}},[a("template",{slot:"content"},[a("vns",{attrs:{start:0,end:t.page.data.report.userDayOrder.money_taobao,times:10,speed:50}})],1)],2)],1),a("a-col",{attrs:{sm:8,xs:24}},[a("head-info",{attrs:{title:"昨日预估",bordered:!0}},[a("template",{slot:"content"},[a("vns",{attrs:{start:0,end:t.page.data.report.userDayOrderYesterday.money_taobao,times:10,speed:50}})],1)],2)],1),a("a-col",{attrs:{sm:8,xs:24}},[a("head-info",{attrs:{title:"累积预估",bordered:!1}},[a("template",{slot:"content"},[a("vns",{attrs:{start:0,end:t.page.data.report.userOrder.money_taobao,times:10,speed:50}})],1)],2)],1)],1)],1),a("a-card",{staticStyle:{"margin-top":"24px"},attrs:{bordered:!1,title:"淘宝订单"}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"订单号"}},[a("a-input",{attrs:{placeholder:""},model:{value:t.queryParam.order_no,callback:function(e){t.$set(t.queryParam,"order_no",e)},expression:"queryParam.order_no"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",style:{overflow:"hidden"}||{}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.table.refresh(!0)}}},[t._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(){return t.queryParam={}}}},[t._v("重置")])],1)])],1)],1)],1),a("s-table",{ref:"table",attrs:{size:"default",rowKey:function(t){return t.id},columns:t.columns,data:t.loadData,showPagination:"auto",bordered:!1},scopedSlots:t._u([{key:"image",fn:function(t,e){return[a("a",{attrs:{target:"_blank",href:"https://detail.tmall.com/item.htm?id="+e.item_id}},[a("img",{staticStyle:{"max-width":"80px"},attrs:{src:e.item_img}})])]}},{key:"pid",fn:function(e,r){return[a("p",[t._v(t._s(r.alimama_id)+"_"+t._s(r.site_id)+"_"+t._s(r.zone_id))]),a("p",[t._v(t._s(r.site_name))]),a("p",[t._v(t._s(r.zone_name))])]}},{key:"status",fn:function(e){return a("span",{},[a("a-badge",{attrs:{status:t._f("statusTypeFilter")(e),text:t._f("statusFilter")(e)}})],1)}},{key:"name",fn:function(e,r){return a("span",{},[a("ellipsis",{attrs:{length:30,tooltip:""}},[t._v(t._s(r.item_title))])],1)}},{key:"action",fn:function(e,r){return a("span",{},[[0===r.status?a("a",{on:{click:function(e){return t.handlePass(r)}}},[t._v("通过")]):t._e()]],2)}}])})],1)],1)},n=[],s=(a("0d03"),a("c32d")),o=a.n(s),i=a("81d1"),d=a("2af9"),u=a("b775"),l={list:"/api/user/order/taobao/list"};function c(t){return Object(u["b"])({url:l.list,method:"post",data:t})}var m=a("688f"),p=a("f2b3"),f={name:"Page",components:{vns:p["a"],STable:d["o"],HeadInfo:i["a"],Ellipsis:d["f"]},data:function(){var t=this;return{mdl:{},advanced:!1,queryParam:{},columns:[{title:"",dataIndex:"",width:140,scopedSlots:{customRender:"image"}},{title:"订单号",dataIndex:"trade_id",width:140},{title:"商品名称",dataIndex:"item_title",scopedSlots:{customRender:"name"}},{title:"状态",dataIndex:"status_name",width:80},{title:"收入比例",dataIndex:"income_rate",width:80},{title:"付款金额",dataIndex:"alipay_total_price",width:80},{title:"预估收益",dataIndex:"pub_share_pre_fee",width:80},{title:"代理佣金",dataIndex:"",width:80},{title:"利润",dataIndex:"",width:80},{title:"渠道",dataIndex:"",width:120,customRender:function(t){return t.relation_id+" | "+t.special_id}},{title:"广告位",dataIndex:"",width:100,scopedSlots:{customRender:"pid"}},{title:"订单时间",dataIndex:"tk_create_time",width:160},{title:"同步时间",dataIndex:"create_date",width:160}],loadData:function(e){return c(Object.assign(e,t.queryParam)).then((function(t){return t.data}))},selectedRowKeys:[],selectedRows:[],optionAlertShow:!1,page:{data:{report:{userOrder:{},userDayOrder:{},userDayOrderYesterday:{}}}}}},mounted:function(){this.init()},methods:{init:function(){this.query()},query:function(){this.$refs.table.refresh(!0),this.query_user()},query_user:function(){var t=this;Object(m["f"])({}).then((function(e){e.data.report&&(t.page.data.report.userOrder=e.data.report)})),Object(m["c"])({}).then((function(e){e.data.report&&(t.page.data.report.userDayOrder=e.data.report),e.data.userDayOrderYesterday&&(t.page.data.report.userDayOrderYesterday=e.data.userDayOrderYesterday)}))},onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectedRows=e},toggleAdvanced:function(){this.advanced=!this.advanced},resetSearchForm:function(){this.queryParam={date:o()(new Date)}}}},h=f,_=a("2877"),b=Object(_["a"])(h,r,n,!1,null,null,null);e["default"]=b.exports},4087:function(t,e,a){"use strict";a("7c3a")},4935:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{attrs:{bordered:!1,title:"全网订单"}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"订单号"}},[a("a-input",{attrs:{placeholder:""},model:{value:t.queryParam.order_no,callback:function(e){t.$set(t.queryParam,"order_no",e)},expression:"queryParam.order_no"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",style:{overflow:"hidden"}||{}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.table.refresh(!0)}}},[t._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(){return t.queryParam={}}}},[t._v("重置")])],1)])],1)],1)],1),a("s-table",{ref:"table",attrs:{size:"default",rowKey:function(t){return t.id},columns:t.columns,data:t.loadData,showPagination:"auto",bordered:""},scopedSlots:t._u([{key:"pid",fn:function(e,r){return[a("p",[t._v(t._s(r.alimama_id)+"_"+t._s(r.site_id)+"_"+t._s(r.zone_id))]),a("p",[t._v(t._s(r.site_name))]),a("p",[t._v(t._s(r.zone_name))])]}},{key:"status",fn:function(e){return a("span",{},[a("a-badge",{attrs:{status:t._f("statusTypeFilter")(e),text:t._f("statusFilter")(e)}})],1)}},{key:"name",fn:function(e,r){return a("span",{},[a("ellipsis",{attrs:{length:30,tooltip:""}},[t._v(t._s(r.title))])],1)}},{key:"action",fn:function(e,r){return a("span",{},[[0===r.status?a("a",{on:{click:function(e){return t.handlePass(r)}}},[t._v("通过")]):t._e()]],2)}}])})],1)},n=[],s=(a("0d03"),a("c32d")),o=a.n(s),i=a("2af9"),d=a("b775"),u={list:"/api/user/order/order/list"};function l(t){return Object(d["b"])({url:u.list,method:"post",data:t})}var c={name:"Page",components:{STable:i["o"],Ellipsis:i["f"]},data:function(){var t=this;return{mdl:{},advanced:!1,queryParam:{},columns:[{title:"订单号",dataIndex:"order_no",width:140},{title:"商品名称",dataIndex:"title",scopedSlots:{customRender:"name"}},{title:"状态",dataIndex:"status_name",width:80},{title:"收入比例",dataIndex:"commission_rate",width:80},{title:"付款金额",dataIndex:"price",width:80},{title:"预估收益",dataIndex:"",width:80},{title:"代理佣金",dataIndex:"",width:80},{title:"利润",dataIndex:"",width:80},{title:"渠道",dataIndex:"",width:120,customRender:function(t){return t.relation_id+" | "+t.special_id}},{title:"广告位",dataIndex:"",width:100,scopedSlots:{customRender:"pid"}},{title:"订单时间",dataIndex:"order_time",width:160},{title:"同步时间",dataIndex:"create_date",width:160}],loadData:function(e){return l(Object.assign(e,t.queryParam)).then((function(t){return t.data}))},selectedRowKeys:[],selectedRows:[],optionAlertShow:!1}},created:function(){},methods:{query:function(){this.$refs.table.refresh(!0)},onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectedRows=e},toggleAdvanced:function(){this.advanced=!this.advanced},resetSearchForm:function(){this.queryParam={date:o()(new Date)}}}},m=c,p=a("2877"),f=Object(p["a"])(m,r,n,!1,null,null,null);e["default"]=f.exports},"611d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{attrs:{bordered:!1,title:"拼多多订单"}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"订单号"}},[a("a-input",{attrs:{placeholder:""},model:{value:t.queryParam.order_no,callback:function(e){t.$set(t.queryParam,"order_no",e)},expression:"queryParam.order_no"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",style:{overflow:"hidden"}||{}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.table.refresh(!0)}}},[t._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(){return t.queryParam={}}}},[t._v("重置")])],1)])],1)],1)],1),a("s-table",{ref:"table",attrs:{size:"default",rowKey:function(t){return t.id},columns:t.columns,data:t.loadData,showPagination:"auto",bordered:""},scopedSlots:t._u([{key:"pid",fn:function(e,r){return[a("p",[t._v(t._s(r.alimama_id)+"_"+t._s(r.site_id)+"_"+t._s(r.zone_id))]),a("p",[t._v(t._s(r.site_name))]),a("p",[t._v(t._s(r.zone_name))])]}},{key:"status",fn:function(e){return a("span",{},[a("a-badge",{attrs:{status:t._f("statusTypeFilter")(e),text:t._f("statusFilter")(e)}})],1)}},{key:"name",fn:function(e,r){return a("span",{},[a("ellipsis",{attrs:{length:30,tooltip:""}},[t._v(t._s(r.goods_name))])],1)}},{key:"action",fn:function(e,r){return a("span",{},[[0===r.status?a("a",{on:{click:function(e){return t.handlePass(r)}}},[t._v("通过")]):t._e()]],2)}}])})],1)},n=[],s=(a("e25e"),a("0d03"),a("c32d")),o=a.n(s),i=a("2af9"),d=a("b775"),u={list:"/api/user/order/pinduoduo/list"};function l(t){return Object(d["b"])({url:u.list,method:"post",data:t})}var c={name:"Page",components:{STable:i["o"],Ellipsis:i["f"]},data:function(){var t=this;return{mdl:{},advanced:!1,queryParam:{},columns:[{title:"订单号",dataIndex:"order_sn",width:140},{title:"商品名称",dataIndex:"title",scopedSlots:{customRender:"name"}},{title:"状态",dataIndex:"status_name",width:80},{title:"收入比例",dataIndex:"promotion_rate",width:80,customRender:function(t,e){return parseInt(e.promotion_rate)/10}},{title:"付款金额",dataIndex:"order_amount",width:80},{title:"预估收益",dataIndex:"promotion_amount",width:80},{title:"代理佣金",dataIndex:"",width:80},{title:"利润",dataIndex:"",width:80},{title:"渠道",dataIndex:"",width:120,customRender:function(t){return t.relation_id+" | "+t.special_id}},{title:"广告位",dataIndex:"p_id",width:100},{title:"订单时间",dataIndex:"order_create_time",width:160},{title:"同步时间",dataIndex:"order.create_date",width:160}],loadData:function(e){return l(Object.assign(e,t.queryParam)).then((function(t){return t.data}))},selectedRowKeys:[],selectedRows:[],optionAlertShow:!1}},created:function(){},methods:{query:function(){this.$refs.table.refresh(!0)},onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectedRows=e},toggleAdvanced:function(){this.advanced=!this.advanced},resetSearchForm:function(){this.queryParam={date:o()(new Date)}}}},m=c,p=a("2877"),f=Object(p["a"])(m,r,n,!1,null,null,null);e["default"]=f.exports},"688f":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"g",(function(){return o})),a.d(e,"f",(function(){return i})),a.d(e,"c",(function(){return d})),a.d(e,"d",(function(){return u})),a.d(e,"e",(function(){return l})),a.d(e,"b",(function(){return c}));var r=a("b775"),n={getReportSale:"/api/common/report/sale",getReportVolume:"/api/common/report/volume",getReportUserOrder:"/api/common/report/user_order",getReportUserDayOrder:"/api/common/report/user_day_order",getReportUserDayOrderList:"/api/common/report/user_day_order_list",getReportUserMemeber:"/api/common/report/user_member",getReportUserDayMemeber:"/api/common/report/user_day_member",getReportUserDayMemeberList:"/api/common/report/user_day_member_list"};function s(t){return Object(r["b"])({url:n.getReportSale,method:"post",data:t})}function o(t){return Object(r["b"])({url:n.getReportVolume,method:"post",data:t})}function i(t){return Object(r["b"])({url:n.getReportUserOrder,method:"post",data:t})}function d(t){return Object(r["b"])({url:n.getReportUserDayOrder,method:"post",data:t})}function u(t){return Object(r["b"])({url:n.getReportUserDayOrderList,method:"post",data:t})}function l(t){return Object(r["b"])({url:n.getReportUserMemeber,method:"post",data:t})}function c(t){return Object(r["b"])({url:n.getReportUserDayMemeberList,method:"post",data:t})}},"7c3a":function(t,e,a){},"81d1":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head-info",class:t.center&&"center"},[a("span",[t._t("title",[t._v(t._s(t.title))])],2),a("p",[t._t("content",[t._v(t._s(t.content))])],2),t.bordered?a("em"):t._e()])},n=[],s={name:"HeadInfo",props:{title:{type:String,default:""},content:{type:String,default:""},bordered:{type:Boolean,default:!1},center:{type:Boolean,default:!0}}},o=s,i=(a("4087"),a("2877")),d=Object(i["a"])(o,r,n,!1,null,"3fd6244e",null);e["a"]=d.exports},f2b3:function(t,e,a){"use strict";a("a9e3"),a("c975"),a("e25e"),a("4795");var r={name:"vue-number-scroll",props:{speed:{type:Number,required:!1,default:50},times:{type:Number,required:!1,default:10},start:{type:Number,required:!1,default:0},end:{type:Number,required:!1,default:0},format:{type:Function,required:!1,default:null}},data:function(){return{showNumber:0}},render:function(t){return t("font",this.format?this.format(this.showNumber):this.showNumber)},created:function(){this.showNumber=this.start},mounted:function(){this.JNumberScroll({speed:this.speed,times:this.times,start:this.start,end:this.end})},watch:{end:function(t,e){this.JNumberScroll({speed:this.speed,times:this.times,start:e,end:t})}},methods:{JNumberScroll:function(t){var e=[],a=Math.abs(t.end-t.start),r=t.end-t.start>0,n=a/t.times,s=String(t.end),o=-1!==s.indexOf(".");!o&&n<1&&(n=1)&&(t.times=a);for(var i=0;i<t.times;i++){var d=r?t.start+n*i:t.start-n*i,u=0;o&&(u=s.length-s.indexOf(".")-1),e.push(o?parseInt(d*Math.pow(10,u))/Math.pow(10,u):parseInt(d))}(r&&e[e.length-1]<t.end||!r&&e[e.length-1]>t.end)&&e.push(t.end);var l=0,c=this,m=setInterval((function(){l<e.length?c.showNumber=e[l++]:clearInterval(m)}),t.speed)}}};e["a"]=r}}]);