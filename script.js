const createTaskBtn = document.querySelector('#criar-tarefa');
const newTaskInput = document.querySelector('#texto-tarefa');
const tasksList = document.querySelector('#lista-tarefas');
const clearAllBtn = document.querySelector('#apaga-tudo');
const removeFinishedBtn = document.querySelector('#remover-finalizados');
const saveTasksBtn = document.querySelector('#salvar-tarefas');

window.onload = function () {
  let savedTasks = [];
  let savedTasksClass = [];
  if (localStorage.length !== 0) {
    savedTasks = localStorage.getItem('tasks');
    savedTasks = savedTasks.split(',');
    savedTasksClass = localStorage.getItem('task-class');
    savedTasksClass = savedTasksClass.split(',');
    for (let index = 0; index < savedTasks.length; index += 1) {
      const newTaskListItem = document.createElement('li');
      newTaskListItem.innerText = savedTasks[index];
      newTaskListItem.className = savedTasksClass[index];
      tasksList.appendChild(newTaskListItem);
    }
  }
}

function addNewTask() {
  if (newTaskInput.value !== '') {
    const newTaskListItem = document.createElement('li');
    newTaskListItem.innerText = newTaskInput.value;
    tasksList.appendChild(newTaskListItem);
    newTaskInput.value = '';
  }
}

function changeTasksBackgndColor(event) {
  const targetTask = event.target;
  const allTasks = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < allTasks.length; index += 1) {
    allTasks[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
  targetTask.style.backgroundColor = 'rgb(128, 128, 128)';
}

function taskCompleted(event) {
  const targetTask = event.target;
  if (targetTask.className === 'completed') {
    targetTask.className = '';
  } else {
    targetTask.className = 'completed';
  }
}

function clearAllTasks() {
  const allTasks = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < allTasks.length; index += 1) {
    tasksList.removeChild(allTasks[index]);
  }
}

function clearFinishedTasks() {
  const allTasks = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < allTasks.length; index += 1) {
    if (allTasks[index].className === 'completed') {
      tasksList.removeChild(allTasks[index]);
    }
  }
}

function saveCurrentTasks() {
  const allTasks = document.querySelectorAll('#lista-tarefas li');
  if (allTasks.length !== 0) {
    let tasksToSave = [];
    let classToSave = [];
    for (let index = 0; index < allTasks.length; index += 1) {
      tasksToSave[index] = allTasks[index].innerText;
      classToSave[index] = allTasks[index].className;
    }
    localStorage.setItem('tasks', tasksToSave);
    localStorage.setItem('task-class', classToSave);
  } else {
    localStorage.clear();
  }
}

[createTaskBtn, tasksList, clearAllBtn, removeFinishedBtn, saveTasksBtn].forEach((item) => {
  item.addEventListener('click', (event) => {
    if (item === createTaskBtn) {
      addNewTask();
    } else if (item === tasksList) {
      changeTasksBackgndColor(event);
    } else if (item === clearAllBtn) {
      clearAllTasks();
    } else if (item === removeFinishedBtn) {
      clearFinishedTasks();
    } else if (item === saveTasksBtn) {
      saveCurrentTasks();
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


