//프로토타입 생성
// function Dog(color, name, age) {
//     this.color = color;
//     this.name = name;
//     this.age = age;
// }
// let myDog = new Dog("흰색", "마루", 1);
// document.write("우리 집 강아지는 " + myDog.name + 
// "라는 이름의 " + myDog.color + "털이 매력적인 강아지입니다.");
//==============================================================
//프로토타입 객체에 프로퍼티 및 메소드 추가
//  이미 생성된 객체에 새로운 프로퍼티 및 메소드 추가
// function Dog(color, name, age) {
//     this.color = color;
//     this.name = name;
//     this.age = age;
// }
// let myDog = new Dog("흰색", "마루", 1);
// myDog.family = "시베리안 허스키";
// myDog.breed = function() {
//     return this.color + " " + this.family;
// }
// document.write("우리 집 강아지는 " + myDog.breed() + "입니다.");
//==============================================================
//프로토타입 객체에 프로퍼티 및 메소드 추가
//  prototype 프로퍼티를 사용하여 추가
// function Dog(color, name, age) {
//     this.color = color;
//     this.name = name;
//     this.age = age;
// }
// //현재 존재하고 있는 Dog 프로토타입에 family 프로퍼티를 추가함.
// Dog.prototype.family = "시베리안 허스키";
// //현재 존재하고 있는 Dog 프로토타입에 breed 메소드를 추가함.
// Dog.prototype.breed = function () {
//     return this.color + " " + this.family
// };
// let myDog = new Dog("흰색","마루",1);
// let hisDog = new Dog("갈색", "콩이",3);

// document.write("우리 집 강아지는 " + myDog.family + "이고, 친구네 집 강아지도 "
//                 + hisDog.family + "입니다.<br>");
// document.write("우리 집 강아지의 품종은 " + myDog.breed() + "입니다.<br>");
// document.write("친구네 집 강아지의 품종은 " + hisDog.breed() + "입니다.");
//==============================================================
//객체 프로퍼티의 삭제
// function Dog(color, name, age) {
//     this.color = color;
//     this.name = name;
//     this.age = age;
// }
// let myDog = new Dog("흰색","마루",1);
// delete myDog.age; //age 프로퍼티를 삭제함.
// //age프로퍼티가 삭제됐기 때문에 undefined를 출력함.
// document.write("우리집 강아지의 나이는 " + myDog.age + "입니다.");
//==============================================================
//객체 간의 비교
function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}
//모든 프로퍼티의 값이 모두 같은 객체를 생성
let myDog = new Dog("흰색","마루",1);
let hisDog = new Dog("흰색","마루",1);

document.write((myDog == hisDog) + "<br>"); //false
document.write((myDog === hisDog) + "<br>"); //false

let herDog = hisDog; // hisDog 객체를 변수 herDog에 대입함.
document.write((hisDog == herDog) + "<br>"); //true
document.write((hisDog === herDog) + "<br>"); //true