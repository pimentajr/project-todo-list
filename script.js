const newTaskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

newTaskButton.addEventListener('click', addTask);

function addTask() {
  const newTaskItem = document.createElement('li');
  newTaskItem.innerText = document.getElementById('texto-tarefa').value;
  taskList.appendChild(newTaskItem);

  document.getElementById('texto-tarefa').value = '';
}

function classChanger(event) {
  const tasks = document.querySelectorAll('li');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].classList.remove('selected');
  }
  const taskDone = event.target;
  taskDone.classList.add('selected');
}

taskList.addEventListener('click', classChanger);

function taskCompleted(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

taskList.addEventListener('dblclick', taskCompleted);
