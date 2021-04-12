const getInput = document.querySelector('#texto-tarefa');
const getButton = document.querySelector('#criar-tarefa');
const getOl = document.querySelector('#lista-tarefas');

function createList(value) {
  const createLi = document.createElement('li');
  createLi.innerHTML = value;
  createLi.classList.add('list');
  getOl.appendChild(createLi);
}

function textInputClickButton() {
  getButton.addEventListener('click', () => {
    createList(getInput.value);
    getInput.value = '';
  });
}
textInputClickButton();
