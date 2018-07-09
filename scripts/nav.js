$(
    function(){
        // hover() 方法规定当鼠标指针悬停在被选元素上时要运行的两个函数。
        // find() 方法获得当前元素集合中每个元素的后代，通过选择器、jQuery 对象或元素来筛选。
        $("#nav li").hover(
            function(){
                $(this).find(".jnNav").show();
            },
            function(){
                $(this).find(".jnNav").hide();
            }
        );
    }
)