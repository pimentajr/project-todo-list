const list = document.getElementById('lista-tarefas');
const inptText = document.querySelector('#texto-tarefa');
const btnAdd = document.getElementById('criar-tarefa');
const clear = document.getElementById('apaga-tudo');
const btnFinalized = document.getElementById('remover-finalizados');
const btnDelete = document.getElementById('remover-selecionado');

function makingList() {
  const mkLi = document.createElement('li');
  mkLi.className = 'listItem';
  mkLi.innerHTML = inptText.value;
  list.appendChild(mkLi);
  inptText.value = '';
}

btnAdd.addEventListener('click', makingList);

function liBackColor(event) {
  const select = document.querySelectorAll('.selected');
  if (event.target.classList.contains('listItem')) {
    for (let i = 0; i < select.length; i += 1) {
      select[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
}

list.addEventListener ('click', liBackColor);

function clearAll() {
  list.innerHTML = '';
}

clear.addEventListener ('click', clearAll);

function liDone(evento) {
  if (evento.target.classList.contains('listItem')) {
    if (evento.target.classList.contains('completed') === true) {
      evento.target.classList.remove('completed');
    } else {
      evento.target.classList.add('completed');
    }
  }
}

list.addEventListener('dblclick', liDone);

function clearFinalized() {
  const complet = document.querySelectorAll('li.completed');
  for (let i = 0; i < complet.length; i += 1) {
    complet[i].remove();
  }
}

btnFinalized.addEventListener('click', clearFinalized);

function rmvSelected() {
  const delOne = document.querySelectorAll('.selected');
  for (let i = 0; i < delOne.length; i += 1) {
    delOne[i].remove();
  }
}

btnDelete.addEventListener('click', rmvSelected);
