const btnCreateTask = document.querySelector('#criar-tarefa');
const listTask = document.querySelector('#lista-tarefas');
const textTask = document.querySelector('#texto-tarefa');
const selectedTask = document.getElementsByClassName('selected');
const btnDelTasks = document.querySelector('#apaga-tudo');
const btnRemoveTasksFinish = document.querySelector('#remover-finalizados');
const liAssignment = document.querySelectorAll('.li-assignment');
const tasksFinish = document.querySelectorAll('.completed');
const btnSaveTasks = document.querySelector('#salvar-tarefas');


function createTask() {
  btnCreateTask.addEventListener('click', () => {
    if (textTask.value !== '') {
      const createLi = document.createElement('li');
      createLi.innerText = textTask.value;
      createLi.className = 'li-assignment';
      listTask.appendChild(createLi);
      textTask.value = '';
    }
  });
}

function alterBackColorTask() {
  listTask.addEventListener('click', (event) => {
    if (selectedTask[0]) {
      selectedTask[0].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

function checkTask() {
  listTask.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

function delTasks() {
  btnDelTasks.addEventListener('click', () => {
    for (let index = 0; index < liAssignment.length; index += 1) {
      liAssignment[index].remove();
    }
  });
}

function removeTasksFinish() {
  btnRemoveTasksFinish.addEventListener('click', () => {
    for (let index = 0; index < tasksFinish.length; index += 1) {
      tasksFinish[index].remove();
    }
  });
}

function saveTasks() {
  localStorage.savedTasks = listTask.innerHTML;
}

function loadSavedTasks() {
  if (localStorage.savedTasks !== undefined) {
    listTask.innerHTML = localStorage.listTask;
  }
}

window.onload = () => {
  createTask();
  alterBackColorTask();
  checkTask();
  delTasks();
  removeTasksFinish();
  saveTasks();
  loadSavedTasks();
};
