// function to abreviate createElement
function create(tag) {
  return document.createElement(tag);
}

// function to abreviate appendChild
function add(father, child) {
  return father.appendChild(child);
}

// Task 1
const { body } = document;
const header = create('header');
add(body, header);

header.innerHTML = '<b>Minha Lista de Tarefas</b>';
header.style.fontSize = '20px';

// Task 2
const descrp = create('p');
add(body, descrp);

descrp.id = 'funcionamento';
descrp.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

// Task 3
const input = create('input');
add(body, input);

input.id = 'texto-tarefa';

// Task 4
const list = create('ol');
add(body, list);

list.id = 'list-tarefas';
list.style.listStyleType = 'none';

// Task 5
const button = create('button');
add(body, button);

button.innerText = 'Clique Aqui';
button.id = 'criar-tarefa';

function createListItem() {
  const listItens = create('li');
  add(list, listItens);
  listItens.innerText = input.value;
}

// start function
function start() {
  button.addEventListener('click', createListItem);
}

// window.onload
window.onload = () => start();
