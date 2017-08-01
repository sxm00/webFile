/**
 * Created by sxm on 2017/7/11.
 */
/*模态框js*/
$(function () {
    $("#myMode0").modal(
        {
            show:false,
            backdrop:false,
            keyboard:false,
            remote:"form.html"  //远程获取内容填充到modal-content中
        }
    );
})
function bj() {
    $("#myMode0").modal("show");
}

/*左边点击部分*/
function choose(b,o){
    var className = $(o).attr("class");
    if(className.indexOf("active") <= 0 ) {
        $("#user").parent().find('li').removeClass('active')
        $("#user").parent().find('li').addClass('black');
        if (b == "user") {
            $("#user1").parent().find('div').removeClass('active');
            $("#user").addClass("active"); //选中右边的user
            $("#user1").addClass("active");
            //下面是为改变背景颜色而且的css样式
            $("body").css("background","#272b30");
            $(".modal-content").css("background","#272b30");
            $("#btnleft").parent().find('li').addClass('black').removeClass("white");
            $("#user").parent().find('li').addClass('black').removeClass('white');
            $(".navbar-default ").css("background-color","#42474d");
            $(".navbar-default ").css("border-color","#42474d");
        } else if (b == "search") {
            $("#user2").parent().find('div').removeClass('active');
            $("#search").addClass("active");
            $("#user2").addClass("active");
            $("body").css("background","#fff");
            $(".modal-content").css("background","#fff");
            $("#btnleft").parent().find('li').addClass('white').removeClass("black");
            $("#user").parent().find('li').addClass('white').removeClass('black');
            $(".navbar-default ").css("background-color","#f8f8f8");
            $(".navbar-default ").css("border-color","#f8f8f8");
        } else if (b == "add") {
            $("#btn").addClass("active");
            $("#myMode0").modal("show");
        }
    }
}
/*右边点击部分*/
function findParent(b,o){
    var className = $(o).attr("class");
    if(className.indexOf("active") <= 0 ) {
        $("#btnleft").parent().find('li').removeClass('active');
        $("#btnleft").parent().find('li').addClass('black');
        if (b == "user") {
            $("#user1").parent().find('div').removeClass('active');
            $("#userleft").addClass("active");
            $("#user1").addClass("active");
            $("body").css("background","#272b30");
            $("#btnleft").parent().find('li').addClass('black').removeClass("white");
            $("#user").parent().find('li').addClass('black').removeClass('white');
            $(".modal-content").css("background","#272b30");
            $(".navbar-default ").css("background-color","#42474d");
            $(".navbar-default ").css("border-color","#42474d");
        } else if (b == "search") {
            $("#user2").parent().find('div').removeClass('active');
            $("#searchleft").addClass("active");
            $("#user2").addClass("active");
            $("body").css("background","#fff");
            $(".modal-content").css("background","#fff");
            $("#btnleft").parent().find('li').addClass('white').removeClass("black");
            $("#user").parent().find('li').addClass('white').removeClass('black');
            $(".navbar-default ").css("background-color","#f8f8f8");
            $(".navbar-default ").css("border-color","#f8f8f8");
        } else if (b == "add") {
            $("#btnleft").addClass("active");
            $("#myMode0").modal("show");
        }
    }
}

/*删除按钮js*/
function del(obj){
   $(obj).parent().parent().parent().parent().remove()
}


/*json数据部分移到page分页里面*/
/*window.onload=function () {
 showbookInfo()
 }
 function showbookInfo() {
 //            document.getElementById("bookInfo").innerHTML="";
 var xhr=null;
 if (window.XMLHttpRequest){
 xhr=new XMLHttpRequest();//主流浏览器；
 }else {
 xhr=new ActiveXObject("Microsoft.XMLHTTP");//非主流浏览器
 }
 xhr.open("get","./data0.json",true);
 xhr.send();
 xhr.onreadystatechange=function () {
 if (xhr.readyState==4 && xhr.status==200){
 var data=JSON.parse(xhr.responseText) ; //将响应文本转换成json对象
 //                    console.log(data);
 //var len=data.bookstroe.length;
 var len=10;
 var tag="";
 var list=data.bookstroe0;
 for(var i=0;i<len;i++){
 var book=list[i];
 tag+='<div class="row row_1">' +
 '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+book.id+' </div>' +
 '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" > <span>'+book.name+'</span> </div>' +
 '  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"> '+book.email+' </div>' +
 '    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" class="dropdown" >   ' +
 '  <a href=""  data-toggle="dropdown"> <button class="btn btn-sm " >'+book.desc+'' +
 ' <ul class="dropdown-menu" id="caoz"> <li onclick="bj()"><a href="#"><span> 编辑</span></a></li>' +
 ' <li onclick="del(this)"><a href="#"><span > 删除</span></a></li>  <li><a href="#"><span > 锁定</span></a></li>' +
 '<li><a href="#"><span > 修改密码</span></a></li></ul></button></a></div></div>';
 }
 document.getElementById("bookInfo").innerHTML=tag;
 }
 }
 }*/