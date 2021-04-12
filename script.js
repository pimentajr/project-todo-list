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
  const highlighted = document.querySelector('.highlighted');
  if (highlighted) {
    highlighted.classList.remove('highlighted');
  }
  item.classList.add('highlighted');
}

toDoList.addEventListener('click', highlightItem);

function completeTask(event) {
  const task = event.target;
  if (task.className.includes('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

toDoList.addEventListener('dblclick', completeTask);
