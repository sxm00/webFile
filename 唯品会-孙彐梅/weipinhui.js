

/*window.onscroll = function(){
    var Q = document.getElementById("head3");
    var  w=document.getElementById("nav_yc");
    var s=document.body.scrollTop||document.documentElement.scrollTop;  /!*获取滚轮的距离*!/
    var x=document.body.scrollTop||document.documentElement.scrollTop;
    if(s >= 129){
        //设定对话框的浮动效果
        Q.className = "floatNav";
    } else {
        Q.className = "mian_nav";
    }
    if (x>1000){
        w.className="nav_left1";
    }else {
        w.className="nav_left";
    }
};*/
// 滚轮滑动 头部和左边菜单固定js效果；
window.onscroll = function(){
    var Q = document.getElementById("head3");
    var s=document.body.scrollTop||document.documentElement.scrollTop;
    var  w=document.getElementById("nav_yc");
    var  jxa=document.getElementsByClassName("jxa");
    var  bjt=document.getElementsByClassName("nasyc1");
    var x=document.body.scrollTop||document.documentElement.scrollTop;
    if(s >= 129){
        //设定对话框的浮动效果
        Q.className = "floatNav";
    } else {
        Q.className = "mian_nav";
    }
    for(var i=0;i<jxa.length;i++){
        jxa[i].style.background="";
        jxa[i].style.color="";
        bjt[i].style.background="";
    }
    if (x>11330){
        w.className="nav_left1";
        jxa[11].style.background="#f10180";
        jxa[11].style.color="#ffffff";
        bjt[11].style.background="url('./image/jxq.png') no-repeat center"
    }
    else if (x>10430){
        w.className="nav_left1";
        jxa[10].style.background="#f10180";
        jxa[10].style.color="#ffffff";
        bjt[10].style.background="url('./image/jxq.png') no-repeat center"
    }
    else if (x>9610){
        w.className="nav_left1";
        jxa[9].style.background="#f10180";
        jxa[9].style.color="#ffffff";
        bjt[9].style.background="url('./image/jxq.png') no-repeat center"
    }
    else if (x>8790){
        w.className="nav_left1";
        jxa[8].style.background="#f10180";
        jxa[8].style.color="#ffffff";
        bjt[8].style.background="url('./image/jxq.png') no-repeat center"
    }
    else if (x>7970){
        w.className="nav_left1";
        jxa[7].style.background="#f10180";
        jxa[7].style.color="#ffffff";
        bjt[7].style.background="url('./image/jxq.png') no-repeat center"
    }
    else if (x>7150){
        w.className="nav_left1";
        jxa[6].style.background="#f10180";
        jxa[6].style.color="#ffffff";
        bjt[6].style.background="url('./image/jxq.png') no-repeat center"
    }
    else if (x>6330){
        w.className="nav_left1";
        jxa[5].style.background="#f10180";
        jxa[5].style.color="#ffffff";
        bjt[5].style.background="url('./image/jxq.png') no-repeat center"
    }
    else if (x>5510){
        w.className="nav_left1";
        jxa[4].style.background="#f10180";
        jxa[4].style.color="#ffffff";
        bjt[4].style.background="url('./image/jxq.png') no-repeat center"
    }
    else if (x>4890){
        w.className="nav_left1";
        jxa[3].style.background="#f10180";
        jxa[3].style.color="#ffffff";
        bjt[3].style.background="url('./image/jxq.png') no-repeat center"
    }
    else if (x>3900){
        w.className="nav_left1";
        jxa[2].style.background="#f10180";
        jxa[2].style.color="#ffffff";
        bjt[2].style.background="url('./image/jxq.png') no-repeat center"
    }else if (x>2750) {
        jxa[1].style.background = "#f10180";
        jxa[1].style.color = "#ffffff";
        bjt[1].style.background="url('./image/jxq.png') no-repeat center"
    }else if (x>1000){
            w.className="nav_left1";
            jxa[0].style.background="#f10180";
            jxa[0].style.color="#ffffff";
        bjt[0].style.background="url('./image/jxq.png') no-repeat center"
        }
    else{
        w.className="nav_left";
    }




};



/*轮播图片*/
var i=0;
 function show() {
     var arr=["./image/dapr.jpg","./image/lb2.jpg","./image/lb3.jpg","./image/lb4.jpg"];
     var img1=document.getElementById("img1");
     img1.src=arr[i];
     i++;
     if(i>=arr.length){
         i=0;
     }
 }
 /*点击左边按钮进行循环递减换图片*/
function clea1() {
    clearInterval(inte);
    var arr=["./image/dapr.jpg","./image/lb2.jpg","./image/lb3.jpg","./image/lb4.jpg"];
    var img1=document.getElementById("img1");
    if(i == 0){
        i=4;
    }
    i--;
    img1.src=arr[i];
}
/*点击右边按钮进行循环递加换图片*/
 function clea2() {
     clearInterval(inte);
     var arr=["./image/dapr.jpg","./image/lb2.jpg","./image/lb3.jpg","./image/lb4.jpg"];
     var img1=document.getElementById("img1");
     i++;
     if(i>=arr.length){
         i=0;
     }
     img1.src=arr[i];
 }
function init() {
    inte=setInterval("show()",1000);
}
function v() {
    clearInterval(inte);
}
window.onload=init();

