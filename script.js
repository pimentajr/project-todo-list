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
// funções SaveList e loadList -> Esta forma nao foi feita por mim e sim foi uma logica que o Rafale me explicou deixei somente para completar o projeto mas pretendo mais tarde voltar e fazer de uma forma que eu compreenda melhor
function saveList() {
  const tasks = getOlList.children;
  const size = tasks.length;
  const saveInfo = [];
  for (let index = 0; index < size; index += 1) {
    saveInfo.push(tasks[index].innerText);
    if (tasks[index].classList.contains('completed')) {
      saveInfo.push('true');
    } else {
      saveInfo.push('false');
    }
  }
  localStorage.setItem('list', saveInfo);
}
// funções SaveList e loadList -> Esta forma nao foi feita por mim e sim foi uma logica que o Rafale me explicou deixei somente para completar o projeto mas pretendo mais tarde voltar e fazer de uma forma que eu compreenda melhor
function loadList() {
  const list = localStorage.getItem('list');
  if (list === null || list === '') {
    return;
  }
  const array = list.split(',');
  for (let index = 0; index < array.length; index += 2) {
    const element = document.createElement('li');
    element.innerText = array[index];
    element.classList.add('tarefa');
    element.addEventListener('click', selectTask);
    element.addEventListener('dblclick', doubleClickToComplete);
    if (array[index + 1] === 'true') {
      element.classList.add('completed');
    }
    getOlList.appendChild(element);
  }
}

function moveUp() {
  const listSelected = document.querySelector('.selected');
  if (listSelected === null || listSelected.previousElementSibling === null) {
    return;
  }
  const previous = listSelected.previousElementSibling;
  getOlList.insertBefore(listSelected, previous);
}

function moveDown() {
  const listSelected = document.querySelector('.selected');
  if (listSelected === null || listSelected.nextElementSibling === null) {
    return;
  }
  const next = listSelected.nextElementSibling;
  getOlList.insertBefore(next, listSelected);
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

function clickButtonSaveTask() {
  const buttonSaveList = document.getElementById('salvar-tarefas');
  buttonSaveList.addEventListener('click', saveList);
}

function clickButtonsMoveUP() {
  const buttonMoveUp = document.getElementById('mover-cima');
  buttonMoveUp.addEventListener('click', moveUp);
}
function clickButtonsMoveDown() {
  const buttonMoveDown = document.getElementById('mover-baixo');
  buttonMoveDown.addEventListener('click', moveDown);
}

window.onload = function load() {
  clickButtonTask();
  clickButtonRemove();
  clickButtonRemoveCompleted();
  clickButtonRemoveSelected();
  clickButtonSaveTask();
  clickButtonsMoveUP();
  clickButtonsMoveDown();
  loadList();
};
