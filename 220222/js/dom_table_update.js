window.onload = function() {
    document.getElementById('btnId').onclick = btnClick;
}

function btnClick() {
    let table = document.getElementById('tableId');
    table.rows[0].cells[0].innerHTML = '홍길동'
}