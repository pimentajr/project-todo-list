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
// Fiz com a ajuda da Cárol Silva do Time de Instrução.
function selectedListItem(event) {
  const listItems = document.querySelectorAll('li');
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
const listItem = document.querySelector('#lista-tarefas');
listItem.addEventListener('click', selectedListItem);
