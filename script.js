//// Load previous list
window.onload = function(){
  // plot items
  taskList.innerHTML = fullListParsed;
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
  key.classList.remove('selected');
}
event.target.classList.add('selected')})

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
    taskList.removeChild(completedTasks[0]);
  }
}


////// Move Item
// define Selected Index
let selectedIndex = 0;
function finditemIndex() {
  selectedColor = document.querySelector('.selected');
  if (!selectedColor) {
    return;
  }
  taskItems = document.getElementsByTagName('li');
  let selectedColorStyle = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
  taskItemColor =
  selectedIndex = 0;
  for (let i = 0; window.getComputedStyle(taskItems[i]).getPropertyValue('background-color') !== selectedColorStyle; i += 1) {
    selectedIndex = i + 1; 
  }
  return selectedIndex;
}

//// Move items upwards
function moveUpList() {
  finditemIndex()
  if (!selectedColor) {
    return;
  }
  if (selectedIndex === 0) {
    return;
  } else {
    let backupItem = taskItems[selectedIndex - 1];
    taskItems[selectedIndex].innerHTML = taskItems[selectedIndex].innerHTML;
    taskList.insertBefore(backupItem,taskItems[selectedIndex+1]);
  }
}

//// Move items upwards
function moveDownList() {
  finditemIndex()
  if (!selectedColor) {
    return;
  }
  if (selectedIndex === taskItems.length -1) {
    return;
  } else {
    let backupItem = taskItems[selectedIndex + 1];
    taskItems[selectedIndex].innerHTML = taskItems[selectedIndex].innerHTML;
    taskList.insertBefore(backupItem,taskItems[selectedIndex]);
  }
}

//// Remove Selected
function removeSelected() {
  let selectedElement = document.querySelector('.selected');
  selectedElement.parentNode.removeChild(selectedElement);
}