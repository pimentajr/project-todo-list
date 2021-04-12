const inputButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const inputField = document.getElementById('texto-tarefa');
const listItem = document.getElementsByClassName('listItem');
inputButton.style.backgroundColor = 'red';

function paintTask(event) {
  const el = event;
  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i].style.backgroundColor === 'grey') {
      listItem[i].style.backgroundColor = 'white';
    }
    el.target.style.backgroundColor = 'grey';
  }
}

function bgColorChanger() {
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].addEventListener('click', paintTask);
  }
}

function CreateTask() {
  const x = document.createElement('li');
  x.setAttribute('class', 'listItem');
  x.innerText = inputField.value;
  taskList.appendChild(x);
  if (x.innerText === '') {
    alert('ERRO');
    taskList.removeChild(x);
  }
  inputField.value = '';
  inputField.focus();
  bgColorChanger();
}

inputButton.addEventListener('click', CreateTask);
