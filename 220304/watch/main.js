setInterval(() => {
    // 현재 시간 가져오기
    const now = new Date();

    // 시간을 단위로 추출
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    // 시침 각도 공식(시침은 현재 시와 함께 분의 각도도 고려)
    const degH = h * (360 / 12) + m * (360 / 12 / 60);
    // 분침 각도 공식
    const degM = m * (360 / 60);
    //초침 각도 공식
    const degS = s * (360 / 60);

    // 시간, 분, 초침 위치
    const elementH = document.querySelector('.lineHour');
    const elementM = document.querySelector('.lineMin');
    const elementS = document.querySelector('.lineSec');

    elementH.style.transform = `rotate(${degH}deg)`;
    elementM.style.transform = `rotate(${degM}deg)`;
    elementS.style.transform = `rotate(${degS}deg)`;


}, 50)


// 원래 이 형태로 써야 하는데 함수 축약형으로
// 상기와 같이 쓴다.

// function MyClock () {
 
//     const now = new Date();
//     return result;
    
// }