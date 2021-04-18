// Requisito 5 e 6
const addTaskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function addTaskToTaskList() {
  const task = document.getElementById('texto-tarefa');
  const taskListItem = document.createElement('li');
  taskListItem.className = 'listItem';
  taskListItem.classList.add('has-text-info-dark');
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

  if (clickedTask.classList.contains('listItem')) {
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

// Requisito 10 . Obs: Consultei este fórum para me ajudar no problema: (https://qastack.com.br/programming/3955229/remove-all-child-elements-of-a-dom-node-in-javascript)
const deleteButton = document.getElementById('apaga-tudo');

function clearTaskList() {
  while (taskList.lastElementChild) {
    taskList.removeChild(taskList.lastChild);
  }
}

// Requisito 11 . Obs: Consultei este fórum para me ajudar no problema: (https://qastack.com.br/programming/4777077/removing-elements-by-class-name)
const deleteFinishedTasksButton = document.getElementById('remover-finalizados');

function deleteFinishedTasks() {
  const finishedTasks = document.getElementsByClassName('completed');
  while (finishedTasks.length > 0) {
    finishedTasks[0].parentNode.removeChild(finishedTasks[0]);
  }
}

// Requisito 14
const removeSelectedTaskButton = document.getElementById('remover-selecionado');

function removeSelectedTask() {
  const tasks = document.getElementsByClassName('listItem');
  for (let index = 0; index < tasks.length; index += 1) {
    const currentTask = tasks[index];
    if (currentTask.style.backgroundColor === 'rgb(128, 128, 128)') {
      currentTask.parentNode.removeChild(currentTask);
    }
  }
}

// Ativar as funções e botões da página:
function start() {
  addTaskButton.addEventListener('click', addTaskToTaskList);
  taskList.addEventListener('click', changeClickedTaskBackgroundColor);
  taskList.addEventListener('dblclick', scratchTask);
  deleteButton.addEventListener('click', clearTaskList);
  deleteFinishedTasksButton.addEventListener('click', deleteFinishedTasks);
  removeSelectedTaskButton.addEventListener('click', removeSelectedTask);
}

window.onload = start;
