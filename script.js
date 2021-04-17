const title = document.createElement('header');
const titleText = document.createElement('h1');
const titleParagraph = document.createElement('p');
const mainContent = document.createElement('main');
const inputSection = document.createElement('section');
const taskEntry = document.createElement('input');
const taskButton = document.createElement('button');
const listSection = document.createElement('section');
const ordenedList = document.createElement('ol');
const miscellaneousButtons = document.createElement('section');
const eraseEverythingButton = document.createElement('button');
const deletesCompletedTasks = document.createElement('button');
const saveTasksButton = document.createElement('button');

function insertTitle() {
  title.id = 'title';
  document.body.appendChild(title);
  titleText.id = 'title-text';
  titleText.textContent = 'Minha Lista de Tarefas';
  title.appendChild(titleText);
}

function insertParagraphToTitle() {
  titleParagraph.id = 'funcionamento';
  titleParagraph.textContent = 'Clique duas vezes em um item para marcá-lo como completo';
  title.appendChild(titleParagraph);
}

function createsMainContent() {
  mainContent.id = 'main-content';
  document.body.appendChild(mainContent);
}

function createsInputSection() {
  inputSection.id = 'input-section';
  mainContent.appendChild(inputSection);
}

function createsTaskEntry() {
  taskEntry.id = 'texto-tarefa';
  taskEntry.type = 'text';
  taskEntry.placeholder = 'Digite aqui a nova tarefa';
  inputSection.appendChild(taskEntry);
}

function createsTaskButton() {
  taskButton.id = 'criar-tarefa';
  taskButton.type = 'onclick';
  taskButton.textContent = 'Criar Tarefa';
  inputSection.appendChild(taskButton);
}

function createListSection() {
  listSection.id = 'list-section';
  mainContent.appendChild(listSection);
}

function selectTask(event) {
  const selected = document.querySelector('.selected');
  const addEvent = event.target;
  if (selected !== null) {
    selected.classList.remove('selected');
  }
  addEvent.classList.add('selected');
}

function taskThrough(event) {
  const taskEvent = event.target;
  if (taskEvent.classList.contains('completed')) {
    taskEvent.classList.remove('completed');
  } else {
    taskEvent.classList.add('completed');
  }
}

function createOrdenedList() {
  ordenedList.id = 'lista-tarefas';
  listSection.appendChild(ordenedList);
}

function createsElementsInTheList() {
  const elementList = document.createElement('li');
  elementList.id = 'task';
  elementList.textContent = taskEntry.value;
  elementList.addEventListener('click', selectTask);
  elementList.addEventListener('dblclick', taskThrough);
  ordenedList.appendChild(elementList);
  taskEntry.value = '';
}

function taskButtonEvent() {
  taskButton.addEventListener('click', createsElementsInTheList);
}

function createSectionMiscellaneousButtons() {
  miscellaneousButtons.id = 'miscellaneousButtons';
  mainContent.appendChild(miscellaneousButtons);
}

function createEraseEverythingButton() {
  eraseEverythingButton.id = 'apaga-tudo';
  eraseEverythingButton.textContent = 'Limpar Lista';
  miscellaneousButtons.appendChild(eraseEverythingButton);
  const size = ordenedList.childElementCount;
  for (let index = 0; index < size; index += 1) {
    ordenedList.removeChild(ordenedList.lastElementChild);
  }
}

function eraseEverything() {
  eraseEverythingButton.addEventListener('click', createEraseEverythingButton);
}

function createDeletesCompletedTasks() {
  deletesCompletedTasks.id = 'remover-finalizados';
  deletesCompletedTasks.textContent = 'Remove Finalizados';
  miscellaneousButtons.appendChild(deletesCompletedTasks);
  const completedTask = document.getElementsByClassName('completed');
  const sizeOfCompletedTasks = completedTask.length;
  for (let index = sizeOfCompletedTasks - 1; index >= 0; index -= 1) {
    ordenedList.removeChild(completedTask[index]);
  }
}

function clearsFinish() {
  deletesCompletedTasks.addEventListener('click', createDeletesCompletedTasks);
}

function createSaveTasksButton() {
  saveTasksButton.id = 'salvar-tarefas';
  saveTasksButton.textContent = 'Salvar Tarefas';
  miscellaneousButtons.appendChild(saveTasksButton);
}

function saveTaskList() {
  const tasks = ordenedList.children;
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

 function loadList() {
  const list = localStorage.getItem('list');
  if (list === null || list === ''){
    return;
  }
  const array = list.split(',');
  for (let index = 0; index < array.length; index += 2) {
    const element = document.createElement('li');
    element.innerText = array[index];
    element.classList.add('tarefa');
    element.addEventListener('click', selectTask);
    element.addEventListener('dblclick', taskThrough);
    if (array[index + 1] === 'true') {
      element.classList.add('completed');
    }
    ordenedList.appendChild(element);
  }
}

function addEventSaveList() {
  saveTasksButton.addEventListener('click', saveTaskList);
}

window.onload = function loadPage() {
  insertTitle();
  insertParagraphToTitle();
  createsMainContent();
  createsInputSection();
  createsTaskEntry();
  createListSection();
  createOrdenedList();
  createsTaskButton();
  taskButtonEvent();
  createSectionMiscellaneousButtons();
  createEraseEverythingButton();
  eraseEverything();
  createDeletesCompletedTasks();
  clearsFinish();
  createSaveTasksButton();
  addEventSaveList();
  loadList();
};
