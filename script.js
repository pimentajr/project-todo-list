const createTaskButton = document.querySelector('#criar-tarefa');

function addTaskOnList() {
  const textFromInputArea = document.getElementsByTagName('input')[0].value;
  let toDoList = document.createElement('li');
  const toDoOrderedList = document.querySelector('#lista-tarefas');
  toDoList.innerHTML = textFromInputArea;
  toDoOrderedList.appendChild(toDoList);
};

function clearInputField() {
  document.getElementsByTagName('input')[0].value = '';
}

createTaskButton.addEventListener('click', addTaskOnList);
createTaskButton.addEventListener('click', clearInputField);