// 초 단위용 element
const second = 5;
const secondElement = document.querySelector('.second');

const goldTime = new Date().getTime() + second * 1000;

update();

// setInterval 처럼 계속 실행되는 함수
function update() {
    // 현재시각
    const currentTime = new Date().getTime();
    // 목표시각 , 스톱워치 효과를 보여주는 부분
    const leftTime = goldTime - currentTime;

    // 펑션 탈출 조건
    if(leftTime <= 0) {
        secondElement.innerHTML = `${second}초가 지났습니다.`;
        return;
    }

    // 초 단위 표시. 밀리초는 소수점 2자리까지 표시
    secondElement.innerHTML = (leftTime / 1000).toFixed(2);

    // setInterval 펑션과 비슷하게 계속 호출
    // 상기 펑션보다 성능이 우수함
    requestAnimationFrame(update);
}