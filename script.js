const getInput = document.querySelector('#texto-tarefa');
const getOl = document.querySelector('#lista-tarefas');
const getBtn = document.querySelector('#criar-tarefa');
const getLi = document.getElementsByTagName('li');
const getClear = document.getElementById('apaga-tudo');

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