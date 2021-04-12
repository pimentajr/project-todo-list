const createTaskButton = document.getElementById('criar-tarefa');
const listTask = document.getElementById('lista-tarefas');

function addItemTaskList() {
  const liTaskList = document.createElement('li');
  liTaskList.innerText = document.getElementById('texto-tarefa').value;
  listTask.appendChild(liTaskList);
  document.getElementById('texto-tarefa').value = '';
}

createTaskButton.addEventListener('click', addItemTaskList);

function liBackgroundColorChange(event) {
  const liSelected = event.target;
  liSelected.className = 'selected';

  const liSelectedNode = document.querySelectorAll('.selected');

  if (liSelectedNode.length > 1) {
    for (let index = 0; index < liSelectedNode.length; index += 1) {
      liSelectedNode[index].classList.remove('selected');
    }
    liSelected.className = 'selected';
  }
}

listTask.addEventListener('click', liBackgroundColorChange);
