// capturar todos os elementos em constantes antes de criar as funçoes

// const header = document.querySelector('header');

// const funcionamento = document.querySelector('#funcionamento');

const textoTarefa = document.querySelector('#texto-tarefa');

const criarTarefa = document.querySelector('#criar-tarefa');

const listaDeTarefas = document.querySelector('#lista-tarefas');

// 5. Clicar o botão com id="criar-tarefa" faz o conteúdo ir para o final da lista
// 6. Ordene os itens da lista de tarefas por ordem de criação

function createListItem() {
  const textoTarefaValue = textoTarefa.value;

  const criaItensLista = document.createElement('li');
  criaItensLista.className = 'itens-tarefa';
  criaItensLista.innerText = textoTarefaValue;

  listaDeTarefas.appendChild(criaItensLista);

  textoTarefa.value = '';
}

criarTarefa.addEventListener('click', createListItem);

// 7. Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)
// 8. Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo

function selectItem(event) {
  const evento = event.target;
  const selectedItens = document.querySelectorAll('.itens-tarefa');

  for (let index = 0; index < selectedItens.length; index += 1) {
    selectedItens[index].classList.remove('selected');
  }

  if (evento.classList.contains('itens-tarefa')) {
    evento.classList.add('selected');
  }
}

listaDeTarefas.addEventListener('click', selectItem);

// 9.  Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item

function completeItem(event) {
  const evento = event.target.classList;

  if (evento.contains('completed')) {
    evento.remove('completed');
  } else {
    evento.add('completed');
  }
}

listaDeTarefas.addEventListener('dblclick', completeItem);
