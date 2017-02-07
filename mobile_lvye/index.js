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
	
	
	
/* 活动页面nav */

