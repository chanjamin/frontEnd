console.log(__filename)
console.log(__dirname)
setTimeout(function () {
    console.log(this)
},1000);
// clearTimeout()
console.dir(this);
console.trace()
console.time("1");
console.timeEnd("1")
console.log('byvoid%diovyb',1991);

process.stdout.write("hello world");
process.argv.forEach(function (index,val) {
    console.log(index+";"+val)
})
console.log(process.execPath)
console.log(process.platform)