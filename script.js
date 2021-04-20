const tarefa = document.getElementById('texto-tarefa');
const botao = document.getElementById('criar-tarefa');
const toDoList = document.getElementById('lista-tarefas');

function selectedItem(event) {
  const selected = document.querySelector('.selected');
  if (selected !== null) {
    selected.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function listaDeTarefas() {
  if (tarefa.value !== '') {
    const tarefas = document.createElement('li');
    tarefas.innerText = tarefa.value;
    tarefa.value = '';
    toDoList.appendChild(tarefas);
    tarefas.addEventListener('click', selectedItem);
  }
}
botao.addEventListener('click', listaDeTarefas);
