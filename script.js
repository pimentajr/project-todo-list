function verifyColor() {
const toDoList = document.getElementById('lista-tarefas');
for (child = 0; child < toDoList.length; child += 1) {
  if (toDoList[child].style.backgroundColor === rgb(128, 128, 128)) {
    toDoList[child].style.backgroundColor = 'white';
  }
} 
}
verifyColor();

function addListItem() {
  const inputValue = document.getElementById('texto-tarefa');
  const toDoList = document.getElementById('lista-tarefas');
  const newItem = document.createElement('li');
  newItem.innerText = inputValue.value;
  toDoList.appendChild(newItem);
  inputValue.value = '';
}

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', addListItem);

function changeColor(event) {
const itemSelected = event.target;
itemSelected.style.backgroundColor = 'rgb(128,128,128)';
}

const toDoList = document.getElementById('lista-tarefas');
toDoList.addEventListener('click', changeColor)