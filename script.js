const listOfTasks = document.querySelector('#lista-tarefas');

document.querySelector('#criar-tarefa').addEventListener('click', () => {
  const task = document.createElement('li');
  const input = document.querySelector('#texto-tarefa');

  task.innerText = input.value;
  input.value = '';

  listOfTasks.appendChild(task);
});
