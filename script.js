window.onload = function () {
  const createTaskBtn = document.querySelector('#criar-tarefa');
  const newTaskInput = document.querySelector('#texto-tarefa');
  const tasksList = document.querySelector('#lista-tarefas');

  function addNewTask() {
    if (newTaskInput.value !== '') {
      const newTaskListItem = document.createElement('li');
      newTaskListItem.innerText = newTaskInput.value;
      tasksList.appendChild(newTaskListItem);
      newTaskInput.value = '';
    }
  }

  function changeTasksBackgndColor(event) {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }

  [createTaskBtn, tasksList].forEach((item) => {
    item.addEventListener('click', (event) => {
      if (item === createTaskBtn) {
        addNewTask();
      } else if (item === tasksList) {
        changeTasksBackgndColor(event);
      }
    });
  });
};
