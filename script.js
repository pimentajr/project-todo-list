const createTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const task = document.getElementById('texto-tarefa');
createTask.addEventListener('click', () => {
  const listItem = document.createElement('li');
  listItem.innerText = task.value;
  taskList.appendChild(listItem);
  task.value = '';
});