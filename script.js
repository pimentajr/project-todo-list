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
  button.id = 'criar-tarefa';
  button.innerText = 'Adicionar';
  document.querySelector('#firstsection').appendChild(button);
}
addBtnNewItem();

// Cria função que remove a classe dada como parâmetro
function removeAllClass(classToRemove) {
  const itens = document.querySelectorAll('.item');
  for (let index = 0; index < itens.length; index += 1) {
    itens[index].classList.remove(classToRemove);
  }
}

// Cria função que adiciona classe highlight a um dos itens e remove dos outros
function clickItem() {
  const itens = document.querySelectorAll('.item');
  for (let index = 0; index < itens.length; index += 1) {
    itens[index].addEventListener('click', () => {
      removeAllClass('highlight');
      itens[index].classList.add('highlight');
    });
  }
}

// Cria função que adiciona ou remove a classe completed
function itemCheck() {
  const items = document.querySelectorAll('.item');
  for (let index = 0; index < items.length; index += 1) {
    items[index].addEventListener('dblclick', () => {
      if(items[index].className.includes('completed') == false) {
        items[index].classList.add('completed');
      } else {
        items[index].classList.remove('completed');
      }
    });
  }
}
itemCheck()


// Adiciona função ao botão Adicionar
function addItem() {
  const addButton = document.querySelector('#criar-tarefa');
  addButton.addEventListener('click', () => {
    const valueItem = document.querySelector('#texto-tarefa').value;
    const itemList = document.createElement('li');
    itemList.className = 'item';
    itemList.innerText = valueItem;
    document.querySelector('#lista-tarefas').appendChild(itemList);
    document.querySelector('#texto-tarefa').value = '';
    clickItem();
    itemCheck();
  });
}
addItem();

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

// Cria função que apaga todos itens da lista
function clean() {
  let list = document.querySelectorAll('.item');
  for (let index = 0; index < list.length; index += 1) {
    list[index].remove();
  }
}

// Cria botão que chama função clean
function cleanButton() {
  const button = document.createElement('button');
  button.id = 'apaga-tudo';
  button.innerText = 'Limpar';
  document.querySelector('#firstsection').appendChild(button);
  button.addEventListener('click', () => {
    clean();
  });
}
cleanButton ();
