window.onload = function () {
  const addButton = document.getElementById('criar-tarefa');
  addButton.addEventListener('click', addItem);
};

function addItem() {
  const toDoList = document.getElementById('lista-tarefas');
  const newItem = document.createElement('li');
  toDoList.appendChild(newItem);
  const itemName = document.getElementById('texto-tarefa');
  newItem.innerText = itemName.value;
  newItem.className = 'listItem';
  newItem.addEventListener('click', selectListItem);
  itemName.value = ('');
}
function selectListItem() {
  if (document.querySelector('.selectedListItem') != null) {
    let previousSelection = document.querySelector('.selectedListItem');
    previousSelection.classList.remove('selectedListItem');
  }
  this.classList.add('selectedListItem');
}
