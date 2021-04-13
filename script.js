const inputField = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const addButton = document.querySelector('#criar-tarefa');

function addTask() {
  const task = inputField.value;
  const listItem = document.createElement('li');

  listItem.innerText = task;
  taskList.appendChild(listItem);
}

addButton.addEventListener('click', addTask);
