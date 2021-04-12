function addListItem() {
  let inputValue = document.getElementById('texto-tarefa');
  const toDoList = document.getElementById('lista-tarefas');
  const newItem = document.createElement('li');
  newItem.innerText = inputValue.value;
  toDoList.appendChild(newItem);
  inputValue.value = '';
}

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', addListItem);
