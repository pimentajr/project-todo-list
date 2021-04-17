const btnCriar = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');
btnCriar.addEventListener('click', () => {
  const valor = document.querySelector('#texto-tarefa');
  const newLi = document.createElement('li');
  lista.appendChild(newLi);
  newLi.classList.add('tarefa');
  newLi.classList.add('list-group-item');
  newLi.innerText = valor.value;
  valor.value = '';
});

lista.addEventListener('click', (event) => {
  const selected = document.querySelectorAll('.selected');
  for (let index = 0; index < selected.length; index += 1) {
    selected[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
  lista.classList.remove('selected');
});

lista.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});

const btnLimparTudo = document.querySelector('#apaga-tudo');
btnLimparTudo.addEventListener('click', () => {
  lista.innerHTML = '';
});

const btnRemoverFinalizados = document.querySelector('#remover-finalizados');
btnRemoverFinalizados.addEventListener('click', () => {
  const completed = document.querySelectorAll('.completed');
  for (let index = 0; index < completed.length; index += 1) {
    completed[index].remove('li');
  }
});

const btnSalvar = document.querySelector('#salvar-tarefas');
btnSalvar.addEventListener('click', () => {
  localStorage.setItem('lista-tarefas', lista.innerHTML);
});

const local = localStorage.getItem('lista-tarefas');
lista.innerHTML = local;

const btnMoveCima = document.querySelector('#mover-cima');
btnMoveCima.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected) {
    const selectedPrevious = selected.previousElementSibling;
    if (selectedPrevious) {
      lista.insertBefore(selected, selectedPrevious);
    }
  }
});

const btnMoveBaixo = document.querySelector('#mover-baixo');
btnMoveBaixo.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected) {
    const selNext = selected.nextElementSibling;
    if (selNext) {
      lista.insertBefore(selected, selNext.nextElementSibling);
    }
  }
});

const btnRemoverSelecionado = document.querySelector('#remover-selecionado');
btnRemoverSelecionado.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  selected.remove('li');
});

// npm run lint
// npm run lint:styles
// npm run cypress:open
