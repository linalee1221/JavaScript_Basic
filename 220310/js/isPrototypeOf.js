let day = new Date(); // Date객체 생성
//객체 day의 프로토타입이 Date.prototype인지를 검사함.

console.log(Date.prototype.isPrototypeOf(day)); // true
console.log(Date.prototype.isPrototypeOf(new String())); // false