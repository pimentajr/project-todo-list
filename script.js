const list = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');

function newTask() {
  function addNewTask() {
    const itemList = document.createElement('li');
    itemList.innerText = input.value;
    input.value = '';
    list.appendChild(itemList);
  }
  button.addEventListener('click', addNewTask);
}

function clearSelected() {
  for (let index = 0; index < list.children.length; index += 1) {
    list.children[index].classList.remove('bg-list');
  }
}

function selectedTask() {
  function addNewColor(event) {
    const selected = event.target;
    clearSelected();
    selected.classList.add('bg-list');
  }
  list.addEventListener('click', addNewColor);
}

function taskCompleted() {
  function taskLine(event) {
    const selected = event.target;
    if (selected.classList[0] === 'completed' || selected.classList[1] === 'completed') {
      selected.classList.remove('completed');
    } else {
      selected.classList.add('completed');
    }
  }
  list.addEventListener('dblclick', taskLine);
}

newTask();
selectedTask();
taskCompleted();
