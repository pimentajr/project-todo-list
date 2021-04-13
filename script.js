const createTaskBtn = document.querySelector('#criar-tarefa');
const newTaskInput = document.querySelector('#texto-tarefa');
const tasksList = document.querySelector('#lista-tarefas');
const clearAllBtn = document.querySelector('#apaga-tudo');
const removeFinishedBtn = document.querySelector('#remover-finalizados');
const saveTasksBtn = document.querySelector('#salvar-tarefas');
const moveUpTaskBtn = document.querySelector('#mover-cima');
const moveDownTaskBtn = document.querySelector('#mover-baixo');
const removeSelectedBtn = document.querySelector('#remover-selecionado');
const notSelectedClass = 'not-selected';

window.onload = function savedList() {
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
};

function updateAllTasks() {
  const allTasks = document.querySelectorAll('#lista-tarefas li');
  return allTasks;
}

function addNewTask() {
  if (newTaskInput.value !== '') {
    const newTaskListItem = document.createElement('li');
    newTaskListItem.innerText = newTaskInput.value;
    newTaskListItem.classList.add(notSelectedClass);
    tasksList.appendChild(newTaskListItem);
    newTaskInput.value = '';
  }
}

function changeTasksBackgndColor(event, allTasks) {
  if (event.target.nodeName !== 'OL') {
    const targetTask = event.target;
    for (let index = 0; index < allTasks.length; index += 1) {
      allTasks[index].classList.remove('selected');
      allTasks[index].classList.add(notSelectedClass);
    }
    targetTask.classList.remove(notSelectedClass);
    targetTask.classList.add('selected');
  }
}

function taskCompleted(event) {
  const targetTask = event.target;
  if (targetTask.classList.contains('completed')) {
    targetTask.classList.remove('completed');
  } else {
    targetTask.classList.add('completed');
  }
}

function clearAllTasks(allTasks) {
  for (let index = 0; index < allTasks.length; index += 1) {
    tasksList.removeChild(allTasks[index]);
  }
}

function clearFinishedTasks(allTasks) {
  for (let index = 0; index < allTasks.length; index += 1) {
    if (allTasks[index].classList.contains('completed')) {
      tasksList.removeChild(allTasks[index]);
    }
  }
}

function saveCurrentTasks(allTasks) {
  if (allTasks.length !== 0) {
    const tasksToSave = [];
    const classToSave = [];
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

function searchTaskPosition(allTasks) {
  for (let index = 0; index < allTasks.length; index += 1) {
    if (allTasks[index].classList.contains('selected')) {
      return index;
    }
  }
}

function moveTaskUp(allTasks) {
  let taskPosition = 0;
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null) {
    taskPosition = searchTaskPosition(allTasks);
    if (taskPosition !== 0) {
      tasksList.insertBefore(selectedTask, tasksList.childNodes[taskPosition - 1]);
    }
  }
}

function moveTaskDown(allTasks) {
  let taskPosition = 0;
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null) {
    taskPosition = searchTaskPosition(allTasks);
    if (taskPosition !== (allTasks.length - 1)) {
      tasksList.insertBefore(selectedTask, tasksList.childNodes[taskPosition + 2]);
    }
  }
}

function clearSelectedTask() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null) {
    tasksList.removeChild(selectedTask);
  }
}

[createTaskBtn, tasksList, clearAllBtn, removeFinishedBtn].forEach((item) => {
  item.addEventListener('click', (event) => {
    if (item === createTaskBtn) {
      addNewTask();
    } else if (item === tasksList) {
      changeTasksBackgndColor(event, updateAllTasks());
    } else if (item === clearAllBtn) {
      clearAllTasks(updateAllTasks());
    } else if (item === removeFinishedBtn) {
      clearFinishedTasks(updateAllTasks());
    }
  });
});

[saveTasksBtn, moveUpTaskBtn, moveDownTaskBtn, removeSelectedBtn].forEach((item) => {
  item.addEventListener('click', () => {
    if (item === saveTasksBtn) {
      saveCurrentTasks(updateAllTasks());
    } else if (item === moveUpTaskBtn) {
      moveTaskUp(updateAllTasks());
    } else if (item === moveDownTaskBtn) {
      moveTaskDown(updateAllTasks());
    } else if (item === removeSelectedBtn) {
      clearSelectedTask();
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
