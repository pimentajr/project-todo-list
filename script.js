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
  const finished = document.getElementsByClassName('completed');
  for (let index = 0; index < finished.length; index++) {
    const completedList = document.getElementById('lista-tarefas');
    completedList.removeChild(finished[index]);
  }
}

const finishButton = document.getElementById('remover-finalizados');
finishButton.addEventListener('click',removeCompleted);
