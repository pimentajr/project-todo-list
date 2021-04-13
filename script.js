const list = document.getElementById('lista-tarefas');
const inptText = document.querySelector('#texto-tarefa');
const btnAdd = document.getElementById('criar-tarefa');
const clear = document.getElementById('apaga-tudo');
const btnFinalized = document.getElementById('remover-finalizados');

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

function clearAll() {
  list.innerHTML = '';
}

clear.addEventListener('click', clearAll);

function liDone(evento) {
  if (evento.target.tagName === 'LI') {
    const completed = document.querySelectorAll('li.completed');
    if(completed) completed.className= 'completed';
    evento.target.className= 'completed';
  }
}

list.addEventListener('dblclick', liDone);


 function clearFinalized () {
const complet = document.querySelectorAll('li.completed');
  for (i = 0; i < complet.length; i += 1) {
    complet[i].remove();
  }
}


btnFinalized.addEventListener('click', clearFinalized);

