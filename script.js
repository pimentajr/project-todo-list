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
  const bg = item.style.backgroundColor;

  if (bg === '') {
    item.style.backgroundColor = 'gray';
  } else {
    item.removeAttribute('style');
  }

}

addTask.addEventListener('click', addTaskEvent);
listTask.addEventListener('click', clickItemEvent);
