// 연습문제 1
// 주어지는 문자의 대문자를 소문자로, 소문자를 대문자로 변경하는 프로그램 작성
// hint : a.toUpperCase() - 대문자로 변경
//        a.toLowerCase() - 소문자로 변경
//        문자열 a => 배열
//        a[0] = a, a[1] = B
// 입력예시 : CodeChallenge2014withMSP
// 출력예시 : cODEcHALLENGE2014WITHmsp

// window.onload = function() {
//   let word = prompt("문자열을 입력하세요.");
  
//   for(let i=0; i<word.length; i++) {
//     if(word[i] == word[i].toUpperCase()) {
      
//       document.write(word[i].toLowerCase());
//     }
//     else if (word[i] == word[i].toLowerCase()) {
//       document.write(word[i].toUpperCase());
//     }
//   }
// }

// 연습문제 2
// 입력받은 문자열을 공백을 제거하고 출력
// 입력예시 : black sheep wall
// 출력예시 : blacksheepwall
// hint : split()

// window.onload = function() {
//   let word = prompt("문자열을 입력해주세요.");
//   // let word = prompt("문자열을 입력해주세요.").split(" "); // -> 문자열을 입력받고 문자열 사이에 공백을 제거하고 싶을 때.(공백을 기준으로 문자배열로 만듬)
// //   // let word = prompt("문자열을 입력해주세요.").split("+"); -> 만약 문자열사이에 있는 +를 제거하고 싶을때.

// //   // let word = prompt("문자열을 입력해주세요.").split(" ").map(Number); 
// //   // 입력이 숫자로 들어오는 경우 연산을 해서 처리해주고 싶을 때, 
// //   // map에 number를 넣어주면 문자배열을 숫자배열로 바꿔준다.
// //   // 공백을 기준으로 정수배열로 만듬

//   result = word.split(" "); // 스플릿함수에 제거할 것을 써준다. " " 하면 공백을 없애줌.

// //   document.write(result[0] + result[1] + result[2]); // 배열이 3개이므로 3단어까지만 됨.
// document.querySelector('#splitspace').innerHTML = result[0] + result[1] + result[2];
// }

//   // document.write(word[0] + word[1] + word[2]); // 요렇게 prompt뒤에 바로 split을 붙여서 써도됨.
  
// }

// 연습문제 3
// 괄호로 이루어진 문자열이 입력된다
// 여는 괄호의 개수와 닫힌 괄호의 개수를 출력한다.
// 입력예시 : ((())()(()))
// 출력예시 : 6 6
// hint : if - (여는 괄호 변수에 저장 / else if) 닫는괄호 변수에 저장

// window.onload = function() {
//   let word = prompt("괄호를 입력하세요.");
//   let openCount = 0;
//   let closeCount = 0;

//   for(let i=0; i<word.length; i++) {
//     if(word[i] == "(") {
//       openCount += 1;
//     }
//     else if(word[i] == ")") {
//       closeCount += 1;
//     }
//   } 
//   document.write(openCount + " " + closeCount);
// }

// 연습문제 4
// 어떤 문자열이 있을 때 문자 t의 위치를 모두 찾아 출력하세요
// 입력 : 공백이 없는 문자열이 한 줄 입력된다(10글자 이하)
// hint : indexOf, lastIndexOf 사용 추천
// 입력예시 : test
// 출력예시 : 1 4

// window.onload = function() {
//   let word = prompt("문자열을 입력하세요.");

//   document.querySelector('#test1').innerHTML = (word.indexOf('t')+1) + " " + (word.lastIndexOf('t')+1);

// }

// 선생님 풀이
// let word = prompt("문자열을 입력해주세요");
// let pos = word.indexOf('t') + 1;
// let lastPos = word.lastIndexOf('t') +1;

// document.write(pos + " " + lastPos);

// 도전과제
// 영어 소문자로 구성된 단어 s1, s2, s3이 있을 때,
// s1의 마지막 문자가 s2의 첫 글자와 같고,
// s2의 마지막 글자가 s3의 첫 글자와 같고,
// s3의 마지막 글자가 s1의 첫 글자와 같으면 순환 문자열이라고 한다.
// 순환문자열이면 good 출력 아니면 bad 출력
// 입력예시 : turtle error robot
// 출력예시 : good

// window.onload = function() {

//   let word = prompt("문자열을 입력하세요.").split(" ");
//   let fword = word[0]; // turtle이 들어감
//   let second = word[1]; // error가 들어감
//   let tword = word[2]; // robot이 들어감
//   let result = "";

//   // 배열은 항상 0부터 시작하므로, 배열의 끝을 알고 싶으면 -1을 해야한다.
//   if(fword[fword.length-1] == second[0] && 
//     second[second.length-1] == tword[0] &&
//     tword[tword.length-1] == fword[0]) {
//     document.write("good"); // result = "good";
//   } else {
//     document.write("bad"); // result = "bad";
//   }
//   // document.querySelector('#challenge').innerHTML = result;
// }

// 연습문제 5
// 알파벳 한 단어가 입력된다.
// 대문자 IOI가 입력되면 IOI is International Olympiad
// 그 외에는 I don't care. 를 출력하세요.
// 입력예시 : IOI
// 출력예시 : IOI is International Olympiad

window.onload = function() {
  // let word = prompt("문자열을 입력하세요.");

  // if(word == "IOI") {
  //   document.write("IOI is Internatilnal Olympiad");
  // } else {
  //   document.write("I don't care.");
  // }
// }

// innerHTML 출력의 경우

let word = prompt("문자열을 입력하세요.");
let result = "IOI is International Olympiad";

if(word == "IOI") {
  document.querySelector('#IOI2').innerHTML = result;
} else {
  document.querySelector('#IOI2').innerHTML = "I don't care.";
}

}


// q가 입력될때까지 입력한 문자를 계속 출력한다

while(true) {
  let letter = prompt("문자를 입력해주세요.");
  document.write(letter + "<br>");
  if(letter=='q') {
    break;
  }
}