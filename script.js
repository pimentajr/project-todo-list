const body = document.querySelector('body');
const header = document.createElement('header');
header.innerText = 'Minha Lista de Tarefas';
header.id = 'header';
body.appendChild(header);

const paragraph = document.createElement('p');
paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
paragraph.id = 'funcionamento';
body.appendChild(paragraph);
