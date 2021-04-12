const buttonForTaskCreation = document.getElementById('criar-tarefa');
const inputTextElement = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const tasks = document.getElementsByClassName('tasks');

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
    const classes = tasks[index].className;
    if (classes === 'tasks selected') {
      tasks[index].classList.remove('selected');
    }
  }

  const targetTask = event.target;
  targetTask.classList.add('selected');
  console.log(event.target);
}

function addListeners() {
  buttonForTaskCreation.addEventListener('click', addTask);
  taskList.addEventListener('click', taskSelector);
}

addListeners();
