const textoTarefa = document.querySelector('input#texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const lista = document.querySelector('ol#lista-tarefas');
const apagaTudo = document.getElementById('apaga-tudo');
const removerFinalizados = document.getElementById('remover-finalizados')
const completed = document.getElementsByClassName('completed');
const salvarTarefas = document.getElementById('salvar-tarefas');

// função criar tarefa
criarTarefa.addEventListener('click', () => {
  const item = document.createElement('li');
  item.classList.add('lista-itens');
  item.appendChild(document.createTextNode(textoTarefa.value));
  lista.appendChild(item);
  textoTarefa.value = '';
});

// função para selecionar item
lista.addEventListener('click', (event) => {
  const evento = event.target;
  const selTarefa = document.querySelector('.selected');
  if (selTarefa) {
    selTarefa.classList.remove('selected');
  }
  evento.classList.add('selected');
});

// função par riscar item
lista.addEventListener('dblclick', (event) => {
  const evt = event.target.classList;
  if (evt.contains('completed')) {
    evt.remove('completed');
  } else {
    evt.add('completed');
  }
});

apagaTudo.addEventListener('click', () => {
  lista.innerHTML = '';
});

removerFinalizados.addEventListener('click', () => {
  for (let index = completed.length - 1; index >= 0; index -= 1) {
    completed[index].remove();
  };
});

salvarTarefas.addEventListener('click', () => {
  localStorage.setItem(lista, lista.innerHTML )
})

const saved = localStorage.getItem(lista);
  lista.innerHTML = saved;
