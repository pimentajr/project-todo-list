let taskList;

window.onload = () => {
  taskList = document.querySelector('#lista-tarefas');
  bindListeners();
};

function bindListeners() {
  document.querySelector('#criar-tarefa')
    .addEventListener('click', onClickButtonAdd);
  document.querySelector('#apaga-tudo')
    .addEventListener('click', onClickButtonClearList);

  taskList.addEventListener('click', onClickTask);
  taskList.addEventListener('dblclick', onDoubleClickTask);
}

function onClickButtonAdd() {
  const taskText = document.querySelector('#texto-tarefa');
  if (taskText.value) {
    addTaskToList(taskText.value);
    taskText.value = null;
  }
}

function onClickButtonClearList() {
  clearAllTasks();
}

function addTaskToList(task) {
  taskList.appendChild(createTaskElement(task));
}

function createTaskElement(task) {
  const element = document.createElement('li');
  element.innerText = task;
  return element;
}

function onClickTask(event) {
  const task = event.target;
  selectTask(task);
  unselectAllTasksUnless(task);
}

function selectTask(task) {
  task.classList.toggle('selected');
}

function unselectAllTasksUnless(task) {
  Array.from(taskList.children).forEach((element) => {
    if (element === task) return;
    element.classList.remove('selected');
  });
}

function onDoubleClickTask(event) {
  event.target.classList.toggle('completed');
}

function clearAllTasks() {
  taskList.innerHTML = '';
}
