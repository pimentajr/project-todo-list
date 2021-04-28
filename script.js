const btnCreateTask = document.querySelector('#criar-tarefa');
const inputTask = document.querySelector('#texto-tarefa');
const olTask = document.querySelector('#lista-tarefas');
const liTask = document.createElement('li');

btnCreateTask.addEventListener('click', () => {
  liTask.innerText = inputTask.value;
  olTask.appendChild(liTask);
  inputTask.value = '';
});

liTask.addEventListener('click', () => {
  liTask.style.backgroundColor = 'rgb(128,128,128)';
})  