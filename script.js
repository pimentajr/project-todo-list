const addTaskButton = document.getElementById('criar-tarefa');
const taskInput = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function inputBlank() {
  taskInput.value = '';
}

function addTask() {
  const text = taskInput.value;
  if (text !== '') {
    const listItem = document.createElement('li');
    listItem.innerText = text;
    listItem.className = 'listItem';
    taskList.appendChild(listItem);
    inputBlank();
  }
}

function highlight(origin) {
  const itemList = document.getElementsByClassName('listItem');
  for (let index = 0; index < itemList.length; index += 1) {
    const item = itemList[index];
    item.className = 'listItem';
  }
  const listItemOrigin = origin.target;
  listItemOrigin.className = 'listItem selectLi';
}

addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', highlight);
