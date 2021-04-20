const addTaskInputField = document.getElementById('texto-tarefa');
const addTaskButton = document.getElementById('criar-tarefa');
const mainView = document.getElementById('lista-tarefas');

function toggleCompleted(event) {
  if (!event.target.classList.contains('task')) {
    return;
  }

  event.target.classList.toggle('completed');
}

function toggleSelected(event) {
  if (!event.target.classList.contains('task')) {
    return;
  }

  const currentlySelected = document.querySelector('.selected');

  if (currentlySelected && currentlySelected !== event.target) {
    currentlySelected.classList.remove('selected');
  }

  event.target.classList.toggle('selected');
}

function addTaskToMainView() {
  const taskItem = document.createElement('li');

  taskItem.innerText = addTaskInputField.value;
  taskItem.classList.add('task');
  mainView.appendChild(taskItem);
  addTaskInputField.value = '';
}

window.onload = () => {
  addTaskButton.addEventListener('click', addTaskToMainView);
  mainView.addEventListener('click', toggleSelected);
  mainView.addEventListener('dblclick', toggleCompleted);
};
