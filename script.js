const criarTarefa = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const listTarefas = document.getElementById('lista-tarefas');
const listaTarefaArr = listTarefas.children;

function getText() {
  const criaLista = document.createElement('li');
  listTarefas.appendChild(criaLista);
  if (textoTarefa.value !== '') {
    listTarefas.lastChild.innerText = textoTarefa.value;
    textoTarefa.value = '';
  } else {
    listTarefas.lastChild.remove();
  }
}

function rowText(div) {
  if (div.path[0].classList.value === 'row') {
    div.path[0].classList.remove('row');
  } else {
    div.path[0].classList.add('row');
  }
}

function removeColor() {
  for (let index = 0; index < listTarefas.childNodes.length; index += 1) {
    listTarefas.childNodes[index].style.backgroundColor = '';
    listaTarefaArr[index].addEventListener('dblclick', rowText);
  }
}

function setListColor(e) {
  removeColor();
  if (e.target.innerText) {
    e.target.style.backgroundColor = 'rgb(128,128,128)';
  }
}

listTarefas.addEventListener('click', setListColor);
criarTarefa.addEventListener('click', getText);
