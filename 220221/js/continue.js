
document.write("<h3>1부터 100까지의 숫자 중 3의 배수만 출력</h3>" + "<br>");

for(var i = 0; i <= 100; i++) {
    if(i % 3 != 0)
    continue;
    document.write(i + " ")
}