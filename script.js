// get text input
let taskInput = document.getElementById('text-tarefa');
// get text inpute value
let taskInputValue = taskInput.value
// get task list
let taskList = document.getElementById('lista-tarefas');
// get submit button
let submitButton = document.getElementById('criar-tarefa');

function createNewTask(taskInputValue) {
  let newTask = document.createElement(li);
  taskList.appendChild(newTask).innerText(taskInputValue);
  taskInputValue = '';
}