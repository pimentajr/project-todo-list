const btnCreateTask = document.querySelector('#criar-tarefa');
const listTask = document.querySelector('#lista-tarefas');
const textTask = document.querySelector('#texto-tarefa');
const selectedTask = document.getElementsByClassName('selected');
const btnDelTasks = document.querySelector('#apaga-tudo');
const btnRemoveTasksFinish = document.querySelector('#remover-finalizados');

function createTask() {
  btnCreateTask.addEventListener('click', () => {
    if (textTask.value !== '') {
      const createLi = document.createElement('li');
      createLi.innerHTML = textTask.value;
      createLi.className = 'li-assignment';
      listTask.appendChild(createLi);
      textTask.value = '';
    }
  });
}

function alterBackColorTask() {
  listTask.addEventListener('click', function(event) {
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
    let liAssignment = document.querySelectorAll('.li-assignment');
    for (let index = 0; index < liAssignment.length; index += 1) {
      liAssignment[index].remove();
    }
  });
}

function removeTasksFinish() {
  btnRemoveTasksFinish.addEventListener('click', () => {
    let tasksFinish = document.querySelectorAll('.completed');
    for (let index = 0; index < tasksFinish.length; index += 1) {
      tasksFinish[index].remove();
    }
  });
}

window.onload = () => {
  createTask();
  alterBackColorTask();
  checkTask();
  delTasks();
  removeTasksFinish();
};
