// id 와 name 가는 유저 배열
const userDataList = [
    { id: 123, name: '곰'},
    { id: 1021, name: '사자'},
    { id: 6021, name: '여우'}
];

// 검색ID 입력창
const searchIdInput = document.querySelector('#search-id-input');
// 검색 결과 출력 위치
const searchResult = document.querySelector('#search-result');

// 문자가 입력될 때마다 내용을 체크
searchIdInput.addEventListener('keyup', () => {
    // 검색 id 비교해서 가져오기
    const searchId = Number(searchIdInput.value);
    findUser(searchId);
});

// 유저를 검색하는 펑션 정의
function findUser(searchId) {
    // 해당하는 데이터를 가져오기
    const targetData = userDataList.find(function(data) {
        return data.id === searchId;
    });

    // 해당 유저가 없으면 없다고 화면에 출력
    if(targetData == undefined) {
        searchResult.textContent = "유저 검색 결과 없음";
        return;
    }

    // 해당 유저가 있으면 화면에 그 유저의 이름을 출력
    searchResult.innerHTML = targetData.name;

}