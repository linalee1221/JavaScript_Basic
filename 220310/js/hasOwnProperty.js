function Dog(color, name, age, family) {
    this.color = color;
    this.name = name;
    this.age = age;
    this.family = family;
    this.breed = function () {
        return this.color + " " + this.family;
    }
}
let myDog = new Dog("검정색","곰",3,"불독");
let result01 = myDog.hasOwnProperty("color"); //true
let result02 = myDog.hasOwnProperty("breed"); //true
let result03 = myDog.hasOwnProperty("class"); //상속받은 프로퍼티라 false를 반환

console.log(result01);
console.log(result02);
console.log(result03);