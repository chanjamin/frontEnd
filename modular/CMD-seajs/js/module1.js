define(function (require, exports, module) {
    let data="这有什么意义？";
    exports.show=function () {
        console.log("module 1 show() called,data= "+data)
    }
})