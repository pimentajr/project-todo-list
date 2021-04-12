const getInput = document.querySelector('#texto-tarefa');
const getButton = document.querySelector('#criar-tarefa');
const getOl = document.querySelector('#lista-tarefas');
const getLi = document.getElementsByClassName('list');
const getClearButton = document.querySelector('#apaga-tudo');

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

function doubleClickRiskText() {
  getOl.addEventListener('dblclick', (event) => {
    const myEvent = event.target;
    if (myEvent.className === 'list completed') {
      myEvent.classList.remove('completed');
    } else {
      myEvent.classList.add('completed');
    }
  });
  getOl.addEventListener('mousedown', (event) => {
    event.preventDefault();
  }, false);
}
doubleClickRiskText();
/* preventDefault source = https://stackoverflow.com/questions/880512/prevent-text-selection-after-double-click */

function clearButton() {
  getClearButton.addEventListener('click', () => {
    getOl.innerHTML = '';
  });
}
clearButton();
/* remove all child elements = https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript */