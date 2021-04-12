const taskInput = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const taskBtn = document.querySelector('#criar-tarefa');

function createTaskList(text) {
  const itenLi = document.createElement('li');
  itenLi.classList.add('iten-li');
  itenLi.innerHTML = text;
  taskList.appendChild(itenLi);
}

taskList.addEventListener('click', (event) => {
  const addSelected = event.target;
  const selectedSearch = document.querySelector('.task-selected');
  if (selectedSearch === null) {
    addSelected.classList.add('task-selected');
  } else if (selectedSearch !== null) {
    selectedSearch.classList.remove('task-selected');
    addSelected.classList.add('task-selected');
  }
});

// taskList.addEventListener('click', (event) => {
//   const taskListFor = document.querySelectorAll('.iten-li');
//   const taskToBeColored = event.target;
//   for (let index = 0; index < taskListFor.length; index += 1) {
//     taskListFor[index].style.backgroundColor = null;
//     console.log(taskListFor[index].style.backgroundColor);
//     if (!taskListFor[index].style.backgroundColor) {
//       taskToBeColored.style.backgroundColor = 'rgb(128,128,128)';
//     }
//   }
// });

taskBtn.addEventListener('click', () => {
  if (taskInput.value) {
    createTaskList(taskInput.value);
    taskInput.value = '';
  }
});
