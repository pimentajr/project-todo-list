// Requisito 5 e 6 - Botão para adicionar lista
const newTask = document.querySelector('#texto-tarefa');
const clickCreateTask = document.getElementById('criar-tarefa');
const listToAdd = document.getElementById('lista-tarefas');
const allList = document.querySelector('#lista-tarefas');
const grayColor = 'rgb(128, 128, 128)';

function addingTask() {
  clickCreateTask.addEventListener('click', () => {
    if (newTask.value === '') {
      alert('Campo Vazio');
    } else {
      const task = document.createElement('li');
      task.classList.add('item');
      task.innerText = newTask.value;
      listToAdd.appendChild(task);
    }
    newTask.value = '';
  });
}
addingTask();