// window.onload = function() {
//     function hello() {
//         let result = "hello world";
//         return result;
//     }

//     let hld = hello();

//     alert(hld); }


// 함수로 만들어서 123을 출력하는 프로그램 작성

window.onload = function() {
    function num() { //함수이름정의
        document.write(123);
    };
} // 함수호출(출력)
    num();


// 함수의 반환값(return)을 이용해서 123을 출력하는 프로그램 작성

function number() {
    let numresult = "123";
    // 반환부분
    return numresult;
}
    // 출력부분
document.write(number());

// 함수로 만들어서 홀수가 입력되면 odd,
// 짝수가 입력되면 even을 출력하는 프로그램을 작성하세요.

window.onload = function() {
// 함수정의
    function num1 () {
        let num1 = prompt("값을 입력하세요.");

        if(num1 % 2 == 1) {
            document.write("odd");
        }else {
            document.write("even");
        }
    } 
// 호출부분
    num1();
}

// 함수의 반환값을 이용해서 홀수가 입력되면 odd,
// 짝수가 입력되면 even을 출력하는 프로그램을 작성하세요.


 // 함수부분
function even_odd() {
    let num = prompt("숫자를 입력해 주세요.");

    let result = "";

 // 조건부분
    if(num % 2 == 0) {
        result = "even";
    } else {
        result = "odd";
    }

 // 반환부분
    return result;
}
 // 출력부분
document.write(even_odd());