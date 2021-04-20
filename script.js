const addTaskInputField = document.getElementById('texto-tarefa');
const addTaskButton = document.getElementById('criar-tarefa');
const clearAllButton = document.getElementById('apaga-tudo');
const removeCompletedButton = document.getElementById('remover-finalizados');
const saveListMainViewContentButton = document.getElementById('salvar-tarefas');
const mainView = document.getElementById('lista-tarefas');

function saveListMainViewContent() {
  localStorage.setItem('mainViewContent', mainView.innerHTML);
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

  event.target.classList.toggle('selected');
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
  saveListMainViewContentButton.addEventListener('click', saveListMainViewContent);
};
