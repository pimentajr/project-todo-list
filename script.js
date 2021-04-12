//// Load previous list
window.onload = function(){
  // plot items
  taskList.innerHTML = fullListParsed;
  console.log(fullListParsed)
}

//// Save Tasks
function saveTasks() {
  // prepare items to recover
  fullListStringified = JSON.stringify(taskList.innerHTML)
  localStorage.setItem('Saved List', fullListStringified)
}

 // get text input
let taskInput = document.getElementById('texto-tarefa');
// get task list
let taskList = document.getElementById('lista-tarefas');
// get submit button
let submitButton = document.getElementById('criar-tarefa');
// prepare items to store
let fullListStringified = JSON.stringify(taskList.innerHTML);
// store items
let fullListParsed = JSON.parse(localStorage.getItem('Saved List')); 

//// Create New Task
function createNewTask(taskInputValue) {
taskInputValue = taskInput.value
let newTask = document.createElement('li');
newTask.innerText = taskInputValue;
taskList.appendChild(newTask);
taskInput.value = '';
}

//// Select item
taskList.addEventListener('click',function(event) {
let listItem = document.getElementsByTagName('li');
for (key of listItem){
  key.style.backgroundColor= '';
}
event.target.style.backgroundColor = 'rgb(128, 128, 128)'})

//// Strike-Unstrike Item
taskList.addEventListener('dblclick',function(event){
  event.target.classList.toggle('completed');
})

//// Remove All
function removeAllItems() {
  taskList.innerHTML = '';
}

//// Remove Completed Items
function removeCompleted() {
  let completedTasks = document.getElementsByClassName('completed'); 
  while (completedTasks.length > 0) {
    console.log(completedTasks[0])
    taskList.removeChild(completedTasks[0]);
  }
}

