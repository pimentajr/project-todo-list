const BTN_CRIAR_TAREFA = document.getElementById('criar-tarefa');
const OL_LISTA_TAREFAS = document.getElementById('lista-tarefas');
const INPUT_TEXTO_TAREFA = document.getElementById('texto-tarefa');
const LI_LISTA_AFAZERES = document.getElementsByTagName('li');

let lastTarget;

function insertNewListItem() {
  const NEW_LI = document.createElement('li');
  NEW_LI.innerText = INPUT_TEXTO_TAREFA.value;
  OL_LISTA_TAREFAS.appendChild(NEW_LI);
  eraseInputValue();
}

function eraseInputValue() {
  INPUT_TEXTO_TAREFA.value = '';
}

function selectedLi(event) {
  const currentTarget = event.target;

  if (currentTarget.style.backgroundColor === "") {
    currentTarget.style.backgroundColor = 'rgb(128, 128, 128)';
  } else {
    currentTarget.removeAttribute("style");
  }
}

window.onload = () => {
  BTN_CRIAR_TAREFA.addEventListener('click', insertNewListItem);

  OL_LISTA_TAREFAS.addEventListener('click', selectedLi);
}