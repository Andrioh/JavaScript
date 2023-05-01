
// For:

/*

Primeiro ponto e virgula: Qual valor ele vai começar
Segundo ponto e virgula: Até onde ele vai
Terceiro ponto e virgula: Quanto ele vai adicionar na variável i

*/

let AnoAtual = new Date().getFullYear();

for(let i = AnoAtual; i >= 1900; i--){

    document.getElementById("ForAno").innerHTML += "<option value='"+i+"'>"+i+"</option>"

}
