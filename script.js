const addTaskInput = document.getElementById('texto-tarefa');
const addTaskButton = document.getElementById('criar-tarefa');

const taskList = document.getElementById('lista-tarefas');

function toggleTaskCompleted(e) {
  const task = e.target;

  task.classList.toggle('completed');
}

let selectedTask;

function selectTask(e) {
  const task = e.target;
  
  task.style.backgroundColor = 'rgb(128, 128, 128)';

  if (selectedTask) {
    selectedTask.style.backgroundColor = null;
  }
  selectedTask = task;
}

function addTask(text) {
  const newTask = document.createElement('li');
  newTask.classList.add('task');
  newTask.addEventListener('click', selectTask);
  newTask.addEventListener('dblclick', toggleTaskCompleted);
  newTask.innerText = text;

  taskList.appendChild(newTask);

  return newTask;
}

function clearInput() {
  addTaskInput.value = '';
  addTaskInput.focus();
}

addTaskButton.addEventListener('click', () => {
  addTask(addTaskInput.value);
  clearInput();
});

addTaskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask(addTaskInput.value);
    clearInput();
  }
});

function clearList() {
  while (taskList.lastElementChild) {
    taskList.removeChild(taskList.lastElementChild);
  }
}

const clearButton = document.getElementById('apaga-tudo');

clearButton.addEventListener('click', clearList);

function clearCompleted() {
  const completedTasks = document.getElementsByClassName('completed');

  while (completedTasks.length) {
    completedTasks[0].remove();
  }
}

const clearCompletedButton = document.getElementById('remover-finalizados');

clearCompletedButton.addEventListener('click', clearCompleted);

function saveList() {
  if (!Storage) {
    return;
  }

  const rawList = [];

  const allTasks = taskList.getElementsByClassName('task');

  if (!allTasks.length) {
    localStorage.removeItem('taskList');
    return;
  }

  for (let i = 0; i < allTasks.length; i += 1) {
    rawList.push({
      text: allTasks[i].innerText,
      completed: allTasks[i].classList.contains('completed'),
    });
  }

  let listJson = JSON.stringify(rawList);

  localStorage.setItem('taskList', listJson);
}

const saveButton = document.getElementById('salvar-tarefas');

saveButton.addEventListener('click', saveList);

function loadList() {
  if (!Storage || !localStorage.taskList) {
    return;
  }

  const taskList = JSON.parse(localStorage.taskList);

  for (let i = 0; i < taskList.length; i += 1) {
    let newTask = addTask(taskList[i].text);

    if (taskList[i].completed) {
      newTask.classList.add('completed');
    }
  }
}

loadList();

function removeSelected() {
  selectedTask.remove();
}

const removeSelectedButton = document.getElementById('remover-selecionado');

removeSelectedButton.addEventListener('click', removeSelected);

function moveUp() {
  const previousTask = selectedTask.previousSibling;

  if (!selectedTask || !previousTask) {
    return;
  }

  const swap = previousTask.cloneNode(true);

  previousTask.remove();

  selectedTask.insertAdjacentElement('afterend', swap);
}

const moveUpButton = document.getElementById('mover-cima');

moveUpButton.addEventListener('click', moveUp);

function moveDown() {
  const nextTask = selectedTask.nextSibling;

  if (!selectedTask || !nextTask) {
    return;
  }

  const swap = nextTask.cloneNode(true);

  nextTask.remove();

  selectedTask.insertAdjacentElement('beforebegin', swap);
}

const moveDownButton = document.getElementById('mover-baixo');

moveDownButton.addEventListener('click', moveDown);
