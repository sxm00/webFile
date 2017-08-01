

function par() {
    var use = document.getElementById("use").value;
    var pas = document.getElementById("pas").value;
    var usepa=/^[1][358][0-9]{9}$/;
    var paspa=/ ^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
    var usep = document.getElementById("tip1");
    var pasp = document.getElementById("tip2");

    if (use == "") {
        usep.innerHTML = "请输入用户号";
        usep.style.display="block"
    }
    if (pas == "") {
        pasp.innerHTML = "请输入密码";
        pasp.style.display="block"
    }


    if ( usepa.test(use)==false){
        usep.innerHTML="请输入11位手机号码";
        usep.style.display="block";
    }else if (usepa.test(use)==true){
        usep.innerHTML="";
        usep.style.display="none"
    }
    if (  paspa.test(pas)==false){
        pasp.innerHTML="请输入6-21字母数字组成的密码";
        pasp.style.display="block";
    }else if ( paspa.test(pas)==true){
        pasp.innerHTML="";
        pasp.style.display="none"
    }


    /* usepa.test(use)==false ? usep.innerHTML="请输入11位手机号码":usep.innerHTML="";
     paspa.test(use)==false ? pasp.innerHTML="请输入大写字母开始的密码":pasp.innerHTML="";
     telpa.test(use)==false ? telp.innerHTML="请再次输入大写字母开始的密码":telp.innerHTML="";
     emlpa.test(use)==false ? emlp.innerHTML="请输入正确的验证码":emlp.innerHTML="";*/
}
function inp(n) {
    var usep = document.getElementById("tip1");
    var pasp = document.getElementById("tip2");
    switch (n){
        case 1:usep.innerHTML = ""; usep.style.display="none";break;
        case 2:pasp.innerHTML = "";pasp.style.display="none"; break;

    }
}