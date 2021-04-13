// cria lista de elementos;

const btnTasks = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');
const inputText = document.querySelector('#texto-tarefa');
const navi = document.getElementById('navigation');
// give selected to a testk
function selectedTask(event) {  
  const li = event.target;
  const list = ol.childNodes;
  for (let i = 0; i < list.length; i += 1) {
    list[i].classList.remove('selected');
  }
  li.classList.add('selected');
}

// give completed to a task
function completedTask(event) {
  event.target.classList.toggle('completed');
}

// create Lists;
btnTasks.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = inputText.value;
  inputText.value = '';
  if (li.innerHTML === '') {
    alert('Adicone um item');
  } else {
    li.addEventListener('click', selectedTask);
    li.addEventListener('dblclick', completedTask);
    ol.appendChild(li);
  }
});
// despara o clear button
function clearTasks() {
  const li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1) {
    li[i].remove();
  }
}
// cria o clear button
function createClearBtn() {
  const button = document.createElement('button');
  button.setAttribute('id', 'apaga-tudo');
  button.innerHTML = 'Limpar lista';
  navi.appendChild(button);
  button.addEventListener('click', clearTasks);
}
createClearBtn();

function clearCompleted() {
  const li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1) {
    if (li[i].classList.contains('completed')) {
      li[i].remove();
    }
  }
}

// cria o clear completed task
function createClearCompletedTaskBtn() {
  const button = document.createElement('button');
  button.setAttribute('id', 'remover-finalizados');
  button.innerHTML = 'Limpar Completos';
  button.style.marginLeft = '10px';
  navi.appendChild(button);
  button.addEventListener('click', clearCompleted);
}
createClearCompletedTaskBtn();
