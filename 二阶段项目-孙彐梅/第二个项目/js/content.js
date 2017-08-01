/**
 * Created by sxm on 2017/7/12.
 */
/*左边*/
function choose(b,o){
    var className = $(o).attr("class");
    if(className.indexOf("active") <= 0 ) {
        $("#user").parent().find('li').removeClass('active');
        if (b == "user") {
            $("#user1").parent().find('div').removeClass('active');
            $("#user").addClass("active");
            $("#user1").addClass("active");
        } else if (b == "search") {
            $("#user1").parent().find('div').removeClass('active');
            $("#search").addClass("active");
            $("#user2").addClass("active");
        }
    }
}
/*右边*/
function findParent(b,o){
    var className = $(o).attr("class");
    if(className.indexOf("active") <= 0 ) {
        $("#searchleft").parent().find('li').removeClass('active');
        if (b == "user") {
            $("#user1").parent().find('div').removeClass('active');
            $("#userleft").addClass("active");
            $("#user1").addClass("active");
        } else if (b == "search") {
            $("#user1").parent().find('div').removeClass('active');
            $("#searchleft").addClass("active");
            $("#user2").addClass("active");
        }
    }
}


/*json数据部分*/
window.onload=function () {
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
    xhr.open("get","./data.json",true);
    xhr.send();
    xhr.onreadystatechange=function () {
        if (xhr.readyState==4 && xhr.status==200){
            var data=JSON.parse(xhr.responseText) ; //将响应文本转换成json对象
//                    console.log(data);
            //var len=data.bookstroe.length;
            var len=10;
            var tag="";
            var list=data.bookstroe;
            for(var i=0;i<len;i++){
                var book=list[i];
                tag+='<div class="row row_1">' +
                    '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">'+book.tit+' </div>' +
                    '<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" > <span>'+book.name+'</span> </div>' +
                    '  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> '+book.type+' </div>' +
                    '    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" class="dropdown" >   ' +
                    '  <a href=""  data-toggle="dropdown"> <button class="btn btn-sm btn-default" >'+book.desc+'' +
                    ' <ul class="dropdown-menu" id="caoz"> <li onclick="a()"><a href="#"><span> 编辑</span></a></li>' +
                    ' <li onclick="del(this)"><a href="#"><span > 删除</span></a></li>  <li><a href="#"><span > 锁定</span></a></li>' +
                    '<li><a href="#"><span > 全局置顶</span></a></li></ul></button></a></div></div>';
            }
            document.getElementById("bookInfo").innerHTML=tag;
        }
    }
}

/*模态框js*/
$(function () {
    $("#myMode0").modal(
        {
            show:false,
            backdrop:false,
            keyboard:false,
            remote:"form.html"  //远程获取内容填充到modal-content中
        }
    )
})
function a () {
    $("#myMode0").modal("show");
};

/*删除按钮js*/
function del(obj){
    $(obj).parent().parent().parent().parent().remove()
}










