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
function changeColor(evento) {
  if(evento.target.tagName === 'LI') {
    for (let index = 0; index < orderList.children.length; index +=1) {
      if (orderList.children[index] !== evento) {
          orderList.children[index].classList.remove('selected');
      } 
    }
    evento.target.classList.add('selected');
  }
} 
orderList.addEventListener('click', changeColor);

