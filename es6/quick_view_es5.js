"use strict";

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// https://www.runoob.com/w3cnote/es6-concise-tutorial.html
var getStackTrace = function getStackTrace() {
  var obj = {};
  Error.captureStackTrace(obj, getStackTrace);
  return obj.stack;
};

var log = console.log;

console.log = function () {
  var stack = getStackTrace() || "";
  var matchResult = stack.match(/\(.*?\)/g) || [];
  var line = matchResult[1] || "";

  for (var i in arguments) {}

  if (_typeof(arguments[i]) == 'object') {
    arguments[i] = JSON.stringify(arguments[i]);
  }

  arguments[i] += '\n' + line.replace("(", "").replace(")", "").slice(0, line.lastIndexOf(':') - 1);
  log.apply(console, arguments);
};

a = 2;
var a; // 错误，let不支持变量提升
// b=2;let b;

{
  var v = 4;
  var b = 3;
  console.log(b);
}
console.log(a);
console.log(v); //4
// console.log(b)//error

{
  var c = [6, 7];
  c.push(8);
  console.log(c); //能改变引用
  // c=a;
  // 错误，const不能改变类型
}

var getp = function getp() {
  return 4.5;
};

var arr = function arr() {
  return 4.5;
};

console.log(getp() === arr());
var fruit = ['apple', 'banana', 'pear'];
var fruits = fruit.map(function (f) {
  return f + "s";
}); //省略return

console.log(fruits); // S6 中允许你对函数参数设置默认值：

var fprice = function fprice(price) {
  var tax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.7;
  return price + price * tax;
};

console.log(fprice(1000)); // Spread / Rest 操作符指的是 ...，具体是 Spread 还是 Rest 需要看上下文语境。
// 当被用于迭代器中时，它是一个 Spread 操作符：

function loG(x, y, z) {
  console.log(x, y, z);
}

var arr = [1, 2, 3, 4]; //参数可以多于或少于实际参数

var arr = [1, 2]; //NaN

loG.apply(void 0, _toConsumableArray(arr)); //当被用于函数传参时，是一个 Rest 操作符：
//类似Java多参数？

function LOG() {
  for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
    arr[_key] = arguments[_key];
  }

  console.log(arr);
}

LOG(2, 3, 4, 5); //对象词法扩展

function getCar(make, model, price) {
  var _ref;

  return _ref = {
    // 等于make:make
    make: make,
    model: model,
    price: price
  }, _defineProperty(_ref, make + 'make', 'for' + model), _defineProperty(_ref, "deprection", function deprection() {
    return Math.log(price);
  }), _defineProperty(_ref, "dep", function dep() {
    return 3;
  }), _ref;
}

console.log(getCar("Curry", "Kevin", 10000));
console.log(getCar().dep()); // 二进制和八进制字面量

console.log(8); //8

console.log(15); // 对象和数组解构
// 解构可以避免在对象赋值时产生中间变量：

{
  var foo = function foo() {
    return [1, 2, 3];
  };

  var bar = function bar() {
    return {
      x: 4,
      y: 5,
      z: 6
    };
  }; //非常困惑，把x改成x1就报错了


  var _foo = foo(),
      _foo2 = _slicedToArray(_foo, 3),
      _a = _foo2[0],
      _b = _foo2[1],
      _c = _foo2[2];

  console.log(_a, _b, _c);

  var _bar = bar(),
      x = _bar.x,
      y = _bar.y,
      z = _bar.z;

  console.log(x, y, z);
} // 8. 对象超类
// ES6 允许在对象中使用 super 方法：

{
  var _obj;

  var parent = {
    foo: function foo() {
      console.log("hello from parent");
    }
  };
  var child = _obj = {
    foo: function foo() {
      _get(_getPrototypeOf(_obj), "foo", this).call(this);

      console.log("hello from child");
    }
  };
  Object.setPrototypeOf(child, parent);
  child.foo();
} //9. 模板语法和分隔符

{
  var user = 'barret';
  console.log("Hi ".concat(user));
} //for...of VS for...in

{
  var nkname = ['a', 'b', 'c'];
  nkname.size = 3;

  for (var _i2 = 0; _i2 < nkname.length; _i2++) {
    var _name = nkname[_i2];
    console.log(_name); //a b c    类似输出实际值
  }

  for (var name in nkname) {
    console.log(name); //只是输出坐标
  }
} // Map 和 WeakMap

