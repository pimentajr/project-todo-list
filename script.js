window.onload = () => {
  const addTask = document.getElementById('criar-tarefa');

  addTask.addEventListener('click', () => {
    const listTasks = document.getElementById('lista-tarefas');
    const textTalks = document.getElementById('texto-tarefa');
    const itenTasks = document.createElement('li');
    itenTasks.innerText = textTalks.value;
    listTasks.appendChild(itenTasks);
    textTalks.value = '';
  });
};
