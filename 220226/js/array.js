// 배열 연습문제 1
// 공백을 기준으로 n개의 데이터가 입력된다.
// n개의 데이터를 입력의 역순으로 출력한다.
// 입력 : 1 3 5 6 8
// 출력 : 8 6 5 3 1

// 내 풀이
// let num = prompt("숫자를 입력하세요.").split(" ");
//     document.write(num + "<br>");
//     document.write(num.reverse());


// 선생님 풀이
// window.onload = function () {
//     let inputString = prompt("숫자를 입력하세요.").split(" ");
//     let result = inputString.reverse();

//     for(let i of result) {
//         document.write(i + " ");
//     }
// }




// 연습문제 2
// k개의 정수들이 공백으로 구분되어 입력된다.
// k개의 숫자를 입력받은 순서대로 출력하고,
// 다 되면 한 번 더 출력한다(총 2번).
// let num = prompt("숫자를 입력하세요.").split(" ");
// 입력 예시 : 1 2 3
// 출력 에시 : 1
//             2
//             3
//             1
//             2
//             3

// window.onload = function () {
//     let num2 = prompt("숫자를 입력하세요.").split(" ");
    
//     for(let j=0; j<2; j++) {
//         for(let i of num2) {
//             document.write(i + "<br>");
//         }
//     }
// }



// 연습문제 3
// k값이 입력된다.
// k번째 숫자가 무엇이었는지 출력한다.
// 입력 예시1 : 10 9 8 7 6 5 4 3 2 1
// 입력 예시2 : 3
// 출력 예시 : 8

window.onload = function() {
    let num3 = prompt("숫자를 입력하세요.").split(" ");
    let num4 = Number(prompt("숫자를 입력하세요."));


    let result = num3[num4-1];
    document.write(result + "<br>");


}

// 도전과제
// n개의 정수 k가 공백으로 구분되어 입력된다. (1 <= k <==1000)
// 숫자를 로테이션한 결과를 출력한다. (단 왼쪽으로만 돌린다.)
// 입력 예시 : 1 2 3 4 5
// 출력 예시 : 1 2 3 4 5
//             2 3 4 5 1
//             3 4 5 1 2
//             4 5 1 2 3
//             5 1 2 3 4