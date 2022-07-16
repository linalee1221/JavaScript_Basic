

// 변수 선언
var i = 1, j =1;

// i가 3보다 클 때
while (i > 3) {
    document.write("i : " + (i++) + "<br>");
} // i를 증가시키지만 변수 i의 초기 값은
  // 1이기 때문에 이 while문은 실행되지 않음.
do {
    document.write("j : " + (j++) + "<br>")
} while (j > 3)
// 변수 j의 초기값은 1이기 때문에 이 do / while문이
// 한번만 실행된다. 