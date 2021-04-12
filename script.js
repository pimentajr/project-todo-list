const header = document.createElement('header');
header.innerHTML = '<strong>Minha Lista de Tarefas</strong>';
document.body.appendChild(header);

const paragraph = document.createElement('p');
paragraph.id = 'funcionamento';
paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
document.body.appendChild(paragraph);

const input = document.createElement('input');
input.id = 'texto-tarefa';
input.type = 'text';
document.body.appendChild(input);

const lista = document.createElement('ol');
lista.id = 'lista-tarefas';
document.body.appendChild(lista);
