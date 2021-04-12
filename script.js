const btnCriarTarefa = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const textTask = document.querySelector('#texto-tarefa');


function createTask() {
  btnCriarTarefa.addEventListener('click', () => {
    const createLi = document.createElement('li');
    createLi.innerHTML = textTask.value;
    createLi.className = 'li-assignment'
    listaTarefas.appendChild(createLi);
    textTask.value = '';
  });
}

function alterBackColorTask() {
  const liAssignment = document.querySelector('#lista-tarefas');
    liAssignment.addEventListener('click', (event) => {
      const selectedTask = document.getElementsByClassName('selected');
      if (selectedTask[0]) {
        selectedTask[0].classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
};

window.onload = () => {
  createTask();
  alterBackColorTask();
};
