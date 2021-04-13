const addTask = document.getElementById('criar-tarefa');
const clearTasks = document.getElementById('apaga-tudo');
const endedTasks = document.getElementById('remover-finalizados');
const inputTask = document.getElementById('texto-tarefa');
const listTask = document.getElementById('lista-tarefas');

function addTaskEvent() {
  const li = document.createElement('li');
  li.innerText = inputTask.value;
  inputTask.value = '';
  listTask.appendChild(li);
}

function clearTasksEvent() {
  while (listTask.childElementCount) {
    listTask.firstChild.remove();
  }
}

function endedTasksEvent() {
  const enders = document.getElementsByClassName('completed');
  while (enders.length) {
    enders[0].remove();
  }
}

function clickTaskEvent(e) {
  const task = e.target;
  const cls = task.className;
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.removeAttribute('class');
  }

  if (cls === '') {
    task.className = 'selected';
  } else {
    task.removeAttribute('class');
  }
}

function doubleTaskEvent(e) {
  const task = e.target;
  const cls = task.className;

  if (cls === '') {
    task.className = 'completed';
  } else {
    task.removeAttribute('class');
  }
}

addTask.addEventListener('click', addTaskEvent);
clearTasks.addEventListener('click', clearTasksEvent);
endedTasks.addEventListener('click', endedTasksEvent);
listTask.addEventListener('click', clickTaskEvent);
listTask.addEventListener('dblclick', doubleTaskEvent);
