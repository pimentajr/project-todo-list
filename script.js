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

const salveButton = document.getElementById('salvar-tarefas');

//  consegui com a ajuda de meu colega Luíz Wendel
function saveTask() {
  localStorage.setItem('saveTask', taskList.innerHTML);
}

function load() {
  taskList.innerHTML = localStorage.getItem('saveTask');
}

salveButton.addEventListener('click', saveTask);
load();

const upButton = document.getElementById('mover-cima');

//  https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
//  Ele vai de um a um por que lis que contem a class selected é apenas 1
function up() {
  const lis = document.getElementsByTagName('li');
  for (let index = 0; index < lis.length; index += 1) {
    if (lis[index].classList.contains('selected')
    && lis[index].previousElementSibling !== null) {
      const lisIndex = lis[index];
      taskList.insertBefore(lisIndex, lisIndex.previousElementSibling);
    }
  }
}

upButton.addEventListener('click', up);

const downButtonm = document.getElementById('mover-baixo');

// Se incremento ele vai direto para a última posição, preciso fazer o caminho reverso de subir! Com o decremento vai de um a um.
function down() {
  const lis = document.getElementsByTagName('li');
  for (let index = lis.length -1; index < lis.length; index -= 1) {
    if (lis[index].classList.contains('selected') && lis[index].nextElementSibling !== null) {
      const lisIndex = lis[index];
      taskList.insertBefore(lisIndex.nextElementSibling, lisIndex);
    } 
  }
}

downButtonm.addEventListener('click', down);

const delSelected = document.getElementById('remover-selecionado');

function removeSelected() {
  taskList.removeChild(document.getElementsByClassName('selected')[0]);
}

delSelected.addEventListener('click', removeSelected);
