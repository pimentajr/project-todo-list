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

// 7
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
