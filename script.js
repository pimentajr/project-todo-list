window.onload = () => {
  function bindListeners() {
    document.querySelector('#criar-tarefa').onclick = onClickAddButton;
  }

  bindListeners();
};

function onClickAddButton() {
  const taskText = document.querySelector('#texto-tarefa');
  if (taskText.value) {
    addTaskToList(taskText.value);
    taskText.value = null;
  }
}

function addTaskToList(task) {
  document.querySelector('#lista-tarefas')
    .appendChild(createTaskElement(task));
}

function createTaskElement(task) {
  const element = document.createElement('li');
  element.innerText = task;
  return element;
}
