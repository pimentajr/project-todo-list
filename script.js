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

const listOl = document.createElement('ol');
listOl.id = 'lista-tarefas';
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
