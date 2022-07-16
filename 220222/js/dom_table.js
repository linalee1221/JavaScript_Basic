function genTable() {
    let num = Number(prompt("숫자를 입력해주세요."));

    let tableTag = document.createElement('table');
    let tbodyTag = document.createElement('tobody');
    let trTag, tdTag, tdText;

    let arrText = ['제목', '내용', '기타'];
    for(let i=0; i<num; i++) {
        trTag = document.createElement('tr');
        for(let j=0; j<num; j++) {
            tdTag = document.createElement('td');
            tdText = document.createTextNode(arrText[j]);
            // td태그에 내용 추가
            tdTag.appendChild(tdText);
            // tr태그에 td 추가
            trTag.appendChild(tdTag);
        }
        // tbody태그에 tr 추가
        tbodyTag.appendChild(trTag);
    }
    // table 태그에 tbody 추가 : 테이블 동적으로 완성
    tableTag.appendChild(tbodyTag);
    // 화면으로 출력
    document.body.appendChild(tableTag);
}