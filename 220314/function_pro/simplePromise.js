let _promise = function(param) {
    return new Promise(function(resolve, reject) {
        // 3초 후에 실행되는 비동기 함수
        setTimeout(function() {
            if(param == true) {
                resolve("해결 완료");
            }
            else {
                reject(Error("실패!"));
            }
        }, 3000);
    });
}

_promise(true)
    .then(function(text) {
        console.log(text);
    }, function(error) {
        console.log(error);
    });