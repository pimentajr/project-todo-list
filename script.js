const addBtn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const deleteTaskListBtn = document.getElementById('apaga-tudo');
const deleteCompletedListItens = document.getElementById('remover-finalizados');
const saveTaskListBtn = document.getElementById('salvar-tarefas');

function generateSavedTaskList(tasks) {
  for (let index = 0; index < tasks.length; index += 1) {
    const savedListItem = document.createElement('li');
    savedListItem.innerText = tasks[index];
    savedListItem.className = JSON.parse(localStorage.getItem(`taskListItem${index}Cla`));
    taskList.appendChild(savedListItem);
  }
}

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

function deleteCompletedItems() {
  while (document.querySelector('.completed')) {
    taskList.removeChild(document.querySelector('.completed'));
  }
}

function saveTaskList() {
  const taskListItems = document.getElementsByTagName('li');
  for (let index = 0; index < taskListItems.length; index += 1) {
    localStorage.setItem(`taskListItem${index}`, JSON.stringify(taskListItems[index].innerText));
    localStorage.setItem(`taskListItem${index}Cla`, JSON.stringify(taskListItems[index].className));
  }
  localStorage.setItem('numberOfItems', JSON.stringify(taskListItems.length));
}

function getSavedTaskList() {
  const savedTaskListItems = [];
  for (let index = 0; index < parseInt(localStorage.getItem('numberOfItems'), 10); index += 1) {
    savedTaskListItems.push(JSON.parse(localStorage.getItem(`taskListItem${index}`)));
  }
  generateSavedTaskList(savedTaskListItems);
}

window.onload = getSavedTaskList;

addBtn.addEventListener('click', addListItem);

taskList.addEventListener('click', changeListItemBackgroundColor);

taskList.addEventListener('dblclick', makeTaskCompleted);

deleteTaskListBtn.addEventListener('click', deleteTaskList);

deleteCompletedListItens.addEventListener('click', deleteCompletedItems);

saveTaskListBtn.addEventListener('click', saveTaskList);
