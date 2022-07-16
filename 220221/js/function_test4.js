// 연습문제 1
// 두 수 a, b가 입력된다.
// a가 b보다 크면 "a가 큼"
// a와 b가 같으면 "a와 b가 같음"
// a가 b보다 작으면 "b가 큼"을 출력하세요.


    let num1 = Number(prompt("첫번째 숫자를 입력하세요."));
    let num2 = Number(prompt("두번째 숫자를 입력하세요."));

    if(num1 > num2) {
        document.write(num1 + "이/가 " + num2 + "보다 큽니다.");
    } else if (num1 == num2) {
        document.write(num1 + "과/와 " + num2 + "이/가 같습니다.");
    } else {
        document.write(num2 + "이/가 " + num1 + "보다 큽니다.");
    }


// 연습문제 2
// 입력값이 주어지면
// 1이면 도를 출력
// 2이면 개를 출력
// 3이면 걸을 출력
// 4이면 윷을 출력
// 다른 아무 숫자가 입력되면 모를 출력하세요.

    let num3 = prompt("숫자를 입력하세요.");

    if(num3 == 1) {
        document.write("도가 나왔습니다!");
    } else if(num3 == 2) {
        document.write("개가 나왔습니다!");
    } else if(num3 == 3) {
        document.write("걸이 나왔습니다!");
    } else if(num3 == 4) {
        document.write("윷이 나왔습니다!");
    } else {
        document.write("모가 나왔습니다!");
    }

// 연습문제 3
// 입력한 개수만큼 별(*)을 출력하세요.

window.onload = function () {
    function star() {

        let num4 = prompt("숫자를 입력하세요.");
        let result = "";

        for(let i=1; i <= num4; i++) {
            result = result + "*"
        }

        return result;
    }
    
     document.write(star());
}


// 연습문제 4
// n이 입력되면 다음과 같은 삼각형을 출력하세요.

window.onload = function () {

    let num5 = prompt("숫자를 입력하세요.");

    for (let i = 0; i < num5; i++) {
        for (let j = 0; j <= i; j++) {
          document.write('*')
        }
        document.write('<br>');
      }
}


