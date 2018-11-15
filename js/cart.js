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
(function(){
		var num_jia = document.querySelector("#span3");
	    var num_jian = document.querySelector("#span1");
	    var input_num = document.querySelector("#span2");
	    var number3 =document.querySelector(".cont81 span i");
		var number4 =document.querySelector("#number4");
		var price0 =document.querySelector("#price0");
		var price1 =document.querySelector("#price1");
		var price2 =document.querySelector("#price2");
		var price3 =document.querySelector("#price3");
		var price4 =document.querySelector("#price4");
		var price5 =document.querySelector("#price5");
		var hide1 = document.querySelector("#hide1");
		var hide2 = document.querySelector("#hide2");
		var product1 = document.querySelector(".concent1");
		var car_null = document.querySelector(".cart_null");
		//加
		 num_jia.onclick = function() {
	        input_num.value = parseInt(input_num.value) + 1;
	        number3.innerHTML=input_num.value;
	        number4.innerText=input_num.value;
	        price5.innerHTML=(price0.innerHTML*input_num.value).toFixed(2);
	        price1.innerHTML=(225.00*input_num.value).toFixed(2);
	        price2.innerHTML=(57.00*input_num.value).toFixed(2);
	        price4.innerHTML=(price1.innerHTML-price2.innerHTML-price3.innerHTML).toFixed(2);  
    		}
		 //减
		   num_jian.onclick = function() {
        if(input_num.value <= 0) {
            input_num.value = 0;
        } else {
            input_num.value = parseInt(input_num.value) - 1;
            number4.innerHTML=input_num.value;
            number3.innerHTML=input_num.value;            
            price5.innerHTML=(price0.innerHTML*input_num.value).toFixed(2);
	        price1.innerHTML=(225.00*input_num.value).toFixed(2);
	        price2.innerHTML=(57.00*input_num.value).toFixed(2);
	        price4.innerHTML=(price1.innerHTML-price2.innerHTML-price3.innerHTML).toFixed(2);  
        }
    }
		  //删除
		   hide1.onclick=function(){
			product1.style.display="none";
			car_null.style.display="block";
			if(product1.style.display=="none"){
				number3.innerHTML=0;
	        	price1.innerHTML=0.00;
	        	price2.innerHTML=0.00;
	        	price3.innerHTML=0.00;
	        	price4.innerHTML=0.00;
       		 }
			}
	 })();
	 (function(){
		var quan =document.querySelector(".span4 em");
		var show =document.querySelector(".cont411");
		var timer=null;
		quan.onmouseover=function(){
			show.style.display = "block";
		}
		quan.onmouseout=function(){
			show.style.display = "none";	
		}
		show.onmouseover=function(){
			show.style.display = "block";
		}
		show.onmouseout=function(){
			show.style.display = "none";
		}
})();

//选项卡
$(".tab").tab("active")
});