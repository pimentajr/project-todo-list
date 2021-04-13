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
  const itemSelected = olList.childNodes;
  for (let i = 0; i < itemSelected.length; i += 1) {
    if (itemSelected[i].classList.contains('selected')) {
      itemSelected[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
}
olList.addEventListener('click', SelectedTask);
