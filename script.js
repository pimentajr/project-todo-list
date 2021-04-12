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


