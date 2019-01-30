var express = require('express');
var app=express();

//静态文件
app.use(express.static("./nodejs"))

app.get('/',function (req,res) {
    res.send('hell o get')
})
app.post('/',function (req,res) {
    res.send('hell o post')
})
//  /del_user 页面响应
app.delete('/del_user', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
})
//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
})
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
})

var server=app.listen(8081,function () {
    var address = server.address().address;
    var port = server.address().port;
    console.log("server run at : %s:%s",address,port)
})