// P.331
// 11. 센티미터를 입력하면 피트와 인치로 변환하는 프로그램을 작성하시오.
// 힌트) 1feet=12inch, 1inch=2.54cm
// let num = 3.14456 , let num2 = num.toFixed(2) // 3.14

window.onload = function() {

    let num4 = prompt("변환하고자 하는 숫자를 입력하세요.");
    let cm = num4;
    let inch = cm / 2.54;
    let ft = inch / 12;


    document.write(num4 + "cm는 " + ft.toFixed(2) + "피트 " + inch.toFixed(2) + "인치 입니다.");

}

// 12. 원기둥 밑면의 반지름과 높이를 입력받아 부피를 계산하는 프로그램을 작성하시오.
// 힌트) 원기둥의 부피 = 밑면의 넓이 x 높이 = (반지름 x 반지름 x 파이) x 높이

window.onload = function() {
    
    let num1 = prompt("원기둥 밑면의 반지름을 입력하세요.");
    let num2 = prompt("원기둥의 높이를 입력하세요.");
    let pi = 3.14;
    let total = num1 * num1 * num2 * pi;

    document.write("원기둥의 부피는 " + total + "입니다.");
}


// 13. 네 자리 정수를 입력받아 천, 백, 십, 일의 자리로 분리해 출력하는 프로그램을 작성하시오.
// 힌트) 천의 자리는 parseInt(num/1000), 백의 자리는 parseInt(num%1000/100)으로 구성한다.
//       사용자에게 값을 입력받는 부분은 다음과 같이 prompt() 함수를 사용한다.
//       var input = prompt("입력해주세요", "입력")

window.onload = function() {

    let num = prompt("숫자를 입력하세요.");

    let 천 = parseInt(num/1000); // 천의 자리
    let 백 = parseInt(num%1000/100); // 백의 자리
    let 십 = parseInt((num%1000)%100/10) // 십의 자리
    let 일 = parseInt(num%1000%100%10); // 일의 자리

    document.write(천 + "천 " + 백 + "백 " + 십 + "십 " + 일 + "일");
}

// 14. 사용자에게 태어난 연도를 입력받아 그 해의 띠를 출력하는 프로그램을 작성하시오.
// 힌트) 입력받은 연도를 12로 나눈 나머지를 사용한다. 나머지가 0,1,2,3,4,5,6,7,8,9,10,11일 때는 각각
//       원숭이띠, 닭띠, 개띠, 돼지띠, 쥐띠, 소띠, 범띠, 토끼띠, 용띠, 뱀띠, 말띠, 양띠입니다.

let year = Number(prompt("연도를 입력하세요."));

let arr = ["원숭이띠", "닭띠", "개띠", "돼지띠", "쥐띠", "소띠", "범띠", "토끼띠", "용띠", "뱀띠", "말띠", "양띠"];
let exp = year % 12;

for(let i=0; i<12; i++) {
    if(exp == i) {
        document.write(arr[i]);
        break;
    }
}

// 15. 반복문을 사용해 다음과 같이 패턴을 출력하는 프로그램을 작성하시오.
// 힌트) 반복문을 이중으로 사용한다.
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

window.onload = function () {

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j <= i; j++) {
          document.write('*')
        }
        document.write('<br>');
      }
}

// 16. 매개변수로 n을 입력받아 n!factorial을 반환하는 함수를 만들어라.

function factorial(num111) {
    let result = 1;

    for(let i=1; i<=num111; i++) {
        result *= 1;
    }

    return result;
}

let inp_num = Number(prompt("숫자를 입력해 주세요."));
alert(factorial(inp_num));


// 17. 다음 속성을 가지는 대상을 자바스크립트 객체로 만드시오.
// 이름 C# 프로그래밍(2판)
// 초판 발행 2019년 12월 10일
// 지은이 윤인성
// 펴낸이 김태헌
// 펴낸곳 한빛아카데미(주)
// 책임편집 변소현
// 기획 김성무
// 편집 김성무디자인 김연정

// window.onload = function() {

    let book = {
        이름: 'C#프로그래밍(2판)',
        초판발행: '2019년12월10일',
        지은이: '윤인성',
        펴낸이: '김태헌',
        펴낸곳: '한빛아카데미(주)',
        책임편집: '변소현',
        기획: '김성무',
        편집: '김성무',
        디자인: '김연정'
    }
    for (let i in book) {
        document.write(i + ' : ' + book[i] + "<br>");
        }

document.write("<br>");