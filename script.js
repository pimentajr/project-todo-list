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
  const allTasks = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < allTasks.length; index += 1) {
    allTasks[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function taskCompleted(event) {
  if (event.target.className === 'completed') {
    event.target.className = '';
  } else {
    event.target.className = 'completed';
  }
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

[tasksList].forEach((item) => {
  item.addEventListener('dblclick', (event) => {
    if (item === tasksList) {
      taskCompleted(event);
    }
  });
});
