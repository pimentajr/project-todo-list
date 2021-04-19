const createTask = document.getElementById('criar-tarefa');
createTask.addEventListener('click', () => {
  const task = document.getElementById('texto-tarefa');
  const tasklist = document.getElementById('lista-tarefas');
  const itemTask = document.createElement('li');
  itemTask.innerText = task.value;
  tasklist.appendChild(itemTask);
  task.value = '';
});

const clickElement = document.getElementById('lista-tarefas');
clickElement.addEventListener('click', (ev) => {
  const selectLI = document.querySelectorAll('li');
  selectLI.forEach((item) => {
    item.classList.remove('ativo');
  });
  ev.target.classList.add('ativo');
});

const twoClick = document.getElementById('lista-tarefas');
twoClick.addEventListener('dblclick', (ev) => {
  ev.target.classList.toggle('completed');
});
