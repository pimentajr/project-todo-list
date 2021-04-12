window.onload = function () {
  const createTaskBtn = document.querySelector('#criar-tarefa');
  const newTaskInput = document.querySelector('#texto-tarefa');
  const tasksList = document.querySelector('#lista-tarefas');

  createTaskBtn.addEventListener('click', function () {
    if (newTaskInput.value !== '') {
      let newTaskListItem = document.createElement('li');
      newTaskListItem.innerText = newTaskInput.value;
      tasksList.appendChild(newTaskListItem);
      newTaskInput.value = '';
    }
  });
}
