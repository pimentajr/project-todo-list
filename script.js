let addButton = document.querySelector('#criar-tarefa');

let input1 = document.querySelector('#texto-tarefa');

addButton.addEventListener('click', function () {
  let inputValue = document.querySelector('#texto-tarefa').value;
  let olTaskList = document.querySelector('#lista-tarefas');
  let newTask = document.createElement('li');
  newTask.innerHTML = inputValue;
  olTaskList.appendChild(newTask);
  document.querySelector('#texto-tarefa').value = '';
})