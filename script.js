// cria lista de elementos;

const btnTasks = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');
const inputText = document.querySelector('#texto-tarefa');
const navi = document.getElementById('navigation');
const body = document.querySelector('body');
// give selected to a testk
function selectedTask(event) {  
  const li = event.target;
  const list = ol.childNodes;
  for (let i = 0; i < list.length; i += 1) {
    list[i].classList.remove('selected');
  }
  li.classList.add('selected');
}

// give completed to a task
function completedTask(event) {
  event.target.classList.toggle('completed');
}

// create Lists;
btnTasks.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = inputText.value;
  inputText.value = '';
  if (li.innerHTML === '') {
    alert('Adicone um item');
  } else {
    li.addEventListener('click', selectedTask);
    li.addEventListener('dblclick', completedTask);
    ol.appendChild(li);
  }
});
// despara o clear button
function clearTasks() {
  const li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1) {
    li[i].remove();
  }
}
// cria o clear button
function createClearBtn() {
  const button = document.createElement('button');
  button.setAttribute('id', 'apaga-tudo');
  button.innerHTML = 'Limpar lista';
  navi.appendChild(button);
  button.addEventListener('click', clearTasks);
}
createClearBtn();

function clearCompleted() {
  const li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1) {
    if (li[i].classList.contains('completed')) {
      li[i].remove();
    }
  }
}

// cria o clear completed task
function createClearCompletedTaskBtn() {
  const button = document.createElement('button');
  button.setAttribute('id', 'remover-finalizados');
  button.innerHTML = 'Limpar Completos';
  button.style.marginLeft = '10px';
  navi.appendChild(button);
  button.addEventListener('click', clearCompleted);
}
createClearCompletedTaskBtn();

// salva tasks
function saveTasks() {
  localStorage.setItem('listas', ol.innerHTML);
}

// cria save button
function createSaveBtn() {
  const buttonSave = document.createElement('button');
  buttonSave.setAttribute('id', 'salvar-tarefas');
  buttonSave.innerHTML = 'Salvar Tarefas';
  buttonSave.style.marginLeft = '10px';
  navi.appendChild(buttonSave);
  buttonSave.addEventListener('click', saveTasks);
}
createSaveBtn();

function getList() {
  ol.innerHTML = localStorage.getItem('listas');
  const li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1) {
    li[i].addEventListener('click', selectedTask);
    li[i].addEventListener('dblclick', completedTask);
  }
}
getList();

function upMove() {
  const selected = document.querySelector('.selected');
  if (selected.previousElementSibling === null) {
    return false;
  }
  ol.insertBefore(selected, selected.previousElementSibling);
}

function downMove() {
  const selected = document.querySelector('.selected');
  if (selected.nextElementSibling === null) {
    return false;
  }
  ol.insertBefore(selected.nextElementSibling, selected);
}

// cria butoes de mover
function createMoveBtns() {
  const up = document.createElement('button');
  up.style.marginLeft = '10px';
  up.setAttribute('id', 'mover-cima');
  up.innerHTML = 'up';
  const down = document.createElement('button');
  down.style.marginLeft = '10px';
  down.innerHTML = 'down';
  down.setAttribute('id', 'mover-baixo');
  navi.appendChild(up);
  navi.appendChild(down);
  down.addEventListener('click', downMove)
  up.addEventListener('click', upMove)
}
createMoveBtns();

function removeSelected() {
  const selected = document.querySelector('.selected');
  selected.remove();
}

function createBtnClearSelected() {
  const button = document.createElement('button');
  button.setAttribute('id', 'remover-selecionado');
  button.innerHTML = 'Remove Item';
  button.style.marginLeft = '10px';
  navi.appendChild(button);
  button.addEventListener('click', removeSelected)
}
createBtnClearSelected();

window.onload = function() {
  document.querySelector('.selected').classList.remove('selected');
}