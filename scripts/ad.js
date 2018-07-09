// 首页大屏广告的效果jquery
$(
    function(){
        var $imgrolls = $("#jnImageroll div a");
        // 如需设置指定的 CSS 属性，请使用如下语法：css("propertyname","value");
        // Opacity属性设置一个元素了透明度级别
        $imgrolls.css("opacity","0.7");
        var len  = $imgrolls.length;
        var index;
        var adTimer = null;
        $imgrolls.mouseover(
            function(){
                index=$imgrolls.index(this);
                showImg(index);//定义的函数，index表示当前显示的图片
            }
            // eq() 方法将匹配元素集缩减值指定 index 上的一个,是遍历的一种
        ).eq(0).mouseover();
        $('#jnImageroll').hover(function(){
			if(adTimer){ 
				clearInterval(adTimer);
			}
		 },function(){
			adTimer = setInterval(function(){
			    showImg(index);
				index++;
				if(index==len){index=0;}
			} , 5000);
    }).trigger("mouseleave");
    // trigger() 方法触发被选元素的指定事件类型。
    }
)
function showImg(index){
	var $rollobj = $("#jnImageroll");
	var $rolllist = $rollobj.find("div a");
	var newhref = $rolllist.eq(index).attr("href");
	$("#JS_imgWrap").attr("href",newhref)
			 .find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
	$rolllist.removeClass("chos").css("opacity","0.7")
			 .eq(index).addClass("chos").css("opacity","1"); 
}