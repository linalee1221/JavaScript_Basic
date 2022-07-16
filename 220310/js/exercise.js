let x = 2;

//3항 연산자
//(조건식) 참 : 거짓;
//자바스크립트에서 제공해주는 문법
//if else를 축약한 형태
// !true=false
// !false=true
let result = (x % 2 == 0) ? "홀수" : "짝수";

console.log(result);

//복잡하다 싶으면 아래와 같이 써도 된다.

if (x % 2 == 0) {
    result = "짝수";
} else {
    result = "홀수";
}