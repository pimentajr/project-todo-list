const list = document.querySelector('#lista-tarefas');
const inputV = document.querySelector('#texto-tarefa');
const classPai = document.querySelector('.button');

// Add Button
function createButton() {
  const creatB = document.createElement('button');
  creatB.id = 'criar-tarefa';
  creatB.className = 'list';
  creatB.innerHTML = 'Adicionar Item a Lista';
  classPai.appendChild(creatB);
}

createButton();

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

// button
function deleteAll() {
  const del = document.createElement('button');
  del.id = 'apaga-tudo';
  del.innerHTML = 'Apagar Tudo!';
  classPai.appendChild(del);
}

deleteAll();

const delAll = document.querySelector('#apaga-tudo');

delAll.addEventListener('click', () => {
  while (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
});

// button de deletar os completos
function buttonClearCompleted() {
  const buttonClear = document.createElement('button');
  buttonClear.id = 'remover-finalizados';
  buttonClear.innerHTML = 'Apagar os concluidos!';
  classPai.appendChild(buttonClear);
}

buttonClearCompleted();

const getClearComplet = document.querySelector('#remover-finalizados');

function dellCompleted() {
  const getComletedClass = document.querySelectorAll('.completed');
  for (let index = 0; index < getComletedClass.length; index += 1) {
    getComletedClass[index].parentNode.removeChild(getComletedClass[index]);
  }
}

getClearComplet.addEventListener('click', dellCompleted);

// remover item selecionado.

function createdButtonSelect() {
  const button2 = document.createElement('button');
  button2.id = 'remover-selecionado';
  button2.innerHTML = 'Apagar Selecionado';
  classPai.appendChild(button2);
}

createdButtonSelect();

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
  buttonSave.addEventListener('click', () => {
    localStorage.setItem('saveList', list.innerHTML);
  });
  const save = localStorage.getItem('saveList');
  if (save) {
    list.innerHTML = save;
  }
}

saveList();
