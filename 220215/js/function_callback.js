function callTenTimes(callback) {
    for(var i = 0; i < 10; i++) {
        callback();
    }
}

var callback = function() {
    alert('함수 호출');
};
callTenTimes(callback); 