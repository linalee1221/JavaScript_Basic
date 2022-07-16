function dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

let myDog = new dog("흰색","마루",1);
//color 프로퍼티의 enumerable 속성을 false로 설정함.
Object.defineProperty(myDog,'color', {enumerable:false});

console.log(myDog.propertyIsEnumerable("color")); //false
console.log(myDog.propertyIsEnumerable("name")); //true
console.log(myDog.propertyIsEnumerable("age")); //true