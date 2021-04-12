// function to abreviate createElement
function create(tag) {
  return document.createElement(tag);
}

// function to abreviate appendChild
function add(father, child) {
  return father.appendChild(child);
}

const { body } = document;
const header = create('header');
add(body, header);

header.innerText = 'Minha Lista de Tarefas';

function start() {

}

window.onload = () => start();
