const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');

function taskAdd() {
  let newTask = document.createElement('li');
  newTask.innerText = document.getElementById('texto-tarefa').value;
  listaTarefas.appendChild(newTask);

  document.getElementById('texto-tarefa').value = '';
}
criarTarefa.addEventListener('click', taskAdd);