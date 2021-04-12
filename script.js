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

function CreateTask() {
  const element = document.createElement('li');
  const text = document.getElementById('texto-tarefa').value;
  element.innerText = text;
  element.classList.add('tarefa');
  element.addEventListener('click', SelectTask);
  element.addEventListener('dblclick', CompleteTask);
  taskList.appendChild(element);
  document.getElementById('texto-tarefa').value = '';
  // let criado = document.querySelector('tarefa');
  // criado.addEventListener('click',SelectTask);
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

window.onload = function load() {
  addEventCreateTask();
  addEventClearAll();
  addEventClearCompleted();
};
