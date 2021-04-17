const addButton = document.getElementById('criar-tarefa');
const delListButton = document.getElementById('apaga-tudo');
const delCompletedTasks = document.getElementById('remover-finalizados');
const saveListTask = document.getElementById('salvar-tarefas');
const upButton = document.getElementById('mover-cima');
const downButton = document.getElementById('mover-baixo');
const inputText = document.getElementById('texto-tarefa');
const orderedList = document.getElementById('lista-tarefas');

addButton.addEventListener('click', () => {
  if ((inputText.value.length) === 0) {
    alert('Tarefa em branco!');
  } else {
    const li = document.createElement('li');
    li.setAttribute('id', 'itemList');
    li.innerHTML += inputText.value;
    orderedList.appendChild(li);
    inputText.value = null;
  }
});

delListButton.addEventListener('click', () => {
  const itensList = document.querySelectorAll('#itemList');
  for (let i = 0; i < itensList.length; i += 1) {
    itensList[i].parentNode.removeChild(itensList[i]);
  }
});

delCompletedTasks.addEventListener('click', () => {
  const itensList = document.querySelectorAll('.completed');
  for (let i = 0; i < itensList.length; i += 1) {
    itensList[i].parentNode.removeChild(itensList[i]);
  }
});

saveListTask.addEventListener('click', () => {
  const taskList = document.getElementById('lista-tarefas').innerHTML;
  localStorage.itens = taskList;
});

upButton.addEventListener('click', () => {
  const itemList = document.getElementsByTagName('li');
  for (let i = 0; i < itemList.length; i += 1) {
    if (itemList[i].classList.value.includes('selected') && i !== 0) {
      const saveItemList = itemList[i].outerHTML;
      itemList[i].outerHTML = itemList[i - 1].outerHTML;
      itemList[i - 1].outerHTML = saveItemList;
    }
  }
});

downButton.addEventListener('click', () => {
  const itemList = document.getElementsByTagName('li');
  for (let i = itemList.length - 1; i >= 0; i -= 1) {
    if (itemList[i].classList.value.includes('selected') && i !== (itemList.length - 1)) {
      const saveItemList = itemList[i].outerHTML;
      itemList[i].outerHTML = itemList[i + 1].outerHTML;
      itemList[i + 1].outerHTML = saveItemList;
    }
  }
});

function removeClass(arrayList) {
  for (let i = 0; i < arrayList.length; i += 1) {
    if (arrayList[i].classList.contains('selected')) {
      arrayList[i].classList.remove('selected');
    }
  }
}

function removeBackgroundcolor() {
  const arrayItensList = [];
  const itemList = document.querySelectorAll('ol li.selected');
  for (let i = 0; i < itemList.length; i += 1) {
    itemList[i].style.backgroundColor = 'rgb(256, 256, 256)';
    arrayItensList.push(itemList[i]);
    removeClass(arrayItensList);
  }
}

function greyBackground(event) {
  const mouseEvent = event;
  if (mouseEvent.target.classList.contains('selected')) {
    mouseEvent.target.classList.remove('selected');
  } else {
    mouseEvent.target.classList.add('selected');
  }
  mouseEvent.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function scratchItem(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function loadTaskList() {
  if (localStorage.itens) {
    orderedList.innerHTML = localStorage.itens;
  }
}

function actionList() {
  const itemList = document.querySelectorAll('ol');
  for (let i = 0; i < itemList.length; i += 1) {
    itemList[i].addEventListener('click', removeBackgroundcolor);
    itemList[i].addEventListener('click', greyBackground);
    itemList[i].addEventListener('dblclick', scratchItem);
  }
}

actionList();
loadTaskList();
