const orderList = document.getElementById('lista-tarefas');

function addToList() {
  const list = document.getElementById('texto-tarefa');
  const listValue = list.value;
  const itemList = document.createElement('li');
  if (listValue === '') {
    alert('Escreva uma Tarefa');
  }else {
    itemList.innerHTML = listValue;
    orderList.appendChild(itemList);
    list.value = '';
  }
}
addToList();

//const changeListColor = document.getElementsByTagName('li');
const colorUl = document.getElementById('lista-tarefas');
function changeColor(evento) {
  for (let index = 0; index < colorUl.children.length; index +=1) {
  if (colorUl.children[index] !== evento); {
      colorUl.children[index].classList.remove('selected');
} 
}
evento.target.className = 'selected';
evento.classList.add('selected');
}
colorUl.addEventListener('click', changeColor);
changeColor();
