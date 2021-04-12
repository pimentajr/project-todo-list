function addNewTask() {  
  const addButton = document.getElementById('criar-tarefa');
  const taskList = document.getElementById('lista-tarefas');
  const inputVal = document.getElementById('texto-tarefa');
  addButton.addEventListener('click', () => {
    const newTask = document.createElement('li');    
    taskList.appendChild(newTask); 
    newTask.className = 'liTask';
    newTask.innerText = inputVal.value;       
    inputVal.value = '';
  });
}

addNewTask();