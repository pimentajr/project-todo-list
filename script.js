const input = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function addTask(text) {
  const newTask = document.createElement('li');
  newTask.className.add = 'task';
  newTask.innerText = text;
  return newTask;
}
const taskCreate = document.querySelector('#criar-tarefa');

taskCreate.addEventListener('click', () => {
  const text = input.value;
  taskList.appendChild(addTask(text));
  input.value = '';
});

function colorsTask(events) {
  const selectedTask = taskList.querySelector('.selected');

  if (selectedTask !== null && selectedTask !== events.target) {
    selectedTask.classList.remove('selected');
  }
  events.target.classList.add('selected');
}
taskList.addEventListener('click', colorsTask);

function scratch(event) {
  event.target.classList.toggle('completed')
}
taskList.addEventListener('dblclick', scratch);
