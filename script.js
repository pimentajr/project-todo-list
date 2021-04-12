const buttonForTaskCreation = document.getElementById('criar-tarefa');
const inputTextElement = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function addTask() {
  const task = inputTextElement.value;
  inputTextElement.value = '';
  const TaskElement = document.createElement('li');
  taskList.appendChild(TaskElement).className = 'tasks';
  taskList.lastChild.innerText = task;
}

function addListeners() {
  buttonForTaskCreation.addEventListener('click', addTask);
}

addListeners();
