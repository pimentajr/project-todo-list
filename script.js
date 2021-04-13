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
    if (toDoList[child].style.backgroundColor === 'rgb(128, 128, 128)') {
      toDoList[child].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }
}

// Altera a cor de fundo do item selecionado.
function changeColor(event) {
  removeColor();
  const itemSelected = event.target;
  itemSelected.style.backgroundColor = 'rgb(128,128,128)';
}
let toDoList = document.querySelector('#lista-tarefas');
toDoList.addEventListener('click', changeColor);

// Risca o item ao ser clicado 2 vezes.
function crossItem(event) {
  const itemSelected = event.target;
  if (itemSelected.className === 'completed') {
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
    if (toDoList[item].className === 'completed') {
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

// Salva conteúdo da lista.
function saveList() {
  const list = document.querySelector('ol').innerHTML;
  localStorage.setItem('savedList', list);
}
saveListButton.addEventListener('click', saveList);

// Retorna ao browser a lista salva.
const savedList = localStorage.getItem('savedList');
const showedList = document.querySelector('ol');
showedList.innerHTML = savedList;
