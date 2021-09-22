(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"324c":function(e,t,a){"use strict";a("cbd2")},"4df47":function(e,t,a){"use strict";a("5f81")},"5f81":function(e,t,a){},"717f":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main user-layout-register"},[e._m(0),a("a-form",{ref:"formRegister",attrs:{form:e.form,id:"formRegister"}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,type:"email",message:"请输入邮箱地址"}],validateTrigger:["change","blur"]}],expression:"['email', {rules: [{ required: true, type: 'email', message: '请输入邮箱地址' }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",type:"text",placeholder:"邮箱"}})],1),a("a-popover",{attrs:{placement:"rightTop",trigger:["focus"],getPopupContainer:function(e){return e.parentElement}},model:{value:e.state.passwordLevelChecked,callback:function(t){e.$set(e.state,"passwordLevelChecked",t)},expression:"state.passwordLevelChecked"}},[a("template",{slot:"content"},[a("div",{style:{width:"240px"}},[a("div",{class:["user-register",e.passwordLevelClass]},[e._v("强度："),a("span",[e._v(e._s(e.passwordLevelName))])]),a("a-progress",{attrs:{percent:e.state.percent,showInfo:!1,strokeColor:e.passwordLevelColor}}),a("div",{staticStyle:{"margin-top":"10px"}},[a("span",[e._v("请至少输入 6 个字符。请不要使用容易被猜到的密码。")])])],1)]),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"至少6位密码，区分大小写"},{validator:this.handlePasswordLevel}],validateTrigger:["change","blur"]}],expression:"['password', {rules: [{ required: true, message: '至少6位密码，区分大小写'}, { validator: this.handlePasswordLevel }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"至少6位密码，区分大小写"},on:{click:e.handlePasswordInputClick}})],1)],2),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password2",{rules:[{required:!0,message:"至少6位密码，区分大小写"},{validator:this.handlePasswordCheck}],validateTrigger:["change","blur"]}],expression:"['password2', {rules: [{ required: true, message: '至少6位密码，区分大小写' }, { validator: this.handlePasswordCheck }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"确认密码"}})],1),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{rules:[{required:!0,message:"请输入正确的手机号",pattern:/^1[3456789]\d{9}$/},{validator:this.handlePhoneCheck}],validateTrigger:["change","blur"]}],expression:"['mobile', {rules: [{ required: true, message: '请输入正确的手机号', pattern: /^1[3456789]\\d{9}$/ }, { validator: this.handlePhoneCheck } ], validateTrigger: ['change', 'blur'] }]"}],attrs:{size:"large",placeholder:"11 位手机号"}},[a("a-select",{attrs:{slot:"addonBefore",size:"large",defaultValue:"+86"},slot:"addonBefore"},[a("a-select-option",{attrs:{value:"+86"}},[e._v("+86")]),a("a-select-option",{attrs:{value:"+87"}},[e._v("+87")])],1)],1)],1),a("a-row",{attrs:{gutter:16}},[a("a-col",{staticClass:"gutter-row",attrs:{span:16}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["captcha",{rules:[{required:!0,message:"请输入验证码"}],validateTrigger:"blur"}],expression:"['captcha', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]"}],attrs:{size:"large",type:"text",placeholder:"验证码"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),a("a-col",{staticClass:"gutter-row",attrs:{span:8}},[a("a-button",{staticClass:"getCaptcha",attrs:{size:"large",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(e.state.smsSendBtn?e.state.time+" s":"获取验证码")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha(t)}}})],1)],1),a("a-form-item",[a("a-button",{staticClass:"register-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.registerBtn,disabled:e.registerBtn},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[e._v("注册 ")]),a("router-link",{staticClass:"login",attrs:{to:{name:"login"}}},[e._v("使用已有账户登录")])],1)],1)],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",[a("span",[e._v("注册")])])}],i=a("5530"),o=(a("498a"),a("4795"),a("ac0d")),n=a("7ded"),l={0:"低",1:"低",2:"中",3:"强"},c={0:"error",1:"error",2:"warning",3:"success"},d={0:"#ff0000",1:"#ff0000",2:"#ff7e05",3:"#52c41a"},u={name:"Register",components:{},mixins:[o["c"]],data:function(){return{form:this.$form.createForm(this),state:{time:60,smsSendBtn:!1,passwordLevel:0,passwordLevelChecked:!1,percent:10,progressColor:"#FF0000"},registerBtn:!1}},computed:{passwordLevelClass:function(){return c[this.state.passwordLevel]},passwordLevelName:function(){return l[this.state.passwordLevel]},passwordLevelColor:function(){return d[this.state.passwordLevel]}},methods:{handlePasswordLevel:function(e,t,a){var r=0;/[0-9]/.test(t)&&r++,/[a-zA-Z]/.test(t)&&r++,/[^0-9a-zA-Z_]/.test(t)&&r++,this.state.passwordLevel=r,this.state.percent=30*r,r>=2?(r>=3&&(this.state.percent=100),a()):(0===r&&(this.state.percent=10),a(new Error("密码强度不够")))},handlePasswordCheck:function(e,t,a){var r=this.form.getFieldValue("password");void 0===t&&a(new Error("请输入密码")),t&&r&&t.trim()!==r.trim()&&a(new Error("两次密码不一致")),a()},handlePhoneCheck:function(e,t,a){a()},handlePasswordInputClick:function(){this.isMobile()?this.state.passwordLevelChecked=!1:this.state.passwordLevelChecked=!0},handleSubmit:function(){var e=this.form.validateFields,t=this.state,a=this.$router;e({force:!0},(function(e,r){e||(t.passwordLevelChecked=!1,a.push({name:"registerResult",params:Object(i["a"])({},r)}))}))},getCaptcha:function(e){var t=this;e.preventDefault();var a=this.form.validateFields,r=this.state,s=this.$message,i=this.$notification;a(["mobile"],{force:!0},(function(e,a){if(!e){r.smsSendBtn=!0;var o=window.setInterval((function(){r.time--<=0&&(r.time=60,r.smsSendBtn=!1,window.clearInterval(o))}),1e3),l=s.loading("验证码发送中..",0);Object(n["c"])({mobile:a.mobile}).then((function(e){setTimeout(l,2500),i["success"]({message:"提示",description:"验证码获取成功，您的验证码为："+e.result.captcha,duration:8})}))["catch"]((function(e){setTimeout(l,1),clearInterval(o),r.time=60,r.smsSendBtn=!1,t.requestFailed(e)}))}}))},requestFailed:function(e){this.$notification["error"]({message:"错误",description:((e.response||{}).data||{}).message||"请求出现错误，请稍后再试",duration:4}),this.registerBtn=!1}},watch:{"state.passwordLevel":function(e){}}},p=u,m=(a("4df47"),a("9069"),a("2877")),g=Object(m["a"])(p,r,s,!1,null,"db349910",null);t["default"]=g.exports},7803:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main user-layout-register"},[e._m(0),a("a-form",{ref:"formRegister",attrs:{form:e.form,id:"formRegister"}},[e.isLoginError?a("a-alert",{staticStyle:{"margin-bottom":"24px"},attrs:{type:"error",showIcon:"",message:e.loginError}}):e._e(),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"请输入用户名"}],validateTrigger:["change","blur"]}],expression:"['username', {rules: [{ required: true, message: '请输入用户名' }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",type:"text",placeholder:"用户名"}})],1),a("a-popover",{attrs:{placement:"rightTop",trigger:["focus"],getPopupContainer:function(e){return e.parentElement}},model:{value:e.state.passwordLevelChecked,callback:function(t){e.$set(e.state,"passwordLevelChecked",t)},expression:"state.passwordLevelChecked"}},[a("template",{slot:"content"},[a("div",{style:{width:"240px"}},[a("div",{class:["user-register",e.passwordLevelClass]},[e._v("强度："),a("span",[e._v(e._s(e.passwordLevelName))])]),a("a-progress",{attrs:{percent:e.state.percent,showInfo:!1,strokeColor:e.passwordLevelColor}}),a("div",{staticStyle:{"margin-top":"10px"}},[a("span",[e._v("请至少输入 6 个字符。请不要使用容易被猜到的密码。")])])],1)]),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"至少6位密码，区分大小写"},{validator:this.handlePasswordLevel}],validateTrigger:["change","blur"]}],expression:"['password', {rules: [{ required: true, message: '至少6位密码，区分大小写'}, { validator: this.handlePasswordLevel }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"至少6位密码，区分大小写"},on:{click:e.handlePasswordInputClick}})],1)],2),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password_confirm",{rules:[{required:!0,message:"至少6位密码，区分大小写"},{validator:this.handlePasswordCheck}],validateTrigger:["change","blur"]}],expression:"['password_confirm', {rules: [{ required: true, message: '至少6位密码，区分大小写' }, { validator: this.handlePasswordCheck }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"确认密码"}})],1),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{rules:[{required:!0,message:"请输入正确的手机号",pattern:/^1[3456789]\d{9}$/},{validator:this.handlePhoneCheck}],validateTrigger:["change","blur"]}],expression:"['mobile', {rules: [{ required: true, message: '请输入正确的手机号', pattern: /^1[3456789]\\d{9}$/ }, { validator: this.handlePhoneCheck } ], validateTrigger: ['change', 'blur'] }]"}],attrs:{size:"large",placeholder:"11 位手机号"}},[a("a-select",{attrs:{slot:"addonBefore",size:"large",defaultValue:"+86"},slot:"addonBefore"},[a("a-select-option",{attrs:{value:"+86"}},[e._v("+86")]),a("a-select-option",{attrs:{value:"+87"}},[e._v("+87")])],1)],1)],1),a("a-row",{attrs:{gutter:16}},[a("a-col",{staticClass:"gutter-row",attrs:{span:16}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["captcha",{rules:[{required:!0,message:"请输入验证码"}],validateTrigger:"blur"}],expression:"['captcha', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]"}],attrs:{size:"large",type:"text",placeholder:"验证码"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),a("a-col",{staticClass:"gutter-row",attrs:{span:8}},[a("a-button",{staticClass:"getCaptcha",attrs:{size:"large",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(e.state.smsSendBtn?e.state.time+" s":"获取验证码")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha(t)}}})],1)],1),a("a-form-item",[a("a-button",{staticClass:"register-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.registerBtn,disabled:e.registerBtn},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[e._v("注册 ")]),a("router-link",{staticClass:"login",attrs:{to:{name:"login"}}},[e._v("使用已有账户登录")])],1)],1)],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",[a("span",[e._v("注册")])])}],i=a("5530"),o=(a("498a"),a("d3b7"),a("4795"),a("6821")),n=a.n(o),l=a("ca00"),c=a("ac0d"),d=a("7ded"),u=a("5880"),p={0:"低",1:"低",2:"中",3:"强"},m={0:"error",1:"error",2:"warning",3:"success"},g={0:"#ff0000",1:"#ff0000",2:"#ff7e05",3:"#52c41a"},h={name:"Register",components:{},mixins:[c["c"]],data:function(){return{form:this.$form.createForm(this),state:{time:300,smsSendBtn:!1,passwordLevel:0,passwordLevelChecked:!1,percent:10,progressColor:"#FF0000"},registerBtn:!1,isLoginError:!1,loginError:""}},computed:{passwordLevelClass:function(){return m[this.state.passwordLevel]},passwordLevelName:function(){return p[this.state.passwordLevel]},passwordLevelColor:function(){return g[this.state.passwordLevel]}},methods:Object(i["a"])(Object(i["a"])({},Object(u["mapActions"])(["Register"])),{},{handlePasswordLevel:function(e,t,a){var r=0;/[0-9]/.test(t)&&r++,/[a-zA-Z]/.test(t)&&r++,/[^0-9a-zA-Z_]/.test(t)&&r++,this.state.passwordLevel=r,this.state.percent=30*r,r>=2?(r>=3&&(this.state.percent=100),a()):(0===r&&(this.state.percent=10),a(new Error("密码强度不够")))},handlePasswordCheck:function(e,t,a){var r=this.form.getFieldValue("password");void 0===t&&a(new Error("请输入密码")),t&&r&&t.trim()!==r.trim()&&a(new Error("两次密码不一致")),a()},handlePhoneCheck:function(e,t,a){a()},handlePasswordInputClick:function(){this.isMobile()?this.state.passwordLevelChecked=!1:this.state.passwordLevelChecked=!0},handleSubmit:function(){var e=this,t=this.form.validateFields,a=this.state,r=this.Register;t({force:!0},(function(t,s){if(!t){a.passwordLevelChecked=!1;var o=Object(i["a"])({},s);e.registerBtn=!0,r(o).then((function(t){return e.loginSuccess(t)}))["catch"]((function(t){return e.requestFailed(t)}))["finally"]((function(){e.registerBtn=!1}))}}))},getCaptcha:function(e){var t=this;e.preventDefault();var a=this.form.validateFields,r=this.state,s=this.$message,i=this.$notification;a(["mobile"],{force:!0},(function(e,a){if(!e){r.smsSendBtn=!0;var o=window.setInterval((function(){r.time--<=0&&(r.time=300,r.smsSendBtn=!1,window.clearInterval(o))}),1e3),l=s.loading("验证码发送中..",0);Object(d["c"])({mobile:a.mobile,sms_token:n()(a.mobile)}).then((function(e){setTimeout(l,1),0===e.code?i["success"]({message:"提示",description:"验证码获取成功",duration:8}):(clearInterval(o),r.time=300,r.smsSendBtn=!1)}))["catch"]((function(e){setTimeout(l,1),clearInterval(o),r.time=300,r.smsSendBtn=!1,t.requestFailed(e)}))}}))},loginSuccess:function(e){var t=this;this.$router.push({name:"home"}),setTimeout((function(){t.$notification.success({message:"欢迎",description:"".concat(Object(l["a"])(),"，欢迎回来")})}),1e3),this.isLoginError=!1},requestFailed:function(e){var t=(e||{}).message;t&&(this.loginError=t,this.isLoginError=!0),this.registerBtn=!1}}),watch:{"state.passwordLevel":function(e){}}},f=h,v=(a("7fba"),a("86cf"),a("2877")),b=Object(v["a"])(f,r,s,!1,null,"5726642a",null);t["default"]=b.exports},"7fba":function(e,t,a){"use strict";a("ed9e")},"86cf":function(e,t,a){"use strict";a("891b")},"891b":function(e,t,a){},9069:function(e,t,a){"use strict";a("a604")},"90b4":function(e,t,a){},a604:function(e,t,a){},ca03:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("result",{attrs:{isSuccess:!0,content:!1,title:e.email,description:e.description}},[a("template",{slot:"action"},[a("a-button",{attrs:{size:"large",type:"primary"}},[e._v("查看邮箱")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{size:"large"},on:{click:e.goHomeHandle}},[e._v("返回首页")])],1)],2)},s=[],i=a("2af9"),o={name:"RegisterResult",components:{Result:i["n"]},data:function(){return{description:"激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。",form:{}}},computed:{email:function(){var e=this.form&&this.form.email||"xxx",t="你的账户：".concat(e," 注册成功");return t}},created:function(){this.form=this.$route.params},methods:{goHomeHandle:function(){this.$router.push({name:"login"})}}},n=o,l=a("2877"),c=Object(l["a"])(n,r,s,!1,null,"fe162080",null);t["default"]=c.exports},cbd2:function(e,t,a){},dd7b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("a-form",{ref:"formLogin",staticClass:"user-layout-login",attrs:{id:"formLogin",form:e.form},on:{submit:e.handleSubmit}},[a("a-tabs",{attrs:{activeKey:e.customActiveKey,tabBarStyle:{textAlign:"center",borderBottom:"unset"}},on:{change:e.handleTabClick}},[a("a-tab-pane",{key:"tab1",attrs:{tab:"账号密码登录"}},[e.isLoginError?a("a-alert",{staticStyle:{"margin-bottom":"24px"},attrs:{type:"error",showIcon:"",message:e.loginError}}):e._e(),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"请输入帐户名或邮箱地址"},{validator:e.handleUsernameOrEmail}],validateTrigger:"change"}],expression:"[\n              'username',\n              {rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}\n            ]"}],attrs:{size:"large",type:"text",placeholder:"账户: 用户名/邮箱/手机号"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码"}],validateTrigger:"blur"}],expression:"[\n              'password',\n              {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}\n            ]"}],attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"密码: 输入设置密码"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1)],1),a("a-tab-pane",{key:"tab2",attrs:{tab:"手机号登录"}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{rules:[{required:!0,pattern:/^1[3456789]\d{9}$/,message:"请输入正确的手机号"}],validateTrigger:"change"}],expression:"['mobile', {rules: [{ required: true, pattern: /^1[3456789]\\d{9}$/, message: '请输入正确的手机号' }], validateTrigger: 'change'}]"}],attrs:{size:"large",type:"text",placeholder:"手机号"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mobile"},slot:"prefix"})],1)],1),a("a-row",{attrs:{gutter:16}},[a("a-col",{staticClass:"gutter-row",attrs:{span:16}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["captcha",{rules:[{required:!0,message:"请输入验证码"}],validateTrigger:"blur"}],expression:"['captcha', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]"}],attrs:{size:"large",type:"text",placeholder:"验证码"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),a("a-col",{staticClass:"gutter-row",attrs:{span:8}},[a("a-button",{staticClass:"getCaptcha",attrs:{tabindex:"-1",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(e.state.smsSendBtn?e.state.time+" s":"获取验证码")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha(t)}}})],1)],1)],1)],1),a("a-form-item",[a("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["rememberMe"],expression:"['rememberMe']"}]},[e._v("自动登录")]),a("router-link",{staticClass:"forge-password",staticStyle:{float:"right"},attrs:{to:{name:"recover",params:{user:""}}}},[e._v("忘记密码")])],1),a("a-form-item",{staticStyle:{"margin-top":"24px"}},[a("a-button",{staticClass:"login-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.state.loginBtn,disabled:e.state.loginBtn}},[e._v("确定")])],1),a("div",{staticClass:"user-login-other"},[a("router-link",{staticClass:"register",attrs:{to:{name:"register"}}},[e._v("注册账户")])],1)],1),e.requiredTwoStepCaptcha?a("two-step-captcha",{attrs:{visible:e.stepCaptchaVisible},on:{success:e.stepCaptchaSuccess,cancel:e.stepCaptchaCancel}}):e._e()],1)},s=[],i=a("5530"),o=(a("d3b7"),a("4795"),a("6821")),n=a.n(o),l=function(){var e=this,t=this,a=t.$createElement,r=t._self._c||a;return r("a-modal",{attrs:{centered:"",maskClosable:!1},on:{cancel:t.handleCancel},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[r("div",{style:{textAlign:"center"},attrs:{slot:"title"},slot:"title"},[t._v("两步验证")]),r("template",{slot:"footer"},[r("div",{style:{textAlign:"center"}},[r("a-button",{key:"back",on:{click:t.handleCancel}},[t._v("返回")]),r("a-button",{key:"submit",attrs:{type:"primary",loading:t.stepLoading},on:{click:t.handleStepOk}},[t._v(" 继续 ")])],1)]),r("a-spin",{attrs:{spinning:t.stepLoading}},[r("a-form",{attrs:{layout:"vertical","auto-form-create":function(t){e.form=t}}},[r("div",{staticClass:"step-form-wrapper"},[t.stepLoading?r("p",{staticStyle:{"text-align":"center"}},[t._v("正在验证.."),r("br"),t._v("请稍后")]):r("p",{staticStyle:{"text-align":"center"}},[t._v("请在手机中打开 Google Authenticator 或两步验证 APP"),r("br"),t._v("输入 6 位动态码")]),r("a-form-item",{style:{textAlign:"center"},attrs:{hasFeedback:"",fieldDecoratorId:"stepCode",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入 6 位动态码!",pattern:/^\d{6}$/,len:6}]}}},[r("a-input",{style:{textAlign:"center"},attrs:{placeholder:"000000"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleStepOk(e)}}})],1),r("p",{staticStyle:{"text-align":"center"}},[r("a",{on:{click:t.onForgeStepCode}},[t._v("遗失手机?")])])],1)])],1)],2)},c=[],d={props:{visible:{type:Boolean,default:!1}},data:function(){return{stepLoading:!1,form:null}},methods:{handleStepOk:function(){var e=this,t=this;this.stepLoading=!0,this.form.validateFields((function(a,r){a?(e.stepLoading=!1,e.$emit("error",{err:a})):setTimeout((function(){t.stepLoading=!1,t.$emit("success",{values:r})}),2e3)}))},handleCancel:function(){this.visible=!1,this.$emit("cancel")},onForgeStepCode:function(){}}},u=d,p=(a("edd4"),a("2877")),m=Object(p["a"])(u,l,c,!1,null,"4a462ef6",null),g=m.exports,h=a("5880"),f=a("ca00"),v=a("7ded"),b={components:{TwoStepCaptcha:g},data:function(){return{customActiveKey:"tab1",loginBtn:!1,loginType:0,isLoginError:!1,loginError:"",requiredTwoStepCaptcha:!1,stepCaptchaVisible:!1,form:this.$form.createForm(this),state:{time:300,loginBtn:!1,loginType:0,smsSendBtn:!1}}},created:function(){var e=this;Object(v["a"])({}).then((function(t){e.requiredTwoStepCaptcha=1===t.data.stepCode}))["catch"]((function(){e.requiredTwoStepCaptcha=!1}))},methods:Object(i["a"])(Object(i["a"])({},Object(h["mapActions"])(["Login","Logout"])),{},{handleUsernameOrEmail:function(e,t,a){var r=this.state,s=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;s.test(t)?r.loginType=0:r.loginType=1,a()},handleTabClick:function(e){this.customActiveKey=e},handleSubmit:function(e){var t=this;e.preventDefault();var a=this.form.validateFields,r=this.state,s=this.customActiveKey,o=this.Login;r.loginBtn=!0;var n="tab1"===s?["username","password"]:["mobile","captcha"];a(n,{force:!0},(function(e,a){if(e)setTimeout((function(){r.loginBtn=!1}),600);else{var s=Object(i["a"])({},a);delete s.username,s[r.loginType?"username":"email"]=a.username,s.password=a.password,o(s).then((function(e){return t.loginSuccess(e)}))["catch"]((function(e){return t.requestFailed(e)}))["finally"]((function(){r.loginBtn=!1}))}}))},getCaptcha:function(e){var t=this;e.preventDefault();var a=this.form.validateFields,r=this.state;a(["mobile"],{force:!0},(function(e,a){if(!e){r.smsSendBtn=!0;var s=window.setInterval((function(){r.time--<=0&&(r.time=300,r.smsSendBtn=!1,window.clearInterval(s))}),1e3),i=t.$message.loading("验证码发送中..",0);Object(v["d"])({mobile:a.mobile,sms_token:n()(a.mobile)}).then((function(e){setTimeout(i,1),0===e.code?t.$notification["success"]({message:"提示",description:"验证码发送成功",duration:8}):(clearInterval(s),r.time=300,r.smsSendBtn=!1,t.requestFailed(e))}))["catch"]((function(e){setTimeout(i,1),clearInterval(s),r.time=300,r.smsSendBtn=!1,t.requestFailed(e)}))}}))},stepCaptchaSuccess:function(e){this.loginSuccess()},stepCaptchaCancel:function(){var e=this;this.Logout().then((function(){e.loginBtn=!1,e.stepCaptchaVisible=!1}))},loginSuccess:function(e){var t=this;this.$router.push({name:"home"}),setTimeout((function(){t.$notification.success({message:"欢迎",description:"".concat(Object(f["a"])(),"，欢迎回来")})}),1e3),this.isLoginError=!1},requestFailed:function(e){var t=(e||{}).message;t&&(this.loginError=t,this.isLoginError=!0)}})},w=b,C=(a("324c"),Object(p["a"])(w,r,s,!1,null,"53c10491",null));t["default"]=C.exports},ed9e:function(e,t,a){},edd4:function(e,t,a){"use strict";a("90b4")}}]);