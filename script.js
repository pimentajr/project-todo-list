const orderList = document.getElementById('lista-tarefas');

function addToList() {
const list = document.getElementById('texto-tarefa');
const listValue = list.value;
const itemList = document.createElement('li');
if (listValue === '') {
alert('Escreva uma Tarefa');
} else {
itemList.innerHTML = listValue;
orderList.appendChild(itemList);
list.value = '';
}
}
addToList();

// desafio 7 e 8 https://www.sitepoint.com/community/t/how-to-make-background-transparent-with-javascript/8129

// desafio 9



// desafio 10

