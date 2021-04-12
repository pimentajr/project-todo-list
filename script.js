const addTaskForm = document.getElementById('add-task-form');
const taskList = document.getElementById('lista-tarefas');

function addTask(event) {
  let addTaskField = document.getElementById('texto-tarefa');
  let taskItem = document.createElement('li');

  taskItem.textContent = addTaskField.value;
  taskItem.classList.add('task');
  taskList.appendChild(taskItem);
  addTaskField.value = '';
  event.preventDefault();
}

window.onload = () => {
  addTaskForm.addEventListener('submit', addTask);
};