const title = document.getElementById('title');
const funcionamento = document.getElementById('funcionamento');
const buttonCriarTarefa = document.getElementById('criar-tarefa');
const inputTextoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const buttonRemoverFinalizados = document.getElementById('remover-finalizados');
const buttonApagarTudo = document.getElementById('apaga-tudo');
const buttonMoverParaCima = document.getElementById('mover-cima');
const buttonMoverParaBaixo = document.getElementById('mover-baixo');
const buttonRemoverSelecionado = document.getElementById('remover-selecionado');
const buttonSalvarTarefas = document.getElementById('salvar-tarefas');

title.innerText = 'Minha Lista de Tarefas';
funcionamento.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
buttonCriarTarefa.innerText = 'Adicionar';
buttonRemoverFinalizados.innerText = 'Remover finalizados';
buttonApagarTudo.innerText = 'Apagar lista';
buttonMoverParaCima.innerText = 'Sobe';
buttonMoverParaBaixo.innerText = 'Desce';
buttonRemoverSelecionado.innerText = 'Remover selecionados';
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

// inverterTarefa('olá', 3)

// function inverterTarefa(hello, index) {
//   let itemListaTarefa = document.createElement('li');
//   itemListaTarefa.classList.add('tarefa');
//   itensListaTarefa[index].innerText = hello;
//   console.log(hello, index)
// }

// function subirItemLista(e) {
//   let itensSelecionados = document.getElementsByClassName('selected');
//   let itensListaTarefa = document.getElementsByClassName('tarefa').marker
//   console.log(itensListaTarefa)
//   console.log(typeof(itensListaTarefa))
//   if (itensSelecionados.length === 1) {
//     let textoItemSelecionado = itensSelecionados[0].innerText
//     console.log(textoItemSelecionado)
//     let indexItemSelecionado = itensListaTarefa.indexOf(textoItemSelecionado)
//     console.log(indexItemSelecionado)
//     itensListaTarefa[indexItemSelecionado] = itensListaTarefa[indexItemSelecionado - 1]
//     itensListaTarefa[indexItemSelecionado - 1] = textoItemSelecionado
//   console.log(e.target)
// }

buttonCriarTarefa.addEventListener('click', adicionarTarefa);
listaTarefas.addEventListener('click', alteraCorItemListaTarefa);
listaTarefas.addEventListener('dblclick', riscarItemListaTarefa);
buttonRemoverFinalizados.addEventListener('click', apagaItensFinalizados);
buttonApagarTudo.addEventListener('click', apagaListaToda);
buttonRemoverSelecionado.addEventListener('click', apagaItensSelecionados);
// buttonMoverParaCima.addEventListener('click', subirItemLista)
