var lectures = ["html", "css", "자바스크립트", "php"];
var topic = "자바스크립트";

for(var i = 0; i < lectures.length; i++) {
    if(lectures[i] == topic) {
        document.write(topic + " 과목은 " + (i + 1) + "번째 과목입니다.");
        break;
    }
}