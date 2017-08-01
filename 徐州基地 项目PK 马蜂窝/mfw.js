var i=0;
function show() {
   var arr=["./image/b2.jpeg","./image/b5.jpeg","./image/b3.jpeg","./image/b1.jpeg","./image/b4.jpeg"] ;
   var k1=document.getElementById("k1");
   var k2=document.getElementById("k2");
   var k3=document.getElementById("k3");
   var k4=document.getElementById("k4");
   var k5=document.getElementById("k5");
   var spa=document.getElementsByClassName("tp_l");
   var arrP=[k1,k2,k3,k4,k5];
   var img1=document.getElementById("img1");
   img1.src=arr[i];
   for (var p=0;p<spa.length;p++){
       spa[p].style.display="none";
   }
   spa[i].style.display="block";

   for(var j=0;j<arrP.length;j++){
       arrP[j].style.border="";
    }
    arrP[i].style.border="3px solid #ff9d00";
   i++;
   if(i>=arr.length){
       i=0;
   }
}

function str(n) {
    clearInterval(int);
    var arr=["./image/b2.jpeg","./image/b5.jpeg","./image/b3.jpeg","./image/b1.jpeg","./image/b4.jpeg"] ;
    var k1=document.getElementById("k1");
    var k2=document.getElementById("k2");
    var k3=document.getElementById("k3");
    var k4=document.getElementById("k4");
    var k5=document.getElementById("k5");
    var spa=document.getElementsByClassName("tp_l");
    var arrP=[k1,k2,k3,k4,k5];
    var img1=document.getElementById("img1");
    img1.src=arr[n];
    for (var p=0;p<spa.length;p++){
        spa[p].style.display="none";
    }
    spa[n].style.display="block";

    for(var j=0;j<arrP.length;j++){
        arrP[j].style.border="";
    }
    arrP[n].style.border="3px solid #ff9d00";
}

function init() {
    int=setInterval("show()",2000);
}
window.onload=init();
