const addButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

addButton.addEventListener('click', () => {
  const inputText = document.querySelector('#texto-tarefa').value;
  const listElement = document.createElement('li');
  listElement.innerText = inputText;
  listElement.classList.add('task');
  taskList.appendChild(listElement);
  document.querySelector('#texto-tarefa').value = '';
});
const tasksList = document.querySelector('#lista-tarefas');
tasksList.addEventListener('click', (event) => {
  event.target.classList.add('selectedTask');
  const selected = document.querySelectorAll('.selectedTask');
  console.log(selected);
  for (let index = 0; index < selected.length; index += 1) {
    selected[index].classList.remove('selectedTask');
  }
  event.target.classList.add('selectedTask');
});
tasksList.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});
