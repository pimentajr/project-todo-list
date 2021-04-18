const ordenedList = document.querySelector('#lista-tarefas');
const buttonNewJob = document.querySelector('#criar-tarefa');
const buttonCleanList = document.querySelector('#apaga-tudo');
const buttonCleanDone = document.querySelector('#remover-finalizados');
const buttonSaveList = document.querySelector('#salvar-tarefas');
const buttonUpItem = document.querySelector('#mover-cima');
const buttonDownItem = document.querySelector('#mover-baixo');
const buttonRemoveClicked = document.getElementById('remover-selecionado');

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

// Botão para salvar as tarefas
buttonSaveList.addEventListener('click', function () {
  const saveListItens = document.querySelectorAll('.Item-List');
  for (let index = 0; index < saveListItens.length; index += 1) {
    console.log(saveListItens[index].innerText);
    localStorage.setItem('item' + index, saveListItens[index].innerText);
    console.log(saveListItens[index].classList.value);
    localStorage.setItem('itemClass' + index, saveListItens[index].classList.value);
  }
});

window.onload = function () {
  for (let index = 0; index < (localStorage.length / 2); index += 1) {
    const itemRecoveryText = localStorage.getItem('item' + index);
    const itemRecoveryClass = localStorage.getItem('itemClass' + index);
    const itemRecoveryAdd = document.createElement('li');
    itemRecoveryAdd.innerText = itemRecoveryText;
    itemRecoveryAdd.className = itemRecoveryClass;
    ordenedList.appendChild(itemRecoveryAdd);
    // console.log(itemRecoveryText);
    // console.log(itemRecoveryClass);
  }
};

// Botão mover-baixo
buttonDownItem.addEventListener('click', function () {
  const checkItenslistDown = document.getElementsByClassName('Item-List');
  for (let index = 0; index < checkItenslistDown.length - 1; index += 1) {
    if (checkItenslistDown[index].classList.contains('clicked')) {
      const itemClickedDown = checkItenslistDown[index];
      const nextItemClickedDown = checkItenslistDown[index].nextSibling;
      // console.log(itemClickedDown);
      // console.log(nextItemClickedDown);
      ordenedList.insertBefore(itemClickedDown, nextItemClickedDown.nextSibling);
      break;
    }
  }
});

// Botão mover-cima
buttonUpItem.addEventListener('click', function () {
  // console.log(buttonDownItem);
  const checkItenslist = document.getElementsByClassName('Item-List');
  for (let index = 1; index < checkItenslist.length; index += 1) {
    if (checkItenslist[index].classList.contains('clicked')) {
      const itemClicked = checkItenslist[index];
      const nextItemClicked = checkItenslist[index].previousSibling;
      console.log(itemClicked);
      console.log(nextItemClicked);
      ordenedList.insertBefore(itemClicked, nextItemClicked);
    }
  }
  // console.log(checkItenslist);
});

buttonRemoveClicked.addEventListener('click', function () {
  const itensListRemove = document.getElementsByClassName('Item-List');
  for (let index = 0; index < itensListRemove.length; index += 1) {
    if (itensListRemove[index].classList.contains('clicked') === true) {
      itensListRemove[index].remove();
    }
  }
});
