function selectTask(event) {
  const getTask = document.querySelector('.selected');
  if (getTask !== null) {
    getTask.classList.remove('selected');
  } event.target.classList.add('selected');
}

function doubleClickToComplete(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function addTask() {
  const userInput = document.getElementById('texto-tarefa').value;
  const typed = userInput;
  const listTask = document.getElementById('lista-tarefas');
  const task = document.createElement('li');
  task.classList.add('tarefa');
  task.addEventListener('click', selectTask);
  task.addEventListener('dblclick', doubleClickToComplete);
  listTask.appendChild(task);
  task.innerHTML = typed;
  document.getElementById('texto-tarefa').value = '';
}

function clickButtonTask() {
  const buttonTask = document.getElementById('criar-tarefa');
  buttonTask.addEventListener('click', addTask);
}

window.onload = function load() {
  clickButtonTask();
};
