let taskList;

function createTaskElement(task) {
  const element = document.createElement('li');
  element.innerText = task;
  return element;
}

function addTaskToList(task) {
  taskList.appendChild(createTaskElement(task));
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

function onClickTask(event) {
  const task = event.target;
  selectTask(task);
  unselectAllTasksUnless(task);
}

function onDoubleClickTask(event) {
  event.target.classList.toggle('completed');
}

function clearAllTasks() {
  taskList.innerHTML = '';
}

function clearCompletedTasks() {
  const completedTasks = taskList.querySelectorAll('.completed');
  completedTasks.forEach((element) => {
    taskList.removeChild(element);
  });
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

function onClickButtonClearCompletedTasks() {
  clearCompletedTasks();
}

function bindListeners() {
  document.querySelector('#criar-tarefa')
    .addEventListener('click', onClickButtonAdd);
  document.querySelector('#apaga-tudo')
    .addEventListener('click', onClickButtonClearList);
  document.querySelector('#remover-finalizados')
    .addEventListener('click', onClickButtonClearCompletedTasks);

  taskList.addEventListener('click', onClickTask);
  taskList.addEventListener('dblclick', onDoubleClickTask);
}

window.onload = () => {
  taskList = document.querySelector('#lista-tarefas');
  bindListeners();
};
