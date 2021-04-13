const body = document.querySelector('body');
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
