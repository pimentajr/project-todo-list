const list = document.getElementById('lista-tarefas');
const createTask = document.querySelector('#criar-tarefa');
const clearTasks = document.querySelector('#apaga-tudo');
const clearCompleted = document.querySelector('#remover-finalizados');
const saveTasks = document.querySelector('#salvar-tarefas');
const removeSelected = document.querySelector('#remover-selecionado');
const input = document.querySelector('#texto-tarefa');
const upMove = document.getElementById('mover-cima');
const moveDown = document.getElementById('mover-baixo');

createTask.addEventListener('click', () => {
  if (input.value === '') {
    alert('Insira uma tarefa');
  } else {
    const li = document.createElement('li');
    localStorage.setItem('input', input.value);
    li.innerText = localStorage.getItem('input');
    li.classList.add('lis');
    list.appendChild(li);
    input.value = '';
  }
});

function selectedTask(event) {
  const lista = document.querySelectorAll('.lis');
  lista.forEach((element) => {
    if (element.classList.contains('selected')) {
      element.classList.remove('selected');
    }
  });
  event.target.classList.add('selected');
}
list.addEventListener('click', selectedTask);

function clearSelected() {
  const selected = document.getElementsByClassName('lis');
  for (let index = 0; index < selected.length; index += 1) {
    if (selected[index].classList.contains('selected')) {
      selected[index].parentNode.removeChild(selected[index]);
    }
  }
}
removeSelected.addEventListener('click', clearSelected);

function upItem() {
  const li = document.querySelector('.selected');
  if (li !== list.children[0] && li) {
    list.insertBefore(li, li.previousSibling);
  }
}
upMove.addEventListener('click', upItem);

function downItem() {
  const li = document.querySelector('.selected');
  if (li !== list.lastChild && li) {
    list.insertBefore(li.nextSibling, li);
  }
}
moveDown.addEventListener('click', downItem);

function clearComp(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
    event.target.classList.remove('selected');
  } else {
    event.target.classList.add('completed');
  }
}
list.addEventListener('dblclick', clearComp);

function removeComp() {
  const selected = document.getElementsByClassName('completed');
  const count = 0;
  while (selected.length) {
    selected[count].parentNode.removeChild(selected[count]);
  }
}
clearCompleted.addEventListener('click', removeComp);

function removeAll() {
  const selected = document.getElementsByClassName('lis');
  const count = 0;
  while (selected.length) {
    selected[count].parentNode.removeChild(selected[count]);
  }
}

clearTasks.addEventListener('click', removeAll);

const click = document.getElementsByTagName('ol')[0];

saveTasks.addEventListener('click', () => {
  localStorage.setItem('listOfSavedItens', click.innerHTML);
});
function getTasks() {
  click.innerHTML = localStorage.getItem('listOfSavedItens');
}
getTasks();
