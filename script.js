const jobList = document.getElementById('lista-tarefas');
const taskNameInput = document.getElementById('texto-tarefa');
const btnCreateTask = document.getElementById('criar-tarefa');
const btnDeleteTasks = document.getElementById('apaga-tudo');
const btnDeleteCompletedTasks = document.getElementById('remover-finalizados');
const btnSaveTasks = document.getElementById('salvar-tarefas');
const btnUp = document.getElementById('mover-cima');
const btnDown = document.getElementById('mover-baixo');
const btnDeleteTask = document.getElementById('remover-selecionado');

jobList.innerHTML = localStorage.getItem('list');

function changeBackgroundColorTask(event) {
  for (let tarefa = 0; tarefa < jobList.children.length; tarefa += 1) {
    jobList.children[tarefa].setAttribute('id', '');
  }
  event.target.setAttribute('id', 'selectedTask');
}

// Faz o risco em tarefas completas, ou tira.
function completedTask(event) {
  event.target.classList.toggle('completed');
}

jobList.addEventListener('click', changeBackgroundColorTask);
jobList.addEventListener('dblclick', completedTask);

// Adiciona a task ao clicar no botao.
function addTask() {
  const taskToBeAdded = document.createElement('li');
  taskToBeAdded.innerText = taskNameInput.value;
  taskToBeAdded.setAttribute('class', 'task');
  jobList.appendChild(taskToBeAdded);
  taskNameInput.value = '';
}

btnCreateTask.addEventListener('click', addTask);

// Deleta todas as tarefas.
function deleteAllTasks() {
  while (jobList.children.length > 0) {
    jobList.children[0].remove();
  }
  localStorage.clear();
}

btnDeleteTasks.addEventListener('click', deleteAllTasks);

// Deleta tarefas completadas.
function deleteCompletedTasks() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let tarefa = 0; tarefa < completedTasks.length; tarefa += 1) {
    completedTasks[tarefa].remove();
  }
}

btnDeleteCompletedTasks.addEventListener('click', deleteCompletedTasks);

// Salva a lista no locaStorage.
function saveCurrentList() {
  localStorage.setItem('list', jobList.innerHTML);
}

btnSaveTasks.addEventListener('click', saveCurrentList);

// Sobe e desce a tarefa de prioridade.
function moveTaskDown() {
  const selectedTask = document.getElementById('selectedTask');
  if (selectedTask && selectedTask.nextElementSibling) {
    jobList.insertBefore(selectedTask.nextElementSibling, selectedTask);
  }
}

function moveTaskUp() {
  const selectedTask = document.getElementById('selectedTask');
  if (selectedTask && selectedTask.previousElementSibling) {
    selectedTask.insertAdjacentElement('afterend', selectedTask.previousElementSibling);
  }
}

btnDown.addEventListener('click', moveTaskDown);
btnUp.addEventListener('click', moveTaskUp);

// Remove tarefa selecionada.

function deleteSelectedTask() {
  const selectedTask = document.getElementById('selectedTask');
  if (selectedTask) {
  selectedTask.remove();
  }
}

btnDeleteTask.addEventListener('click', deleteSelectedTask);