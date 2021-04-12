const createTaskButton = document.querySelector('#criar-tarefa');
const taskInput = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function createTask() {
  const textTask = taskInput.value;
  const newTask = document.createElement('li');

  newTask.innerText = textTask;
  newTask.className = 'task';
  taskList.appendChild(newTask);
  taskInput.value = '';

  // console.log(taskList);
}

function taskSelection(task) {
  const allTasks = document.querySelectorAll('.task');
  const selectedTask = task.target;

  for (let index = 0; index < allTasks.length; index += 1) {
    allTasks[index].classList.remove('selected');
  }
  selectedTask.classList.add('selected');
}

createTaskButton.addEventListener('click', createTask);
taskList.addEventListener('click', taskSelection);
