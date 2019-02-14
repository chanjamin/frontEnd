define(function (require, exports, module) {
    let data="所有人都在做一件事等于灾难？";
    module.exports=function () {
        console.log(exports===module.exports)//此时不等，使用时就等了
        console.log("module 2 function() called,data= "+data)
    }
        console.log(exports)//{}|
        console.log(module)
})