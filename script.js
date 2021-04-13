// Adiciona novos itens à lista de tarefas.
function addListItem() {
  const inputValue = document.getElementById('texto-tarefa');
  const toDoList = document.getElementById('lista-tarefas');
  const newItem = document.createElement('li');
  newItem.innerText = inputValue.value;
  toDoList.appendChild(newItem);
  inputValue.value = '';
}

// Botão que adiciona novos itens à lista de tarefas.
const button = document.getElementById('criar-tarefa');
button.addEventListener('click', addListItem);

// Remove dos itens a cor de fundo cinza.
function removeColor() {
  const toDoList = document.querySelectorAll('li');
  for (let child = 0; child < toDoList.length; child += 1) {
    if (toDoList[child].classList.contains('selected')) {
      toDoList[child].classList.remove('selected');
      toDoList[child].style.backgroundColor = '';
    }
  }
}

// Altera a cor de fundo do item selecionado.
function changeColor(event) {
  removeColor();
  const itemSelected = event.target;
  itemSelected.classList.add('selected');
}
let toDoList = document.querySelector('#lista-tarefas');
toDoList.addEventListener('click', changeColor);

// Risca o item ao ser clicado 2 vezes.
function crossItem(event) {
  const itemSelected = event.target;
  if (itemSelected.classList.contains('completed')) {
    itemSelected.classList.remove('completed');
  } else {
    itemSelected.classList.add('completed');
  }
}
toDoList.addEventListener('dblclick', crossItem);

// Cria botão que apaga todos os itens da lista.
const eraseButton = document.createElement('button');
eraseButton.id = 'apaga-tudo';
const buttonSection = document.getElementById('botoes');
buttonSection.appendChild(eraseButton);
eraseButton.innerText = 'X';

// Apaga todos os itens de uma lista.
function clearList() {
  toDoList = document.querySelectorAll('li');
  for (let child = 0; child < toDoList.length; child += 1) {
    toDoList[child].remove();
  }
}
eraseButton.addEventListener('click', clearList);

// Cria botão "Remove finalizados".
const removeFinishedButton = document.createElement('button');
buttonSection.appendChild(removeFinishedButton);
removeFinishedButton.id = 'remover-finalizados';
removeFinishedButton.innerText = 'Limpar Completos';

// Remove itens finalizados.
function removeFinishedItens() {
  toDoList = document.querySelectorAll('li');
  for (let item = 0; item < toDoList.length; item += 1) {
    if (toDoList[item].classList.contains('completed')) {
      toDoList[item].remove();
    }
  }
}
removeFinishedButton.addEventListener('click', removeFinishedItens);

// Cria botão "salvar-tarefas".
const saveListButton = document.createElement('button');
saveListButton.id = 'salvar-tarefas';
buttonSection.appendChild(saveListButton);
saveListButton.innerText = 'Salvar lista';

// Salva conteúdo da lista em uma key chamada 'savedList'.
function saveList() {
  const list = document.querySelector('ol').innerHTML;
  localStorage.setItem('savedList', list);
}
saveListButton.addEventListener('click', saveList);

// Retorna ao browser a lista salva.
const savedList = localStorage.getItem('savedList');
const showedList = document.querySelector('ol');
showedList.innerHTML = savedList;

// Cria botão "mover-cima".
const upButton = document.createElement('button');
upButton.id = 'mover-cima';
buttonSection.appendChild(upButton);
upButton.innerText = 'Go up';

// Move item para cima.
function moveUp() {
  let itemSelected = document.querySelector('.selected');
  if (String(itemSelected) !== 'null') {
    let previousItem = document.querySelector('.selected').previousElementSibling;
    if (String(previousItem) !== 'null') {
      const holder = previousItem.innerHTML;
      previousItem = itemSelected.innerHTML;
      itemSelected = holder;
      document.querySelector('.selected').innerText = itemSelected;
      document.querySelector('.selected').previousElementSibling.innerText = previousItem;
      document.querySelector('.selected').previousElementSibling.classList.add('selected');
      document.querySelectorAll('.selected')[1].classList.remove('selected');
    }
  }
}
upButton.addEventListener('click', moveUp);

// Cria botão "mover-baixo".
const downButton = document.createElement('button');
downButton.id = 'mover-baixo';
buttonSection.appendChild(downButton);
downButton.innerText = 'Go down';

// Move item para cima.
function moveDown() {
  let itemSelected = document.querySelector('.selected');
  if (String(itemSelected) !== 'null') {
    let nextItem = document.querySelector('.selected').nextElementSibling;
    if (String(nextItem) !== 'null') {
      const holder = nextItem.innerHTML;
      nextItem = itemSelected.innerHTML;
      itemSelected = holder;
      document.querySelector('.selected').innerText = itemSelected;
      document.querySelector('.selected').nextElementSibling.innerText = nextItem;
      document.querySelector('.selected').nextElementSibling.classList.add('selected');
      document.querySelectorAll('.selected')[0].classList.remove('selected');
    }
  }
}
downButton.addEventListener('click', moveDown);

// Cria botão que apaga item selecionado.
const removeButton = document.createElement('button');
removeButton.innerText = 'Excluir selecionado';
removeButton.id = 'remover-selecionado';
buttonSection.appendChild(removeButton);

// Apaga item selecionado.
function removeItem() {
  toDoList = document.querySelectorAll('li');
  for (let item = 0; item < toDoList.length; item += 1) {
    if (toDoList[item].classList.contains('selected')) {
      toDoList[item].remove();
    }
  }
}
removeButton.addEventListener('click', removeItem);
