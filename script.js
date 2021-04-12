const inputTask = document.getElementById('texto-tarefa');
const buttonCreateTask = document.getElementById('criar-tarefa');
const olTaskList = document.getElementById('lista-tarefas');

const li = document.createElement('li');

function createTaskHandler() {
  const task = inputTask.value;

  const newTask = li.cloneNode();
  newTask.innerText = task;
  olTaskList.appendChild(newTask);

  inputTask.value = '';
  inputTask.focus();
}

function onLoad() {
  inputTask.focus();
  buttonCreateTask.addEventListener('click', createTaskHandler);
}

window.onload = onLoad;
