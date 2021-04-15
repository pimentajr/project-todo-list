const addButton = document.querySelector('#criar-tarefa');
const delButton = document.querySelector('#apaga-tudo');
const removeCheckButton = document.querySelector('#remover-finalizados');

const olTaskList = document.querySelector('#lista-tarefas');

const input1 = document.querySelector('#texto-tarefa');

addButton.addEventListener('click', function () {
  const inputValue = input1.value;
  const newTask = document.createElement('li');
  newTask.innerHTML = inputValue;
  newTask.className = 'task';
  olTaskList.appendChild(newTask);
  input1.value = '';
});

const tasks = document.querySelector('ol');

function selectTask(event) {
  for (let index = 0; index < tasks.children.length; index += 1) {
    tasks.children[index].style.backgroundColor = '';
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}
tasks.addEventListener('click', selectTask);

let click = 0;
function completed(event) {
  if (click === 0) {
    event.target.classList.add('completed');
    click = 1;
  } else {
    event.target.classList.remove('completed');
    click = 0;
  }
}

tasks.addEventListener('dblclick', completed);

function deleteAll() {
  tasks.innerHTML = '';
}

delButton.addEventListener('click', deleteAll);

//let complete = document.querySelectorAll('.completed');
function removeChecked() {
  for (let index = 0; index < tasks.children.length; index += 1) {
    if (tasks.children[index].classList.contains('completed')) {
      tasks.removeChild(tasks.children[index]);
      index = 0;
    }
  }
}

removeCheckButton.addEventListener('click', removeChecked);
