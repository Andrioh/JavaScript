let ValorReal = 0
let ValorDolar = 5

function Click(){
    ValorReal = window.prompt("Digite o valor em reais:")

    Conversao(ValorReal,ValorDolar)
}

function Conversao(n1,n2){
    return document.getElementById("Soma").innerHTML=" Com R$"+n1+" você tem U$"+n1/n2
}