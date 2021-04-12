function elementFromInput() {
  const inputText = document.getElementById('texto-tarefa');
  const listTask = document.getElementById('lista-tarefas');
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
function selectListItens() {
  const listItens = document.getElementById('lista-tarefas');
  listItens.addEventListener('click', toColorIten);
}
function loadWindow() {
  addElementTable();
  selectListItens();
}

window.onload = loadWindow;
