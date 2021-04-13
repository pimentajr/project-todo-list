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
const changeListColor = document.getElementsByTagName('li');
const colorUl = document.getElementById('lista-tarefas');

function changeItemColor(evento) {
for (let index = 0; index < colorUl.children.length; index +=1) {
    if (colorUl.children[index] !== evento.target){
        colorUl.children[index].style.backgroundColor = 'transparent';
    }
}
   evento.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
colorUl.addEventListener('click', changeItemColor);
changeItemColor ();

// desafio 9



// desafio 10

