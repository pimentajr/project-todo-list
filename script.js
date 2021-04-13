const getOlList = document.getElementById('lista-tarefas');

function removeAllTasks() {
  const size = getOlList.children.length;
  for (let index = 0; index < size; index += 1) {
    getOlList.removeChild(getOlList.lastChild);
  }
}

function removeCompletedTasks() {
  const completedLi = document.querySelectorAll('.completed');
  // => Se for fazer com o getElementsByClassName por algum motivo ele atualiza o length e precisa ser feito um for que le ao contrario dessa forma
  // for (let index = completedLi.length - 1; index >= 0; index -= 1) {
  for (let index = 0; index < completedLi.length; index += 1) {
    getOlList.removeChild(completedLi[index]);
  }
}

function removeSelectedTask() {
  const selectedTask = document.querySelectorAll('.selected');
  for (let index = 0; index < selectedTask.length; index += 1) {
    getOlList.removeChild(selectedTask[index]);
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

function clickButtonRemoveSelected() {
  const buttonRemoveSelected = document.getElementById('remover-selecionado');
  buttonRemoveSelected.addEventListener('click', removeSelectedTask);
}

window.onload = function load() {
  clickButtonTask();
  clickButtonRemove();
  clickButtonRemoveCompleted();
  clickButtonRemoveSelected();
};
