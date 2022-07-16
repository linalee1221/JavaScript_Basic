function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}
let myDog = new Dog("흰색", "마루", 1);
myDog.family = "시베리안 허스키";
myDog.breed = function() {
    return this.color + " " + this.family;
}
console.log(myDog.breed());


//함수 선언식
function aa() {
    return XPathResult;
}

// 호출
aa();

//모던 자바스크립트
//함수표현식
let dummy = function (a, b) {
    return a + b;
}

//호출
dummy();