var year = prompt("년도를 입력하세요.");


if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    document.write("yes");
} else {
    document.write("no");
}