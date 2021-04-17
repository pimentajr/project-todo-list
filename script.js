const list = document.getElementById('lista-tarefas');
const inptText = document.querySelector('#texto-tarefa');
const btnAdd = document.getElementById('criar-tarefa');
const clear = document.getElementById('apaga-tudo');
const btnFinalized = document.getElementById('remover-finalizados');
const btnDelete = document.getElementById('remover-selecionado');
const btnSave = document.getElementById('salvar-tarefas');
const btnUp = document.getElementById('mover-cima');
const btnDown = document.getElementById('mover-baixo');
const selUpDown = document.getElementsByClassName('selected');

function makingList() {
  if (inptText.value === '') {
    alert('vazio');
    return false;
  }
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

list.addEventListener('click', liBackColor);

function clearAll() {
  list.innerHTML = '';
}

clear.addEventListener('click', clearAll);

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

function save() {
  localStorage.setItem('list', list.innerHTML);
}

const saved = localStorage.getItem('list');
list.innerHTML = saved;

btnSave.addEventListener('click', save);

function listUp() {
  for (let i = 0; i < selUpDown.length; i += 1) {
    if (selUpDown[i].previousElementSibling != null) {
      const item = selUpDown[i];
      list.insertBefore(item, item.previousSibling);
    }
  }
}

btnUp.addEventListener('click', listUp);

function listDown() {
  for (let i = 0; i < selUpDown.length; i += 1) {
    if (selUpDown[i].nextElementSibling != null) {
      const item = selUpDown[i];
      list.insertBefore(item.nextSibling, item);
    }
  }
}

btnDown.addEventListener('click', listDown);
