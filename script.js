const btnCreatTask = document.querySelector('#criar-tarefa');
const listTask = document.querySelector('#lista-tarefas');
const taskContainer = document.querySelector('#container'); 

function addTask() {
  btnCreatTask.addEventListener('click', () => {
  const task = inputField.value;
  if (task !=='') {
    const listItem = document.createElement('li');
  
    listItem.className = 'new-item';
    listItem.innerText = task;
    listTask.appendChild(listItem);

    taskContainer.reset();
  } else {
    alert ('Tarefa inválida');
    }  
  } )}

//btnCreatTask.addEventListener('click', addTask);
