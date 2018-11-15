requirejs.config({
	baseUrl:"js/plugins",
	paths:{
		baiduT:"baiduTemplate",
		page:"jPages",
		extend:"jquery.extend",
		jquery:"jquery.min",
		lazy:"lazyload.min",
		swiper:"swiper.min",
		mv:"move"
	},
	shim:{
		baiduT:{
			exports:"baidu"
		},
		mv:{
			exports:"move"
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

requirejs(["jquery","swiper","baiduT","mv","extend","lazy","page"],function($,sw,bd){
	var mySwiper = new sw ('.swiper-container', {
	    direction: 'horizontal', //水平切换选项 垂直切换选项
	    loop: true,	// 循环模式选项
	    speed:3000,
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
	
	$(".tab").tab("active");//小型选项卡
	//中型选项卡
	$(".jrms").tab("active");
	//软加载
	$(".lazy").lazyload({
			threshold:-100
		});
	
	
		$.fn.extend({
			tab:function(className){
				className = className || "active";
				this.each(function(index,ele){
					$(ele).children().eq(0).children().eq(0).addClass(className)
					$(ele).children().eq(1).children().eq(0).addClass(className)
					$(ele).children().eq(0).children().mouseover(function(){
						$(this).addClass(className).siblings().removeClass(className);
						$(ele).children().eq(1).children().eq($(this).index()).addClass(className).siblings().removeClass(className);
					});
				});
			}
		});
		$(".tab").tab("on");
		
		$.fn.extend({
			tab6:function(className){
				className = className || "active";
				this.each(function(index,ele){
					$(ele).children().eq(0).children().eq(0).addClass(className)
					$(ele).children().eq(1).children().eq(0).addClass(className)
					$(ele).children().eq(1).children().mouseover(function(){
						$(this).addClass(className).siblings().removeClass(className);
						$(ele).children().eq(0).children().eq($(this).index()).addClass(className).siblings().removeClass(className);
					});
				});
			}
		});
		$(".tab6").tab6("on1");
		
		//滚轮卷曲高度
		$(function(){
        $(window).on('scroll',function(){
            var $scroll=$(this).scrollTop();
            if($scroll>=400){
                $('#ctrl').show();
            }else{
                $('#ctrl').hide();
            }

            $('#floor>div').each(function(){
                var $loutitop=$('#floor>div').eq($(this).index()).offset().top+600;
                //console.log($loutitop);
                if($loutitop>$scroll){
                    $('#ctrl span').removeClass('active');
                    $('#ctrl span').eq($(this).index()).addClass('active');
                    return false;
                }
            });
        });
       
        var $loutili=$('#ctrl span').not('#ctrl4');
        $loutili.on('click',function(){
            $(this).addClass('active').siblings('li').removeClass('active');
            var $loutitop=$('#floor>div').eq($(this).index()).offset().top;
            $('html,body').animate({
                scrollTop:$loutitop
            })
        });
        $('#ctrl4').on('click',function(){
            $('html,body').animate({
                scrollTop:4200
            })
        });
    })
		
		

});
//小轮播
		(function(){
			var index=0;
		 	var ul= document.querySelector("#slider ul");
		 	var slider= document.querySelector("#slider");
		 	var dots= document.querySelectorAll("#dot span");
		 	//自动播放
		 	slider.timer=setInterval(fnNext,3000);
		 	//点击圆点切换图片
		 	for(var i=0;i<dots.length;i++){
		 		dots[i].index=i;
		 		dots[i].onmouseover=function(){
		 			index=this.index;
		 			fncome()
		 		}	
		 	}
		 	function fnNext(){
		 		index++;
		 		if(index == ul.children.length){
		 			index=1;
		 			ul.style.left=0;
		 		}
		 		fncome()
		 	}
		 	function fnPrev(){
		 		index--;
		 		if(index<0){
		 			index=ul.children.length-2;
		 			ul.style.left=-(ul.children.length-1)*slider.clientWidth+'px';
		 		}
		 		fncome()
		 	}
		 	function fncome(){
		 		var num =index;
		 		if(index==dots.length){
		 			num=0;
		 		}
		 		for(var i=0;i<dots.length;i++){
		 			dots[i].className="";
		 		}
		 		dots[num].className="active";
		 		move(ul,{
		 			left:-index*slider.clientWidth},300);
		 	}
		 })();
//中轮播
(function(){
			var index=0;
		 	var ul= document.querySelector("#slider1 ul");
		 	var slider= document.querySelector("#slider1");
		 	var dots= document.querySelectorAll("#dot1 span");
		 	//自动播放
		 	slider.timer=setInterval(fnNext,3000);
		 	//点击圆点切换图片
		 	for(var i=0;i<dots.length;i++){
		 		dots[i].index=i;
		 		dots[i].onmouseover=function(){
		 			index=this.index;
		 			fncome()
		 		}	
		 	}
		 	function fnNext(){
		 		index++;
		 		if(index == ul.children.length){
		 			index=1;
		 			ul.style.left=0;
		 		}
		 		fncome()
		 	}
		 	function fnPrev(){
		 		index--;
		 		if(index<0){
		 			index=ul.children.length-2;
		 			ul.style.left=-(ul.children.length-1)*slider.clientWidth+'px';
		 		}
		 		fncome()
		 	}
		 	function fncome(){
		 		var num =index;
		 		if(index==dots.length){
		 			num=0;
		 		}
		 		for(var i=0;i<dots.length;i++){
		 			dots[i].className="";
		 		}
		 		dots[num].className="active1";
		 		move(ul,{
		 			left:-index*slider.clientWidth},300);
		 	}
		 })();

//小轮播
		(function(){
			var index=0;
		 	var ul= document.querySelector("#slider2 ul");
		 	var slider= document.querySelector("#slider2");
		 	var dots= document.querySelectorAll("#dot2 span");
		 	//自动播放
		 	slider.timer=setInterval(fnNext,3000);
		 	//点击圆点切换图片
		 	for(var i=0;i<dots.length;i++){
		 		dots[i].index=i;
		 		dots[i].onmouseover=function(){
		 			index=this.index;
		 			fncome()
		 		}	
		 	}
		 	function fnNext(){
		 		index++;
		 		if(index == ul.children.length){
		 			index=1;
		 			ul.style.left=0;
		 		}
		 		fncome()
		 	}
		 	function fnPrev(){
		 		index--;
		 		if(index<0){
		 			index=ul.children.length-2;
		 			ul.style.left=-(ul.children.length-1)*slider.clientWidth+'px';
		 		}
		 		fncome()
		 	}
		 	function fncome(){
		 		var num =index;
		 		if(index==dots.length){
		 			num=0;
		 		}
		 		for(var i=0;i<dots.length;i++){
		 			dots[i].className="";
		 		}
		 		dots[num].className="active2";
		 		move(ul,{
		 			left:-index*slider.clientWidth},300);
		 	}
		 })();
		 //中轮播3
		 (function(){
			var index=0;
		 	var ul= document.querySelector("#slider3 ul");
		 	var slider= document.querySelector("#slider3");
		 	var dots= document.querySelectorAll("#dot3 span");
		 	//自动播放
		 	slider.timer=setInterval(fnNext,3000);
		 	//点击圆点切换图片
		 	for(var i=0;i<dots.length;i++){
		 		dots[i].index=i;
		 		dots[i].onmouseover=function(){
		 			index=this.index;
		 			fncome()
		 		}	
		 	}
		 	function fnNext(){
		 		index++;
		 		if(index == ul.children.length){
		 			index=1;
		 			ul.style.left=0;
		 		}
		 		fncome()
		 	}
		 	function fnPrev(){
		 		index--;
		 		if(index<0){
		 			index=ul.children.length-2;
		 			ul.style.left=-(ul.children.length-1)*slider.clientWidth+'px';
		 		}
		 		fncome()
		 	}
		 	function fncome(){
		 		var num =index;
		 		if(index==dots.length){
		 			num=0;
		 		}
		 		for(var i=0;i<dots.length;i++){
		 			dots[i].className="";
		 		}
		 		dots[num].className="active3";
		 		move(ul,{
		 			left:-index*slider.clientWidth},300);
		 	}
		 })();
		 //轮播4
		 (function(){
			var index=0;
		 	var ul= document.querySelector("#slider4 ul");
		 	var slider= document.querySelector("#slider4");
		 	var dots= document.querySelectorAll("#dot4 span");
		 	//自动播放
		 	slider.timer=setInterval(fnNext,3000);
		 	//点击圆点切换图片
		 	for(var i=0;i<dots.length;i++){
		 		dots[i].index=i;
		 		dots[i].onmouseover=function(){
		 			index=this.index;
		 			fncome()
		 		}	
		 	}
		 	function fnNext(){
		 		index++;
		 		if(index == ul.children.length){
		 			index=1;
		 			ul.style.left=0;
		 		}
		 		fncome()
		 	}
		 	function fnPrev(){
		 		index--;
		 		if(index<0){
		 			index=ul.children.length-2;
		 			ul.style.left=-(ul.children.length-1)*slider.clientWidth+'px';
		 		}
		 		fncome()
		 	}
		 	function fncome(){
		 		var num =index;
		 		if(index==dots.length){
		 			num=0;
		 		}
		 		for(var i=0;i<dots.length;i++){
		 			dots[i].className="";
		 		}
		 		dots[num].className="active4";
		 		move(ul,{
		 			left:-index*slider.clientWidth},300);
		 	}
		 })();
		 //wu
		 (function(){
			var index=0;
		 	var ul= document.querySelector("#slider5 ul");
		 	var slider= document.querySelector("#slider5");
		 	var dots= document.querySelectorAll("#dot5 span");
		 	//自动播放
		 	slider.timer=setInterval(fnNext,3000);
		 	//点击圆点切换图片
		 	for(var i=0;i<dots.length;i++){
		 		dots[i].index=i;
		 		dots[i].onmouseover=function(){
		 			index=this.index;
		 			fncome()
		 		}	
		 	}
		 	function fnNext(){
		 		index++;
		 		if(index == ul.children.length){
		 			index=1;
		 			ul.style.left=0;
		 		}
		 		fncome()
		 	}
		 	function fnPrev(){
		 		index--;
		 		if(index<0){
		 			index=ul.children.length-2;
		 			ul.style.left=-(ul.children.length-1)*slider.clientWidth+'px';
		 		}
		 		fncome()
		 	}
		 	function fncome(){
		 		var num =index;
		 		if(index==dots.length){
		 			num=0;
		 		}
		 		for(var i=0;i<dots.length;i++){
		 			dots[i].className="";
		 		}
		 		dots[num].className="active5";
		 		move(ul,{
		 			left:-index*slider.clientWidth},300);
		 	}
		 })();
		//liu 
		 (function(){
			var index=0;
		 	var ul= document.querySelector("#slider6 ul");
		 	var slider= document.querySelector("#slider6");
		 	var dots= document.querySelectorAll("#dot6 span");
		 	//自动播放
		 	slider.timer=setInterval(fnNext,3000);
		 	//点击圆点切换图片
		 	for(var i=0;i<dots.length;i++){
		 		dots[i].index=i;
		 		dots[i].onmouseover=function(){
		 			index=this.index;
		 			fncome()
		 		}	
		 	}
		 	function fnNext(){
		 		index++;
		 		if(index == ul.children.length){
		 			index=1;
		 			ul.style.left=0;
		 		}
		 		fncome()
		 	}
		 	function fnPrev(){
		 		index--;
		 		if(index<0){
		 			index=ul.children.length-2;
		 			ul.style.left=-(ul.children.length-1)*slider.clientWidth+'px';
		 		}
		 		fncome()
		 	}
		 	function fncome(){
		 		var num =index;
		 		if(index==dots.length){
		 			num=0;
		 		}
		 		for(var i=0;i<dots.length;i++){
		 			dots[i].className="";
		 		}
		 		dots[num].className="active6";
		 		move(ul,{
		 			left:-index*slider.clientWidth},300);
		 	}
		 })();
		 //轮播7
		 (function(){
			var index=0;
		 	var ul= document.querySelector("#slider7 ul");
		 	var slider= document.querySelector("#slider7");
		 	var dots= document.querySelectorAll("#dot7 span");
		 	//自动播放
		 	slider.timer=setInterval(fnNext,3000);
		 	//点击圆点切换图片
		 	for(var i=0;i<dots.length;i++){
		 		dots[i].index=i;
		 		dots[i].onmouseover=function(){
		 			index=this.index;
		 			fncome()
		 		}	
		 	}
		 	function fnNext(){
		 		index++;
		 		if(index == ul.children.length){
		 			index=1;
		 			ul.style.left=0;
		 		}
		 		fncome()
		 	}
		 	function fnPrev(){
		 		index--;
		 		if(index<0){
		 			index=ul.children.length-2;
		 			ul.style.left=-(ul.children.length-1)*slider.clientWidth+'px';
		 		}
		 		fncome()
		 	}
		 	function fncome(){
		 		var num =index;
		 		if(index==dots.length){
		 			num=0;
		 		}
		 		for(var i=0;i<dots.length;i++){
		 			dots[i].className="";
		 		}
		 		dots[num].className="active7";
		 		move(ul,{
		 			left:-index*slider.clientWidth},300);
		 	}
		 })();
		 //dibu
		 (function(){
		 	var eUl = document.querySelector(".info_list ul");
			setInterval(function(){
				
				eUl.className = "move";

				setTimeout(function(){
					eUl.appendChild(eUl.children[0]);
					eUl.className = "";
				},1000);
			},3000);
		 })();
		 
		(function(){
		 	var eUl = document.querySelector("#info_list ul");
			setInterval(function(){
				
				eUl.className = "move1";

				setTimeout(function(){
					eUl.appendChild(eUl.children[0]);
					eUl.className = "";
				},1000);
			},3000);
		 })();
		 
		// 卷去高度
		(function(){
 		var side5 =document.querySelector(".side5")
 		side5.onclick=function(){
			var timer = setInterval(function(){
				var scrollT = document.documentElement.scrollTop;
				if(scrollT > 0){
				scrollBy(0,-200);	
				}else{
					clearInterval(timer);
				}
			},30);
		}
	window.onscroll=function(){
		var scroll=document.documentElement.scrollTop;
		if(500<scroll){
			side5.style.display="block";
		}else{
			side5.style.display="none";
		}
	}
 })();
	