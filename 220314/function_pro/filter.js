// filter #1
// 펑션의 조건이 참인 결과만 선택해서 새로운 배열을 만든다.
// let numbers = [1,2,3,4,5];

// let result = numbers.filter(function(number) {
//     return number > 3;
// });

// // 원본 배열
// console.log(numbers);
// // filter로 만들어진 배열
// console.log(result);

// filter #2 : 객체
// let guys = [
//     {name: "YD", money: 500000},
//     {name: "Bill", money: 400000},
//     {name: "Andy", money: 300000},
//     {name: "Roky", money: 200000}
// ];

// let rich = guys.filter(function(man) {
//     return man.money > 300000;
// });

// console.log(rich);

// 연습문제 #1
// 아래를 filter를 쓰는 형태로 바꿔보세요
// let numbers = [1,2,3,4,5];
// let result = [];

// for(let i=0; i<numbers.length; i++) {
//     if(numbers[i] < 3) {
//         result.push(numbers[i]);
//     }
// }

// console.log(result); // [1,2]

// let result = numbers.filter(function(value) {
//     return value < 3;
// });

// console.log(result);

// 연습문제 #2
// 아래를 filter를 쓰는 형태로 바꿔보세요
// let numbers = [1,2,3,4,5];
// let result = [];

// for(let i=0; i<numbers.length; i++) {
//     if(numbers[i] > 2 && numbers[i] < 4) {
//         result.push(numbers[i]);
//     }
// }

// console.log(result);

// filter로 바꾸기

// let result = numbers.filter(function(value) {
//     return value > 2 && value < 4;
// });
// console.log(result);

// 연습문제 #3
// 이름이 "YD"인 사람의 money를 뽑아내서 새로운 배열을 생성하고
// 출력하기 (filter 사용)

let guys = [
    {name: "YD", money: 500000},
    {name: "Bill", money: 400000},
    {name: "Andy", money: 300000},
    {name: "Roky", money: 200000}
];

let rich = guys.filter(function(man) {
    return man.name == "YD";
});

console.log(rich);