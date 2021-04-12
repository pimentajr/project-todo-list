const inputElement = document.getElementById('texto-tarefa');
const toDoList = document.getElementById('lista-tarefas');
const newTaskButton = document.getElementById('criar-tarefa');

function newTask() {
  const task = document.createElement('li');
  task.textContent = inputElement.value;
  toDoList.appendChild(task);
  inputElement.value = '';
}

newTaskButton.addEventListener('click', newTask);
