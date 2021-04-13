const title = document.getElementById('title');
const funcionamento = document.getElementById('funcionamento');
const buttonCriarTarefa = document.getElementById('criar-tarefa');
const inputTextoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

title.innerText = 'Minha Lista de Tarefas';
funcionamento.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
buttonCriarTarefa.innerText = 'Adicionar';

function adicionarTarefa() {
  var itemListaTarefa = document.createElement('li');

  itemListaTarefa.classList.add('tarefa');
  listaTarefas.appendChild(itemListaTarefa);
  itemListaTarefa.innerText = inputTextoTarefa.value;
  inputTextoTarefa.value = '';
}

buttonCriarTarefa.addEventListener('click', adicionarTarefa);