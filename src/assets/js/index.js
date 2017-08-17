// JavaScript Document
$(function(){
	
  /*右侧的侧边栏*/
	$('.drawer').drawer();
	$("#panel-menu > li.son > a").click(function() {
    $(this).parent('li').siblings().children("ol").hide();
    $(this).parent('li').siblings().children("a").removeClass('down');
    $(this).parent('li').children("ol").toggle();
    $(this).parent('li').children("a").toggleClass('down');
    return false
   });
	
  /*首页的轮播图*/
	TouchSlide({ 
		slideCell:"#slide",
		titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		mainCell:".bd ul", 
		effect:"leftLoop", 
		interTime:4000,
		autoPage:true,//自动分页
		autoPlay:true //自动播放
	});	
	
  /*案例页的轮播图*/
	TouchSlide({ 
		slideCell:"#goods",
		mainCell:".bd ul", 
		effect:"leftLoop", 
		interTime:4000,
		autoPlay:true //自动播放
	});	 
	
	
	
	 /*案例列表页的选项卡*/
	function hideMenu(index){
         $(".choice .toggle").not(index).slideUp();
      }

	$(".choice ul li ").click(function(){
        var index = $(this).index();
        if($(".choice .toggle").eq(index).is(":hidden")){
            $(".choice .toggle").eq(index).slideDown(300,hideMenu(index));
        }else{
            $(".choice .toggle").eq(index).slideUp(300,hideMenu(index));
        }
    });
	
	
	/*新闻页面search*/
	 $('#search_text').click(function(){
        $(".showpage").children('div').hide();
        $("#search_hide").css('position','fixed').css('top','0px').css('width','100%').css('z-index','999').show();
    })
    $("#search_hide .closea").click(function(){
        $(".showpage").children('div').show();
        $("#search_hide").hide();
    })
	  
	$('.search-type li').click(function() {
    $(this).addClass('cur').siblings().removeClass('cur');
    $('#searchtype').val($(this).attr('num'));
	});
	$('#searchtype').val($(this).attr('0'));


   /*events*/
	$(".events .year .yearlist").each(
	   function (e, target){
		    var $target=$(target),
				$ul = $target.find("ul");
			   	$target.height($ul.innerHeight()), $ul.css("position", "absolute");
		}
 
	); 
	$(".events .year>h3>a").click(function (e) {
		e.preventDefault();
		$(this).parents(".year").toggleClass("close");
	});

     
    

	
	
})

	