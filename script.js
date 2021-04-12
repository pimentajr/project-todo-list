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
  itemName.value = ('');

}
