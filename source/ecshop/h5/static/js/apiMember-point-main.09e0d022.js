(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apiMember-point-main"],{"1a78":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("积分")])],2),e("div",{staticClass:"bill"},[t._l(t.pointList,(function(a,i){return 0!=t.allnumber?e("div",{key:i,staticClass:"order-info"},[e("div",{staticClass:"left"},[e("v-uni-image",{attrs:{src:t.img_url}})],1),e("div",{staticClass:"right"},[e("div",{staticClass:"name"},[t._v(t._s(a.addtime))]),e("div",{staticClass:"spec"},[t._v(t._s(a.reason))])]),e("div",{staticClass:"price-number"},[e("div",{staticClass:"number"},[t._v(t._s(a.change_point))])])]):t._e()})),0==t.allnumber?e("div",{staticClass:"onorder"},[e("v-uni-image",{attrs:{src:t.img_blank}}),e("div",{staticClass:"text"},[t._v("这里空空如也~~")])],1):t._e()],2)],1)},o=[]},"3a97":function(t,a,e){var i=e("bc8a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("6cc2a3e8",i,!0,{sourceMap:!1,shadowMode:!1})},"8c50":function(t,a,e){"use strict";e.r(a);var i=e("1a78"),n=e("a4d9");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("f50f");var r,s=e("f0c5"),l=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"a45abb76",null,!1,i["a"],r);a["default"]=l.exports},a4d9:function(t,a,e){"use strict";e.r(a);var i=e("e8bb"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},bc8a:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.bill[data-v-a45abb76]{width:94%;display:block;margin:0 auto}.bill .order-info[data-v-a45abb76]{width:100%;padding:%?10?% 0;border-bottom:%?1?% solid #ccc;display:flex;justify-content:start;overflow:hidden}.bill .order-info .left[data-v-a45abb76]{display:flex;align-items:center}.bill .order-info .left uni-image[data-v-a45abb76]{width:%?45?%;height:%?45?%}.bill .order-info .right[data-v-a45abb76]{width:%?410?%;margin-left:%?20?%;flex-direction:row}.bill .order-info .right .name[data-v-a45abb76]{width:100%;font-size:%?28?%;padding-top:%?9?%;text-align:left;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.bill .order-info .right .spec[data-v-a45abb76]{width:%?410?%;height:auto;color:#ccc;font-size:%?28?%;text-align:left;padding:%?10?% 0;word-wrap:break-word;word-break:normal}.bill .order-info .price-number[data-v-a45abb76]{width:%?220?%;display:flex;justify-content:flex-end;font-size:%?28?%;align-items:center}.bill .order-info .price-number .number[data-v-a45abb76]{font-size:%?28?%;color:#b4a078;padding-left:%?30?%}.bill .onorder[data-v-a45abb76]{width:100%;height:90vw;display:flex;justify-content:center;align-content:center;flex-wrap:wrap}.bill .onorder uni-image[data-v-a45abb76]{width:20vw;height:20vw}.bill .onorder .text[data-v-a45abb76]{width:100%;height:%?60?%;font-size:%?24?%;color:#ccc;display:flex;justify-content:center;align-items:center}',""]),t.exports=a},e8bb:function(t,a,e){"use strict";(function(t){var i=e("4ea4");e("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("96cf");var n=i(e("1da1")),o=e("b903"),r=e("9d09"),s={onShow:function(){(0,o.toLogin)(),this.getPointList(!0)},onReachBottom:function(){if(this.page=this.page+1,t.log(this.page),this.page>this.total)return!1;this.getPointList()},created:function(){},mounted:function(){},data:function(){return{pointList:[],allnumber:0,page:1,img_url:"https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/charge_icon.png",img_blank:"https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/no_order.png",total:""}},methods:{getPointList:function(a){var e=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,(0,r.pointListApi)({openId:e.openId,page:e.page});case 2:n=i.sent,e.pointList=n.data.data,e.allnumber=n.data.a,e.total=n.data.pagetotal,a?(e.pointList=n.data.data,t.log("数据"+e.pointList)):e.pointList=e.pointList.concat(n.data.data);case 7:case"end":return i.stop()}}),i)})))()}}};a.default=s}).call(this,e("5a52")["default"])},f50f:function(t,a,e){"use strict";var i=e("3a97"),n=e.n(i);n.a}}]);