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
    item.id = '';
  }
  const listItemOrigin = origin.target;
  listItemOrigin.id = 'selectLi';
}

function completedTask(origin) {
  const listItemOrigin = origin.target;
  if (listItemOrigin.className === 'listItem completed') {
    listItemOrigin.className = 'listItem';
  } else {
    listItemOrigin.className = 'listItem completed';
  }
}

addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', highlight);
taskList.addEventListener('dblclick', completedTask);
