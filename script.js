// adiciona tarefa a partir do click no botão
function addNewTask() {
  const insertTaskButton = document.querySelector('#criar-tarefa');
  let taskContent = document.querySelector('#texto-tarefa');

  insertTaskButton.addEventListener('click', function () {
    const taskList = document.querySelector('#lista-tarefas');
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
  const taskList = document.querySelector('#lista-tarefas');

  taskList.addEventListener('click', function (event) {
    removeBackgroundColor();
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    event.target.classList.add('selected');
  })
}

changeTaskBackground();

// risca item utilizando dois clicks
function defineAsCompleted() {
  const taskList = document.querySelector('#lista-tarefas');

  taskList.addEventListener('dblclick', function(event) {
    if (checkClassList(event.target) >= 1) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  })
}

defineAsCompleted();

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

// apaga todas os items da lista de tarefa
function eraseAllTasks() {
  const getEraseButton = document.querySelector('#apaga-tudo');

  getEraseButton.addEventListener('click', function() {
    const getListItems = document.querySelector('#lista-tarefas');
    getListItems.innerHTML = '';
  })
}

eraseAllTasks();

// apaga todos os items com classe completed
function eraseCompletedTasks() {
  let getEraseCompletedButton = document.querySelector('#remover-finalizados');

  getEraseCompletedButton.addEventListener('click', function() {
    let getCompletedTasks = document.querySelectorAll('.completed');
    for (let index = 0; index < getCompletedTasks.length; index += 1) {
      getCompletedTasks[index].remove();
    }
  })
}

eraseCompletedTasks();

