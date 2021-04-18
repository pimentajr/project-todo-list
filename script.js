const btnCriarTarefa = document.getElementById('criar-tarefa');
const olListaTarefas = document.getElementById('lista-tarefas');
const inputTextoTarefa = document.getElementById('texto-tarefa');


function insertNewListItem() {
  const newLi = document.createElement('li');
  newLi.innerText = inputTextoTarefa.value;
  olListaTarefas.appendChild(newLi);
  eraseInputValue();
}

function eraseInputValue() {
  inputTextoTarefa.value = '';
}

window.onload = () => {
  btnCriarTarefa.addEventListener('click', insertNewListItem)
}