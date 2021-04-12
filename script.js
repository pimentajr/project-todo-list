function addTask() {
  let element = document.createElement('li');
  element.innerText = document.querySelector('#texto-tarefa').value;
  document.querySelector('#lista-tarefas').appendChild(element);
  document.querySelector('#texto-tarefa').value = '';
}

document.querySelector('#criar-tarefa').addEventListener('click', addTask);

