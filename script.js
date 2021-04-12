const taskOList = document.querySelector('#lista-tarefas');
const createTaskButton = document.querySelector('#criar-tarefa');
const taskInput = document.querySelector('#texto-tarefa');

function addTaskToList() {
  createTaskButton.addEventListener('click', () => {
    const createLi = document.createElement('li');
    createLi.innerText = taskInput.value;
    taskOList.appendChild(createLi);
    taskInput.value ='';
  });
}

addTaskToList();
