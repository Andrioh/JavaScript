function AtivarContagem() {
    Tempo = setInterval(function () {
        var Cronometo = document.getElementById("Tempo").innerHTML;
        var soma = parseInt(Cronometo) + 1;
        document.getElementById("Tempo").innerHTML = soma;

        document.title = "Contando: " + soma
    }, 1000);
}

function DesativarContagem() {
    clearInterval(Tempo);
}