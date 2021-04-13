const addButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const inputVal = document.querySelector('#texto-tarefa');


function addNewTask() { 
  addButton.addEventListener('click', () => {
    const newTask = document.createElement('li');
    taskList.appendChild(newTask);
    newTask.className = 'liTask';
    newTask.innerText = inputVal.value;
    inputVal.value = '';    
  });
}

addNewTask();

function changeTaskColor() {
  taskList.addEventListener('click', (event)=> {
    const taskItems = document.querySelectorAll('li');
    for (let index = 0; index < taskItems.length; index += 1){
      taskItems[index].classList.remove('selected');
      if (event.target.localName === 'li') {
        const tgt = event.target;
        tgt.className = 'selected';
      } 
    }
  });
}

changeTaskColor();

function deleteTasks() {
  const deleteAll = document.querySelector('#apaga-tudo');
  const listTasks = document.querySelectorAll('li')
  deleteAll.addEventListener('click', () => {    
      taskList.innerHTML = '';    
  });
}

deleteTasks();

