const addTaskForm = document.getElementById('add-task-form');
const mainView = document.getElementById('lista-tarefas');
const locale = 'pt-BR';
const dateFormatOptions = {
  weekday: 'long',
  day: 'numeric',
  month: 'short',
};
const keyToSortBy = 'addedOn';
const sortOrder = 'asc';
const databaseStructure = {
  taskList: [],
  mainViewContent: '',
};
const database = window.sessionStorage;
const savedDatabaseState = window.localStorage;
const databaseKeys = Object.getOwnPropertyNames(databaseStructure);

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

function getDatabaseEntry(key) {
  return JSON.parse(database.getItem(key));
}

function updateDatabaseEntry(key, newValue) {
  const stringifiedNewValue = JSON.stringify(newValue);

  database.setItem(key, stringifiedNewValue);
  if (key === 'mainViewContent') {
    mainView.innerHTML = getDatabaseEntry(key);
  }
}

// Might be useful to get all input field in views with
// multiple fields.
function getInputFieldsFrom(container) {
  const inputFields = document.querySelectorAll(`${container} input`);
  const labeledInputFields = {};

  for (let index = 0; index < inputFields.length; index += 1) {
    const inputField = inputFields[index];
    const key = inputField.name ? inputField.name : inputField.id;
    const value = inputFields[index];
    labeledInputFields[key] = value;
  }

  return labeledInputFields;
}

function selectTask(event) {
  if (!event.target.classList.contains('task')) {
    return;
  }

  const currentlySelectedTask = document.querySelector('.selected');
  if (currentlySelectedTask && currentlySelectedTask !== event.target) {
    currentlySelectedTask.classList.toggle('selected');
  }

  event.target.classList.toggle('selected');
}

function addTaskToMainViewContent(task) {
  const taskItem = document.createElement('li');

  taskItem.id = `task-${task.addedOn}`;
  taskItem.classList.add('task');
  taskItem.innerHTML = `${task.title}`;
  mainView.appendChild(taskItem);
  updateDatabaseEntry('mainViewContent', mainView.innerHTML);
}

function addTaskToTaskList(event) {
  const task = new Task();
  const addTaskFormInputFields = getInputFieldsFrom('#add-task-form');
  const currentTaskList = getDatabaseEntry('taskList');

  task.title = addTaskFormInputFields['task-title'].value;
  currentTaskList.push(task);
  updateDatabaseEntry('taskList', currentTaskList);
  addTaskFormInputFields['task-title'].value = '';
  addTaskToMainViewContent(task);
  event.preventDefault();
}

function discardSavedDatabaseState() {
  for (let index = 0; index < databaseKeys.length; index += 1) {
    const key = databaseKeys[index];
    savedDatabaseState.setItem(key, JSON.stringify(databaseStructure[key]));
  }
}

function saveDatabaseState() {
  for (let index = 0; index < databaseKeys.length; index += 1) {
    const key = databaseKeys[index];
    savedDatabaseState.setItem(key, database[key]);
  }
}

function applySavedDatabaseState() {
  for (let index = 0; index < databaseKeys.length; index += 1) {
    const key = databaseKeys[index];
    database.setItem(key, savedDatabaseState[key]);
  }
}

function maySetDatabaseKeyValue(key, databaseArea) {
  if (databaseArea.getItem(key) === undefined) {
    const stringifiedValue = JSON.stringify(databaseStructure[key]);
    databaseArea.setItem(key, stringifiedValue);
  }
}

function initializeDatabase() {
  for (let index = 0; index < databaseKeys.length; index += 1) {
    maySetDatabaseKeyValue(databaseKeys[index], database);
    maySetDatabaseKeyValue(databaseKeys[index], savedDatabaseState);
  }
}
// The function below can be used to update the main view in case changes
// were made to the formatting of the list items in the addTaskToMainViewContent(task).
//
// function updateMainViewToNewFormat() {
//   applySavedDatabaseState();
//   updateDatabaseEntry('mainViewContent', '');
//
//   const taskList = getDatabaseEntry('taskList');
//
//   for (let index = 0; index < taskList.length; index += 1) {
//     addTaskToMainViewContent(taskList[index]);
//   }
//
//   saveDatabaseState();
// }

window.onload = () => {
  initializeDatabase();
  addTaskForm.addEventListener('submit', addTaskToTaskList);
  mainView.addEventListener('pointerdown', selectTask);
  applySavedDatabaseState();
  mainView.innerHTML = getDatabaseEntry('mainViewContent');
};
