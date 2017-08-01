/**
 * Created by sxm on 2017/7/12.
 */
//默认页面展示多少条数据
var pageSize = 6;   //修改此数据  会修改页数
$(function(){
    $.getJSON('../html/data0.json',function(json){   //调取json
      //  console.log(json.bookstroe0);
        $("#pages").html(""); //存储翻页页面为空
        var list = json.bookstroe0;  // 获取json数据
        var lengths = json.bookstroe0.length; //获取json数据的长度
        //总页数
        var total = parseInt(lengths / pageSize );  //默认每页最大条数6
        if(lengths % pageSize != 0){  //当总长度除以一页显示的条数不等于0时，total+1；
            total+=1;
        }
        //默认从12345 开始      //页面初始加载     12345  默认1是选择 即active
        var sb = ' <li id="first" onclick="toFiestAndEnd(this)" class="disabled">' +
            '<a>&laquo;</a></li><li class="active" title="1" onclick="toPage(this)"><a >1</a></li>';
        var li = "";
        //有多少展示多少；如果1《total《5  ，则是有多少页就展示多少页  并且数据是展示pageSize条
        if(total >= 5){ //从12345开始   //判断总页数  如果大于5 直接展示 12345  并且数据是展示pageSize条
            for(var i=1;i<5;i++){
                sb += '<li  title="'+(i+1)+'" onclick="toPage(this)"><a >'+(i+1)+'</a></li>';
            }
            //拼接列表样式
            for(var m =0; m < pageSize ; m++ ){
                li+='<div class="row row_1">' +
                    '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+list[m].id+' </div>' +
                    '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" > <span>'+list[m].name+'</span> </div>' +
                    '  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"> '+list[m].email+' </div>' +
                    '    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" class="dropdown" >   ' +
                    '  <a href=""  data-toggle="dropdown"> <button class="btn btn-sm " >'+list[m].desc+'' +
                    ' <ul class="dropdown-menu" id="caoz"> <li onclick="bj()"><a href="#"><span> 编辑</span></a></li>' +
                    ' <li onclick="del(this)"><a href="#"><span > 删除</span></a></li>  <li><a href="#"><span > 锁定</span></a></li>' +
                    '<li><a href="#"><span > 修改密码</span></a></li></ul></button></a></div></div>';
            }
        }else if(1<total && total < 5){
            for(var j=1;j<total;j++){
                sb += '<li title="'+(j+1)+'" onclick="toPage(this)"><a >'+(j+1)+'</a></li>';
            }
            for(var m =0; m < pageSize ; m++ ){
                li+='<div class="row row_1">' +
                    '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+list[m].id+' </div>' +
                    '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" > <span>'+list[m].name+'</span> </div>' +
                    '  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"> '+list[m].email+' </div>' +
                    '    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" class="dropdown" >   ' +
                    '  <a href=""  data-toggle="dropdown"> <button class="btn btn-sm " >'+list[m].desc+'' +
                    ' <ul class="dropdown-menu" id="caoz"> <li onclick="bj()"><a href="#"><span> 编辑</span></a></li>' +
                    ' <li onclick="del(this)"><a href="#"><span > 删除</span></a></li>  <li><a href="#"><span > 锁定</span></a></li>' +
                    '<li><a href="#"><span > 修改密码</span></a></li></ul></button></a></div></div>';
            }
        }else{  //如果只有一页 只展示1页   数据是全部数据   可能会小于paeSize
            //有多少数据展示多少数据
            for(var n =0; n < lengths ; n++ ){
                li+='<div class="row row_1">' +
                    '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+list[n].id+' </div>' +
                    '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" > <span>'+list[n].name+'</span> </div>' +
                    '  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"> '+list[n].email+' </div>' +
                    '    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" class="dropdown" >   ' +
                    '  <a href=""  data-toggle="dropdown"> <button class="btn btn-sm " >'+list[n].desc+'' +
                    ' <ul class="dropdown-menu" id="caoz"> <li onclick="bj()"><a href="#"><span> 编辑</span></a></li>' +
                    ' <li onclick="del(this)"><a href="#"><span > 删除</span></a></li>  <li><a href="#"><span > 锁定</span></a></li>' +
                    '<li><a href="#"><span > 修改密码</span></a></li></ul></button></a></div></div>';
            }
        }
        document.getElementById("bookInfo").innerHTML=li;
        sb += '<li id="end" onclick="toFiestAndEnd(this)"><a >&raquo;</a></li>';
        $("#pages").html(sb);
    });
})



