let taskList;

window.onload = () => {
  taskList = document.querySelector('#lista-tarefas');
  bindListeners();
};

function bindListeners() {
  document.querySelector('#criar-tarefa')
    .addEventListener('click', onClickAddButton);

  taskList.addEventListener('click', onClickTask);
  taskList.addEventListener('dblclick', onDoubleClickTask);
}

function onClickAddButton() {
  const taskText = document.querySelector('#texto-tarefa');
  if (taskText.value) {
    addTaskToList(taskText.value);
    taskText.value = null;
  }
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
