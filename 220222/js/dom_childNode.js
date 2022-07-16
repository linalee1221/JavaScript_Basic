function btnFunc() {
    // childNodes : 줄바꿈, 주석, 텍스트노드, 태그(요소) 모두 포함
    let myPtags = document.getElementById('intro').childNodes;

    for(let i of myPtags) {
        document.getElementById('demo').innerHTML += i.innerHTML;
    }

    document.getElementById('demo').innerHTML = "<br>== children ==<br>";
    // children : 태그(요소)만 포함, 그 외는 모두 제외
    let myPtags2 = document.getElementById('intro').children;

    for(let i of myPtags2) {
        document.getElementById('demo').innerHTML += i.innerHTML;
    }
}