const title = document.getElementById('title');
const funcionamento = document.getElementById('funcionamento');
const buttonCriarTarefa = document.getElementById('criar-tarefa');
const inputTextoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const buttonRemoverFinalizados = document.getElementById('remover-finalizados');
const buttonApagarTudo = document.getElementById('apaga-tudo');
const buttonMoverParaCima = document.getElementById('mover-cima');
const buttonMoverParaBaixo = document.getElementById('mover-baixo');
const buttonRemoverSelecionados = document.getElementById('remover-selecionado');
const buttonSalvarTarefas = document.getElementById('salvar-tarefas');

title.innerText = 'Minha Lista de Tarefas';
funcionamento.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
buttonCriarTarefa.innerText = 'Adicionar';
buttonRemoverFinalizados.innerText = 'Remover finalizados';
buttonApagarTudo.innerText = 'Apagar lista';
buttonMoverParaCima.innerText = 'Sobe';
buttonMoverParaBaixo.innerText = 'Desce';
buttonRemoverSelecionados.innerText = 'Remover selecionados';
buttonSalvarTarefas.innerText = 'Salvar lista';

function adicionarTarefa() {
  const itemListaTarefa = document.createElement('li');
  itemListaTarefa.classList.add('tarefa');
  listaTarefas.appendChild(itemListaTarefa);
  itemListaTarefa.innerText = inputTextoTarefa.value;
  inputTextoTarefa.value = '';
}

function alteraCorItemListaTarefa(itensListaTarefa) {
  const tarefaGrifada = document.getElementsByClassName('selected');
  if (tarefaGrifada.length === 0) {
    itensListaTarefa.target.classList.add('selected');
    tarefaGrifada[0].style.background = 'rgb(128, 128, 128)';
  } else {
    tarefaGrifada[0].style.background = 'white';
    tarefaGrifada[0].classList.remove('selected');
    itensListaTarefa.target.classList.add('selected');
    tarefaGrifada[0].style.background = 'rgb(128, 128, 128)';
  }
}

function riscarItemListaTarefa(itensListaTarefa) {
  const itemCompleted = itensListaTarefa.target;
  if (itemCompleted.classList.contains('completed')) {
    itemCompleted.classList.remove('completed');
    itemCompleted.style.textDecoration = 'none';
  } else {
    itemCompleted.classList.add('completed');
    itemCompleted.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  }
}

function apagaItensFinalizados() {
  const itensFinalizados = document.getElementsByClassName('completed');
  for (let index = itensFinalizados.length - 1; index >= 0; index -= 1) {
    itensFinalizados[index].remove();
  }
}

function apagaListaToda() {
  const itensListaTarefa = document.getElementsByClassName('tarefa');
  for (let index = itensListaTarefa.length - 1; index >= 0; index -= 1) {
    itensListaTarefa[index].remove();
  }
}

function apagaItensSelecionados() {
  const itensSelecionados = document.getElementsByClassName('selected');
  for (let index = itensSelecionados.length - 1; index >= 0; index -= 1) {
    itensSelecionados[index].remove();
  }
}

// Material que me ajudou: https://www.javascripttutorial.net/javascript-dom/javascript-siblings/
function subirItemLista() {
  const itemToUp = document.querySelector('.selected');
  if (itemToUp) {
    const itensListaTarefa = document.getElementsByClassName('tarefa');
    if (itemToUp !== itensListaTarefa[0]) {
      const prevSibling = itemToUp.previousSibling;
      itemToUp.parentNode.insertBefore(itemToUp, prevSibling);
    }
  }
}

function descerItemLista() {
  const itemToDown = document.querySelector('.selected');
  if (itemToDown) {
    const itensListaTarefa = document.getElementsByClassName('tarefa');
    if (itemToDown !== itensListaTarefa[itensListaTarefa.length - 1]) {
      const nxtSibling = itemToDown.nextSibling;
      itemToDown.parentNode.insertBefore(nxtSibling, itemToDown);
    }
  }
}

function salvarTarefas() {
  localStorage.setItem('myToDoList', listaTarefas.innerHTML);
}

function abrirTarefa() {
  const savedFile = localStorage.getItem('myToDoList');
  listaTarefas.innerHTML = savedFile;
}

window.onload = function opening() {
  abrirTarefa();
};

buttonCriarTarefa.addEventListener('click', adicionarTarefa);
listaTarefas.addEventListener('click', alteraCorItemListaTarefa);
listaTarefas.addEventListener('dblclick', riscarItemListaTarefa);
buttonRemoverFinalizados.addEventListener('click', apagaItensFinalizados);
buttonApagarTudo.addEventListener('click', apagaListaToda);
buttonRemoverSelecionados.addEventListener('click', apagaItensSelecionados);
buttonMoverParaCima.addEventListener('click', subirItemLista);
buttonMoverParaBaixo.addEventListener('click', descerItemLista);
buttonSalvarTarefas.addEventListener('click', salvarTarefas);
