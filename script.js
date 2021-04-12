// capturar todos os elementos em constantes antes de criar as funçoes

// const header = document.querySelector('header');

// const funcionamento = document.querySelector('#funcionamento');

const textoTarefa = document.querySelector('#texto-tarefa');

const criarTarefa = document.querySelector('#criar-tarefa');

const listaDeTarefas = document.querySelector('#lista-tarefas');

const apagaTudo = document.querySelector('#apaga-tudo');

const removerFinalizados = document.querySelector('#remover-finalizados');

const removerSelecionado = document.querySelector('#remover-selecionado');

const salvarTarefas = document.querySelector('#salvar-tarefas');

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

// 10. Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista

function deleteAllList() {
  const listaDeTarefasChildren = listaDeTarefas.children;

  for (let index = (listaDeTarefasChildren.length - 1); index >= 0; index -= 1) {
    listaDeTarefas.removeChild(listaDeTarefasChildren[index]);
  }
  localStorage.clear();
}

apagaTudo.addEventListener('click', deleteAllList);

// 11. Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista

function deleteCompleted() {
  const completedItens = document.querySelectorAll('.completed');

  for (let index = (completedItens.length - 1); index >= 0; index -= 1) {
    listaDeTarefas.removeChild(completedItens[index]);
  }
}

removerFinalizados.addEventListener('click', deleteCompleted);

// BONUS - 14. Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado

function removeSelected() {
  const selectedItem = document.querySelector('.selected');

  listaDeTarefas.removeChild(selectedItem);
}

removerSelecionado.addEventListener('click', removeSelected);

// 12. Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava

function saveList() {
  localStorage.clear();

  const lista = document.querySelectorAll('.itens-tarefa');

  for (let index = 0; index < lista.length; index += 1) {
    const saveItens = lista[index].innerText;
    const positionItem = `item + ${[index]}`;
    localStorage.setItem(positionItem, saveItens);
    const saveClass = lista[index].className;
    const positionClass = `class + ${[index]}`;
    localStorage.setItem(positionClass, saveClass);
  }
}

salvarTarefas.addEventListener('click', saveList);

//

function returnList() {
  if (localStorage.length !== 0) {
    for (let index = 0; index < (localStorage.length / 2); index += 1) {
      const positionItem = `item + ${[index]}`;
      const saveItens = localStorage.getItem(positionItem);
      const positionClass = `class + ${[index]}`;
      const saveClass = localStorage.getItem(positionClass);
      const criaItensLista = document.createElement('li');
      criaItensLista.innerText = saveItens;
      criaItensLista.className = saveClass;
      listaDeTarefas.appendChild(criaItensLista);
    }
  }
}

window.onload = returnList;
