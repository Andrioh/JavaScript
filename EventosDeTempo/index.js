function AtivarContagem(){
    document.getElementById("Tempo").innerHTML="Contagem começou";
    setTimeout(function (){
        document.body.style.backgroundColor = "gray"
    }, 5000) // Milisegundos
}

function Desativa(){
    document.body.style.backgroundColor = "black"
}