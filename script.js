const cabecalho = document.createElement('header');
document.body.appendChild(cabecalho);
const title = document.createElement('h1');
title.innerText = 'Minha Lista de Tarefas';
cabecalho.appendChild(title);

const paragrafo = document.createElement('p');
paragrafo.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
paragrafo.id = 'funcionamento';
document.body.appendChild(paragrafo);

function createInputText() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.id = 'texto-tarefa';
  div.appendChild(input);
}

createInputText();
function createList() {
  const div2 = document.createElement('div');
  document.body.appendChild(div2);
  const list = document.createElement('ol');
  list.id = 'lista-tarefas';
  div2.appendChild(list);
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerText = 'Adicionar';
  div2.appendChild(button);

  button.addEventListener('click', () => {
    const getInput = document.getElementById('texto-tarefa');
    const itemList = document.createElement('li');
    list.appendChild(itemList);
    itemList.innerText = getInput.value;
    itemList.className = 'item';
    getInput.value = '';
  });
}
createList();

function backgroundList() {
  const getList = document.querySelector('#lista-tarefas');

  getList.addEventListener('click', (colorChange) => {
    const getItemList = document.querySelector('li');
    const evtColor = colorChange.target;
    if (evtColor.className === 'item') {
      evtColor.className += ' selected';
    }
    console.log(getItemList);
  });
}
backgroundList();
