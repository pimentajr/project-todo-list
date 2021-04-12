// function to abreviate createElement
function create(tag) {
  return document.createElement(tag);
}

// function to abreviate appendChild
function add(father, child) {
  return father.appendChild(child);
}

// Task 1
// body and header declaration
const { body } = document;

const header = create('header');
add(body, header);

// add text to header
header.innerHTML = '<b>Minha Lista de Tarefas</b>';
header.style.fontSize = '20px';

// Task 2
// description declaration
const descrp = create('p');
add(body, descrp);

// add text and id to descrp
descrp.id = 'funcionamento';
descrp.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

// Task 3
// input declaration
const input = create('input');
add(body, input);

// add id to input
input.id = 'texto-tarefa';

// Task 4
// ordered list declaration
const list = create('ol');
add(body, list);

// add id to list
list.id = 'list-tarefas';

// start function
function start() {

}

// window.onload
window.onload = () => start();
