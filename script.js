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
  let listItem = document.getElementsByTagName('li'); //COMO POSSO NÃO REPETIR?
  for (key of listItem){
    key.style.backgroundColor= '';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)'})

  // Strike-Unstrike Item
  taskList.addEventListener('dblclick',function(event){
    if (!event.target.style.textDecoration) {
    event.target.style.textDecoration = 'line-through';
    } else {
      event.target.style.textDecoration = '';
    }
  })
