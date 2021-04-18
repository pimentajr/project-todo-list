const textoTarefa = document.querySelector('input#texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const lista = document.querySelector('ol#lista-tarefas');
const apagaTudo = document.getElementById('apaga-tudo');
const removerFinalizados = document.getElementById('remover-finalizados');
const completed = document.getElementsByClassName('completed');
const salvarTarefas = document.getElementById('salvar-tarefas');
const moverCima = document.getElementById('mover-cima');
const moverBaixo = document.getElementById('mover-baixo');
const selTarefa = document.getElementsByClassName('selected');
const removerSelecionados = document.getElementById('remover-selecionados');

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
  const sel = document.querySelector('.selected');
  if (sel) {
    sel.classList.remove('selected');
  }
  evento.classList.add('selected');
});

// função para riscar item
lista.addEventListener('dblclick', (event) => {
  const evt = event.target.classList;
  if (evt.contains('completed')) {
    evt.remove('completed');
  } else {
    evt.add('completed');
  }
});

// função para apagar tudo
apagaTudo.addEventListener('click', () => {
  lista.innerHTML = '';
});

// função para remover tarefas
removerFinalizados.addEventListener('click', () => {
  for (let index = completed.length - 1; index >= 0; index -= 1) {
    completed[index].remove();
  }
});

// função para salvar tarefas
salvarTarefas.addEventListener('click', () => {
  localStorage.setItem(lista, lista.innerHTML);
});

// salvando listas no local Storage
const saved = localStorage.getItem(lista);
lista.innerHTML = saved;

// função para mover item para cima
moverCima.addEventListener('click', () => {
  for (let index = 0; index < selTarefa.length; index += 1) {
    if (selTarefa[index].previousElementSibling != null) {
      const aux = selTarefa[index];
      lista.insertBefore(aux, aux.previousSibling);
    }
  }
});

// função para mover item para baixo
moverBaixo.addEventListener('click', () => {
  for (let index = 0; index < selTarefa.length; index += 1) {
    if (selTarefa[index].nextElementSibling != null) {
      const aux = selTarefa[index];
      lista.insertBefore(aux.nextSibling, aux);
    }
  }
});

// função para remover selecionados
removerSelecionados.addEventListener('click', () => {
  for (let index = 0; index < selTarefa.length; index += 1) {
    const selItem = selTarefa[index].className;
    if (selItem.indexOf('selected') > -1) {
      selTarefa[index].parentNode.removeChild(selTarefa[index]);
    }
  }
});
