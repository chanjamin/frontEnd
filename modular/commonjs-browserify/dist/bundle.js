(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict"
let module1=require('./module1');
let module2=require('./module2');
let module3=require('./module3');

module.exports={
    foo1:module1,
    foo2:module2,
    foo3:module3
}


},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
'use strict';
//导出对象
module.exports={
    foo(){
        console.log("module 1 foo")
    }
}
},{}],3:[function(require,module,exports){
'use strict'
//导出方法
module.exports=function () {
    console.log("module 2 foo")
}
},{}],4:[function(require,module,exports){
'use strict'
exports.foo=function () {
    console.log("module 3 foo")
}
exports.bar=function () {
    console.log("module 3 bar")
}
},{}],5:[function(require,module,exports){
let myModule = require('./myModule');
myModule.foo1.foo();
myModule.foo2();
myModule.foo3.foo();
},{"./myModule":1}]},{},[5]);
