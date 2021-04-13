const textoTarefa = document.getElementById('texto-tarefa');

function gerar() {
  const lista = document.getElementById('lista-tarefa');
  const item = document.createElement('li');
  item.appendChild(document.createTextNode(textoTarefa.value));
  lista.appendChild(item);
  console.log(textoTarefa.value);
}
const criarTarefa = document.getElementById('criar-tarefa');
criarTarefa.addEventListener('click', gerar);