function toPage(o){
    /*$(o).parent().find("li").removeClass("active");
    $(o).addClass("active");*/
    //current  指即将跳转得到页面
    //判断基本同初始加载    唯一区别是   需要判断当页数多了  怎么进行12345  换成34567
    //思路： 判断总页数是否大于5   在判断 current 和3 的大小
    //total 小于等于5 那就是有多少页  展示多少页   无论选择哪个页面   都不会超出12345
    //total 大于5   看cerrent  如果 current 大于3  并且 大于等于 total-2 说明  到尾部了  因为current 一般要放在中间
                    //如果current 小于3 说明没有到尾部  直接  就是 current-2 current-1 current current+1 current+2
    //数据加载基本同初始加载
    var current = $(o).attr("title");
    $.getJSON('../html/data0.json',function(json) {
        console.log(json.bookstroe0);
        $("#pages").html("");
        var list = json.bookstroe0;
        var lengths = json.bookstroe0.length;
        //总页数
        var total = parseInt(lengths / pageSize );  //默认每页最大条数10
        if(lengths % pageSize != 0){
            total+=1;
        }
        var sb = ' <li id="first" onclick="toFiestAndEnd(this)" class="disabled"><a>&laquo;</a>';
        var li = "";
        console.log("总页数：" + total);
        console.log("当前页数：" + current);
        if(total <= 5 ){  //页数小于5
            for(var j=0;j<total;j++){
                if(current == (j+1)){
                    sb += '<li class="active" title="'+(j+1)+'" onclick="toPage(this)"><a >'+(j+1)+'</a></li>';
                    //取当前页的数据
                    if(total != current){
                        for(var q = ((current-1)*pageSize); q< (current*pageSize);q++){   //不是最后一页  取10条
                            li+='<div class="row row_1">' +
                                '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+list[q].id+' </div>' +
                                '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" > <span>'+list[q].name+'</span> </div>' +
                                '  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"> '+list[q].email+' </div>' +
                                '    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" class="dropdown" >   ' +
                                '  <a href=""  data-toggle="dropdown"> <button class="btn btn-sm " >'+list[q].desc+'' +
                                ' <ul class="dropdown-menu" id="caoz"> <li onclick="bj()"><a href="#"><span> 编辑</span></a></li>' +
                                ' <li onclick="del(this)"><a href="#"><span > 删除</span></a></li>  <li><a href="#"><span > 锁定</span></a></li>' +
                                '<li><a href="#"><span > 修改密码</span></a></li></ul></button></a></div></div>';
                        }
                    }else{
                        for(var p = ((current-1)*pageSize); p< lengths;p++){   //最后一页  取完
                            li+='<div class="row row_1">' +
                                '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+list[p].id+' </div>' +
                                '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" > <span>'+list[p].name+'</span> </div>' +
                                '  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"> '+list[p].email+' </div>' +
                                '    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" class="dropdown" >   ' +
                                '  <a href=""  data-toggle="dropdown"> <button class="btn btn-sm " >'+list[p].desc+'' +
                                ' <ul class="dropdown-menu" id="caoz"> <li onclick="bj()"><a href="#"><span> 编辑</span></a></li>' +
                                ' <li onclick="del(this)"><a href="#"><span > 删除</span></a></li>  <li><a href="#"><span > 锁定</span></a></li>' +
                                '<li><a href="#"><span > 修改密码</span></a></li></ul></button></a></div></div>';
                        }
                    }
                }else{
                    sb += '<li title="'+(j+1)+'" onclick="toPage(this)"><a >'+(j+1)+'</a></li>';
                }
            }
        }else{  //页数大于于5
            console.log("判断页数页数：" + current);
            if(current > 3 ){
                console.log("判断页数页数：" + total);
                if(current <= total-2){
                    sb += '<li title="'+(current-2)+'" onclick="toPage(this)"><a >'+(current-2)+'</a></li>'
                        +'<li title="'+(current-1)+'" onclick="toPage(this)"><a >'+(current-1)+'</a></li>'
                        +'<li class="active" title="'+(current)+'" onclick="toPage(this)"><a >'+(current)+'</a></li>'
                        +'<li title="'+(current-0+1)+'" onclick="toPage(this)"><a >'+(current-0+1)+'</a></li>'
                        +'<li title="'+(current-0+2)+'" onclick="toPage(this)"><a >'+(current-0+2)+'</a></li>';
                    for(var q = ((current-1)*pageSize); q< (current*pageSize);q++){   //不是最后一页  取10条
                        li+='<div class="row row_1">' +
                            '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+list[q].id+' </div>' +
                            '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" > <span>'+list[q].name+'</span> </div>' +
                            '  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"> '+list[q].email+' </div>' +
                            '    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" class="dropdown" >   ' +
                            '  <a href=""  data-toggle="dropdown"> <button class="btn btn-sm " >'+list[q].desc+'' +
                            ' <ul class="dropdown-menu" id="caoz"> <li onclick="bj()"><a href="#"><span> 编辑</span></a></li>' +
                            ' <li onclick="del(this)"><a href="#"><span > 删除</span></a></li>  <li><a href="#"><span > 锁定</span></a></li>' +
                            '<li><a href="#"><span > 修改密码</span></a></li></ul></button></a></div></div>';
                    }
                }else{
                    console.log("判断页数页数：" + total);
                    for(var k = total-4; k<=total;k++){
                        if(k==current){
                            sb += '<li  class="active" title="'+(k)+'" onclick="toPage(this)"><a >'+(k)+'</a></li>';
                            if(total != current){
                                for(var q = ((current-1)*pageSize); q< (current*pageSize);q++){   //不是最后一页  取10条
                                li+='<div class="row row_1">' +
                                    '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+list[q].id+' </div>' +
                                    '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" > <span>'+list[q].name+'</span> </div>' +
                                    '  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"> '+list[q].email+' </div>' +
                                    '    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" class="dropdown" >   ' +
                                    '  <a href=""  data-toggle="dropdown"> <button class="btn btn-sm " >'+list[q].desc+'' +
                                    ' <ul class="dropdown-menu" id="caoz"> <li onclick="bj()"><a href="#"><span> 编辑</span></a></li>' +
                                    ' <li onclick="del(this)"><a href="#"><span > 删除</span></a></li>  <li><a href="#"><span > 锁定</span></a></li>' +
                                    '<li><a href="#"><span > 修改密码</span></a></li></ul></button></a></div></div>';
                                }
                            }else{
                                for(var p = ((current-1)*pageSize); p< lengths ;p++){   //最后一页  取完
                                li+='<div class="row row_1">' +
                                    '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+list[p].id+' </div>' +
                                    '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" > <span>'+list[p].name+'</span> </div>' +
                                    '  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"> '+list[p].email+' </div>' +
                                    '    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" class="dropdown" >   ' +
                                    '  <a href=""  data-toggle="dropdown"> <button class="btn btn-sm " >'+list[p].desc+'' +
                                    ' <ul class="dropdown-menu" id="caoz"> <li onclick="bj()"><a href="#"><span> 编辑</span></a></li>' +
                                    ' <li onclick="del(this)"><a href="#"><span > 删除</span></a></li>  <li><a href="#"><span > 锁定</span></a></li>' +
                                    '<li><a href="#"><span > 修改密码</span></a></li></ul></button></a></div></div>';
                                }
                            }
                        }else{
                            sb += '<li title="'+(k)+'" onclick="toPage(this)"><a >'+(k)+'</a></li>';
                        }
                    }
                }
            }else{
                for(var e=0;e <5 ;e++){
                    if(current == (e+1)) {
                        sb += '<li class="active" title="' + (e-0+1) + '" onclick="toPage(this)"><a >' + (e-0+1) + '</a></li>';
                        for(var q = ((current-1)*pageSize); q< (current*pageSize);q++){   //不是最后一页  取10条
                            li+='<div class="row row_1">' +
                                '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+list[q].id+' </div>' +
                                '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" > <span>'+list[q].name+'</span> </div>' +
                                '  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"> '+list[q].email+' </div>' +
                                '    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" class="dropdown" >   ' +
                                '  <a href=""  data-toggle="dropdown"> <button class="btn btn-sm " >'+list[q].desc+'' +
                                ' <ul class="dropdown-menu" id="caoz"> <li onclick="bj()"><a href="#"><span> 编辑</span></a></li>' +
                                ' <li onclick="del(this)"><a href="#"><span > 删除</span></a></li>  <li><a href="#"><span > 锁定</span></a></li>' +
                                '<li><a href="#"><span > 修改密码</span></a></li></ul></button></a></div></div>';
                        }
                    }else{
                        sb += '<li title="'+(e-0+1)+'" onclick="toPage(this)"><a >'+(e-0+1)+'</a></li>';
                    }
                }
            }
        }
        document.getElementById("bookInfo").innerHTML=li;
        sb += '<li id="end" onclick="toFiestAndEnd(this)"><a >&raquo;</a></li>';
        $("#pages").html(sb);
    });

}

