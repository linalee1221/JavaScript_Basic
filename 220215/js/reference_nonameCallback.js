function callTenTimes(callback) {
    for (var i = 0; i < 10; i++) {
        callback();
    }
}

callTenTimes(function () {
    alert('함수 호출');

});