function removeCh() {
    // 부모 태그
    let outputId = document.getElementById('outputId');
    // 자식 태그
    let pTag = document.getElementById('removeChId');
    // 삭제
    outputId.removeChild(pTag);
}
function removeTag() {
    // 태그 ID 접근
    let removeId = document.getElementById('removeId');
    // 그 태그 삭제
    removeId.remove();
}