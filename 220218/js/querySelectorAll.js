window.onload = function() {
    let elements = document.querySelectorAll('ul li');

    for(let i=0; i< elements.length; i++); {
    document.getElementById('output').innerHTML += elements[i].innerHTML;
    document.getElementById('output').innerHTML += "<br>";
    }
}