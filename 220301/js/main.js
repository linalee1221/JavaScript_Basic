//변경이 일어나지 않기 때문에 const를 써준다.
//전화번호 입력란
const phoneNumberText = document.querySelector('#phoneNumberText');

//경고 메세지 출력란
const warningMessage = document.querySelector('#warningMessage');

//문자가 입력될 때마다 내용 체크
phoneNumberText.addEventListener('keyup', () => {
    //입력된 전화번호
    const phoneNumber = phoneNumberText.value;

    //전화번호에 하이픈(-)이 포함되면 공백("")으로 변환
    const trimmedPhoneNumber = phoneNumber.replace(/-/g,""); //0101234567 하이픈 빼고 숫자로 유효성 검사
                                        // -를 공백으로 바꿀것
    //0으로 시작하는 10자리 혹은 11자리의 번호, 형식 체크
    if(/^[0][0-9]{9,10}$/.test(trimmedPhoneNumber) == false) {
        warningMessage.innerHTML = "전화번호의 형식에 맞춰 입력해 주세요.";
    } else {
        warningMessage.innerHTML = "";
    }

})

// let dummy = () => result; 펑션 함수 화살표로 간단하게 쓰기