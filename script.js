const createTaskButton = document.getElementById('criar-tarefa');
const listTask = document.getElementById('lista-tarefas');
const textTask = document.getElementById('texto-tarefa');

createTaskButton.addEventListener ('click', function addTask() {
  const tagP = document.createElement('li');
  tagP.innerText = textTask.value;
  listTask.appendChild(tagP);
  textTask.value = '';
  tagP.addEventListener('click', function addClass() {
    tagP.classList.add('tasks-background-color');
  });
});
