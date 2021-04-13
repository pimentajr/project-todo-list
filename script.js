
function addTask() {
  const button = document.getElementById('criar-tarefa');
  const task = document.getElementById('texto-tarefa');
  const taskList = document.querySelector('ol');
  taskList.innerHTML = localStorage.getItem('tasks');
  button.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.className = 'li-task';
    newTask.innerText = task.value;
    taskList.appendChild(newTask);
    task.value = '';
    if (button === '');
  });
}

addTask();

function selectTask() {
  const taskList = document.querySelector('ol');
  taskList.addEventListener('click', (event) => {
    const task = document.getElementsByTagName('li');
    for (let i = 0; i < task.length; i += 1) {
      task[i].classList.remove('selected');
    }
    const taskSelected = event.target;
    taskSelected.classList.add('selected');
  });
}

selectTask();

function completeTask() {
  const taskList = document.querySelector('ol');
  taskList.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

completeTask();

function clearAll() {
  const clearButton = document.querySelector('#apaga-tudo');
  clearButton.addEventListener('click', () => {
    const taskList = document.getElementById('lista-tarefas');
    taskList.innerHTML = '';
  });
}

clearAll();

function clearCompleted() {
  const completedButton = document.querySelector('#remover-finalizados');
  const taskList = document.getElementById('lista-tarefas');
  completedButton.addEventListener('click', () => {
    const tasksCompleted = document.querySelectorAll('.completed');
    for (let i = 0; i < tasksCompleted.length; i += 1) {
      taskList.removeChild(tasksCompleted[i]);
    }
  });
}

clearCompleted();

function saveList() {
  const saveButton = document.getElementById('salvar-tarefas');
  saveButton.addEventListener('click', () => {
    console.log('tesste');
    const listToSave = document.querySelector('#lista-tarefas').innerHTML;
    localStorage.setItem('tasks', `${listToSave}`);
  });
}

saveList();

function moveUp() {
  const upButton = document.getElementById('mover-cima');
  upButton.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.li-task');
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].previousSibling !== null && tasks[i].className.includes('selected')) {
        tasks[i].parentNode.insertBefore(tasks[i], tasks[i].previousSibling);
      }
    }
  });
}

moveUp();

function moveDown() {
  const downButton = document.getElementById('mover-baixo');
  downButton.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.li-task');
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].nextSibling !== null && tasks[i].classList.contains('selected')) {
        tasks[i].parentNode.insertBefore(tasks[i].nextSibling, tasks[i]);
      }
    }
  });
}

moveDown();

function removeSelected() {
  const clearButton = document.querySelector('#remover-selecionado');
  clearButton.addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    const taskList = document.querySelector('#lista-tarefas');
    taskList.removeChild(selected);
  });
}

removeSelected();