const btnCreateTask = document.querySelector('#criar-tarefa');
const olList = document.querySelector('#lista-tarefas');
const btnDeleteList = document.querySelector('#apaga-tudo');
const btnDeleteCompleted = document.querySelector('#remover-finalizados');
const btnDeleteSelected = document.querySelector('#remover-selecionado');
const btnSaveTasks = document.querySelector('#salvar-tarefas');
const btnTop = document.querySelector('#mover-cima');
const btnBot = document.querySelector('#mover-baixo');

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
  const listItem = document.querySelectorAll('[id = list-item]');
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

  if (!element.classList.contains('completed')) {
    element.classList.add('completed');
  } else {
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
  const listItem = document.querySelectorAll('[id = list-item]');

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
  const listItem = document.querySelector('.selected');

  listItem.remove();
});

btnSaveTasks.addEventListener('click', () => {
  const olData = document.querySelector('ol').innerHTML;

  localStorage.setItem('listItems', olData);
});

btnTop.addEventListener('click', () => {
  if (document.querySelector('.selected') !== null) {
    const elementIndex = indexOfNode(document.querySelector('.selected'));

    if (elementIndex !== 0) {
      const element = document.querySelectorAll('[id =list-item]')[elementIndex];
      const list = olList;

      element.remove();
      list.insertBefore(element, list.childNodes[elementIndex - 1]);
    }
  }
});

btnBot.addEventListener('click', () => {
  if (document.querySelector('.selected') !== null) {
    const elementIndex = indexOfNode(document.querySelector('.selected'));
    const itemsLength = document.querySelectorAll('#list-item').length;

    if (elementIndex <= itemsLength) {
      const element = document.querySelectorAll('#list-item')[elementIndex];
      const list = olList;

      element.remove();
      list.insertBefore(element, list.childNodes[elementIndex + 1]);
    }
  }
});

window.onload = () => {
  if (localStorage.getItem('listItems') !== null) {
    document.querySelector('ol').innerHTML = localStorage.getItem('listItems');
  }
};
