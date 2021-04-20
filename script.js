const addButton = document.querySelector('#criar-tarefa');
const delButton = document.querySelector('#apaga-tudo');
const removeCheckButton = document.querySelector('#remover-finalizados');
const saveButton = document.querySelector('#salvar-tarefas');
const upButton = document.querySelector('#mover-cima');
const downButton = document.querySelector('#mover-baixo');
const removeButton = document.querySelector('#remover-selecionado');

const olTaskList = document.querySelector('#lista-tarefas');

const input1 = document.querySelector('#texto-tarefa');

const taskListSave = [];
const taskColSave = {};

let listLength = 0;

addButton.addEventListener('click', () => {
  const inputValue = input1.value;
  const newTask = document.createElement('li');
  newTask.innerHTML = inputValue;
  newTask.className = 'task';
  olTaskList.appendChild(newTask);
  input1.value = '';
  listLength = document.getElementsByClassName('task').length;
});

const tasks = document.querySelector('ol');

function selectTask(event) {
  for (let index = 0; index < tasks.children.length; index += 1) {
    tasks.children[index].style.backgroundColor = '';
  }
  const colorTask = event.target.style;
  colorTask.backgroundColor = 'rgb(128,128,128)';
}
tasks.addEventListener('click', selectTask);

function completed(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

tasks.addEventListener('dblclick', completed);

function deleteAll() {
  tasks.innerHTML = '';
  localStorage.clear();
}

delButton.addEventListener('click', deleteAll);

function removeChecked() {
  const complet = document.querySelector('.completed');
  for (let index = 0; index < tasks.children.length;) {
    if (complet && tasks.children[index].classList.contains('completed')) {
      tasks.removeChild(tasks.children[index]);
      index = 0;
    } else {
      index += 1;
    }
  }
}

removeCheckButton.addEventListener('click', removeChecked);

saveButton.addEventListener('click', () => {
  for (let index = 0; index < listLength; index += 1) {
    taskListSave.push(document.getElementsByClassName('task')[index].innerHTML);
    localStorage.setItem('taskList', JSON.stringify(taskListSave));
    const classList = document.getElementsByClassName('task');
    const task = document.getElementsByClassName('task')[index].innerHTML;
    if (classList[index].classList.contains('completed')) {
      taskColSave[task] = 'completed';
    }
    localStorage.setItem('taskCollection', JSON.stringify(taskColSave));
  }
});

if (JSON.parse(localStorage.getItem('taskList'))) {
  for (let index = 0; index < JSON.parse(localStorage.getItem('taskList')).length; index += 1) {
    const newTask = document.createElement('li');
    newTask.innerHTML = JSON.parse(localStorage.getItem('taskList'))[index];
    const recObj = JSON.parse(localStorage.getItem('taskCollection'));
    newTask.className = 'task';
    for (let task in recObj) {
      if (newTask.innerHTML === task) {
        newTask.classList.add(recObj[task]);
      }
    }
    olTaskList.appendChild(newTask);
  }
}

upButton.addEventListener('click', () => {
  for (let index = 0; index < listLength; index += 1) {
    if (olTaskList.children[index].style.backgroundColor && index > 0) {
      const tempValue = olTaskList.children[index - 1].innerHTML;
      olTaskList.children[index - 1].innerHTML = olTaskList.children[index].innerHTML;
      olTaskList.children[index - 1].style.backgroundColor = 'rgb(128, 128, 128)';
      olTaskList.children[index].innerHTML = tempValue;
      olTaskList.children[index].style.backgroundColor = '';
    }
  }
});

function removeSelected() {
  for (let index = 0; index < tasks.children.length; index += 1) {
    if (tasks.children[index].style.backgroundColor) {
      tasks.removeChild(tasks.children[index]);
    }
  }
}

removeButton.addEventListener('click', removeSelected);
