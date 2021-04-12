const createTaskButton = document.getElementById('criar-tarefa');
const listTask = document.getElementById('lista-tarefas');

function addItemTaskList() {
  const liTaskList = document.createElement('li');
  liTaskList.innerText = document.getElementById('texto-tarefa').value;
  listTask.appendChild(liTaskList);
  document.getElementById('texto-tarefa').value = '';
}

createTaskButton.addEventListener('click', addItemTaskList);
