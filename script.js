const addTask = document.querySelector('#texto-tarefa');
const buttonTask = document.querySelector('#criar-tarefa');

function addNewTask() {
  const task = addTask.value;
  const olList = document.querySelector('.list-task');
  const listLiTask = document.createElement('li');
  const list = document.createTextNode(task);
  listLiTask.appendChild(list);
  olList.appendChild(listLiTask);

  addTask.value = ''; // limpar campo
}
buttonTask.addEventListener('click', addNewTask);


