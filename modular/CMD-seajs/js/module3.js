define(function (require, exports, module) {
    //引入依赖模块(同步)
    let module1 = require('./module1');

    require.async('./module2',function (m2) {
        console.log(exports===module.exports)
        console.log(exports)
        console.log(module)
        m2()
    })

    exports.show=function () {
        module1.show();
    }
})