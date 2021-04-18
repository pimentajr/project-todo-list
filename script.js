const botao = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas'); // ol
const textoTarefa = document.getElementById('texto-tarefa'); // input

function backColorItemSelected(event) {
  const selectedItem = document.querySelector('.selected');

  if (selectedItem !== null) {
    selectedItem.classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function addTarefaNaLista() {
  if (textoTarefa.value !== '') {
    const itemLista = document.createElement('li');
    itemLista.innerText = textoTarefa.value;
    textoTarefa.value = '';
    listaTarefas.appendChild(itemLista);
    itemLista.addEventListener('click', backColorItemSelected);
  }
}

botao.addEventListener('click', addTarefaNaLista);