function toFiestAndEnd(o){
    var id = $(o).attr("id");

        /*$(o).parent().find("li").removeClass("active");
         $(o).addClass("active");*/
        //首页和尾页的跳转   基本没什么难点
        //根据传来的类型  判断是首页还是尾页   然后判断总页数 是否大于5   记住 首页是默认选中第一个   尾页 是默认选中最后一个
        var current = $(o).attr("title");
        $.getJSON('../html/data0.json',function(json) {
            console.log(json.bookstroe0);
            $("#pages").html("");
            var list = json.bookstroe0;
            var lengths = json.bookstroe0.length;
            //总页数
            var total = parseInt(lengths / pageSize);  //默认每页最大条数10
            if (lengths % pageSize != 0) {
                total += 1;
            }
            var li = "";
            var sb = ' <li id="first" onclick="toFiestAndEnd(this)" class="disabled"><a>&laquo;</a>';
            if(total <= 5 ){
                if(id=="end"){  //尾页
                    for (var t = 0 ; t < total-1; t++) {
                        sb += '<li  title="' + (t + 1) + '" onclick="toPage(this)"><a >' + (t + 1) + '</a></li>';
                    }
                    sb += '<li  class="active" title="' + total + '" onclick="toPage(this)"><a >' + total + '</a></li>';
                    for(var p = ((total-1)*pageSize); p< lengths ;p++){   //最后一页  取完
                        li+='<div class="row row_1">' +
                            '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+list[p].id+' </div>' +
                            '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" > <span>'+list[p].name+'</span> </div>' +
                            '  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"> '+list[p].email+' </div>' +
                            '    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" class="dropdown" >   ' +
                            '  <a href=""  data-toggle="dropdown"> <button class="btn btn-sm " >'+list[p].desc+'' +
                            ' <ul class="dropdown-menu" id="caoz"> <li onclick="bj()"><a href="#"><span> 编辑</span></a></li>' +
                            ' <li onclick="del(this)"><a href="#"><span > 删除</span></a></li>  <li><a href="#"><span > 锁定</span></a></li>' +
                            '<li><a href="#"><span > 修改密码</span></a></li></ul></button></a></div></div>';
                    }
                }else if(id=="first"){  //首页
                    sb += '<li  class="active" title="1" onclick="toPage(this)"><a >1</a></li>';
                    for(var t=1 ; t < total; t++){
                        sb += '<li  title="'+(t+1)+'" onclick="toPage(this)"><a >'+(t+1)+'</a></li>';
                    }
                    for(var q = 0; q< pageSize;q++){   //不是最后一页  取10条
                        li+='<div class="row row_1">' +
                            '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+list[q].id+' </div>' +
                            '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" > <span>'+list[q].name+'</span> </div>' +
                            '  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"> '+list[q].email+' </div>' +
                            '    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" class="dropdown" >   ' +
                            '  <a href=""  data-toggle="dropdown"> <button class="btn btn-sm " >'+list[q].desc+'' +
                            ' <ul class="dropdown-menu" id="caoz"> <li onclick="bj()"><a href="#"><span> 编辑</span></a></li>' +
                            ' <li onclick="del(this)"><a href="#"><span > 删除</span></a></li>  <li><a href="#"><span > 锁定</span></a></li>' +
                            '<li><a href="#"><span > 修改密码</span></a></li></ul></button></a></div></div>';
                    }
                }
            }else{
                if(id=="end") {  //尾页
                    for (var t = total - 5; t < total-1; t++) {
                        sb += '<li  title="' + (t + 1) + '" onclick="toPage(this)"><a >' + (t + 1) + '</a></li>';
                    }
                    sb += '<li  class="active" title="' + total + '" onclick="toPage(this)"><a >' + total + '</a></li>';
                    for(var p = ((total-1)*pageSize); p< lengths ;p++){   //最后一页  取完
                        li+='<div class="row row_1">' +
                            '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+list[p].id+' </div>' +
                            '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" > <span>'+list[p].name+'</span> </div>' +
                            '  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"> '+list[p].email+' </div>' +
                            '    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" class="dropdown" >   ' +
                            '  <a href=""  data-toggle="dropdown"> <button class="btn btn-sm " >'+list[p].desc+'' +
                            ' <ul class="dropdown-menu" id="caoz"> <li onclick="bj()"><a href="#"><span> 编辑</span></a></li>' +
                            ' <li onclick="del(this)"><a href="#"><span > 删除</span></a></li>  <li><a href="#"><span > 锁定</span></a></li>' +
                            '<li><a href="#"><span > 修改密码</span></a></li></ul></button></a></div></div>';
                    }
                }else if(id=="first"){  //首页
                    sb += '<li  class="active" title="1" onclick="toPage(this)"><a >1</a></li>';
                    for(var t=1 ; t < 5; t++){
                        sb += '<li  title="'+(t+1)+'" onclick="toPage(this)"><a >'+(t+1)+'</a></li>';
                    }
                    for(var q = 0; q< pageSize;q++){   //不是最后一页  取10条
                        li+='<div class="row row_1">' +
                            '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+list[q].id+' </div>' +
                            '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" > <span>'+list[q].name+'</span> </div>' +
                            '  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"> '+list[q].email+' </div>' +
                            '    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" class="dropdown" >   ' +
                            '  <a href=""  data-toggle="dropdown"> <button class="btn btn-sm " >'+list[q].desc+'' +
                            ' <ul class="dropdown-menu" id="caoz"> <li onclick="bj()"><a href="#"><span> 编辑</span></a></li>' +
                            ' <li onclick="del(this)"><a href="#"><span > 删除</span></a></li>  <li><a href="#"><span > 锁定</span></a></li>' +
                            '<li><a href="#"><span > 修改密码</span></a></li></ul></button></a></div></div>';
                    }
                }
            }
            document.getElementById("bookInfo").innerHTML=li;
            sb += '<li id="end" onclick="toFiestAndEnd(this)"><a >&raquo;</a></li>';
            $("#pages").html(sb);

        })

}
