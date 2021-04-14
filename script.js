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
    console.log(selectTask);
  }
  event.target.classList.add('selected');
  console.log(event.target);
}
olList.addEventListener('click', SelectedTask);

function completedTask(e) {
  const completTask = document.querySelector('.completed')
  if (completTask !== null) {
    completTask.classList.remove('completed');
    console.log(completTask);
  }
  e.target.classList.add('completed');
  console.log(e.target);
}
olList.addEventListener('dblclick', completedTask);
