const list = document.getElementById('lista-tarefas');
const inptText = document.querySelector('#texto-tarefa');
const btnAdd = document.getElementById('criar-tarefa');
const clear = document.getElementById('apaga-tudo');

function makingList() {
  const mkLi = document.createElement('li');
  mkLi.innerHTML = inptText.value;
  list.appendChild(mkLi);
  inptText.value = '';
}

btnAdd.addEventListener('click', makingList);

function liBackColor(event) {
  if (event.target.tagName === 'LI') {
    const selected = document.querySelector('li.selected');
    if(selected) selected.className= '';
    event.target.className= 'selected';
  }
}

list.addEventListener('click', liBackColor);

function clearAll () {
  list.innerHTML = '';
}

clear.addEventListener('click',clearAll);