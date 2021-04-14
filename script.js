// function to abbreviate createElement
function create(tag) {
  return document.createElement(tag);
}

// function to abbreviate appendChild
function add(father, child) {
  return father.appendChild(child);
}

// Task 1
const { body } = document;

const header = create('header');
header.id = 'header';
add(body, header);

header.innerHTML = '<b>Minha Lista de Tarefas</b>';

// Task 2
const descrp = create('p');
descrp.id = 'funcionamento';
add(body, descrp);

descrp.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

// Task 3
const mainDiv = create('div');
mainDiv.id = 'main';
add(body, mainDiv);

const input = create('input');
input.id = 'texto-tarefa';
add(mainDiv, input);

// Task 4
const list = create('ol');
list.id = 'lista-tarefas';
add(body, list);

// list.style.listStyleType = 'none';

// Task 5
const buttonCreate = create('button');
buttonCreate.id = 'criar-tarefa';
add(mainDiv, buttonCreate);

buttonCreate.innerText = 'Create Task';

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
  const aux = event;
  if (aux.target === list) return null; // conditional to not select the list, thanks to Panta's help
  for (let index = 0; index < listElem.length; index += 1) {
    listElem[index].classList.remove('selected'); // Task 8
    aux.target.classList.add('selected');
  }
}

// Task 9
// classList: https://www.w3schools.com/jsref/prop_element_classlist.asp
function completedEvent(event) {
  const aux = event;
  if (aux.target.classList.contains('completed')) {
    aux.target.classList.remove('completed');
  } else aux.target.classList.add('completed');
}

// Task 10
// Reference: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_removechild_while
const removeButton = create('button');
removeButton.id = 'apaga-tudo';
add(body, removeButton);

removeButton.innerText = 'Clear All';

function removeList() {
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

// Task 11
const removeCompButton = create('button');
removeCompButton.id = 'remover-finalizados';
add(body, removeCompButton);

removeCompButton.innerText = 'Clear Completed';

// Reference: https://stackoverflow.com/questions/4777077/removing-elements-by-class-name
function removeCompleted() {
  const completed = document.querySelectorAll('.completed');
  for (let index = 0; index < completed.length; index += 1) {
    list.removeChild(completed[index]);
  }
}

// Task 12
// Reference: Trybe Course = Fundamentos do Desenvolvimento Web - Bloco 5 - JavaScript: DOM, Eventos e Web Storage
const saveButton = create('button');
saveButton.id = 'salvar-tarefas';
add(body, saveButton);

saveButton.innerText = 'Save Item';

const loadList = document.getElementById('lista-tarefas');
loadList.innerHTML = localStorage.getItem('list');

function saveItem() {
  localStorage.setItem('list', loadList.innerHTML);
}

// Task 13
// Reference: https://stackoverflow.com/questions/46724542/javascript-move-elements-up-and-down-in-the-list
const moveUpBtn = create('button');
const moveDownBtn = create('button');
moveUpBtn.id = 'mover-cima';
moveDownBtn.id = 'mover-baixo';
add(mainDiv, moveUpBtn);
add(mainDiv, moveDownBtn);

// Html symbols: https://erikasarti.com/html/dingbats-simbolos-desenhos/
moveUpBtn.innerHTML = '&#9650';
moveDownBtn.innerHTML = '&#9660';

// Reference: https://www.w3schools.com/jsref/met_node_insertbefore.asp
function moveDown() {
  const selected = document.querySelector('.selected');
  if (selected && selected.nextElementSibling) {
    list.insertBefore(selected.nextElementSibling, selected);
  }
}

// Reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
function moveUp() {
  const selected = document.querySelector('.selected');
  if (selected && selected.previousElementSibling) {
    selected.insertAdjacentElement('afterend', selected.previousElementSibling);
  }
}

// Task 14
const deleteTaskBtn = create('button');
deleteTaskBtn.id = 'remover-selecionado';
add(body, deleteTaskBtn);

deleteTaskBtn.innerText = 'Remove Item';

function removeListItem() {
  const selected = document.querySelector('.selected');
  list.removeChild(selected);
}

// window.onload
window.onload = () => {
  buttonCreate.addEventListener('click', createListItem);
  removeButton.addEventListener('click', removeList);
  removeCompButton.addEventListener('click', removeCompleted);
  saveButton.addEventListener('click', saveItem);
  deleteTaskBtn.addEventListener('click', removeListItem);
  moveDownBtn.addEventListener('click', moveDown);
  moveUpBtn.addEventListener('click', moveUp);
  list.addEventListener('click', clickColorList);
  list.addEventListener('dblclick', completedEvent);
};
