// https://www.runoob.com/w3cnote/es6-concise-tutorial.html

var getStackTrace = function () {
    var obj = {};
    Error.captureStackTrace(obj, getStackTrace);
    return obj.stack;
};
var log = console.log;
console.log = function () {
    var stack = getStackTrace() || ""
    var matchResult = stack.match(/\(.*?\)/g) || []
    var line = matchResult[1] || ""
    for (var i in arguments) {
    }
    if (typeof arguments[i] == 'object') {
        arguments[i] = JSON.stringify(arguments[i])
    }
    arguments[i] += '\n' + line.replace("(", "").replace(")", "").slice(0, line.lastIndexOf(':') - 1);
    log.apply(console, arguments)
};

a = 2;
var a;
// 错误，let不支持变量提升
// b=2;let b;
{
    var v = 4;
    let b = 3;
    console.log(b)
}
console.log(a)
console.log(v)//4
// console.log(b)//error
{
    const c = [6, 7]
    c.push(8);
    console.log(c)//能改变引用
    // c=a;
    // 错误，const不能改变类型
}


var getp = function () {
    return 4.5;
}
var arr = () => 4.5;
console.log(getp() === arr())

let fruit = ['apple', 'banana', 'pear']
let fruits = fruit.map(f => f + "s")//省略return
console.log(fruits)

// S6 中允许你对函数参数设置默认值：
let fprice = (price, tax = 0.7) => price + price * tax;
console.log(fprice(1000))

// Spread / Rest 操作符指的是 ...，具体是 Spread 还是 Rest 需要看上下文语境。

// 当被用于迭代器中时，它是一个 Spread 操作符：
function loG(x, y, z) {
    console.log(x, y, z)
}

var arr = [1, 2, 3, 4]//参数可以多于或少于实际参数
var arr = [1, 2]//NaN
loG(...arr)

//当被用于函数传参时，是一个 Rest 操作符：
//类似Java多参数？
function LOG(...arr) {
    console.log(arr)
}

LOG(2, 3, 4, 5);

//对象词法扩展

function getCar(make, model, price) {
    return {
        // 等于make:make
        make, model, price,
        //支持属性名/值计算，
        [make + 'make']: 'for' + model,
        //省略function
        deprection() {
            return Math.log(price)
        },
        dep: function () {
            return 3;
        }
    }
}

console.log(getCar("Curry", "Kevin", 10000))
console.log(getCar().dep())
// 二进制和八进制字面量

console.log(0o10)//8
console.log(0b1111)

// 对象和数组解构
// 解构可以避免在对象赋值时产生中间变量：

{
    function foo() {
        return [1, 2, 3];
    }

    let [a, b, c] = foo();
    console.log(a, b, c)

    function bar() {
        return {
            x: 4,
            y: 5,
            z: 6
        };
    }

//非常困惑，把x改成x1就报错了
    let {x: x, y: y, z: z} = bar();
    console.log(x, y, z);
}

// 8. 对象超类
// ES6 允许在对象中使用 super 方法：

{
    var parent = {
        foo() {
            console.log("hello from parent")
        }
    }
    var child = {
        foo() {
            super.foo();
            console.log("hello from child")
        }
    }
    Object.setPrototypeOf(child, parent);
    child.foo();
}

//9. 模板语法和分隔符

{
    let user = 'barret'
    console.log(`Hi ${user}`)
}

//for...of VS for...in

{
    let nkname = ['a', 'b', 'c'];
    nkname.size = 3;
    for (let name of nkname) {
        console.log(name)//a b c    类似输出实际值
    }
    for (let name in nkname) {
        console.log(name)//只是输出坐标
    }
}

// Map 和 WeakMap

