//非常详细，也非常无聊，等我学会了，就完全失去对编程的兴趣了。我觉得应该入门，然后去做东西，看别人的东西，查漏补缺
//

{
    var ji="\uD842\uDFB7";
    console.log(ji)
    console.log("\uD8888")
}

//let
// 两个知识，1。let作用域，2.for有两个作用域
{
    let arr=new Array(10);
    for (let i = 0; i < 10; i++) {
        arr[i]=()=>console.log(i)
    }
    arr[5]()//5

    let arr2=[];
    for (var i = 0; i < 10; i++) {
        arr2[i]=function () {
            console.log(i)
        }
    }
    arr2[4]()//10

    for (let i = 0; i < 3; i++) {
        let i='abc'
        console.log(i)
    }

    //不存在变量提升
    console.log(hosting)
    var hosting=18;
    // console.log(hosting2)
    // let hosting2=19;//hosting2 is not defined

    //作用域暂时性死区问题
    // function bar(x = y, y = 2) {//y is not defined
    //     return [x, y];
    // }

    // bar();

    // 不允许重复声明


}