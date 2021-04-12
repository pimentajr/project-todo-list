const button = document.getElementById('criar-tarefa');
const orderList = document.getElementById('lista-tarefas');

function addToList () {
const list = document.getElementById('texto-tarefa');
const listValue = list.value;
const itemList = document.createElement('li');
if(listValue === '') {
alert('Escreva uma Tarefa');
} else {
itemList.innerHTML = listValue;
orderList.appendChild(itemList);
list.value = '';
}
}


