function clearSelected() {
  const toDoItem = document.querySelectorAll('#todo');
  for (let index = 0; index < toDoItem.length; index += 1) {
    toDoItem[index].style.backgroundColor = null;
  }
}

function changeBgColor(event) {
  clearSelected();
  const task = event.target;
  task.style.backgroundColor = 'rgb(128,128,128)';
}

function checkListItem(event) {
  const task = event.target;
  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.toggle('completed');
  }
}

function selectTodo() {
  const toDoSelected = document.querySelectorAll('#todo');
  for (let index = 0; index < toDoSelected.length; index += 1) {
    toDoSelected[index].addEventListener('click', changeBgColor);
    toDoSelected[index].addEventListener('dblclick', checkListItem);
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

function clearList() {
  const ol = document.getElementById('lista-tarefas');
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    ol.removeChild(li[index]);
  }
}

function clearToDoList() {
  const button = document.getElementById('apaga-tudo');
  button.addEventListener('click', clearList);
}

clearToDoList();
