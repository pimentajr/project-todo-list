let botao = document.getElementById('criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas'); //ol
let textoTarefa = document.getElementById('texto-tarefa'); //input

botao.addEventListener('click', addTarefaNaLista);

function addTarefaNaLista() {
  if (textoTarefa.value !== '') {
    let itemLista = document.createElement('li');
    itemLista.innerText = textoTarefa.value;
    textoTarefa.value = '';
    listaTarefas.appendChild(itemLista);
  }
}
