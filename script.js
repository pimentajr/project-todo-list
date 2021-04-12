function getElementFromInput(inputText, listTask) {
  const createdIl = document.createElement('li');
  createdIl.innerText = inputText.value;
  listTask.appendChild(createdIl);
  inputText.value = '';
  return  
}
function addElementTable() {
  const clickComand = document.getElementById('criar-tarefa');
  const inputText = document.getElementById('texto-tarefa');
  const listTask = document.getElementById('lista-tarefas');
  clickComand.addEventListener('click', function () {getElementFromInput(inputText, listTask)});
}
function loadWindow() {
  addElementTable();
}

window.onload = loadWindow;
