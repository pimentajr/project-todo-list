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

  // add an event listener to new li element created
  if (listItem) {
    listItem.addEventListener('click', () => {
      // set new background onclick
      const background = 'rgb(128, 128, 128)';
      listItem.style.backgroundColor = background;
    });
  } else {
    console.log(Error('fail'));
  }
  taskForm.reset();
}

addButton.addEventListener('click', addTaskAndChangeBackgroundColor);
