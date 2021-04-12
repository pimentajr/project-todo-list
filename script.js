const toDoList = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
const createTaskBtn = document.querySelector('#criar-tarefa');
function addTask() {
  const newTask = document.createElement('li');
  newTask.innerText = input.value;
  toDoList.appendChild(newTask);
  input.value = '';
}

createTaskBtn.addEventListener('click', addTask);

function highlightItem(event) {
  const item = event.target;
  const highlighted = document.querySelector('.highlighted');
  if (highlighted) {
    highlighted.classList.remove('highlighted');
  }
  item.classList.add('highlighted');
}

toDoList.addEventListener('click', highlightItem);

function completeTask(event) {
  const task = event.target;
  if (task.className.includes('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

toDoList.addEventListener('dblclick', completeTask);

const clearBtn = document.querySelector('#apaga-tudo');

function clearList() {
  const itemsList = document.querySelector('#lista-tarefas');
  while (itemsList.firstChild) {
    itemsList.firstChild.remove();
  }
}

clearBtn.addEventListener('click', clearList);

const clearCompletedBtn = document.querySelector('#remover-finalizados');

function removeCompleted() {
  const completedItems = document.querySelectorAll('.completed');
  for (let index = 0; index < completedItems.length; index += 1) {
    completedItems[index].remove();
  }
}

clearCompletedBtn.addEventListener('click', removeCompleted);

const saveListBtn = document.querySelector('#salvar-tarefas');

function saveClasses(lista) {
  const classes = [];
  for (let index = 0; index < lista.length; index += 1) {
    classes.push(lista[index].className);
  }
  return classes;
}

function saveTask(lista) {
  const task = [];
  for (let index = 0; index < lista.length; index += 1) {
    task.push(lista[index].innerText);
  }
  return task;
}

function saveList() {
  const lista = document.querySelectorAll('#lista-tarefas li');
  const listClasses = saveClasses(lista);
  const listTasks = saveTask(lista);
  localStorage.setItem('classes', listClasses);
  localStorage.setItem('tasks', listTasks);
}

saveListBtn.addEventListener('click', saveList);

if (localStorage.tasks) {
  const tasksArray = localStorage.tasks.split(',');
  const classesArray = localStorage.classes.split(',');
  for (let index = 0; index < tasksArray.length; index += 1) {
    const newTask = document.createElement('li');
    newTask.innerText = tasksArray[index];
    newTask.className = classesArray[index];
    toDoList.appendChild(newTask);
  }
}
