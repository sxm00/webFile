
window.onscroll = function(){
 var Q = document.getElementById("head3");
 var s=document.body.scrollTop||document.documentElement.scrollTop;
 if(s >500){
 //设定对话框的浮动效果
 Q.className = "floatNav";
 } else {
 Q.className = "nav";
 }
 }