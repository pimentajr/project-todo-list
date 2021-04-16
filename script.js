// for (let index = 0; index <= localStorage.length; index += 1) {
//   localStorage.getItem(localStorage[index]);
//   console.log(localStorage[index]);
// }

const btnCriar = document.querySelector('#criar-tarefa');
btnCriar.addEventListener('click', () => {
  const valor = document.querySelector('#texto-tarefa');
  const listaOl = document.querySelector('#lista-tarefas');
  const newLi = document.createElement('li');
  listaOl.appendChild(newLi);
  newLi.classList.add('tarefa');
  newLi.innerText = valor.value;
  valor.value = '';
});

const lista = document.querySelector('#lista-tarefas');
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

// const btnSalvar = document.querySelector('#salvar-tarefas');
// btnSalvar.addEventListener('click', () => {
//   const tarefas = document.querySelectorAll('.tarefa');
//   for (let index = 0; index <= tarefas.length; index += 1) {
//     const valor = tarefas[index].innerHTML;
//     localStorage.setItem(index, valor);
//     console.log(valor);
//   }
// });

const btnRemoverSelecionado = document.querySelector('#remover-selecionado');
btnRemoverSelecionado.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  selected.remove('li');
});
// npm run lint
// npm run lint:styles
// npm run cypress:open
