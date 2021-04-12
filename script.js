const getInput = document.querySelector('#texto-tarefa');
const getButton = document.querySelector('#criar-tarefa');
const getLista = document.querySelector('#lista-tarefas')

getButton.addEventListener('click', function() {
  const createLi = document.createElement('li');
  console.log(createLi);
  createLi.innerText = getInput.value;
  getLista.appendChild(createLi);
  getInput.value = '';
});