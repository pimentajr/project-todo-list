const addButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const clearButton = document.querySelector('#apaga-tudo');
const completedClear = document.querySelector('#remover-finalizados')
addButton.addEventListener('click', () => {
  const inputText = document.querySelector('#texto-tarefa').value;
  const listElement = document.createElement('li');
  listElement.innerText = inputText;
  listElement.classList.add('task');
  taskList.appendChild(listElement);
  document.querySelector('#texto-tarefa').value = '';
});
taskList.addEventListener('click', (event) => {
  event.target.classList.add('selectedTask');
  const selected = document.querySelectorAll('.selectedTask');
  for (let index = 0; index < selected.length; index += 1) {
    selected[index].classList.remove('selectedTask');
  }
  event.target.classList.add('selectedTask');
});
taskList.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});
clearButton.addEventListener('click', () => {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.lastChild);
  }
});
completedClear.addEventListener('click', () => {
  const completedTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTasks.length; index += 1) {
    completedTasks[index].remove();
  }
});
