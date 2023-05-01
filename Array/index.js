let Lista1 = [
    "Arroz",
    "Feijão",
    "Batata",
    "Frango",
]

document.getElementById("Lista1").innerHTML=Lista1
document.getElementById("Lista2").innerHTML="A lista tem "+Lista1.length+" itens"
document.getElementById("Lista3").innerHTML="O ultimo item da lista é "+Lista1[Lista1.length - 1]

Lista1.push = "Tomate" // Adiciona um item na lista

Lista1.shift() // Remove o primeiro item da lista
Lista1.pop() // Remove o ultimo item da lista
Lista1.unshift("Arroz integral") // Vira o primeiro item da lista
delete Lista1[1] // Remove o item 3 e deixa como underfined

document.getElementById("Lista1").innerHTML=Lista1.join(", ") // Altera o simbolo entre os itens

if (Array.isArray(Lista1) == true){ // Verifica se é uma array
    document.getElementById("Verificar").innerHTML="É um array"
}else{
    document.getElementById("Verificar").innerHTML="Não é um array"
}

// Junta 2 ou mais listas

let Lista2 = [
    "Suco",
    "Refrigerante",
]

const SuperLista = Lista1.concat(Lista2)

document.getElementById("SuperLista").innerHTML="Essa é suas duas listas juntas: "+SuperLista

// Deixa a lista em ordem alfabetica:

let OrdemAA = SuperLista.sort()

document.getElementById("OrdemAA").innerHTML="A lista em ordem alfabetica: "+OrdemAA