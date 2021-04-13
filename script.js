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

list.id = 'lista-tarefas';
// list.style.listStyleType = 'none';

// Task 5
const button = create('button');
add(body, button);

button.id = 'criar-tarefa';
button.innerText = 'Criar Tarefa';

function createListItem() {
  const listItensAux = create('li');
  listItensAux.id = 'list-item';
  add(list, listItensAux);
  listItensAux.innerText = input.value;
  input.value = null;
}

// Task 6
// standard list sort...

// Task 7
function clickColorList(event) {
  const listElem = document.querySelectorAll('#list-item');
  for (let index = 0; index < listElem.length; index += 1) {
    listElem[index].style.background = 'white'; // Task 8
    const aux = event;
    aux.target.style.background = 'rgb(128, 128, 128)';
  }
}

// Task 9
function completedEvent(event) {
  const listElem = document.querySelectorAll('#list-item');
  for (let index = 0; index < listElem.length; index += 1) {
    const aux = event;
    aux.target.classList.add('completed');
  }
}

// start function
function start() {
  button.addEventListener('click', createListItem);
  list.addEventListener('click', clickColorList);
  list.addEventListener('dblclick', completedEvent);
}

// window.onload
window.onload = () => start();
