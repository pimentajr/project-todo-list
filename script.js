const createTaskButton = document.getElementById('criar-tarefa');
const listTask = document.getElementById('lista-tarefas');

createTaskButton.addEventListener('click', addItemTaskList);


function addItemTaskList() {
  let liTaskList = document.createElement('li');
  liTaskList.innerText = document.getElementById('texto-tarefa').value;
  listTask.appendChild(liTaskList);
  document.getElementById('texto-tarefa').value = '';
}
