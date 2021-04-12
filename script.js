// 5 - Incluindo itens na lista

const buttonAdd = document.getElementById('criar-tarefa'); // botão

const newItem = document.getElementById('texto-tarefa'); // caixa de texto

const toDoList = document.getElementById('lista-tarefas'); // lista ordenada

buttonAdd.addEventListener('click', function addItemList() {
  const itemList = document.createElement('li');
  toDoList.appendChild(itemList);
  itemList.innerHTML = newItem.value;
  newItem.value = '';
});
