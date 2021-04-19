const INPUT_TEXTO_TAREFA = document.getElementById('texto-tarefa');
const OL_LISTA_TAREFAS = document.getElementById('lista-tarefas');
const BTN_CRIAR_TAREFA = document.getElementById('criar-tarefa');
const LI_COMPLETED = document.getElementsByClassName('completed')

let lastTargetSelected;

function insertNewListItem() {
  const NEW_LI = document.createElement('li');
  NEW_LI.innerText = INPUT_TEXTO_TAREFA.value;
  OL_LISTA_TAREFAS.appendChild(NEW_LI);
  INPUT_TEXTO_TAREFA.value = '';
}

function selectLi(event) {
  const CURRENT_TARGET = event.target;

  if (CURRENT_TARGET != lastTargetSelected) {
    CURRENT_TARGET.classList.add('selected');
    if (lastTargetSelected != undefined) {
      lastTargetSelected.classList.remove('selected');
    }
  }
  lastTargetSelected = CURRENT_TARGET;
}

function completedTask(event) {
  const CURRENT_TARGET = event.target;
  if (CURRENT_TARGET.classList[0] === 'completed' || CURRENT_TARGET.classList[1] === 'completed') {
    CURRENT_TARGET.classList.remove('completed');
  } else {
    CURRENT_TARGET.classList.add('completed');
  }
}

window.onload = () => {
  BTN_CRIAR_TAREFA.addEventListener('click', insertNewListItem);
  OL_LISTA_TAREFAS.addEventListener('click', selectLi);
  OL_LISTA_TAREFAS.addEventListener('dblclick', completedTask);
};
