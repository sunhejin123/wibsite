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
	
	$.fn.code_Obj = function(o) {
	var _this = $(this);
	var options = {
		code_l: o.codeLength,//验证码长度
		codeChars: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
			'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
			'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
		],
		codeColors: ['#f44336', '#009688', '#cddc39', '#03a9f4', '#9c27b0', '#5e4444', '#9ebf9f', '#ffc8c4', '#2b4754', '#b4ced9', '#835f53', '#aa677e'],
		code_Init: function() {
			var code = "";
			var codeColor = "";
			var checkCode = _this.find("#data_code");
			for(var i = 0; i < this.code_l; i++) {
				var charNum = Math.floor(Math.random() * 52);
				code += this.codeChars[charNum];
			}
			for(var i = 0; i < this.codeColors.length; i++) {
				var charNum = Math.floor(Math.random() * 12);
				codeColor = this.codeColors[charNum];
			}
			console.log(code);
			if(checkCode) {
				checkCode.css('color', codeColor);
				checkCode.className = "code";
				checkCode.text(code);
				checkCode.attr('data-value', code);
			}
		}
	};
	options.code_Init();//初始化验证码
	_this.find("#data_code").bind('click', function() {
		options.code_Init();
	});
};
$('#check-code').code_Obj({
	codeLength: 4
});
//dianji
$(".zhanghao3 b").click(function(){
	$(this).toggleClass("active");
});	

var mask =document.querySelector('.mask');
var tishi =document.querySelector('.tishi');
var guanbi=document.querySelector('.tishi h1 i');
var zheng =document.querySelector('.zheng');
var zhanghao4 =document.querySelector('.zhanghao4');
var telpost=document.querySelector('.zhanghao b');
var b3 =document.querySelector('.zhanghao3 b');
var user_Boolean = false;
var password_Boolean = false;
var varconfirm_Boolean = false;
var emaile_Boolean = false;
var h= document.documentElement.offsetHeight;
mask.style.height=h+"px";
var Mobile_Boolean = false;
$('#tel1').change(function(){
  if ((/^1[34578]\d{9}$/).test($("#tel1").val())){
    
	zhanghao4.style.marginTop="0";
	zheng.innerHTML="请输入图形验证码";
	telpost.style.background="#f60";
    Mobile_Boolean = true;
  }else {
    
	zhanghao4.style.marginTop="0";
	zheng.innerHTML="请输入正确的手机号";
    Mobile_Boolean = false;
  }
});
// 手机验证码
$('#tel4').change(function(){
  if ((/^[A-z\d]{4}$/).test($("#tel4").val())){
    
	zhanghao4.style.marginTop="0";
	zheng.innerHTML="请输入6-16位密码";
    varconfirm_Boolean = true;
  }else {
    
	zhanghao4.style.marginTop="0";
	zheng.innerHTML="请输入正确的手机验证码";
    varconfirm_Boolean = false;
  }
});
// 密码
$('#tel2').change(function(){
  if ((/^[a-z0-9_-]{6,16}$/).test($("#tel2").val())){
    password_Boolean = true;
  }else {
    
	zhanghao4.style.marginTop="0";
	zheng.innerHTML="请输入正确的密码";
    password_Boolean = false;
  }
});
// click
$('#tel').click(function(){
 	if(b3.className=="active"){
 		if ((/^1[34578]\d{9}$/.test(tel1.value))&&(/^[a-z0-9_-]{6,16}$/.test(tel2.value))&&(/^[A-z\d]{4}$/.test(tel3.value))&&(/^[A-z\d]{4}$/.test(tel4.value))) {
 			open("login.html")
 		}else{
			zhanghao4.style.marginTop="0";
			zheng.innerHTML="请输入正确的内容";
 		}
 	}else{
			mask.style.display="block";
			tishi.style.display="block";
		}
});
guanbi.onclick=function(){
		mask.style.display="none";
		tishi.style.display="none";
	}

});


