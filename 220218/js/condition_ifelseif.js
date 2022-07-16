var date = new Date();
var hours = date.getHours();

if (hours < 5) {
    alert('잠을 자렴......');
} else if (hours < 7) {
    alert('준비');
} else if (hours < 9) {
    alert('출근');
} else if (hours < 12) {
    alert('빈둥빈둥');
} else if (hours < 14) {
    alert('식사냠냠');
} else if (hours < 16) {
    alert('꾸벅꾸벅');
} 