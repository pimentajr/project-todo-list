window.onload = function loadPage() {
  const list = document.querySelector('#lista-tarefas');
  list.innerHTML = localStorage.lista;
};

const inputArea = document.getElementById('texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const classColorList = 'list-color';

function onChange(event) {
  const text = event.target.value;
  inputArea.value = text;
}

inputArea.addEventListener('change', onChange);

function insertItem() {
  const newLi = document.createElement('li');
  newLi.innerText = inputArea.value;
  list.appendChild(newLi);
  inputArea.value = '';
}

button.addEventListener('click', insertItem);

function setColorToList(event) {
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].removeAttribute('id');
  }
  const li = event.target;
  li.setAttribute('id', classColorList);
}

list.addEventListener('click', setColorToList);

function setMarkedAsDone(event) {
  const li = event.target;
  if (li.classList.contains('completed')) {
    li.classList.remove('completed');
  } else {
    li.classList.add('completed');
  }
}

list.addEventListener('dblclick', setMarkedAsDone);

const buttonErase = document.querySelector('#apaga-tudo');

function eraseList() {
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    list.removeChild(listItem[index]);
  }
}

buttonErase.addEventListener('click', eraseList);

const buttonRemoveDone = document.querySelector('#remover-finalizados');

function eraseCompleted() {
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    if (listItem[index].classList.contains('completed')) {
      list.removeChild(listItem[index]);
    }
  }
}

buttonRemoveDone.addEventListener('click', eraseCompleted);

const buttonSave = document.querySelector('#salvar-tarefas');

function saveList() {
  localStorage.setItem('lista', list.innerHTML);
}

buttonSave.addEventListener('click', saveList);

const buttonRemoveSelected = document.querySelector('#remover-selecionado');

function eraseSelected() {
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    if (listItem[index].id === classColorList) {
      list.removeChild(listItem[index]);
    }
  }
}

buttonRemoveSelected.addEventListener('click', eraseSelected);

const buttonUp = document.querySelector('#mover-cima');

function moveUp() {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].id === classColorList && index !== 0) {
      const element = li[index].innerHTML;
      const element2 = li[index - 1].innerHTML;
      const elementClass = li[index].className;
      const element2Class = li[index - 1].className;
      li[index].innerHTML = element2;
      li[index - 1].innerHTML = element;
      li[index].removeAttribute('id', classColorList);
      li[index - 1].setAttribute('id', classColorList);
      li[index].className = element2Class;
      li[index - 1].className = elementClass;
    }
  }
}

buttonUp.addEventListener('click', moveUp);

const buttonDown = document.querySelector('#mover-baixo');

function moveDown() {
  const selected = document.getElementById(classColorList);
  const li = document.querySelectorAll('li');
  if (selected !== li[li.length - 1] && selected) {
    const selectedInner = selected.innerText;
    const selectedClass = selected.className;
    const nextElClass = selected.nextElementSibling.className;

    selected.innerText = selected.nextElementSibling.innerHTML;
    selected.className = nextElClass;
    selected.nextElementSibling.innerHTML = selectedInner;
    selected.nextElementSibling.className = selectedClass;
    selected.nextElementSibling.setAttribute('id', classColorList);
    selected.removeAttribute('id');
  }
}

buttonDown.addEventListener('click', moveDown);
