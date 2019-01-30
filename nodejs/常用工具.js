var util = require('util');
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.sayName=function () {
    console.log(this.name)
}
function Sub() {
    this.name='sub';
}
util.inherits(Sub,Base);
var base = new Base();
base.sayHello();
base.sayName();
//
var sub = new Sub();
sub.sayName()
// sub.sayHello();
//转为字符串
console.log(util.inspect(base, true, null, true))
