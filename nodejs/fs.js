var fs = require('fs');

fs.open('./nodejs/input.txt', 'r+', function (err, fd) {
        if (err) {
            return console.error(err);
        }
        console.log("文件打开成功！");
    var buffer = new Buffer(20);
    fs.read(fd,buffer,0,buffer.length,0,function (err,bytesRead,buffer) {
        console.log(buffer.slice(0,bytesRead).toString());
        fs.close(fd);
    })
    }
);

//检查是否文件再复制
fs.stat('./nodejs/input.txt', function (err, stat) {
    if (stat.isFile()) {
        console.log(stat)
        fs.readFile('./nodejs/input.txt',function (err,data) {
            fs.writeFile('./nodejs/ouput.txt',data.toString())
        })
    }
});
//删除文件
fs.unlink('./nodejs/ouput.txt',)
