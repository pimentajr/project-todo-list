function addTask() {
  const input = document.getElementById('texto-tarefa').value;
  const taskList = document.getElementById('lista-tarefas');
  const task = document.createElement('li');
  taskList.appendChild(task);
  const textTask = input;
  task.innerText = textTask;
  document.getElementById('texto-tarefa').value = '';
}

const buttonAddTask = document.getElementById('criar-tarefa');

buttonAddTask.addEventListener('click', addTask);

const taskList = document.getElementById('lista-tarefas');

function backgroundClassItem(event) {
  const itens = taskList.children;
  for (let index = 0; index < itens.length; index += 1) {
    itens[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

taskList.addEventListener('click', backgroundClassItem);

function riskCompleted(event) {
  event.target.classList.toggle('completed');
}

taskList.addEventListener('dblclick', riskCompleted);

const clearAll = document.getElementById('apaga-tudo');

function clearItem() {
  taskList.innerHTML = '';
  //  https://qastack.com.br/programming/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
}

clearAll.addEventListener('click', clearItem);

function removeCompleted() {
  while (document.querySelector('.completed')) {
  taskList.removeChild(document.querySelector('.completed'));
  }
}

const buttonClearCompleted = document.getElementById('remover-finalizados');

buttonClearCompleted.addEventListener('click', removeCompleted);
