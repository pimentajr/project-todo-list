const buttonForTaskCreation = document.getElementById('criar-tarefa');
const inputTextElement = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const tasks = document.getElementsByClassName('tasks');
const resetButton = document.getElementById('apaga-tudo');

function addTask() {
  const task = inputTextElement.value;
  inputTextElement.value = '';
  const TaskElement = document.createElement('li');
  taskList.appendChild(TaskElement).className = 'tasks';
  taskList.lastChild.innerText = task;
  console.log(taskList.lastChild);
}

function taskSelector(event) {
  for (let index = 0; index < tasks.length; index += 1) {
    const classes = tasks[index].classList;
    if (classes.contains('selected')) {
      tasks[index].classList.remove('selected');
    }
  }

  const targetTask = event.target;
  targetTask.classList.add('selected');
}

function setStatus(event) {
  const targetTask = event.target;
  if (targetTask.classList.contains('completed')) {
    targetTask.classList.remove('completed');
    return;
  }
  targetTask.classList.add('completed');
}

function resetAll() {
  taskList.innerHTML = '';
}

function addListeners() {
  buttonForTaskCreation.addEventListener('click', addTask);
  taskList.addEventListener('click', taskSelector);
  taskList.addEventListener('dblclick', setStatus);
  resetButton.addEventListener('click', resetAll);
}

addListeners();
