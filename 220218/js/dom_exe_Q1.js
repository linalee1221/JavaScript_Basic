// 연습문제 1
// 홀수이면 image1.png를 보여주고, 짝수이면 pmage2.png를 화면에 보여주세요.
// 출력 : div 태그를 만드셔서 id="result" 영역에 출력해주세요.

// window.onload = function() {
//     let n = Number(prompt("숫자를 입력하세요!"));

//     let contents = "";

//     if(n % 2 == 1) {
//         contents = "<img src='image/image1.png'>";
//     } else {
//         contents = "<img src='image/image2.png'>";
//     }

//     document.getElementById("output").innerHTML = contents;

// }


// 연습문제 2
// 홀수이면 image1.png를 보여주고, 짝수이면 image2.png를 화면에 출력할 때
// 반복문을 사용해서 총 6번 이미지를 보여주세요.
// 출력 : image1.png image2.png image1.png image2.png image1.png image2.png

// window.onload = function() {

//     let contents = "";

//     for(let n=1; n<=6; n++) {
//         if(n % 2 == 1) {
//             contents += "<img src='image/image1.png'>";
//         } else {
//             contents += "<img src='image/image2.png'>";
//         }
//     }

//     document.getElementById("output").innerHTML = contents;

// }

// 연습문제 3
// 반복문을 사용해서 동적으로 테이블 생성하는 프로그램 작성
// 번호    제목     일자
//   1  안녕하세요  12-07
//   2  안녕하세요  12-07
//   3  안녕하세요  12-07

//     function genTable() {
    
//     let contents = "";
//     contents += "<table border='1'>"
//     contents += "<tr><th>번호</th><th>제목</th><th>일자</th></tr>"

//     let n = 1;
//     while (n<=3) {
//         contents +="<tr><td>" + n + "</td><td>안녕하세요</td><td>12-07</td></tr>";
//         n++;
//     }

//     contents += "</table>";
//     document.getElementById("result").innerHTML = contents;

// }


// 연습문제 4
// 구구단 테이블 만들기

function gugudan() {

    let contents = "";
    contents += "<h3>구구단표</h3>";

    contents += "<table border='1'>";
    contents += "<tr><th>2단</th><th>3단</th><th>4단</th><th>5단</th>";
    contents += "<th>6단</th><th>7단</th><th>8단</th><th>9단</th></tr>";
    
    for(let hang=1; hang<=9; hang++) {
        contents += "<tr>";
        for(let dan=2; dan<=9; dan++) {
            contents += "<td>" + dan + "x" + hang + "=" + dan*hang + "</td>";
        }
        contents += "</tr>";
    }
    contents += "</table>";   
    document.getElementById("result").innerHTML = contents;
}