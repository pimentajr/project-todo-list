const listOfTasks = document.querySelector('#lista-tarefas');

document.querySelector('#criar-tarefa').addEventListener('click', () => {
  const task = document.createElement('li');
  const input = document.querySelector('#texto-tarefa');

  task.innerText = input.value;
  task.classList.add('task');
  input.value = '';

  listOfTasks.appendChild(task);
});

document.querySelector('#apaga-tudo').addEventListener('click', () => {
  while (listOfTasks.firstElementChild) {
    listOfTasks.removeChild(listOfTasks.firstElementChild);
  }
});

document.querySelector('#remover-finalizados').addEventListener('click', () => {
  while (listOfTasks.querySelector('.completed')) {
    listOfTasks.removeChild(listOfTasks.querySelector('.completed'));
  }
});

listOfTasks.addEventListener('click', (event) => {
  if (event.target.classList.contains('task')) {
    if (document.querySelector('.selected')) {
      document.querySelector('.selected').classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
});

listOfTasks.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) event.target.classList.remove('completed');
  else event.target.classList.add('completed');
});
