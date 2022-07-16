var date = new Date();
var month = date.getMonth() + 1;

if (3 <= month && month <= 5) {
    alert('봄입니다.');
} else if (6 <= month && month <= 8) {
    alert('여름입니다.');
} else if (9 <= month && month <= 11) {
    alert('가을입니다.');
} else {
    alert('겨울입니다.');
}