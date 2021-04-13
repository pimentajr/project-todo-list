// Requisito 5 e 6 - Botão para adicionar lista
const newTask = document.querySelector('#texto-tarefa');
const clickCreateTask = document.getElementById('criar-tarefa');
const allList = document.querySelector('#lista-tarefas');
const grayColor = 'rgb(128, 128, 128)';
const saveButton = document.getElementById('salvar-tarefas');

function addingTask() {
  clickCreateTask.addEventListener('click', () => {
    if (newTask.value === '') {
      alert('Campo Vazio');
    } else {
      const task = document.createElement('li');
      task.innerText = newTask.value;
      allList.appendChild(task);
    }
    newTask.value = '';
  });
}
addingTask();

// Requisito 7 e 8 - Colocar fundo cinza em itens clicados
function grayItem() {
  allList.addEventListener('click', (eventoDeOrigem1) => {
    const clickedItem = eventoDeOrigem1.target;
    const whiteList = document.querySelectorAll('li');
    for (let index = 0; index < whiteList.length; index += 1) {
      whiteList[index].style.backgroundColor = 'white';
    }
    clickedItem.style.backgroundColor = grayColor;
  });
}
grayItem();

// Requisito 9 - Riscar o item duas vezes com double click
function crossOff() {
  allList.addEventListener('dblclick', (eventoDeOrigem) => {
    const dblClickedItem = eventoDeOrigem.target;
    if (dblClickedItem.className === 'completed') {
      dblClickedItem.classList.remove('completed');
    } else {
      dblClickedItem.classList = 'completed';
    }
    const whiteList = document.querySelectorAll('.completed');
    for (let index = 0; index < whiteList.length; index += 1) {
      whiteList[index].style.backgroundColor = 'white';
    }
  });
}
crossOff();

// Requisito 10 - Apagar toda a lista de tarefas
function clearTaskList() {
  const deleteButton = document.getElementById('apaga-tudo');
  deleteButton.addEventListener('click', () => {
    const allItens = document.querySelectorAll('li');
    for (let index = 0; index < allItens.length; index += 1) {
      allList.removeChild(allItens[index]);
    }
  });
}
clearTaskList();

// Requisito 11 - Remover finalizados
function removeCheckedTasks() {
  const removeCheckedTasksButton = document.getElementById('remover-finalizados');
  removeCheckedTasksButton.addEventListener('click', () => {
    const allCheckedItens = document.querySelectorAll('.completed');
    for (let index = 0; index < allCheckedItens.length; index += 1) {
      allList.removeChild(allCheckedItens[index]);
    }
  });
}
removeCheckedTasks();

// Requisito 12 - Salvar tarefas
function storageItens() {
  saveButton.addEventListener('click', () => {
    localStorage.setItem('Tarefas', allList.innerHTML);
  });
  const savedList = localStorage.getItem('Tarefas');
  if (savedList) allList.innerHTML = savedList;
  // https://stackoverflow.com/questions/8860654/javascript-single-line-if-statement-best-syntax-this-alternative
  // Plantão dia 12/04 uso da condicional de existência
}
storageItens();

// Requisito 13 - Botões para mover para cima e para baixo
function moveUp() {
  const moveUpButton = document.getElementById('mover-cima');
  moveUpButton.addEventListener('click', () => {
    const allItens = document.querySelectorAll('li');
    for (let index = 1; index < allItens.length; index += 1) {
      if (allItens[index].style.backgroundColor === grayColor) {
        allList.insertBefore(allItens[index], allItens[(index - 1)]);
      }
    }
  });
}
moveUp();

function moveDown() {
  const moveDownButton = document.getElementById('mover-baixo');
  moveDownButton.addEventListener('click', () => {
    const allItens = document.querySelectorAll('li');
    for (let index = 0; index < (allItens.length - 1); index += 1) {
      if (allItens[index].style.backgroundColor === grayColor) {
        allList.insertBefore(allItens[index + 1], allItens[index]);
      }
    }
  });
}
moveDown();
