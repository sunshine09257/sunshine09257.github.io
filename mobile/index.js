/* 设置适口 */
!function() {
	var scale = 1;
	var ratio = window.devicePixelRatio;
	scale = scale / window.devicePixelRatio;
	var meta = document.createElement("meta");
	meta.setAttribute("name","viewport");
	meta.setAttribute("content","width=device-width,initial-scale = "+scale+",minimum-scale = "+scale+", maximum-scale = "+scale+", user-scalable = no");
	document.head.appendChild(meta);
}();

//获取html
var html = document.querySelector("html");
//设置html字体大小 = 可视区宽度/18
var width = html.getBoundingClientRect().width;
html.style.fontSize = width/18 + "px"; 

//阻止pc和浏览器默认行为
document.addEventListener('touchstart',function(ev){
	ev.preventDefault();
})

/* header.js */
$('#header').css('background','rgba(255, 0, 0, .7)')

/* banner.js */

var banner = document.querySelector('#banner'),
	list = document.querySelector('.banner_list'),
	li = list.getElementsByTagName('li'),
	a = document.querySelectorAll('nav a')
	w = banner.clientWidth, //一张的宽度
	len = 0,
	n = 0, //默认第0个小店为active
	timer = 0;
list.innerHTML += list.innerHTML; //复制一份
len = list.children.length;
list.style.width = w * len + 'px';

list.addEventListener('touchstart',start);
list.addEventListener('touchmove',move);
list.addEventListener('touchend',end);
function start(ev){
	var e = ev.changedTouches[0];
	list.style.transition = 'none';
	//无缝
	var num = Math.round(list.offsetLeft / w);
	if(num == 0){
		num = a.length;
		list.style.left = -num * w + 'px';
	}
	if(-num == len - 1){
		num = a.length - 1;
		list.style.left = -num * w + 'px';
	}
	disX = e.pageX - list.offsetLeft;
};
function move(ev){
	var e = ev.changedTouches[0];
	list.style.left = e.pageX - disX + 'px';
};
function end(){
	var num = Math.round(list.offsetLeft / w);
	list.style.transition = '.5s';
	list.style.left = num * w + 'px';
	//console.log(num)
	a[n].className = '';
	a[-num%a.length].className = 'active';
	n = -num % a.length;
};

/* end banner.js */

/* 滑屏  */
var wrap = document.getElementById('wrap');
var cont = document.getElementById('cont');
var startEl = 0;
var elTranslateY = 0;
var nowPoint;//声明为全局变量
var dis;
var lastY = 0;
var lastDis = 0;
var lastTime = 0;
var lastTimeDis = 0;
//css(cont,"translateZ",0.01)
cont.addEventListener('touchstart',function(e){
	startPoint = e.changedTouches[0].pageY;
	startEl = elTranslateY;
	lastY = startEl;
	lastTime = new Date().getTime();
	lastTimeDis = lastDis = 0;
});
cont.addEventListener('touchmove',function(e){
	var nowTime = new Date().getTime();
	nowPoint = e.changedTouches[0].pageY;
	dis = nowPoint-startPoint;
	elTranslateY = startEl + dis;
	cont.style.webkitTransform = cont.style.transform = "translateY("+elTranslateY+"px)";
	lastDis = elTranslateY - lastY;
	lastY = elTranslateY;
	lastTimeDis = nowTime - lastTime;
	lastTime = nowTime;
});
cont.addEventListener('touchend',function(e){
	//console.log(lastDis,lastTimeDis);
	var speed = Math.round(lastDis / lastTimeDis*10);
	var target = Math.round(speed*30 + elTranslateY);
	//console.log(target)
	//console.log(speed);
	mTween(cont,{elTranslateY:target},Math.abs(parseInt(target*1.5)),"easeOut");
});

/*wrap.addEventListener('touchend',function(e){
	if(dis>0){
		cont.style.webkitTransform = cont.style.transform = "translateY("+0+"rem)";
	}
	//startPoint=0;
	//startEl = 0;
	elTranslateY=0;
	nowPoint=0;
	dis = 0;
});*/










	



