const getInput = document.querySelector('#texto-tarefa');
const getOl = document.querySelector('#lista-tarefas');
const getBtn = document.querySelector('#criar-tarefa');
const getLi = document.getElementsByTagName('li');
const getClear = document.getElementById('apaga-tudo');
const btnComplet = document.querySelector('#remover-finalizados');
const btnSave = document.querySelector('#salvar-tarefas');
const btnMoveUp = document.querySelector('#mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');

function addTask() {
  getBtn.addEventListener('click', () => {
    const createLi = document.createElement('li');
    if (getInput.value !== '') {
      createLi.className = 'list';
      createLi.innerText = getInput.value;
      getOl.appendChild(createLi);
    }
    if (getInput.value) {
      getInput.value = '';
    }
  });
}
addTask();

function change() {
  getOl.addEventListener('click', (event) => {
    const e = event.target;
    for (let i = 0; i < getLi.length; i += 1) {
      getLi[i].classList.remove('selected');
    }
    e.classList.add('selected');
  });
}
change();

function riskTask() {
  getOl.addEventListener('dblclick', (event) => {
    const e = event.target;
    if (e.classList.contains('completed')) {
      e.classList.remove('completed');
    } else {
      e.classList.add('completed');
    }
  });
}
riskTask();

function clearAll() {
  getClear.addEventListener('click', () => {
    getOl.innerText = '';
  });
}
clearAll();

function removeComplete() {
  btnComplet.addEventListener('click', () => {
    const getRisk = document.querySelectorAll('.completed');
    for (let i = 0; i < getRisk.length; i += 1) {
      getOl.removeChild(getRisk[i]);
    }
  });
}
removeComplete();

function saveTasks() {
  btnSave.addEventListener('click', () => {
    localStorage.setItem('save', getOl.innerHTML);
  });
  if (localStorage.save) {
    getOl.innerHTML = localStorage.getItem('save');
  }
}
saveTasks();

function moveUp() {
  btnMoveUp.addEventListener('click', () => {
    const toUp = document.querySelector('.selected');
    if (toUp && toUp.previousSibling) {
      getOl.insertBefore(toUp, toUp.previousSibling);
    }
  });
}
moveUp();

function moveDown() {
  btnMoveDown.addEventListener('click', () => {
    const toDown = document.querySelector('.selected');
    if (toDown && toDown.nextSibling) {
      getOl.insertBefore(toDown.nextSibling, toDown);
    }
  });
}
moveDown();
