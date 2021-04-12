const btnCreateTask = document.querySelector('#criar-tarefa');
const olList = document.querySelector('#lista-tarefas');
const btnDeleteList = document.querySelector('#apaga-tudo');
const btnDeleteCompleted = document.querySelector('#remover-finalizados');
const btnDeleteSelected = document.querySelector('#remover-selecionado');

function paintSelectedELement(event) {
  const element = event.target;
  element.classList.add('selected');
}

function indexOfNode(element) {
  const index = [].indexOf.call(element.parentNode.childNodes, element);
  return index;
}

function changeSelected(event) {
  const element = event.target;
  const listItem = document.querySelectorAll('#list-item');
  let indexElement;

  if (element.classList.contains('selected')) {
    indexElement = indexOfNode(element);
  }

  for (let index = 0; index < listItem.length; index += 1) {
    if (index !== indexElement) {
      listItem[index].classList.remove('selected');
    }
  }
}

function lineThrough(event) {
  const element = event.target;

  if (element.className === 'selected') {
    element.classList.add('completed');
  } else if (element.className === 'selected completed') {
    element.classList.remove('completed');
  }
}

btnCreateTask.addEventListener('click', () => {
  const inputData = document.getElementById('texto-tarefa').value;
  const createTask = document.createElement('li');
  createTask.innerText = inputData;
  createTask.setAttribute('id', 'list-item');
  olList.appendChild(createTask);
  document.getElementById('texto-tarefa').value = '';
});

olList.addEventListener('click', paintSelectedELement);

olList.addEventListener('click', changeSelected);

olList.addEventListener('dblclick', lineThrough);

btnDeleteList.addEventListener('click', () => {
  const listItem = document.querySelectorAll('#list-item');

  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].remove();
  }
});

btnDeleteCompleted.addEventListener('click', () => {
  const listItem = document.querySelectorAll('.completed');

  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].remove();
  }
});

btnDeleteSelected.addEventListener('click', () => {
  const listItem = document.querySelectorAll('.selected');
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].remove();
  }
});
