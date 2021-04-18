const BTN_CRIAR_TAREFA = document.getElementById('criar-tarefa');
const OL_LISTA_TAREFAS = document.getElementById('lista-tarefas');
const INPUT_TEXTO_TAREFA = document.getElementById('texto-tarefa');


function insertNewListItem() {
  const NEW_LI = document.createElement('li');
  NEW_LI.innerText = INPUT_TEXTO_TAREFA.value;
  OL_LISTA_TAREFAS.appendChild(NEW_LI);
  eraseInputValue();
}

function eraseInputValue() {
  INPUT_TEXTO_TAREFA.value = '';
}

window.onload = () => {
  BTN_CRIAR_TAREFA.addEventListener('click', insertNewListItem)
}