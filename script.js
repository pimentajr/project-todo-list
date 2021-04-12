const btnCreateTask = document.querySelector('#criar-tarefa');
const olList = document.querySelector('#lista-tarefas');

btnCreateTask.addEventListener('click', () => {
  const inputData = document.getElementById('texto-tarefa').value;
  const createTask = document.createElement('li');
  createTask.innerText = inputData;
  olList.appendChild(createTask);
  document.getElementById('texto-tarefa').value = '';
});

function paintSelectedELement(element) {
  element = element.target;
  element.style.backgroundColor = 'rgb(128, 128, 128)';
}

olList.addEventListener('click', paintSelectedELement);