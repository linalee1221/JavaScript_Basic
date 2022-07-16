// 동기 프로그램
// 물건값 계산 펑션
// return : 총 물건값
function buy_normal(item, price, quantity) {
    // 첫번째 출력
    console.log(item + " 상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
    // 두번째 출력
    console.log("계산이 필요합니다.");
    // 물건값
    let total = price * quantity;
    return total;
}

// 물건을 지불하는 펑션
function pay(tot) {
    console.log(tot + "원을 지불하였습니다.");
}

let result = buy_normal("고구마", 1000, 5);
pay(result);