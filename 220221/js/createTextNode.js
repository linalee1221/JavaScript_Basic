function createNode() {
    var elementNode = document.getElementById('text');
    var newText = document.createTextNode('새로운 텍스트에요! ');
    elementNode.appendChild(newText);
}