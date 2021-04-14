const addTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const taskText = document.getElementById('texto-tarefa');
const eraseAll = document.getElementById('apaga-tudo');
const eraseCompleted = document.getElementById('remover-finalizados');


addTask.addEventListener('click', () => {
  const task = document.createElement('li');
  task.innerText = taskText.value;
  taskList.appendChild(task);
  taskText.value = '';
})

function selectTask() {
  taskList.addEventListener('click', (event) => {
    const eTarget = event.target;
    const selectedTask = document.querySelector('.selected');
    if (selectedTask) {
      selectedTask.classList.remove('selected');
    } else {
        eTarget.classList.add('selected');
    }
  })
}

selectTask();

function completedTask() {
  taskList.addEventListener('dblclick', (event) => {
  const etcList = event.target.classList;
  if (etcList.contains('completed')) {
    etcList.remove('completed');
  } else {
    etcList.add('completed');
    }
  })
}

completedTask();

function eraseTasks() {
    eraseAll.addEventListener('click', () => {
        taskList.innerHTML = '';
    })
}

eraseTasks();

const completed = document.getElementsByClassName('completed');
function erasedoneTasks() {
  eraseCompleted.addEventListener('click', () => {
    for (let index = completed.length - 1; index >= 0; index -=1) {
      completed[index].remove();
    }
  })
}

erasedoneTasks();
