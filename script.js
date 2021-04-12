// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

// 6 - Ordene os itens da lista de tarefas por ordem de criação

const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

button.onclick = function criarTarefa() {
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = input.value;
  novaTarefa.className = 'tarefa';
  novaTarefa.backgroundColor = 'white';
  listaTarefas.appendChild(novaTarefa);
  input.value = '';
};

// 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)

listaTarefas.onclick = function selecionarTarefa(event) {
  const tarefaSelecionada = document.getElementsByClassName('selected');
  for (let index = 0; index < tarefaSelecionada.length; index += 1) {
    tarefaSelecionada[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
};
