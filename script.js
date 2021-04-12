const input = document.getElementById('texto-tarefa');
const toDoList = document.querySelector('#lista-tarefas');
const createToDo = document.getElementById('criar-tarefa');

function addToDo () {
  const toDo = document.createElement('li');
  toDo.innerText = input.value;
  toDoList.appendChild(toDo);
  input.value = '';
}

function toDoSelection (element) {
  if (element.target.parentNode === toDoList) {
    if (document.querySelector('.selected') === null) {
      element.target.classList.add('selected')
    }else{
      element.target.classList.remove('selected')
    };
  };
}

createToDo.addEventListener('click', addToDo);
addEventListener('click', toDoSelection);
