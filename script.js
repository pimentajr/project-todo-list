// To set a new event listener, I've used the example at link below
// https://www.codegrepper.com/code-examples/javascript/Adding+an+event+listener+to+an+element+that+doesn%27t+exist+yet
// To separetaly create functions changeBackgroundColor and strikeListItem, I've used that logics
// https://dev.to/akhil_001/adding-event-listeners-to-the-future-dom-elements-using-event-bubbling-3cp1

const inputField = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const addButton = document.querySelector('#criar-tarefa');
const taskForm = document.querySelector('#input-task-container');
const rootElement = document.querySelector('body');

function addTaskAndChangeBackgroundColor() {
  const task = inputField.value;
  const listItem = document.createElement('li');

  listItem.className = 'new-item';
  listItem.innerText = task;
  taskList.appendChild(listItem);

  taskForm.reset();
}

function changeBackgroundColor(event) {
  const clickedItem = event.target;
  const taskListChildren = taskList.children;
  const background = 'rgb(128, 128, 128)';
  const selector = 'LI';
  if (clickedItem.tagName === selector) {
    for (let index = 0; index < taskListChildren.length; index += 1) {
      taskListChildren[index].style.backgroundColor = '';
    }
    clickedItem.style.backgroundColor = background;
  }
}

function strikeListItem(event) {
  const clickedItem = event.target;
  const selector = 'LI';

  if (clickedItem.tagName === selector) {
    clickedItem.classList.toggle('completed');
  }
}

rootElement.addEventListener('click', changeBackgroundColor);
rootElement.addEventListener('dblclick', strikeListItem);
addButton.addEventListener('click', addTaskAndChangeBackgroundColor);
