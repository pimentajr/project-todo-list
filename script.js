const newTaskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');


newTaskButton.addEventListener('click', addTask);

function addTask() {
  let newTaskItem = document.createElement('li');
  newTaskItem.innerText = document.getElementById('texto-tarefa').value;
  taskList.appendChild(newTaskItem);

  document.getElementById('texto-tarefa').value = '';
}
