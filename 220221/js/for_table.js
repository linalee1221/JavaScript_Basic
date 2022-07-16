window.onload = function() {
    
var arr = [1, true, "JavaScript"];

var result = "<table border=1><tr>";
for(var idx in arr) {
    result += "<td>" + arr[idx] + "</td>";
}
result += "</tr></table>";

console.log(result);
document.write(result);

}