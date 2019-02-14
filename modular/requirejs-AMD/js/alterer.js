define(['jquery','dataService'],function ($,dataService) {
    let name='tom';
    function showMsg() {
        $('body').css('background-color','gray');
        console.log(name+dataService.getMsg())
    }
    return {showMsg}
})