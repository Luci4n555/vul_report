(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apiShop-libao-main"],{"031b":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniPopupDialog",props:{value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:"请输入内容"},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:"提示"},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1}},data:function(){return{dialogType:"error",focus:!1,val:""}},inject:["popup"],watch:{type:function(t){this.dialogType=t},mode:function(t){"input"===t&&(this.dialogType="info")},value:function(t){this.val=t}},created:function(){this.popup.mkclick=!1,"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted:function(){this.focus=!0},methods:{onOk:function(){var t=this;this.$emit("confirm",(function(){t.popup.close(),"input"===t.mode&&(t.val=t.value)}),"input"===this.mode?this.val:"")},close:function(){var t=this;this.beforeClose?this.$emit("close",(function(){t.popup.close()})):this.popup.close()}}};e.default=n},"0941":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={uniCountdown:a("54c4").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[a("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),a("template",{attrs:{slot:"content"},slot:"content"},[t._v("礼包详情")])],2),a("v-uni-view",{staticClass:"header"},[a("v-uni-view",{staticClass:"top"},[a("v-uni-image",{attrs:{src:t.data.goods_activity.package_image,mode:"aspectFit"}}),a("v-uni-view",{staticClass:"middle"},[a("v-uni-view",{staticClass:"name",staticStyle:{"margin-left":"25rpx"}},[t._v(t._s(t.data.goods_activity.act_name))]),a("v-uni-view",{staticStyle:{"margin-top":"10rpx"}},[a("span",{staticStyle:{"margin-left":"26rpx",color:"#CCCCCC","font-size":"25rpx"}},[t._v(t._s(t.data.goods_activity.act_desc))])])],1),a("v-uni-view",{staticStyle:{"margin-top":"20rpx"}},[a("span",{staticClass:"word"},[a("span",{staticClass:"daoShouJia"},[a("span",{staticStyle:{"margin-left":"26rpx",color:"#ED1C24","font-size":"33rpx"}},[t._v("礼包价 ￥"+t._s(t.data.goods_activity.packagePrice))])])]),a("span",{staticClass:"word"},[a("span",{staticClass:"yuanJia"},[a("span",{staticClass:"number",staticStyle:{"margin-left":"23rpx","text-decoration":"line-through","font-size":"28rpx"}},[t._v("￥"+t._s(t.price))])])])])],1)],1),t.data.goods_activity.strtime<=0?a("div",[a("div",{staticStyle:{"margin-top":"200rpx"}},[a("div",{staticClass:"activity-line"},[a("div",{staticClass:"title",staticStyle:{"margin-right":"90rpx",color:"#ED1C24","font-size":"33rpx","margin-top":"4rpx"}},[t._v("抢购未开始")]),a("span",{staticStyle:{"margin-left":"10rpx",color:"#909399","font-size":"33rpx","margin-top":"4rpx"}},[t._v("距离开始")]),a("uni-countdown",{attrs:{color:"#FFFFFF","background-color":"#00B26A","border-color":"#00B26A",day:t.startDay,hour:t.startHour,minute:t.startMinute,second:t.startSecond},on:{timeup:function(e){arguments[0]=e=t.$handleEvent(e),t.showBuy()}}})],1)])]):t._e(),t.data.goods_activity.strtime>0?a("div",[a("div",{staticStyle:{"margin-top":"20rpx"}},[a("div",{staticClass:"activity-line"},[a("div",{staticClass:"title",staticStyle:{"margin-right":"130rpx",color:"#ED1C24","font-size":"33rpx","margin-top":"4rpx"}},[t._v("抢购中")]),a("span",{staticStyle:{"margin-left":"10rpx",color:"#909399","font-size":"33rpx","margin-top":"4rpx"}},[t._v("距离结束")]),a("uni-countdown",{attrs:{color:"#FFFFFF","background-color":"#00B26A","border-color":"#00B26A",day:t.endDay,hour:t.endHour,minute:t.endMinute,second:t.endSecond},on:{timeup:function(e){arguments[0]=e=t.$handleEvent(e),t.showBuy()}}})],1)])]):t._e(),a("div",{staticClass:"body",staticStyle:{"margin-top":"50rpx"}},t._l(t.data.goods,(function(e,n){return a("div",{key:n,staticClass:"goods"},[a("v-uni-image",{attrs:{src:e.goods_thumb}}),a("div",{staticClass:"name"},[t._v(t._s(e.goods_name))]),a("div",{staticClass:"price"},[a("div",{staticClass:"number",staticStyle:{color:"#F37B1D"}},[t._v("￥"+t._s(e.shop_price))])])],1)})),0),a("div",{staticClass:"fangx"}),a("div",{staticClass:"bottom-fixed"},[a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.collect.apply(void 0,arguments)}}},[a("div",{staticClass:"collect",class:[t.collectFlag?"active":""]})]),a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openQQ.apply(void 0,arguments)}}},[a("div",{staticClass:"btn"},[a("img",{attrs:{src:"https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/ic_goods_cus_service_nor.png",alt:!0}})])]),a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toCart.apply(void 0,arguments)}}},[a("div",{staticClass:"car"},[a("img",{attrs:{src:"https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/ic_menu_shoping_nor.png",alt:!0}})])]),t.data.goods_activity.strtime>0?a("div",{staticClass:"trade",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBuy.apply(void 0,arguments)}}},[t._v("立即抢购")]):t._e(),t.data.goods_activity.strtime<=0?a("div",{staticClass:"trade_one",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.integral_no.apply(void 0,arguments)}}},[t._v("立即抢购")]):t._e()])],1)},o=[]},"0a06":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.uni-popup[data-v-45c2b42e]{position:fixed;z-index:99}.uni-popup__mask[data-v-45c2b42e]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.4);opacity:0}.mask-ani[data-v-45c2b42e]{transition-property:opacity;transition-duration:.2s}.uni-top-mask[data-v-45c2b42e]{opacity:1}.uni-bottom-mask[data-v-45c2b42e]{opacity:1}.uni-center-mask[data-v-45c2b42e]{opacity:1}.uni-popup__wrapper[data-v-45c2b42e]{display:block;position:absolute}.top[data-v-45c2b42e]{top:var(--window-top)}.bottom[data-v-45c2b42e]{bottom:0}.uni-popup__wrapper-box[data-v-45c2b42e]{display:block;position:relative;\n  /* iphonex 等安全区设置，底部安全区适配 */padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.content-ani[data-v-45c2b42e]{transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;transition-duration:.2s}.uni-top-content[data-v-45c2b42e]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-bottom-content[data-v-45c2b42e]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-center-content[data-v-45c2b42e]{-webkit-transform:scale(1);transform:scale(1);opacity:1}',""]),t.exports=e},"0b21":function(t,e,a){"use strict";a.r(e);var n=a("752c"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"0fd3":function(t,e,a){"use strict";var n=a("ce8d"),i=a.n(n);i.a},1038:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-popup-message",class:"uni-popup__"+[t.type]},[a("v-uni-text",{staticClass:"uni-popup-message-text",class:"uni-popup__"+[t.type]+"-text"},[t._v(t._s(t.message))])],1)},o=[]},"1ebf":function(t,e,a){"use strict";var n=a("cca3"),i=a.n(n);i.a},"21f7":function(t,e,a){var n=a("b1c0");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("5fe28408",n,!0,{sourceMap:!1,shadowMode:!1})},2308:function(t,e,a){"use strict";a.r(e);var n=a("031b"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"32a0":function(t,e,a){"use strict";a.r(e);var n=a("daba"),i=a("c58a");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("8962");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"091c5d88",null,!1,n["a"],r);e["default"]=c.exports},"3a02":function(t,e,a){var n=a("c9cc");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("06434c24",n,!0,{sourceMap:!1,shadowMode:!1})},"42fa":function(t,e,a){"use strict";var n=a("cd89"),i=a.n(n);i.a},"48e0":function(t,e,a){"use strict";var n=a("4ea4");a("4160"),a("a9e3"),a("ac1f"),a("5319"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),o={name:"uniTransition",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(t){t?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var t=(0,i.default)((0,i.default)({},this.styles),{},{"transition-duration":this.duration/1e3+"s"}),e="";for(var a in t){var n=this.toLine(a);e+=n+":"+t[a]+";"}return e}},created:function(){},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var t=this;for(var e in clearTimeout(this.timer),this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===e?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[e]," ");this.$nextTick((function(){setTimeout((function(){t._animation(!0)}),50)}))},close:function(t){clearTimeout(this.timer),this._animation(!1)},_animation:function(t){var e=this,a=this.getTranfrom(t);for(var n in this.transform="",a)"opacity"===n?this.ani.in="fade-".concat(t?"out":"in"):this.transform+="".concat(a[n]," ");this.timer=setTimeout((function(){t||(e.isShow=!1),e.$emit("change",{detail:e.isShow})}),this.duration)},getTranfrom:function(t){var e={transform:""};return this.modeClass.forEach((function(a){switch(a){case"fade":e.opacity=t?1:0;break;case"slide-top":e.transform+="translateY(".concat(t?"0":"-100%",") ");break;case"slide-right":e.transform+="translateX(".concat(t?"0":"100%",") ");break;case"slide-bottom":e.transform+="translateY(".concat(t?"0":"100%",") ");break;case"slide-left":e.transform+="translateX(".concat(t?"0":"-100%",") ");break;case"zoom-in":e.transform+="scale(".concat(t?1:.8,") ");break;case"zoom-out":e.transform+="scale(".concat(t?1:1.2,") ");break}})),e},_modeClassArr:function(t){var e=this.modeClass;if("string"!==typeof e){var a="";return e.forEach((function(e){a+=e+"-"+t+","})),a.substr(0,a.length-1)}return e+"-"+t},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};e.default=o},4984:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("aea9")),o={top:"top",bottom:"bottom",center:"center",message:"top",dialog:"center",share:"bottom"},r={data:function(){return{config:o}},mixins:[i.default]};e.default=r},"4a6e":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.uni-popup-dialog[data-v-d7d17458]{width:300px;border-radius:15px;background-color:#fff}.uni-dialog-title[data-v-d7d17458]{display:flex;flex-direction:row;justify-content:center;padding-top:15px;padding-bottom:5px}.uni-dialog-title-text[data-v-d7d17458]{font-size:16px;font-weight:500}.uni-dialog-content[data-v-d7d17458]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:5px 15px 15px 15px}.uni-dialog-content-text[data-v-d7d17458]{font-size:14px;color:#6e6e6e}.uni-dialog-button-group[data-v-d7d17458]{display:flex;flex-direction:row;border-top-color:#f5f5f5;border-top-style:solid;border-top-width:1px}.uni-dialog-button[data-v-d7d17458]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:45px}.uni-border-left[data-v-d7d17458]{border-left-color:#f0f0f0;border-left-style:solid;border-left-width:1px}.uni-dialog-button-text[data-v-d7d17458]{font-size:14px}.uni-button-color[data-v-d7d17458]{color:#fa436a}.uni-dialog-input[data-v-d7d17458]{flex:1;font-size:14px}.uni-popup__success[data-v-d7d17458]{color:#4cd964}.uni-popup__warn[data-v-d7d17458]{color:#f0ad4e}.uni-popup__error[data-v-d7d17458]{color:#dd524d}.uni-popup__info[data-v-d7d17458]{color:#909399}',""]),t.exports=e},"4bcb":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".uni-transition[data-v-091c5d88]{transition-timing-function:ease;transition-duration:.3s;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.fade-in[data-v-091c5d88]{opacity:0}.fade-active[data-v-091c5d88]{opacity:1}.slide-top-in[data-v-091c5d88]{\n\t/* transition-property: transform, opacity; */-webkit-transform:translateY(-100%);transform:translateY(-100%)}.slide-top-active[data-v-091c5d88]{-webkit-transform:translateY(0);transform:translateY(0)\n\t/* opacity: 1; */}.slide-right-in[data-v-091c5d88]{-webkit-transform:translateX(100%);transform:translateX(100%)}.slide-right-active[data-v-091c5d88]{-webkit-transform:translateX(0);transform:translateX(0)}.slide-bottom-in[data-v-091c5d88]{-webkit-transform:translateY(100%);transform:translateY(100%)}.slide-bottom-active[data-v-091c5d88]{-webkit-transform:translateY(0);transform:translateY(0)}.slide-left-in[data-v-091c5d88]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slide-left-active[data-v-091c5d88]{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}.zoom-in-in[data-v-091c5d88]{-webkit-transform:scale(.8);transform:scale(.8)}.zoom-out-active[data-v-091c5d88]{-webkit-transform:scale(1);transform:scale(1)}.zoom-out-in[data-v-091c5d88]{-webkit-transform:scale(1.2);transform:scale(1.2)}",""]),t.exports=e},"52f6":function(t,e,a){"use strict";var n=a("4ea4");a("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("32a0")),o=n(a("4984")),r={name:"UniPopup",components:{uniTransition:i.default},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},provide:function(){return{popup:this}},mixins:[o.default],watch:{type:{handler:function(t){this[this.config[t]]()},immediate:!0},maskClick:function(t){this.mkclick=t}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:"top"}},created:function(){this.mkclick=this.maskClick,this.animation?this.duration=300:this.duration=0},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick((function(){new Promise((function(e){clearTimeout(t.timer),t.timer=setTimeout((function(){t.showTrans=!0,t.$nextTick((function(){e()}))}),50)})).then((function(e){clearTimeout(t.msgtimer),t.msgtimer=setTimeout((function(){t.customOpen&&t.customOpen()}),100),t.$emit("change",{show:!0,type:t.type})}))}))},close:function(t){var e=this;this.showTrans=!1,this.$nextTick((function(){e.$emit("change",{show:!1,type:e.type}),clearTimeout(e.timer),e.customOpen&&e.customClose(),e.timer=setTimeout((function(){e.showPopup=!1}),300)}))},onTap:function(){this.mkclick&&this.close()},top:function(){this.popupstyle="top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0}},bottom:function(){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0}},center:function(){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"}}}};e.default=r},"54c4":function(t,e,a){"use strict";a.r(e);var n=a("628f"),i=a("5547");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("42fa");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"9a71d2d6",null,!1,n["a"],r);e["default"]=c.exports},5547:function(t,e,a){"use strict";a.r(e);var n=a("b562"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"628f":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-countdown"},[t.showDay?a("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.d))]):t._e(),t.showDay?a("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("天")]):t._e(),a("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.h))]),a("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"时"))]),a("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.i))]),a("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"分"))]),a("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.s))]),t.showColon?t._e():a("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("秒")])],1)},o=[]},"68e1":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.uni-countdown[data-v-9a71d2d6]{display:flex;flex-direction:row;justify-content:flex-start;padding:%?2?% 0}.uni-countdown__splitor[data-v-9a71d2d6]{display:flex;justify-content:center;line-height:%?48?%;padding:%?5?%;font-size:%?24?%}.uni-countdown__number[data-v-9a71d2d6]{display:flex;justify-content:center;align-items:center;width:%?52?%;height:%?48?%;line-height:%?48?%;margin:%?5?%;text-align:center;font-size:%?24?%}',""]),t.exports=e},"752c":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniPopupMessage",props:{type:{type:String,default:"success"},message:{type:String,default:""},duration:{type:Number,default:3e3}},inject:["popup"],data:function(){return{}},created:function(){this.popup.childrenMsg=this},methods:{open:function(){var t=this;0!==this.duration&&(clearTimeout(this.popuptimer),this.popuptimer=setTimeout((function(){t.popup.close()}),this.duration))},close:function(){clearTimeout(this.popuptimer)}}};e.default=n},"7f3a":function(t,e,a){"use strict";a.r(e);var n=a("eb24"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},8962:function(t,e,a){"use strict";var n=a("fdda"),i=a.n(n);i.a},"948f":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-popup-dialog"},[a("v-uni-view",{staticClass:"uni-dialog-title"},[a("v-uni-text",{staticClass:"uni-dialog-title-text",class:["uni-popup__"+t.dialogType]},[t._v(t._s(t.title))])],1),a("v-uni-view",{staticClass:"uni-dialog-content"},["base"===t.mode?a("v-uni-text",{staticClass:"uni-dialog-content-text"},[t._v(t._s(t.content))]):a("v-uni-input",{staticClass:"uni-dialog-input",attrs:{type:"text",placeholder:t.placeholder,focus:t.focus},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1),a("v-uni-view",{staticClass:"uni-dialog-button-group"},[a("v-uni-view",{staticClass:"uni-dialog-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"uni-dialog-button-text"},[t._v("取消")])],1),a("v-uni-view",{staticClass:"uni-dialog-button uni-border-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onOk.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"uni-dialog-button-text uni-button-color"},[t._v("确定")])],1)],1)],1)},o=[]},9589:function(t,e,a){"use strict";a.r(e);var n=a("948f"),i=a("2308");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("0fd3");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"d7d17458",null,!1,n["a"],r);e["default"]=c.exports},9644:function(t,e,a){"use strict";a.r(e);var n=a("52f6"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"99ac":function(t,e,a){"use strict";var n=a("3a02"),i=a.n(n);i.a},aea9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={created:function(){"message"===this.type&&(this.maskShow=!1,this.childrenMsg=null)},methods:{customOpen:function(){this.childrenMsg&&this.childrenMsg.open()},customClose:function(){this.childrenMsg&&this.childrenMsg.close()}}};e.default=n},b1c0:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.uni-popup-message[data-v-16d0aded]{display:flex;flex-direction:row;background-color:#e1f3d8;padding:10px 15px;border-color:#eee;border-style:solid;border-width:1px}.uni-popup-message-text[data-v-16d0aded]{font-size:14px;padding:0}.uni-popup__success[data-v-16d0aded]{background-color:#e1f3d8}.uni-popup__success-text[data-v-16d0aded]{color:#67c23a}.uni-popup__warn[data-v-16d0aded]{background-color:#faecd8}.uni-popup__warn-text[data-v-16d0aded]{color:#e6a23c}.uni-popup__error[data-v-16d0aded]{background-color:#fde2e2}.uni-popup__error-text[data-v-16d0aded]{color:#f56c6c}.uni-popup__info[data-v-16d0aded]{background-color:#f2f6fc}.uni-popup__info-text[data-v-16d0aded]{color:#909399}',""]),t.exports=e},b562:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniCountdown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},color:{type:String,default:"#000000"},splitorColor:{type:String,default:"#000000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0}},data:function(){return{timer:null,syncFlag:!1,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},watch:{day:function(t){this.changeFlag()},hour:function(t){this.changeFlag()},minute:function(t){this.changeFlag()},second:function(t){this.changeFlag()}},created:function(t){this.startData()},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,e,a,n){return 60*t*60*24+60*e*60+60*a+n},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,e=0,a=0,n=0,i=0;t>0?(e=Math.floor(t/86400),a=Math.floor(t/3600)-24*e,n=Math.floor(t/60)-24*e*60-60*a,i=Math.floor(t)-24*e*60*60-60*a*60-60*n):this.timeUp(),e<10&&(e="0"+e),a<10&&(a="0"+a),n<10&&(n="0"+n),i<10&&(i="0"+i),this.d=e,this.h=a,this.i=n,this.s=i},startData:function(){var t=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.seconds<=0||(this.countDown(),this.timer=setInterval((function(){t.seconds--,t.seconds<0?t.timeUp():t.countDown()}),1e3))},changeFlag:function(){this.syncFlag||(this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.startData(),this.syncFlag=!0)}}};e.default=n},ba88:function(t,e,a){"use strict";var n=a("21f7"),i=a.n(n);i.a},c58a:function(t,e,a){"use strict";a.r(e);var n=a("48e0"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},c5ba:function(t,e,a){"use strict";a.r(e);var n=a("1038"),i=a("0b21");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("ba88");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"16d0aded",null,!1,n["a"],r);e["default"]=c.exports},c9b0:function(t,e,a){"use strict";a.r(e);var n=a("0941"),i=a("7f3a");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("99ac");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"2eaa4644",null,!1,n["a"],r);e["default"]=c.exports},c9cc:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */*[data-v-2eaa4644]{padding:0;margin:0;overflow:hidden}.header[data-v-2eaa4644]{width:100%}.header .top[data-v-2eaa4644]{position:relative;width:100%}.header .top uni-image[data-v-2eaa4644]{width:100%;height:%?750?%}.header .middle .flex[data-v-2eaa4644]{font-size:%?33?%;padding:%?14?%}.header .middle .flex .notes[data-v-2eaa4644]{font-size:%?20?%;font-family:Impact;text-align:center}.header .countDown[data-v-2eaa4644]{display:flex;justify-content:flex-end;font-size:%?30?%;line-height:%?50?%;height:%?50?%}.footer[data-v-2eaa4644]{width:100%}.footer .button[data-v-2eaa4644]{width:50%;display:inline-block;height:%?100?%;line-height:%?100?%;text-align:center;font-size:%?50?%;color:#fff}.footer .cart[data-v-2eaa4644]{background-color:#0081ff}.footer .buy[data-v-2eaa4644]{background-color:red}.footer uni-input[data-v-2eaa4644]{display:inline-block}.footer .popup[data-v-2eaa4644]{display:flex;justify-content:center}.footer .popup .specifications[data-v-2eaa4644]{width:50%;height:%?200?%;display:flex;flex-wrap:wrap;justify-content:center;background-color:#fff}.footer .popup .specifications .num[data-v-2eaa4644]{height:%?100?%;display:flex;align-items:center}.footer .popup .specifications .num uni-input[data-v-2eaa4644]{flex:2;text-align:center;font-size:%?40?%}.footer .popup .specifications .num uni-view[data-v-2eaa4644]{height:%?100?%;line-height:%?100?%;text-align:center;background-color:#000;color:#fff;flex:1;font-size:%?40?%}.footer .popup .specifications .bottom[data-v-2eaa4644]{text-align:center;width:100%;height:%?100?%;color:#fff;line-height:%?100?%;font-size:%?40?%}.footer .fill[data-v-2eaa4644]{height:%?100?%;line-height:%?100?%;text-align:center}.footer .gouWu[data-v-2eaa4644]{position:fixed;width:100%;bottom:0}.activity-line[data-v-2eaa4644]{padding:%?8?% %?30?%;display:flex;justify-content:space-between;background:#f4f4f4}.activity-line .activity[data-v-2eaa4644]{display:flex;justify-content:flex-start}.activity-line .activity .title[data-v-2eaa4644]{color:#b4282d;font-size:16px;line-height:%?60?%}.activity-line .activity .sub[data-v-2eaa4644]{padding-left:%?10?%;color:#666;font-size:%?22?%;line-height:%?60?%}.activity-line .timer[data-v-2eaa4644]{display:flex;justify-content:flex-start;line-height:%?60?%}.activity-line .timer .text[data-v-2eaa4644]{color:#666;font-size:16px;line-height:%?60?%;padding-right:%?10?%}.body[data-v-2eaa4644]{display:flex;flex-wrap:wrap;justify-content:space-between;width:%?730?%;margin:0 auto}.body div[data-v-2eaa4644]{width:%?360?%;background:#fff;margin-bottom:%?10?%;padding-bottom:%?10?%}.body div uni-image[data-v-2eaa4644]{display:block;width:%?302?%;height:%?302?%;margin:0 auto}.body div p[data-v-2eaa4644]{margin-bottom:%?5?%;text-indent:1em}.body div p[data-v-2eaa4644]:nth-child(2){overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:98%}.body div p[data-v-2eaa4644]:nth-child(3){color:#9c3232}.body .last[data-v-2eaa4644]{display:block;width:%?302?%;height:%?302?%;margin:0 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-wrap:wrap}.body .last p[data-v-2eaa4644]{height:%?33?%;width:100%;line-height:%?33?%;color:#333;font-size:%?33?%;text-align:center}.body .last .icon[data-v-2eaa4644]{display:inline-block;width:%?70?%;height:%?70?%;background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/rightbig.png) no-repeat;background-size:100% 100%;margin-top:%?60?%}.body div[data-v-2eaa4644]:nth-child(2n){margin-left:%?10?%}.bottom-fixed[data-v-2eaa4644]{position:fixed;bottom:0;left:0;right:0;width:%?750?%;height:%?100?%;display:flex;background:#fff;z-index:10}.bottom-fixed div[data-v-2eaa4644]:nth-child(1){height:%?99?%;width:%?100?%;display:flex;align-items:center;justify-content:center;border-top:%?1?% solid #ccc}.bottom-fixed div:nth-child(1) .collect[data-v-2eaa4644]{display:block;height:%?44?%;width:%?44?%;background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/icon_collect.png) no-repeat;background-size:100% 100%;border:0 none}.bottom-fixed div:nth-child(1) .collect.active[data-v-2eaa4644]{display:block;height:%?44?%;width:%?44?%;background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/icon_collect_checked.png) no-repeat;background-size:100% 100%}.bottom-fixed div[data-v-2eaa4644]:nth-child(2){height:%?99?%;width:%?100?%;border-top:%?1?% solid #ccc;border-left:%?1?% solid #ccc;display:flex;align-items:center;justify-content:center}.bottom-fixed div:nth-child(2) .btn[data-v-2eaa4644]{height:%?99?%;width:%?100?%;border-top:0 none;display:flex;background:none;border-radius:0;align-items:center;justify-content:center;border:0 none;padding:0}.bottom-fixed div:nth-child(2) .btn img[data-v-2eaa4644]{height:%?44?%;width:%?44?%;display:block}.bottom-fixed div:nth-child(2) .btn[data-v-2eaa4644]:after{border:0 none}.bottom-fixed div[data-v-2eaa4644]:nth-child(3){height:%?99?%;width:%?100?%;border-top:%?1?% solid #ccc;border-left:%?1?% solid #ccc;display:flex;align-items:center;justify-content:center}.bottom-fixed div:nth-child(3) .car[data-v-2eaa4644]{position:relative;height:%?60?%;width:%?60?%;border:0 none}.bottom-fixed div:nth-child(3) .car span[data-v-2eaa4644]{height:%?28?%;width:%?28?%;z-index:10;position:absolute;top:0;right:0;background:#b4282d;text-align:center;font-size:%?18?%;color:#fff;line-height:%?28?%;border-radius:50%}.bottom-fixed div:nth-child(3) .car img[data-v-2eaa4644]{display:block;height:%?44?%;width:%?44?%;top:%?10?%;left:0}.bottom-fixed div[data-v-2eaa4644]:nth-child(4){height:%?100?%;width:%?225?%;line-height:%?99?%;text-align:center;color:#333;border-top:%?1?% solid #ccc;border-left:%?1?% solid #ccc}.bottom-fixed div[data-v-2eaa4644]:nth-child(5){width:%?225?%;background:#b4282d;line-height:%?100?%;text-align:center;color:#fff}.bottom-fixed div:nth-child(4).trade[data-v-2eaa4644]{width:%?450?%;background:#b4282d;line-height:%?100?%;text-align:center;color:#fff}.bottom-fixed div:nth-child(4).trade_one[data-v-2eaa4644]{width:%?450?%;background:#ccc;line-height:%?100?%;text-align:center;color:#fff}.fangx[data-v-2eaa4644]{height:%?60?%}',""]),t.exports=e},cca3:function(t,e,a){var n=a("0a06");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("3ba9ba0a",n,!0,{sourceMap:!1,shadowMode:!1})},cd89:function(t,e,a){var n=a("68e1");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("7b8442fc",n,!0,{sourceMap:!1,shadowMode:!1})},ce8d:function(t,e,a){var n=a("4a6e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("47a300a1",n,!0,{sourceMap:!1,shadowMode:!1})},daba:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isShow?a("v-uni-view",{ref:"ani",staticClass:"uni-transition",class:[t.ani.in],style:"transform:"+t.transform+";"+t.stylesObject,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},o=[]},dcf6:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={uniTransition:a("32a0").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showPopup?a("v-uni-view",{staticClass:"uni-popup",class:[t.popupstyle],on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t.maskShow?a("uni-transition",{attrs:{"mode-class":["fade"],styles:t.maskClass,duration:t.duration,show:t.showTrans},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}}):t._e(),a("uni-transition",{attrs:{"mode-class":t.ani,styles:t.transClass,duration:t.duration,show:t.showTrans},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t._t("default")],2)],1)],1):t._e()},o=[]},eb24:function(t,e,a){"use strict";var n=a("4ea4");a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=n(a("1da1")),o=a("9d09"),r=n(a("f87a")),s=n(a("c5ba")),c=n(a("9589")),d=n(a("54c4")),u=a("b903"),l={onLoad:function(){this.getActId(),this.getData()},data:function(){return{actId:"",data:"",price:0,show:!1,num:1,buyOrCart:1,startDay:0,startHour:0,startMinute:0,startSecond:0,endDay:0,endHour:0,endMinute:0,endSecond:0,collectFlag:!1}},components:{uniPopup:r.default,uniPopupMessage:s.default,uniPopupDialog:c.default,uniCountdown:d.default},methods:{openQQ:function(){location.href="http://wpa.qq.com/msgrd?v=3&uin="+this.kefu_qq+"&site=qq&menu=yes"},toCart:function(){uni.switchTab({url:"/pages/cart/main"})},getActId:function(){this.actId=uni.getStorageSync("superGoodsid")},plusPrice:function(){for(var t in this.data.goods)this.price+=Number(this.data.goods[t].shop_price)},countDown:function(){var t=new Date,e=this.data.goods_activity.start_time-Math.floor(t.getTime()/1e3),a=this.data.goods_activity.end_time-Math.floor(t.getTime()/1e3);this.startDay=Math.floor(e/86400),this.startHour=Math.floor((e-86400*this.startDay)/3600),this.startMinute=Math.floor((e-86400*this.startDay-3600*this.startHour)/60),this.startSecond=e-86400*this.startDay-3600*this.startHour-60*this.startMinute,this.endDay=Math.floor(a/86400),this.endHour=Math.floor((a-86400*this.endDay)/3600),this.endMinute=Math.floor((a-86400*this.endDay-3600*this.endHour)/60),this.endSecond=a-86400*this.endDay-3600*this.endHour-60*this.endMinute,e<=0&&a>0&&(this.show=!0)},showBuy:function(){this.show=!this.show},specifications:function(t){this.buyOrCart=t,this.$refs.cart.open()},increase:function(){this.num++},reduce:function(){this.num>1&&this.num--},collect:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(0,u.toLogin)()){e.next=5;break}return e.next=3,(0,o.goodsAddCollectApi)({goods_id:t.actId,collect_status:t.collectFlag});case 3:a=e.sent,t.collectFlag=a.data.res;case 5:case"end":return e.stop()}}),e)})))()},integral_no:function(){return(0,i.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:uni.showToast({title:"秒杀未开始，不能购买哟~~",icon:"none",duration:2e3});case 1:case"end":return t.stop()}}),t)})))()},addCart:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(0,u.toLogin)()){e.next=4;break}return e.next=3,(0,o.addCartApi)({actId:t.actId,num:t.num,isBuy:0});case 3:t.$refs.cart.close();case 4:case"end":return e.stop()}}),e)})))()},goBuy:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(uni.setStorageSync("libaohuh","/apiShop/libao/main"),!(0,u.toLogin)()){e.next=5;break}return e.next=4,(0,o.addCartApi)({actId:t.actId,num:t.num,isBuy:1});case 4:uni.navigateTo({url:"/apiCart/order/main"});case 5:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.getDataApi)({actId:t.actId});case 2:a=e.sent,t.data=a.data,t.countDown(),t.plusPrice();case 6:case"end":return e.stop()}}),e)})))()}}};e.default=l},f87a:function(t,e,a){"use strict";a.r(e);var n=a("dcf6"),i=a("9644");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("1ebf");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"45c2b42e",null,!1,n["a"],r);e["default"]=c.exports},fdda:function(t,e,a){var n=a("4bcb");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("8233a11a",n,!0,{sourceMap:!1,shadowMode:!1})}}]);