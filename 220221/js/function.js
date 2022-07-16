function addNum(x,y) {
    document.write(x + y);
}

addNum(6,8);
document.write("<br>");
addNum(100,500);

document.write("<br>" + "===================================");

document.write("<br>");
function multiNum(x, y) {
    return x * y;
}
var num = multiNum(5, 6);
document.write(num);

document.write("<br>" + "===================================" + "<br>");

function sqr(x) {
    return x * x;
}
var sqrNum = sqr;
document.write(sqr(4) + "<br>");
document.write(sqrNum(4));

document.write("<br>" + "===================================" + "<br>");

function addnum(x, y, z) {
    return x + y + z;
}
addnum(1,2,3);
addnum(1,2);
addnum(1);
addnum();
document.write(addnum());

document.write("<br>" + "===================================" + "<br>");

function addNUM(x,y,z) {
    if(x === undefined)
    x = 0;
    if(y === undefined)
    y = 0;
    if(z === undefined)
    z = 0;
    return x + y + z;
}

addNUM(1,2,3);
addNUM(1,2);
addNUM(1);
addNUM();
document.write(addNUM());


document.write("<br>" + "===================================" + "<br>");
var x = 10, y = 20;
var a = eval("x + y"); // 30
var b = eval("y * 3"); // 60
document.write(a + "<br>" + b);


