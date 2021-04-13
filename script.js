const createTaskButton = document.querySelector('#criar-tarefa');
const taskInput = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const deleteListButton = document.querySelector('#apaga-tudo');
const finalizedButton = document.querySelector('#remover-finalizados');
const saveListButton = document.querySelector('#salvar-tarefas');
const upButton = document.querySelector('#mover-cima');
const downButton = document.querySelector('#mover-baixo');
const deleteSelectedButoon = document.querySelector('#remover-selecionado');

function createTask() {
  const textTask = taskInput.value;
  const newTask = document.createElement('li');

  newTask.innerText = textTask;
  newTask.className = 'task';
  taskList.appendChild(newTask);
  taskInput.value = '';
}

function taskSelection(task) {
  const allTasks = document.querySelectorAll('.task');
  const selectedTask = task.target;

  for (let index = 0; index < allTasks.length; index += 1) {
    allTasks[index].classList.remove('selected');
  }
  selectedTask.classList.add('selected');
}

function completedTask(task) {
  const completedItem = task.target.classList;
  const haveCompleted = completedItem.contains('completed');
  // haveCompleted ? completedItem.remove('completed') : completedItem.add('completed');
  if (haveCompleted) {
    completedItem.remove('completed');
  } else {
    completedItem.add('completed');
  }
}

function deleteList() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function deleteFinalizedTasks() {
  const finalizedTasksList = document.querySelectorAll('.completed');

  for (let index = 0; index < finalizedTasksList.length; index += 1) {
    taskList.removeChild(finalizedTasksList[index]);
  }
}

function saveList() {
  const allTasks = document.querySelectorAll('.task');
  const listToSave = {};

  for (let index = 0; index < allTasks.length; index += 1) {
    const taskText = allTasks[index].innerText;
    const taskClass = allTasks[index].className;
    listToSave[index] = `${taskText},${taskClass}`;
  }
  localStorage.setItem('savedList', JSON.stringify(listToSave));
}

function recoverList() {
  const savedList = JSON.parse(localStorage.getItem('savedList'));

  for (const key in savedList) {
    const newTask = document.createElement('li');
    const taskNameAndClass = savedList[key].split(',');
    newTask.innerText = taskNameAndClass[0];
    newTask.className = taskNameAndClass[1];
    taskList.appendChild(newTask);
  }
}

function moveUp() {
  const currentTask = document.querySelector('.selected');

  if (currentTask !== null && currentTask !== taskList.firstChild) {
    const previousTask = currentTask.previousElementSibling;
    previousTask.insertAdjacentElement('beforebegin', currentTask);
  }
}

function moveDown() {
  const currentTask = document.querySelector('.selected');

  if (currentTask !== null && currentTask !== taskList.lastElementChild) {
    const nextTask = currentTask.nextElementSibling;
    nextTask.insertAdjacentElement('afterend', currentTask);
  }
}

function deleteSelectTask() {
  const selectedTask = document.querySelector('.selected');

  if (selectedTask !== null) {
    taskList.removeChild(selectedTask);
  }
}

window.onload = recoverList;

createTaskButton.addEventListener('click', createTask);
taskList.addEventListener('click', taskSelection);
taskList.addEventListener('dblclick', completedTask);
deleteListButton.addEventListener('click', deleteList);
finalizedButton.addEventListener('click', deleteFinalizedTasks);
saveListButton.addEventListener('click', saveList);
upButton.addEventListener('click', moveUp);
downButton.addEventListener('click', moveDown);
deleteSelectedButoon.addEventListener('click', deleteSelectTask);
