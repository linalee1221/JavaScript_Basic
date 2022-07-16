// 연습문제 1
// 함수의 반환값을 이용해서 작성해주세요.
// 두 수를 입력받아서 큰 수를 출력

// window.onload = function () {
//     function num() {

//         let n1 = prompt("숫자를 입력해 주세요.");
//         let n2 = prompt("숫자를 입력해 주세요.");
//         let result = "";
//     // 조건부분
//         if(n1 < n2) {
//             result = n2;
//         } else if(n1 > n2) {
//             result = n1;
//         } 
//     // 반환부분
//         return result;
//     }
//     // 출력부분
//     document.write(num());
// }

// 연습문제 2
// 함수로 n까지의 곱을 출력하기

// window.onload = function() {
//     function multi1() {

//         let num1 = prompt("숫자를 입력하세요.");
//         let result = 1;

//         for(let i=1; i<=num1; i++) {
//             result = result * i;
//         }

//         return result;
//     }

//     document.write(multi1());
// }

// 연습문제 3
// 두 수 a와 b를 입력받아 함수로 만들어서 a부터 b까지 출력하기

window.onload = function() {
    function numnum () {

        let num11 = Number(prompt("첫번째 숫자 입력"));
        let num22 = Number(prompt("두번째 숫자 입력"));
        let result = "";

        for (let i=num11; i<=num22; i++) {
            result = result + " " + i;
        }

        return result;
    }

    document.write(numnum());
}


// 도전과제
// n값을 입력받아 구구단 출력하기

// window.onload = function() {
//     function gugudan() {

//         let dan = Number(prompt("출력할 구구단의 단을 입력하세요."));
//         let result = "";

//         for(let hang=1; hang<=9; hang++) {
//             result = result + "<br>" + dan + " x " + hang + " = " + "  " + dan*hang
//         }

//         return result;
//     }

//     document.write(gugudan());
// }


// 도전과제
// 두 수가 입력된 후
// 최대공약수를 구하는 함수를 만들어서 최대공약수를 출력

// window.onload = function() {
//     function LCD_func() {
//         let num1 = Number(prompt("첫번째 숫자를 입력해주세요."));
//         let num2 = Number(prompt("첫번째 숫자를 입력해주세요."));
//         // 두 수를 입력받는다
//         let result = 0; // result에 0 저장
//         let minValue = 0; // 두 수 중 작은 수를 저장할 변수 선언

//         if(num1<num2) { // 입력받은 두 수 비교하기
//             minValue = num1; 
//         }
//         else {
//             minValue = num2; // 두 수를 비교해서 작은 수를 minValue 변수에 저장
//         }
//          //i는 두 수를 비교해서 저장한 작은수 부터 시작한다.
//          //1보다 i, 즉 minValue에 저장된 숫자가 될때까지 거꾸로 내려가며 나눗셈 연산
//          //증감식은 내려가야하기 때문에 -- 적용
//         for(let i=minValue; i>1; i--) {
//             if(num1 % i == 0 && num2 % i == 0) { // 두 수가 동시에 0으로 나누어 떨어지면 공약수
//                 result = i; // 둘다 참일 경우 반환되는 결과를 result에 저장
//                 break; // 값을 찾으면 반복문 중지하고 탈출
//         }
//     }
//     return result;
// }
// alert(LCD_func());
// }

// 연습문제 4
// 어떤 두 수 a, b가 입력으로 들어온다
// a와 b의 관계는 a <= b이다.
// a에서 b까지 수 중에서 3의 배수만 더하여 출력
// 입력값 : 3
// 입력값 : 7
// 출력값 : 9
// 3과 7사이의 3의 배수는 3, 6이고 더해서 9로 출력 된 것

// window.onload = function() {
//     function sum () {

//         let n1 = Number(prompt("첫번째 숫자 입력"));
//         let n2 = Number(prompt("두번째 숫자 입력"));
//         let result = 0;

//         for (let i=n1; i<=n2; i++) {
//             if(i % 3 == 0) {
//                 result += i;
//             }
//         }

//          return result;
//     }
//        document.write(sum());
// }
    
// 도전과제
// arr = [3, 7, 10, 6, 4]
// 5개의 정수들의 최대값과 최소값을 구하는 프로그램 작성
// Math.max()와 Math.min() 사용

// window.onload = function() {

//         let arr = [3,7,10,6,4];
//         let maxValue = Math.max.apply(null, arr);
//         let minValue = Math.min.apply(null, arr);

//         document.write("다음 배열의 최대값과 최소값을 구하시오.<br>[ 3, 7, 10, 6, 4 ]" + 
//         "<br>" + "최대값 : " + maxValue + "<br>" + "최소값 : " + minValue);

// }