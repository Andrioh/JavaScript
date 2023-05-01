function AtivarContagem(){
    document.getElementById("Tempo").innerHTML="Contagem começou";
    setTimeout(function (){
        document.getElementById("Tempo").innerHTML="Execultou o setTimeout"
    }, 5000) // Milisegundos
}