const noSelected = 'no-selected';
const buttonCreateList = document.getElementById('criar-tarefa');
const toDoOl = document.querySelector('#lista-tarefas');
const inputToDo = document.querySelector('#texto-tarefa');
const toDoLi = document.getElementsByTagName('li');
const deletedList = document.querySelector('#apaga-tudo');
const deletedCompleted = document.querySelector('#remover-finalizados');

function createNewToDo(toDo) {
  const newLi = document.createElement('li');
  toDoOl.appendChild(newLi);
  newLi.className = noSelected;
  newLi.innerText = toDo;
  inputToDo.value = '';
}

function createListToDo() {
  createNewToDo(inputToDo.value);
}

buttonCreateList.addEventListener('click', createListToDo);

function noSelectedToDoLi() {
  for (let index = 0; index < toDoLi.length; index += 1) {
    if (!toDoLi[index].classList.contains(noSelected)) {
      toDoLi[index].classList.add(noSelected);
    }
  }
}

function SelectedToDoLi(event) {
  noSelectedToDoLi();
  if (event.target.classList.contains(noSelected)) {
    event.target.classList.remove(noSelected);
  }
}

toDoOl.addEventListener('click', SelectedToDoLi);

function completedToDo(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

toDoOl.addEventListener('dblclick', completedToDo);

function deletedAllLi() {
  while (toDoLi.length > 0) {
    toDoOl.removeChild(toDoLi[0]);
  }
}

deletedList.addEventListener('click', deletedAllLi);

function deletedLiCompleted() {
  let completed = [];
  for (let index = 0; index < toDoLi.length; index += 1) {
    if (toDoLi[index].classList.contains('completed')) {
      completed.push(toDoLi[index]);
    }
  }
  for (let indexJ = 0; indexJ < completed.length; indexJ += 1) {
    toDoOl.removeChild(completed[indexJ]);
  }
}

deletedCompleted.addEventListener('click', deletedLiCompleted);
