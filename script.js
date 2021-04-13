const button = document.getElementById('criar-tarefa');
const listaOrdenada = document.getElementById('lista-tarefas');

function criaLista() {
 const entradaDeTexto = document.getElementById('texto-tarefa'); 
 button.addEventListener('click', function () {
  const recebe = document.createElement('li');
  recebe.innerHTML = entradaDeTexto.value;
  listaOrdenada.appendChild(recebe);
  entradaDeTexto.value = null;
 });
}
criaLista();
