(function (window,dataService) {
    let name='tom';
    function showMsg() {
        console.log(name+dataService.getMsg())
    }
    window.alterer={showMsg}
})(window,dataService);