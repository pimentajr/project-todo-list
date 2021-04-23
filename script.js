const list = document.getElementById('lista-tarefas');
function btnAddNewTask() {
  const newListItem = document.createElement('li');
  const taskText = document.getElementById('texto-tarefa');
  list.appendChild(newListItem).innerHTML = taskText.value;
  taskText.value = '';
}
const addNewTask = () => {
  const btnCreateTask = document.getElementById('criar-tarefa');
  btnCreateTask.addEventListener('click', btnAddNewTask);
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
function textLine() {
  list.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}
textLine();
function clearAll() {
  const btnClear = document.getElementById('apaga-tudo');
  btnClear.addEventListener('click', () => {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  });
}
clearAll();
function deleteFinished() {
  const btnDeleteFinished = document.getElementById('remover-finalizados');
  btnDeleteFinished.addEventListener('click', () => {
    const finished = document.querySelectorAll('.completed');
    for (let index = 0; index < finished.length; index += 1) {
      list.removeChild(finished[index]);
    }
  });
}
deleteFinished();
function salvamento() {
  const salvarLI = list.innerHTML;
  localStorage.listaSalva = salvarLI;
}
function carregarListaSalva() {
  if (localStorage.listaSalva) {
    list.innerHTML = localStorage.listaSalva;
  }
}
carregarListaSalva();
const btnSave = document.getElementById('salvar-tarefas');
btnSave.addEventListener('click', salvamento);

const tasks = document.getElementsByTagName('li');

function deleteSelected() {
  const selected = document.querySelector('.fundo-cinza');

  for (let index = 0; index < tasks.length; index += 1) {
    list.removeChild(selected);
  }
}

const btnDeleteSelected = document.getElementById('remover-selecionado');
btnDeleteSelected.addEventListener('click', deleteSelected);
