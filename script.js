const list = document.querySelector('#lista-tarefas');

function addNewTask() {
  const input = document.querySelector('#texto-tarefa');
  const itemList = document.createElement('li');
  itemList.innerText = input.value;
  input.value = '';
  list.appendChild(itemList);
}

function newTask() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', addNewTask);
}

function clearSelected() {
  for (let index = 0; index < list.children.length; index += 1) {
    list.children[index].className = '';
  }
}

function addNewColor(event) {
  const selected = event.target;
  clearSelected();
  selected.className = 'bg-list';
}

function selectedTask() {
  list.addEventListener('click', addNewColor);
}

newTask();
selectedTask();
