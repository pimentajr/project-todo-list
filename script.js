const btnCreateTask = document.querySelector('#criar-tarefa');
const olList = document.querySelector('#lista-tarefas');

btnCreateTask.addEventListener('click', () => {
  let inputData = document.getElementById('texto-tarefa').value;
  const createTask = document.createElement('li');
  createTask.innerText = inputData;
  olList.appendChild(createTask);
  document.getElementById('texto-tarefa').value = '';
});