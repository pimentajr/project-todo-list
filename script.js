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
  if (event.target.classList.contains('check')) {
    event.target.classList.remove('check');
  } else {
    event.target.classList.add('check');
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
btnClear.addEventListener('click', () => {
  const listItems = document.querySelectorAll('li');
  listOl.remove(listItems);
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
btnRemoveTask.addEventListener('click', () => {
  const listOl = document.querySelector('#lista-tarefas');
  const listItem = document.querySelectorAll('.check');
  for (let index = 0; index < listItem.length; index += 1) {
    if (listItem[index].classList.contains('check')) {
      listOl.removeChild(listItem[index]);
    }
  }
});
