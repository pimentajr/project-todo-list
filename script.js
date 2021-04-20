const addTaskInputField = document.getElementById('texto-tarefa');
const addTaskButton = document.getElementById('criar-tarefa');
const clearAllButton = document.getElementById('apaga-tudo');
const removeCompletedButton = document.getElementById('remover-finalizados');
const removeSelectedButton = document.getElementById('remover-selecionado');
const saveListMainViewContentButton = document.getElementById('salvar-tarefas');
const moveSelectedUpButton = document.getElementById('mover-cima');
const moveSelectedDownButton = document.getElementById('mover-baixo');
const mainView = document.getElementById('lista-tarefas');

function moveSelectedDown() {
  const currentlySelected = document.querySelector('.selected');

  if (!currentlySelected || currentlySelected === mainView.lastElementChild) {
    return;
  }

  currentlySelected.nextElementSibling.insertAdjacentElement('afterend', currentlySelected);
}

function moveSelectedUp() {
  const currentlySelected = document.querySelector('.selected');

  if (!currentlySelected || currentlySelected === mainView.firstElementChild) {
    return;
  }

  currentlySelected.previousElementSibling.insertAdjacentElement('beforebegin', currentlySelected);
}

function saveListMainViewContent() {
  localStorage.setItem('mainViewContent', mainView.innerHTML);
}

function removeSelected() {
  const currentlySelected = document.querySelector('.selected');

  if (!currentlySelected) {
    return;
  }

  currentlySelected.remove();
}

function removeCompleted() {
  const completedTasks = document.querySelectorAll('.completed.task');

  for (let index = 0; index < completedTasks.length; index += 1) {
    completedTasks[index].remove();
  }
}

function clearAll() {
  mainView.innerHTML = '';
}

function toggleCompleted(event) {
  if (!event.target.classList.contains('task')) {
    return;
  }

  event.target.classList.toggle('completed');
}

function toggleSelected(event) {
  if (!event.target.classList.contains('task')) {
    return;
  }

  const currentlySelected = document.querySelector('.selected');

  if (currentlySelected && currentlySelected !== event.target) {
    currentlySelected.classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function addTaskToMainView() {
  const taskItem = document.createElement('li');

  taskItem.innerText = addTaskInputField.value;
  taskItem.classList.add('task');
  mainView.appendChild(taskItem);
  addTaskInputField.value = '';
}

function initializeMainView() {
  if (localStorage.getItem('mainViewContent')) {
    mainView.innerHTML = localStorage.getItem('mainViewContent');
  }
}

window.onload = () => {
  initializeMainView();
  addTaskButton.addEventListener('click', addTaskToMainView);
  mainView.addEventListener('click', toggleSelected);
  mainView.addEventListener('dblclick', toggleCompleted);
  clearAllButton.addEventListener('click', clearAll);
  removeCompletedButton.addEventListener('click', removeCompleted);
  removeSelectedButton.addEventListener('click', removeSelected);
  saveListMainViewContentButton.addEventListener('click', saveListMainViewContent);
  moveSelectedUpButton.addEventListener('click', moveSelectedUp);
  moveSelectedDownButton.addEventListener('click', moveSelectedDown);
};
