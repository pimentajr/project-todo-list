const addTask = document.getElementById('criar-tarefa');
const inputTask = addTask.previousElementSibling;

function addTaskEvent() {
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  li.innerText = inputTask.value;
  inputTask.value = '';
  ol.appendChild(li);
}

addTask.addEventListener('click', addTaskEvent);
