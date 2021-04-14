// To set a new event listener, I've used the example at link below
// https://www.codegrepper.com/code-examples/javascript/Adding+an+event+listener+to+an+element+that+doesn%27t+exist+yet

const inputField = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const addButton = document.querySelector('#criar-tarefa');
const taskForm = document.querySelector('#input-task-container');

function addTaskAndChangeBackgroundColor() {
  const task = inputField.value;
  const listItem = document.createElement('li');

  listItem.className = 'new-item';
  listItem.innerText = task;
  taskList.appendChild(listItem);

  // Add an event listener to new li element created
  // if (listItem) {
  //   listItem.addEventListener('click', (event) => {
  //     // Set new background onclick
  //     const taskListChildren = taskList.children;
  //     const background = 'rgb(128, 128, 128)';
  //     const clickedItem = event.target;
  //     // Set option to select a unique item with new background color
  //     for (let index = 0; index < taskListChildren.length; index += 1) {
  //       taskListChildren[index].style.backgroundColor = '';
  //     }
  //     clickedItem.style.backgroundColor = background;
  //   });

  //   listItem.addEventListener('dblclick', (event) => {
  //     const clickedItem = event.target;

  //     clickedItem.classList.toggle('completed');
  //   });
  // } else {
  //   console.log(Error('fail'));
  // }
  taskForm.reset();
}

const rootElement = document.querySelector('body');

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
