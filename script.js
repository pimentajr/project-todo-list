const addBtn = document.getElementById('criar-tarefa');

function addListItem() {
  const task = document.getElementById('text-tarefa');
  const listItem = document.createElement('li');
  const taskList = document.getElementById('lista-tarefas');
  listItem.innerText = task.value;
  taskList.appendChild(listItem);
  task.value = '';
}

addBtn.addEventListener('click', addListItem);
