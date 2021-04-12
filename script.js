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

// Select item
taskList.addEventListener('click',function(event) {
let listItem = document.getElementsByTagName('li');
for (key of listItem){
  key.style.backgroundColor= '';
}
event.target.style.backgroundColor = 'rgb(128, 128, 128)'})

// Strike-Unstrike Item
taskList.addEventListener('dblclick',function(event){
  event.target.classList.toggle('completed');
})

// Remove All
function removeAllItems() {
  taskList.innerHTML = '';
}

// Remove Completed Items
function removeCompleted() {
  let completedTasks = document.getElementsByClassName('completed'); 
  while (completedTasks.length > 0) {
    console.log(completedTasks[0])
    taskList.removeChild(completedTasks[0]);
  }
}


