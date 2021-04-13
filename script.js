const list = document.querySelector('#lista-tarefas');
const inputV = document.querySelector('#texto-tarefa');
const classPai = document.querySelector('.button');

// Add Buttons
function createButton(idName, htmlText) {
  const creat = document.createElement('button');
  creat.id = idName;
  creat.innerHTML = htmlText;
  classPai.appendChild(creat);
}

createButton('criar-tarefa', 'Adicionar Item a Lista');
createButton('apaga-tudo', 'Deletar a lista');
createButton('remover-finalizados', 'Apagar os concluidos!');
createButton('remover-selecionado', 'Apagar Selecionado');
createButton('mover-cima', 'Up');
createButton('mover-baixo', 'Down');

const buttonADD = document.querySelector('#criar-tarefa');

// Função para pegar o valor do input e colocar dentro de uma li
buttonADD.addEventListener('click', () => {
  const creatLi = document.createElement('li');
  creatLi.innerHTML = inputV.value;
  creatLi.className = 'list';
  list.appendChild(creatLi);
  inputV.value = '';
});

// add bg color.
list.addEventListener('click', (event) => {
  const liList = document.querySelectorAll('.selected');
  for (let index = 0; index < liList.length; index += 1) {
    liList[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
});

// add classe class complet
function doubleClikc() {
  list.addEventListener('dblclick', (event) => {
    const myEvent = event.target;
    if (myEvent.classList.contains('completed')) {
      myEvent.classList.remove('completed');
    } else {
      myEvent.classList.add('completed');
    }
  });
}

doubleClikc();

const delAll = document.querySelector('#apaga-tudo');

delAll.addEventListener('click', () => {
  while (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
});

// add função para deletar
const getClearComplet = document.querySelector('#remover-finalizados');

function dellCompleted() {
  const getComletedClass = document.querySelectorAll('.completed');
  for (let index = 0; index < getComletedClass.length; index += 1) {
    getComletedClass[index].parentNode.removeChild(getComletedClass[index]);
  }
}

getClearComplet.addEventListener('click', dellCompleted);

function dellSelectedAll() {
  const selectedCless = document.querySelectorAll('.selected');
  for (let index = 0; index < selectedCless.length; index += 1) {
    selectedCless[index].parentNode.removeChild(selectedCless[index]);
  }
}

const dellSelected = document.querySelector('#remover-selecionado');

dellSelected.addEventListener('click', dellSelectedAll);

// botão para salvar os dados da Lista

function creatSaveButton() {
  const creatSave = document.createElement('button');
  creatSave.id = 'salvar-tarefas';
  creatSave.innerHTML = 'Salvar Lista';
  classPai.appendChild(creatSave);
}

creatSaveButton();

const buttonSave = document.querySelector('#salvar-tarefas');

function saveList() {
  localStorage.setItem('saveList', list.innerHTML);
}

function getSave() {
  const save = localStorage.getItem('saveList');
  if (save) {
    list.innerHTML = save;
  }
}

const pgUp = document.querySelector('#mover-cima');
const listLi = document.getElementsByTagName('li');

function moveup() {
  for (let index = 0; index < listLi.length; index += 1) {
    if (listLi[index].classList.contains('selected')
    && listLi[index].previousElementSibling !== null) {
      const listIndex = listLi[index];
      list.insertBefore(listIndex, listIndex.previousElementSibling);
    }
  }
}

pgUp.addEventListener('click', moveup);

function movedown() {
  for (let index = listLi.length - 1; index >= 0; index -= 1) {
    if (listLi[index].classList.contains('selected')
    && listLi[index].nextElementSibling !== null) {
      const listIndex2 = listLi[index];
      list.insertBefore(listIndex2.nextElementSibling, listIndex2);
    }
  }
}
const pgdn = document.querySelector('#mover-baixo');

pgdn.addEventListener('click', movedown);

getSave();

buttonSave.addEventListener('click', saveList);
