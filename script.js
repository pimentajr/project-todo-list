const taskInput = document.querySelector('#texto-tarefa');
const addTaskButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const removeAllTasksButton = document.querySelector('#apaga-tudo');
const removeCompletedTasksButton = document.querySelector(
  '#remover-finalizados'
);
const removeSelectedTasks = document.querySelector('#remover-selecionado');
const saveTasksButton = document.querySelector('#salvar-tarefas');
const moveUp = document.querySelector('#mover-cima');
const moveDown = document.querySelector('#mover-baixo');

removeAllTasksButton.addEventListener('click', () => {
  if (taskList.children.length) {
    taskList.innerHTML = '';
  }
});

removeSelectedTasks.addEventListener('click', () => {
  const taskFound = [...taskList.children].find((child) =>
    child.classList.contains('selected')
  );
  if (taskFound) taskFound.remove();
});

removeCompletedTasksButton.addEventListener('click', () => {
  const isTaskCompleted = (task) => task.classList.contains('completed');
  [...taskList.children].reduceRight((acc, child) => {
    if (isTaskCompleted(child)) child.remove();
    return 0;
  }, 0);
});

saveTasksButton.addEventListener('click', () => {
  const items = [...taskList.children].map((listItem) => [
    listItem.innerText,
    listItem.className,
  ]);
  const stringified = JSON.stringify(items);
  localStorage.setItem('listItems', stringified);
});

addTaskButton.addEventListener('click', () => {
  const taskInputValue = taskInput.value;
  const TASK = document.createElement('li');
  TASK.innerText = taskInputValue;
  taskList.appendChild(TASK);
  taskInput.value = null;
  taskInput.focus();
});

[...taskList.children].forEach((child) => {
  console.log(1);
  child.addEventListener('click', () => {
    child.classList.toggle('completed');
  });
});

moveUp.addEventListener('click', () => {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem !== taskList.firstElementChild) {
    taskList.insertBefore(selectedItem, selectedItem.previousSibling);
  }
});

moveDown.addEventListener('click', () => {
  const selectedItem = document.getElementsByClassName('selected')[0];
  const siblings = document.querySelector('#lista-tarefas');
  if (selectedItem !== siblings.lastElementChild) {
    siblings.insertBefore(selectedItem, selectedItem.nextSibling.nextSibling);
  }
});

function resetSelectedChildren() {
  [...taskList.children].forEach((child) => {
    const CHILD = child;
    CHILD.style.backgroundColor = null;
    CHILD.classList.remove('selected');
  });
}

taskList.addEventListener('mousedown', (e) => {
  if (e.target !== this) {
    resetSelectedChildren();
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
    e.target.classList.add('selected');
  }
});

taskList.addEventListener('dblclick', (e) => {
  if (e.target !== this) {
    e.target.classList.toggle('completed');
  }
});

window.onload = () => {
  const data = localStorage.getItem('listItems');
  if (!data) return;
  const listItems = JSON.parse(data);
  listItems.forEach(([itemText, itemClassName]) => {
    const li = document.createElement('li');
    li.innerText = itemText;
    li.className = itemClassName;
    taskList.appendChild(li);
  });
};
