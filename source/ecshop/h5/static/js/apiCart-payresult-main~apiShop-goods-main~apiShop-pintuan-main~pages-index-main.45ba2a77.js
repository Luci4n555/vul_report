(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apiCart-payresult-main~apiShop-goods-main~apiShop-pintuan-main~pages-index-main"],{"0cfc":function(t,n,o){"use strict";o("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"UniCountdown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},color:{type:String,default:"#000000"},splitorColor:{type:String,default:"#000000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0}},data:function(){return{timer:null,syncFlag:!1,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},watch:{day:function(t){this.changeFlag()},hour:function(t){this.changeFlag()},minute:function(t){this.changeFlag()},second:function(t){this.changeFlag()}},created:function(t){this.startData()},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,n,o,e){return 60*t*60*24+60*n*60+60*o+e},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,n=0,o=0,e=0,s=0;t>0?(n=Math.floor(t/86400),o=Math.floor(t/3600)-24*n,e=Math.floor(t/60)-24*n*60-60*o,s=Math.floor(t)-24*n*60*60-60*o*60-60*e):this.timeUp(),n<10&&(n="0"+n),o<10&&(o="0"+o),e<10&&(e="0"+e),s<10&&(s="0"+s),this.d=n,this.h=o,this.i=e,this.s=s},startData:function(){var t=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.seconds<=0||(this.countDown(),this.timer=setInterval((function(){t.seconds--,t.seconds<0?t.timeUp():t.countDown()}),1e3))},changeFlag:function(){this.syncFlag||(this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.startData(),this.syncFlag=!0)}}};n.default=e},"42fa":function(t,n,o){"use strict";var e=o("cd89"),s=o.n(e);s.a},"53ba":function(t,n,o){var e=o("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.uni-countdown[data-v-069010a0]{display:flex;flex-direction:row;justify-content:flex-start;padding:%?2?% 0}.uni-countdown__splitor[data-v-069010a0]{display:flex;justify-content:center;line-height:%?48?%;padding:%?5?%;font-size:%?24?%}.uni-countdown__number[data-v-069010a0]{display:flex;justify-content:center;align-items:center;width:%?52?%;height:%?48?%;line-height:%?48?%;margin:%?5?%;text-align:center;font-size:%?24?%}',""]),t.exports=n},"54c4":function(t,n,o){"use strict";o.r(n);var e=o("628f"),s=o("5547");for(var i in s)"default"!==i&&function(t){o.d(n,t,(function(){return s[t]}))}(i);o("42fa");var r,a=o("f0c5"),u=Object(a["a"])(s["default"],e["b"],e["c"],!1,null,"9a71d2d6",null,!1,e["a"],r);n["default"]=u.exports},5547:function(t,n,o){"use strict";o.r(n);var e=o("b562"),s=o.n(e);for(var i in e)"default"!==i&&function(t){o.d(n,t,(function(){return e[t]}))}(i);n["default"]=s.a},"628f":function(t,n,o){"use strict";var e;o.d(n,"b",(function(){return s})),o.d(n,"c",(function(){return i})),o.d(n,"a",(function(){return e}));var s=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-uni-view",{staticClass:"uni-countdown"},[t.showDay?o("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.d))]):t._e(),t.showDay?o("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("天")]):t._e(),o("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.h))]),o("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"时"))]),o("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.i))]),o("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"分"))]),o("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.s))]),t.showColon?t._e():o("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("秒")])],1)},i=[]},"68e1":function(t,n,o){var e=o("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.uni-countdown[data-v-9a71d2d6]{display:flex;flex-direction:row;justify-content:flex-start;padding:%?2?% 0}.uni-countdown__splitor[data-v-9a71d2d6]{display:flex;justify-content:center;line-height:%?48?%;padding:%?5?%;font-size:%?24?%}.uni-countdown__number[data-v-9a71d2d6]{display:flex;justify-content:center;align-items:center;width:%?52?%;height:%?48?%;line-height:%?48?%;margin:%?5?%;text-align:center;font-size:%?24?%}',""]),t.exports=n},"924f":function(t,n,o){"use strict";o.r(n);var e=o("0cfc"),s=o.n(e);for(var i in e)"default"!==i&&function(t){o.d(n,t,(function(){return e[t]}))}(i);n["default"]=s.a},9965:function(t,n,o){"use strict";o.r(n);var e=o("ad18"),s=o("924f");for(var i in s)"default"!==i&&function(t){o.d(n,t,(function(){return s[t]}))}(i);o("b4b5");var r,a=o("f0c5"),u=Object(a["a"])(s["default"],e["b"],e["c"],!1,null,"069010a0",null,!1,e["a"],r);n["default"]=u.exports},ad18:function(t,n,o){"use strict";var e;o.d(n,"b",(function(){return s})),o.d(n,"c",(function(){return i})),o.d(n,"a",(function(){return e}));var s=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-uni-view",{staticClass:"uni-countdown"},[t.showDay?o("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.d))]):t._e(),t.showDay?o("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("天")]):t._e(),o("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.h))]),o("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"时"))]),o("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.i))]),o("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"分"))]),o("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.s))]),t.showColon?t._e():o("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("秒")])],1)},i=[]},b4b5:function(t,n,o){"use strict";var e=o("dee5"),s=o.n(e);s.a},b562:function(t,n,o){"use strict";o("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"UniCountdown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},color:{type:String,default:"#000000"},splitorColor:{type:String,default:"#000000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0}},data:function(){return{timer:null,syncFlag:!1,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},watch:{day:function(t){this.changeFlag()},hour:function(t){this.changeFlag()},minute:function(t){this.changeFlag()},second:function(t){this.changeFlag()}},created:function(t){this.startData()},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,n,o,e){return 60*t*60*24+60*n*60+60*o+e},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,n=0,o=0,e=0,s=0;t>0?(n=Math.floor(t/86400),o=Math.floor(t/3600)-24*n,e=Math.floor(t/60)-24*n*60-60*o,s=Math.floor(t)-24*n*60*60-60*o*60-60*e):this.timeUp(),n<10&&(n="0"+n),o<10&&(o="0"+o),e<10&&(e="0"+e),s<10&&(s="0"+s),this.d=n,this.h=o,this.i=e,this.s=s},startData:function(){var t=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.seconds<=0||(this.countDown(),this.timer=setInterval((function(){t.seconds--,t.seconds<0?t.timeUp():t.countDown()}),1e3))},changeFlag:function(){this.syncFlag||(this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.startData(),this.syncFlag=!0)}}};n.default=e},cd89:function(t,n,o){var e=o("68e1");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=o("4f06").default;s("7b8442fc",e,!0,{sourceMap:!1,shadowMode:!1})},dee5:function(t,n,o){var e=o("53ba");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=o("4f06").default;s("500814ee",e,!0,{sourceMap:!1,shadowMode:!1})}}]);