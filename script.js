let listTarefas = document.getElementById('lista-tarefas'); //Lista a ser criada
let criarTarefa = document.getElementById('criar-tarefa'); //BUTTON
let textoTarefa = document.getElementById('texto-tarefa'); //INPUT

// adicionando item na lista e zerando o input
function criarItem() {
    let listItem = document.createElement('li');
    let inputValue = textoTarefa.value;

    listItem.innerText = inputValue;
    listTarefas.appendChild(listItem);
    inputValue = '';
}

criarTarefa.addEventListener('click', criarItem)
