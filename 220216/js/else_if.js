window.onload = function () {
    let str = document.getElementById("text");
    str.innerHTML = "이 문장으로 바뀔까?!";
}
function changeText() {
    
var x = 10, y = 20;
if (x == y) {
    let str = document.getElementById("text");
    str.innerHTML = "x와 y는 같습니다.";
} else if (x < y) {
    let str = document.getElementById("text");
    str.innerHTML = "x가 y보다 작습니다.";

} else if(x > y) {
    let str = document.getElementById("text");
    str.innerHTML = "x가 y보다 큽니다.";
}

}
