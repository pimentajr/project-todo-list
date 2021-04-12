function changeBgcOfTask(element) {
  if (document.querySelectorAll('li').length > 1) {
    for (let index = 0; index < document.querySelectorAll('li').length; index += 1) {
      document.querySelectorAll('li')[index].style.backgroundColor = 'white';
      document.querySelectorAll('li')[index].id = '';
    }
    const taskSelected = element.target;
    taskSelected.id = 'selected-task';
    taskSelected.style.backgroundColor = 'rgb(128,128,128)';
  } else {
    const taskSelected = element.target;
    taskSelected.id = 'selected-task';
    taskSelected.style.backgroundColor = 'rgb(128,128,128)';
  }
}

function checkOnCompleted(event) {
  const completedTask = event.target;
  if (completedTask.className === 'completed') {
    completedTask.className = 'not-completed';
  } else {
    completedTask.className = 'completed';
  }
}

const taskList = document.querySelector('#lista-tarefas');
function addTask() {
  const element = document.createElement('li');
  element.innerText = document.querySelector('#texto-tarefa').value;
  taskList.appendChild(element);
  document.querySelector('#texto-tarefa').value = '';
  for (let index = 0; index < document.querySelectorAll('li').length; index += 1) {
    document.querySelectorAll('li')[index].addEventListener('click', changeBgcOfTask);
    document.querySelectorAll('li')[index].addEventListener('dblclick', checkOnCompleted);
  }
}
document.querySelector('#criar-tarefa').addEventListener('click', addTask);

function clearAll() {
  const element = document.querySelectorAll('li');
  for (let index = 0; index < element.length; index += 1) {
    taskList.removeChild(element[index]);
  }
}
document.querySelector('#apaga-tudo').addEventListener('click', clearAll);

function clearCompleted() {
  const element = document.querySelectorAll('.completed');
  for (let index = 0; index < element.length; index += 1) {
    taskList.removeChild(element[index]);
  }
}
document.querySelector('#remover-finalizados').addEventListener('click', clearCompleted);
