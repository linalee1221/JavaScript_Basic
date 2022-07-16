// 연습문제 #1
// 아래 함수 선언문을 화살표 함수로 고쳐서 결과를 출력해보세요
// 함수선언문

// function mySum(a,b) {
//     return a + b;
// }

// let result = mySum(3,5);

// console.log(result);

//화살표 함수로 바꾸기
// let result = (a,b) => a + b;

// console.log(result(3,5));

// 연습문제 #2
// function MyMinus(a,b) {
//     return a - b;
// }

// let result = MyMinus(5,2);

// console.log(result);

// 화살표 함수로 바꾸기
// let result = (a,b) => a - b;
// console.log(result(5,2));

// 연습문제 #3
// function MyPrint() {
//     let res = "hello";
//     return res;
// }
// let result = MyPrint();
// console.log(result);

// 화살표 함수로 바꾸기

// let result = () => {
//     let res = "hello";
//     return res;
// }
// console.log(result());

// 연습문제 #4
// function MyPrint02(param) {
//     let res = param + "world";
//     return res;
// }

// let result = MyPrint02("hello");
// console.log(result);

// 화살표 함수로 바꾸기(내가푼거)
// let result = (param) => {
//     let res = "world";
//     return res;
// }
// console.log("hello", result());

// 선생님이 푼거
// let result = (param) => {
//     let res = param + " world";
//     return res;
// }
// console.log(result("hello"));

// 연습문제 #5
// function MyAvg(a,b,c) {
//     let res = (a+b+c)/3;
//     return res;
// }

// let result = MyAvg(1,2,3);
// console.log(result);

// 화살표 함수로 바꾸기
// let result = (a,b,c) => {
//     let res = (a+b+c)/3;
//     return res;
// }

// console.log(result(1,2,3));

// 연습문제 #6
// function MyComSum(a,b) {
//     let res = a + b**2;
//     res += " 입니다.";
//     return res;
// }

// let result = MyComSum(2,3);
// console.log(result);

// 화살표 함수로 바꾸기

let result = (a,b) => {
    let res = a + b**2;
    res += " 입니다.";
    return res;
}

console.log(result(2,3));