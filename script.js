const list = document.getElementById('lista-tarefas');
const inptText = document.querySelector('#texto-tarefa');
const btnAdd = document.getElementById('criar-tarefa');

function makingList () {
  const mkLi = document.createElement('li');
  mkLi.innerHTML = inptText.value;
  list.appendChild(mkLi);
  inptText.value = '';
}
btnAdd.addEventListener('click', makingList)