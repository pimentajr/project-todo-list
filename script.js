// Creating new list item
const button = document.getElementById('criar-tarefa');
const inputText = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function teste() {
  const newTask = inputText.value;
  const newListTask = document.createElement('li');
  newListTask.innerText = newTask;
  newListTask.className = 'item-list';
  taskList.appendChild(newListTask);

  inputText.value = '';
}

button.addEventListener('click', teste);

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
