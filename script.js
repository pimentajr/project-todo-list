// capturar todos os elementos em constantes antes de criar as funçoes

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
}

criarTarefa.addEventListener('click', createListItem);
