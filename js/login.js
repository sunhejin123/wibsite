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
	$(".tab").tab("active");

	
	
	
	
var yan =document.querySelector('.yan');
var yan1 =document.querySelector('.yan1');
var zhanghao1 =document.querySelector('.zhanghao1');
var password_Boolean = false;
var Mobile_Boolean = false;

// Mobile
$('#tel1').change(function(){
  if ((/^1[34578]\d{9}$/).test($("#tel1").val())){
    yan1.style.display="block";
    yan.style.display="none";
    zhanghao1.style.marginBottom="10px";
	yan1.innerHTML="请输入密码";
    Mobile_Boolean = true;
  }else {
    yan.style.display="block";
    zhanghao1.style.marginBottom="0px";
	yan.innerHTML="请输入正确的手机号";
    Mobile_Boolean = false;
  }
});
// password
$('#tel2').change(function(){
  if ((/^[a-z0-9_-]{6,16}$/).test($("#tel2").val())){
    password_Boolean = true;
  }else {
    yan1.style.display="block";
	yan1.innerHTML="请输入正确的密码";
  }
});

// click
$('#tel').click(function(){
if((/^1[34578]\d{9}$/.test(tel1.value))&&(/^[a-z0-9_-]{6,16}$/.test(tel2.value))){
    open("index.html")
}else {
		if(tel1.value==""){
			yan.style.display="block";
		    zhanghao1.style.marginBottom="0px";
			yan.innerHTML="请输入手机号";
		}else{	
		    yan.style.display="block";
		    zhanghao1.style.marginBottom="0px";
			yan.innerHTML="您的账号或密码错误";
		}
}
});

	
});