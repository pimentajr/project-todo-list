const addTaskForm = document.getElementById('add-task-form');
const taskListElement = document.getElementById('lista-tarefas');

function addTask(event) {
  const dateAdded = Date.now();
  const prettyDateAdded = new Date().toUTCString();
  const task = document.getElementById('texto-tarefa').value;
  const taskObject = { task, dateAdded, prettyDateAdded };
  let stringifiedTaskList = localStorage.taskList;
  let taskList;

  if (!stringifiedTaskList) {
    taskList = [taskObject];
  } else {
    taskList = JSON.parse(stringifiedTaskList);
    taskList.push(taskObject);
  }
  stringifiedTaskList = JSON.stringify(taskList);
  localStorage.taskList = stringifiedTaskList;
  event.preventDefault();
}

window.onload = () => {
  addTaskForm.addEventListener('submit', addTask);
};
