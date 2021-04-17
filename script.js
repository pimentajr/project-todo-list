/*
Project Todo List
@author Fernando Lasmar
*/

const adicionarItens = document.getElementById('criar-tarefa');
const tarefa = document.getElementById('texto-tarefa');
const lista = document.getElementById('lista-tarefas');
// Requisito 5
adicionarItens.addEventListener('click', () => {
  const criarItem = document.createElement('li');
  criarItem.innerText = tarefa.value;
  lista.appendChild(criarItem);
  tarefa.value = '';
  tarefa.focus();
});

// 7,8
lista.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') { // para descobrir qual elemento disparou um evento
    const itemSelecionado = document.querySelector('.selecao');
    if (itemSelecionado !== null) {
      itemSelecionado.classList.remove('selecao');
    }
    event.target.classList.add('selecao');
  }
});

// 9
lista.addEventListener('dblclick', (event) => { // duplo click
  if (event.target.tagName === 'LI') { // para descobrir qual elemento disparou um evento
    event.target.classList.toggle('completed');
  }
});

// 10
const limpar = document.getElementById('apaga-tudo');

function limparLista() {
  limpar.addEventListener('click', () => {
    lista.innerHTML = '';
  });
}
limparLista();

// 11
const limparFinalizados = document.getElementById('remover-finalizados');
const tarefaFinalizados = document.getElementsByClassName('completed');

function finalizados() {
  limparFinalizados.addEventListener('click', () => {
    for (let index = tarefaFinalizados.length; index > 0; index -= 1) {
      const removeFinalizados = tarefaFinalizados[index - 1]; // nova variavel para receber itens da lista que quero remover
      lista.removeChild(removeFinalizados); // O método removeChild () remove um nó filho especificado do elemento especificado.
    }
  });
}
finalizados();

// 12
const botaoSalvar = document.getElementById('salvar-tarefas');
// O método setItem () define o valor do item do objeto de armazenamento especificado.
// O método getItem () retorna o valor do item do objeto de armazenamento especificado.

function salvarLista() {
  botaoSalvar.addEventListener('click', () => {
    localStorage.setItem('salvarLista', lista.innerHTML);
  });
  const salvar = localStorage.getItem('salvarLista');
  if (salvar) {
    lista.innerHTML = salvar;
  }
}
salvarLista();

// 13
const botaoCima = document.getElementById('mover-cima');
// A propriedade previousElementSibling retorna o elemento anterior do elemento especificado, no mesmo nível de árvore.
// O insertAdjacentElement()método insere o elemento especificado em uma posição especificada.

botaoCima.addEventListener('click', () => {
  const itemSelecionado = document.querySelector('.selecao');
  if (itemSelecionado && itemSelecionado.previousElementSibling) {
    itemSelecionado.insertAdjacentElement('afterend', itemSelecionado.previousElementSibling);
  }
});

const botaoBaixo = document.getElementById('mover-baixo');
// A propriedade nextElementSibling retorna o elemento imediatamente após o elemento especificado, no mesmo nível de árvore.
// O método insertBefore () insere um nó como filho, logo antes de um filho existente, que você especifica.

botaoBaixo.addEventListener('click', () => {
  const itemSelecionado = document.querySelector('.selecao');
  if (itemSelecionado && itemSelecionado.nextElementSibling) {
    lista.insertBefore(itemSelecionado.nextElementSibling, itemSelecionado);
  }
});

const botaoSelecionado = document.getElementById('remover-selecionado');

botaoSelecionado.addEventListener('click', () => {
  const itemSelecionado = document.querySelector('.selecao');
  lista.removeChild(itemSelecionado);
});
