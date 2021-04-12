// Requisito 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

button.onclick = function criarTarefa() {
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = input.value;
  listaTarefas.appendChild(novaTarefa);
  input.value = '';
};
