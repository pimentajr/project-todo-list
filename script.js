//  Global Var
const taskList = document.getElementById('lista-tarefas');
const btnAdd = document.getElementById('criar-tarefa');
const btnClearAll = document.getElementById('apaga-tudo');
const btnDone = document.getElementById('remover-finalizados');
const saveTask = document.getElementById('salvar-tarefas');
const formList = document.getElementById('texto-tarefa');
const btnMoveUp = document.getElementById('mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');
//  Functions
function addLi(textForm) {
  const item = document.createElement('li');
  item.innerText = `${textForm}`;
  taskList.appendChild(item);
  formList.value = '';
  formList.focus();
}

function printSelectedItem(event) {
  const changeBg = event.target;
  if (document.querySelector('.selected') === null) {
    changeBg.classList.add('selected');
  } else {
    document.querySelector('.selected').classList.remove('selected');
    changeBg.classList.add('selected');
  }
}

function taskDone(event) {
  const done = event.target;
  if (done.className !== 'completed' && done.className === 'selected') {
    done.className = 'completed';
  } else {
    done.classList.remove('completed');
  }
}

function clearList() {
  const clear = document.getElementById('lista-tarefas');
  while (clear.lastElementChild) {
    clear.removeChild(clear.lastElementChild);
  }
}

function clearDone() {
  const doneList = document.querySelector('#lista-tarefas');
  const itensDone = document.querySelectorAll('.completed');
  for (let index = 0; index < itensDone.length; index += 1) {
    doneList.removeChild(itensDone[index]);
  }
}

const lis = document.getElementsByTagName('li');
function moveUpItem() {
  for (let index = 0; index < lis.length; index += 1) {
    if (lis[index].classList.contains('selected') && lis[index].previousElementSibling !== null) {
      taskList.insertBefore(lis[index], lis[index].previousElementSibling);
    }
  }
}

function moveDownItem() {
  for (let index = 0; index < lis.length; index += 1) {
    if (lis[index].classList.contains('selected') && lis[index].nextElementSibling !== null) {
      taskList.insertBefore(lis[index].nextElementSibling, lis[index]);
    }
  }
}

btnAdd.addEventListener('click', () => {
  addLi(formList.value);
});

taskList.addEventListener('click', printSelectedItem);
taskList.addEventListener('dblclick', taskDone);
btnClearAll.addEventListener('click', clearList);
btnDone.addEventListener('click', clearDone);
btnMoveUp.addEventListener('click', moveUpItem);
btnMoveDown.addEventListener('click', moveDownItem);

function myStorageTask() {
  localStorage.setItem('itenSave', taskList.innerHTML);
}

function getStorageTask() {
  const getSave = localStorage.getItem('itenSave');
  taskList.innerHTML = getSave;
}

getStorageTask();

saveTask.addEventListener('click', myStorageTask);
