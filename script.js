const textoTarefa = document.getElementById('texto-tarefa');

function gerar() {
  const lista = document.querySelector('ol#lista-tarefas');
  const item = document.createElement('li');
  item.appendChild(document.createTextNode(textoTarefa.value));
  lista.appendChild(item);
  console.log(textoTarefa.value);
}
const criarTarefa = document.getElementById('criar-tarefa');
criarTarefa.addEventListener('click', gerar);
