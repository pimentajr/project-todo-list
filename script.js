const jobList = document.getElementById('lista-tarefas');
const taskNameInput = document.getElementById('texto-tarefa');
const btnCreateTask = document.getElementById('criar-tarefa');

function changeBackgroundColorTask(event) {
  for (let index = 0; index < jobList.children.length; index += 1) {
    jobList.children[index].setAttribute('id', '');
  }
  event.target.setAttribute('id', 'selectedTask');
}

function completedTask(event) {
  if (event.target.className === 'task') {
    event.target.setAttribute('class', 'task completed');
  } else {
    event.target.setAttribute('class', 'task');
  }
}

//Adiciona a task ao clicar no botao.

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
