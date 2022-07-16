// 회원 데이터
const userDataList = [
    { id:2, name: '곰'},
    { id:10, name: '여우'},
    { id:4, name: '사자'},
    { id:29, name: '기린'},
    { id:101, name: '호랑이'}
];

// 데이터를 목록태그를 이용해서 화면에 표시하는 펑션
function updateList() {
    let listHtml = '';

    //for문의 새로나온것. of다음에 객채나 배열이 들어오면
    //그 배열을 끝까지 뒤져가지고 반복문을 돌리는 것.
    //이 경우는 이 배열안에 객체가 5개니까 반복문이 5번 도는것.
    //배열안의 데이터(곰, 여우, 사자, 기린, 호랑이)를 하나씩 뽑아냄.
    for(const data of userDataList) {
        listHtml += `<li>${data.id} : ${data.name}</li>`; // 목록 하나가 만들어진것임
                    // 객체에 id와 name이라는 속성을 넣어준다.
    } 

    document.querySelector('.user_list').innerHTML = listHtml;
}

// 오름차순 정렬 펑션
function sortByAscending() {
    userDataList.sort(function(a,b) {
        return a.id - b.id; //a값 b값을 받아 서로 뺀다음 음수인지 양수인지 판단하여 정렬함(양수부터 음수 순서대로)
    });
// 오름차순 후 화면에 출력
    updateList();
}

// 내림차순 정렬 펑션
function sortByDescending() {
    userDataList.sort(function(a,b) {
        return b.id - a.id; //오름차순과 반대로 뺀다. 그러면 음수부터 정렬함.
    });
// 내림차순 후 화면에 출력
    updateList();
}

// 오름차순 버튼
let ascending = document.querySelector('.ascending');
// 내림차순 버튼
let descending = document.querySelector('.descending');


// 오름차순 버튼 클릭 시 오름차순 펑션 실행
ascending.addEventListener('click', () => {
    sortByAscending();
});


// 내림차순 버튼 클릭 시 내림차순 펑션 실행
descending.addEventListener('click', () => {
    sortByDescending();
});

// // 초기화면이 실행될 때는 오름차순으로 정렬된 것을 출력함
// sortByAscending();