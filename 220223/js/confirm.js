function confirmDialogBox() {
    let str;
    if(confirm("확인이나 취소를 눌러주세요!") == true) {
        str = "당신은 확인을 눌렀습니다!";
    } else {
        str = "당신은 취소를 눌렀습니다!";
    }
    document.getElementById("text").innerHTML = str;
}