

function par() {
    var use = document.getElementById("use").value;
    var pas = document.getElementById("pas").value;
    var tel = document.getElementById("pass").value;
    var eml = document.getElementById("yzm").value;
    var usepa=/^[1][358][0-9]{9}$/;
    var paspa=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/;
    var telpa=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/;
    var emlpa=/^[0-9]$/;
    var usep = document.getElementById("tip1");
    var pasp = document.getElementById("tip2");
    var telp = document.getElementById("tip3");
    var emlp = document.getElementById("tip4");
   /* if (use == "") {
        usep.innerHTML = "请输入用户号";
        usep.style.display="block"
    }
    if (pas == "") {
        pasp.innerHTML = "请输入密码";
        pasp.style.display="block"
    }
    if (tel == "") {
        telp.innerHTML = "请再次输入密码";
        telp.style.display="block"
    }
    if (eml == "") {
        emlp.innerHTML = "请输入yzm";
        emlp.style.display="block"
    }*/

    if ( usepa.test(use)==false){
        usep.innerHTML="请输入11位手机号码";
        usep.style.display="block";
    }else if (usepa.test(use)==true){
        usep.style.display="none"
    }
    if (  paspa.test(pas)==false){
        pasp.innerHTML="请输入6-21字母数字组成的密码";
        pasp.style.display="block";
    }else if ( paspa.test(pas)==true){
        pasp.style.display="none"
    }
    if ( telpa.test(tel)==false){
        telp.innerHTML="请再次输入密码";
        telp.style.display="block";
    }else {
        telp.style.display="none";
    }
    if (  emlpa.test(eml)==false){
        emlp.innerHTML="请输入正确的验证码";
       emlp.style.display="block";
    }else {
        emlp.style.display="none";
    }

   /* usepa.test(use)==false ? usep.innerHTML="请输入11位手机号码":usep.innerHTML="";
    paspa.test(use)==false ? pasp.innerHTML="请输入大写字母开始的密码":pasp.innerHTML="";
    telpa.test(use)==false ? telp.innerHTML="请再次输入大写字母开始的密码":telp.innerHTML="";
    emlpa.test(use)==false ? emlp.innerHTML="请输入正确的验证码":emlp.innerHTML="";*/
}
function inp(n) {
    var usep = document.getElementById("tip1");
    var pasp = document.getElementById("tip2");
    var telp = document.getElementById("tip3");
    var emlp = document.getElementById("tip4");
    var u1=document.getElementById("inp1");
    var u2=document.getElementById("inp2");
    var u3=document.getElementById("inp3");
    var u4=document.getElementById("inp4");
    var t1 = document.getElementById("use");
    var t2 = document.getElementById("pas");
    var t3 = document.getElementById("pass");
    var t4 = document.getElementById("yzm");
    switch (n){
        case 1:usep.innerHTML = ""; usep.style.display="none"; u1.style.background="";t1.style.background="";break;
        case 2:pasp.innerHTML = "";pasp.style.display="none"; u2.style.background="";t2.style.background="";break;
        case 3:telp.innerHTML = "";  telp.style.display="none";u3.style.background="";t3.style.background="";break;
        case 4:emlp.innerHTML = ""; emlp.style.display="none";u4.style.background="";t4.style.background=""; break;
    }
}

function a() {
    var u1=document.getElementById("inp1");
    var u2=document.getElementById("inp2");
    var u3=document.getElementById("inp3");
    var u4=document.getElementById("inp4");
    var t1 = document.getElementById("use");
    var t2 = document.getElementById("pas");
    var t3 = document.getElementById("pass");
    var t4 = document.getElementById("yzm");
    u1.style.background="#ffe6e7";t1.style.background="#ffe6e7";
    u2.style.background="#ffe6e7";t2.style.background="#ffe6e7";
    u3.style.background="#ffe6e7";t3.style.background="#ffe6e7";
    u4.style.background="#ffe6e7";t4.style.background="#ffe6e7";
}