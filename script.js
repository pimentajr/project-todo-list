const INPUT_TEXTO_TAREFA = document.getElementById('texto-tarefa');
const OL_LISTA_TAREFAS = document.getElementById('lista-tarefas');
const BTN_CRIAR_TAREFA = document.getElementById('criar-tarefa');
const BTN_APAGA_TUDO = document.getElementById('apaga-tudo');
const BTN_REMOVER_FINALIZADOS = document.getElementById('remover-finalizados');

let lastTargetSelected;
let completedTaskArray = [];

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
    completedTaskArray.splice(completedTaskArray.length-1, 1);
  } else {
    CURRENT_TARGET.classList.add('completed');
    completedTaskArray.push(CURRENT_TARGET);
  }
}

function removeCompletedTasks() {
  for (const INDEX of completedTaskArray) {
    INDEX.remove();
  }
}

function clearList() {
  OL_LISTA_TAREFAS.innerHTML = '';
}

window.onload = () => {
  BTN_CRIAR_TAREFA.addEventListener('click', insertNewListItem);
  BTN_APAGA_TUDO.addEventListener('click', clearList);
  BTN_REMOVER_FINALIZADOS.addEventListener('click', removeCompletedTasks);
  OL_LISTA_TAREFAS.addEventListener('click', selectLi);
  OL_LISTA_TAREFAS.addEventListener('dblclick', completedTask);
};
