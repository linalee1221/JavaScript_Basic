function createNode() {
    var text = document.getElementById('text');
    var newAttribute = document.createAttribute('style');
    newAttribute.value = "color:red";
    text.setAttributeNode(newAttribute);
}