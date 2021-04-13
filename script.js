const addTaskButton = document.getElementById('criar-tarefa');
const taskInput = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function inputBlank() {
  taskInput.value = '';
}

function addTask() {
  const text = taskInput.value;
  const listItem = document.createElement('li');
  listItem.innerText = text;
  taskList.appendChild(listItem);
  inputBlank();
}

addTaskButton.addEventListener('click', addTask);
