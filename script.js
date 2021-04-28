window.onload = () => {
  backgroundSelected();
  finishedItem();
  fapagaTudo();
  fapagaCompletos();
//  saveList();
//  clearSelec();
};

const buttonAdd = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function addTask() {
  const inputTask = document.getElementById('texto-tarefa');
  const newTask = document.createElement('li');
  newTask.innerText = inputTask.value;
  taskList.appendChild(newTask);
  inputTask.value = '';
}

buttonAdd.addEventListener('click', addTask);

function backgroundSelected() {
  taskList.addEventListener('click', (event) => {
    const paintGrey = event.target;
    const selectedTask = document.querySelectorAll('li');
    for (let index = 0; index < selectedTask.length; index += 1) {
      selectedTask[index].classList.remove('selected');
    }
    paintGrey.classList.add('selected');
  });
}

function finishedItem() {
  taskList.addEventListener('dblclick', (event) => {
    const crossTask = event.target;
    crossTask.classList.toggle('completed');
  });
}

function fapagaTudo() {
  const apagaTudo = document.querySelector('#apaga-tudo');
  apagaTudo.addEventListener('click', () => {
    taskList.innerHTML = '';
  });
}

function fapagaCompletos() {
  const apagarCompletos = document.querySelector('#remover-finalizados');
  apagarCompletos.addEventListener('click', () => {
    const concluidos = document.querySelectorAll('.completed');
    for (let index = 0; index < concluidos.length; index += 1) {
      taskList.removeChild(concluidos[index]);
    }
  });
}