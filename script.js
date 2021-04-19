// Some global variables
const buttonNewTask = document.getElementById('criar-tarefa');
const buttonCleanAll = document.getElementById('apaga-tudo');
const buttonCleanCompleted = document.getElementById('remover-finalizados');
const inputText = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

// Creating new list item
function teste() {
  const newTask = inputText.value;
  const newListTask = document.createElement('li');
  newListTask.innerText = newTask;
  newListTask.className = 'item-list';
  taskList.appendChild(newListTask);

  inputText.value = '';
}
buttonNewTask.addEventListener('click', teste);

// Changing item background
function giveSelect(e) {
  const clickedItem = e.target;
  const listItems = document.querySelectorAll('.item-list');
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].classList.remove('selected');
  }
  clickedItem.className += ' selected';
}
taskList.addEventListener('click', giveSelect);

// Changing text decoration
function changeDecoration(e) {
  if (e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
}
taskList.addEventListener('dblclick', changeDecoration);

// Button clean all
function cleanAll() {
  const list = document.querySelectorAll('li');
  for (let index = 0; index < list.length; index += 1) {
    list[index].remove();
  }
}
buttonCleanAll.addEventListener('click', cleanAll);
