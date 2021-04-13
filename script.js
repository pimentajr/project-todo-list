/*
Project Todo List
@author Fernando Lasmar
*/
// Requisito 5
const adicionarItens = document.getElementById('criar-tarefa');

adicionarItens.addEventListener('click', () => {
  const tarefa = document.getElementById('texto-tarefa');
  const lista = document.getElementById('lista-tarefas');
  const criarItem = document.createElement('li');
  criarItem.innerText = tarefa.value;
  lista.appendChild(criarItem);
  tarefa.value = '';
});
