function createNode() {
    var criteriaNode = document.getElementById('text');
    var newNode = document.createElement('p');
    newNode.innerHTML = "새로운 단락입니다.";
    document.body.insertBefore(newNode, criteriaNode);
}