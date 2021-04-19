const list = document.getElementById('lista-tarefas');
const apagaTudo = document.getElementById('apaga-tudo');
const apagaFinalizados = document.getElementById('remover-finalizados');
const listacompleted = document.getElementsByClassName('completed');

function addNewTaskBtn() {
  const newListItem = document.createElement('li');
  const taskText = document.getElementById('texto-tarefa');

  list.appendChild(newListItem).innerHTML = taskText.value;
  taskText.value = '';
}

const addNewTask = () => {
  const btnCreateTask = document.getElementById('criar-tarefa');
  btnCreateTask.addEventListener('click', addNewTaskBtn);
};

addNewTask();

function paintGrey() {
  list.addEventListener('click', (event) => {
    const selected = document.querySelector('.fundo-cinza');

    if (selected != null) {
      selected.classList.remove('fundo-cinza');
    }
    event.target.classList.add('fundo-cinza');
  });
}

paintGrey();

function scratchLine() {
  list.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

scratchLine();

function deleteAll() {
  apagaTudo.addEventListener('click', () => {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  });
}

deleteAll();

function removeFinished() {
  apagaFinalizados.addEventListener('click', () => {
    while (listacompleted.length > 0) {
      listacompleted[0].parentNode.removeChild(listacompleted[0]);
    }
  });
}

removeFinished();
