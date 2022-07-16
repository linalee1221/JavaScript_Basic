const nameInput = document.querySelector('.name-input');
const warningMassage = document.querySelector('.warning-massage');

//const는 상수로 값이 한번 정해지면 수정을 못함. 한번 정해놓은 값을 계속 쓴다고 할때 const를 쓴다.
//let은 변수로 값이 계속 변화가능

//.name-input 에 입력할 때마다 아래 이벤트가 실행
nameInput.addEventListener('input', () => {
    // 입력된 문자 가져오기
    const inputStr = nameInput.value;

    //입력된 문자를 소문자로 변환
    const normalStr = inputStr.toLowerCase();

    // 입력문자가 test 인지 아닌지 확인 해보기
    if(normalStr.includes('test') == true) {
        warningMassage.innerHTML = 'test 문자가 입력이 되었습니다.';
    } else {
        warningMassage.innerHTML = '';
    }
});


() => result;