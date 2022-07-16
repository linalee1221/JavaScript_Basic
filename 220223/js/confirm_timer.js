function confirmDialogBox() {
    let str;
    if(confirm("확인이나 취소를 눌러주세요!") == true) {
        str = "당신은 확인을 눌렀습니다!";
    } else {
        str = "당신은 취소를 눌렀습니다!";
    }
    document.getElementById("text").innerHTML = str;
}

function startTimeout() {
    setTimeout(printCurrentDate, 1000);
}
function printCurrentDate() {
    document.getElementById("date").innerHTML = new Date();
}

document.write("<br>");



function startInterval() {
    let timeoutId;
    timeoutId  = setInterval(printCurrentDate, 1000);
}
function cancelInterval() {
    clearInterval(timeoutId);
}
function printCurrentDate() {
    document.getElementById("date").innerHTML += new Date() + "<br>";
}
