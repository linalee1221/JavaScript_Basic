function openWindow() {
let newWindowObj;
let flag = "yes";


let strWindow = `menubar=${flag},location=${flag},resizable=${flag},scrollbars=${flag},status=${flag}`;
    
    newWindowObj = window.open("http://www.naver.com", "Naver사이트", strWindow);
        }
function closeNewWindow() {
    newWindowObj.close();
}

window.onload=function () {
    document.querySelector('#current').innerHTML = "현재 문서의 URL 주소는 " + location.href + "입니다.";
}

function openDocument() {
    location.assign("http://www.naver.com");
}
function openDocumentWithReplace() {
    location.replace("http://www.google.com");
}
