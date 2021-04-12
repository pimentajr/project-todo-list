const btnCreateTask = document.querySelector('#criar-tarefa');
const listTask = document.querySelector('#lista-tarefas');
const textTask = document.querySelector('#texto-tarefa');
const selectedTask = document.getElementsByClassName('selected');
const btnDelTasks = document.querySelector('#apaga-tudo');
const btnRemoveTasksFinish = document.querySelector('#remover-finalizados');
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
    const liAssignment = document.querySelectorAll('.li-assignment');
    for (let index = 0; index < liAssignment.length; index += 1) {
      liAssignment[index].remove();
    }
  });
}

function removeTasksFinish() {
  btnRemoveTasksFinish.addEventListener('click', () => {
    const tasksFinish = document.querySelectorAll('.completed');
    for (let index = 0; index < tasksFinish.length; index += 1) {
      tasksFinish[index].remove();
    }
  });
}

function saveTasksList() {
  localStorage.setItem('tasks', listTask.innerHTML);
}
btnSaveTasks.addEventListener('click', saveTasksList);

function getTasksList() {
  listTask.innerHTML = localStorage.getItem('tasks');
}
getTasksList();

window.onload = () => {
  createTask();
  alterBackColorTask();
  checkTask();
  delTasks();
  removeTasksFinish();
};
