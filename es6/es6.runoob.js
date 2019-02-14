{
    const PI = 3.14
    // PI=3
}

//解构赋值

{
    let [a, [b, c]] = [1, [2, 3]]
    console.log(a, b, c)
    let [d, , f] = [1, 2, 3];
    console.log(d, f)
    let [g = 4, h] = [];
    console.log(g, h)
    let [i, ...j] = [7, 8, 9]
    console.log(i, j)
    let [k, l, m, n, o] = 'hello'
    console.log(k, l, m, n, o)
    let [p = 2] = [3]
    console.log(p)

    let {foo, bar} = {foo: 'go', bar: 'to heaven'}
    console.log(foo, bar)
    let {baz: fol} = {baz: 'aaa'}
    console.log(fol)
//除了考试，有啥意义
    let {q: [r, {s}]} = {q: ['hello', {s: 'world'}]}
    console.log(r, s)
    let {t, u, ...rest} = {t: 10, u: 20, c: 30, d: 40};
    console.log(t, u, rest)

}

//Symbol

{
    //任何两个Symbol函数创建的对象都不同
    console.log(Symbol('kkk') === Symbol('kkk'))
    //所以可以使对象有看似同名的属性
    let obj = {};
    obj[Symbol('property')] = 'kkk'
    obj[Symbol('property')] = 'kkk'
    console.log(Object.getOwnPropertyNames(obj))//[]
    // 要用以下方法
    console.log(Object.getOwnPropertySymbols(obj))

    let yellow = Symbol("Yellow");
    let yellow1 = Symbol.for("Yellow");
    yellow === yellow1;      // false

    // Symbol.for() 类似单例模式，首先会在全局搜索被登记的 Symbol 中是否有该字符串参数作为名称的 Symbol 值，
    // 如果有即返回该 Symbol 值，若没有则新建并返回一个以该字符串参数为名称的 Symbol 值，并登记在全局环境中供搜索。
    let yellow2 = Symbol.for("Yellow");
    console.log(yellow1 === yellow2)     // true

    // Symbol.keyFor() 返回一个已登记的 Symbol 类型值的 key ，用来检测该字符串参数作为名称的 Symbol 值是否已被登记。
    Symbol('blue')
    let blue = Symbol.for('blue');
    console.log(Symbol.keyFor(blue))


}

//MAP

{
    //克隆
    var myMap1 = new Map([["key1", "value1"], ["key2", "value2"]]);
    var myMap2 = new Map(myMap1);
    console.log(myMap2)

    var first = new Map([[1, 'one'], [2, 'two'], [3, 'three'],]);
    var second = new Map([[1, 'uno'], [2, 'dos']]);

// 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的，对应值即 uno，dos， three
    var merged = new Map([...first, ...second]);
}

//SET

{
    let mySet = new Set();

    mySet.add(1); // Set(1) {1}
    mySet.add(5); // Set(2) {1, 5}
    mySet.add(5); // Set(2) {1, 5} 这里体现了值的唯一性
    mySet.add("some text");
// Set(3) {1, 5, "some text"} 这里体现了类型的多样性
    var o = {a: 1, b: 2};
    mySet.add(o);
    mySet.add({a: 1, b: 2});
// Set(5) {1, 5, "some text", {…}, {…}}
// 这里体现了对象之间引用不同不恒等，即使值相同，Set 也能存储

    var arrSet = new Set(["value1", "value2", "value3"]);
    //set->Array
    var arr = [...arrSet]

}

//Proxy
{
    let target = {
        name: 'tom',
        age: 23
    }
    let handler = {
        get: (target, keyObj, receiver) => {
            if (keyObj == 'name')
                return 'the name is ' + target[keyObj];
        },
        set: (target, keyObj, value) => {
            if (keyObj == 'age')
                target[keyObj] = ++value;
        },
        has: function (target, propKey) {
            return propKey in target;
        }
    }

    let proxy = new Proxy(target, handler);
    console.log(proxy.name)
    proxy.age = 45
    console.log(proxy.age)//这会是undefined，因为代理没写这个方法
    console.log(target.age)//46
    console.log('age' in proxy)

    let func = (a, b) => a + b;
    let fhandler = {
        apply: (target, ctx, args) => {
            console.log('handle apply');
            args[0]=0;
            return Reflect.apply(target, ctx, args)
        }
    }
    let fProxy = new Proxy(func, fhandler);
    console.log(fProxy(12, 12))

    let target2 =function () {
            name='jack'
            age=45
    }
    let handler2 = {
        construct:(target, args, newTarget)=>{
            console.log("construct")
            return {};
        }
    }
    let proxy2 = new Proxy(target2, handler2);
    new proxy2()//construct

    //还可以拦截deleteProperty，getOwnPropertyDescriptor，getPrototypeOf,isExtensible,ownKeys,preventExtensions等
}

//Reflect
// ES6 中将 Object 的一些明显属于语言内部的方法移植到了 Reflect 对象上（当前某些方法会同时存在于 Object 和 Reflect 对象上），未来的新方法会只部署在 Reflect 对象上。

{
    let exam = {
        name: "Tom",
        age: 24,
        set info(value){
            return this.age = value;
        },
        score:1
    }
    //es5写法
    Object.defineProperty(exam,'_score',{
        get:function () {
            return 'the socre is '+this.score;
        }
    })
    Reflect.set(exam,'age',25)
    console.log(exam.age)
    console.log(exam._score)//the socre is1

    // 当 target 对象中存在 name 属性的 getter 方法， getter 方法的 this 会绑定 // receiver
    let receiver = {
        name: "Jerry",
        age: 20
    }
    console.log(Reflect.get(exam, 'info', receiver)) // Jerry20

    //此外，还有
    // Reflect.preventExtensions(target)
    // Reflect.getPrototypeOf(obj)
    // Reflect.apply(func, thisArg, args)
    // Reflect.defineProperty(target, propertyKey, attributes)
    //...
}

//String

{
    //模板字符串
    let str=`hello,
                                how
    are you?`
    console.log(str)
    
    let name='mike';
    let age=23;
    let str2=`my name is ${name} and at a age of ${age}`;
    console.log(str2)
    
    function f() {
        return 'have fun'
    }
    console.log(`we will ${f()}`)


    // 标签模板
    // 标签模板，是一个函数的调用，其中调用的参数是模板字符串。

    console.log`标签模板
标签模板，是一个函数的调用，其中调用的参数是模板字符串。`

    function f2(stringArr,...values){
        let result = "";
        for(let i=0;i<stringArr.length;i++){
            result += stringArr[i];
            if(values[i]){
                result += values[i];
            }
        }
        return result;
    }
    let aname = 'Mike';
    let aget = 27;
    console.log(f2`my name is ${aname.toUpperCase()} and i will be ${aget+1} next year`)
    //等价于
    console.log(f2(['My Name is ',',I am ',' years old next year.'],'Mike',28))
}