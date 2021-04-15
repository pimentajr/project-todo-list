const selectList = document.querySelector('#lista-tarefas');
const selectButton = document.querySelector('#criar-tarefa');
const selectInput = document.getElementById('texto-tarefa');

function generateListItems() {
  selectButton.addEventListener('click', () => {
    const inputTask = selectInput.value;
    const createTask = document.createElement('li');
    createTask.innerHTML = inputTask;
    selectList.appendChild(createTask);
    createTask.className = 'item-lista';
    selectInput.value = '';
  });
}
generateListItems();

function selectTasks() {
  selectList.addEventListener('click', (selectItems) => {
    const eventTarget = selectItems.target;
    const selectItem = document.querySelectorAll('li');
    selectItem.forEach((element) => element.classList.remove('selected'));
    eventTarget.classList.add('selected');
  });
}
selectTasks();

function itemCompleted() {
  selectList.addEventListener('dblclick', (element) => {
    const eventTarget = element.target;
    eventTarget.classList.toggle('completed');
  });
}
itemCompleted();

function clearAll() {
  const selectButtonClearAll = document.querySelector('#apaga-tudo');
  selectButtonClearAll.addEventListener('click', () => {
    selectList.innerHTML = '';
  });
}
clearAll();

function removeFinalizados() {
  const selectButtonRemoveFinalizados = document.querySelector('#remover-finalizados');
  selectButtonRemoveFinalizados.addEventListener('click', () => {
    const finalizados = document.querySelectorAll('.completed');
    finalizados.forEach((element) => element.remove());
  });
}
removeFinalizados();

function removeSelected() {
  const selectButtonRemoveSelected = document.querySelector('#remover-selecionado');
  selectButtonRemoveSelected.addEventListener('click', () => {
    const selected = document.querySelectorAll('.selected');
    selected.forEach((element) => element.remove());
  });
}
removeSelected();

/* Ajuda Fillizzola, Vitor e Rodolfo */
function btnToSave() {
  const btnSave = document.querySelector('#salvar-tarefas');
  btnSave.addEventListener('click', () => {
    localStorage.setItem('listItems', selectList.innerHTML);
  });
  selectList.innerHTML = localStorage.getItem('listItems');
}
btnToSave();

/* Ajuda Kaio e Jean */
function selectorUp() {
  const btnMoverCima = document.querySelector('#mover-cima');
  btnMoverCima.addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    if (selected && selected.previousSibling) {
      selectList.insertBefore(selected, selected.previousSibling);
    }
  });
}
selectorUp();

function selectorDown() {
  const btnMoverBaixo = document.querySelector('#mover-baixo');
  btnMoverBaixo.addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    if (selected && selected.nextSibling) {
      selected.parentNode.insertBefore(selected.nextSibling, selected);
    }
  });
}
selectorDown();
