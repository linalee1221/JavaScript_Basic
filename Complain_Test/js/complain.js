window.onload = function() {
    setInterval(displayNow, 1000); 
    
    function displayNow() {
        // 현재시간 가져오는 클래스
        let now = new Date();
        // 우리나라 시간 가져오기
        let currentTime = now.toLocaleTimeString();
        // 화면에 출력하기 : currentTime
        document.querySelector('#time').innerHTML = currentTime;
        
    }
    
}

function checkAll() {
    // 테이블 완료 체크시 전체 완료 수정
    let chkAll = document.querySelector('#chkAll');
    let tableComplain = document.querySelector('#tableComplain');

    // 체크박스의 상태가 체크일때
    if(chkAll.checked == true) {
        for(let i=1; i<tableComplain.rows.length; i++) {
            tableComplain.rows[i].cells[5].innerHTML = "완료";
                //열 기준으로 5번째가 완료여부 칸이니까 cells에 5
        }
    } else if(chkAll.checked == false) {
        for(let i=1; i<tableComplain.rows.length; i++) {
            tableComplain.rows[i].cells[5].innerHTML = "미완료";
        }
    }
}
