const addBtn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function addListItem() {
  const task = document.getElementById('texto-tarefa');
  const listItem = document.createElement('li');
  listItem.innerText = task.value;
  taskList.appendChild(listItem);
  task.value = '';
}

function changeListItemBackgroundColor(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
addBtn.addEventListener('click', addListItem);

taskList.addEventListener('click', changeListItemBackgroundColor)
