var express = require('express');
var app = express();

app.use(express.static('.'))

app.get('/process', function (req, res) {
    response={
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    res.send(JSON.stringify(response))
});

// ---------------------post--------------------------
var bodyP = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencoded = bodyP.urlencoded({extended:false});

app.post('/process',urlencoded,function (req,res) {
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    res.end(JSON.stringify(response))
});


// --------------------fileupload--------------------------
var fs = require('fs');
// var multer = require('multer');

app.post('file_upload',function (req,res) {
    console.log(req.files[0])
    var dest=__dirname+"/nodejs/express/"+req.files[0].originalname;
    console.log(req)
})

// ----------------------cookie-----------------------
var cookieParser = require('cookie-parser');
app.use(cookieParser())

app.get('/',function (req,res) {
    res.cookie('hello','fuck')
    res.end(JSON.stringify(req.cookies))
})

var server = app.listen(8081, function () {


    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})