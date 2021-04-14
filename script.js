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
const itemList = document.getElementsByClassName('listItem');

function highlight(origin) {
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

const cleanButton = document.getElementById('apaga-tudo');

function clearTaskList() {
  const itemList2 = document.getElementsByClassName('listItem').length;
  for (let index = 0; index < itemList2; index += 1) {
    const item2 = itemList[0];
    taskList.removeChild(item2);
  }
}

cleanButton.addEventListener('click', clearTaskList);

const cleanCompletedButton = document.getElementById('remover-finalizados');
const completedList = document.getElementsByClassName('completed');

function clearCompletedList() {
  const completedListL = document.getElementsByClassName('completed').length;
  for (let index = 0; index < completedListL; index += 1) {
    const item3 = completedList[0];
    taskList.removeChild(item3);
  }
}

cleanCompletedButton.addEventListener('click', clearCompletedList);

addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', highlight);
taskList.addEventListener('dblclick', completedTask);
