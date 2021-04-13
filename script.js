const createTask = document.getElementById('criar-tarefa');
const listTask = document.getElementById('lista-tarefas');
const textTask = document.getElementById('texto-tarefa');
// const createListItem = document.createElement('li');

//Requisitos 05 e 06
createTask.addEventListener('click', () => {
  const createListItem = document.createElement('li');
  createListItem.innerText = textTask.value;
  listTask.appendChild(createListItem);
  textTask.value = '';
});

//Requisito 07
const getOL = document.getElementById('lista-tarefas');
getOL.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'rgb(128, 128, 128';
});
