var arr = [1, 2, 3]; // 배열 생성
delete arr[2]; // 배열의 원소 중 인덱스가 2인 요소를 삭제함.
document.write(arr + "<br>"); //[1, 2, ]
//배열에 빈자리가 생긴것으로 undefined 값으로 직접 설정된 것은 아님.
document.write(arr[2] + "<br>");
//배열의 요소를 삭제하는 것이지 배열의 길이까지 줄이는 것은 아님.
document.write(arr.length);