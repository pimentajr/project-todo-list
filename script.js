const newTaskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

// Botão para criar tarefa:
function addTask() {
  const newTaskItem = document.createElement('li');
  newTaskItem.innerText = document.getElementById('texto-tarefa').value;
  taskList.appendChild(newTaskItem);

  document.getElementById('texto-tarefa').value = '';
}

newTaskButton.addEventListener('click', addTask);

// Função para selecionar a tarefa clicada:
function taskSelector(event) {
  const tasks = document.querySelectorAll('li');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].classList.remove('selected');
  }
  const taskDone = event.target;
  taskDone.classList.add('selected');
}

taskList.addEventListener('click', taskSelector);

// Função para riscar tarefa concluida:
function taskCompleted(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

taskList.addEventListener('dblclick', taskCompleted);

// Botão para limpar as tarefas feitas:
function removeTasksDone() {
  const tasksDone = document.querySelectorAll('li.completed');
  for (let index = 0; index < tasksDone.length; index += 1) {
    tasksDone[index].remove();
  }
}

document.querySelector('#remover-finalizados').addEventListener('click', removeTasksDone);

// Botão de reset:
function reset() {
  const tasks = document.querySelectorAll('li');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].remove();
  }
}

document.querySelector('#apaga-tudo').addEventListener('click', reset);

const saveTaskListBtn = document.querySelector('#salvar-tarefas');

function saveTaskContent() {
  const taskListContent = taskList.innerHTML;
  localStorage.setItem('saved task list', taskListContent);
}

function loadTaskListContent() {
  const taskListContent = localStorage.getItem('listaSalva');
  taskList.innerHTML = taskListContent;
}

saveTaskListBtn.addEventListener('click', saveTaskContent);
loadTaskListContent();
