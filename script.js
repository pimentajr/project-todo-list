const input = document.querySelector('#texto-tarefa');
const btnAdd = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const btnClear = document.querySelector('#apaga-tudo');
const btnCompleted = document.querySelector('#remover-finalizados');
const btnSave = document.querySelector('#salvar-tarefas');
const btnUp = document.querySelector('#mover-cima');
const btnDown = document.querySelector('#mover-baixo');
const btnRmv = document.querySelector('#remover-selecionado');

// Adiciona nova tarefa
function addTask(text) {
  if ((input.value !== '')) {
    const newTask = document.createElement('li');
    newTask.classList.add('task');
    newTask.innerText = text;
    taskList.appendChild(newTask);
  }
  input.focus();
  input.value = '';
}

btnAdd.addEventListener('click', () => {
  addTask(input.value);
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask(input.value);
  }
});

// Seleciona e deseleciona as tarefas
taskList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const taskSelected = document.querySelector('.selected');
    if (taskSelected != null) {
      taskSelected.classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
});

// Risca os completos
taskList.addEventListener('dblclick', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
});

// Limpa a lista
btnClear.addEventListener('click', () => {
  while (taskList.lastElementChild) {
    taskList.removeChild(taskList.lastElementChild);
  }
  localStorage.clear();
});

// Remove somente as tarefas finalizadas
btnCompleted.addEventListener('click', () => {
  const taskCompleted = document.querySelectorAll('.completed');
  if (taskCompleted != null) {
    for (let task = 0; task < taskCompleted.length; task += 1) {
      taskCompleted[task].remove();
    }
  }
});

// Salva lista de tarefa no local storage
btnSave.addEventListener('click', () => {
  const olData = document.querySelector('OL').innerHTML;
  localStorage.setItem('listItems', olData);
});

window.onload = () => {
  if (localStorage.getItem('listItems') !== null) {
    document.querySelector('OL').innerHTML = localStorage.getItem('listItems');
  }
};

// Move tarefa selecionada para cima
btnUp.addEventListener('click', () => {
  const taskSelected = document.querySelector('.selected');
  if (taskSelected && taskSelected.previousElementSibling) {
    taskSelected.insertAdjacentElement('afterend', taskSelected.previousElementSibling);
  }
});

// Move tarefa selecionada para baixo
btnDown.addEventListener('click', () => {
  const taskSelected = document.querySelector('.selected');
  if (taskSelected && taskSelected.nextElementSibling) {
    taskList.insertBefore(taskSelected.nextElementSibling, taskSelected);
  }
});

// Remove tarefa selecionada
btnRmv.addEventListener('click', () => {
  const taskSelected = document.querySelector('.selected');
  if (taskSelected) taskSelected.remove();
});
