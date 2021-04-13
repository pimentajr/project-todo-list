// function to abreviate createElement
function create(tag) {
  return document.createElement(tag);
}

// function to abreviate appendChild
function add(father, child) {
  return father.appendChild(child);
}

// Task 1
const { body } = document;
const header = create('header');
add(body, header);

header.id = 'header';
header.innerHTML = '<b>Minha Lista de Tarefas</b>';
header.style.fontSize = '20px';

// Task 2
const descrp = create('p');
add(body, descrp);

descrp.id = 'funcionamento';
descrp.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

// Task 3

const mainDiv = create('div');
mainDiv.id = 'main';
add(body, mainDiv);

const input = create('input');
add(mainDiv, input);

input.id = 'texto-tarefa';

// Task 4
const list = create('ol');
add(body, list);

list.id = 'lista-tarefas';
// list.style.listStyleType = 'none';

// Task 5
const buttonCreate = create('button');
add(mainDiv, buttonCreate);

buttonCreate.id = 'criar-tarefa';
buttonCreate.innerText = 'Create';

function createListItem() {
  const listItensAux = create('li');
  listItensAux.id = 'list-item';
  add(list, listItensAux);
  listItensAux.innerText = input.value;
  input.value = null;
}

// Task 6
// standard list sort...

// Task 7
function clickColorList(event) {
  const listElem = document.querySelectorAll('#list-item');
  for (let index = 0; index < listElem.length; index += 1) {
    listElem[index].style.background = 'white'; // Task 8
    list.style.background = 'white';
    const aux = event;
    aux.target.style.background = 'rgb(128, 128, 128)';
  }
}

// Task 9
function completedEvent(event) {
  const listElem = document.querySelectorAll('#list-item');
  for (let index = 0; index < listElem.length; index += 1) {
    const aux = event;
    if (aux.target.classList.contains('completed')) {
      aux.target.classList.remove('completed');
    } else aux.target.classList.add('completed');
  }
}

// Task 10
const removeButton = create('button');
removeButton.id = 'apaga-tudo';
removeButton.innerText = 'Clear All';
add(body, removeButton);

// Reference:
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_removechild_while
function removeList() {
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

// Task 11
const removeCompButton = create('button');
removeCompButton.id = 'remover-finalizados';
removeCompButton.innerText = 'Clear Completed';
add(body, removeCompButton);

// Reference:
// https://stackoverflow.com/questions/4777077/removing-elements-by-class-name

function removeCompleted() {
  const completed = document.querySelectorAll('.completed');
  for (let index = 0; index < completed.length; index += 1) {
    list.removeChild(completed[index]);
  }
}

// Task 12
const saveButton = create('button');
saveButton.id = 'salvar-tarefas';
saveButton.innerText = 'Save Item';
add(body, saveButton);

const loadList = document.getElementById('lista-tarefas');
loadList.innerHTML = localStorage.getItem('list');

function saveItem() {
  localStorage.setItem('list', loadList.innerHTML);
}

// start function
function start() {
  buttonCreate.addEventListener('click', createListItem);
  removeButton.addEventListener('click', removeList);
  removeCompButton.addEventListener('click', removeCompleted);
  saveButton.addEventListener('click', saveItem);
  list.addEventListener('click', clickColorList);
  list.addEventListener('dblclick', completedEvent);
}

// window.onload
window.onload = () => start();
