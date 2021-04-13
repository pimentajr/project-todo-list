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
