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

//requisitos 7 e 8
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

//const changeListColor = document.getElementsByTagName('li');
//requisito 9
//function lineItem(event2){
  //if(event2.target.tagName ==='LI') {
  //for (let index = 0; index < orderList.children.length; index +=1) { 
//}
//}
//event2.target.classList.add('completed');
  //}
//}
//orderList.addEventListener('dblclick', lineItem);

// requisito 10
const buttonDelete = document.getElementById('apaga-tudo');
function removeItens(){
  while (orderList.children.length > 0) {
    orderList.children[0].remove();
  }
}
buttonDelete.addEventListener('click', removeItens);