const list = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
const buttonCreateTask = document.querySelector('#criar-tarefa');
const buttonDeleteAllTasks = document.querySelector('#apaga-tudo');
const buttonDeleteCompleted = document.querySelector('#remover-finalizados');
const buttonDeleteSelected = document.querySelector('#remover-selecionado');

function newTask() {
  function addNewTask() {
    const itemList = document.createElement('li');
    itemList.innerText = input.value;
    input.value = '';
    list.appendChild(itemList);
  }
  buttonCreateTask.addEventListener('click', addNewTask);
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

function deleteList() {
  function deleteAll() {
    const itemList = document.getElementsByTagName('li');
    for (let index = itemList.length; index > 0; index -= 1) {
      list.removeChild(itemList[index - 1]);
    }
  }
  buttonDeleteAllTasks.addEventListener('click', deleteAll);
}

function deleteTask() {
  function deleteCompleted() {
    const itemListCompleted = document.getElementsByClassName('completed');
    for (let index = itemListCompleted.length; index > 0; index -= 1) {
      list.removeChild(itemListCompleted[index - 1]);
    }
  }
  buttonDeleteCompleted.addEventListener('click', deleteCompleted);
}

function deleteSelected() {
  function deleteTaskSelected() {
    const itemListSelected = document.getElementsByClassName('bg-list');
    for (let index = itemListSelected.length; index > 0; index -= 1) {
      list.removeChild(itemListSelected[index - 1]);
    }
  }
  buttonDeleteSelected.addEventListener('click', deleteTaskSelected);
}

newTask();
selectedTask();
taskCompleted();
deleteSelected();
deleteTask();
deleteList();
