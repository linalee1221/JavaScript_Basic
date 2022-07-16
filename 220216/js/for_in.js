var arr = [3, 4, 5];
// 배열의 수만큼 반복문을 돌릴 수 있다. 
// 배열을 끝까지 다 갔으면 반복문 탈출
for(var i = 0; i < arr.length; i++) {
    document.write(i + " ");
} // 배열 arr의 모든 요소의 인덱스를 출력
  // 옛날코딩방식

document.write("<br>"+"=============for in============="+"<br>");
  
for (var i in arr) {
    document.write(i + " ");
} // 위와 같은 동작을 하는 for / in 문
  // 배열 인덱스가 3개가 들어가 있어
  // 반복문 3번 순회 후 탈출
  // 원래 for문보다 더 간단한 형태로 
  // 가운데 조건식에 배열이나 객체만 올 수 있다.
  // 배열 인덱스를 i에 하나씩 넣어서 출력함
  // 결과가 0 1 2로 나오는데 배열의 길이까지
  // 반복 후 탈출하기 때문에 이 경우
  // 인덱스가 3개라 3이 되기전에 2에서 탈출함

document.write("<br>"+"=============for in============="+"<br>");

  for(var i = 0; i < arr.length; i++) {
      document.write(arr[i] + " "); //배열의 값
  }
document.write("<br>"+"=============for in============="+"<br>");

  var arr = [1, true, "JavaScript"];

  var result = "<table><tr>";
  for(var idx in arr) {
      result += "<td>" + arr[idx] + "</td>";
  }
  result += "</tr></table>";

  document.write(result);

document.write("<br>"+"=============for of============="+"<br>");

  var arr = [3,4,5];

  for(var value of arr) {
      document.write(value + " ");
  }

