const createTaskButton = document.getElementById('criar-tarefa');
const taskText = document.getElementById('texto-tarefa');
const listTask = document.getElementById('lista-tarefas');

createTaskButton.addEventListener('click', () => {
  if ((taskText.value !== '')) {
    const addListElement = document.createElement('li');
    addListElement.innerText = taskText.value;
    listTask.appendChild(addListElement);
    taskText.value = '';
  }
  taskText.focus();
});
