const newTaskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

newTaskButton.addEventListener('click', addTask);

function addTask() {
  const newTaskItem = document.createElement('li');
  newTaskItem.innerText = document.getElementById('texto-tarefa').value;
  taskList.appendChild(newTaskItem);

  document.getElementById('texto-tarefa').value = '';
}

function classChanger (event) {
  let tasks = document.querySelectorAll('li')
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].className = '';
  }
  let taskDone = event.target;
  taskDone.className = 'selected';
}

taskList.addEventListener('click', classChanger)