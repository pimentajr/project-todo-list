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
  const paintColor = document.querySelector('li');
  const color = window.getComputedStyle(paintColor).backgroundColor;
  document.querySelector('li').style.background = 'rgb(128,128,128)';
  const alvo = ev;
  alvo.target.style.backgroundColor = color;
});
