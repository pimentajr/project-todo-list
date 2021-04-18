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
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
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
