const textInput = document.getElementById('texto-tarefa');
const myOl = document.getElementById('lista-tarefas');
const addTarefa = document.getElementById('criar-tarefa');
const resetAll = document.getElementById('apaga-tudo');
const completedTarefa = document.getElementById('remover-finalizados');

function listItem() {
  const tarefaLi = document.createElement('li');
  tarefaLi.innerText = textInput.value;
  myOl.appendChild(tarefaLi);
  textInput.value = '';
}
let ultimoItem;
const listCompleted = [];

function selectListItem(event) {
  const itemAtual = event.target;

  if (itemAtual !== ultimoItem) {
    itemAtual.classList.add('selected');
    if (ultimoItem !== undefined) {
      ultimoItem.classList.remove('selected');
    }
  } ultimoItem = itemAtual;
}

function completeItemList(event) {
  const itemAtual = event.target;
  if (itemAtual.classList[0] === 'completed' || itemAtual.classList[1] === 'completed') {
    itemAtual.classList.remove('completed');
    listCompleted.splice(listCompleted.length - 1, 1);
  } else {
    itemAtual.classList.add('completed');
    listCompleted.push(itemAtual);
  }
}

function removeCompleteItems() {
  for (let index = 0; index < listCompleted.length; index += 1) {
    listCompleted[index].remove();
  }
}

function clearAllOl() {
  myOl.innerHTML = '';
}

window.onload = () => {
  addTarefa.addEventListener('click', listItem);
  completedTarefa.addEventListener('click', removeCompleteItems);
  resetAll.addEventListener('click', clearAllOl);
  myOl.addEventListener('click', selectListItem);
  myOl.addEventListener('dblclick', completeItemList);
};
