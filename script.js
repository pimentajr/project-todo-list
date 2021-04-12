const selectedClass = 'selected';
const inputTask = document.getElementById('texto-tarefa');
const buttonCreateTask = document.getElementById('criar-tarefa');
const olTaskList = document.getElementById('lista-tarefas');

const li = document.createElement('li');

function createTaskHandler() {
  const task = inputTask.value;

  const newTask = li.cloneNode();
  newTask.innerText = task;
  olTaskList.appendChild(newTask);

  inputTask.value = '';
  inputTask.focus();
}

function removeAllClasses(className) {
  const elements = document.getElementsByClassName(className);

  for (let index = 0; index < elements.length; index += 1) {
    elements[index].classList.remove(className);
  }
}

function selectTask(event) {
  const { target } = event;

  if (target.tagName === 'LI') {
    removeAllClasses(selectedClass);
    target.classList.add(selectedClass);
  }
}

function onLoad() {
  inputTask.focus();
  buttonCreateTask.addEventListener('click', createTaskHandler);
  olTaskList.addEventListener('click', selectTask);
}

window.onload = onLoad;
