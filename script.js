// 5 - Incluindo itens na lista

const buttonAdd = document.getElementById('criar-tarefa'); // botão

const newItem = document.getElementById('texto-tarefa'); // caixa de texto

const toDoList = document.getElementById('lista-tarefas'); // lista ordenada

/* const createdItem = document.getElementsByTagName('li').innerHTML; */

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
