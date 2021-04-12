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

function highlightItem(event) {
  const item = event.target;
  item.style.backgroundColor = 'rgb(128,128,128)';
}

toDoList.addEventListener('click', highlightItem);
