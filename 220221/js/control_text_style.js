window.onload = function() {
    let output = '';
    for(var i=0; i<10; i++) {
        output += '<h1>Header - ' + i + '</h1>';
    }
    document.body.textContent = output;
 document.body.innerHTML = output;
}


//     let output = '';
//     for(var i=0; i<256; i++) {
//         output += '<div></div>';
//     }
//     document.body.innerHTML = output;

//     let divs = document.querySelectorAll('div');
//     for(var i=0; i<divs.length; i++) {
//         let div = divs[i];

//         div.style.height = '2px';
//         div.style.background = 'rgb(' + i + ',' + i + ',' + i + ')';
//     }
// };