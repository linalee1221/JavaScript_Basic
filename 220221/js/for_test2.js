

document.write("<h3>1부터 100까지 공백으로 띄워 하나씩 출력하기</h3>"+"<br>")

for (var i = 1; i < 101; i++) {
    document.write(i + " ");
}

// document.write("<br>"+"<h3>어떤 수 n을 입력받아 1부터 n까지 출력하기</h3>"+"<br>")

//     let num = prompt("숫자를 입력하세요.");
//     for(let i=0; i < num; i++) {
//         document.write(i);
//     }

document.write("<br>"+"<h3>두 수 사이 순서대로 출력하기</h3>"+"<br>");
    // 도전과제
    // 어떤 두 수 a, b가 있을 때 두 수 사이의 모든 정수를
    // 순서대로 출력하기
    // 입력 : 3
    // 입력 : 8
    // 출력 : 3 4 5 6 7 8

    // let n = prompt("첫 번째 숫자를 입력하세요."); // 시작값
    // let n2 = prompt("두 번째 숫자를 입력하세요."); // 끝값

    // for(let i=n; i <= n2 ; i++) {
    //     document.write(i + " ");
    // } // 변수 i를 지정하고 i에 시작값을 넣고, 
      // 두번째 표현식에 i가 끝값보다 같거나 작을 때까지
      // i를 1씩 증가시켜 반복한다.

    

document.write("<br>"+"<h3>두 수 사이의 홀수만 순서대로 출력하기</h3>"+"<br>");
    // 도전과제
    // 어떤 두 수 a, b가 있을 때 두 수 사이의 홀수만
    // 순서대로 출력하기
    // 입력 : 3
    // 입력 : 8
    // 출력 : 3 5 7

    let n3 = prompt("첫 번째 숫자를 입력하세요."); // 시작값
    let n4 = prompt("두 번째 숫자를 입력하세요."); // 끝값

    for(let i=n3; i <= n4 ; i++) {
        if(i % 2 == 1) {
        document.write(i + " ");
    }
}