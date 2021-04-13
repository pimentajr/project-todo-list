const addTaskButton = document.getElementById('criar-tarefa');
const taskInput = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function inputBlank() {
  taskInput.value = '';
}

function addTask() {
  const text = taskInput.value;
  if (text !== '') {
    const listItem = document.createElement('li');
    listItem.innerText = text;
    taskList.appendChild(listItem);
    inputBlank();
  }
}

function highlight(origin) {
  const listItem = origin.target;
  listItem.style.backgroundColor = 'rgb(128, 128, 128)';
}

addTaskButton.addEventListener('click', addTask);

taskList.addEventListener('click', highlight);
