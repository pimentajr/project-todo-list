const buttonCriarTarefa = document.getElementById('criar-tarefa');
const listaDeTarefasOl = document.querySelector('#lista-tarefas');
const inputListaTarefa = document.querySelector('#texto-tarefa');
const toDoLi = document.getElementsByTagName('li');

function createNewToDo(toDo) {
  const newLi = document.createElement('li');
  listaDeTarefasOl.appendChild(newLi);
  newLi.className = 'no-selected';
  newLi.innerText = toDo;
  inputListaTarefa.value = '';
}

function createListToDo() {
  createNewToDo(inputListaTarefa.value);
}

buttonCriarTarefa.addEventListener('click', createListToDo);

function noSelectedToDoLi() {
  for (let index = 0; index < toDoLi.length; index += 1) {
    if (!toDoLi[index].classList.contains('no-selected')) {
      toDoLi[index].classList.add('no-selected');
    }
  }
}

function SelectedToDoLi(event) {
  noSelectedToDoLi();
  if (event.target.classList.contains('no-selected')) {
    event.target.classList.remove('no-selected');
  }
}

listaDeTarefasOl.addEventListener('click', SelectedToDoLi);

function completedToDo(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

listaDeTarefasOl.addEventListener('dblclick', completedToDo);
