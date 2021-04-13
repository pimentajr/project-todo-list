const buttonForTaskCreation = document.getElementById('criar-tarefa');
const inputTextElement = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const tasks = document.getElementsByClassName('tasks');
const resetButton = document.getElementById('apaga-tudo');
const deleteEndedTasksButton = document.getElementById('remover-finalizados');
const saveButton = document.getElementById('salvar-tarefas');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');

function addTask() {
  const task = inputTextElement.value;
  inputTextElement.value = '';
  const TaskElement = document.createElement('li');
  taskList.appendChild(TaskElement).className = 'tasks';
  taskList.lastChild.innerText = task;
}

function taskSelector(event) {
  for (let index = 0; index < tasks.length; index += 1) {
    const classes = tasks[index].classList;
    if (classes.contains('selected')) {
      tasks[index].classList.remove('selected');
    }
  }

  const targetTask = event.target;
  targetTask.classList.add('selected');
}

function setStatus(event) {
  const targetTask = event.target;
  if (targetTask.classList.contains('completed')) {
    targetTask.classList.remove('completed');
    return;
  }
  targetTask.classList.add('completed');
}

function resetAll() {
  taskList.innerHTML = '';
}

function deleteEndedTasks() {
  for (let index = 0; index < tasks.length; index += 1) {
    if (tasks[index].classList.contains('completed')) {
      tasks[index].remove();
      index -= 1;
    }
  }
}

function saveState() {
  localStorage.setItem('tasks', taskList.innerHTML);
}

function retrieveState() {
  taskList.innerHTML = localStorage.getItem('tasks');
}

function moveUp() {
  const taskToMove = document.getElementsByClassName('selected')[0];
  if (taskToMove === undefined) {
    return;
  }
  if (taskList.firstChild === taskToMove) {
    return;
  }

  const previousTask = taskToMove.previousElementSibling;
  let temp = previousTask.innerHTML;
  previousTask.innerHTML = taskToMove.innerHTML;
  taskToMove.innerHTML = temp;

  temp = previousTask.className;
  previousTask.className = taskToMove.className;
  taskToMove.className = temp;
}

function movedown() {
  const taskToMove = document.getElementsByClassName('selected')[0];
  if (taskToMove === undefined) {
    return;
  }
  if (taskList.lastChild === taskToMove) {
    return;
  }

  const nextTask = taskToMove.nextElementSibling;
  let temp = nextTask.innerHTML;
  nextTask.innerHTML = taskToMove.innerHTML;
  taskToMove.innerHTML = temp;

  temp = nextTask.className;
  nextTask.className = taskToMove.className;
  taskToMove.className = temp;
}

function addListeners() {
  buttonForTaskCreation.addEventListener('click', addTask);
  taskList.addEventListener('click', taskSelector);
  taskList.addEventListener('dblclick', setStatus);
  resetButton.addEventListener('click', resetAll);
  deleteEndedTasksButton.addEventListener('click', deleteEndedTasks);
  saveButton.addEventListener('click', saveState);
  moveUpButton.addEventListener('click', moveUp);
  moveDownButton.addEventListener('click', movedown);
}

addListeners();
retrieveState();
moveUp();
