// Cria cabeçalho;

const header = document.createElement('header');
header.innerText = 'Minha Lista de Tarefas';
document.body.appendChild(header);

// Cria título;

const body = document.querySelector('body');
const paragraph = document.createElement('p');
paragraph.id = 'funcionamento';
paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
body.appendChild(paragraph);

// Cria input;

const input = document.createElement('input');
input.id = 'texto-tarefa';
body.appendChild(input);

// Cria order list;

const orderList = document.createElement('ol');
orderList.id = 'lista-tarefas';
body.appendChild(orderList);
