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
	
	/*
			遮罩层宽高度 = (s_area/b_img)*s_area;
		*/
		var zoom = document.querySelector(".zoom");
		var s_area = document.querySelector(".s_area");
		var b_area = document.querySelector(".b_area");
		var mask = document.querySelector(".mask");
		var b_img = document.querySelector(".b_area img");

		//设置遮罩层大小
		mask.style.width = (s_area.offsetWidth/b_img.offsetWidth)*s_area.offsetWidth+"px";
		mask.style.height = (s_area.offsetHeight/b_img.offsetHeight)*s_area.offsetHeight+"px";

		var maxW = s_area.offsetWidth-mask.offsetWidth;
		var maxH = s_area.offsetHeight-mask.offsetHeight;

		//滑入小图区显示遮罩层和大图区
		s_area.onmouseenter=function(){
			mask.style.left = 0;
			b_area.style.left = "100%";
		}

		//滑出小图区隐藏遮罩层和大图区
		s_area.onmouseleave=function(){
			mask.style.left = "-10000px";
			b_area.style.left = "-10000px";
		}

		//在小图区移动时，遮罩层和大图改变位置
		s_area.onmousemove=function(e){
			e = e||event;

			/*
				鼠标到文档边缘-放大镜盒子偏移量-盒子边框-遮罩层一半
			*/
			var left = e.pageX-zoom.offsetLeft-zoom.clientLeft-mask.offsetWidth/2;
			var top = e.pageY-zoom.offsetTop-zoom.clientTop-mask.offsetHeight/2;

			//限制范围
			left = Math.max(0,Math.min(left,maxW));
			top = Math.max(0,Math.min(top,maxH));

			mask.style.left = left+"px";
			mask.style.top = top+"px";

			/*
				-(遮罩层偏移量/活动区)*(大图-大图区)
			*/
			b_img.style.left = -(left/maxW)*(b_img.offsetWidth-b_area.clientWidth)+"px";
			b_img.style.top = -(top/maxH)*(b_img.offsetHeight-b_area.clientHeight)+"px";
		}


$(".tab").tab("active");
});


var num_jia = document.querySelector("#span3");
var num_jian = document.querySelector("#span1");
var input_num = document.querySelector("#span2");
 num_jia.onclick = function() {
        input_num.value = parseInt(input_num.value) + 1;
    }
 num_jian.onclick = function() {
        if(input_num.value <= 1) {
            input_num.value = 1;
        } else {
            input_num.value = parseInt(input_num.value) - 1;
        }
    }