//아스키 코드
// 한 문자 => 아스키코드 : charCodeAt(문자열의 인덱스 번호); = 인코더
// 아스키코드 => 한 문자 : String.fromCharCode(문자); = 디코더

// 예시 : let word = "abc";
//        let letterCode = word.charCodeAt(0);

// 도전과제
// 인터넷 서비스들은 대부분 아이디와 패스워드를 이용한다.
// 이때 사용되는 패스워드는 여러가지 방법으로 암호화 되어 저장된다.
// 1번 암호화방법 : 입력받은 문자의 아스키코드값 + 2
// 2번 암호화방법 : 입력받은 문자의 (아스키코드값 * 7) % 80 + 48
// 1번, 2번 암호화방법을 적용해서 화면에 출력하세요.
// 입력예시 : TEST
// 출력예시 : VGUV
//            L3EL

// window.onload = function() {
//     // 내가 짠거(하다말았다)
//     // let pass = prompt("암호를 입력하세요.");
//     // let letterCode = pass.charCodeAt(0);
//     // let result = "";

//     // for(let i=letterCode; i<pass.length[0]; letterCode++) {
//     //     result = letterCode;
//     //     document.querySelector('#asciicode').innerHTML = result + 2;
//     // } 
    
//     //선생님이 짠거
//     let word = prompt("문자열을 입력하세요.");
//     let result = "";
//     let result2 = "";
//     let letter = "";
//     //첫번째 암호화 코드 출력
//     for(let i=0; i<word.length; i++) {
//         //아스키코드 변환됨
//         letter = word.charCodeAt(i);
//         //첫번째 암호화
//         result = letter +2;
//         //첫번재 화면 출력
//         document.querySelector('#result').innerHTML += String.fromCharCode(result);

//         //두번째 암호화
//         result2 = (letter * 7) % 80 + 48;
//         //두번째 화면 출력
//         document.querySelector('#result2').innerHTML += String.fromCharCode(result2);
//     }

// }

// 연습문제 6
// 두 값을 입력받아 그 사이에 있는 문자를 출력하세요
// 입력 : a f
// 출력 : a b c d e f

// window.onload = function() {
//     let word = prompt("첫번째 문자 입력").split(" ");
//     let fLetter = word[0].charCodeAt(0); //a
//     let sLetter = word[1].charCodeAt(0); //f

//     for(let i=fLetter; i<=sLetter; i++) {

//         document.querySelector('#num').innerHTML += String.fromCharCode(i);
//     }
// }

// 연습문제 7
// 배열 안에 문자를 정렬해서 출력해 주세요.
// 입력 : 5 8 2
// 출력 : 2 5 8

// 배열의 내림차순 정렬 : sort((a,b)=>(b-a))

window.onload = function() {
    let arr = [5,8,2];
    

    arr.sort();
    document.write(arr);

    document.write("<br>");

    arr.reverse();
    document.write(arr); //맨 앞과 맨 뒤 배열만 순서를 바꿈.

}