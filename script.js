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

function buildMainTaskListViewItem(task) {
  const taskListItem = document.createElement('li');

  taskListItem.classList.add('task');
  taskListItem.id = `task-${task.addedOn}`;
  taskListItem.innerHTML = task.title;
  mainTaskListView.appendChild(taskListItem);
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

function updateMainTaskListView() {
  const retrievedTaskList = sessionStorage.getItem('taskList');

  if (!retrievedTaskList) {
    return;
  }

  const taskListArray = JSON.parse(retrievedTaskList);
  sortTaskList(taskListArray);

  mainTaskListView.innerHTML = '';
  for (let index = 0; index < taskListArray.length; index += 1) {
    const task = taskListArray[index];
    buildMainTaskListViewItem(task);
  }
}

function updateStorage(task) {
  const retrievedTaskList = sessionStorage.getItem('taskList');

  if (!retrievedTaskList) {
    sessionStorage.setItem('taskList', JSON.stringify([task]));
  } else {
    const taskListArray = JSON.parse(retrievedTaskList);

    taskListArray.push(task);
    sessionStorage.setItem('taskList', JSON.stringify(taskListArray));
  }
}

function addTask(event) {
  const task = new Task();
  const inputFieldsFromAddTaskForm = getInputFieldsFrom('#add-task-form');

  task.title = inputFieldsFromAddTaskForm[0].value;
  updateStorage(task);
  updateMainTaskListView();
  inputFieldsFromAddTaskForm[0].value = '';
  event.preventDefault();
}

window.onload = () => {
  updateMainTaskListView();
  addTaskForm.addEventListener('submit', addTask);
};
