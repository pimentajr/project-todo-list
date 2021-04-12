const header = document.createElement('header');
header.innerHTML = '<strong>Minha Lista de Tarefas</strong>';
document.body.appendChild(header);

const paragraph = document.createElement('p');
paragraph.id = 'funcionamento';
paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
document.body.appendChild(paragraph);
