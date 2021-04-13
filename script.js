const taskList = document.getElementById('lista-tarefas');

function SelectTask(event) {
  const selected = document.querySelector('.selected');
  if (selected !== null) {
    selected.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function CompleteTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function clearAll() {
  const size = taskList.childElementCount;
  for (let index = 0; index < size; index += 1) {
    taskList.removeChild(taskList.lastElementChild);
  }
}

function clearCompleted() {
  const completedList = document.getElementsByClassName('completed');
  const size = completedList.length;
  for (let index = size - 1; index >= 0; index -= 1) {
    taskList.removeChild(completedList[index]);
  }
}

function clearSelected() {
  const selected = document.querySelector('.selected');
  taskList.removeChild(selected);
}

function moveUp() {
  const selected = document.querySelector('.selected');
  if (selected.previousElementSibling === null || selected === null) {
    return;
  }
  const previous = selected.previousElementSibling;
  taskList.insertBefore(selected, previous);
}

function moveDown() {
  const selected = document.querySelector('.selected');
  if (selected.nextElementSibling === null || selected === null) {
    return;
  }
  const next = selected.nextElementSibling;
  taskList.insertBefore(next, selected);
}

function saveList() {
  const tasks = taskList.children;
  const size = tasks.length;
  const saveInfo = [];
  for (let index = 0; index < size; index += 1) {
    saveInfo.push(tasks[index].innerText);
    if (tasks[index].classList.contains('completed')) {
      saveInfo.push('true');
    } else {
      saveInfo.push('false');
    }
  }
  localStorage.setItem('list', saveInfo);
}

function loadList() {
  const list = localStorage.getItem('list');
  if (list === null || list === '') {
    return;
  }
  const array = list.split(',');
  for (let index = 0; index < array.length; index += 2) {
    const element = document.createElement('li');
    element.innerText = array[index];
    element.classList.add('tarefa');
    element.addEventListener('click', SelectTask);
    element.addEventListener('dblclick', CompleteTask);
    if (array[index + 1] === 'true') {
      element.classList.add('completed');
    }
    taskList.appendChild(element);
  }
}

function CreateTask() {
  const element = document.createElement('li');
  const text = document.getElementById('texto-tarefa').value;
  element.innerText = text;
  element.classList.add('tarefa');
  element.addEventListener('click', SelectTask);
  element.addEventListener('dblclick', CompleteTask);
  taskList.appendChild(element);
  document.getElementById('texto-tarefa').value = '';
}

function addEventCreateTask() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', CreateTask);
}

function addEventClearAll() {
  const button = document.getElementById('apaga-tudo');
  button.addEventListener('click', clearAll);
}

function addEventClearCompleted() {
  const button = document.getElementById('remover-finalizados');
  button.addEventListener('click', clearCompleted);
}

function addEventSaveList() {
  const button = document.getElementById('salvar-tarefas');
  button.addEventListener('click', saveList);
}

function addEventClearSelected() {
  const button = document.getElementById('remover-selecionado');
  button.addEventListener('click', clearSelected);
}

function addEventMoveUp() {
  const button = document.getElementById('mover-cima');
  button.addEventListener('click', moveUp);
}

function addEventMoveDown() {
  const button = document.getElementById('mover-baixo');
  button.addEventListener('click', moveDown);
}

window.onload = function load() {
  addEventCreateTask();
  addEventClearAll();
  addEventClearCompleted();
  addEventSaveList();
  addEventClearSelected();
  addEventMoveUp();
  addEventMoveDown();
  loadList();
};
