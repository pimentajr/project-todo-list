const inputButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const inputField = document.getElementById('texto-tarefa');
const listItem = document.getElementsByClassName('listItem');
const cleanerButton = document.getElementById('apaga-tudo');
const clearCompletedButton = document.getElementById('remover-finalizados');
const completedTasks = document.getElementsByClassName('completed');
const saveTaskButton = document.getElementById('salvar-tarefas');
const downButton = document.getElementById('mover-baixo');
const upButton = document.getElementById('mover-cima');
const removeSelectedButton = document.getElementById('remover-selecionado');
let selectedTask = document.getElementsByClassName('selected')[0];

function removeHidden() {
  if (localStorage.length > 2 || listItem.length !== 0) {
    taskList.removeAttribute('hidden');
  }
}
removeHidden();

function paintTask(event) {
  const el = event.target;
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].classList.remove('selected');
  }
  el.classList.toggle('selected');
  [selectedTask] = [document.getElementsByClassName('selected')[0]];
}

function paintTaskChanger() {
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].addEventListener('click', paintTask);
  }
}

function strikeThrough(event) {
  const el = event;
  el.target.classList.toggle('completed');
}

function strikeThroughChanger() {
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].addEventListener('dblclick', strikeThrough);
  }
}

function actionMoves() {
  strikeThroughChanger();
  paintTaskChanger();
  removeHidden();
}

function CreateTask() {
  const x = document.createElement('li');
  x.setAttribute('class', 'listItem');
  x.innerText = inputField.value;
  taskList.appendChild(x);
  actionMoves();

  if (x.innerText === '') {
    alert('ERRO');
    taskList.removeChild(x);
  }
  inputField.value = '';
  inputField.focus();
}

inputButton.addEventListener('click', CreateTask);

inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    CreateTask();
  }
});

function clearAll() {
  localStorage.clear();
  taskList.innerHTML = '';
  taskList.setAttribute('hidden', 'true');
}

cleanerButton.addEventListener('click', clearAll);

function clearCompleted() {
  while (completedTasks.length > 0) {
    completedTasks[0].remove();
  }
}

clearCompletedButton.addEventListener('click', clearCompleted);

function saveTasks() {
  localStorage.clear();
  let x;
  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i].classList.contains('completed')) {
      x = { [i]: listItem[i].innerText, class: 'completed' };
    } else {
      x = { [i]: listItem[i].innerText };
    }
    localStorage.setItem(`${[i]}`, JSON.stringify(x));
  }
}

saveTaskButton.addEventListener('click', saveTasks);

const allOlElements = document.getElementsByTagName('ol')[0];

function saveOlList() {
  saveTaskButton.addEventListener('click', () => {
    localStorage.setItem('key', allOlElements.innerHTML);
  });
}
saveOlList();

function getOlList() {
  allOlElements.innerHTML = localStorage.getItem('key');
}

getOlList();

function moveUp() {
  const el = document.querySelector('.selected');
  if (el !== taskList.children[0] && el) {
    taskList.insertBefore(el, el.previousSibling);
  }
}

upButton.addEventListener('click', moveUp);

function moveDown() {
  const el = document.querySelector('.selected');

  if (el !== taskList.lastChild && el) {
    taskList.insertBefore(el.nextSibling, el);
  }
}

downButton.addEventListener('click', moveDown);

function removeSelected() {
  const el = selectedTask;
  el.parentNode.removeChild(el);
}

removeSelectedButton.addEventListener('click', removeSelected);

window.onload = () => {
  actionMoves();
};
