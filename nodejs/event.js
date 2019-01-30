var ev=require('events')
// 创建 eventEmitter 对象
var emi=new ev.EventEmitter();

var connectHandler=function connected() {

    console.log('连接成功。');
    //触发事件
    emi.emit('data_recevied')
}
//绑定事件
emi.on('connection',connectHandler)
emi.on('data_recevied',function name(params) {
    console.log("数据接收");
    
})

//触发事件
//
console.log("程序执行");
emi.emit('connection')

emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');