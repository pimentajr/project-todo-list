// Cria um Header
function addHeader() {
  const header = document.createElement('header');
  header.id = 'header';
  document.body.appendChild(header);
  const title = document.createElement('h1');
  title.innerText = 'Minha Lista de Tarefas';
  document.querySelector('#header').appendChild(title);
}
addHeader();

// Cria primeira section com um parágrafo e texto
function addFirstSection() {
  const section = document.createElement('section');
  section.id = 'firstsection';
  document.body.appendChild(section);
  const paragraph = document.createElement('p');
  paragraph.id = 'funcionamento';
  paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  section.appendChild(paragraph);
}
addFirstSection();

// Cria um input para o usuário poder digitar o item
function addInput() {
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  document.querySelector('#firstsection').appendChild(input);
}
addInput();

// Cria o botão que irá adicionar um novo item a lista
function addBtnNewItem() {
  const button = document.createElement('button');
  button.id = 'criar-tarefa'
  button.innerText = 'Adicionar'
  document.querySelector('#firstsection').appendChild(button);
}
addBtnNewItem();

// Adiciona função ao botão Adicionar
function addItem() {
  const addButton = document.querySelector('#criar-tarefa');
  addButton.addEventListener('click', () => {
    const valueItem = document.querySelector('#texto-tarefa').value;
    const itemList = document.createElement('li');
    itemList.innerText = valueItem;
    document.querySelector('#lista-tarefas').appendChild(itemList);
    document.querySelector('#texto-tarefa').value = '';
  })
}
addItem ();

// Cria segunda section
function addSecondSection() {
  const section = document.createElement('section');
  section.id = 'secondsection';
  document.body.appendChild(section);
}
addSecondSection();

// Cria uma lista ordenada
function addOl() {
  const ol = document.createElement('ol');
  ol.id = 'lista-tarefas';
  document.querySelector('#secondsection').appendChild(ol);
}
addOl();
