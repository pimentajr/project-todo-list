
function addElementTable () {
  let clickComand = document.getElementById('criar-tarefa');
  clickComand.addEventListener('click', function () {
    let inputText = document.getElementById('texto-tarefa');
    let listTask = document.getElementById('lista-tarefas');
    let createdIl = document.createElement('li');
    createdIl.innerText = inputText.value;
    listTask.appendChild(createdIl);
    inputText.value = '';
  })
}
function loadWindow() {
  addElementTable();
}

window.onload =loadWindow;