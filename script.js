const section1 = document.getElementById('section-1');

function createInput() {
  const inputUser = document.createElement('input');
  inputUser.setAttribute('type', 'text');
  inputUser.setAttribute('value', '');
  inputUser.id = 'texto-tarefa';

  section1.appendChild(inputUser);
}
createInput();

function createList() {
  const ol = document.createElement('ol');
  ol.id = 'lista-tarefas';

  section1.appendChild(ol);
}
createList();
const listItems = document.getElementById('lista-tarefas');
function buttonCreateItem(nameButton) {
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerText = nameButton;

  section1.appendChild(button);

  button.addEventListener('click', () => {
    const inputUser = document.getElementById('texto-tarefa');
    const list = document.createElement('li');
    list.className = 'list-item';
    list.innerText = inputUser.value;

    const boxList = document.getElementById('lista-tarefas');
    boxList.appendChild(list);

    inputUser.value = '';
  });
}
buttonCreateItem('Adicionar');

function select() {
  const boxItems = document.getElementById('lista-tarefas');

  boxItems.addEventListener('click', (event) => {
    const listItems = document.querySelectorAll('.list-item');

    for (let index = 0; index < listItems.length; index += 1) {
      listItems[index].classList.remove('select');
    } event.target.classList.add('select');
  });
}
select();
const itemSelect = document.getElementsByClassName('select');

function finished() {
  const boxItems = document.getElementById('lista-tarefas');

  boxItems.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed') === true) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}
finished();

function buttonClear(clearName) {
  const button = document.createElement('button');
  button.id = 'apaga-tudo';
  button.innerText = clearName;
  section1.appendChild(button);

  button.addEventListener('click', () => {
    const items = document.querySelectorAll('.list-item');

    for (let index = 0; index < items.length; index += 1) {
      items[index].parentNode.removeChild(items[index]);
    }
  });
}

buttonClear('Limpar Lista');

function buttonFinished(finishedName) {
  const buttonF = document.createElement('button');
  buttonF.id = 'remover-finalizados';
  buttonF.innerText = finishedName;
  section1.appendChild(buttonF);

  buttonF.addEventListener('click', () => {
    const finishedItems = document.querySelectorAll('.completed');
    for (let index = 0; index < finishedItems.length; index += 1) {
      finishedItems[index].parentNode.removeChild(finishedItems[index]);
    }
  });
}

buttonFinished('Remover Finalizados');

function buttonSave(saveName) {
  const saveButton = document.createElement('button');
  saveButton.id = 'salvar-tarefas';
  saveButton.innerText = saveName;
  section1.appendChild(saveButton);

  saveButton.addEventListener('click', () => {
    localStorage.setItem('lista-tarefas', listItems.innerHTML);
  });
  const saved = localStorage.getItem('lista-tarefas');
  listItems.innerHTML = saved;
}

buttonSave('Salvar Tarefas');

function buttonUp() {
  const moveUp = document.createElement('button');
  moveUp.id = 'mover-cima';
  moveUp.innerText = 'Mover Para Cima';
  section1.appendChild(moveUp);

  moveUp.addEventListener('click', () => {
    for (let index = 0; index < itemSelect.length; index += 1) {
      if (itemSelect[index].previousElementSibling != null) {
        const item = itemSelect[index];
        listItems.insertBefore(item, item.previousSibling);
      }
    }
  });
}

buttonUp();

function buttonDown() {
  const moveDown = document.createElement('button');
  moveDown.id = 'mover-baixo';
  moveDown.innerText = 'Mover Para Baixo';
  section1.appendChild(moveDown);

  moveDown.addEventListener('click', () => {
    
    for (let index = 0; index < itemSelect.length; index += 1) {
      if (itemSelect[index].nextElementSibling != null) {
        const item = itemSelect[index];
        listItems.insertBefore(item.nextSibling, item);
      }
    }
  });
}

buttonDown();

function buttonRemoveSelect() {
  const removeSelect = document.createElement('button');
  removeSelect.id = 'remover-selecionado';
  removeSelect.innerText = 'Remover Selecionado';
  section1.appendChild(removeSelect);

  removeSelect.addEventListener('click', () => {
    for (let index = 0; index < itemSelect.length; index += 1) {
      let classItem = itemSelect[index].className;
      if (classItem = 'select') {
        itemSelect[index].parentNode.removeChild(itemSelect[index]);
      }
    }
  });
}

buttonRemoveSelect();
