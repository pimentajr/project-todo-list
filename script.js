const title = document.getElementById('title');
const funcionamento = document.getElementById('funcionamento');
const buttonCriarTarefa = document.getElementById('criar-tarefa');
const inputTextoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const buttonRemoverFinalizados = document.getElementById('remover-finalizados')
const buttonApagaTudo = document.getElementById('apaga-tudo');

title.innerText = 'Minha Lista de Tarefas';
funcionamento.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
buttonCriarTarefa.innerText = 'Adicionar';
buttonRemoverFinalizados.innerText = 'Remover finalizados'
buttonApagaTudo.innerText = 'Apagar lista'

function adicionarTarefa() {
  let itemListaTarefa = document.createElement('li');
  itemListaTarefa.classList.add('tarefa');
  listaTarefas.appendChild(itemListaTarefa);
  itemListaTarefa.innerText = inputTextoTarefa.value;
  inputTextoTarefa.value = '';
}

function alteraCorItemListaTarefa(itensListaTarefa) {
  var tarefaGrifada = document.getElementsByClassName('selected');
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
  if (itensListaTarefa.target.classList.contains('completed')) {
    itensListaTarefa.target.classList.remove('completed');
    itensListaTarefa.target.style.textDecoration = 'none';
  } else {
    itensListaTarefa.target.classList.add('completed');
    itensListaTarefa.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  }
}

function apagaItensFinalizados() {
  var itensFinalizados = document.getElementsByClassName('completed');
  for (let index = itensFinalizados.length - 1; index >=0 ; index -= 1) {
    itensFinalizados[index].remove();
  }
}

function apagaListaToda() {
  const itensListaTarefa = document.getElementsByClassName('tarefa');
  for (let index = itensListaTarefa.length -1; index >= 0; index -= 1) {
    itensListaTarefa[index].remove();
  }
}

buttonCriarTarefa.addEventListener('click', adicionarTarefa);
listaTarefas.addEventListener('click', alteraCorItemListaTarefa);
listaTarefas.addEventListener('dblclick', riscarItemListaTarefa);
buttonRemoverFinalizados.addEventListener('click', apagaItensFinalizados);
buttonApagaTudo.addEventListener('click', apagaListaToda)
