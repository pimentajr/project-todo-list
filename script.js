const addTask = document.getElementById('criar-tarefa');
const listTasks = document.getElementById('lista-tarefas');

// Button Adiciona tarefa.
function addNewTalks() {
  addTask.addEventListener('click', () => {
    const textTalks = document.getElementById('texto-tarefa');
    const itenTasks = document.createElement('li');
    localStorage.setItem('inputNew', textTalks.value);
    itenTasks.innerText = localStorage.getItem('inputNew');
    listTasks.appendChild(itenTasks);
    textTalks.value = '';
  });
}
addNewTalks();

// Pinta item da lista, e remove cor do item da lista
function colorItemList() {
  listTasks.addEventListener('click', (event) => {
    const myEvent = event.target;
    const myItenlist = document.getElementsByTagName('li');
    if (myEvent.localName === 'li') {
      for (let index = 0; index < myItenlist.length; index += 1) {
        myItenlist[index].classList.remove('selected');
      }
      myEvent.classList.add('selected');
    }
  });
}
colorItemList();

// Risca item da lista.
function streakItemList() {
  listTasks.addEventListener('dblclick', (itemEvent) => {
    const newEvent = itemEvent.target;
    newEvent.classList.toggle('completed');
  });
}
streakItemList();

// Button limpar lista inteira
const clearMylist = document.getElementById('lista-tarefas');
const buttonClear = document.getElementById('apaga-tudo');
function clearList() {
  clearMylist.innerHTML = '';
}
buttonClear.addEventListener('click', clearList);

// Button remove itens da lista finalizados
const buttonFinish = document.getElementById('remover-finalizados');
function clearItenStrike() {
  const liComp = document.querySelectorAll('.completed');
  for (let index = 0; index < liComp.length; index += 1) {
    liComp[index].remove();
  }
}
buttonFinish.addEventListener('click', clearItenStrike);

// Button Salva lista.
const buttonSave = document.getElementById('salvar-tarefas');
clearMylist.innerHTML = localStorage.getItem('list');
function buttonSaved() {
  localStorage.setItem('list', clearMylist.innerHTML);
}
buttonSave.addEventListener('click', buttonSaved);

// Button Move para cime e Button para baixo
const buttonUp = document.getElementById('mover-cima');
const buttonDown = document.getElementById('mover-baixo');

// Button remove itens da lista selecionados pintados
const buttonClearSelected = document.getElementById('remover-selecionado');
function clearItenSelected() {
  const liCompSele = document.querySelectorAll('.selected');
  for (let index = 0; index < liCompSele.length; index += 1) {
    liCompSele[index].remove();
  }
}
buttonClearSelected.addEventListener('click', clearItenSelected);
