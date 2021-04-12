const btnCreateTask = document.querySelector('#criar-tarefa');
const listTask = document.querySelector('#lista-tarefas');
const textTask = document.querySelector('#texto-tarefa');

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
    const selectedTask = document.getElementsByClassName('selected');
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

window.onload = () => {
  createTask();
  alterBackColorTask();
 checkTask();
};
