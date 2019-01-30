var express = require('express');
var app=express();

app.get('/',function (req,res) {
    res.send('hell o worlf')
})

var server=app.listen(8081,function () {
    var address = server.address().address;
    var port = server.address().port;
    console.log("server run at : %s:%s",address,port)
})