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
function loadWindow() {
  addElementTable();
}

window.onload = loadWindow;
