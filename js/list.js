$(".list_px_jg").click(function(){
	$("#list_px_jg").toggleClass("on");
})

$("#child").click(function(){
	$("#child0").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child1").click(function(){
	$("#children1").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child2").click(function(){
	$("#children2").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child3").click(function(){
	$("#children3").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child4").click(function(){
	$("#children4").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child5").click(function(){
	$("#children5").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child6").click(function(){
	$("#children6").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child7").click(function(){
	$("#children7").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child8").click(function(){
	$("#children8").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child9").click(function(){
	$("#children9").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child10").click(function(){
	$("#children10").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child11").click(function(){
	$("#children11").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child12").click(function(){
	$("#children12").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child13").click(function(){
	$("#children13").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child14").click(function(){
	$("#children14").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child15").click(function(){
	$("#children15").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child16").click(function(){
	$("#children16").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child17").click(function(){
	$("#children17").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child18").click(function(){
	$("#children18").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child19").click(function(){
	$("#children19").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child20").click(function(){
	$("#children20").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child21").click(function(){
	$("#children21").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child22").click(function(){
	$("#children22").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child23").click(function(){
	$("#children23").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child24").click(function(){
	$("#children24").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child25").click(function(){
	$("#children25").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child26").click(function(){
	$("#children26").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child27").click(function(){
	$("#children27").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child28").click(function(){
	$("#children28").toggleClass("move");
	$(this).toggleClass("on")
});
$("#child29").click(function(){
	$("#children29").toggleClass("move");
	$(this).toggleClass("on")
});
$(".list_right_more1 i").click(function(){
	$(".list_right_yxtj2").toggleClass("move");
	$(this).toggleClass("on")
});




var swiper = new Swiper('#swiper-container1', {
    slidesPerView: 4,
    spaceBetween: 0,
    pagination: {
    	el: '.swiper-pagination',
   		clickable: true,
    },
    navigation: {
	  nextEl: '#swiper-button-next1',
	  prevEl: '#swiper-button-prev1',
	},
});


//百度翻页模板
$('#box').paging({
    initPageNo: 1, // 初始页码
    totalPages: 5, //总页数
    slideSpeed: 600, // 缓动速度。单位毫秒
    jump: true, //是否支持跳转
    callback: function(page) { // 回调函数
        $.get("json/data"+page+".json",function(data){
			$(".list_right_product_div").html(baidu.template("temp",data));
			$(".lazy").lazyload({
				threshold:-100
			});
		});
    }
});	


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