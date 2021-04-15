const body = document.querySelector('body');
body.id = 'body';
const header = document.createElement('header');
header.innerText = 'Minha Lista de Tarefas';
header.id = 'header';
body.appendChild(header);

const paragraph = document.createElement('p');
paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
paragraph.id = 'funcionamento';
body.appendChild(paragraph);

const textBox = document.createElement('input');
textBox.id = 'texto-tarefa';
body.appendChild(textBox);

const boxButton = document.createElement('div');
boxButton.id = 'boxButton';
body.appendChild(boxButton);

const button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerText = 'adicionar tarefa';
boxButton.appendChild(button);

const buttonClear = document.createElement('button');
buttonClear.id = 'apaga-tudo';
buttonClear.innerText = 'limpar lista tarefas';
boxButton.appendChild(buttonClear);

const buttonRemove = document.createElement('button');
buttonRemove.id = 'remover-finalizados';
buttonRemove.innerText = 'remover finalizados';
boxButton.appendChild(buttonRemove);

const buttonSave = document.createElement('button');
buttonSave.id = 'salvar-tarefas';
buttonSave.innerText = 'salvar tarefas ';
boxButton.appendChild(buttonSave);

const buttonMoveGoUp = document.createElement('button');
buttonMoveGoUp.id = 'mover-cima';
buttonMoveGoUp.innerText = 'mover item para cima ';
boxButton.appendChild(buttonMoveGoUp);

const buttonMoveLow = document.createElement('button');
buttonMoveLow.id = 'mover-baixo';
buttonMoveLow.innerText = 'mover item para baixo';
boxButton.appendChild(buttonMoveLow);

const buttonRemoveCheck = document.createElement('button');
buttonRemoveCheck.id = 'remover-selecionado';
buttonRemoveCheck.innerText = 'remover-selecionado ';
boxButton.appendChild(buttonRemoveCheck);

const listOl = document.createElement('ol');
listOl.id = 'lista-tarefas';
if (localStorage.getItem('listaOL') !== null) {
  const objSalvo = JSON.parse(localStorage.getItem('listaOL'));
  listOl.innerHTML = objSalvo;
}
body.appendChild(listOl);

function addItens() {
  const li = document.createElement('li');
  li.innerText = textBox.value;
  li.addEventListener('click', (event) => {
    if (document.querySelector('.color') !== null) {
      document.querySelector('.color').classList.remove('color');
    }
    event.target.classList.add('color');
  });
  li.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
  listOl.appendChild(li);
}

function removeText() {
  if (textBox.value.length > 0) {
    textBox.value = '';
  }
}

button.addEventListener('click', () => {
  addItens();
  removeText();
});

function removeList() {
  while (listOl.firstChild) {
    listOl.removeChild(listOl.firstChild);
  }
}

buttonClear.addEventListener('click', () => {
  removeList();
});

buttonRemove.addEventListener('click', () => {
  const completed = document.querySelectorAll('.completed');
  for (let index = 0; index < completed.length; index += 1) {
    const classe = completed[index];
    listOl.removeChild(classe);
  }
});

buttonSave.addEventListener('click', () => {
  const qryOL = document.querySelector('#lista-tarefas');
  const jsonOL = JSON.stringify(qryOL.innerHTML);
  localStorage.setItem('listaOL', jsonOL);
});

buttonMoveGoUp.addEventListener('click', () => {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    const lis = li[index];
    if (lis.classList.contains('color') && index > 0) {
      listOl.removeChild(lis);
      listOl.insertBefore(lis, listOl.children[index - 1]);
    }
  }
});

buttonMoveLow.addEventListener('click', () => {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    const lis = li[index];
    if (lis.classList.contains('color') && index < (li.length - 1)) {
      listOl.removeChild(lis);
      listOl.insertBefore(lis, listOl.children[index + 1]);
    }
  }
});

buttonRemoveCheck.addEventListener('click', () => {
  const colorCheck = document.querySelectorAll('.color');

  for (let index = 0; index < colorCheck.length; index += 1) {
    const colors = colorCheck[index];
    listOl.removeChild(colors);
  }
});
