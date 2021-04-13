// Requisito 5 e 6
const addTaskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function addTaskToTaskList() {
  const task = document.getElementById('texto-tarefa');
  const taskListItem = document.createElement('li');
  taskListItem.className = 'listItem';
  taskListItem.innerText = task.value;
  taskList.appendChild(taskListItem);
  task.value = '';
}

// Requisitos 7 e 8
function changeClickedTaskBackgroundColor(event) {
  const clickedTask = event.target;
  const tasks = document.getElementsByTagName('li');

  for (let index = 0; index < tasks.length; index += 1) {
    const listItem = tasks[index];
    listItem.style.backgroundColor = 'rgb(255, 255, 255)';
  }

  if (clickedTask.className === 'listItem') {
    clickedTask.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

// Requisito 9
function scratchTask(event) {
  const selectedTask = event.target;

  if (selectedTask.classList.contains('completed')) {
    selectedTask.classList.remove('completed');
  } else {
    selectedTask.classList.add('completed');
  }
}

// Requisito 10
const deleteButton = document.getElementById('apaga-tudo');

function clearTaskList() {
  while (taskList.lastElementChild) {
    taskList.removeChild(taskList.lastChild);
  }
}

// Requisito 11
const deleteFinishedTasksButton = document.getElementById('remover-finalizados');

function deleteFinishedTasks() {
  const finishedTasks = document.getElementsByClassName('completed');
  while (finishedTasks.length > 0) {
    finishedTasks[0].parentNode.removeChild(finishedTasks[0]);
  }
}

// Ativar as funções e botões da página:
function start() {
  addTaskButton.addEventListener('click', addTaskToTaskList);
  taskList.addEventListener('click', changeClickedTaskBackgroundColor);
  taskList.addEventListener('dblclick', scratchTask);
  deleteButton.addEventListener('click', clearTaskList);
  deleteFinishedTasksButton.addEventListener('click', deleteFinishedTasks);
}

window.onload = start;
