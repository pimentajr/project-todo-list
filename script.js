// Create li element
function createAndAddLiItem() {
  const orderedList = document.getElementById('lista-tarefas');
  const createLi = document.createElement('li');
  const inputText = document.getElementById('texto-tarefa');
  const text = inputText.value;
  createLi.innerText = text;
  orderedList.appendChild(createLi);
  inputText.value = '';
}

function createEventlisteners() {
  const createActivity = document.getElementById('criar-tarefa');
  createActivity.addEventListener('click', createAndAddLiItem);
}

function init() {
  createEventlisteners();
}

window.onload = init;
