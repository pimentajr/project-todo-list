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

function removerSelected() {
  const tarefas = document.querySelectorAll('.tarefa');

  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].classList.remove('selected');
  }
}

function addSelected(event) {
  if (event.target.className.includes('tarefa')) {
    removerSelected();
    event.target.classList.add('selected');
  }
}

listaTarefas.addEventListener('click', addSelected);
