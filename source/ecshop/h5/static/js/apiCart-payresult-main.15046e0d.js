(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apiCart-payresult-main"],{1914:function(t,e,a){"use strict";function n(t,e,a){var n=plus.screen.resolutionWidth,r=25,i=25,o=55,s=55,u=10,c=12,p=Math.floor(n/(o+i)),d=(n-(o+i)*p-i)/(p+1),l=i+d,y=o+l,f=s+u+c+r,v=s+u,m=new plus.nativeObj.View("alphaBg",{top:"0px",left:"0px",height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0.5)"});m.addEventListener("click",(function(){m.hide(),h.hide()}));var h=new plus.nativeObj.View("shareMenu",{bottom:"0px",left:"0px",height:Math.ceil(e.length/p)*f+r+44+1+"px",width:"100%",backgroundColor:"rgb(255,255,255)"});return h.draw([{tag:"rect",color:"#e7e7e7",position:{top:"0px",height:"1px"}},{tag:"font",id:"sharecancel",text:"取消分享",textStyles:{size:"14px"},position:{bottom:"0px",height:"44px"}},{tag:"rect",color:"#e7e7e7",position:{bottom:"45px",height:"1px"}}]),e.map((function(t,e){var a=(new Date).getTime(),n=Math.floor(e/p),i=e%p,s=[{src:t.icon,id:1e3*Math.random()+a,tag:"img",position:{top:n*f+r,left:i*y+l,width:o,height:o}},{text:t.text,id:1e3*Math.random()+a,tag:"font",textStyles:{size:c},position:{top:n*f+v,left:i*y+l,width:o,height:o}}];h.draw(s)})),h.addEventListener("click",(function(t){if(t.screenY>plus.screen.resolutionHeight-44)m.hide(),h.hide();else if(t.clientX<5||t.clientX>n-5||t.clientY<5);else{var e=t.clientX,r=t.clientY,i=Math.floor(e/y),o=Math.floor(r/f),s=i+o*p;a&&a(s)}})),{alphaBg:m,shareMenu:h}}a("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n;e.default=r},"5fa3":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uniCountdown:a("54c4").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-white",isBack:!1}},[a("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),a("template",{attrs:{slot:"content"},slot:"content"},[t._v("支付结果")])],2),a("div",{staticClass:"container"},[a("div",{staticClass:"pay-result"},[1==t.status?a("div",{staticClass:"success"},[a("div",{staticClass:"msg"},[t._v("付款成功")]),a("div",{staticClass:"btns"},[a("v-uni-navigator",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.orderDetailGo(t.orderId)}}},[t._v("查看订单")]),a("v-uni-navigator",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.HomeGo()}}},[t._v("继续逛")])],1)]):t._e(),1!=t.status?a("div",{staticClass:"error"},[a("div",{staticClass:"msg"},[t._v("付款中断")]),a("div",{staticClass:"tips"},[a("div",{staticClass:"p"},[t._v("可能的原因有以下几种：")]),a("div",{staticClass:"p"},[t._v("1.账户余额不足 2.订单不存在 3.订单已支付")])]),a("div",{staticClass:"btns"},[a("v-uni-navigator",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.orderDetailGo(t.orderId)}}},[t._v("查看订单")]),a("v-uni-navigator",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rePay(t.orderId)}}},[t._v("重新付款")])],1)]):t._e(),t.pintuan?a("div",{staticClass:"activity-line"},[a("div",{staticClass:"activity"},[a("div",{staticClass:"title"},[t._v("拼团中")])]),a("div",{staticClass:"timer"},[a("div",{staticClass:"text"},[t._v("距离拼团结束")]),a("uni-countdown",{attrs:{color:"#FFFFFF","background-color":"#00B26A","border-color":"#00B26A","show-day":!0,day:t.end_day,hour:t.end_hour,minute:t.end_minute,second:t.end_second},on:{timeup:function(e){arguments[0]=e=t.$handleEvent(e),t.orderDetail.apply(void 0,arguments)}}})],1)]):t._e()]),t.pintuan?a("div",{staticClass:"activity-line"},[a("div",{staticClass:"activity"},[a("div",{staticClass:"title"},[t._v("请分享："+t._s(t.pin_goods_url))])])]):t._e()])],1)},i=[]},"75ce":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.container[data-v-40131ea0]{background:#fff}.pay-result[data-v-40131ea0]{background:#fff}.pay-result .msg[data-v-40131ea0]{text-align:center;margin:%?100?% auto;color:#2bab25;font-size:%?36?%}.pay-result .btns[data-v-40131ea0]{display:flex;align-items:center;justify-content:center}.pay-result .btn[data-v-40131ea0]{text-align:center;height:%?80?%;margin:0 %?20?%;width:%?200?%;line-height:%?78?%;border:.01rem solid #868686;color:#000}.pay-result .error .msg[data-v-40131ea0]{color:#b4282d;margin-bottom:%?60?%}.pay-result .error .tips[data-v-40131ea0]{color:#7f7f7f;margin-bottom:%?70?%}.pay-result .error .tips .p[data-v-40131ea0]{font-size:%?24?%;line-height:%?42?%;text-align:center}.pay-result .error .tips .p .time[data-v-40131ea0]{color:#b4282d;line-height:%?42?%;text-align:center}.activity-line[data-v-40131ea0]{height:%?60?%;padding:%?8?% %?30?%;margin-top:20px;text-align:center;display:flex;justify-content:space-between;background:#f4f4f4}.activity-line .activity[data-v-40131ea0]{display:flex;justify-content:flex-start}.activity-line .activity .title[data-v-40131ea0]{color:#b4282d;font-size:16px;line-height:%?60?%}.activity-line .activity .sub[data-v-40131ea0]{padding-left:%?10?%;color:#666;font-size:%?22?%;line-height:%?60?%}.activity-line .activity .content[data-v-40131ea0]{text-align:center;color:#b4282d;font-size:16px;line-height:%?60?%}.activity-line .timer[data-v-40131ea0]{display:flex;justify-content:flex-start;line-height:%?60?%}.activity-line .timer .text[data-v-40131ea0]{color:#666;font-size:16px;line-height:%?60?%;padding-right:%?10?%}.uni-countdown[data-v-40131ea0]{margin-top:4px}',""]),t.exports=e},"84e9":function(t,e,a){"use strict";a.r(e);var n=a("c8d6"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"8aa6":function(t,e,a){"use strict";a.r(e);var n=a("5fa3"),r=a("84e9");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("9794");var o,s=a("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"40131ea0",null,!1,n["a"],o);e["default"]=u.exports},9794:function(t,e,a){"use strict";var n=a("9e3f"),r=a.n(n);r.a},"9e3f":function(t,e,a){var n=a("75ce");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("17501398",n,!0,{sourceMap:!1,shadowMode:!1})},c8d6:function(t,e,a){"use strict";(function(t){var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=n(a("1da1")),i=n(a("9965")),o=(n(a("1914")),a("9d09")),s=a("b903"),u={onShow:function(){(0,s.toLogin)()},data:function(){return{status:!1,orderId:"",actualPrice:"",order:[],pintuan:""}},onLoad:function(t){this.status=t.status,this.orderId=t.orderId,this.money=t.money},mounted:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.status=t.status,t.orderId=t.orderId,t.actualPrice=t.money;case 3:case"end":return e.stop()}}),e)})))()},components:{uniCountdown:i.default},methods:{HomeGo:function(){uni.switchTab({url:"/pages/index/main"})},orderDetailGo:function(t){uni.redirectTo({url:"/apiMember/orderdetail/main?id="+t})},orderDetail:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.orderdetailGetApi)({orderId:t.orderId});case 2:a=e.sent,t.order=a;case 4:case"end":return e.stop()}}),e)})))()},rePay:function(t){uni.redirectTo({url:"/apiCart/pay/main?orderId="+t})},startPay:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:e.t0=t.paytype,e.next="deposit"===e.t0?3:"wxpaywxapp"===e.t0?6:"malipaymyapp"===e.t0?9:"wxpayh5"===e.t0?12:"malipaynew"===e.t0?15:"wxpayappplus"===e.t0?18:"malipayappplus"===e.t0?21:24;break;case 3:return t.depositPay(),e.abrupt("return",!1);case 6:return t.wxpaywxappPay(),e.abrupt("return",!1);case 9:return t.malipaymyappPay(),e.abrupt("return",!1);case 12:return t.wxpayh5Pay(),e.abrupt("return",!1);case 15:return t.malipaynewPay(),e.abrupt("return",!1);case 18:return t.wxpayappplusPay(),e.abrupt("return",!1);case 21:return t.malipayappplusPay(),e.abrupt("return",!1);case 24:return e.abrupt("return",!1);case 26:case"end":return e.stop()}}),e)})))()},depositPay:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,payDopaymentApi({paytype:t.paytype,orderId:t.orderId,money:t.actualPrice});case 2:e.sent,uni.redirectTo({url:"/apiCart/payresult/main?status=1&orderId="+t.orderId+"&money="+t.actualPrice+"&paytype="+t.paytype});case 4:case"end":return e.stop()}}),e)})))()},wxpaywxappPay:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,payDopaymentApi({paytype:e.paytype,orderId:e.orderId,money:e.actualPrice});case 2:n=a.sent,e.payParams=n,r=e,uni.requestPayment({timeStamp:e.payParams.timeStamp,nonceStr:e.payParams.nonceStr,package:e.payParams.package,signType:"MD5",paySign:e.payParams.paySign,success:function(t){uni.redirectTo({url:"/apiCart/payresult/main?status=1&orderId="+r.orderId+"&money="+r.actualPrice+"&paytype="+this.paytype})},fail:function(e){t.log(r.orderId),uni.redirectTo({url:"/apiCart/payresult/main?status=0&orderId="+r.orderId+"&money="+r.actualPrice+"&paytype="+this.paytype})}});case 6:case"end":return a.stop()}}),a)})))()},malipaymyappPay:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,payDopaymentApi({paytype:e.paytype,orderId:e.orderId,money:e.actualPrice});case 2:n=a.sent,t.log(n),e.payParams=n,r=e,e.payParams.trade_no&&uni.tradePay({tradeNO:e.payParams.trade_no,success:function(e){t.log(e),uni.redirectTo({url:"/apiCart/payresult/main?status=1&orderId="+r.orderId+"&money="+r.actualPrice+"&paytype="+this.paytype})},fail:function(e){uni.redirectTo({url:"/apiCart/payresult/main?status=0&orderId="+r.orderId+"&money="+r.actualPrice+"&paytype="+this.paytype}),t.log(e)}});case 7:case"end":return a.stop()}}),a)})))()},wxpayh5Pay:function(){return(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},malipaynewPay:function(){return(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},wxpayappplusPay:function(){return(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},malipayappplusPay:function(){return(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}};e.default=u}).call(this,a("5a52")["default"])}}]);