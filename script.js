const textInput = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const elementOl = document.querySelector('#lista-tarefas');

function updateList() {
  const listUpdate = elementOl.children;
  return listUpdate;
}

function paintLine() {
  const myList = updateList();
  for (let i = 0; i < myList.length; i += 1) {
    myList[i].addEventListener('click', () => {
      const nowSelected = document.querySelector('.selected');
      if (nowSelected === null) {
        myList[i].classList = 'selected';
      } else {
        nowSelected.classList.remove('selected');
        myList[i].classList.add('selected');
      }
    });
  }
}

function crossOutLine() {
  const myList = updateList();
  for (let i = 0; i < myList.length; i += 1) {
    myList[i].addEventListener('dblclick', () => {
      if (myList[i].classList.contains('completed')) {
        myList[i].classList.remove('completed');
      } else {
        myList[i].classList.add('completed');
      }
    });
  }
}

addButton.addEventListener('click', () => {
  const valueText = document.createTextNode(textInput.value);
  const elementLi = document.createElement('li');
  elementOl.appendChild(elementLi);
  elementLi.appendChild(valueText);
  textInput.value = '';
  updateList();
  paintLine();
  crossOutLine();
});

crossOutLine();
