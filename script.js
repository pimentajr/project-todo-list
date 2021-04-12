const addTask = document.getElementById('criar-tarefa');
const inputTask = addTask.previousElementSibling;
const listTask = document.getElementById('lista-tarefas');

function addTaskEvent() {
  const li = document.createElement('li');
  li.innerText = inputTask.value;
  inputTask.value = '';
  listTask.appendChild(li);
}

function clickItemEvent(e) {
  const item = e.target;
  const cls = item.className;
  const selected = document.getElementsByClassName('selected');
  if (selected.length > 0) {
    selected[0].removeAttribute('class');
  }

  if (cls === '') {
    item.className = 'selected';
  } else {
    item.removeAttribute('class');
  }
}

function doubleItemEvent(e) {
  const item = e.target;
  const cls = item.className;

  if (cls === '') {
    item.className = 'completed';
  } else {
    item.removeAttribute('class');
  }
}

addTask.addEventListener('click', addTaskEvent);
listTask.addEventListener('click', clickItemEvent);
listTask.addEventListener('dblclick', doubleItemEvent);
