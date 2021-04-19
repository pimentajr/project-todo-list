const btn = document.getElementById('criar-tarefa');
const texto = document.querySelector('#texto-tarefa');
const listaOrdenada = document.getElementById('lista-tarefas');
const btnrm = document.getElementById('apaga-tudo');
const btnrmcpd = document.getElementById('remover-finalizados');
const btnSave = document.getElementById('salvar-tarefas');

function botao(e) {
  const addLi = document.createElement('li');
  addLi.innerText = texto.value;
  listaOrdenada.appendChild(addLi);
  texto.value = '';
  console.log(e.target);
}

btn.addEventListener('click', botao);

function piked(e) {
  if (document.querySelectorAll('.selected').length === 0) {
    e.target.classList.add('selected');
  } else {
    document.querySelectorAll('.selected')[0].classList.remove('selected');
    e.target.classList.add('selected');
  }
}

listaOrdenada.addEventListener('click', piked);

function concluido(a) {
  if (a.target.className === 'completed selected') {
    a.target.classList.remove('completed');
  } else {
    a.target.classList.add('completed');
    console.log(a.target);
  }
}

listaOrdenada.addEventListener('dblclick', concluido);

function removeAll() {
  const ol = document.querySelector('ol');
  while (ol.firstChild) {
    ol.removeChild(document.querySelector('li'));
  }
}

btnrm.addEventListener('click', removeAll);

function removeCompleted() {
  const ol = document.querySelector('ol');
  for (let index = 0; index < document.querySelectorAll('li').length; index += 1) {
    ol.removeChild(document.querySelector('.completed'));
  }
}

btnrmcpd.addEventListener('click', removeCompleted);

listaOrdenada.innerHTML = localStorage.getItem('list');

function saveList() {
  const list = document.querySelector('#lista-tarefas').innerHTML;
  localStorage.setItem('list', list);
}

btnSave.addEventListener('click', saveList);
