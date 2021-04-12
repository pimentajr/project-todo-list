const input = document.getElementById('texto-tarefa');
const toDoList = document.querySelector('#lista-tarefas');
const createToDo = document.getElementById('criar-tarefa');

function addToDo() {
  const toDo = document.createElement('li');
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
    element.target.classList.toggle('completed')
  }
}

addEventListener("dblclick", toDoCompleted);
createToDo.addEventListener('click', addToDo);
addEventListener('click', toDoSelection);
