// Creating new list item
const button = document.getElementById('criar-tarefa');
const inputText = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function teste() {
  const newTask = inputText.value;
  const newListTask = document.createElement('li');
  newListTask.innerText = newTask;
  taskList.appendChild(newListTask);

  inputText.value = '';
}

button.addEventListener('click', teste);
