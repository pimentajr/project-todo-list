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
  const erase = document.querySelector('div');
  if (erase.parentNode) {
    erase.parentNode.removeChild(erase);
  }
});

const removeFeitos = document.getElementById('div2');
removeFeitos.addEventListener('click', () => {
  const eraseDone = document.querySelector('.completed');
  if (eraseDone.parentNode) {
    eraseDone.parentNode.removeChild(eraseDone);
  }
});
