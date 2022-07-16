// 성 입력란
const familyNameText = document.querySelector('#familyNameText');

// 이름 입력란
const firstNameText = document.querySelector('#firstNameText');

// 성+이름 출력 위치 접근
const fullName = document.querySelector('#fullName');

// 문자가 입력될 때마다 onKeyUp 함수가 실행
firstNameText.addEventListener('keyup', onkeyup);
familyNameText.addEventListener('keyup', onkeyup);

// 문자가 입력될 때마다 실행되는 함수
function onkeyup() {
    // 성
    const familyName = familyNameText.value;
    // 이름
    const firstName = firstNameText.value;

    // 출력 위치
    fullName.innerHTML = familyName + " " + firstName;

}

