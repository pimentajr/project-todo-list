// Retrieve itens
const liItens = document.getElementsByTagName('li');
const inputText = document.getElementById('texto-tarefa');
const orderedList = document.getElementById('lista-tarefas');
const createActivity = document.getElementById('criar-tarefa');
const deleteAllItens = document.getElementById('apaga-tudo');
const deleteCompletedItem = document.getElementById('remover-finalizados');

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

function deleteAllLiItens() {
  for (let index = 0; index < orderedList.children.length;) {
    orderedList.removeChild(orderedList.lastChild);
  }
}

function deleteCompletedItens() {
  const completed = document.getElementsByClassName('completed');
  for (let index = 0; index < completed.length;) {
    orderedList.removeChild(completed[index]);
  }
}

function createEventlisteners() {
  createActivity.addEventListener('click', createAndAddLiItem);
  deleteAllItens.addEventListener('click', deleteAllLiItens);
  deleteCompletedItem.addEventListener('click', deleteCompletedItens);
  createLiEventListener();
}

function initialize() {
  createEventlisteners();
}

window.onload = initialize;
