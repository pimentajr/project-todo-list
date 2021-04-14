const addTaskForm = document.getElementById('add-task-form');
const taskListMainView = document.getElementById('lista-tarefas');
const locale = 'pt-BR';
const dateFormatOptions = {
  weekday: 'long',
  day: 'numeric',
  month: 'short',
};
const keyToSortBy = 'addedOn';
const sortOrder = 'asc';
const storage = 'sessionStorage';

function Task() {
  this.title = '';
  this.addedOn = Date.now();
}

// Might be useful to get all input field values in views with
// multiple fields.
function getInputFieldsFrom(container) {
  const inputElements = document.querySelectorAll(`${container} input`);
  const inputFields = [];

  for (let index = 0; index < inputElements.length; index += 1) {
    inputFields.push(inputElements[index]);
  }

  return inputFields;
}

function isNumber(element) {
  if (element - (element - 1) === 1) {
    return true;
  }

  return false;
}

function sortTaskListDesc(taskListArray) {
  if (isNumber(taskListArray[0][keyToSortBy])) {
    taskListArray.sort((a, b) => b[keyToSortBy] - a[keyToSortBy]);
  } else {
    taskListArray.sort((a, b) => b[keyToSortBy].localeCompare(a[keyToSortBy]));
  }
}

function sortTaskListAsc(taskListArray) {
  if (isNumber(taskListArray[0][keyToSortBy])) {
    taskListArray.sort((a, b) => a[keyToSortBy] - b[keyToSortBy]);
  } else {
    taskListArray.sort((a, b) => a[keyToSortBy].localeCompare(b[keyToSortBy]));
  }
}

function sortTaskList(taskListArray) {
  if (sortOrder === 'asc') {
    sortTaskListAsc(taskListArray);
  } else {
    sortTaskListDesc(taskListArray);
  }
}

function updateDatabase(task) {
  const stringifiedDatabase = window[storage].getItem('database');
  let database = {};

  if (!stringifiedDatabase) {
    database = { taskList: [task], taskListMainViewCache: '' };
  } else {
    database = JSON.parse(stringifiedDatabase);
    database.taskList.push(task);
  }

  window[storage].setItem('database', JSON.stringify(database));
}

function addTask(event) {
  const newTask = new Task();
  const addTaskFormInputFields = getInputFieldsFrom('#add-task-form');

  newTask.title = addTaskFormInputFields[0].value;
  updateDatabase(newTask);
  addTaskFormInputFields[0].value = '';
  event.preventDefault();
}

window.onload = () => {
  addTaskForm.addEventListener('submit', addTask);
};
