var tiempoRestante = 60; // Tiempo inicial en segundos
var timer;
var inputBlock = document.getElementById("timerInput");

function startTimer() {
    inputBlock.style.display = "none"; // Oculta el bloque de entrada
    var minutos = parseInt(document.getElementById("minutes").value);
    tiempoRestante = minutos * 60; // Convierte minutos a segundos

    var x = setInterval(function () {
        var horas = Math.floor(tiempoRestante / (60 * 60));
        var minutos = Math.floor((tiempoRestante % (60 * 60)) / 60);
        var segundos = tiempoRestante % 60;

        document.getElementById("countdown").innerHTML = horas + "h " + minutos + "m " + segundos + "s ";

        if (tiempoRestante <= 0) {
            clearInterval(x);
            var countdownElement = document.getElementById("countdown");
            countdownElement.innerHTML = "Tiempo expirado";
            countdownElement.style.fontSize = "60px";
        } else {
            tiempoRestante--;
        }
    }, 1000);
    timer = x;
}

function resetTimer() {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "";
    inputBlock.style.display = "block"; // Muestra el bloque de entrada
}