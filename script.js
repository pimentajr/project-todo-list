function elementFromInput(inputText, listTask) {
  const createdIl = document.createElement('li');
  createdIl.innerText = inputText.value;
  listTask.appendChild(createdIl);
  const newInputText = inputText;
  newInputText.value = '';
}
function addElementTable() {
  const clickComand = document.getElementById('criar-tarefa');
  const inputText = document.getElementById('texto-tarefa');
  const listTask = document.getElementById('lista-tarefas');
  clickComand.addEventListener('click', function un() { elementFromInput(inputText, listTask); });
}
function loadWindow() {
  addElementTable();
}

window.onload = loadWindow;
