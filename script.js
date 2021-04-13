const title = document.getElementById('title');
const funcionamento = document.getElementById('funcionamento');
const buttonCriarTarefa = document.getElementById('criar-tarefa');
const inputTextoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

title.innerText = 'Minha Lista de Tarefas';
funcionamento.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
buttonCriarTarefa.innerText = 'Adicionar';

function adicionarTarefa() {
  let itemListaTarefa = document.createElement('li');
  itemListaTarefa.classList.add('tarefa');
  listaTarefas.appendChild(itemListaTarefa);
  itemListaTarefa.innerText = inputTextoTarefa.value;
  inputTextoTarefa.value = '';
}

const itensListaTarefa = document.getElementsByClassName('tarefa');

function alteraCorItemListaTarefa(itensListaTarefa) {
  console.log(document.getElementsByClassName('tarefa-grifada').length)
  if (document.getElementsByClassName('tarefa-grifada').length === 0) {
    itensListaTarefa.target.classList.add('tarefa-grifada');
    document.getElementsByClassName('tarefa-grifada')[0].style.background = 'rgb(128, 128, 128)';
  } else {
    document.getElementsByClassName('tarefa-grifada')[0].style.background = 'white';
    document.getElementsByClassName('tarefa-grifada')[0].classList.remove('tarefa-grifada')
    itensListaTarefa.target.classList.add('tarefa-grifada');
    document.getElementsByClassName('tarefa-grifada')[0].style.background = 'rgb(128, 128, 128)';
  }
  
}

buttonCriarTarefa.addEventListener('click', adicionarTarefa);
listaTarefas.addEventListener('click', alteraCorItemListaTarefa);
