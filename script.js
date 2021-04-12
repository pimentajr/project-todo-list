const ordenedList = document.querySelector('#lista-tarefas');
// console.log(ordenedList);
const buttonNewJob = document.querySelector('#criar-tarefa');
// console.log(buttonNewJob);


// botão para criar um novo item na lista
buttonNewJob.addEventListener('click', function() {
  let newItemList = document.createElement('li');
  newItemList.className = 'Item-List';
  let textItem = document.querySelector('#texto-tarefa');
  // console.log(textItem.value);
  newItemList.innerText = textItem.value;
  ordenedList.appendChild(newItemList);
  textItem.value = "";
});