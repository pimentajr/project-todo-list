const addBtn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const deleteBtn = document.getElementById('apaga-tudo');
function addListItem() {
  const task = document.getElementById('texto-tarefa');
  const listItem = document.createElement('li');
  listItem.innerText = task.value;
  taskList.appendChild(listItem);
  task.value = '';
}

function changeListItemBackgroundColor(event) {
  if (document.getElementsByClassName('selected')[0]) {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function makeTaskCompleted(event) {
  event.target.classList.toggle('completed');
}

function deleteTaskList() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

addBtn.addEventListener('click', addListItem);

taskList.addEventListener('click', changeListItemBackgroundColor);

taskList.addEventListener('dblclick', makeTaskCompleted);

deleteBtn.addEventListener('click', deleteTaskList);
