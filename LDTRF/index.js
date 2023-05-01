let Contador = 0
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa() {

    let valorInput = input.value;

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
      
        
        ++Contador;
      
        let novoItem = `<div id="${Contador}" class="item">
        <div class="item-icone">
            <img onclick="marcarTarefa(${Contador})" src="Circulo.png" alt="Botão de marcação" class="Icone">
        </div>
        <div onclick="marcarTarefa(${Contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${Contador})" class="delete">Deletar</button>
        </div>
    </div>`;

        main.innerHTML += novoItem;

        input.value = "";
        input.focus();
    }

}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe=="item"){
        item.classList.add("clicado");

        item.parentNode.appendChild(item);
    }else{
        item.classList.remove("clicado");
    }
}

input.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        btnAdd.click()
    }
})