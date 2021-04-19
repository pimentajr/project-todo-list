const INPUT_TEXTO_TAREFA = document.getElementById('texto-tarefa');
const OL_LISTA_TAREFAS = document.getElementById('lista-tarefas');
const BTN_CRIAR_TAREFA = document.getElementById('criar-tarefa');

let lastTarget;

function insertNewListItem() {
  const NEW_LI = document.createElement('li');
  NEW_LI.innerText = INPUT_TEXTO_TAREFA.value;
  OL_LISTA_TAREFAS.appendChild(NEW_LI);
  INPUT_TEXTO_TAREFA.value = '';
}

function selectLi(event) {
  const CURRENT_TARGET = event.target;

  if (CURRENT_TARGET != lastTarget) {
    CURRENT_TARGET.style.backgroundColor = 'rgb(128, 128, 128)';
    if (lastTarget != undefined) {
      lastTarget.removeAttribute('style');
    }
  }
  lastTarget = CURRENT_TARGET;
}

window.onload = () => {
  BTN_CRIAR_TAREFA.addEventListener('click', insertNewListItem);
  OL_LISTA_TAREFAS.addEventListener('click', selectLi);
};
