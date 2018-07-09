$(
    function(){
        $("#jnBrandTab li a").click(
            function(){
                // parent() 获得当前匹配元素集合中每个元素的父元素，使用选择器进行筛选是可选的。
                $(this).parent().addClass("chos").siblings().removeClass("chos");//用siblings移除多余的同胞
                // siblings() 获得匹配集合中每个元素的同胞，通过选择器进行筛选是可选的。
                var idx=$("#jnBrandTab li a").index(this);
                showBrandList(idx);
                return false;
            }
        ).eq(0).click();
    }
);




// 显示不同的模块
function showBrandList(index){
    var $rollobj=$("#jnBrandList");
    // outerWidth() 方法返回第一个匹配元素的外部宽度。
    var rollWidth=$rollobj.find("li").outerWidth();
    rollWidth=rollWidth*4;//一个版面的宽度是单个元素的四倍
    $rollobj.stop(true,false).animate({left:-rollWidth*index},1000);
    // stop() 方法停止当前正在运行的动画。
    // $(selector).stop(stopAll,goToEnd)stopAll	可选。规定是否停止被选元素的所有加入队列的动画。
    // goToEnd	可选。规定是否允许完成当前的动画。
    // animate() 方法执行 CSS 属性集的自定义动画。
}