window.onload = function () {
  const addButton = document.getElementById('criar-tarefa');
  addButton.addEventListener('click', addItem);
};
function selectListItem() {
  if (document.querySelector('.selectedListItem') != null) {
    const previousSelection = document.querySelector('.selectedListItem');
    previousSelection.classList.remove('selectedListItem');
  }
  this.classList.add('selectedListItem');
}

function completeTask() {
  if (this.classList.contains('completed')) {
    this.classList.remove('completed');
  } else {
    this.classList.add('completed');
  }
}

function addItem() {
  const toDoList = document.getElementById('lista-tarefas');
  const newItem = document.createElement('li');
  toDoList.appendChild(newItem);
  const itemName = document.getElementById('texto-tarefa');
  newItem.innerText = itemName.value;
  newItem.className = 'listItem';
  newItem.addEventListener('click', selectListItem);
  newItem.addEventListener('dblclick', completeTask);
  itemName.value = ('');
}
