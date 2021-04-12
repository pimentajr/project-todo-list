const input = document.getElementById('texto-tarefa')
const toDoList = document.querySelector('#lista-tarefas')
const createToDo = document.getElementById('criar-tarefa')
const toDos = document.querySelector("li")

function addToDo () {
  const toDo = document.createElement('li');
  toDo.innerText = input.value;
  toDoList.appendChild(toDo);
  input.value = "";
}

function toDoSelection (element) {
  if(document.querySelector('.selected') === null){
    if(element.target.parentNode === toDoList){
      element.target.classList.add("selected")
    }
  }else{
    if(element.target.parentNode === toDoList){
      element.target.classList.remove("selected")
    }
  }
}

createToDo.addEventListener('click', addToDo);
addEventListener('click', toDoSelection)
