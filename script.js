const title = document.createElement('header');
title.innerText = 'Minha Lista de Tarefas';
document.body.appendChild(title);

const paragrafo = document.createElement('p');
paragrafo.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
paragrafo.id = 'funcionamento';
document.body.appendChild(paragrafo);

function createInputText() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.id = 'texto-tarefa';
  div.appendChild(input);
}
createInputText();

function createList() {
  const div2 = document.createElement('div');
  document.body.appendChild(div2);
  const list = document.createElement('ol');
  list.id = 'lista-tarefas';
  div2.appendChild(list);
}
createList();
