function elementFromInput() {
  const inputText = document.getElementById('texto-tarefa');
  const listTask = document.querySelector('#lista-tarefas');
  const createdIl = document.createElement('li');
  createdIl.innerText = inputText.value;
  listTask.appendChild(createdIl);
  const newInputText = inputText;
  newInputText.value = '';
}
function addElementTable() {
  const clickComand = document.getElementById('criar-tarefa');
  clickComand.addEventListener('click', elementFromInput);
}
function toColorIten(element) {
  const itensFromList = document.getElementsByTagName('li');
  for (let index = 0; index < itensFromList.length; index += 1) {
    itensFromList[index].style.backgroundColor = '';
  }
  const selectedItem = element.target;
  selectedItem.style.backgroundColor = 'rgb(128, 128, 128)';
}
function markElement(element) {
  const selectedItem = element.target;
  if (selectedItem.classList[0] === 'completed') {
    selectedItem.classList.remove('completed');
  } else {
    selectedItem.classList.add('completed');
  }
}
function selectListItens() {
  const listItens = document.getElementById('lista-tarefas');
  listItens.addEventListener('click', toColorIten);
  listItens.addEventListener('dblclick', markElement);
}
function eraseList() {
  const parentyList = document.getElementById('lista-tarefas');
  parentyList.innerHTML = '';
}
function deleteList() {
  const buttonDeletelist = document.getElementById('apaga-tudo');
  buttonDeletelist.addEventListener('click', eraseList);
}
function deleteItens() {
  const concludeItenstoDelete = document.getElementsByClassName('completed');
  for (let index = concludeItenstoDelete.length - 1; index >= 0; index -= 1) {
    concludeItenstoDelete[index].parentElement.removeChild(concludeItenstoDelete[index]);
  }
}
function concludeItens() {
  const removeConcludeBotton = document.querySelector('#remover-finalizados');
  removeConcludeBotton.addEventListener('click', deleteItens);
}
function loadWindow() {
  addElementTable();
  selectListItens();
  deleteList();
  concludeItens();
}

window.onload = loadWindow;
