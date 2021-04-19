const btnCreatTask = document.querySelector('#criar-tarefa');
const body = document.querySelector('body');
const listTask = document.querySelector('#lista-tarefas');
const taskContainer = document.querySelector('#container');
const inputField = document.querySelector('#texto-tarefa');

function addTask() {
  const task = inputField.value;
  if (task !== '') {
    const listItem = document.createElement('li');
    listItem.className = 'new-item';
    listItem.innerText = task;
    listTask.appendChild(listItem);

    taskContainer.reset();
  } else {
    alert('Tarefa inválida');
  }
}

function backgroundColor(event) {
  const clickedItem = event.target;
  const listTaskChildren = listTask.children;
  const backColor = 'rgb(128, 128, 128)';
  const selected = 'LI';
  if (clickedItem.tagName === selected) {
    for (let index = 0; index < listTaskChildren.length; index += 1) {
      listTaskChildren[index].style.backgroundColor = '';
    }
    clickedItem.style.backgroundColor = backColor;
  }
}

function scratch(event) {
  const clickedItem = event.target;
  const selected = 'LI';
  if (clickedItem.tagName === selected) {
    clickedItem.classList.toggle('completed');
  }
}

body.addEventListener('click', backgroundColor);
body.addEventListener('dblclick', scratch);
btnCreatTask.addEventListener('click', addTask);
