const addTaskForm = document.getElementById('add-task-form');
const taskListView = document.getElementById('lista-tarefas');
const locale = 'pt-BR';
const prettyDateOptions = {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
};

function Task() {
  this.title = '';
  this.addedOn = Date.now();
  this.prettyAddedOn = new Date().toLocaleString(locale, prettyDateOptions);
}

function updateStorage(task) {
  const retrievedTaskList = localStorage.getItem('taskList');

  if (!retrievedTaskList) {
    localStorage.setItem('taskList', JSON.stringify([task]));
  } else {
    const taskListArray = JSON.parse(retrievedTaskList);
    taskListArray.push(task);
    localStorage.setItem('taskList', JSON.stringify(taskListArray));
  }
}

function getInputValuesFrom(container) {
  const inputElements = document.querySelectorAll(`${container} input`);
  const inputValues = [];

  for (let index = 0; index < inputElements.length; index += 1) {
    inputValues.push(inputElements[index].value);
  }

  return inputValues;
}

function addTask(event) {
  const task = new Task();
  const inputValuesFromAddTaskForm = getInputValuesFrom('#add-task-form');

  [task.title] = inputValuesFromAddTaskForm;
  updateStorage(task);
  event.preventDefault();
}

window.onload = () => {
  addTaskForm.addEventListener('submit', addTask);
};
