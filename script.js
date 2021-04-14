const input = document.getElementById('texto-tarefa');
const toDoList = document.querySelector('#lista-tarefas');
const createToDo = document.getElementById('criar-tarefa');
const removeAll = document.getElementById('apaga-tudo');
const toDos = document.getElementsByClassName('toDo');
const removeCompleted = document.getElementById('remover-finalizados');
const completedToDos = document.getElementsByClassName('completed');
const saveAll = document.getElementById('salvar-tarefas');
const removeSelected = document.getElementById('remover-selecionado');
const moveUp = document.getElementById('mover-cima');
const moveDown = document.getElementById('mover-baixo');

function addToDo() {
  const toDo = document.createElement('li');
  toDo.classList.add('toDo');
  toDo.innerText = input.value;
  toDoList.appendChild(toDo);
  input.value = '';
}

function toDoSelection(element) {
  if (element.target.parentNode === toDoList) {
    if (element.target.classList.contains('selected')) {
      element.target.classList.remove('selected');
    } else if (document.querySelector('.selected') !== null) {
      document.querySelector('.selected').classList.remove('selected');
      element.target.classList.add('selected');
    } else {
      element.target.classList.add('selected');
    }
  }
}

function toDoCompleted(element) {
  if (element.target.parentNode === toDoList) {
    element.target.classList.toggle('completed');
  }
}

function removeAllToDos() {
  if (toDos.length > 0) {
    for (let index = 0; index < toDos.length; index = 0) {
      toDoList.removeChild(toDos[index]);
      localStorage.clear();
    }
  }
}

function removeCompletedToDos() {
  if (completedToDos.length > 0) {
    for (let index = 0; index < completedToDos.length; index = 0) {
      toDoList.removeChild(completedToDos[0]);
    }
  }
}

function removeSelectedToDo() {
  if (document.querySelector('.selected') !== null) {
    toDoList.removeChild(document.querySelector('.selected'));
  }
}

function saveToDos() {
  const savedToDos = [];
  if (toDos.length > 0) {
    for (let index = 0; index < toDos.length; index += 1) {
      savedToDos[index] = {
        toDoName: toDos[index].innerHTML,
        toDoClass: toDos[index].className,
      };
      localStorage.toDo = JSON.stringify(savedToDos);
    }
  }
}

function reloadToDos() {
  const toDosSave = JSON.parse(localStorage.toDo);
  for (const todo of toDosSave) {
    const toDoReload = document.createElement('li');
    toDoReload.innerText = todo.toDoName;
    toDoReload.className = todo.toDoClass;
    console.log(toDoReload);
    toDoList.appendChild(toDoReload);
  }
}

function toDoMoveUp() {
  for (let index = 0; index < toDos.length; index += 1) {
    if (toDos[index] === document.querySelector('.selected') && index !== 0) {
      toDoList.insertBefore(toDos[index], toDos[index - 1]);
    }
  }
}

function toDoMoveDown() {
  for (let index = 0; index < toDos.length; index += 1) {
    if (toDos[index] === document.querySelector('.selected') && index !== (toDos.length - 1)) {
      toDoList.insertBefore(toDos[index], toDos[index + 1].nextSibling);
      break;
    }
  }
}

function moveToDos(button){
  if (button.target === moveUp) {
    toDoMoveUp();
  }
  else if (button.target === moveDown) {
    toDoMoveDown();
  }
}

window.onload = function () {
  if (localStorage.length > 0) {
    reloadToDos();
  }
};

addEventListener('click', moveToDos);
// moveDown.addEventListener('click', toDoMoveDown);
// moveUp.addEventListener('click', toDoMoveUp);
removeSelected.addEventListener('click', removeSelectedToDo);
saveAll.addEventListener('click', saveToDos);
removeCompleted.addEventListener('click', removeCompletedToDos);
removeAll.addEventListener('click', removeAllToDos);
addEventListener('dblclick', toDoCompleted);
createToDo.addEventListener('click', addToDo);
addEventListener('click', toDoSelection);
