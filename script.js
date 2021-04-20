const createTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const task = document.getElementById('texto-tarefa');

createTask.addEventListener('click', () => {
  const listItem = document.createElement('li');
  listItem.innerText = task.value;
  taskList.appendChild(listItem);
  task.value = '';
});



function selectedTask() {
  taskList.addEventListener('click', (event) => {
    const targetEvent = event.target;
    const selectedItem = document.querySelector('.selected');
    if (selectedItem) {
      selectedItem.classList.remove('selected');
    }
    targetEvent.classList.add('selected');
  });
}

selectedTask();

function dblclick() {
  taskList.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains ('completed')) {
      event.target.classList.remove ('completed');
    } else {
        event.target.classList.add ('completed');
      }
  });
}
dblclick();