{
  var map = new Map();

  var keyString = 'a string',
      keyObj = {},
      keyFunc = function keyFunc() {};

  map.set(keyString, "a keyString value");
  map.set(keyObj, {
    a: 3
  });
  map.set(keyFunc, function () {
    return 3;
  });
  console.log(map.get(keyString), map.get(keyObj), map.get(keyFunc)); // WeakMap 就是一个 Map，只不过它的所有 key 都是弱引用，意思就是 WeakMap 中的东西垃圾回收时不考虑，使用它不用担心内存泄漏问题。\
  // 另一个需要注意的点是，WeakMap 的所有 key 必须是对象。它只有四个方法 delete(key),has(key),get(key) 和set(key, val)：

  var wMap = new WeakMap();

  var o1 = {},
      o2 = function o2() {
    return null;
  },
      o3 = new Object();

  wMap.set(o1, function () {
    return 3;
  });
  wMap.set(o2, 'an obj');
  wMap.set(o3, [1, 2]);
  console.log(wMap.get(o1), wMap.get(o2), wMap.get(o3));
} // 类
// ES6 中有 class 语法。值得注意是，这里的 class 不是新的对象继承模型，它只是原型链的语法糖表现形式。
//

{
  var Task5 = function Task5() {
    Task5.prototype.loadAll = function () {
      console.log("load All");
    };

    this.showId = function () {
      console.log("id =1231231");
    };
  };

  // 函数中使用 static 关键词定义构造函数的的方法和属性：
  var Task =
  /*#__PURE__*/
  function () {
    function Task() {
      _classCallCheck(this, Task);

      console.log("Task constructor");
    } //实例才可调用


    _createClass(Task, [{
      key: "showId",
      value: function showId() {
        console.log("id is 123");
      } //类似于prototype方法，可以直接调用

    }], [{
      key: "loadAll",
      value: function loadAll() {
        console.log("load All");
      }
    }]);

    return Task;
  }();

  console.log(_typeof(Task));
  Task.loadAll(); // Task.showId();// is not a function

  new Task().showId();
  var task5 = new Task5(); //原型也可以调用

  Task5.prototype.loadAll(); //实例调用实例方法，或原型方法

  task5.showId();
  task5.loadAll(); //类中的继承和超集：

  var MulitTask =
  /*#__PURE__*/
  function (_Task) {
    _inherits(MulitTask, _Task);

    function MulitTask() {
      var _this;

      _classCallCheck(this, MulitTask);

      //类似Java，子类构造函数必然调用父类构造函数，不过java可以不写super（），编译器会加上
      _this = _possibleConstructorReturn(this, _getPrototypeOf(MulitTask).call(this));
      console.log("MulitTask constructor");
      return _this;
    }

    _createClass(MulitTask, [{
      key: "showId",
      //重写父类方法
      value: function showId() {
        console.log("MulitTask show ID");
      }
    }, {
      key: "superShowId",
      value: function superShowId() {
        _get(_getPrototypeOf(MulitTask.prototype), "showId", this).call(this); // super.loadAll()

      }
    }], [{
      key: "loadAll",
      value: function loadAll() {
        _get(_getPrototypeOf(MulitTask), "loadAll", this).call(this); //父类静态方法只能从子类静态方法访问


        console.log("MulitTask LoadAll");
      }
    }]);

    return MulitTask;
  }(Task);

  var mulitTask = new MulitTask();
  mulitTask.showId();
  MulitTask.loadAll();
} //Symbol
// Symbol 是一种新的数据类型，它的值是唯一的，不可变的。ES6 中提出 symbol 的目的是为了生成一个唯一的标识符，不过你访问不到这个标识符：

{
  var sym = Symbol('i m a symbol');
  console.log(_typeof(sym));
  console.info(sym); //?不是访问不到吗
  //getOwnPropertyNames 不包括symbol

  var o = _defineProperty({
    a: 123
  }, sym, 456);

  console.log(Object.getOwnPropertyNames(o));
} // 迭代器（Iterators）

{
  var _arr2 = [1, 2, 3, 4]; //创建迭代器

  var ittr = _arr2[Symbol.iterator](); //所以它是一个方法


  for (var i = 0; i <= _arr2.length; i++) {
    console.log(ittr.next());
  }
} //Generators
// Generator 函数是 ES6 的新特性，它允许一个函数返回的可遍历对象生成多个值。
//
// 在使用中你会看到 * 语法和一个新的关键词 yield:

{
  var infinityNum =
  /*#__PURE__*/
  regeneratorRuntime.mark(function infinityNum() {
    var n;
    return regeneratorRuntime.wrap(function infinityNum$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            n = 1;

          case 1:
            if (!true) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return n++;

          case 4:
            _context.next = 1;
            break;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, infinityNum, this);
  });
  var numbers = infinityNum();

  for (var _i3 = 0; _i3 < 100; _i3++) {
    numbers.next();
  }
} //Promises
// ES6 对 Promise 有了原生的支持，一个 Promise 是一个等待被异步执行的对象，当它执行完成后，其状态会变成 resolved 或者rejected。

{
  var p = new Promise(function (resolve, reject) {
    if (new Date().getDate() % 2 == 0) {
      resolve(console.log("reject"));
    } else {
      reject(console.log("reject"));
    }
  }); //失败或成功后的回调

  p.then(function () {
    return console.log("Promise resolved");
  }, function () {
    return console.log("Promise rejected");
  });
}
