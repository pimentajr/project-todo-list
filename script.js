const textoTarefa = document.querySelector('#texto-tarefa');
const criarTarefa = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

function addTarefaClick() {
  const tarefa = document.createElement('li');

  tarefa.innerText = textoTarefa.value;
  listaTarefas.appendChild(tarefa);

  textoTarefa.value = '';
}

function addTarefaKeypress(event) {
  if (event.keyCode === 13) {
    const tarefa = document.createElement('li');

    tarefa.innerText = textoTarefa.value;
    tarefa.className = 'tarefa';
    listaTarefas.appendChild(tarefa);

    textoTarefa.value = '';
  }
}

criarTarefa.addEventListener('click', addTarefaClick);
textoTarefa.addEventListener('keypress', addTarefaKeypress);

function removerSelecao() {
  for (let index = 0; index < listaTarefas.children.length; index += 1) {
    listaTarefas.children[index].classList.remove('selected');
  }
}

function selecionarTarefa(event) {
  const element = event.target;

  if (element.className.includes('tarefa')) {
    removerSelecao();
    element.classList.add('selected');
  }
}

listaTarefas.addEventListener('click', selecionarTarefa);
