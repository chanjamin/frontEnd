let data = '1234';

function foo() {
    console.log("foo ${data}")
}

function bar() {
    console.log("bar ${bar}")
}

foo()
bar()

var myApp = {
    foo: function () {
        console.log("foo")
    },
    bar: function () {
        console.log("bar")
    }
}
//对象当模块
myApp.bar()

//立即执行函数
var module = (function () {
    var _private = 'safe now';
    var foo = function () {
        console.log(_private)
    }
    return {
        foo: foo
    }
})();

console.log(module.foo());
console.log(module._private)

var $logBody = (function ($) {
    var $body = $('body');
    var foo = function () {
        console.log($body)
    }
    return {log: foo}
})(jQuery)

$logBody.log();