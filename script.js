const body = document.getElementById('body');
const header = document.createElement('header');
header.id = 'header';
header.innerText = 'Minha Lista de Tarefas';
body.appendChild(header);

const p = document.createElement('p');
p.id = 'funcionamento';
p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
body.appendChild(p);

const input = document.createElement('input');
input.id = 'texto-tarefa';
input.type = 'text';
body.appendChild(input);

const btn = document.createElement('button');
btn.id = 'criar-tarefa';
btn.innerText = 'Adicionar';
btn.type = 'submit';
body.appendChild(btn);

const list = document.createElement('ol');
list.id = 'lista-tarefas';
body.appendChild(list);

function getText() {
  const itemList = document.createElement('li');
  itemList.className = 'item-list';

  const getInput = input.value;
  itemList.innerHTML = getInput;
  list.appendChild(itemList);
  input.value = '';
}
btn.addEventListener('click', getText);

const listChange = document.querySelector('#lista-tarefas');

function changeBackgroundColor(event) {
  const line = document.querySelectorAll('.item-list');
  const target = event.target;
  for (let index = 0; index < line.length; index += 1) {
    line[index].classList.remove('selected');
  }
  target.classList.add('selected');
}
listChange.addEventListener('click', changeBackgroundColor);

function addClassCompleted(event) {
  const target = event.target;
  target.classList.toggle('completed');
}

listChange.addEventListener('dblclick', addClassCompleted);

const btnClean = document.createElement('button');
btnClean.id = 'apaga-tudo';
btnClean.innerText = 'Apagar'
body.appendChild(btnClean);

function cleanItemList() {
  listChange.innerHTML = '';
}

btnClean.addEventListener('click', cleanItemList);
