(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apiMember-promote-main"],{"208f":function(t,e,n){"use strict";(function(t){var i=n("4ea4");n("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),o=n("9d09"),r=i(n("b632")),s={data:function(){return{providerList:[],type:0,code_url:"",url:""}},onLoad:function(){this.getData()},methods:{sharurl:function(){var t=this.url,e=(0,r.default)(t);!0===e?uni.showToast({title:"复制成功"}):uni.showToast({title:"复制失败",icon:"none"})},save:function(){uni.downloadFile({url:this.code_url,success:function(t){uni.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){uni.showToast({title:"保存成功",duration:2e3})}})}})},share:function(e){var n=this;if(0!==this.providerList.length){var i=this.providerList.map((function(t){return t.name}));t.log(i),uni.showActionSheet({itemList:i,success:function(e){t.log(n.providerList[e.tapIndex].id),"qq"==n.providerList[e.tapIndex].id?n.type=1:n.type=0,uni.share({provider:n.providerList[e.tapIndex].id,scene:n.providerList[e.tapIndex].type&&"WXSenceTimeline"===n.providerList[e.tapIndex].type?"WXSenceTimeline":"WXSceneSession",type:n.type,title:"商城软件",summary:"商城软件是一个在线购物平台",imageUrl:"https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/logo.png",href:"https://ecshop.yunyingbao.net",success:function(e){t.log("success:"+JSON.stringify(e))},fail:function(t){uni.showModal({content:t.errMsg,showCancel:!1})}})}})}else uni.showModal({title:"当前环境无分享渠道!",showCancel:!1})},getData:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.GetPromoteApi)({});case 2:n=e.sent,t.url=n.data.url,t.code_url=n.data.code_url;case 5:case"end":return e.stop()}}),e)})))()}}};e.default=s}).call(this,n("5a52")["default"])},"8f43":function(t,e,n){"use strict";n.r(e);var i=n("9ac7"),a=n("f8fd");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("df93");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"10747f40",null,!1,i["a"],r);e["default"]=u.exports},"9ac7":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("分享")])],2),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"top"}),n("v-uni-view",{staticClass:"banner"},[n("dl",[n("dt",[n("v-uni-image",{attrs:{src:"https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/missing-face.png",mode:""}})],1)]),n("v-uni-view",{staticClass:"img"},[n("v-uni-image",{attrs:{src:t.code_url,mode:""}})],1),n("v-uni-view",{staticClass:"tgtit"},[t._v("推广链接："),n("v-uni-text",{staticClass:"tugurl"},[t._v(t._s(t.url))])],1),n("v-uni-view",{staticClass:"sharbuttn"},[n("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sharurl.apply(void 0,arguments)}}},[t._v("复制推广链接")])],1),n("v-uni-view",{staticClass:"sharapk"}),n("v-uni-view",{staticClass:"bottom"},[n("ul",[n("li",[t._v("1、好友识别二维码通过手机号进行注册")]),n("li",[t._v("2、也可分享此页面到微信或QQ邀请好友注册")]),n("li",[t._v("3、注册完成后您即可得到相应的积分")])])])],1)],1)],1)},o=[]},"9deb":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.tugurl[data-v-10747f40]{color:#999}.sharbuttn[data-v-10747f40]{display:flex;justify-content:center}.shartitle[data-v-10747f40]{width:80%;text-align:center;margin-left:10%;border-bottom:1px solid #ddd;position:relative;height:%?60?%}.tgtit[data-v-10747f40]{text-align:center}.shartitle uni-view[data-v-10747f40]{height:%?50?%;line-height:%?50?%;font-size:%?28?%;color:#999;width:%?120?%;margin:%?32?% auto;position:absolute;background:#fff;left:50%;margin-left:%?-60?%}.sharapk[data-v-10747f40]{display:flex;justify-content:center;margin:%?20?% auto}.sharapk uni-view[data-v-10747f40]{margin:%?40?%}.sharapk uni-view uni-image[data-v-10747f40]{height:%?80?%;width:%?80?%}.content[data-v-10747f40]{width:100%;background-color:#fff}.top[data-v-10747f40]{width:100%;height:%?100?%;background-size:100%;background-position:50%}.banner[data-v-10747f40]{width:100%;background-color:#fff;border-radius:%?60?% %?60?% 0 0;margin-top:%?-60?%}.banner dl[data-v-10747f40]{margin-top:%?-80?%}.banner dl dt[data-v-10747f40]{text-align:center}.banner dl dt uni-image[data-v-10747f40]{width:%?160?%;height:%?160?%;border-radius:50%}.banner dl dd[data-v-10747f40]{text-align:center}.img[data-v-10747f40]{width:%?300?%;height:%?300?%;background-color:#fff;margin:0 auto;margin-top:%?60?%}.img uni-image[data-v-10747f40]{width:100%;height:100%}.btn[data-v-10747f40]{width:%?260?%;height:%?60?%;line-height:%?60?%;margin:0 auto;margin-top:%?60?%;border-radius:%?40?%;border:0;font-size:%?26?%;outline:0;background:#33b17b;color:#fff;text-align:center}.bottom[data-v-10747f40]{width:100%;height:%?400?%;background-position:0 100%;\n  /* 设置背景图片位置 */background-size:20%}.bottom ul[data-v-10747f40]{padding-left:%?40?%;box-sizing:border-box}.bottom ul li[data-v-10747f40]{width:100%;height:%?60?%}',""]),t.exports=e},b632:function(t,e,n){"use strict";function i(t){var e=document.createElement("input");e.value=t,e.readOnly="readOnly",document.body.appendChild(e),e.select(),e.setSelectionRange(0,t.length);var n=document.execCommand("Copy");return e.remove(),n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},d895:function(t,e,n){var i=n("9deb");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("723a1045",i,!0,{sourceMap:!1,shadowMode:!1})},df93:function(t,e,n){"use strict";var i=n("d895"),a=n.n(i);a.a},f8fd:function(t,e,n){"use strict";n.r(e);var i=n("208f"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a}}]);