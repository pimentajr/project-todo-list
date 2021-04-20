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

function clearAll() {
  const toDoList = document.getElementById('lista-tarefas');
  const listedItems = document.getElementsByClassName('listItem');
  for (let index = (listedItems.length - 1); listedItems.length > 0; index -= 1) {
    toDoList.removeChild(toDoList.lastChild);
  }
}

function clearCompleted() {
  const listedItems = document.getElementsByClassName('listItem');
  for (let index = (listedItems.length - 1); index >= 0; index -= 1) {
    if (listedItems[index].classList.contains('completed')) {
      listedItems[index].parentNode.removeChild(listedItems[index]);
    }
  }
}

window.onload = function () {
  const addButton = document.getElementById('criar-tarefa');
  addButton.addEventListener('click', addItem);
  const clearAllButton = document.getElementById('apaga-tudo');
  clearAllButton.addEventListener('click', clearAll);
  const clearCompletedButton = document.getElementById('remover-finalizados');
  clearCompletedButton.addEventListener('click', clearCompleted);
};
