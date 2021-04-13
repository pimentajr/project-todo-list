const taskList = document.querySelector('#lista-tarefas');


// adiciona tarefa a partir do click no botão
function addNewTask() {
  const insertTaskButton = document.querySelector('#criar-tarefa');
  const taskContent = document.querySelector('#texto-tarefa');

  insertTaskButton.addEventListener('click', function () {
    const newTask = document.createElement('li');
    newTask.innerText = taskContent.value;
    taskList.appendChild(newTask);
    taskContent.value = '';
  })
}

addNewTask();

// remove selected class e cor de fundo
function removeBackgroundColor() {
  const getSelectedColor = document.querySelectorAll('.selected');

  if (getSelectedColor.length > 0) {
    for (let index = 0; index < getSelectedColor.length; index += 1) {
      getSelectedColor[index].style.backgroundColor = 'white';
      getSelectedColor[index].classList.remove('selected');
    }
  }
}

// altera cor de fundo do item da lista
function changeTaskBackground() {

  taskList.addEventListener('click', function (event) {
    removeBackgroundColor();
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    event.target.classList.add('selected');
  })
}

changeTaskBackground();

// verifica se um determinado elemento possui a classe completed
function checkClassList(element) {
  let classList = element.classList;
  let classCompleted = 0;

  for (let index = 0; index < classList.length; index += 1) {
    if (classList[index] === 'completed') {
      classCompleted += 1;
    }
  }
  return classCompleted;
}

// risca item utilizando dois clicks
function defineAsCompleted() {

  taskList.addEventListener('dblclick', function (event) {
    if (checkClassList(event.target) >= 1) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  })
}

defineAsCompleted();

// apaga todas os items da lista de tarefa
function eraseAllTasks() {
  const getEraseButton = document.querySelector('#apaga-tudo');

  getEraseButton.addEventListener('click', function () {
    const getListItems = document.querySelector('#lista-tarefas');
    getListItems.innerHTML = '';
  })
}

eraseAllTasks();

// apaga todos os items com classe completed
function eraseCompletedTasks() {
  let getEraseCompletedButton = document.querySelector('#remover-finalizados');

  getEraseCompletedButton.addEventListener('click', function () {
    let getCompletedTasks = document.querySelectorAll('.completed');
    for (let index = 0; index < getCompletedTasks.length; index += 1) {
      getCompletedTasks[index].remove();
    }
  })
}

eraseCompletedTasks();

// salva todas as tarefas em localStorage
function saveAllTasksStorage() {
  let saveTasksButton = document.querySelector('#salvar-tarefas');

  saveTasksButton.addEventListener('click', function () {
    let taskList = document.querySelector('ol');
    localStorage.setItem('list', taskList.innerHTML);
  })
}

saveAllTasksStorage();

// retorna items salvos
function returnSavedItems() {
  let taskList = document.querySelector('ol');
  taskList.innerHTML = localStorage.getItem('list');
}

returnSavedItems();

// move item para cima, dentro da lista : https://stackoverflow.com/questions/9732624/how-to-swap-dom-child-nodes-in-javascript
function moveUpTask() {
  let getMoveUpButton = document.querySelector('#mover-cima');

  getMoveUpButton.addEventListener('click', function () {
    let elementToChange = document.querySelector('.selected');
    if (elementToChange.previousSibling) {
      elementToChange.parentElement.insertBefore(elementToChange, elementToChange.previousSibling);
    }
  })
}
moveUpTask();

// move item para baixo, dentro da lista
function moveDownTask() {
  let getMoveDownButton = document.querySelector('#mover-baixo');

  getMoveDownButton.addEventListener('click', function () {
    let elementToChange = document.querySelector('.selected');
    if (elementToChange.nextSibling) {
      elementToChange.parentElement.insertBefore(elementToChange.nextSibling, elementToChange);
    }
  })
}
moveDownTask();

// remove tarefa selecionada
function removeSelectedTask() {
  let removeTaskButton = document.querySelector('#remover-selecionado');

  removeTaskButton.addEventListener('click', function () {
    let selectedClass = document.querySelector('.selected');
    selectedClass.remove();
  })
}

removeSelectedTask();