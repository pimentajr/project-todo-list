// Retrieve itens
const liItens = document.getElementsByTagName('li');
const inputText = document.getElementById('texto-tarefa');
const orderedList = document.getElementById('lista-tarefas');
const createActivity = document.getElementById('criar-tarefa');
const deleteAllItems = document.getElementById('apaga-tudo');
const deleteCompletedItem = document.getElementById('remover-finalizados');
const completed = document.getElementsByClassName('completed');
const saveButton = document.getElementById('savar-tarefas');

// Add selected class to Li
function selectedItem(event) {
  for (let index = 0; index < liItens.length; index += 1) {
    liItens[index] = liItens[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

// Mark a line through all completed itens
function crossedItem(event) {
  if (event.target.className !== '' && event.target.className !== 'selected') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function createLiEventListener() {
  for (let index = 0; index < liItens.length; index += 1) {
    liItens[index].addEventListener('click', selectedItem);
    liItens[index].addEventListener('dblclick', crossedItem);
  }
}

// Create li element
function createAndAddLiItem() {
  const createLi = document.createElement('li');
  const text = inputText.value;
  createLi.innerText = text;
  orderedList.appendChild(createLi);
  inputText.value = '';
  createLiEventListener();
}

function deleteAllLiItems() {
  for (let index = 0; index < orderedList.children.length;) {
    orderedList.removeChild(orderedList.lastChild);
  }
  localStorage.clear();
}

function deleteCompletedItems() {
  for (let index = 0; index < completed.length;) {
    orderedList.removeChild(completed[index]);
  }
}

function saveItens() {
  localStorage.clear();
  for (let index = 0; index < liItens.length; index += 1) {
    localStorage.setItem(`liText${index}`, `${liItens[index].innerText}`);
    localStorage.setItem(`liClass${index}`, `${liItens[index].className}`);
  }
}

function modifyForSavedItens() {
  for (let index = 0; index < (localStorage.length / 2); index += 1) {
    const createLiItem = document.createElement('li');
    const savedItemText = localStorage.getItem(`liText${index}`);
    const savedItemClass = localStorage.getItem(`liClass${index}`);
    createLiItem.innerText = savedItemText;
    createLiItem.className = savedItemClass;
    orderedList.appendChild(createLiItem);
  }
}

function createEventlisteners() {
  createActivity.addEventListener('click', createAndAddLiItem);
  deleteAllItems.addEventListener('click', deleteAllLiItems);
  deleteCompletedItem.addEventListener('click', deleteCompletedItems);
  saveButton.addEventListener('click', saveItens);
  createLiEventListener();
}

function initialize() {
  modifyForSavedItens();
  createEventlisteners();
}

window.onload = initialize;
