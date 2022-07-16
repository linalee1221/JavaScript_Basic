window.onload = function() {
    document.body.setAttribute('data-custom', 'value');

    var dataCustom = document.body.getAttribute('data-custom');
    alert(dataCustom);
}