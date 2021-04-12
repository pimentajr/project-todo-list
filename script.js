function addTask() {
  const button = document.getElementById('criar-tarefa');
  const task = document.getElementById('texto-tarefa');
  const taskList = document.querySelector('ol');
  taskList.innerHTML = localStorage.getItem('tasks');
  button.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.innerText = task.value;
    taskList.appendChild(newTask);
    task.value = '';
  });
}

addTask();

function selectTask() {
  const taskList = document.querySelector('ol');
  taskList.addEventListener('click', (event) => {
    const task = document.getElementsByTagName('li');
    for (let i = 0; i < task.length; i += 1) {
      task[i].classList.remove('selected');
    }
    const taskSelected = event.target;
    taskSelected.classList.add('selected');
  });
}

selectTask();

function completeTask() {
  const taskList = document.querySelector('ol');
  taskList.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

completeTask();

function clearAll() {
  const clearButton = document.querySelector('#apaga-tudo');
  clearButton.addEventListener('click', () => {
    const taskList = document.getElementById('lista-tarefas');
    taskList.innerHTML = '';
  });
}

clearAll();

function clearCompleted() {
  const completedButton = document.querySelector('#remover-finalizados');
  const taskList = document.getElementById('lista-tarefas');
  completedButton.addEventListener('click', () => {
    const tasksCompleted = document.querySelectorAll('.completed');
    for (let i = 0; i < tasksCompleted.length; i += 1) {
      taskList.removeChild(tasksCompleted[i]);
    }
  });
}

clearCompleted();

// 12 Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava

function saveList() {
  const saveButton = document.getElementById('salvar-tarefas');
  saveButton.addEventListener('click', () => {
    console.log('tesste');
    const listToSave = document.querySelector('#lista-tarefas').innerHTML;
    localStorage.setItem('tasks', `${listToSave}`);
  });
}

saveList();

// 14
// function removeSelected() {
//   const clearButton = document.querySelector('#apaga-tudo');
// }
