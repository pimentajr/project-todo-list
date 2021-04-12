const createTaskButton = document.querySelector('#criar-tarefa');

function addTaskOnList() {
  const textFromInputArea = document.getElementsByTagName('input')[0].value;
  const toDoList = document.createElement('li');
  const toDoOrderedList = document.querySelector('#lista-tarefas');
  toDoList.className = 'tasks';
  toDoList.innerHTML = textFromInputArea;
  toDoOrderedList.appendChild(toDoList);
}

function clearInputField() {
  document.getElementsByTagName('input')[0].value = '';
}

createTaskButton.addEventListener('click', addTaskOnList);
createTaskButton.addEventListener('click', clearInputField);

const orderedList = document.querySelector('#lista-tarefas');

function changeListItemBackgroundColor(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

orderedList.addEventListener('click', changeListItemBackgroundColor);
