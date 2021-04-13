const getInput = document.querySelector('#texto-tarefa');
const getOl = document.querySelector('#lista-tarefas');
const getBtn = document.querySelector('#criar-tarefa');
const getLi = document.getElementsByTagName('li');

function addTask() {
  getBtn.addEventListener('click', () => {
    const createLi = document.createElement('li');
    if (getInput.value !== '') {
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
