// 更换皮肤
$(
    function(){
        var $li =$("#skin li");
        $li.click(
        function(){
        switchSkin(this.id);
    }
);
var cookie_skin=$.cookie("MyCssSkin");
if(cookie_skin){
    switchSkin(cookie_skin);
}
    }
);
// 换肤函数，直接调用
function switchSkin(skinName){
    $("#"+skinName).addClass("selected")               
                   .siblings().removeClass("selected"); 
                //  .siblings()遍历，去掉其他同级li元素  
    $("#cssfile").attr("href","styles/skin/"+ skinName +".css"); 
    $.cookie( "MyCssSkin" ,  skinName , { path: '/', expires: 10 });
}
//网站换肤
