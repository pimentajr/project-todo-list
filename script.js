function SelectTask(event) {
  const selected = document.querySelector('.selected');
  if (selected !== null) {
    selected.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function CompleteTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function CreateTask() {
  const element = document.createElement('li');
  const text = document.getElementById('texto-tarefa').value;
  const parent = document.getElementById('lista-tarefas');
  element.innerText = text;
  element.classList.add('tarefa');
  element.addEventListener('click', SelectTask);
  element.addEventListener('dblclick', CompleteTask);
  parent.appendChild(element);
  document.getElementById('texto-tarefa').value = '';
  // let criado = document.querySelector('tarefa');
  // criado.addEventListener('click',SelectTask);
}

function addEventCreateTask() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', CreateTask);
}

window.onload = function load() {
  addEventCreateTask();
};
