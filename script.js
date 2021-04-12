function changeBgColor(event) {
  const task = event.target;
  task.style.backgroundColor = 'rgb(128,128,128)';
}

function selectTodo() {
  const toDoSelected = document.querySelectorAll('#todo');

  for (let index = 0; index < toDoSelected.length; index += 1) {
    toDoSelected[index].addEventListener('click', changeBgColor);
  }
}

function addListItem() {
  const input = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = '';
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  li.id = 'todo';
  li.innerText = input;
  ol.appendChild(li);
  selectTodo();
}

function addToDo() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', addListItem);
}

addToDo();
