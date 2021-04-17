const task = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const taskCreate = document.querySelector('#criar-tarefa');

function addTask(string) {
  if ((task.value !== '')) {
    const newTask = document.createElement('li');
    newTask.className.add('task');
    newTask.innerText = string;
    taskList.appendChild(newTask);
  }
  task.focus();
  task.value = '';
}

taskCreate.addEventListener('click', () => {
  addTask(task.value);
});

task.addEventListener('keydown', (en) => {
  if (en.key === 'Enter') {
    addTask(task.value);
  }
});
