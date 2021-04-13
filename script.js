const addTaskForm = document.getElementById('add-task-form');
const mainTaskListView = document.getElementById('lista-tarefas');
const locale = 'pt-BR';
const prettyDateOptions = {
  weekday: 'long',
  day: 'numeric',
  month: 'short',
};
const keyToSortBy = 'addedOn';
const sortOrder = 'asc';

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

window.onload = () => {
};
