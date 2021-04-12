// get text input
let taskInput = document.getElementById('texto-tarefa');
// get task list
let taskList = document.getElementById('lista-tarefas');
// get submit button
let submitButton = document.getElementById('criar-tarefa');



// Create New Task
function createNewTask(taskInputValue) {
  taskInputValue = taskInput.value
  let newTask = document.createElement('li');
  newTask.innerText = taskInputValue;
  taskList.appendChild(newTask);
  taskInput.value = '';
}