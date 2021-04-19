const botao = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas'); // ol
const textoTarefa = document.getElementById('texto-tarefa'); // input

function onItemListaClick(event) {
  const selectedItem = document.querySelector('.selected');

  if (selectedItem !== null) {
    selectedItem.classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function onItemListaDblClick(event) {
  // if (event.target.classList.contains('completed')) {
  //   event.target.classList.remove('completed');
  // } else {
  //   event.target.classList.add('completed');
  // }
  event.target.classList.toggle('completed');
}

function addTarefaNaLista() {
  if (textoTarefa.value !== '') {
    const itemLista = document.createElement('li');
    itemLista.innerText = textoTarefa.value;
    textoTarefa.value = '';
    listaTarefas.appendChild(itemLista);
    itemLista.addEventListener('click', onItemListaClick);
    itemLista.addEventListener('dblclick', onItemListaDblClick);
  }
}

botao.addEventListener('click', addTarefaNaLista);

const botaoLimpaLista = document.getElementById('apaga-tudo');

function onLimpaLista() {
  listaTarefas.innerHTML = '';
}

botaoLimpaLista.addEventListener('click', onLimpaLista);

const botaoRemoveFinalizados = document.getElementById('remover-finalizados');

function onRemoveFinalizados() {
  const finalizados = listaTarefas.querySelectorAll('.completed');
  for (let index = 0; index < finalizados.length; index += 1) {
    finalizados[index].remove();
  }
}

botaoRemoveFinalizados.addEventListener('click', onRemoveFinalizados);
