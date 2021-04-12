const getInput = document.querySelector('#texto-tarefa');
const getButton = document.querySelector('#criar-tarefa');
const getOl = document.querySelector('#lista-tarefas');
const getLi = document.getElementsByClassName('list');
const getClearButton = document.querySelector('#apaga-tudo');
const getCompletedButton = document.querySelector('#remover-finalizados');
const getCompletedCss = document.getElementsByClassName('completed');
const getSaveButton = document.querySelector('#salvar-tarefas');
const getMoveUpButton = document.querySelector('#mover-cima');
const getMoveDownButton = document.querySelector('#mover-baixo');
const getRemoveSelectedButton = document.querySelector('#remover-selecionado');

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

function removeCompletedButton() {
  getCompletedButton.addEventListener('click', () => {
    while (getCompletedCss.length > 0) {
      getCompletedCss[0].remove();
    }
  });
}
removeCompletedButton();
/* stackoverflow = https://stackoverflow.com/questions/4777077/removing-elements-by-class-name */
/* documentação while = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while */

function saveTasks() {
  getSaveButton.addEventListener('click', () => {
    localStorage.setItem('saveTask', getOl.innerHTML);
  });
  const saved = localStorage.getItem('saveTask');
  if (saved) getOl.innerHTML = saved;
}
/* save with localStorage = https://gomakethings.com/saving-html-to-localstorage-with-vanilla-js/ */

function moveUpList() {
  getMoveUpButton.addEventListener('click', () => {
    for (let index = 0; index < getLi.length; index += 1) {
      if (getLi[index].style.backgroundColor === 'rgb(128, 128, 128)' && getLi[index].previousElementSibling !== null) {
        const getIndex = getLi[index];
        getOl.insertBefore(getIndex, getIndex.previousSibling)
      }
    }
  })
}

function moveDownList() {
  getMoveDownButton.addEventListener('click', () => {
    for (let index = getLi.length - 1; index >= 0; index -= 1) {
      if (getLi[index].style.backgroundColor === 'rgb(128, 128, 128)' && getLi[index].nextElementSibling !== null) {
        const getIndex2 = getLi[index]
        getOl.insertBefore(getIndex2.nextSibling, getIndex2)
      }
    }
  })
}
/* mover itens = https://www.codegrepper.com/code-examples/javascript/javascript+move+list+items+up+and+down */

function removeSelected() {
  getRemoveSelectedButton.addEventListener('click', () => {
    for(let index = 0; index < getLi.length; index += 1) {
      if(getLi[index].style.backgroundColor === 'rgb(128, 128, 128)') {
        getLi[index].remove()
      }
    }
  })
}

window.onload = () => {
  saveTasks();
  moveUpList();
  moveDownList();
  removeSelected();
};
