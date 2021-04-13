function removeAllTasks() {
  const getOlList = document.getElementById('lista-tarefas');
  const size = getOlList.children.length;
  for (let index = 0; index < size; index += 1) {
    getOlList.removeChild(getOlList.lastChild);
  }
}

function clearAll() {
  const size = taskList.childElementCount;
  for (let index = 0; index < size; index += 1) {
    taskList.removeChild(taskList.lastElementChild);
  }
}

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

function clickButtonRemove() {
  const buttonRemove = document.getElementById('apaga-tudo');
  buttonRemove.addEventListener('click', removeAllTasks);
}
window.onload = function load() {
  clickButtonTask();
  clickButtonRemove();
};
