const addTask = document.querySelector('#texto-tarefa');
const buttonTask = document.querySelector('#criar-tarefa');
const olList = document.querySelector('#lista-tarefas');
const buttonDellAllTasks = document.querySelector('#apaga-tudo');

function addNewTask() {
  const task = addTask.value;
  const listLiTask = document.createElement('li');
  const list = document.createTextNode(task);
  listLiTask.appendChild(list);
  olList.appendChild(listLiTask);

  addTask.value = ''; // limpar campo
}
buttonTask.addEventListener('click', addNewTask);

// excluit todas as tarefas inseridas
function deleteTasks() {
  olList.innerText = '';
}
buttonDellAllTasks.addEventListener('click', deleteTasks);

// selecionar item - alterando fundo para cinza
function SelectedTask(event) {
  const selectTask = document.querySelector('.selected');
  if (selectTask !== null) {
    selectTask.classList.remove('selected');
  }
  event.target.classList.add('selected');
}
olList.addEventListener('click', SelectedTask);

function completedTask(events) {
  if (events.target.classList.contains('completed')) {
    events.target.classList.remove('completed');
    console.log(events.target);
  } else {
    events.target.classList.add('completed');
    console.log(events.target);
  }
}
olList.addEventListener('dblclick', completedTask);
