// 시간, 분, 초
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');

update();

// 현재시간을 표시하는 함수
function update() {
    const currentTime = new Date();

    // 현재 시간 가져오기
    const hour = currentTime.getHours();
    hourElement.innerText = addZeroPadding(hour);

    // 현재 분 가져오기
    const minute = currentTime.getMinutes();
    minuteElement.innerText = addZeroPadding(minute);

    // 현재 초 가져오기
    const second = currentTime.getSeconds();
    secondElement.innerText = addZeroPadding(second);

    // 아래 함수에서 update를 계속 재실행 함
    requestAnimationFrame(update);

}

// 2자리 형식으로 숫자를 보여주는 함수 : 2 -> 02, 12 -> 12
function addZeroPadding(num) {

    // padStart(2,'0'):숫자 2자리로 표현할건데 2자리가 아니면 남은자리에 0을 붙일 것이라는 뜻
    return String(num).padStart(2, '0');
}