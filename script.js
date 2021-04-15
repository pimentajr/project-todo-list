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

// Cria função que adiciona classe selected ao evento e remove dos outros
function clickItem(event) {
  removeAllClass('selected');
  event.target.classList.add('selected');
}

// Cria função que adiciona ou remove a classe completed
function toggleCompletedTask(event) {
  event.target.classList.toggle("completed");
}

// Adiciona função ao botão Adicionar e a cada item criado, adiciona escutadores de eventos
function addItem() {
  const addButton = document.querySelector('#criar-tarefa');
  addButton.addEventListener('click', () => {
    const valueItem = document.querySelector('#texto-tarefa').value;
    const itemList = document.createElement('li');
    itemList.className = 'item';
    itemList.innerText = valueItem;
    itemList.addEventListener('dblclick', toggleCompletedTask);
    itemList.addEventListener('click', clickItem);
    document.querySelector('#lista-tarefas').appendChild(itemList);
    document.querySelector('#texto-tarefa').value = '';
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
  const list = document.querySelectorAll('.item');
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
cleanButton();

// Cria função que apaga os itens realizados da lista
function finish() {
  const completedItems = document.querySelectorAll('.completed');
  for (let index = 0; index < completedItems.length; index += 1) {
    completedItems[index].remove();
  }
}
// Criar um botão que remove os itens finalizados
function removeCompletedButton() {
  const button = document.createElement('button');
  button.id = 'remover-finalizados';
  button.innerText = 'Finalizar';
  document.querySelector('#firstsection').appendChild(button);
  button.addEventListener('click', () => {
    finish();
  });
}
removeCompletedButton();

// Cria função que remove o item selecionado
function deleteSelected() {
  const selectedItems = document.querySelectorAll('.selected');
  for (let index = 0; index < selectedItems.length; index += 1) {
    selectedItems[index].remove();
  }
}

// Cria botão que irá remover utilizando deleteSelected
function removeSelectedButton() {
  const button = document.createElement('button');
  button.id = 'remover-selecionado';
  button.innerText = 'Remover';
  document.querySelector('#firstsection').appendChild(button);
  button.addEventListener('click', () => {
    deleteSelected();
  });
}
removeSelectedButton();

//Cria função que move o item selecionado para cima
function up() {
  const parent = document.querySelector('ol')
  const selected = document.querySelector('.selected')
  if (selected == null) {
    alert('Selecione um item para mover')
  } else {
  const previus = document.querySelector('.selected').previousSibling
    if (previus !== null) {
      parent.insertBefore(selected, previus)
    }
  }
}

// Cria botão que irá selecionar o item anterior baixo utilizando up()
function buttonUp() {
  const button = document.createElement('button');
  button.id = 'mover-cima';
  button.innerText = '⬆';
  document.querySelector('#firstsection').appendChild(button);
  button.addEventListener('click', () => {
    up();
  });
}
buttonUp();

//Cria função que move o item selecionado para baixo
function down() {
  const parent = document.querySelector('ol')
  const selected = document.querySelector('.selected')
  if (selected == null) {
    alert('Selecione um item para mover')
  } else {
    const next = document.querySelector('.selected').nextSibling
    if (next !== null) {
      parent.insertBefore(next,selected)
    }
  }
}

// Cria botão que irá selecionar para baixo utilizando down
function buttonDown() {
  const button = document.createElement('button');
  button.id = 'mover-baixo';
  button.innerText = 'Remover';
  button.innerText = '⬇';
  document.querySelector('#firstsection').appendChild(button);
  button.addEventListener('click', () => {
    down();
  });
}
buttonDown();

// Cria função que salva os toda lista com suas classes
function save() {
  localStorage.clear();
  const saved = document.querySelector('#lista-tarefas').innerHTML
  localStorage.setItem('saved', saved)
}

// Cria botão que salva a lista atual


// Cria função que recarrega toda a lista com suas classes
function reload() {
  if (localStorage.length > 0) {
    const list = document.querySelector('#lista-tarefas')
    list.innerHTML = localStorage.saved
  }
}

// Recarrega os itens ao recarregar a página
window.onload = () => {
  reload()  
}

// Cria função que seleciona o item anterior, NÃO É REQUISITO, CRIEI ESSA FUNÇÃO EXTRA PARA INCREMENTAR O PROJETO
function Selectup() {
  const lista = document.querySelectorAll('.item');
  const last = lista[lista.length - 1];
  const current = document.querySelector('.selected');
  if (last == null) {
    alert('adicone uma tarefa');
  } else if (current == null) {
    last.classList.add('selected');
  } else {
    const previus = document.querySelector('.selected').previousElementSibling;
    if (previus == null) {
      last.classList.add('selected');
      current.classList.remove('selected');
    } else {
      previus.classList.add('selected');
      current.classList.remove('selected');
    }
  }
}

// Cria função que seleciona o item seguinte, NÃO É REQUISITO, CRIEI ESSA FUNÇÃO EXTRA PARA INCREMENTAR O PROJETO
function Selectdown() {
  const first = document.querySelector('.item');
  const current = document.querySelector('.selected');
  if (first == null) {
    alert('adicone uma tarefa');
  } else if (current == null) {
    first.classList.add('selected');
  } else {
    const next = document.querySelector('.selected').nextElementSibling;
    if (next == null) {
      first.classList.add('selected');
      current.classList.remove('selected');
    } else {
      next.classList.add('selected');
      current.classList.remove('selected');
    }
  }
}
