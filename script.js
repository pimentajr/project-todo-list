function listItemBackgroundOnClick() {
  const listItems = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < listItems.length; index += 1) {
    const listItem = listItems[index];
    listItem.addEventListener('click', () => {
      listItem.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}

function newTaskButton() {
  const btnNewTask = document.querySelector('#criar-tarefa');
  const inputNewTask = document.querySelector('#texto-tarefa');
  const tasksList = document.querySelector('#lista-tarefas');
  btnNewTask.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.innerText = inputNewTask.value;
    tasksList.appendChild(newTask);
    inputNewTask.value = '';
    listItemBackgroundOnClick();
  });
}

newTaskButton();
