const btnCriar = document.querySelector('#criar-tarefa');
btnCriar.addEventListener('click', () => {
  const valor = document.querySelector('#texto-tarefa');
  const listaOl = document.querySelector('#lista-tarefas');
  const newLi = document.createElement('li');
  listaOl.appendChild(newLi);
  newLi.classList.add = 'value-list';
  newLi.innerText = valor.value;
  valor.value = '';
});

// npm run lint
// npm run lint:styles
// npm run cypress:open
