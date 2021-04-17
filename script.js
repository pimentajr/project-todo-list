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
  event.target.classList.toggle('completed');
}
taskList.addEventListener('dblclick', scratch);

function deleteTask() {
  taskList.innerHTML = '';
}
const taskDelete = document.getElementById('apaga-tudo');
taskDelete.addEventListener('click', deleteTask);

function deleteCompletedTasks() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTasks.length; index += 1) {
    const tasksCompleted = completedTasks[index];
    tasksCompleted.remove();
  }
}
const removeTasks = document.getElementById('remover-finalizados');
removeTasks.addEventListener('click', deleteCompletedTasks)