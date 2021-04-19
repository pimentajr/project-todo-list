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

function changeBackgroundLi(e) {
  const getListIten = document.querySelectorAll('li');
  const targetIten = e.target;
  for (let index = 0; index < getListIten.length; index += 1) {
    getListIten[index].classList.remove('selected');
  }
  targetIten.classList.add('selected');
}

const taskList = document.querySelector('#lista-tarefas');
taskList.addEventListener('click', changeBackgroundLi);

function riskTask(e) {
  e.target.classList.toggle('completed');
}

const element = document.querySelector('#lista-tarefas');
element.addEventListener('dblclick', riskTask);

function deleteAll() {
  const elementLi = document.getElementById('lista-tarefas');
  elementLi.innerText = '';
}

const deleteButton = document.getElementById('apaga-tudo');
deleteButton.addEventListener('click', deleteAll);

const divAction = document.querySelector('.div-action');
const removeTaskCompleted = document.createElement('button');
removeTaskCompleted.id = 'remover-finalizados';
removeTaskCompleted.innerText = 'Limpar completos';
divAction.appendChild(removeTaskCompleted);

function clearTaskCompleted() {
  const tasksCompleted = document.getElementsByClassName('completed');
  for (let index = tasksCompleted.length - 1; index >= 0; index -= 1) {
    tasksCompleted[index].parentNode.removeChild(tasksCompleted[index]);
  }
}
removeTaskCompleted.addEventListener('click', clearTaskCompleted);
