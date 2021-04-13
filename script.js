const addTask = document.querySelector('#texto-tarefa');
const buttonTask = document.querySelector('#criar-tarefa');

function addNewTask() {
  const task = addTask.value;

  const ulList = document.querySelector('.list-task');
  const listOlTask = document.createElement('ol');
  listOlTask.setAttribute('id', 'lista-tarefas');
  const list = document.createTextNode(task);
  listOlTask.appendChild(list);
  ulList.appendChild(listOlTask);

  addTask.value = ""; // limpar campo
}
buttonTask.addEventListener('click', addNewTask);

