// 연습문제
// 함수의 반환값을 이용하여 아래를 출력하기
// 입력 : 값 1이 입력되면 "hello", 값 2가 입력되면 "world" 출력
// -> prompt , if else if 사용

window.onload = function () {
    function hi() {

        let n = prompt("숫자를 입력해 주세요.");
        let result = "";
    // 조건부분
        if(n == 1) {
            result = "hello";
        } else if (n == 2) {
            result = "world";
        } 
    // 반환부분
        return result;
    }
    // 출력부분
    document.write(hi());
}
     
   
// 연습문제
// 함수의 반환값을 이용해서 아래를 출력
// 0이 입력되면 "false" 그 외에는 "true" 출력

window.onload = function () {
    function hihi () {

        let num1 = prompt("숫자를 입력해 주세요.");
        let result = "";
     // 조건부분
        if(num1 == 0) {
            result = "false";
        } else {
            result = "true";
        }
     // 반환부분
        return result;
    }
     // 출력부분
    document.write(hihi());
}

// 도전과제
// 함수의 반환값을 이용해서 아래를 출력
// n을 입력받아 1부터 n까지의 정수합 출력
// 힌트 : let num = Number(prompt("숫자를 입력하세요"));

window.onload = function() {
    function hihihi () {

        let num = Number(prompt("숫자를 입력하세요."));
        let result = 0;

        for(let i=1; i <= num ; i++) {
            result += i;
        }

        return result;
    }

    document.write(hihihi());
}