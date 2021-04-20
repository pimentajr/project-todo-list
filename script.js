const tarefa = document.getElementById('texto-tarefa');
const botao = document.getElementById('criar-tarefa');
const toDoList = document.getElementById('lista-tarefas');

function selectedItem(event) {
  const selected = document.querySelector('.thisItem');
  if (selected !== null) {
    selected.classList.remove('thisItem');
  }
  event.target.classList.add('thisItem');
}

function riscaItem(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function listaDeTarefas() {
  if (tarefa.value !== '') {
    const tarefas = document.createElement('li');
    tarefas.innerText = tarefa.value;
    tarefa.value = '';
    toDoList.appendChild(tarefas);
    tarefas.addEventListener('click', selectedItem);
    tarefas.addEventListener('dblclick', riscaItem);
  }
}
botao.addEventListener('click', listaDeTarefas);
