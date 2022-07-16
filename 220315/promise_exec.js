// 연습문제 #1
// 콜백함수를 프라미스로 고쳐보세요
const wait = (inputStr, callback) => {
    setTimeout(() => {
        console.log(inputStr);
        callback();
    }, 1000);
};

wait("B", () => {
    wait("C", () => {
          return;
    });
});

const wait2 = inputStr => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(inputStr);
            resolve();
        }, 1000);
    });
};

wait2("B")
    .then(() => wait2("B"))
    .then(() => wait2("C"))


// 연습문제 #2
// 1초 후에 실행되는 프라미스가 있다.
// then 실행을 해서 아래처럼 출력해 주세요.
// 출력 : "안녕하세요 이은송 님!"

let promise = new Promise((resolve, reject) => {
    // 1초 후에 실행
    setTimeout(function() {
        let name = prompt("이름을 입력하십시오");
        resolve(name);
    }, 1000);
});

// promise 함수를 실행해서 출력해보세요.
promise.then(function(name) {
    console.log("안녕하세요! " + name + "님!");
});


// 연습문제 #3
// 아래 Promise 정의가 있습니다.
// 아래를 보고 promise 함수를 호출해서 출력해 보세요.

let promise1 = new Promise(function(resolve, reject) {
    let n = Number(prompt("10 미만의 숫자를 입력하세요."));
    // 1초 후에 실행되는 부분
    setTimeout(function() {
        if(n<=10) {
            resolve(n);
        } else {
            reject(`오류 : ${n}는 10 이상의 숫자입니다.`);
        }

    }, 1000);
});

// 프라미스를 호출하는 부분을 작성해 보세요
// 성공 : 10 미만의 숫자를 입력하셨습니다.
promise1.then(function(n) {
    console.log(n + "는/은 10 미만의 숫자입니다.");
}, function(n) {
    console.log(n);
});


// resolve를 프로미스로, reject를 캐치로 쓰는 방법
promise1
    // 성공했을 때 실행부
    .then(function(n) {
    console.log(n + "는/은 10 미만의 숫자입니다.");
})
    // 실패했을 때 실행부
.catch(function(err) {
    console.log(err);
});


// 연습문제 #4
// 비동기로 동작하는 펑션 정의
function buyAsync(mymoney) {
    return new Promise(function(resolve, reject) {
        let payment = Number(prompt("지불하고자 하는 금액을 입력하세요."));
        // 비동기로 동작하는 함수 정의
        // 1초 후에 실행
        setTimeout(function() {
            // 잔액 계산
            let balance = mymoney - payment;
            if(balance > 0) {
                // 성공
                console.log(`${payment}원을 지불하셨습니다.`);
                resolve(balance);
            } else {
                // 실패
                reject(`잔액은 ${mymoney}원 입니다. 구매 할 수 없습니다.`);
            };
        }, 1000);

    });
}

// 함수 호출부
buyAsync(500)
    .then(function(balance) {
        console.log(`잔액은 ${balance}원 남았습니다.`);
})
    .catch(function(err1) {
        console.log(err1);
});


// 연습문제 #5
// 한 문자를 입력받아서 1초 후에 출력하는 비동기 프로그램을 작성하세요.
// 입력 : a
// 출력 : a

let string = inputStr => {
    return new Promise((resolve, reject) => {
        let anyStr = prompt("문자를 입력하세요.");
        
        setTimeout(function() {
            resolve(anyStr);
    }, 2000);
});
};

// 함수 호출

string()
    .then(function(anyStr) {
        console.log(anyStr);
    });


// 연습문제 #6
// 두 문자를 공백을 띄워 입력받아서 1초 후에 거꾸로 출력하는
// 비동기 프로그램을 작성하세요.
// 입력 : a b
// 출력 : b
//        a

let string2 = str => {
    return new Promise((resolve, reject) => {
        let arr = prompt("두 문자를 입력하세요.").split(" ");
        
        setTimeout(() => {
            resolve(arr);
        }, 2000);
    });
};

string2()
    .then(function(arr) {
        console.log(arr[1]);
        console.log(arr[0]);
    });