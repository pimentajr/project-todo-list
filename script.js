// 5 - Incluindo itens na lista

let buttonAdd = document.getElementById('criar-tarefa'); // botão

let newItem = document.getElementById('texto-tarefa'); // caixa de texto

let toDoList = document.getElementById('lista-tarefas'); // lista ordenada

buttonAdd.addEventListener('click', function addItemList() {
  let itemList = document.createElement('li');
  toDoList.appendChild(itemList);
  itemList.innerHTML = newItem.value;
  newItem.value = '';
});
