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
const databaseStructure = {
  taskList: [],
  taskListMainView: '',
};
const database = window[storage];

function Task() {
  this.title = '';
  this.addedOn = Date.now();
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

function updateDatabaseEntry(entry, newValue) {
  const stringifiedNewValue = JSON.stringify(newValue);

  database.setItem(entry, stringifiedNewValue);
}

function getDatabaseEntry(entry) {
  return JSON.parse(database.getItem(entry));
}

// Might be useful to get all input field in views with
// multiple fields.
function getInputFieldsFrom(container) {
  const inputFields = document.querySelectorAll(`${container} input`);
  const labeledInputFields = {};
  let inputField;
  let key;
  let value;

  for (let index = 0; index < inputFields.length; index += 1) {
    inputField = inputFields[index];
    key = inputField.name ? inputField.name : inputField.id;
    value = inputFields[index];
    labeledInputFields[key] = value;
  }

  return labeledInputFields;
}

function addTaskToDatabase(event) {
  const task = new Task();
  const addTaskFormInputFields = getInputFieldsFrom('#add-task-form');
  const currentTaskList = getDatabaseEntry('taskList');

  task.title = addTaskFormInputFields['task-title'].value;
  currentTaskList.push(task);
  updateDatabaseEntry('taskList', currentTaskList);
  addTaskFormInputFields['task-title'].value = '';
  event.preventDefault();
}

function maySetDatabaseKeyValue(key) {
  if (database[key] === undefined) {
    const stringifiedValue = JSON.stringify(databaseStructure[key]);
    database[key] = stringifiedValue;
  }
}

function initializeDatabase() {
  const databaseKeys = Object.getOwnPropertyNames(databaseStructure);

  for (let index = 0; index < databaseKeys.length; index += 1) {
    maySetDatabaseKeyValue(databaseKeys[index]);
  }
}

window.onload = () => {
  initializeDatabase();
  addTaskForm.addEventListener('submit', addTaskToDatabase);
};
