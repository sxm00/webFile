/**
 * Created by sxm on 2017/7/10.
 */
$(function () {
    //留言
    $("#message").click("add",function () {
        var text = $("#mm").val();
        if (text != null && text != ""){
            var sb  = "";
            sb = '<div class="media mt_r"><div class="media-body"><h4 class="media-heading">技术大哥</h4><p>'+text+'</p>' +
                '</div><div class="media-right"><img src="../images/b.png" alt=""></div></div>';
            $("#messageIT").append(sb);
        }else{
            alert("请输入内容···")
        }

    });



    /*图标部分*/
    var myChart = echarts.init(document.getElementById('myChart'));
    var option = {
        title: {

        },
        tooltip : {
           trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        toolbox: {

        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {normal: {}},
                data:[820, 932, 901, 934, 860, 1000, 1120]
            }
        ]
    };
    myChart.setOption(option);
})