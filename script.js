const listaTarefas = document.querySelector('#lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');
const classSelected = document.querySelector('.selected');
const liCriada = document.createElement('li');
const liList = listaTarefas.innerHTML;

// Função carregar itens salvos
window.onload = function() {
  listaTarefas.innerHTML = localStorage.savedList; 
};

// Evento com função pra criar e inserir elementos li
document.getElementById('criar-tarefa').addEventListener('click', function() {
  liCriada.innerText = textoTarefa.value;
  listaTarefas.appendChild(liCriada);
  textoTarefa.value = ''
})

// Evento com função pra trocar a classe .selected nas li
listaTarefas.addEventListener('click', function (event) {
    if (classSelected.length > 0) {
        classSelected[0].classList.remove('selected');
        event.target.classList.toggle('selected');
    } else {
        event.target.classList.toggle('selected');
    }
})

// Evento com função para marcar .completed nas li com doubleclick
listaTarefas.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
})

// Criar butão para limpar as li
document.getElementById('apaga-tudo').addEventListener('click', function() {
    while (listaTarefas.firstChild) {
        listaTarefas.removeChild(listaTarefas.firstChild);
    }
})

// Criar butão para apagar todas as li com a classe .completed
function deleteCompleted() {
    for (let index = document.querySelectorAll('li').length -1; index >= 0; index -= 1) {
        if (document.querySelectorAll('li')[index].className.includes('completed')) {
            document.querySelectorAll('li')[index].remove();
        }
    }
}

document.getElementById('remover-finalizados').addEventListener('click', deleteCompleted);

// Função pra deletar o elemento com a classe .selected
function deleteSelected() {
  classSelected.remove();
}

document.querySelector('#remover-selecionado').addEventListener('click', deleteSelected);

// Função pra salvar o conteudo do ol como html no localstorage
// Referência: Luan Alexandre
// https://github.com/tryber/sd-011-project-todo-list/pull/138/
function saveList() {
  localStorage.clear();
  localStorage.savedList = liList;
}

document.querySelector('#salvar-tarefas').addEventListener('click', saveList);