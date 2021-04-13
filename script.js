const createTaskBtn = document.querySelector('#criar-tarefa');
const newTaskInput = document.querySelector('#texto-tarefa');
const tasksList = document.querySelector('#lista-tarefas');
const clearAllBtn = document.querySelector('#apaga-tudo');
const removeFinishedBtn = document.querySelector('#remover-finalizados');
const saveTasksBtn = document.querySelector('#salvar-tarefas');
const moveUpTaskBtn = document.querySelector('#mover-cima');
const moveDownTaskBtn = document.querySelector('#mover-baixo');
const removeSelectedBtn = document.querySelector('#remover-selecionado');

let allTasks = document.querySelectorAll('#lista-tarefas li');

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
    newTaskListItem.classList.add('not-selected');
    tasksList.appendChild(newTaskListItem);
    newTaskInput.value = '';
  }
}

function changeTasksBackgndColor(event) {
  const targetTask = event.target;
  allTasks = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < allTasks.length; index += 1) {
    allTasks[index].classList.remove('selected');
    allTasks[index].classList.add('not-selected');
  }
  targetTask.classList.remove('not-selected');
  targetTask.classList.add('selected');
}

function taskCompleted(event) {
  const targetTask = event.target;
  if (targetTask.classList.contains('completed')) {
    targetTask.classList.remove('completed');
  } else {
    targetTask.classList.add('completed');
  }
}

function clearAllTasks() {
  allTasks = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < allTasks.length; index += 1) {
    tasksList.removeChild(allTasks[index]);
  }
}

function clearFinishedTasks() {
  allTasks = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < allTasks.length; index += 1) {
    if (allTasks[index].classList.contains('completed')) {
      tasksList.removeChild(allTasks[index]);
    }
  }
}

function saveCurrentTasks() {
  allTasks = document.querySelectorAll('#lista-tarefas li');
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

function moveTaskUp() {
  allTasks = document.querySelectorAll('#lista-tarefas li');
  let taskPosition = 0;
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null) {
    for (let index = 0; index < allTasks.length; index += 1) {
      if (allTasks[index].classList.contains('selected')) {
        taskPosition = index;
        break;
      }
    }
    if (taskPosition !== 0) {
      tasksList.insertBefore(selectedTask, tasksList.childNodes[taskPosition - 1]);
    }
  }
}

function moveTaskDown() {
  allTasks = document.querySelectorAll('#lista-tarefas li');
  let taskPosition = 0;
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null) {
    for (let index = 0; index < allTasks.length; index += 1) {
      if (allTasks[index].classList.contains('selected')) {
        taskPosition = index;
        break;
      }
    }
    if (taskPosition !== (allTasks.length - 1)) {
      tasksList.insertBefore(selectedTask, tasksList.childNodes[taskPosition + 2]);
    }
  }
}

function clearSelectedTask() {

}

[createTaskBtn, tasksList, clearAllBtn, removeFinishedBtn, saveTasksBtn, moveUpTaskBtn, moveDownTaskBtn, removeSelectedBtn].forEach((item) => {
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
    } else if (item === moveUpTaskBtn) {
      moveTaskUp();
    } else if (item === moveDownTaskBtn) {
      moveTaskDown();
    } else if (item === moveDownTaskBtn) {
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