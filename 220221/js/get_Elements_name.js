// var selectedItem = document.getElementsByTagName("li");
// for(var i=0; i<selectedItem.length; i++) {
//     selectedItem.item(i).style.color = "red";
    
// }


// var selectedItem = document.getElementById("even");
// selectedItem.style.color="red";


// var selectedItem = document.getElementsByClassName("odd");
// for(var i=0; i<selectedItem.length; i++) {
//     selectedItem.item(i).style.color="red";
// }


// var selectedItem = document.getElementsByName("first");
// for(var i=0; i<selectedItem.length; i++) {
//     selectedItem[i].style.color="red";
// }

var selectedItem = document.querySelectorAll("li.odd");
for(var i=0; i<selectedItem.length; i++) {
    selectedItem.item(i).style.color="red";
}