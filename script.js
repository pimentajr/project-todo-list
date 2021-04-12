const caixaDeTexto = document.querySelector('#texto-tarefa');
const botaoAdicionar = document.querySelector('#criar-tarefa');
const listaDeTarefas = document.querySelector('#lista-tarefas');

botaoAdicionar.addEventListener('click', event => {
  const novoLi = document.createElement('li');
  novoLi.innerText = caixaDeTexto.value;
  listaDeTarefas.appendChild(novoLi);
  caixaDeTexto.value = '';
});
function changeBg() {
  const eventTarget = event.target;
  const tarefaSelecionada = document.querySelector('.clickedItem');
  if (eventTarget.className !== 'clickedItem') {
    eventTarget.classList.add('clickedItem');
    tarefaSelecionada.classList.remove('clickedItem');
  }
}

listaDeTarefas.addEventListener('click', changeBg);
