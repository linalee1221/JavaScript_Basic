function appendNode() {
    let parent = document.getElementById('list');
    let criteriaItem = document.getElementById('criteria');
    let newItem = document.getElementById('item');
    parent.insertBefore(newItem, criteriaItem);
} 
