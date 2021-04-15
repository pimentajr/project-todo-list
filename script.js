const addButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const clearButton = document.querySelector('#apaga-tudo');
const completedClear = document.querySelector('#remover-finalizados');
const saveListButton = document.querySelector('#salvar-tarefas');
const moveUp = document.querySelector('#mover-cima');
const moveDown = document.querySelector('#mover-baixo');
const selectedRemoveButton = document.querySelector('#remover-selecionado');
const selectedClass = '.selectedTask';
function retrieveState() {
  taskList.innerHTML = localStorage.getItem('tasks');
}
retrieveState();
addButton.addEventListener('click', () => {
  const inputText = document.querySelector('#texto-tarefa').value;
  const listElement = document.createElement('li');
  listElement.innerText = inputText;
  listElement.classList.add('task');
  taskList.appendChild(listElement);
  document.querySelector('#texto-tarefa').value = '';
});
taskList.addEventListener('click', (event) => {
  const selectedTask = document.querySelectorAll(selectedClass);
  for (let index = 0; index < selectedTask.length; index += 1) {
    selectedTask[index].classList.remove('selectedTask');
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

saveListButton.addEventListener('click', () => {
  localStorage.setItem('tasks', taskList.innerHTML);
});

moveUp.addEventListener('click', () => {
  const selectedTask = document.querySelector(selectedClass);
  if (selectedTask !== null && selectedTask.previousSibling !== null) {
    const lista = selectedTask.parentElement;
    lista.insertBefore(selectedTask, selectedTask.previousSibling);
  }
});
moveDown.addEventListener('click', () => {
  const selectedTask = document.querySelector(selectedClass);
  if (selectedTask !== null && selectedTask.nextSibling !== null) {
    const lista = selectedTask.parentElement;
    lista.insertBefore(selectedTask, selectedTask.nextSibling.nextSibling);
  }
});
selectedRemoveButton.addEventListener('click', () => {
  const selectedTask = document.querySelector(selectedClass);
  selectedTask.remove();
});
