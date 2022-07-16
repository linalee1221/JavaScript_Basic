window.onload = function() {    
    let pic = document.querySelector('#pic');
    pic.addEventListener("mouseover", changePic);
    pic.addEventListener("mouseout", originPic);
    
    function changePic() {
        pic.src = "image/cat2.jpg";
    }

    function originPic() {
        pic.src = "image/cat1.jpg";
    }
}