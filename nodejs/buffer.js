var buf=new Buffer(10);//创建长度为 10 字节的 Buffer
var buf2=new Buffer([10,20,20]);//16进制编码直接给buffer
var buf3=new Buffer('www.shouce.com','ascii');

//写入
buf.write('www.shouce.commmmmm')
console.log(buf.toString())

buf2.write('www.shouce.commmmmm')
//从缓冲区读取数据
console.log(buf2.toString('utf8',0,buf2.length));

//缓冲区合并

console.log(Buffer.concat([buf2,buf]).toJSON())

var comp1=new Buffer('ABC')
var comp2=new Buffer('ABCD')

var result=Buffer.compare(comp1,comp2)
if(result < 0) {
    console.log(comp1 + " 在 " + comp2 + "之前");
}else if(result == 0){
    console.log(comp1 + " 与 " + comp2 + "相同");
}else {
    console.log(comp1 + " 在 " + comp2 + "之后");
}

var cp1=new Buffer('ABCD');
var cp2=new Buffer(3)
cp1.slice(0,cp1.length-1).copy(cp2)
console.log(cp2.toString())