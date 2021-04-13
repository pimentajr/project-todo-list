const inputButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const inputField = document.getElementById('texto-tarefa');
const listItem = document.getElementsByClassName('listItem');
const cleanerButton = document.getElementById('apaga-tudo');
const clearCompletedButton = document.getElementById('remover-finalizados');
const completedTasks = document.getElementsByClassName('completed');
const saveTaskButton = document.getElementById('salvar-tarefas');

function emptyList() {
  if (sessionStorage.length > 2 || listItem.length !== 0) {
    taskList.removeAttribute('hidden');
  }
}
emptyList();

function paintTask(event) {
  const el = event;
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].classList.remove('selected');
  }
  el.target.classList.toggle('selected');
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
  for (let i = 0; i < listItem.length; i += 1) {
    const x = String(i);
    const y = String(listItem[i].innerText);
    sessionStorage.setItem(`${x}`, `${y}`);
  }
}

function sessionToList() {
  if (sessionStorage.length > 1) {
    taskList.innerHTML = '';
    for (let i = 0; i < sessionStorage.length - 1; i += 1) {
      const x = document.createElement('li');
      x.setAttribute('class', 'listItem');
      x.innerText = sessionStorage.getItem(i);
      taskList.appendChild(x);
    }
  }
}

window.onload = () => {
  sessionToList();
  actionMoves();
};
saveTaskButton.addEventListener('click', saveTasks);
