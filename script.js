const taskOList = document.querySelector('#lista-tarefas');
const createTaskButton = document.querySelector('#criar-tarefa');
const taskInput = document.querySelector('#texto-tarefa');

function addTaskToList() {
  createTaskButton.addEventListener('click', () => {
    const createLi = document.createElement('li');
    createLi.className = 'tasks';
    createLi.innerText = taskInput.value;
    taskOList.appendChild(createLi);
    taskInput.value = '';
  });
}

addTaskToList();

taskOList.addEventListener('click', (event) => {
  const eventTarget = event.target;
  const listSelectedItems = document.querySelector('.selected');
  if (listSelectedItems) {
    listSelectedItems.classList.remove('selected');
  }
  eventTarget.classList.add('selected');
});

taskOList.addEventListener('dblclick', (event) => {
  const eventTarget = event.target;
  if (eventTarget.classList.contains('completed')) {
    eventTarget.classList.remove('completed');
  } else {
    eventTarget.classList.add('completed');
  }
});

const deleteAllBttn = document.querySelector('#apaga-tudo');

deleteAllBttn.addEventListener('click', () => {
  taskOList.innerHTML = '';
});

const deleteDoneBttn = document.querySelector('#remover-finalizados');

deleteDoneBttn.addEventListener('click', () => {
  const completedTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTasks.length; index += 1) {
    completedTasks[index].remove();
  }
});
