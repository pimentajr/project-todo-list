const inputField = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const addButton = document.querySelector('#criar-tarefa');
const taskForm = document.querySelector('#input-task-container');

function clearTask() {
  listItem.innerText = '';
}

function addTask() {
  const task = inputField.value;
  const listItem = document.createElement('li');

  listItem.innerText = task;
  taskList.appendChild(listItem);
  taskForm.reset();
}

addButton.addEventListener('click', addTask);
