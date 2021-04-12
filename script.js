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
header.innerText = 'Minha Lista de Tarefas';

// Task 2
// description declaration
const descrp = create('p');
add(body, descrp);

// add text to descrp
descrp.id = 'funcionamento';
descrp.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

// start function
function start() {

}

// window.onload
window.onload = () => start();
