// Requisito 3
function createInput() {
  const section = document.createElement('section');
  document.body.appendChild(section);
  const input = document.createElement('input');
  section.appendChild(input);
  input.id = 'texto-tarefa';
}
createInput();

// Requisito 4
function createOlList() {
  const ol = document.createElement('ol');
  ol.id = 'lista-tarefas';
  document.body.appendChild(ol);
}
createOlList();

// Requisito 5 e 6
function createButtonAddTask() {
  const btnAddTask = document.createElement('button');
  const section = document.querySelector('section');
  section.appendChild(btnAddTask);
  btnAddTask.id = 'criar-tarefa';
  btnAddTask.innerText = 'Criar tarefa';
}
createButtonAddTask();

function clearInput() {
  document.querySelector('input').value = '';
}

const btnAdd = document.querySelector('#criar-tarefa');
const listOl = document.querySelector('#lista-tarefas');
btnAdd.addEventListener('click', () => {
  const valueInput = document.querySelector('input').value;
  const listItems = document.createElement('li');
  listItems.innerHTML = valueInput;
  listOl.appendChild(listItems);
  clearInput();
});

// Requisito 7 e 8
// Fiz com a ajuda da Cárol Silva do Time de Instrução no Plantão do dia 19/04/2021.
function selectedListItem(event) {
  const listItems = document.querySelectorAll('li');
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
const listItem = document.querySelector('#lista-tarefas');
listItem.addEventListener('click', selectedListItem);

// Requisito 9
listItem.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

// Requisito 10
function createBtnClearList() {
  const btnClearList = document.createElement('button');
  const section = document.querySelector('section');
  section.appendChild(btnClearList);
  btnClearList.id = 'apaga-tudo';
  btnClearList.innerText = 'Apagar Tudo';
}
createBtnClearList();

const btnClear = document.getElementById('apaga-tudo');
const list = document.querySelector('#lista-tarefas');
btnClear.addEventListener('click', () => {
  const listItems = document.querySelectorAll('li');
  list.remove(listItems);
});

// Requisito 11
function createBtnRemoveCheck() {
  const btnRemoveTask = document.createElement('button');
  const section = document.querySelector('section');
  section.appendChild(btnRemoveTask);
  btnRemoveTask.id = 'remover-finalizados';
  btnRemoveTask.innerText = 'Remover Tarefa';
}
createBtnRemoveCheck();

const btnRemoveTask = document.getElementById('remover-finalizados');
const olList = document.querySelector('#lista-tarefas');
btnRemoveTask.addEventListener('click', () => {
  const listItem1 = document.querySelectorAll('.completed');
  for (let index = 0; index < listItem1.length; index += 1) {
    if (listItem1[index].classList.contains('completed')) {
      olList.removeChild(listItem1[index]);
    }
  }
});

// Requisito 12
/*
* Consultei a documentação acerca do tema: JSON.stringify()
* Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
*/
function createBtnSalvedLocalStorage() {
  const btnSalved = document.createElement('button');
  const section = document.querySelector('section');
  section.appendChild(btnSalved);
  btnSalved.id = 'salvar-tarefas';
  btnSalved.innerText = 'Salvar Tarefas';
}
createBtnSalvedLocalStorage();

const btnSalved = document.getElementById('salvar-tarefas');
btnSalved.addEventListener('click', () => {
  let listItems = document.querySelectorAll('li');
  listItems = JSON.stringify(listItem.innerHTML);
  localStorage.setItem('Taks', listItems);
});

// Requisito 14
function createBtnRemoveTaskSelected() {
  const btnRemoveTaskSelected = document.createElement('button');
  const section = document.querySelector('section');
  section.appendChild(btnRemoveTaskSelected);
  btnRemoveTaskSelected.id = 'remover-selecionado';
  btnRemoveTaskSelected.innerText = 'Remover Selecionado';
}
createBtnRemoveTaskSelected();

const btnRemoveTaskSelected = document.getElementById('remover-selecionado');
btnRemoveTaskSelected.addEventListener('click', () => {
  const olList2 = document.querySelector('#lista-tarefas');
  const listOfItem = document.querySelectorAll('.selected');
  for (let index = 0; index < listOfItem.length; index += 1) {
    if (listOfItem[index].classList.contains('selected')) {
      olList2.removeChild(listOfItem[index]);
    }
  }
});
