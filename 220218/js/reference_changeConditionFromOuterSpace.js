var start = new Date().getTime();
var count = 0;

while (start + 1000 > new Date().getTime()) {
    count++;
}

alert(count + '만큼 반복했습니다.');