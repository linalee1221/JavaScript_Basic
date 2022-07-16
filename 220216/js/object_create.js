let product = {
    제품명: '7D 건조 망고',
    유형: '당절임',
    성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지: '필리핀'
};

for (let i in product) {
    document.write(i + ':' + product[i] + "<br>");
}

document.write("<br>");

let person = {
    name: '윤인성',
    eat: function (food) {
        document.write(this.name + '이 ' + food + '을/를 먹습니다.');
    }
};

person.eat('밥');