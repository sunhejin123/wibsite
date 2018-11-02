requirejs.config({
	baseUrl:"js/plugins",
	paths:{
		baiduT:"baiduTemplate",
		page:"jPages",
		extend:"jquery.extend",
		jquery:"jquery.min",
		lazy:"lazyload.min",
		swiper:"swiper.min"
	},
	shim:{
		baiduT:{
			exports:"baidu"
		},
		page:{
			deps:["jquery"]
		},
		extend:{
			deps:["jquery"]
		},
		jquery:{
			exports:"jQuery"
		},
		lazy:{
			deps:["jquery"]
		},
		swiper:{
			exports:"Swiper",
			deps:["jquery"]
		}
	}
});

requirejs(["jquery","swiper","baiduT","extend","lazy","page"],function($,sw,bd){
	var mySwiper = new sw ('.swiper-container', {
	    direction: 'horizontal', //水平切换选项 垂直切换选项
	    loop: true,	// 循环模式选项
	    speed:3000,
//	    grabCursor:true,
	    autoplay: true,
	    noSwiping: true,
	    effect : 'fade',
	    
	    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        	},
		},  
	 });  
	 //二级菜单
	 $(".but_menu").tab("","mouseenter");

	$(".but_menu").hover(function(){
		$(".sub_menu").addClass("active");
	},function(){
		$(".sub_menu").removeClass("active");
	});
});