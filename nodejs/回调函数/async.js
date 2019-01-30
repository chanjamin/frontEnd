var fs=require("fs");

var data=fs.readFile("input.txt",function (err,data) {
    if(err)
    return console.error(err);
    console.log(data.toString("utf-8"));
    
});
//先打印，读取完再打印文件
console.log("程序执行结束!");