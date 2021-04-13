const ol = document.getElementById('lista-tarefas');

function clearSelected() {
  const clearItem = document.querySelectorAll('#todo');
  for (let index = 0; index < clearItem.length; index += 1) {
    clearItem[index].style.backgroundColor = null;
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

function clearList() {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    ol.removeChild(li[index]);
  }
}

function clearToDoList() {
  const button = document.getElementById('apaga-tudo');
  button.addEventListener('click', clearList);
}

function findCheckedItem() {
  const li = document.querySelectorAll('#todo');
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('completed')) {
      li[index].remove();
    }
  }
}

function removeCheckedItem() {
  const button = document.getElementById('remover-finalizados');
  button.addEventListener('click', findCheckedItem);
}

function findSelected() {
  const toDoItem = document.querySelectorAll('#todo');
  for (let index = 0; index < toDoItem.length; index += 1) {
    if (toDoItem[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      ol.removeChild(toDoItem[index]);
    }
  }
}

function removeSelectedItem() {
  const button = document.getElementById('remover-selecionado');
  button.addEventListener('click', findSelected);
}

function addListItem() {
  const input = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = '';
  const li = document.createElement('li');
  li.id = 'todo';
  li.innerText = input;
  ol.appendChild(li);
  selectTodo();
  clearToDoList();
  removeSelectedItem();
}

function addToDo() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', addListItem);
}

addToDo();
removeCheckedItem();
