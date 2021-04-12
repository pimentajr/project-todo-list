const inputElement = document.getElementById('texto-tarefa');
const toDoList = document.getElementById('lista-tarefas');
const newTaskButton = document.getElementById('criar-tarefa');

function newTask() {
  const task = document.createElement('li');
  task.textContent = inputElement.value;
  toDoList.appendChild(task);
  inputElement.value = '';
}

function selectTask(event) {
  const previouslySelectedElement = document.getElementsByClassName('selected')[0];
  if (previouslySelectedElement) {
    previouslySelectedElement.classList.remove('selected');
  }
  const selectedTask = event.target;
  selectedTask.classList.add('selected');
}

newTaskButton.addEventListener('click', newTask);
toDoList.addEventListener('click', selectTask);
