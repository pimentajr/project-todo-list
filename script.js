const title = document.getElementById('title');
title.innerHTML = 'Minha Lista de Tarefas';

const paragraph = document.getElementById('funcionamento');
paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';

function createItemToDo() {
  const listToDo = document.getElementById('lista-tarefas');
  const descriptionToDo = document.getElementById('texto-tarefa').value;
  if (descriptionToDo !== '') {
    const itemToDo = document.createElement('li');
    listToDo.appendChild(itemToDo).innerText = descriptionToDo;
    document.getElementById('texto-tarefa').value = '';
  }
}

function clickButtonAdd() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', createItemToDo);
}

clickButtonAdd();

// ->> Ajuda da Mih
function selectedLiItem(event) {
  const itemSelected = document.querySelector('.selected');
  if (itemSelected !== null) {
    itemSelected.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

const taskList = document.getElementById('lista-tarefas');
taskList.addEventListener('click', selectedLiItem);

// ->> Ajuda da Mih
function doneTask(event) {
  const completedTask = event.target.classList.contains('completed');
  if (completedTask) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

const addDoneTask = document.getElementById('lista-tarefas');
addDoneTask.addEventListener('dblclick', doneTask);

// ->> https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
function cleanList() {
  const liList = document.getElementById('lista-tarefas');
  liList.innerHTML = '';
}

const cleanButton = document.getElementById('apaga-tudo');
cleanButton.addEventListener('click', cleanList);

function removeCompleted() {
  const finished = document.querySelectorAll('.completed');
  for (let index = 0; index < finished.length; index += 1) {
    finished[index].remove();
  }
}

const finishButton = document.getElementById('remover-finalizados');
finishButton.addEventListener('click', removeCompleted);


//->> Ajuda Hugo Somers, Julio Filizzola.
function saveList() {
  const createdList = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('lista', createdList);
}

const savedList = document.getElementById('salvar-tarefas');
savedList.addEventListener('click', saveList);

let ol = document.getElementById('lista-tarefas');

let aleatoria = localStorage.getItem('lista');

ol.innerHTML = aleatoria;

//->> Ajuda, Jean Esteves, Juli Filizzola e Hugo Somers

const moveUp = document.getElementById('mover-cima');
moveUp.addEventListener('click', () => {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem && selectedItem !== taskList.childNodes[0]) {
    const previousItem = selectedItem.previousSibling;
    taskList.insertBefore(selectedItem, previousItem);
  }
});

const moveDown = document.querySelector('#mover-baixo');
moveDown.addEventListener('click', () => {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem && selectedItem !== taskList.lastChild) {
    const nextItem = selectedItem.nextSibling;
    nextItem.insertAdjacentElement('afterend', selectedItem);
  }
});

const removeSelectBttn = document.querySelector('#remover-selecionado');

removeSelectBttn.addEventListener('click', () => {
  const selectedItems = document.querySelector('.selected');
  selectedItems.remove();
});
