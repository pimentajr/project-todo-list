// Requisito 5
const addTaskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function addTaskToTaskList() {
  const task = document.getElementById('texto-tarefa');
  const taskListItem = document.createElement('li');
  taskListItem.innerText = task.value;
  taskList.appendChild(taskListItem);
  task.value = '';
}

addTaskButton.addEventListener('click', addTaskToTaskList);
