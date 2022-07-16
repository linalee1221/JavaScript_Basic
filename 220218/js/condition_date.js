var date = new Date();
var hours = date.getHours();

if (hours < 12) {
    alert('오전입니다.');
}

if (12 <= hours) {
    alert('오후입니다.');
}