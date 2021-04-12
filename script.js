const createTaskButton = document.querySelector('#criar-tarefa');
const taskInput = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function createTask() {
  const textTask = taskInput.value;
  const newTask = document.createElement('li');

  newTask.innerText = textTask;
  taskList.appendChild(newTask);
  taskInput.value = '';

  // console.log(taskList);
}

function taskSelection(task) {
  const selectedTask = task.target;
  selectedTask.className = 'selected';
  console.log(selectedTask);
}

createTaskButton.addEventListener('click', createTask);
taskList.addEventListener('click', taskSelection);
