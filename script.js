const getOlList = document.getElementById('lista-tarefas');

function removeAllTasks() {
  const size = getOlList.children.length;
  for (let index = 0; index < size; index += 1) {
    getOlList.removeChild(getOlList.lastChild);
  }
}

function removeCompletedTasks() {
  const completedLi = document.getElementsByClassName('completed');
  for (let index = completedLi.length - 1; index >= 0; index -= 1) {
    getOlList.removeChild(completedLi[index]);
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
  const task = document.createElement('li');
  task.classList.add('tarefa');
  task.addEventListener('click', selectTask);
  task.addEventListener('dblclick', doubleClickToComplete);
  getOlList.appendChild(task);
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

function clickButtonRemoveCompleted() {
  const buttonRemoveCompleted = document.getElementById('remover-finalizados');
  buttonRemoveCompleted.addEventListener('click', removeCompletedTasks);
}

window.onload = function load() {
  clickButtonTask();
  clickButtonRemove();
  clickButtonRemoveCompleted();
};
