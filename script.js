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

function addColor() {
  const item = document.querySelectorAll('.item-list');
  for (let index = 0; index < item.length; index += 1) {
    let color = item[index];
    color.addEventListener('click', (event) => {
      event.target.classList.add.className = 'seleted'
    })
  }
}
addColor();

const ordenedList = document.querySelector('#lista-tarefas');

function selectItem(event) {
  const target = event.target;
  target.style.backgroundColor = 'rgb(128, 128, 128)';
}
ordenedList.addEventListener('click', selectItem);
