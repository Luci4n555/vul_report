$(function (){function _fresh()  
{   
 $(".fd30_time").each(function(){
					var dayh=$(this).attr("dayh");
				    var endtime=new Date($(this).attr("endtime"));  //用来判断是否显示天数的变量
					var starttime=new Date($(this).attr("starttime"));  //用来判断是否显示天数的变量
                    var nowtime = new Date();  
                    var leftsecond=parseInt((endtime.getTime()-nowtime.getTime())/1000); 
					var rightsecond=parseInt((starttime.getTime()-nowtime.getTime())/1000); 
                    __d=parseInt(leftsecond/3600/24);  
					__dy=__d<10?'0'+__d:__d;
                    __h=parseInt((leftsecond/3600)%24);  
					__h=__h<10?'0'+__h:__h;
                    __m=parseInt((leftsecond/60)%60);  
					__m=__m<10?'0'+__m:__m;
                    __s=parseInt(leftsecond%60);  
					__s=__s<10?'0'+__s:__s;
                    var c=new Date();
                    var q=((c.getMilliseconds())%10);
					  $(this).html("<i>剩0余</i><span>"+__d+"<em>天</em></span><span>"+__h+"<em>时</em></span><span>"+__m+"<em>分</em></span><span>"+__s+"."+q+"<em>秒</em></span>")
					  if(dayh==0){ 
					     $(this).html("<span class='days'><i>剩余</i><em>"+__dy+"</em>天</span>")
						 if(__d==0){ $(this).html("<span class='days'><i>剩余</i><strong>"+__h+"</strong><em>时</em></span>");}
						 if(__h==0){ $(this).html("<span class='days'><i>剩余</i><strong>"+__m+"</strong><em>分</em></span>");}
					  }
/*					  if(dayh==1){ 
					    $(this).html("<i>剩余</i><span><em>"+__d+"</em>天</span><span><em>"+__h+"</em>时</span><span><em>"+__m+"</em>分</span><span><em>"+__s+"</em>秒</span>")
					  }*/
					  
					  if(dayh==3){  $(this).html("<span><i>"+__h+"</i><em>:</em></span><span><i>"+__m+"</i><em>:</em></span><span class='span_e'><i>"+__s+"</i></span>") }
					  
					  if(dayh==1){
						 
 						  $(this).html("<span><i>"+__d+"</i><em>天</em></span><span><i>"+__h+"</i>:</span><span><i>"+__m+"</i>:</span><span class='span_e'><i>"+__s+"</i></span>") }
					  
					  if(dayh==2){  $(this).html("<span><i>"+__d+"</i><em>天</em></span><span><i>"+__h+"</i><em>时</em></span><span><i>"+__m+"</i><em>分</em></span><span class='span_e'><i>"+__s+"</i><em>秒</em></span>") }
					  //alert(leftsecond);
					  if(rightsecond>0){  
					  	  $(this).html("团购即将开始..");
						  $(this).parent().parent().addClass("qg_table_start");
                         // clearInterval(sh); 
					    } 
                      if(leftsecond<=0){  
					  	  $(this).html("抢购已结束");
						  $(this).parent().parent().addClass("qg_table_end");
                         // clearInterval(sh); 
					    }
		
						
						})
 }  
_fresh()  
var sh;  
sh=setInterval(_fresh,100)}) 