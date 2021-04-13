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
let selectedTask;

function emptyList() {
  if (sessionStorage.length > 2 || listItem.length !== 0) {
    taskList.removeAttribute('hidden');
  }
}
emptyList();

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
  emptyList();
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
  let x;
  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i].classList.contains('completed')) {
      x = { [i]: listItem[i].innerText, class: 'completed' };
    } else {
      x = { [i]: listItem[i].innerText };
    }
    sessionStorage.setItem(`${[i]}`, JSON.stringify(x));
  }

  //   const xd = { name: 'John', class: 'completed' };
  //   sessionStorage.setItem('xd', JSON.stringify(xd));
  //   const obj = JSON.parse(sessionStorage.xd);
}
let lista = [];
function StoragelengthSize() {
  if (sessionStorage.length > 1) {
    taskList.innerHTML = '';
    for (let i = 0; i < sessionStorage.length - 1; i += 1) {
      lista.push(JSON.parse(sessionStorage[i]));
    }
  }
}
function sessionToList() {
  StoragelengthSize();
  for (let i = 0; i < lista.length; i += 1) {
    const x = document.createElement('li');
    x.classList.add('listItem');
    x.innerText = lista[i][i];
    if (lista[i].class === 'completed') {
      x.classList.add('completed');
    }

    taskList.appendChild(x);
  }
  lista = [''];
}

function moveUp() {
  const el = selectedTask;
  const index = Array.from(el.parentNode.children).indexOf(el) - 1;
  const a = listItem[index];
  if (index > -1) {
    el.parentNode.insertBefore(el, a);
  }
}

upButton.addEventListener('click', moveUp);

function moveDown() {
  const el = selectedTask;
  const index = Array.from(el.parentNode.children).indexOf(el) + 2;
  const b = listItem[index];
  el.parentNode.insertBefore(el, b);
}

downButton.addEventListener('click', moveDown);

window.onload = () => {
  sessionToList();
  actionMoves();
};
saveTaskButton.addEventListener('click', saveTasks);
