const addTask = document.getElementById('criar-tarefa');
const clearTasks = document.getElementById('apaga-tudo');
const endedTasks = document.getElementById('remover-finalizados');
const salveTasks = document.getElementById('salvar-tarefas');

const upTask = document.getElementById('mover-cima');
const downTask = document.getElementById('mover-baixo');

const inputTask = document.getElementById('texto-tarefa');
const listTask = document.getElementById('lista-tarefas');

function loadTasks() {
  for (let i = 0; i < localStorage.length / 2; i += 1) {
    const li = document.createElement('li');
    const val = localStorage[`val_${i}`];
    let cls = localStorage[`cls_${i}`];
    cls = cls.split(' ').includes('completed');
    li.innerText = val;
    if (cls) {
      li.classList.add('completed');
    }
    listTask.appendChild(li);
  }
}

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

function salveTasksEvent() {
  localStorage.clear();
  for (let i = 0; i < listTask.children.length; i += 1) {
    const task = listTask.children[i];
    const val = `val_${i}`;
    const cls = `cls_${i}`;
    localStorage[val] = task.innerText;
    localStorage[cls] = task.className;
  }
}

function clickTaskEvent(e) {
  const task = e.target;
  const cls = task.classList;
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
  }

  if (!cls.contains('selected')) {
    cls.add('selected');
  } else {
    cls.remove('selected');
  }
}

function doubleTaskEvent(e) {
  const task = e.target;
  const cls = task.classList;

  if (!cls.contains('completed')) {
    cls.add('completed');
  } else {
    cls.remove('completed');
  }
}

function upTaskEvent() {
  const selected = document.querySelector('.selected');
  const up = selected.previousSibling;
  up.replaceWith(selected);
  selected.replaceWith(up);
}

loadTasks();

addTask.addEventListener('click', addTaskEvent);
clearTasks.addEventListener('click', clearTasksEvent);
endedTasks.addEventListener('click', endedTasksEvent);
salveTasks.addEventListener('click', salveTasksEvent);

upTask.addEventListener('click', upTaskEvent);
// downTask.addEventListener('click', salveTaskEvent);

listTask.addEventListener('click', clickTaskEvent);
listTask.addEventListener('dblclick', doubleTaskEvent);
