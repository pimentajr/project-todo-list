const createTask = document.getElementById('criar-tarefa');
createTask.addEventListener('click', () => {
  const task = document.getElementById('texto-tarefa');
  const tasklist = document.getElementById('lista-tarefas');
  const itemTask = document.createElement('li');
  itemTask.innerText = task.value;
  tasklist.appendChild(itemTask);
  task.value = '';
});

const doubleClick = document.getElementById('lista-tarefas');
doubleClick.addEventListener('click', (ev) => {
  const selectLI = document.querySelectorAll('li');
  selectLI.forEach((item) => {
    item.classList.remove('ativo');
  });
  ev.target.classList.add('ativo');
});

doubleClick.addEventListener('dblclick', (ev) => {
  ev.target.classList.toggle('completed');
});

const eraseButton = document.getElementById('apaga-tudo');
eraseButton.addEventListener('click', () => {
  const liSelect = document.querySelectorAll('li');
  liSelect.forEach((ev) => {
    const targo = ev;
    targo.classList.add('apaga');
  });
});
