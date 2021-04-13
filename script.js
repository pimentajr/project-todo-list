const addButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const inputVal = document.querySelector('#texto-tarefa');
taskList.innerHTML = localStorage.getItem('list');

function addNewTask() {
  addButton.addEventListener('click', () => {
    const newTask = document.createElement('li');
    taskList.appendChild(newTask);
    newTask.className = 'liTask';
    newTask.innerText = inputVal.value;
    inputVal.value = '';
  });
}

addNewTask();

function deleteTasks() {
  const deleteAll = document.querySelector('#apaga-tudo');
  deleteAll.addEventListener('click', () => {
    taskList.innerHTML = '';
  });
}

deleteTasks();

function changeTaskColor() {
  taskList.addEventListener('click', (event) => {
    const taskItems = document.querySelectorAll('li');
    for (let index = 0; index < taskItems.length; index += 1) {
      taskItems[index].classList.remove('selected');
      if (event.target.localName === 'li') {
        taskItems[index] = event.target.classList.add('selected');
      }
    }
  });
}
changeTaskColor();

function completedTask() {
  taskList.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

completedTask();

function removeDoneTasks() {
  const btnRemove = document.querySelector('#remover-finalizados');
  btnRemove.addEventListener('click', () => {
    const doneTasks = document.querySelectorAll('.completed');
    for (let index = 0; index < doneTasks.length; index += 1) {
      doneTasks[index].remove();
    }
  });
}

removeDoneTasks();

function saveTasks() {
  const btnSave = document.querySelector('#salvar-tarefas');
  btnSave.addEventListener('click', () => {
    localStorage.setItem('list', taskList.innerHTML);
  });
}

saveTasks();

function removeSelectedTasks() {
  const btnRemoveSelected = document.querySelector('#remover-selecionado');
  btnRemoveSelected.addEventListener('click', () => {
    const doneTasks = document.querySelectorAll('.selected');
    for (let index = 0; index < doneTasks.length; index += 1) {
      doneTasks[index].remove();
    }
  });
}

removeSelectedTasks();
