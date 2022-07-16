window.onload = function() {
    // let header = document.getElementById('header');

    // header.style.color = "orange";
    // header.style.background = 'red';
    // header.innerHTML = 'From JavaScript';


    // let header = document.querySelector('h1');

    // header.style.color = "orange";
    // header.style.background = 'red';
    // header.innerHTML = "From JavaScript";


    let headers = document.querySelectorAll('h1');

    for(var i=0; i<headers.length; i++) {
        let header = headers[i];

        header.style.color = "orange";
        header.style.background = 'red';
        header.innerHTML = 'From JavaScript';
    }
};

