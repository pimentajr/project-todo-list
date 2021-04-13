const input = document.getElementById('texto-tarefa');
const toDoList = document.querySelector('#lista-tarefas');
const createToDo = document.getElementById('criar-tarefa');
const removeAll = document.getElementById('apaga-tudo');
const toDos = document.getElementsByClassName('toDo');
const removeCompleted = document.getElementById('remover-finalizados');
const completedToDos = document.getElementsByClassName('completed');
const saveAll = document.getElementById('salvar-tarefas');

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
  for (let index = 0; index <= toDos.length; index = 0) {
    toDoList.removeChild(toDos[index]);
  }
}

function removeCompletedToDos() {
  for (let index = 0; index <= completedToDos.length; index = 0) {
    toDoList.removeChild(completedToDos[0]);
  }
}

function saveToDos() {
  const savedToDos = [];
  for (let index = 0; index < toDos.length; index += 1) {

    savedToDos[index] = {
      toDoName: toDos[index].innerHTML,
      toDoClass: toDos[index].className,
    }

    localStorage.toDo = JSON.stringify(savedToDos);
    
  }
  for(let todo of JSON.parse(localStorage.toDo)){
    console.log(todo.toDoClass);
  }
}

function reloadToDos() {
    for(let todo of JSON.parse(localStorage.toDo)){
      const toDoReload = document.createElement('li');
      toDoReload.innerText = todo.toDoName;
      toDoReload.className = todo.toDoClass;
      console.log(toDoReload);
      toDoList.appendChild(toDoReload);
    }
  
}

window.onload = function () {
  reloadToDos();
}

saveAll.addEventListener('click', saveToDos)
removeCompleted.addEventListener('click', removeCompletedToDos);
removeAll.addEventListener('click', removeAllToDos);
addEventListener('dblclick', toDoCompleted);
createToDo.addEventListener('click', addToDo);
addEventListener('click', toDoSelection);
