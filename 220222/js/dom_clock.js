window.onload = function() {
    var clock = document.getElementById('clock');
    setInterval(function() {
        var now = new Date();
        clock.innerHTML = now.toString();
    }, 1000);
}