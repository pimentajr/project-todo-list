// To set a new event listener, I've used the example at link below
// https://www.codegrepper.com/code-examples/javascript/Adding+an+event+listener+to+an+element+that+doesn%27t+exist+yet
// To separetaly create functions changeBackgroundColor and strikeListItem, I've used that logics
// https://dev.to/akhil_001/adding-event-listeners-to-the-future-dom-elements-using-event-bubbling-3cp1

const inputField = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const addButton = document.querySelector('#criar-tarefa');
const taskForm = document.querySelector('#input-task-container');
const rootElement = document.querySelector('body');
const deleteButton = document.querySelector('#apaga-tudo');
const finishedButton = document.querySelector('#remover-finalizados');
const form = document.querySelector('form');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

// function addTask(task) {
//   //const task = inputField.value;
//   const listItem = document.createElement('li');

//   itemsArray.push(inputField.value);
//   localStorage.setItem('items', JSON.stringify(itemsArray));
//   listItem.className = 'new-item';
//   listItem.innerText = task;
//   taskList.appendChild(listItem);

//   taskForm.reset();
// }

const addTask = (task) => {
  const listItem = document.createElement('li');
  listItem.className = 'new-item';
  listItem.innerText = task;
  taskList.appendChild(listItem);
};

data.forEach((item) => {
  addTask(item);
});

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

function cleanListItems() {
  localStorage.clear();
  const taskListItems = taskList.children;
  // console.log(taskList);
  if (taskListItems.length !== 0) {
    while (taskList.firstChild) {
      taskList.firstChild.remove();
    }
  }
}

function removeFinishedItems() {
  const taskListItems = taskList.children;

  for (let index = 0; index < taskListItems.length; index += 1) {
    while (taskListItems[index].className === 'new-item completed') {
      taskListItems[index].remove();
    }
  }
}

rootElement.addEventListener('click', changeBackgroundColor);
rootElement.addEventListener('dblclick', strikeListItem);
// addButton.addEventListener('click', addTask);
deleteButton.addEventListener('click', cleanListItems);
finishedButton.addEventListener('click', removeFinishedItems);
// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   itemsArray.push(inputField.value);
//   localStorage.setItem('items', JSON.stringify(itemsArray));
//   addTask(inputField.value);
//   inputField.value = '';
// });

addButton.addEventListener('click', (event) => {
  event.preventDefault();

  itemsArray.push(inputField.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  addTask(inputField.value);
  inputField.value = '';
});
