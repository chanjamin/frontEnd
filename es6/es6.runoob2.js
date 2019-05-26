//Number
{
    // Number.EPSILON 属性表示 1 与大于 1 的最小浮点数之间的差。
    console.log(0.1 + 0.2 == 0.3)
    console.log(Math.abs(0.1 - 0.3 + 0.2) < Number.EPSILON)//计算误差

    Number.MAX_VALUE
}

//对象
{
    const age = 2;
    const name = 'nike'
    const person = {age, name}//允许变量，计算
    console.log(person)
    const person2 = {
        [name.toUpperCase()]: 'mike'
    }
    console.log(person2)
    //Object.assign(target, source_1, ···)
    // 用于将源对象的所有可枚举属性复制到目标对象中。

    Object.assign(person, person2)
    console.log(person)//{ age: 2, name: 'nike', NIKE: 'mike' }

    // assign 的属性拷贝是浅拷贝:
    // 修改源/目标引用值，源/目标改变
    let sourceObj = {a: {b: 1}};
    let targetObj = {c: 3};
    Object.assign(targetObj, sourceObj);
    targetObj.a.b = 2;
    console.log(sourceObj.a.b);  // 2

    // 会将数组处理成对象，所以先将 [2,3] 转为 {0:2,1:3} ，然后再进行属性复制，所以源对象的 0 号属性覆盖了目标对象的 0。

    console.log(Object.assign([2, 3], [5]))
}

//Array

{
    arr = [1, true, 'ok']

    console.log(Array.from([1, 2, 3], (n) => n * 2))

    let map = {
        do: function (n) {
            return n * 2;
        }
    }
    let arrayLike = [1, 2, 3];
    console.log(Array.from(arrayLike, function (n) {
        return this.do(n);
    }, map)); // [2, 4, 6]

    //对象转数组 属性名要可转为数字，且要有length属性
    let Oarr = {
        1: 'ok',
        3: true,
        length: 3
    }
    console.log(Array.from(Oarr))//[ undefined, 'ok', undefined ]

    //数组缓冲区
    // 数组缓冲区是内存中的一段地址。
    // 定型数组的基础。
    // 实际字节数在创建时确定，之后只可修改其中的数据，不可修改大小。

    let arrayBuffer = new ArrayBuffer(10);
    console.log(arrayBuffer.byteLength)
    //分割
    let arrayBuffer1 = arrayBuffer.slice(1, 3);
    console.log(arrayBuffer1)

    // 视图
    // 视图是用来操作内存的接口。
//
// 视图可以操作数组缓冲区或缓冲区字节的子集,并按照其中一种数值数据类型来读取和写入数据。
//
// DataView 类型是一种通用的数组缓冲区视图,其支持所有8种数值型数据类型。

    let dataView = new DataView(arrayBuffer);
    dataView.setInt8(0, 127);
    console.log(dataView.getInt8(0))
    dataView.setFloat64(1, 0.1111)
    console.log(dataView.getFloat64(1))

    // 定型数组
    // 数组缓冲区的特定类型的视图。
    // 可以强制使用特定的数据类型，而不是使用通用的 DataView 对象来操作数组缓冲区。

    // 通过数组缓冲区生成
    let int8Array = new Int32Array(new ArrayBuffer(12));
    int8Array.set(new Set([1, 2, 3]))
    console.log(int8Array.byteLength)//12
    console.log(int8Array.length)//3   所以int32占用4个字节

    //直接构造
    let int16Array = new Int16Array(10);
    console.log(int16Array.byteLength)//20

    //subarray()类似于slice
    int8Array.subarray(0, 1)
}

//Function

{
    var f = v => v;
//等价于
    var f = function (a) {
        return a;
    }
    f(1);  //1

    // 数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
    var func = () => console.log(this)
    func()//浏览器下是window

    function fund() {
        setTimeout(() => {
            console.log(this.a);
        }, 0)
    }

    var a = 20;
    fund.call({a: 15})//15
}

// for...of循环
// for...of 是 ES6 新引入的循环，用于替代 for..in 和 forEach() ，并且支持新的迭代协议。它可用于迭代常规的数据类型，如 Array 、 String 、 Map 和 Set 等等。
{
    for (let i of ["zero", "one", "two"]) {
        console.log(i)
    }

}

//Class
// Class 内部只有静态方法，没有静态属性。

{
    class Example {
        // static a=3;//编译报错
    }

    Example.b = 4;//新提案
    console.log(Example.b)//4


}

