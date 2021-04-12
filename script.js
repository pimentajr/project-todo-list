const inputButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const inputField = document.getElementById('texto-tarefa');
inputButton.style.backgroundColor = 'red';

function CreateTask() {
  const x = document.createElement('li');
  x.setAttribute('class', 'listItem');
  x.innerText = inputField.value;
  taskList.appendChild(x);
  if (x.innerText === '') {
    alert('ERRO');
  }
}

inputButton.addEventListener('click', CreateTask);