{
    let map = new Map();
    let keyString = 'a string', keyObj = {}, keyFunc = function () {
    }
    map.set(keyString, "a keyString value")
    map.set(keyObj, {a: 3})
    map.set(keyFunc, () => 3);
    console.log(map.get(keyString), map.get(keyObj), map.get(keyFunc))

    // WeakMap 就是一个 Map，只不过它的所有 key 都是弱引用，意思就是 WeakMap 中的东西垃圾回收时不考虑，使用它不用担心内存泄漏问题。\
// 另一个需要注意的点是，WeakMap 的所有 key 必须是对象。它只有四个方法 delete(key),has(key),get(key) 和set(key, val)：
    let wMap = new WeakMap();
    let o1 = {}, o2 = () => null, o3 = new Object();

    wMap.set(o1, function () {
        return 3;
    });
    wMap.set(o2, 'an obj')
    wMap.set(o3, [1, 2])
    console.log(wMap.get(o1), wMap.get(o2), wMap.get(o3))
}

// 类
// ES6 中有 class 语法。值得注意是，这里的 class 不是新的对象继承模型，它只是原型链的语法糖表现形式。
//
{
    // 函数中使用 static 关键词定义构造函数的的方法和属性：
    class Task {
        constructor() {
            console.log("Task constructor")
        }

        //实例才可调用
        showId() {
            console.log("id is 123")
        }

        //类似于prototype方法，可以直接调用
        static loadAll() {
            console.log("load All")
        }
    }

    console.log(typeof Task)
    Task.loadAll();
    // Task.showId();// is not a function
    new Task().showId();

    function Task5() {
        Task5.prototype.loadAll = function () {
            console.log("load All")
        };
        this.showId = function () {
            console.log("id =1231231")
        }
    }

    var task5 = new Task5();
    //原型也可以调用
    Task5.prototype.loadAll()
    //实例调用实例方法，或原型方法
    task5.showId();
    task5.loadAll();

    //类中的继承和超集：

    class MulitTask extends Task {
        constructor() {
            //类似Java，子类构造函数必然调用父类构造函数，不过java可以不写super（），编译器会加上
            super();
            console.log("MulitTask constructor")
        }

        static loadAll() {
            super.loadAll(); //父类静态方法只能从子类静态方法访问
            console.log("MulitTask LoadAll")
        }

        //重写父类方法
        showId() {
            console.log("MulitTask show ID")
        }

        superShowId() {
            super.showId();
            // super.loadAll()
        }
    }

    var mulitTask = new MulitTask();
    mulitTask.showId();
    MulitTask.loadAll();
}

//Symbol
// Symbol 是一种新的数据类型，它的值是唯一的，不可变的。ES6 中提出 symbol 的目的是为了生成一个唯一的标识符，不过你访问不到这个标识符：
{
    var sym = Symbol('i m a symbol');
    console.log(typeof  sym)
    console.info(sym)//?不是访问不到吗

    //getOwnPropertyNames 不包括symbol

    var o = {a: 123, [sym]: 456}
    console.log(Object.getOwnPropertyNames(o))


}

// 迭代器（Iterators）

{
    let arr = [1, 2, 3, 4];
    //创建迭代器
    let ittr = arr[Symbol.iterator]();//所以它是一个方法

    for (let i = 0; i <= arr.length; i++) {
        console.log(ittr.next())
    }
}

//Generators
// Generator 函数是 ES6 的新特性，它允许一个函数返回的可遍历对象生成多个值。
//
// 在使用中你会看到 * 语法和一个新的关键词 yield:
{
    function *infinityNum() {
        var n = 1;
        while (true) {
            yield n++;
        }
    }

        var numbers=infinityNum()
    for (let i = 0; i < 100; i++) {
        numbers.next()
    }
}

//Promises
// ES6 对 Promise 有了原生的支持，一个 Promise 是一个等待被异步执行的对象，当它执行完成后，其状态会变成 resolved 或者rejected。

{
    var p=new Promise(function (resolve,reject) {
        setTimeout(console.log("异步执行"),1000)
        console.log(parseInt(new Date().getDate()))
        if(parseInt(new Date().getDate())%2==0){
            resolve(
                console.log("resolve")
            )
        }
        else{
            reject(console.log("reject"))
        }
    })
    //失败或成功后的回调
    p.then(()=>console.log("Promise resolved"),()=>console.log("Promise rejected"))
}