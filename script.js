// 5 - Incluindo itens na lista

const buttonAdd = document.getElementById('criar-tarefa'); // botão

const newItem = document.getElementById('texto-tarefa'); // caixa de texto

const toDoList = document.querySelector('#lista-tarefas'); // lista ordenada

const itemSelected = document.querySelector('.backgroundItem'); // item selecionado

buttonAdd.addEventListener('click', function addItemList() {
  const itemList = document.createElement('li');
  toDoList.appendChild(itemList);
  itemList.innerHTML = newItem.value;
  newItem.value = '';
});

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

const buttonDelete = document.getElementById('apaga-tudo'); // botão de apagar

buttonDelete.addEventListener('click', function deleteAllList() {
  const deleteList = document.querySelectorAll('li');
  for (let index = 0; index < deleteList.length; index += 1) {
    toDoList.removeChild(deleteList[index]);
  }
});

const buttonDeleteFinalized = document.getElementById('remover-finalizados');

buttonDeleteFinalized.addEventListener('click', function deleteFinalized() {
  const deleteItem = document.querySelectorAll('li');
  for (let index = 0; index < deleteItem.length; index += 1) {
    if (deleteItem[index].classList.contains('completed')) {
      toDoList.removeChild(deleteItem[index]);
    }
  }
});

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

const buttonRemoveItem = document.getElementById('remover-selecionado');

buttonRemoveItem.addEventListener('click', function removeItem() {
  toDoList.removeChild(itemSelected);
});
