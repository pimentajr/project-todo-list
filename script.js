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
  const backColor = ev;
  const taskLi = document.querySelectorAll('li');
  taskLi.forEach((taskLis) => {
    taskLis.classList.remove('ativo');
  });
  ev.target.classList.add('ativo');
  const kLi = document.querySelectorAll('li');
  kLi.forEach((item) => {
    if (item.getAttribute('class') === 'ativo') {
      backColor.target.style.backgroundColor = 'rgb(128,128,128)';
    } else if (item.getAttribute('class') !== 'ativo') {
      backColor.target.style.backgroundColor = 'white';
    }
  });
});
