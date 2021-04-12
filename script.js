const ordenedList = document.querySelector('#lista-tarefas');
const buttonNewJob = document.querySelector('#criar-tarefa');
const buttonClearList = document.querySelector('#apaga-tudo');

// botão para criar um novo item na lista
buttonNewJob.addEventListener('click', function newItem() {
  const newItemList = document.createElement('li');
  newItemList.className = 'Item-List';
  const textItem = document.querySelector('#texto-tarefa');
  // console.log(textItem.value);
  newItemList.innerText = textItem.value;
  ordenedList.appendChild(newItemList);
  textItem.value = '';
});

// Colocar fundo cinza em um item clicado
ordenedList.addEventListener('click', function clickBackground(event) {
  const itensList = document.querySelectorAll('.clicked');
  for (let index = 0; index < itensList.length; index += 1) {
    itensList[index].classList.remove('clicked');
  }
  event.target.classList.add('clicked');
});

// Coloca um line-trough no item clicado 2x
ordenedList.addEventListener('dblclick', function lineItem(event) {
  if (event.target.classList.contains('completed') === true) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

// Botão apagar lista
buttonClearList.addEventListener('click', function clearList() {
  const itensListClear = document.querySelectorAll('.Item-List');
  console.log(itensListClear);
  for (let index = 0; index < itensListClear.length; index += 1) {
    itensListClear[index].remove();
  }
});
