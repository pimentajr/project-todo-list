const btn = document.getElementById('criar-tarefa');
const texto = document.querySelector('#texto-tarefa');
const listaOrdenada = document.getElementById('lista-tarefas');

function botao(e) {
  const addLi = document.createElement('li');
  addLi.innerText = texto.value;
  listaOrdenada.appendChild(addLi);
  texto.value = '';
  console.log(e.target);
}

btn.addEventListener('click', botao);
