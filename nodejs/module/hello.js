module.exports=function Hello() {
    var name;
    this.setName=function (name) {
        this.name=name;
    };
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}