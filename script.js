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

// Ativar as funções e botões da página:
function start() {
  addTaskButton.addEventListener('click', addTaskToTaskList);
  taskList.addEventListener('click', changeClickedTaskBackgroundColor);
}

window.onload = start;
