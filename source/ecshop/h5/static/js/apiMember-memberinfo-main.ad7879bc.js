(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apiMember-memberinfo-main"],{"0bdf":function(t,i,e){"use strict";var a=e("44dc"),s=e.n(a);s.a},"2ab3":function(t,i,e){var a=e("4fce");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("179cfc1f",a,!0,{sourceMap:!1,shadowMode:!1})},"36c7":function(t,i,e){"use strict";(function(t){var a=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var s=a(e("1da1")),n=e("b903"),r=e("9d09"),h=a(e("f484")),o={onShow:function(){(0,n.toLogin)()},onLoad:function(){this.getMember()},data:function(){return{login_account:"",name:"未知",index:-1,picker:["保密","男","女"],date:"2019-01-01",avator:"https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/missing-face.png"}},components:{avatar:h.default},methods:{myUpload:function(t){this.avator=t.path},PickerChange:function(t){this.index=t.detail.value},DateChange:function(t){this.date=t.detail.value},getMember:function(){var i=this;return(0,s.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.getMemberApi)({});case 2:a=e.sent,t.log(a.data.info),i.date=a.data.info.birthday,i.index=a.data.info.sex,i.login_account=a.data.info.user_name,i.name=a.data.info.name,a.data.info.user_pic&&(i.avator=a.data.info.user_pic);case 9:case"end":return e.stop()}}),e)})))()},memberinfoSave:function(){var t=this;return(0,s.default)(regeneratorRuntime.mark((function i(){var e;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,(0,r.memberinfoSaveApi)({birthdaytime:t.date,sex:t.index});case 2:e=i.sent,e&&uni.showToast({icon:"none",position:"bottom",title:"保存成功"});case 4:case"end":return i.stop()}}),i)})))()}}};i.default=o}).call(this,e("5a52")["default"])},"44dc":function(t,i,e){var a=e("e936");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("5ce1513a",a,!0,{sourceMap:!1,shadowMode:!1})},"4fce":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.list-cell[data-v-44415850]{display:flex;align-items:baseline;padding:%?16?% %?30?%;line-height:%?60?%;position:relative;background:#fff;justify-content:center;border-bottom:%?1?% solid #dedede}.list-cell.log-out-btn[data-v-44415850]{margin-top:%?40?%;padding:%?10?%;border:%?1?% solid #dedede;border-radius:%?12?%}.list-cell.log-out-btn .cell-tit[data-v-44415850]{color:#fa436a;text-align:center;margin-right:0}.cu-avatar .portrait[data-v-44415850]{width:%?70?%;height:%?70?%;border:%?5?% solid #fff;border-radius:50%}',""]),t.exports=i},"68c3":function(t,i,e){"use strict";var a=e("4ea4");e("c975"),e("ace4"),e("d3b7"),e("acd8"),e("e25e"),e("ac1f"),e("3ca3"),e("466d"),e("1276"),e("498a"),e("5cc6"),e("8a59"),e("9a8c"),e("a975"),e("735e"),e("c1ac"),e("d139"),e("3a7b"),e("d5d6"),e("82f8"),e("e91f"),e("60bd"),e("5f96"),e("3280"),e("3fcc"),e("ca91"),e("25a1"),e("cd26"),e("2954"),e("649e"),e("219c"),e("b39a"),e("72f7"),e("ddb0"),e("2b3d"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var s=a(e("1da1")),n=a(e("b85c")),r=50,h={name:"yq-avatar",data:function(){return{cvsStyleHeight:"0px",styleDisplay:"none",styleTop:"-10000px",prvTop:"-10000px",imgStyle:{},selStyle:{},showOper:!0,imgSrc:{imgSrc:""},btnWidth:"19%",btnDsp:"flex"}},watch:{avatarSrc:function(){this.imgSrc.imgSrc=this.avatarSrc}},props:{avatarSrc:"",avatarStyle:"",selWidth:"",selHeight:"",expWidth:"",expHeight:"",minScale:"",maxScale:"",canScale:"",canRotate:"",lockWidth:"",lockHeight:"",stretch:"",lock:"",noTab:"",inner:"",quality:"",index:""},created:function(){var t=this;this.ctxCanvas=uni.createCanvasContext("avatar-canvas",this),this.ctxCanvasOper=uni.createCanvasContext("oper-canvas",this),this.ctxCanvasPrv=uni.createCanvasContext("prv-canvas",this),this.qlty=parseInt(this.quality)||.9,this.imgSrc.imgSrc=this.avatarSrc,this.letRotate="false"===this.canRotate||"true"===this.inner?0:1,this.letScale="false"===this.canScale?0:1,this.isin="true"===this.inner?1:0,this.indx=this.index||void 0,this.mnScale=this.minScale||.3,this.mxScale=this.maxScale||4,this.noBar="true"===this.noTab?1:0,this.stc=this.stretch,this.lck=this.lock,this.isin?(this.btnWidth="24%",this.btnDsp="none"):(this.btnWidth="19%",this.btnDsp="flex"),this.noBar?(this.moreHeight=0,this.fWindowResize()):uni.showTabBar({complete:function(i){t.moreHeight="showTabBar:ok"===i.errMsg?50:0,t.fWindowResize()}})},methods:{fWindowResize:function(){var t=uni.getSystemInfoSync();this.platform=t.platform,this.pixelRatio=t.pixelRatio,this.windowWidth=t.windowWidth,this.drawTop=t.windowTop,this.windowHeight=t.windowHeight+t.windowBottom,this.cvsStyleHeight=this.windowHeight-r+"px",this.pxRatio=this.windowWidth/750;var i=this.avatarStyle;if(i&&!0!==i&&(i=i.trim())){i=i.split(";");var e,a={},s=(0,n.default)(i);try{for(s.s();!(e=s.n()).done;){var h=e.value;if(h){if(h=h.trim().split(":"),h[1].indexOf("upx")>=0){var o=h[1].trim().split(" ");for(var l in o)o[l]&&o[l].indexOf("upx")>=0&&(o[l]=parseFloat(o[l])*this.pxRatio+"px");h[1]=o.join(" ")}a[h[0].trim()]=h[1].trim()}}}catch(c){s.e(c)}finally{s.f()}this.imgStyle=a}this.expWidth&&(this.exportWidth=this.expWidth.indexOf("upx")>=0?parseInt(this.expWidth)*this.pxRatio:parseInt(this.expWidth)),this.expHeight&&(this.exportHeight=this.expHeight.indexOf("upx")>=0?parseInt(this.expHeight)*this.pxRatio:parseInt(this.expHeight)),"flex"===this.styleDisplay&&this.fDrawInit(!0),this.fHideImg()},fSelect:function(){var t=this;this.fSelecting||(this.fSelecting=!0,setTimeout((function(){t.fSelecting=!1}),500),uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){uni.showLoading({mask:!0});var e=t.imgPath=i.tempFilePaths[0];uni.getImageInfo({src:e,success:function(i){if(t.imgWidth=i.width,t.imgHeight=i.height,t.path=e,!t.hasSel){var a=t.selStyle||{};if(!t.selWidth||!t.selHeight)return void uni.showModal({title:"裁剪框的宽或高没有设置",showCancel:!1});var s=t.selWidth.indexOf("upx")>=0?parseInt(t.selWidth)*t.pxRatio:parseInt(t.selWidth),n=t.selHeight.indexOf("upx")>=0?parseInt(t.selHeight)*t.pxRatio:parseInt(t.selHeight);a.width=s+"px",a.height=n+"px",a.top=(t.windowHeight-n-r)/2+"px",a.left=(t.windowWidth-s)/2+"px",t.selStyle=a}t.noBar?t.fDrawInit(!0):uni.hideTabBar({complete:function(){t.fDrawInit(!0)}})},fail:function(){uni.showToast({title:"error3",duration:2e3})},complete:function(){uni.hideLoading()}})}}))},fUpload:function(){var t=this;if(!this.fUploading){this.fUploading=!0,setTimeout((function(){t.fUploading=!1}),1e3);var i=this.selStyle,e=parseInt(i.left),a=parseInt(i.top),s=parseInt(i.width),n=parseInt(i.height),r=this.exportWidth||s,h=this.exportHeight||n;e*=this.pixelRatio,a*=this.pixelRatio,r=s,h=n,uni.showLoading({mask:!0}),this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),uni.canvasToTempFilePath({x:e,y:a,width:s,height:n,destWidth:r,destHeight:h,canvasId:"avatar-canvas",fileType:"png",quality:this.qlty,success:function(i){i=i.tempFilePath,t.btop(i).then((function(i){if(t.exportWidth&&t.exportHeight){var e=t.ctxCanvas;r=t.exportWidth,h=t.exportHeight,e.drawImage(i,0,0,r,h),e.draw(!1,(function(){uni.canvasToTempFilePath({x:0,y:0,width:r,height:h,destWidth:r,destHeight:h,canvasId:"avatar-canvas",fileType:"png",quality:t.qlty,success:function(i){i=i.tempFilePath,t.btop(i).then((function(i){t.$emit("upload",{avatar:t.imgSrc,path:i,index:t.indx,data:t.rtn})}))},fail:function(){uni.showToast({title:"error0",duration:2e3})}})}))}else t.$emit("upload",{avatar:t.imgSrc,path:i,index:t.indx,data:t.rtn})}))},fail:function(t){uni.showToast({title:"error1",duration:2e3})},complete:function(){uni.hideLoading(),t.noBar||uni.showTabBar()}},this)}},fPrvUpload:function(){var t=this;if(!this.fPrvUploading){this.fPrvUploading=!0,setTimeout((function(){t.fPrvUploading=!1}),1e3);var i=this.selStyle,e=(parseInt(i.width),parseInt(i.height),this.prvX),a=this.prvY,s=this.prvWidth,n=this.prvHeight,r=this.exportWidth||s,h=this.exportHeight||n;e*=this.pixelRatio,a*=this.pixelRatio,r=s,h=n,uni.showLoading({mask:!0}),this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),uni.canvasToTempFilePath({x:e,y:a,width:s,height:n,destWidth:r,destHeight:h,canvasId:"prv-canvas",fileType:"png",quality:this.qlty,success:function(i){i=i.tempFilePath,t.btop(i).then((function(i){if(t.exportWidth&&t.exportHeight){var e=t.ctxCanvas;r=t.exportWidth,h=t.exportHeight,e.drawImage(i,0,0,r,h),e.draw(!1,(function(){uni.canvasToTempFilePath({x:0,y:0,width:r,height:h,destWidth:r,destHeight:h,canvasId:"avatar-canvas",fileType:"png",quality:t.qlty,success:function(i){i=i.tempFilePath,t.btop(i).then((function(i){t.$emit("upload",{avatar:t.imgSrc,path:i,index:t.indx,data:t.rtn})}))},fail:function(){uni.showToast({title:"error0",duration:2e3})}})}))}else t.$emit("upload",{avatar:t.imgSrc,path:i,index:t.indx,data:t.rtn})}))},fail:function(){uni.showToast({title:"error_prv",duration:2e3})},complete:function(){uni.hideLoading(),t.noBar||uni.showTabBar()}},this)}},fDrawInit:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.windowWidth,a=this.windowHeight,s=this.imgWidth,n=this.imgHeight,h=s/n,o=e-40,l=a-r-80,c=(this.pixelRatio,parseInt(this.selStyle.width)),d=parseInt(this.selStyle.height);switch(this.fixWidth=0,this.fixHeight=0,this.lckWidth=0,this.lckHeight=0,this.stc){case"x":this.fixWidth=1;break;case"y":this.fixHeight=1;break;case"long":h>1?this.fixWidth=1:this.fixHeight=1;break;case"short":h>1?this.fixHeight=1:this.fixWidth=1;break;case"longSel":c>d?this.fixWidth=1:this.fixHeight=1;break;case"shortSel":c>d?this.fixHeight=1:this.fixWidth=1;break}switch(this.lck){case"x":this.lckWidth=1;break;case"y":this.lckHeight=1;break;case"long":h>1?this.lckWidth=1:this.lckHeight=1;break;case"short":h>1?this.lckHeight=1:this.lckWidth=1;break;case"longSel":c>d?this.lckWidth=1:this.lckHeight=1;break;case"shortSel":c>d?this.lckHeight=1:this.lckWidth=1;break}this.fixWidth?(o=c,l=o/h):this.fixHeight?(l=d,o=l*h):h<1?n<l?(o=s,l=n):(l=l,o=l*h):s<o?(o=s,l=n):(o=o,l=o/h),this.isin&&(this.scaleWidth=0,this.scaleHeight=0,o<c&&(o=c,l=o/h,this.lckHeight=0),l<d&&(l=d,o=l*h,this.lckWidth=0)),this.scaleSize=1,this.rotateDeg=0,this.posWidth=(e-o)/2,this.posHeight=(a-l-r)/2,this.useWidth=o,this.useHeight=l;var u=this.selStyle,p=parseInt(u.left),f=parseInt(u.top),v=parseInt(u.width),g=parseInt(u.height),x=(this.canvas,this.canvasOper,this.ctxCanvas),w=this.ctxCanvasOper;w.setLineWidth(3),w.setStrokeStyle("grey"),w.setGlobalAlpha(.4),w.setFillStyle("black"),w.strokeRect(p,f,v,g),w.fillRect(0,0,this.windowWidth,f),w.fillRect(0,f,p,g),w.fillRect(0,f+g,this.windowWidth,this.windowHeight-g-f-r),w.fillRect(p+v,f,this.windowWidth-v-p,g),w.setStrokeStyle("red"),w.moveTo(p+20,f),w.lineTo(p,f),w.lineTo(p,f+20),w.moveTo(p+v-20,f),w.lineTo(p+v,f),w.lineTo(p+v,f+20),w.moveTo(p+20,f+g),w.lineTo(p,f+g),w.lineTo(p,f+g-20),w.moveTo(p+v-20,f+g),w.lineTo(p+v,f+g),w.lineTo(p+v,f+g-20),w.stroke(),w.draw(!1,(function(){i&&(t.styleDisplay="flex",t.styleTop=t.drawTop+"px",x.setFillStyle("black"),t.fDrawImage())})),this.$emit("avtinit")},fDrawImage:function(){var t=Date.now();if(!(t-this.drawTm<20)){this.drawTm=t;var i=this.ctxCanvas;i.fillRect(0,0,this.windowWidth,this.windowHeight-r),i.translate(this.posWidth+this.useWidth/2,this.posHeight+this.useHeight/2),i.scale(this.scaleSize,this.scaleSize),i.rotate(this.rotateDeg*Math.PI/180),i.drawImage(this.imgPath,-this.useWidth/2,-this.useHeight/2,this.useWidth,this.useHeight),i.draw(!1)}},fHideImg:function(){this.prvImg="",this.prvTop="-10000px",this.showOper=!0,this.prvImgData=null,this.target=null},fClose:function(){this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),this.noBar||uni.showTabBar()},fPreview:function(){var t=this;if(!this.fPreviewing){this.fPreviewing=!0,setTimeout((function(){t.fPreviewing=!1}),1e3);var i=this.selStyle,e=parseInt(i.left),a=parseInt(i.top),s=parseInt(i.width),n=parseInt(i.height);e*=this.pixelRatio,a*=this.pixelRatio,uni.showLoading({mask:!0}),uni.canvasToTempFilePath({x:e,y:a,width:s,height:n,canvasId:"avatar-canvas",fileType:"png",quality:this.qlty,success:function(i){t.prvImgTmp=i=i.tempFilePath;var e=t.ctxCanvasPrv,a=t.windowWidth,s=parseInt(t.cvsStyleHeight),n=parseInt(t.selStyle.width),r=parseInt(t.selStyle.height),h=a-40,o=s-80,l=h/n,c=r*l;c<o?(n=h,r=c):(l=o/r,n*=l,r=o),e.setFillStyle("black"),e.fillRect(0,0,a,s),t.prvX=a=(a-n)/2,t.prvY=s=(s-r)/2,t.prvWidth=n,t.prvHeight=r,e.drawImage(i,a,s,n,r),e.draw(!1),t.btop(i).then((function(i){t.showOper=!1,t.prvTop=t.drawTop+"px"}))},fail:function(){uni.showToast({title:"error2",duration:2e3})},complete:function(){uni.hideLoading()}},this)}},fChooseImg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(i){var a=i.selWidth,s=i.selHeight,n=i.expWidth,h=i.expHeight,o=i.quality,l=i.canRotate,c=i.canScale,d=i.minScale,u=i.maxScale,p=i.stretch,f=i.inner,v=i.lock;n&&(this.exportWidth=n.indexOf("upx")>=0?parseInt(n)*this.pxRatio:parseInt(n)),h&&(this.exportHeight=h.indexOf("upx")>=0?parseInt(h)*this.pxRatio:parseInt(h)),this.letRotate="false"===l?0:1,this.letScale="false"===c?0:1,this.qlty=parseInt(o)||.9,this.mnScale=d||.3,this.mxScale=u||4,this.stc=p,this.isin="true"===f?1:0,this.lck=v,this.isin?(this.btnWidth="24%",this.btnDsp="none"):(this.btnWidth="19%",this.btnDsp="flex"),a&&s&&(a=a.indexOf("upx")>=0?parseInt(a)*this.pxRatio:parseInt(a),s=s.indexOf("upx")>=0?parseInt(s)*this.pxRatio:parseInt(s),this.selStyle.width=a+"px",this.selStyle.height=s+"px",this.selStyle.top=(this.windowHeight-s-r)/2+"px",this.selStyle.left=(this.windowWidth-a)/2+"px",this.hasSel=!0)}this.rtn=e,this.indx=t,this.fSelect()},fRotate:function(){this.rotateDeg+=90-this.rotateDeg%90,this.fDrawImage()},fStart:function(t){var i=t.touches,e=i[0],a=i[1];if(this.touch0=e,this.touch1=a,a){var s=a.x-e.x,n=a.y-e.y;this.fgDistance=Math.sqrt(s*s+n*n)}},fMove:function(t){var i=t.touches,e=i[0],a=i[1];if(a){var s=a.x-e.x,n=a.y-e.y,r=Math.sqrt(s*s+n*n),h=.005*(r-this.fgDistance),o=this.scaleSize+h;do{if(!this.letScale)break;if(o<this.mnScale)break;if(o>this.mxScale)break;if(this.isin){var l=this.useWidth*o,c=this.useHeight*o,d=this.posWidth+this.useWidth/2,u=this.posHeight+this.useHeight/2,p=d-l/2,f=u-c/2,v=p+l,g=f+c,x=parseInt(this.selStyle.left),w=parseInt(this.selStyle.top),m=parseInt(this.selStyle.width),y=parseInt(this.selStyle.height);if(x<p||x+m>v||w<f||w+y>g)break;this.scaleWidth=(this.useWidth-l)/2,this.scaleHeight=(this.useHeight-c)/2}this.scaleSize=o}while(0);this.fgDistance=r,a.x!==e.x&&this.letRotate&&(s=(this.touch1.y-this.touch0.y)/(this.touch1.x-this.touch0.x),n=(a.y-e.y)/(a.x-e.x),this.rotateDeg+=180*Math.atan((n-s)/(1+s*n))/Math.PI,this.touch0=e,this.touch1=a),this.fDrawImage()}else if(this.touch0){var b=e.x-this.touch0.x,S=e.y-this.touch0.y,k=this.posWidth+b,W=this.posHeight+S;if(this.isin){var I=this.useWidth*this.scaleSize,H=this.useHeight*this.scaleSize,T=k+this.useWidth/2,R=W+this.useHeight/2,C=T-I/2,D=R-H/2,_=C+I,P=D+H,M=parseInt(this.selStyle.left),O=parseInt(this.selStyle.top),$=parseInt(this.selStyle.width),z=parseInt(this.selStyle.height);!this.lckWidth&&Math.abs(b)<100&&(M>=C&&M+$<=_?this.posWidth=k:M<C?this.posWidth=M-this.scaleWidth:M+$>_&&(this.posWidth=M-(I-$)-this.scaleWidth)),!this.lckHeight&&Math.abs(S)<100&&(O>=D&&O+z<=P?this.posHeight=W:O<D?this.posHeight=O-this.scaleHeight:O+z>P&&(this.posHeight=O-(H-z)-this.scaleHeight))}else Math.abs(b)<100&&!this.lckWidth&&(this.posWidth=k),Math.abs(S)<100&&!this.lckHeight&&(this.posHeight=W);this.touch0=e,this.fDrawImage()}},fEnd:function(t){var i=t.touches,e=i&&i[0];i&&i[1];e?this.touch0=e:(this.touch0=null,this.touch1=null)},fGetImgData:function(){var t=this;return new Promise((function(i,e){var a=t.prvX,s=t.prvY,n=t.prvWidth,r=t.prvHeight;a*=t.pixelRatio,s*=t.pixelRatio,n*=t.pixelRatio,r*=t.pixelRatio,uni.canvasGetImageData({canvasId:"prv-canvas",x:a,y:s,width:n,height:r,success:function(t){i(t.data)},fail:function(t){e(t)}},t)}))},fColorChange:function(t){var i=this;return(0,s.default)(regeneratorRuntime.mark((function e(){var a,s,n,r,h,o,l,c,d,u,p,f,v,g,x,w,m,y,b,S,k,W,I,H,T,R,C;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=Date.now(),!(a-i.prvTm<100)){e.next=3;break}return e.abrupt("return");case 3:if(i.prvTm=a,uni.showLoading({mask:!0}),i.prvImgData){e.next=11;break}return e.next=8,i.fGetImgData().catch((function(t){uni.showToast({title:"error_read",duration:2e3})}));case 8:if(i.prvImgData=e.sent){e.next=10;break}return e.abrupt("return");case 10:i.target=new Uint8ClampedArray(i.prvImgData.length);case 11:if(s=i.prvImgData,n=i.target,r=t.detail.value,0===r)n=s;else for(r=(r+100)/200,r<.005&&(r=0),r>.995&&(r=1),k=s.length-1;k>=0;k-=4)h=s[k-3]/255,o=s[k-2]/255,l=s[k-1]/255,w=Math.max(h,o,l),x=Math.min(h,o,l),f=w-x,w===x?d=0:w===h&&o>=l?d=(o-l)/f*60:w===h&&o<l?d=(o-l)/f*60+360:w===o?d=(l-h)/f*60+120:w===l&&(d=(h-o)/f*60+240),p=(w+x)/2,0===p||w===x?u=0:0<p&&p<=.5?u=f/(2*p):p>.5&&(u=f/(2-2*p)),s[k]&&(c=s[k]),r<.5?u=u*r/.5:r>.5&&(u=2*u+2*r-u*r/.5-1),0===u?h=o=l=Math.round(255*p):(p<.5?g=p*(1+u):p>=.5&&(g=p+u-p*u),v=2*p-g,m=d/360,y=m+1/3,b=m,S=m-1/3,W=function(t){return t<0?t+1:t>1?t-1:t},I=function(t){return t<1/6?v+6*(g-v)*t:t>=1/6&&t<.5?g:t>=.5&&t<2/3?v+6*(g-v)*(2/3-t):v},h=y=Math.round(255*I(W(y))),o=b=Math.round(255*I(W(b))),l=S=Math.round(255*I(W(S)))),c&&(n[k]=c),n[k-3]=h,n[k-2]=o,n[k-1]=l;H=i.prvX,T=i.prvY,R=i.prvWidth,C=i.prvHeight,i.ctxCanvasPrv.setFillStyle("black"),i.ctxCanvasPrv.fillRect(H,T,R,C),i.ctxCanvasPrv.draw(!0),H*=i.pixelRatio,T*=i.pixelRatio,R*=i.pixelRatio,C*=i.pixelRatio,uni.canvasPutImageData({canvasId:"prv-canvas",x:H,y:T,width:R,height:C,data:n,fail:function(){uni.showToast({title:"error_put",duration:2e3})},complete:function(){uni.hideLoading()}},i);case 22:case"end":return e.stop()}}),e)})))()},btop:function(t){return new Promise((function(i,e){var a=t.split(","),s=a[0].match(/:(.*?);/)[1],n=atob(a[1]),r=n.length,h=new Uint8Array(r);while(r--)h[r]=n.charCodeAt(r);return i((window.URL||window.webkitURL).createObjectURL(new Blob([h],{type:s})))}))}}};i.default=h},"7f45":function(t,i,e){"use strict";e.r(i);var a=e("9393"),s=e("c7f5");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("bccf");var r,h=e("f0c5"),o=Object(h["a"])(s["default"],a["b"],a["c"],!1,null,"44415850",null,!1,a["a"],r);i["default"]=o.exports},"80e7":function(t,i,e){"use strict";e.r(i);var a=e("68c3"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},9393:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("会员信息")])],2),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("账号")]),e("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.login_account))])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("性别")]),e("v-uni-picker",{attrs:{value:t.index,range:t.picker},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.PickerChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.index>-1?t.picker[t.index]:"请选择"))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("生日")]),e("v-uni-picker",{attrs:{mode:"date",value:t.date,start:"1910-01-01",end:"2021-01-01"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.DateChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.date))])],1)],1),e("v-uni-view",{staticClass:"list-cell log-out-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.memberinfoSave.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cell-tit"},[t._v("保存信息")])],1)],1)},n=[]},b85c:function(t,i,e){"use strict";e("a4d3"),e("e01a"),e("d28b"),e("d3b7"),e("3ca3"),e("ddb0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=n;var a=s(e("06c5"));function s(t){return t&&t.__esModule?t:{default:t}}function n(t,i){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=(0,a.default)(t))||i&&t&&"number"===typeof t.length){e&&(t=e);var s=0,n=function(){};return{s:n,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,h=!0,o=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return h=t.done,t},e:function(t){o=!0,r=t},f:function(){try{h||null==e["return"]||e["return"]()}finally{if(o)throw r}}}}},bccf:function(t,i,e){"use strict";var a=e("2ab3"),s=e.n(a);s.a},c7f5:function(t,i,e){"use strict";e.r(i);var a=e("36c7"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},e936:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".my-canvas[data-v-451d8d47]{display:flex;position:fixed!important;background:#000;left:0;z-index:100000;width:100%}.my-avatar[data-v-451d8d47]{width:%?150?%;height:%?150?%;border-radius:100%}.oper-canvas[data-v-451d8d47]{display:flex;position:fixed!important;left:0;z-index:100001;width:100%}.prv-canvas[data-v-451d8d47]{display:flex;position:fixed!important;background:#000;left:0;z-index:200000;width:100%}.oper-wrapper[data-v-451d8d47]{height:50px;position:fixed!important;box-sizing:border-box;border:1px solid #f1f1f1;background:#fff;width:100%;left:0;bottom:0;z-index:100009;flex-direction:row}.oper[data-v-451d8d47]{display:flex;flex-direction:column;justify-content:center;padding:%?10?% %?20?%;width:100%;height:100%;box-sizing:border-box;align-self:center}.btn-wrapper[data-v-451d8d47]{display:flex;flex-direction:row;\n\n\nheight:50px;\njustify-content:space-between}.btn-wrapper uni-view[data-v-451d8d47]{display:flex;align-items:center;justify-content:center;font-size:16px;color:#333;border:1px solid #f1f1f1;border-radius:6%}.hover[data-v-451d8d47]{background:#f1f1f1;border-radius:6%}.clr-wrapper[data-v-451d8d47]{display:flex;flex-direction:row;flex-grow:1}.clr-wrapper uni-view[data-v-451d8d47]{display:flex;align-items:center;justify-content:center;font-size:16px;color:#333;border:1px solid #f1f1f1;border-radius:6%}.my-slider[data-v-451d8d47]{flex-grow:1}",""]),t.exports=i},f484:function(t,i,e){"use strict";e.r(i);var a=e("f80c"),s=e("80e7");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("0bdf");var r,h=e("f0c5"),o=Object(h["a"])(s["default"],a["b"],a["c"],!1,null,"451d8d47",null,!1,a["a"],r);i["default"]=o.exports},f80c:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-image",{staticClass:"my-avatar",style:[t.imgStyle],attrs:{src:t.imgSrc.imgSrc},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fSelect.apply(void 0,arguments)}}}),e("v-uni-canvas",{staticClass:"my-canvas",style:{top:t.styleTop,height:t.cvsStyleHeight},attrs:{"canvas-id":"avatar-canvas",id:"avatar-canvas","disable-scroll":"false"}}),e("v-uni-canvas",{staticClass:"oper-canvas",style:{top:t.styleTop,height:t.cvsStyleHeight},attrs:{"canvas-id":"oper-canvas",id:"oper-canvas","disable-scroll":"false"},on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.fStart.apply(void 0,arguments)},touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.fMove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.fEnd.apply(void 0,arguments)}}}),e("v-uni-canvas",{staticClass:"prv-canvas",style:{height:t.cvsStyleHeight,top:t.prvTop},attrs:{"canvas-id":"prv-canvas",id:"prv-canvas","disable-scroll":"false"},on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.fHideImg.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"oper-wrapper",style:{display:t.styleDisplay}},[e("v-uni-view",{staticClass:"oper"},[t.showOper?e("v-uni-view",{staticClass:"btn-wrapper"},[e("v-uni-view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fSelect.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("重选")])],1),e("v-uni-view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fClose.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("关闭")])],1),e("v-uni-view",{style:{width:t.btnWidth,display:t.btnDsp},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fRotate.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("旋转")])],1),e("v-uni-view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fPreview.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("预览")])],1),e("v-uni-view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fUpload.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("上传")])],1)],1):e("v-uni-view",{staticClass:"clr-wrapper"},[e("v-uni-slider",{staticClass:"my-slider",attrs:{"block-size":"25",value:"0",min:"-100",max:"100",activeColor:"red",backgroundColor:"green","block-color":"grey","show-value":!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.fColorChange.apply(void 0,arguments)}}}),e("v-uni-view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fPrvUpload.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("上传")])],1)],1)],1)],1)],1)},n=[]}}]);