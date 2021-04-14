const orderList = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

function addTask() {
  const listIten = document.createElement('li');
  listIten.innerText = input.value;
  input.value = '';
  orderList.appendChild(listIten);  
}

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', addTask);