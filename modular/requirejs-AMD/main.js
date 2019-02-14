(function () {
    require.config({

        baseUrl:"js",
        //可以写网络，默认和模块定义同名
        paths:{
            jquery:'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min'
        }
    })
    //真正使用
    require(['alterer'],function (al) {
        al.showMsg();
    })
})()