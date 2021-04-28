// Removendo a seleção do item
function removingSelection() {
  const selection = document.querySelectorAll('.selected');
  for (let index = 0; index < selection.length; index += 1) {
    selection[index].classList.remove('selected');
  }
}

// Selecionando item da lista
function selectingItem(event) {
  removingSelection();
  event.target.classList.toggle('selected');
}

// Marcar concluido
function itemComplete(event) {
  if (event.className === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.toggle('completed');
  }
}

// Apagar lista
function deletingList() {
  const retrievesItems = document.querySelectorAll('.item');
  if (retrievesItems.length !== 0) {
    const list = document.querySelector('#lista-tarefas');
    list.innerHTML = '';
  }
}

// Apagar itens finalizados
function deletingCompletedItem() {
  const itemsMade = document.querySelectorAll('.completed');
  for (let index = 0; index < itemsMade.length; index += 1) {
    itemsMade[index].remove();
  }
}

// Criar tarefas
const textEntry = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');
function addingTasks() {
  const item = document.createElement('li');
  item.className = 'item';
  item.innerText = textEntry.value;
  list.appendChild(item);
  textEntry.value = '';
  item.addEventListener('click', selectingItem);
  item.addEventListener('dblclick', itemComplete);
}

// Salvando
function savingList() {
  localStorage.setItem('list', list.innerHTML);
}

// Recuperando ao recarregar
function recoverList() {
  list.innerHTML = localStorage.getItem('list');
  const recoverItem = document.querySelectorAll('li');
  for (let index = 0; index < recoverItem.length; index += 1) {
    recoverItem[index].addEventListener('click', selectingItem);
    recoverItem[index].addEventListener('dblclick', itemComplete);
  }
}

// Movendo item selecionado para cima
function movingUp() {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem && selectedItem.previousElementSibling !== null) {
    selectedItem.parentNode.insertBefore(selectedItem, selectedItem.previousElementSibling);
  }
}

// Movendo item selecionado para baixo
function movingDown() {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem && selectedItem.nextSibling !== null) {
    selectedItem.parentNode.insertBefore(selectedItem.nextSibling, selectedItem);
  }
}

// Remover item selecionado
function removingSelectedItem() {
  const selectedItem = document.querySelector('.selected');
  selectedItem.remove();
}

window.onload = function () {
  // Elementos 
  const csreatingTaks = document.querySelector('#criar-tarefa');
  const clearList = document.querySelector('#apaga-tudo');
  const deleteCompletedItem = document.querySelector('#remover-finalizados');
  const saveList = document.querySelector('#salvar-tarefas');
  const moveUp = document.querySelector('#mover-cima');
  const moveDown = document.querySelector('#mover-baixo');
  const removeItemButton = document.querySelector('#remover-selecionado');

  // Eventos
  creatingTasks.addEventListener('click', addingTasks);
  clearList.addEventListener('click', deletingList);
  deleteCompletedItem.addEventListener('click', deletingCompletedItem);
  saveList.addEventListener('click', savingList);
  moveUp.addEventListener('click', movingUp);
  moveDown.addEventListener('click', movingDown);
  removeItemButton.addEventListener('click', removingSelectedItem);

  // Chamada
  recoverList();
};
