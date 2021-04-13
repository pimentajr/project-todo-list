const title = document.createElement('header');
title.innerText = 'Minha Lista de Tarefas';
document.body.appendChild(title);

const paragrafo = document.createElement('p');
paragrafo.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
paragrafo.id = 'funcionamento';
document.body.appendChild(paragrafo);
