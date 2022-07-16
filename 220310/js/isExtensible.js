let day = new Date() //Date객체 생성
//객체 day에 새로운 프로퍼티를 추가할 수 있는지 검사
console.log(Object.isExtensible(day)); // true

//해당 객체에 새로운 프로퍼티를 추가할 수 없도록 설정
let myDay = Object.preventExtensions(day);
console.log(Object.isExtensible(day)); //false