
var i = 1, j =1;


while (i < 10) { // 요게 참인지 판별 후 실행
    document.write(i  + "<br>");
    i++;
} 

do { // 일단 최초 1번 실행 후 판별
    document.write("j : " + (j++) + "<br>")
} while (j > 3)