//Promise

{
    let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

    //这一块类似模板代码，then(这里是成功会执行的方法。），catch（失败会执行）
    function ajax(URL) {
        return new Promise(function (resolve, reject) {
            var req = new XMLHttpRequest();
            req.open('GET', URL, true);
            // throw Error;
            req.onload = function () {
                if (req.status === 200) {
                    resolve(req.responseText);
                } else {
                    reject(new Error(req.statusText));
                }
            };
            req.onerror = function () {
                reject(new Error(req.statusText));
            };
            req.send();
        });
    }

    var URL = "http://www.runoob.com/try/ajax/testpromise.php";
    ajax(URL).then(function onFulfilled(value) {
        console.log('内容是：' + value);
    }).catch(function onRejected(error) {
        console.log('错误：' + error);
    }).finally(console.log("finally"))

    // all方法,把promiselike 对象转化为一个promise，必须全部成功才会then，一个失败就catch
    Promise.all([1, 2, 3].map((value) => {
        return new Promise((resolve, reject) => {
            value = " ajax here" + value;
            if (value == 4)
                throw new Error("失败了");
            resolve(value);
            reject(value)
        })
    })).then((v) => console.log("chenggong" + v)).catch((v) => console.error("shibai" + v))//chenggong1,2,3因为全部返回才会调用then, 失败v=有原因


    const p = Promise.race([
        setTimeout(() => null, 1000),
        new Promise(function (resolve, reject) {
            setTimeout(() => reject(new Error('request timeout')), 5000)
        })
    ]);

    p
        .then(console.log)
        .catch(console.error);

    // 有时需要将现有对象转为 Promise 对象，Promise.resolve方法就起到这个作用。

    // const jsPromise = Promise.resolve($.ajax('/whatever.json'));

    // 参数是一个thenable对象

    let thenable = Promise.resolve(
        {then: (resolve) => resolve(42)}
    );
    thenable.then(function(value) {
        console.log(value);  // 42
    })

    //参数不是具有then方法的对象，或根本就不是对象,或无参
//直接返回一个resolved状态的 Promise 对象。
    const pp = Promise.resolve();

    pp.then(function () {
        // ...
    });

    // s，console.log('one')则是主线程执行的，因此最先输出。

    setTimeout(function () {//在下一轮“事件循环”开始时执行，
        console.log('threethreethree');
    }, 0);

    Promise.resolve().then(function () {//在本轮“事件循环”结束时执行
        console.log('twotwotwo');
    });

    console.log('oneoneone');
}

//Generator

{
    function *func() {
        console.log(" func one")
        yield 1;
        console.log("func two")
        yield 2;
        console.log("func three")
        return 3;
    }

    let numbers = func();
    console.log(numbers.next())
    console.log(numbers.next())
    console.log(numbers.next())

    function* sendParameter(){
        console.error("strat");
        var x = yield '2';
        console.error("one:" + x);
        var y = yield '3';
        console.error("two:" + y);
        console.error("total:" + (x + y));
    }
    let sendParameter1 = sendParameter();
    console.error(sendParameter1.next())
    console.error(sendParameter1.next())
    console.error(sendParameter1.next())
    //传参
    let sendParameter2 = sendParameter();
    console.error(sendParameter2.next(10))
    console.error(sendParameter2.next(20))//one 20
    console.error(sendParameter2.next(30))//two

    //return 方法
    //
    // return 方法返回给定值，并结束遍历 Generator 函数。
    //
    // return 方法提供参数时，返回该参数；不提供参数时，返回 undefined 。
    sendParameter().return("foor")
    var g = function* () {
        try {
            yield;
        } catch (e) {
            console.log('catch inner', e);
        }
    };

    function* callee() {
        console.log('callee: ' + (yield));
    }
    function* caller() {
        while (true) {
           yield* callee();
        }
    }
}

//async
{
    // async 函数返，可以使用 then 方法添加回调函数。

    async function helloAsync(){
        return (console.log("hell Async"))
    }
    console.info(helloAsync instanceof Promise)
    helloAsync().then(v=>console.log(v)).catch()

    // await 在异步函数中使用同步行为

    function timeout(){
        setTimeout(()=>console.log("await 在异步函数中使用同步行为"),1000)
    }
    async function helloAsync2() {
        await timeout();
        console.log("helloAsync2")
    }

    helloAsync2()
}