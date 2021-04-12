const toDoList = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
const createTaskBtn = document.querySelector('#criar-tarefa');

function addTask() {
  const newTask = document.createElement('li');
  newTask.innerText = input.value;
  toDoList.appendChild(newTask);
  input.value = '';
}

createTaskBtn.addEventListener('click', addTask);
