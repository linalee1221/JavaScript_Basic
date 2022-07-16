function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

let myDog0 = new Dog("흰색","마루",1);
console.log(myDog0.family);

Dog.prototype.family = "시베리안 허스키";
Dog.prototype.breed = function() {
    return this.color + " " + this.family;
}

let myDog = new Dog("흰색","마루",1);
let hisDog = new Dog("갈색","콩이",1);

console.log(myDog.family + " " + hisDog.family);
console.log(myDog.breed());
console.log(hisDog.breed());