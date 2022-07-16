
// function buttonClick() {
//     alert('click');
// }

// window.onload = function() {
//     let button = document.getElementById('button');
//     button.onclick = function() {
//         alert('click!!!!!');
//     }
// }

// window.onload = function() {
// document.getElementById('button').onclick = function() {
//     this.textContent = this.textContent + '★';
//  }
// }

// window.onload = function(event) {
//     alert(event);
// }


// 이벤트 제거
// window.onload=function() {
//     let button=document.getElementById('button');

//     button.onclick=function() {
//         return false;
//     }
// }


// 클릭이벤트
// window.onload = function() {
// let cup = document.querySelector('#cup');
// cup.onclick = function(event) {
//     document.querySelector('#container').innerHTML =
//     ("이벤트유형: " + event.type + ", 이벤트위치: " + event.pageX + ", " + event.pageY);
// }
// }

// 팝업창표시
// window.onload = function() {
// let closeBtn = document.querySelector(".popup > button");
// closeBtn.addEventListener('click', function() {
//     document.querySelector('.popup').style.display = 'none';
// })
// }

window.onload = function() {
    let myRect = document.querySelector('#rect');
    myRect.addEventListener("mouseover", function() {
        myRect.style.backgroundColor = "green";
        myRect.style.borderRedius = "50%";
    })
    
    myRect.addEventListener("mouseout", function() {
        myRect.style.backgroundColor = "";
        myRect.style.borderRedius = "";
    })
}