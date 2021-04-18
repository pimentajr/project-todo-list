const BTN_CRIAR_TAREFA = document.getElementById('criar-tarefa');
const OL_LISTA_TAREFAS = document.getElementById('lista-tarefas');
const INPUT_TEXTO_TAREFA = document.getElementById('texto-tarefa');


function insertNewListItem() {
  const newLi = document.createElement('li');
  newLi.innerText = INPUT_TEXTO_TAREFA.value;
  OL_LISTA_TAREFAS.appendChild(newLi);
  eraseInputValue();
}

function eraseInputValue() {
  INPUT_TEXTO_TAREFA.value = '';
}

window.onload = () => {
  BTN_CRIAR_TAREFA.addEventListener('click', insertNewListItem)
}