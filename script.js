const textInput = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const elementOl = document.querySelector('#lista-tarefas');

function getList() {
  const listUpdate = elementOl.children;
  return listUpdate;
}

function paintLine() {
  const myList = getList();
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
  const myList = document.querySelector('ol');

  myList.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('completed')) {
      e.target.classList.remove('completed');
    } else {
      e.target.classList.add('completed');
    }
  });
}

crossOutLine();

function deleteList() {
  const delButton = document.querySelector('#apaga-tudo');

  delButton.addEventListener('click', () => {
    elementOl.innerHTML = '';
  });
}

deleteList();

function deleteCompleted() {
  const delButton = document.querySelector('#remover-finalizados');

  delButton.addEventListener('click', () => {
    const completedList = document.getElementsByClassName('completed');
    for (let i = 0; i < completedList.length; i += 1) {
      elementOl.removeChild(completedList[i]);
    }
  });
}

deleteCompleted();

function deleteSelected() {
  const delButton = document.querySelector('#remover-selecionado');

  delButton.addEventListener('click', () => {
    const selectedItem = document.querySelector('.selected');
    elementOl.removeChild(selectedItem);
  });
  getList();
  paintLine();
  deleteList();
  deleteCompleted();
}

deleteSelected();

addButton.addEventListener('click', () => {
  const valueText = document.createTextNode(textInput.value);
  const elementLi = document.createElement('li');
  elementOl.appendChild(elementLi);
  elementLi.appendChild(valueText);
  textInput.value = '';
  getList();
  paintLine();
  deleteList();
  deleteCompleted();
});

const saveButton = document.getElementById('salvar-tarefas');

saveButton.addEventListener('click', () => {
  const myList = elementOl.innerHTML;
  localStorage.setItem('app', myList);
});

function loadToDoList() {
  const loadedList = localStorage.getItem('app');
  if (loadedList !== null) {
    elementOl.innerHTML = loadedList;
    getList();
    paintLine();
    deleteList();
    deleteCompleted();
  }
}

loadToDoList();

const moveUpButton = document.getElementById('mover-cima');

moveUpButton.addEventListener('click', () => {
  const myList = elementOl;
  const selectedLi = document.querySelector('.selected');

  if (selectedLi) {
    const moveUp = selectedLi.previousElementSibling;
    if (moveUp) {
      myList.insertBefore(selectedLi, moveUp);
    }
  }
  getList();
  paintLine();
  deleteList();
  deleteCompleted();
});

const moveDownButton = document.getElementById('mover-baixo');

moveDownButton.addEventListener('click', () => {
  const myList = elementOl;
  const selectedLi = document.querySelector('.selected');

  if (selectedLi) {
    const moveDown = selectedLi.nextElementSibling;
    if (moveDown) {
      myList.insertBefore(selectedLi, moveDown.nextElementSibling);
    }
  }
  getList();
  paintLine();
  deleteList();
  deleteCompleted();
});
