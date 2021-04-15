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

function changeBackgroundLi(event) {
  const getListItem = document.querySelectorAll('li');
  const targetItem = event.target;
  for (let index = 0; index < getListItem.length; index += 1) {
    getListItem[index].classList.remove('selected');
  }
  targetItem.classList.add('selected');
}

const taskList = document.querySelector('#lista-tarefas');
taskList.addEventListener('click', changeBackgroundLi);
