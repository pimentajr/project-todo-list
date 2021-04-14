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
    listItem.addEventListener('click', (event) => {
      // set new background onclick
      const taskListChildren = taskList.children;
      const background = 'rgb(128, 128, 128)';
      const clickedItem = event.target;

      for (let index = 0; index < taskListChildren.length; index += 1) {
        taskListChildren[index].style.backgroundColor = '';
      }
      clickedItem.style.backgroundColor = background;
    });
  } else {
    console.log(Error('fail'));
  }
  taskForm.reset();
}

addButton.addEventListener('click', addTaskAndChangeBackgroundColor);
