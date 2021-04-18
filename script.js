const newItem = document.getElementById('texto-tarefa'); // caixa de texto
const toDoList = document.querySelector('#lista-tarefas'); // lista ordenada
const itemSelected = document.querySelector('.backgroundItem'); // item selecionado

// Botão para adicionar itens na lista
const buttonAdd = document.getElementById('criar-tarefa');
buttonAdd.addEventListener('click', function addItemList() {
  const itemList = document.createElement('li');
  toDoList.appendChild(itemList);
  itemList.innerHTML = newItem.value;
  newItem.value = '';
});

// Seleciona o item ao clicar nele
function color() {
  const toDoListItens = document.querySelectorAll('#lista-tarefas');
  for (let index = 0; index < toDoListItens.length; index += 1) {
    toDoListItens[index].addEventListener('click', function backgroundColorItem(event) {
      const itemSelected = document.querySelectorAll('.backgroundItem');
      for (let index2 = 0; index2 < itemSelected.length; index2 += 1) {
        itemSelected[index2].classList.remove('backgroundItem');
      }
      event.target.classList.add('backgroundItem');
    });
  }
}
color();

// Marca item como riscado com duplo click
function completedItem() {
  const toDoListItens = document.querySelectorAll('#lista-tarefas');
  for (let index = 0; index < toDoListItens.length; index += 1) {
    toDoListItens[index].addEventListener('dblclick', function marked(event) {
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    });
  }
}
completedItem();

// Botão para deletar toda a lista
const buttonDelete = document.getElementById('apaga-tudo');
buttonDelete.addEventListener('click', function deleteAllList() {
  const deleteList = document.querySelectorAll('li');
  for (let index = 0; index < deleteList.length; index += 1) {
    toDoList.removeChild(deleteList[index]);
  }
});

// Botão para remover itens riscados
const buttonDeleteFinalized = document.getElementById('remover-finalizados');
buttonDeleteFinalized.addEventListener('click', function deleteFinalized() {
  const deleteItem = document.querySelectorAll('li');
  for (let index = 0; index < deleteItem.length; index += 1) {
    if (deleteItem[index].classList.contains('completed')) {
      toDoList.removeChild(deleteItem[index]);
    }
  }
});

// Botão para salvar lista no localStorage
const buttonSave = document.getElementById('salvar-tarefas');
buttonSave.addEventListener('click', function saveList() {
  const toDoListValue = toDoList.innerHTML;
  localStorage.saveList = toDoListValue;
});

function getList() {
  if (localStorage.saveList !== undefined) {
    toDoList.innerHTML = localStorage.saveList;
  }
}
getList();

// Botões de mover
// Referencia documentação - https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
function moveElementUp() {
  const buttonMoveUp = document.getElementById('mover-cima');
  buttonMoveUp.addEventListener('click', function moveUp() {
    const newPositionUp = itemSelected.previousSibling;
    toDoList.insertBefore(itemSelected, newPositionUp);
  });
}
moveElementUp();

function moveElementDown() {
  const buttonMoveDown = document.getElementById('mover-baixo');
  buttonMoveDown.addEventListener('click', function moveDown() {
    const newPositionDown = itemSelected.nextSibling;
    toDoList.insertBefore(itemSelected, newPositionDown.nextSibling);
  });
}
moveElementDown();

// Botão para remover apenas o item selecionado
const buttonRemoveItem = document.getElementById('remover-selecionado');
buttonRemoveItem.addEventListener('click', function removeItem() {
  const itemSelected = document.querySelector('.backgroundItem');
  toDoList.removeChild(itemSelected);
});
