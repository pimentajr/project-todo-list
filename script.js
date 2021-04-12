// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

// 6 - Ordene os itens da lista de tarefas por ordem de criação

const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

window.onload = function () {
  if (localStorage.tarefas) {
    listaTarefas.innerHTML = localStorage.tarefas;
  }
};

button.onclick = function criarTarefa() {
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = input.value;
  novaTarefa.className = 'tarefa';
  novaTarefa.backgroundColor = 'white';
  listaTarefas.appendChild(novaTarefa);
  input.value = '';
};

// 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)

// 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo

listaTarefas.onclick = function selecionarTarefa(event) {
  const tarefaSelecionada = document.getElementsByClassName('selected');
  for (let index = 0; index < tarefaSelecionada.length; index += 1) {
    tarefaSelecionada[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
};

// 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item

function completarTarefa(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
listaTarefas.addEventListener('dblclick', completarTarefa);

// 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista

const apagaTudo = document.querySelector('#apaga-tudo');
function apagarLista() {
  listaTarefas.innerHTML = '';
}

apagaTudo.addEventListener('click', apagarLista);

// 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista

const removerFinalizado = document.querySelector('#remover-finalizados');

function removerTarefaFinalizada() {
  const tarefaCompleta = document.querySelectorAll('.completed');
  for (let index = 0; index < tarefaCompleta.length; index += 1) {
    listaTarefas.removeChild(tarefaCompleta[index]);
  }
}
removerFinalizado.addEventListener('click', removerTarefaFinalizada);

// 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava

const botaoSalvarTarefas = document.querySelector('#salvar-tarfas');
botaoSalvarTarefas.onclick = function salvarTarefas() {
  localStorage.tarefas = listaTarefas.innerHTML;
};

// 13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas

const botaoMoveCima = document.querySelector('#mover-cima');
const botaoMoveBaixo = document.querySelector('#mover-baixo');

botaoMoveCima.onclick = function () {
  for (let index = 0; index < tarefa.length; index += 1) {
    if (tarefa[index].classList.contains('selected')) {
      const aux = tarefa[index - 1];
      tarefa[index - 1] = tarefa[index];
      tarefa[index] = aux;
    }
  }
}
