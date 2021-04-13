const jobList = document.getElementById('lista-tarefas');
const taskNameInput = document.getElementById('texto-tarefa');
const btnCreateTask = document.getElementById('criar-tarefa');
const btnDeleteTasks = document.getElementById('apaga-tudo');
const btnDeleteCompletedTasks = document.getElementById('remover-finalizados');
const btnSaveTasks = document.getElementById('salvar-tarefas');

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
  //taskToBeAdded.addEventListener('click', changeBackgroundColorTask);
  //taskToBeAdded.addEventListener('dblclick', completedTask);
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
