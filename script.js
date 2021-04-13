const ordenedList = document.querySelector('#lista-tarefas');
const buttonNewJob = document.querySelector('#criar-tarefa');
const buttonCleanList = document.querySelector('#apaga-tudo');
const buttonCleanDone = document.querySelector('#remover-finalizados');

// botão para criar um novo item na lista
buttonNewJob.addEventListener('click', function () {
  const newItemList = document.createElement('li');
  newItemList.className = 'Item-List';
  const textItem = document.querySelector('#texto-tarefa');
  // console.log(textItem.value);
  newItemList.innerText = textItem.value;
  ordenedList.appendChild(newItemList);
  textItem.value = '';
});

// Colocar fundo cinza em um item clicado
ordenedList.addEventListener('click', function (event) {
  const itensList = document.querySelectorAll('.clicked');
  if (event.target.classList.contains('Item-List')) {
    for (let index = 0; index < itensList.length; index += 1) {
     itensList[index].classList.remove('clicked');
    }
    event.target.classList.add('clicked');
  }
});

// Coloca um line-trough no item clicado 2x
ordenedList.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('Item-List')) {
    if (event.target.classList.contains('completed') === true) {
     event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
});

// Botão apagar lista
buttonCleanList.addEventListener('click', function () {
  const itensListClear = document.querySelectorAll('.Item-List');
  for (let index = 0; index < itensListClear.length; index += 1) {
    itensListClear[index].remove();
  }
});

// botão apagar finalizados
buttonCleanDone.addEventListener('click', function () {
  const itensListDone = document.querySelectorAll('.Item-List');
  for (let index = 0; index < itensListDone.length; index += 1) {
    if (itensListDone[index].classList.contains('completed') === true) {
      itensListDone[index].remove();
    }
  }
});
