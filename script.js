const addTaskInput = document.getElementById('texto-tarefa');
const addTaskButton = document.getElementById('criar-tarefa');

const taskList = document.getElementById('lista-tarefas');

let selectedTask;

function selectTask(e) {
  const task = e.target;
  
  task.style.backgroundColor = 'rgb(128, 128, 128)';
  
  if (selectedTask) {
    selectedTask.style.backgroundColor = null;
  }
  selectedTask = task;
}

function addTask(text) {
  const newTask = document.createElement('li');
  newTask.classList.add('task');
  newTask.addEventListener('click', selectTask);
  newTask.innerText = text;

  taskList.appendChild(newTask);
}

function clearInput() {
  addTaskInput.value = '';
  addTaskInput.focus();
}

addTaskButton.addEventListener('click', () => {
  addTask(addTaskInput.value);
  clearInput();
});

addTaskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask(addTaskInput.value);
    clearInput();
  }
});
