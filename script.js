const jobList = document.getElementById('lista-tarefas');
const taskNameInput = document.getElementById('texto-tarefa');
const btnCreateTask = document.getElementById('criar-tarefa');
const btnDeleteTasks = document.getElementById('apaga-tudo');

function changeBackgroundColorTask(event) {
  for (let tarefa = 0; tarefa < jobList.children.length; tarefa += 1) {
    jobList.children[tarefa].setAttribute('id', '');
  }
  event.target.setAttribute('id', 'selectedTask');
}


// Faz o risco em tarefas completas, ou tira.
function completedTask(event) {
  if (event.target.className === 'task') {
    event.target.classList.toggle('completed');
  } 
}

// Adiciona a task ao clicar no botao.
function addTask() {
  const taskToBeAdded = document.createElement('li');
  taskToBeAdded.innerText = taskNameInput.value;
  taskToBeAdded.setAttribute('class', 'task');
  taskToBeAdded.addEventListener('click', changeBackgroundColorTask);
  taskToBeAdded.addEventListener('dblclick', completedTask);
  jobList.appendChild(taskToBeAdded);

  taskNameInput.value = '';
}

btnCreateTask.addEventListener('click', addTask);

function deleAllTasks() {
  while (jobList.children.length > 0) {
    jobList.children[0].remove();
  }
}

btnDeleteTasks.addEventListener('click', deleAllTasks);
