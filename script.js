const title = document.getElementById('title');
title.innerHTML = 'Minhas Lista de Tarefas';

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

function clickButtonAdd () {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', createItemToDo);
}

clickButtonAdd();


function selectedLiItem(event) {
  const itemSelected = document.querySelector('.selected')
  if (itemSelected !== null){
    itemSelected.classList.remove('selected');
  }
  event.target.classList.add('selected')
}

const taskList = document.getElementById('lista-tarefas');
taskList.addEventListener('click', selectedLiItem);

function doneTask(event) {
  const completedTask = event.target.classList.contains('completed')
  if (completedTask) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

const addDoneTask = document.getElementById('lista-tarefas');
addDoneTask.addEventListener('dblclick', doneTask);


