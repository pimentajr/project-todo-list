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

function sortObjectsArrayByKeyDesc(objectsArray) {
  if (isNumber(objectsArray[0][keyToSortBy])) {
    objectsArray.sort((a, b) => b[keyToSortBy] - a[keyToSortBy]);
  } else {
    objectsArray.sort((a, b) => b[keyToSortBy].localeCompare(a[keyToSortBy]));
  }
}

function sortObjectsArrayByKeyAsc(objectsArray) {
  if (isNumber(objectsArray[0][keyToSortBy])) {
    objectsArray.sort((a, b) => a[keyToSortBy] - b[keyToSortBy]);
  } else {
    objectsArray.sort((a, b) => a[keyToSortBy].localeCompare(b[keyToSortBy]));
  }
}

window.onload = () => {

};
