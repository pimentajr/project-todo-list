const getInput = document.querySelector('#texto-tarefa');
const getButton = document.querySelector('#criar-tarefa');
const getOl = document.querySelector('#lista-tarefas');
const getLi = document.getElementsByClassName('list');

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

function clickListModifiesColor(color) {
  getOl.addEventListener('click', (event) => {
    for (let index = 0; index < getLi.length; index += 1) {
      const myEvent = event.target;
      getLi[index].style.backgroundColor = null;
      if (!getLi[index].style.backgroundColor) {
        myEvent.style.backgroundColor = color;
      }
    }
  });
}
clickListModifiesColor('rgb(128, 128, 128)');
