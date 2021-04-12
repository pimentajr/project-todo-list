const tasksList = document.querySelector('#lista-tarefas');

function listItemBackgroundOnClick(listItem) {
  listItem.addEventListener('click', () => {
    const currentSelected = document.querySelector('.selected');
    if (currentSelected !== null) {
      currentSelected.classList.remove('selected');
    }
    listItem.classList.add('selected');
  });
}

function itemDoubleClick(listItem) {
  listItem.addEventListener('dblclick', () => {
    const completedOrNot = listItem.classList.contains('completed');
    if (completedOrNot) {
      listItem.classList.remove('completed');
    } else if (!completedOrNot) {
      listItem.classList.add('completed');
    }
  });
}

function loadTasks() {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    tasksList.innerHTML = savedTasks;
    const loadedTasks = document.querySelectorAll('#lista-tarefas li');
    for (let index = 0; index < loadedTasks.length; index += 1) {
      const currentTask = loadedTasks[index];
      listItemBackgroundOnClick(currentTask);
      itemDoubleClick(currentTask);
    }
  }
}

loadTasks();

function newTaskButton() {
  const btnNewTask = document.querySelector('#criar-tarefa');
  const inputNewTask = document.querySelector('#texto-tarefa');
  btnNewTask.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.innerText = inputNewTask.value;
    tasksList.appendChild(newTask);
    inputNewTask.value = '';
    listItemBackgroundOnClick(newTask);
    itemDoubleClick(newTask);
  });
}

newTaskButton();

function clearAllButton() {
  const btnClearAll = document.querySelector('#apaga-tudo');
  btnClearAll.addEventListener('click', () => {
    tasksList.innerHTML = '';
  });
}

clearAllButton();

function clearCompletedButton() {
  const btnClearCompleted = document.querySelector('#remover-finalizados');
  btnClearCompleted.addEventListener('click', () => {
    const completedTasks = document.getElementsByClassName('completed');
    console.log(completedTasks);
    for (let index = completedTasks.length; index > 0; index -= 1) {
      const currentCompletedTask = completedTasks[index - 1];
      console.log(currentCompletedTask);
      tasksList.removeChild(currentCompletedTask);
    }
  });
}

clearCompletedButton();

function saveTasksButton() {
  const btnSaveTasks = document.querySelector('#salvar-tarefas');
  btnSaveTasks.addEventListener('click', () => {
    localStorage.setItem('tasks', tasksList.innerHTML);
  });
}

saveTasksButton();
