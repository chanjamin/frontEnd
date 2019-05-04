
    let myName='tom';
    let age=20;
    let myfn=function () {
        return "My name is" + myName + "! I'm '" + myAge + "years old."
    }

    class myClass {
        static a='yeah'
    }
    export{a,myName,age,myfn}
export default {myClass,myName,age,myfn}