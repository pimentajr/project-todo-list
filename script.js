function CreateTask() {
  let element = document.createElement('li');
  let text = document.getElementById('texto-tarefa').value;
  let parent = document.getElementById('lista-tarefas');
  element.innerText = text;
  parent.appendChild(element);
  document.getElementById('texto-tarefa').value = '';
}

function addEventCreateTask() {
  let button = document.getElementById('criar-tarefa');
  button.addEventListener('click', CreateTask);
}

window.onload = function load() {
  addEventCreateTask();
};
