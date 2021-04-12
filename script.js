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
  liSelected.classList.add('selected');

  const liSelectedNode = document.querySelectorAll('.selected');

  if (liSelectedNode.length > 1) {
    for (let index = 0; index < liSelectedNode.length; index += 1) {
      liSelectedNode[index].classList.remove('selected');
    }
    liSelected.classList.add('selected');
  }
}

listTask.addEventListener('click', liBackgroundColorChange);

function lineThroughItem(event) {
  const liSelected = event.target;
  if (liSelected.classList.contains('completed')) {
    liSelected.classList.remove('completed');
  } else {
    liSelected.className = 'completed';
  }
}

listTask.addEventListener('dblclick', lineThroughItem);
