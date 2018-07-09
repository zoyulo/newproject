// 超链接活动提示
// $(
//     function(){
//         var x=10,y=10;
//         $("a.tooltip").mouseover(
//             function(e){
//                 this.myTitle=this.title;
//                 this.title="";
//                 // 创建一个div，值与html中title一样
//                 var tooltip = "<div id='tooltip'>"+ this.myTitle +"</div>"; 
//                 // 把创建的div加到文档中
//                 $(body).addpend(tooltip);
//                $("#tooltip").scc(
//                    {
//                     "top": (e.pageY+y) + "px",
//                     "left": (e.pageX+x)  + "px"
//                    }
//                ).show("fast");
                     
//             }
//         ).mouseout(
//             function(){
//                 this.title=this.myTitle;
//                 $("#tooltip").remove();
//             }
//         ).mousemove(
//             function(e)
//             {
//                 $("#tooltip").css(
//                 {
//                     "top": (e.pageY+y) + "px",
// 				    "left": (e.pageX+x)  + "px"
//                 }
//                 );
//             }
//         );
//     }
// )
$(function(){
    var x = 10;  
	var y = 20;
	$("a.tooltip").mouseover(function(e){
       	this.myTitle = this.title;
		this.title = "";	
	    var tooltip = "<div id='tooltip'>"+ this.myTitle +"</div>"; //创建 div 元素
		$("body").append(tooltip);	//把它追加到文档中
		$("#tooltip")
			.css({
				"top": (e.pageY+y) + "px",
				"left": (e.pageX+x)  + "px"
			}).show("fast");	  //设置x坐标和y坐标，并且显示
    }).mouseout(function(){		
		this.title = this.myTitle;
		$("#tooltip").remove();   //移除 
    }).mousemove(function(e){
		$("#tooltip")
			.css({
				"top": (e.pageY+y) + "px",
				"left": (e.pageX+x)  + "px"
			});
	});
})