// POST请求的内容全部的都在请求体中，http.ServerRequest并没有一个属性内容为请求体，原因是等待请求体传输可能是一件耗时的工作。所有node.js默认是不会解析请求体的， 当你需要的时候，需要手动来做。
var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req, res){
    var post;
    //挺像jq的
    req.on('data',function (chunk) {
        post+=chunk;
        console.log("data")
    })
    req.on('end',function () {
        post=querystring.parse(post);
        res.end(util.inspect(post))
        console.log("end")
    })
}).listen(3000);

