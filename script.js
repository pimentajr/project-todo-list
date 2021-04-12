const createTaskButton = document.querySelector('#criar-tarefa');
const taskInput = document.querySelector('#texto-tarefa');

function createTask() {
  const textTask = taskInput.value;
  const newTask = document.createElement('li');
  const taskList = document.querySelector('#lista-tarefas');

  newTask.innerText = textTask;
  taskList.appendChild(newTask);
  taskInput.value = '';
}

createTaskButton.addEventListener('click', createTask);
