function SelectTask(event) {
  const selected = document.querySelector('.selecionada');
  if (selected !== null) {
    selected.classList.remove('selecionada');
  }
  event.target.classList.add('selecionada');
}

function CreateTask() {
  const element = document.createElement('li');
  const text = document.getElementById('texto-tarefa').value;
  const parent = document.getElementById('lista-tarefas');
  element.innerText = text;
  element.classList.add('tarefa');
  element.addEventListener('click', SelectTask);
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
