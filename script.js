const btnCriar = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');
btnCriar.addEventListener('click', () => {
  const valor = document.querySelector('#texto-tarefa');
  const newLi = document.createElement('li');
  lista.appendChild(newLi);
  newLi.classList.add('tarefa');
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
console.log(local);
lista.innerHTML = local;

// const btnMoveCima = document.querySelector('#mover-cima');
// btnMoveCima.addEventListener('click', () => {
//   const lista = document.querySelectorAll('.tarefa');
//   const selected = document.querySelector('.selected');
// });

// const btnMoveBaixo = document.querySelector('#mover-baixo');
// btnMoveBaixo.addEventListener('click', () => {
//   const lista = document.querySelectorAll('.tarefa');
//   const selected = document.querySelector('.selected');
// });

const btnRemoverSelecionado = document.querySelector('#remover-selecionado');
btnRemoverSelecionado.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  selected.remove('li');
});

// npm run lint
// npm run lint:styles
// npm run cypress:open
